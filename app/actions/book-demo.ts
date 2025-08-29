"use server";

import { sendEmail } from "@/lib/email";

export async function submitDemoRequest(formData: FormData) {
  console.log("Demo request submission started");

  try {
    // Extract form data
    const fullName = formData.get("fullName") as string;
    const companyName = formData.get("companyName") as string;
    const contactEmail = formData.get("contactEmail") as string;
    const demoType = formData.get("demoType") as string;

    console.log("Form data extracted:", {
      fullName,
      companyName,
      contactEmail,
      demoType,
    });

    // Validate required fields
    if (!fullName || !companyName || !contactEmail || !demoType) {
      console.log("Validation failed: missing required fields");
      return {
        success: false,
        error: "Please fill in all required fields",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      console.log("Validation failed: invalid email format");
      return {
        success: false,
        error: "Please enter a valid email address",
      };
    }

    // Generate email HTML for demo request
    const demoEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Demo Request</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #6320ce; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #6320ce; }
          .value { margin-top: 5px; }
          .demo-badge { background: #e8f4fd; padding: 10px; border-radius: 5px; color: #6320ce; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Demo Request</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Contact Name:</div>
              <div class="value">${fullName}</div>
            </div>
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${companyName}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${contactEmail}</div>
            </div>
            <div class="field">
              <div class="label">Requested Demo:</div>
              <div class="demo-badge">${
                demoType.charAt(0).toUpperCase() +
                demoType.slice(1).replace("-", " ")
              }</div>
            </div>
            <div class="field">
              <div class="label">Submission Time:</div>
              <div class="value">${new Date().toISOString()}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log("Sending demo request email to ahany263@gmail.com...");
    // Send email to company
    const emailResult = await sendEmail({
      to: "info@makkn.com",
      subject: `New Demo Request from ${fullName} - ${companyName}`,
      html: demoEmailHTML,
    });

    console.log("Email result:", emailResult);

    if (!emailResult.success) {
      console.error("Failed to send demo request email:", emailResult.error);
      return {
        success: false,
        error:
          "Failed to send demo request. Please try again or contact us directly at info@makkn.com",
        details: emailResult.error,
      };
    }

    console.log("Sending confirmation email to user...");
    // Send confirmation email to the user
    const confirmationHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Demo Request Confirmed - MAKKN</title>
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
            <h1>Demo Request Confirmed</h1>
          </div>
          <div class="content">
            <p>Dear ${fullName},</p>
            <p>Thank you for requesting a demo of our <strong>${
              demoType.charAt(0).toUpperCase() +
              demoType.slice(1).replace("-", " ")
            }</strong> solution.</p>
            <p>Our team will review your request and get back to you within 24 hours to schedule your personalized demo.</p>
            <p>In the meantime, feel free to explore our website or contact us directly at info@makkn.com if you have any questions.</p>
            <p>Best regards,<br>The MAKKN Team</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Try to send confirmation email, but don't fail the whole process if it fails
    try {
      await sendEmail({
        to: contactEmail,
        subject: "Demo Request Confirmed - MAKKN will contact you soon",
        html: confirmationHTML,
      });
      console.log("Confirmation email sent successfully");
    } catch (confirmationError) {
      console.warn(
        "Failed to send confirmation email, but demo request was processed:",
        confirmationError
      );
    }

    console.log("Demo request submission completed successfully");
    return {
      success: true,
      message:
        "Your demo request has been submitted successfully. We'll contact you within 24 hours to schedule your demo.",
    };
  } catch (error) {
    console.error("Demo request submission error:", error);
    return {
      success: false,
      error:
        "An unexpected error occurred. Please try again or contact us directly at info@makkn.com",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
