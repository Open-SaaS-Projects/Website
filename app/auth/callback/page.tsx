"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log("=== CLIENT CALLBACK ===");
        console.log("URL:", window.location.href);
        console.log("Hash:", window.location.hash);
        console.log("Search:", window.location.search);

        // Check for errors in query params (expired/invalid links)
        const searchParams = new URLSearchParams(window.location.search);
        const authError = searchParams.get("error");
        const errorCode = searchParams.get("error_code");

        if (authError) {
          console.error("Auth error:", { error: authError, errorCode });
          if (errorCode === "otp_expired") {
            router.push("/admin/login?error=expired_link");
            return;
          }
          router.push("/admin/login?error=invalid_link");
          return;
        }

        // Extract tokens from hash fragment
        const hashParams = new URLSearchParams(
          window.location.hash.substring(1)
        );
        const accessToken = hashParams.get("access_token");
        const refreshToken = hashParams.get("refresh_token");

        if (!accessToken) {
          console.error("No access token in hash");
          router.push("/admin/login?error=invalid_link");
          return;
        }

        console.log("Setting session from hash tokens...");

        // Set the session
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken || "",
        });

        if (error) {
          console.error("Session error:", error);
          router.push("/admin/login?error=invalid_link");
          return;
        }

        console.log("User email:", data.user?.email);

        // Verify email
        const allowedEmails = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.toLowerCase()
          .split(",")
          .map((e) => e.trim()) || [];

        if (!allowedEmails.includes(data.user?.email?.toLowerCase() || "")) {
          console.error("Email mismatch - unauthorized");
          await supabase.auth.signOut();
          router.push("/admin/login?error=unauthorized");
          return;
        }

        // Send tokens to server to set httpOnly cookies
        console.log("Setting httpOnly cookies...");
        const cookieResponse = await fetch("/api/auth/set-cookies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accessToken, refreshToken }),
        });

        if (!cookieResponse.ok) {
          console.error("Failed to set cookies");
          router.push("/admin/login?error=invalid_link");
          return;
        }

        console.log("✓ Success - redirecting to /admin");
        router.push("/admin");
      } catch (err) {
        console.error("Callback error:", err);
        router.push("/admin/login?error=invalid_link");
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-600 border-r-transparent"></div>
        <p className="text-sm text-gray-600">Verifying your magic link...</p>
      </div>
    </div>
  );
}
