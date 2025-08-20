import { type NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message } = await request.json()

    const testEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Email Configuration Test</title>
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
            <h1>Email Configuration Test</h1>
          </div>
          <div class="content">
            <p>This is a test email to verify that the email configuration is working correctly.</p>
            <p><strong>Test Message:</strong> ${message}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <p>If you received this email, the email configuration is working properly!</p>
          </div>
        </div>
      </body>
      </html>
    `

    const result = await sendEmail({
      to,
      subject,
      html: testEmailHTML,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Test email API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
