"use server"

import { sendEmail, generateCareerEmailHTML } from "@/lib/email"

export async function submitCareerApplication(formData: FormData) {
  console.log("Career application submission started")

  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const linkedin = formData.get("linkedin") as string
    const message = formData.get("message") as string
    const resume = formData.get("resume") as File

    console.log("Form data extracted:", {
      firstName,
      lastName,
      email,
      phone: phone ? "provided" : "not provided",
      linkedin: linkedin ? "provided" : "not provided",
      message: message ? "provided" : "not provided",
      resumeSize: resume?.size,
      resumeType: resume?.type,
      resumeName: resume?.name,
    })

    // Validate required fields
    if (!firstName || !lastName || !email) {
      console.log("Validation failed: missing required fields")
      return {
        success: false,
        error: "Please fill in all required fields (First Name, Last Name, Email)",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("Validation failed: invalid email format")
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    // Validate resume file
    if (!resume || resume.size === 0) {
      console.log("Validation failed: no resume file")
      return {
        success: false,
        error: "Please upload your resume",
      }
    }

    // Check file size (5MB limit)
    if (resume.size > 5 * 1024 * 1024) {
      console.log("Validation failed: file too large")
      return {
        success: false,
        error: "Resume file size must be less than 5MB",
      }
    }

    // Check file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!allowedTypes.includes(resume.type)) {
      console.log("Validation failed: invalid file type", resume.type)
      return {
        success: false,
        error: "Please upload a PDF or Word document",
      }
    }

    console.log("All validations passed, preparing email...")

    // Prepare email data
    const emailData = {
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      linkedin: linkedin || undefined,
      message: message || undefined,
      resumeFileName: resume.name,
    }

    // Generate email HTML
    const emailHTML = generateCareerEmailHTML(emailData)

    // Convert resume to buffer for attachment
    console.log(`Preparing resume attachment: ${resume.name}, type: ${resume.type}, size: ${resume.size}`)
    const resumeBuffer = Buffer.from(await resume.arrayBuffer())
    if (!resumeBuffer || resumeBuffer.length === 0) {
      console.error("Failed to create resume buffer or buffer is empty.")
      return {
        success: false,
        error: "Error processing resume file. Please try again.",
      }
    }
    console.log("Resume buffer created successfully.")

    const emailAttachments = [
      {
        filename: resume.name,
        content: resumeBuffer,
        contentType: resume.type,
      },
    ]

    console.log("Sending career application email to info@makkn.com...")

    // Send email to info@makkn.com
    const emailResult = await sendEmail({
      to: "info@makkn.com",
      subject: `New Job Application from ${firstName} ${lastName}`,
      html: emailHTML,
      attachments: emailAttachments, // Add this line
    })

    console.log("Email result:", emailResult)

    if (!emailResult.success) {
      console.error("Failed to send career application email:", emailResult.error)
      return {
        success: false,
        error: "Failed to send application. Please try again or email us directly at info@makkn.com",
        details: emailResult.error,
      }
    }

    console.log("Sending confirmation email to applicant...")

    // Send confirmation email to the applicant
    const confirmationHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Application Received - MAKKN</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #6320ce; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Application Received</h1>
          </div>
          <div class="content">
            <p>Dear ${firstName},</p>
            <p>Thank you for your interest in joining the MAKKN team. We have successfully received your application.</p>
            <p>Our HR team will review your application and contact you if there's a match for current or future opportunities.</p>
            <p>We appreciate your interest in MAKKN and wish you the best in your career journey.</p>
            <p>Best regards,<br>The MAKKN HR Team</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Try to send confirmation email, but don't fail the whole process if it fails
    try {
      await sendEmail({
        to: email,
        subject: "Application Received - Thank you for your interest in MAKKN",
        html: confirmationHTML,
      })
      console.log("Confirmation email sent successfully")
    } catch (confirmationError) {
      console.warn("Failed to send confirmation email, but application was processed:", confirmationError)
    }

    console.log("Career application submission completed successfully")
    return {
      success: true,
      message: "Your application has been submitted successfully. We'll review it and contact you if there's a match.",
    }
  } catch (error) {
    console.error("Career application submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again or email us directly at info@makkn.com",
      details: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
