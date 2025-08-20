import nodemailer from "nodemailer"

interface EmailData {
  to: string
  subject: string
  html: string
  text?: string
  attachments?: Array<{
    filename: string
    content: Buffer
    contentType: string
  }>
}

export async function sendEmail({ to, subject, html, text, attachments }: EmailData) {
  try {
    // Log environment variables for debugging (without sensitive data)
    console.log("Email configuration check:", {
      host: process.env.SMTP_HOST ? "✓" : "✗",
      port: process.env.SMTP_PORT ? "✓" : "✗",
      user: process.env.SMTP_USER ? "✓" : "✗",
      pass: process.env.SMTP_PASS ? "✓" : "✗",
      from: process.env.SMTP_FROM ? "✓" : "✗",
    })

    // Validate required environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error("Missing required SMTP configuration. Please check environment variables.")
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Add additional configuration for better compatibility
      tls: {
        rejectUnauthorized: false,
      },
      // Add timeout settings
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
    })

    // Verify connection configuration
    console.log("Verifying SMTP connection...")
    await transporter.verify()
    console.log("SMTP connection verified successfully")

    // Send mail
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ""), // Strip HTML for text version
      attachments: attachments || [],
    }

    console.log("Sending email to:", to)
    console.log("Email subject:", subject)
    console.log("Attachments count:", attachments?.length || 0)

    if (attachments && attachments.length > 0) {
      console.log(`Email includes ${attachments.length} attachment(s). First attachment: ${attachments[0].filename}`)
    } else {
      console.log("Email has no attachments.")
    }

    const info = await transporter.sendMail(mailOptions)

    console.log("Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Email sending failed:", error)

    // Provide more specific error messages
    let errorMessage = "Unknown error"
    if (error instanceof Error) {
      if (error.message.includes("ECONNREFUSED")) {
        errorMessage = "Cannot connect to email server. Please check SMTP configuration."
      } else if (error.message.includes("Invalid login")) {
        errorMessage = "Email authentication failed. Please check SMTP credentials."
      } else if (error.message.includes("timeout")) {
        errorMessage = "Email sending timed out. Please try again."
      } else {
        errorMessage = error.message
      }
    }

    return {
      success: false,
      error: errorMessage,
      details: error instanceof Error ? error.stack : undefined,
    }
  }
}

export function generateContactEmailHTML(data: {
  firstName: string
  lastName: string
  email: string
  company: string
  jobTitle: string
  phone?: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #6320ce; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #6320ce; }
        .value { margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #6320ce; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.firstName} ${data.lastName}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          <div class="field">
            <div class="label">Job Title:</div>
            <div class="value">${data.jobTitle}</div>
          </div>
          ${
            data.phone
              ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">Message:</div>
            <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export function generateCareerEmailHTML(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  linkedin?: string
  message?: string
  resumeFileName?: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Job Application</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #6320ce; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #6320ce; }
        .value { margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #6320ce; margin-top: 10px; }
        .resume-info { background: #e8f4fd; padding: 10px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Job Application</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.firstName} ${data.lastName}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          ${
            data.phone
              ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          `
              : ""
          }
          ${
            data.linkedin
              ? `
          <div class="field">
            <div class="label">LinkedIn:</div>
            <div class="value"><a href="${data.linkedin}">${data.linkedin}</a></div>
          </div>
          `
              : ""
          }
          ${
            data.resumeFileName
              ? `
          <div class="field">
            <div class="label">Resume:</div>
            <div class="resume-info">${data.resumeFileName} (Note: Resume attachment functionality will be implemented in the next update)</div>
          </div>
          `
              : ""
          }
          ${
            data.message
              ? `
          <div class="field">
            <div class="label">Cover Letter:</div>
            <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">Submission Time:</div>
            <div class="value">${new Date().toISOString()}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}
