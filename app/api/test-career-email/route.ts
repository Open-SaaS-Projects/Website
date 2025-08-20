import { type NextRequest, NextResponse } from "next/server"
import { sendEmail, generateCareerEmailHTML } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    console.log("Testing career email functionality...")

    // Test data
    const testData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phone: "+1234567890",
      linkedin: "https://linkedin.com/in/testuser",
      message: "This is a test application to verify the email functionality is working correctly.",
      resumeFileName: "test-resume.pdf",
    }

    // Generate email HTML
    const emailHTML = generateCareerEmailHTML(testData)

    console.log("Sending test career email...")

    // Send test email
    const result = await sendEmail({
      to: "info@makkn.com",
      subject: "TEST: Career Application Email Functionality",
      html: emailHTML,
    })

    console.log("Test email result:", result)

    return NextResponse.json({
      success: result.success,
      message: result.success ? "Test career email sent successfully!" : "Test career email failed",
      details: result,
    })
  } catch (error) {
    console.error("Test career email API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
