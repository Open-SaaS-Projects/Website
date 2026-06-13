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

  let resume_url: string | undefined;
  let resume_file_name: string | undefined;

  // Step 1 — Upload resume to Supabase Storage
  if (resumeFile && resumeFile.size > 0) {
    const timestamp = Date.now();
    const path = `${job_id}/${timestamp}-${resumeFile.name}`;
    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    const { error: uploadError } = await supabaseAdmin.storage
      .from("resumes")
      .upload(path, buffer, { contentType: resumeFile.type });

    if (uploadError) {
      return {
        success: false,
        error: "Failed to upload resume. Please try again.",
      };
    }

    // Generate signed URL valid for 7 days
    const { data: signedData, error: signedError } = await supabaseAdmin.storage
      .from("resumes")
      .createSignedUrl(path, 60 * 60 * 24 * 7);

    if (!signedError && signedData) {
      resume_url = signedData.signedUrl;
      resume_file_name = resumeFile.name;
    }
  }

  // Step 2 — Insert application into DB
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
      resume_url,
      status: "new",
    });

  if (insertError) {
    return {
      success: false,
      error: "Failed to submit application. Please try again.",
    };
  }

  // Step 3 — Send admin notification email
  await sendEmail({
    to: "info@makkn.com",
    subject: `New Application — ${job_title}`,
    html: generateAdminApplicationEmailHTML({
      firstName: first_name,
      lastName: last_name,
      email,
      jobTitle: job_title,
      coverLetter: cover_letter,
      resumeUrl: resume_url,
      resumeFileName: resume_file_name,
      submittedAt: new Date().toISOString(),
    }),
  });

  // Step 4 — Send applicant confirmation email
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
