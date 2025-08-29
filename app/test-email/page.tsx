"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";

export default function TestEmailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const [configResult, setConfigResult] = useState<any>(null);
  const [isCheckingConfig, setIsCheckingConfig] = useState(false);

  const checkEmailConfiguration = async () => {
    setIsCheckingConfig(true);
    setConfigResult(null);

    try {
      const response = await fetch("/api/check-email-config");
      const data = await response.json();
      setConfigResult(data);
    } catch (error) {
      setConfigResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setIsCheckingConfig(false);
    }
  };

  const testEmailConfiguration = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "info@makkn.com",
          subject: "Email Configuration Test",
          message:
            "This is a test email to verify the email configuration is working correctly.",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "✅ Email sent successfully! Check info@makkn.com for the test email."
        );
      } else {
        setResult(`❌ Email failed: ${data.error}`);
      }
    } catch (error) {
      setResult(
        `❌ Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const testCareerEmail = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/test-career-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "✅ Career email sent successfully! Check info@makkn.com for the test email."
        );
      } else {
        setResult(
          `❌ Career email failed: ${data.error}\n\nDetails: ${JSON.stringify(
            data.details,
            null,
            2
          )}`
        );
      }
    } catch (error) {
      setResult(
        `❌ Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />

      <main className="flex-1">
        <div className="container max-w-2xl py-12">
          <h1 className="text-3xl font-bold mb-8">Email Configuration Test</h1>

          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Test Email Sending</h2>
              <p className="text-muted-foreground mb-4">
                Click the button below to send a test email to info@makkn.com
                and verify the email configuration.
              </p>

              <Button
                onClick={checkEmailConfiguration}
                disabled={isCheckingConfig}
                variant="outline"
                className="mr-4"
              >
                {isCheckingConfig
                  ? "Checking Configuration..."
                  : "Check Email Config"}
              </Button>

              <Button
                onClick={testCareerEmail}
                disabled={isLoading}
                className="bg-[#6320ce] hover:bg-[#6320ce]/90 mr-4"
              >
                {isLoading ? "Testing Career Email..." : "Test Career Email"}
              </Button>

              <Button
                onClick={testEmailConfiguration}
                disabled={isLoading}
                className="bg-[#6320ce] hover:bg-[#6320ce]/90"
              >
                {isLoading ? "Sending Test Email..." : "Send Test Email"}
              </Button>

              {result && (
                <div className="mt-4 p-4 border rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm">{result}</pre>
                </div>
              )}

              {configResult && (
                <div className="mt-4 p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">
                    Configuration Check Result:
                  </h3>
                  <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded">
                    {JSON.stringify(configResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Environment Variables Status
              </h2>
              <div className="space-y-2 text-sm font-mono">
                <div>
                  SMTP_HOST: {process.env.NEXT_PUBLIC_SMTP_HOST || "❌ Not set"}
                </div>
                <div>
                  SMTP_PORT: {process.env.NEXT_PUBLIC_SMTP_PORT || "❌ Not set"}
                </div>
                <div>
                  SMTP_USER: {process.env.NEXT_PUBLIC_SMTP_USER || "❌ Not set"}
                </div>
                <div>
                  SMTP_PASS:{" "}
                  {process.env.NEXT_PUBLIC_SMTP_PASS
                    ? "✅ Set (hidden)"
                    : "❌ Not set"}
                </div>
                <div>
                  SMTP_FROM: {process.env.NEXT_PUBLIC_SMTP_FROM || "❌ Not set"}
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
                <strong>Note:</strong> These are the client-side environment
                variables. Server-side variables (without NEXT_PUBLIC_) are used
                for actual email sending.
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Test Both Forms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Contact Form Test</h3>
                  <Button
                    onClick={() => window.open("/contact", "_blank")}
                    variant="outline"
                    className="w-full"
                  >
                    Open Contact Form
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Career Application Test
                  </h3>
                  <Button
                    onClick={() => window.open("/careers", "_blank")}
                    variant="outline"
                    className="w-full"
                  >
                    Open Careers Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MainFooter />
      <Chatbot />
    </div>
  );
}
