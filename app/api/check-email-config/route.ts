import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    // Check if all required environment variables are set
    const requiredVars = {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS,
      SMTP_FROM: process.env.SMTP_FROM,
    }

    const missingVars = Object.entries(requiredVars)
      .filter(([key, value]) => !value)
      .map(([key]) => key)

    if (missingVars.length > 0) {
      return NextResponse.json({
        success: false,
        error: `Missing environment variables: ${missingVars.join(", ")}`,
        config: Object.fromEntries(
          Object.entries(requiredVars).map(([key, value]) => [key, value ? "✓ Set" : "✗ Missing"]),
        ),
      })
    }

    // Test SMTP connection
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Verify connection
    await transporter.verify()

    return NextResponse.json({
      success: true,
      message: "Email configuration is valid and SMTP connection successful",
      config: {
        SMTP_HOST: `✓ ${process.env.SMTP_HOST}`,
        SMTP_PORT: `✓ ${process.env.SMTP_PORT}`,
        SMTP_USER: `✓ ${process.env.SMTP_USER}`,
        SMTP_PASS: "✓ Set (hidden)",
        SMTP_FROM: `✓ ${process.env.SMTP_FROM}`,
      },
    })
  } catch (error) {
    console.error("Email configuration check failed:", error)
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
