"use server";

import { supabaseAdmin } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import {
  sendEmail,
  generateAdminApplicationEmailHTML,
  generateApplicantConfirmationEmailHTML,
} from "@/lib/email";

export async function submitApplication(
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const job_id = formData.get("job_id") as string;
  const job_title = formData.get("job_title") as string;
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const cover_letter = formData.get("cover_letter") as string | undefined;
  const resumeFile = formData.get("resume") as File | null;

  // Validate required fields
  if (!job_id || !job_title || !first_name || !last_name || !email) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  let resume_path: string | undefined;
  let resume_file_name: string | undefined;

  // Step 1 — Upload resume to Supabase Storage
  if (resumeFile && resumeFile.size > 0) {
    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024;
    if (resumeFile.size > maxSize) {
      console.error(`File too large: ${resumeFile.name} (${resumeFile.size} bytes)`);
      return {
        success: false,
        error: "File size must be less than 5MB",
      };
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(resumeFile.type)) {
      console.error(`Invalid file type: ${resumeFile.name} (${resumeFile.type})`);
      return {
        success: false,
        error: "Please upload a PDF or DOCX file",
      };
    }

    // Sanitize filename for storage (handles em dashes, special unicode, etc.)
    // Preserves original filename for display in resume_file_name field
    const sanitizedName = resumeFile.name
      .normalize("NFD") // Normalize unicode (decompose accents, etc.)
      .replace(/[̀-ͯ]/g, "") // Remove diacritics
      .replace(/[^\w\s.-]/g, "") // Remove special chars entirely (em dash, ampersand, etc.)
      .replace(/\s+/g, "_") // Replace spaces with underscore
      .replace(/_{2,}/g, "_") // Collapse multiple underscores
      .replace(/\.+/g, ".") // Collapse multiple dots
      .replace(/^[._-]+|[._-]+$/g, "") // Remove leading/trailing special chars
      .trim(); // Remove whitespace

    console.log("File upload attempt:", {
      original: resumeFile.name,
      sanitized: sanitizedName,
      size: resumeFile.size,
      type: resumeFile.type,
    });

    const timestamp = Date.now();
    const path = `${job_id}/${timestamp}-${sanitizedName}`;
    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    const { error: uploadError } = await supabaseAdmin.storage
      .from("resumes")
      .upload(path, buffer, { contentType: resumeFile.type });

    if (uploadError) {
      console.error("Resume upload error:", uploadError);
      return {
        success: false,
        error: `Failed to upload resume: ${uploadError.message || "Please try again"}`,
      };
    }

    // Store the storage path only — signed URLs are generated on demand
    resume_path = path;
    resume_file_name = resumeFile.name;
  }

  // Step 2 — Check for duplicate application
  const { data: existingApplication } = await supabaseAdmin
    .from("applications")
    .select("id")
    .eq("job_id", job_id)
    .eq("email", email)
    .single();

  if (existingApplication) {
    return {
      success: false,
      error: "You have already applied for this position.",
    };
  }

  // Step 3 — Insert application into DB
  const { error: insertError } = await supabaseAdmin
    .from("applications")
    .insert({
      job_id,
      job_title,
      first_name,
      last_name,
      email,
      cover_letter,
      resume_file_name,
      resume_path,
      status: "new",
    });

  if (insertError) {
    return {
      success: false,
      error: "Failed to submit application. Please try again.",
    };
  }

  // Step 4 — Send admin notification email
  // Generate a short-lived signed URL only for the email (1 hour); it is never stored.
  let emailResumeUrl: string | undefined;
  if (resume_path) {
    const { data: signedData } = await supabaseAdmin.storage
      .from("resumes")
      .createSignedUrl(resume_path, 60 * 60);
    emailResumeUrl = signedData?.signedUrl;
  }

  await sendEmail({
    to: "info@makkn.com",
    subject: `New Application — ${job_title}`,
    html: generateAdminApplicationEmailHTML({
      firstName: first_name,
      lastName: last_name,
      email,
      jobTitle: job_title,
      coverLetter: cover_letter,
      resumeUrl: emailResumeUrl,
      resumeFileName: resume_file_name,
      submittedAt: new Date().toISOString(),
    }),
  });

  // Step 5 — Send applicant confirmation email
  await sendEmail({
    to: email,
    subject: `We received your application — ${job_title}`,
    html: generateApplicantConfirmationEmailHTML({
      firstName: first_name,
      jobTitle: job_title,
    }),
  });

  revalidatePath("/admin");
  return { success: true };
}
