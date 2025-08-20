"use server"

import { sendEmail, generateContactEmailHTML } from "@/lib/email"

export async function submitContactForm(formData: FormData) {
  console.log("Contact form submission started")

  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const jobTitle = formData.get("jobTitle") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    console.log("Form data extracted:", { firstName, lastName, email, company, jobTitle })

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !jobTitle || !message) {
      console.log("Validation failed: missing required fields")
      return {
        success: false,
        error: "Please fill in all required fields",
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

    // Prepare email data
    const emailData = {
      firstName,
      lastName,
      email,
      company,
      jobTitle,
      phone: phone || undefined,
      message,
    }

    console.log("Generating email HTML...")
    // Generate email HTML
    const emailHTML = generateContactEmailHTML(emailData)

    console.log("Sending email to info@makkn.com...")
    // Send email to info@makkn.com
    const emailResult = await sendEmail({
      to: "info@makkn.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName} - ${company}`,
      html: emailHTML,
    })

    console.log("Email result:", emailResult)

    if (!emailResult.success) {
      console.error("Failed to send contact email:", emailResult.error)
      return {
        success: false,
        error: "Failed to send email. Please try again or contact us directly at info@makkn.com",
        details: emailResult.error,
      }
    }

    console.log("Sending confirmation email to user...")
    // Send confirmation email to the user
    const confirmationHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank you for contacting MAKKN</title>
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
            <h1>Thank You for Contacting MAKKN</h1>
          </div>
          <div class="content">
            <p>Dear ${firstName},</p>
            <p>Thank you for reaching out to us. We have received your message and our team will get back to you within 24 hours.</p>
            <p>If you have any urgent questions, please don't hesitate to contact us directly at info@makkn.com.</p>
            <p>Best regards,<br>The MAKKN Team</p>
          </div>
        </div>
      </body>
      </html>
    `

    await sendEmail({
      to: email,
      subject: "Thank you for contacting MAKKN - We'll be in touch soon",
      html: confirmationHTML,
    })

    console.log("Contact form submission completed successfully")
    return {
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon!",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again or contact us directly at info@makkn.com",
      details: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
