"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

function AdminLoginContent() {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error");
  const errorDetails = searchParams.get("details");

  const urlErrorMessage =
    urlError === "unauthorized"
      ? "This email is not authorized to access the admin panel."
      : urlError === "invalid_link"
        ? "This magic link is invalid or has expired. Please request a new one."
        : urlError === "expired_link"
          ? "This magic link has expired. Please request a new one."
          : urlError === "auth_failed"
            ? `Authentication failed: ${errorDetails || "unknown error"}`
            : null;

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Defensive check for NEXT_PUBLIC_SITE_URL
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
      console.error(
        "NEXT_PUBLIC_SITE_URL is not set. Magic link redirects will fail."
      );
      setError("Server configuration error. Please contact support.");
      return;
    }

    // Client-side whitelist check — avoid unnecessary Supabase calls
    const allowedEmails =
      process.env.NEXT_PUBLIC_ADMIN_EMAIL?.toLowerCase()
        .split(",")
        .map((e) => e.trim()) || [];

    if (!allowedEmails.includes(email.toLowerCase())) {
      setError("This email is not authorized to access the admin panel.");
      return;
    }

    setIsPending(true);

    const { error: otpError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${siteUrl}/auth/callback`,
      },
    });

    setIsPending(false);

    if (otpError) {
      console.error("Magic link send error:", otpError);
      const errorMessage =
        otpError.message.includes("429") || otpError.status === 429
          ? "Too many requests. Please wait a few minutes and try again."
          : otpError.message.includes("Email rate limit")
            ? "Email rate limit exceeded. Please wait 5-10 minutes and try again."
            : `Failed to send magic link: ${otpError.message}`;
      setError(errorMessage);
      return;
    }

    setSent(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-8 w-28 overflow-hidden">
            <img
              src="/makkn-logo.webp"
              alt="MAKKN"
              className="absolute left-1/2 top-1/2 h-32 w-32 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
        </div>

        {sent ? (
          // ── Success state ──
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
              <svg
                className="h-6 w-6 text-[#6320ce]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold text-gray-900">
              Check your email
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              link is sent to{" "}
              <span className="font-medium text-gray-600">{email}</span>. Click
              it to sign in.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-xs text-gray-400 hover:text-gray-600"
            >
              Use a different email
            </button>
          </div>
        ) : (
          // ── Login form ──
          <>
            <h1 className="mb-1 text-lg font-semibold text-gray-900">
              Admin sign in
            </h1>
            {urlErrorMessage && (
              <p className="mb-4 rounded-lg bg-rose-50 px-4 py-2.5 text-xs text-rose-600">
                {urlErrorMessage}
              </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
                />
              </div>

              {error && (
                <p className="rounded-lg bg-rose-50 px-4 py-2.5 text-xs text-rose-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-full bg-[#6320ce] py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {isPending ? "Sending Link..." : "Sign in"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <AdminLoginContent />
    </Suspense>
  );
}
