"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { submitContactForm } from "@/app/actions/contact";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError(null);
    setSuccessMessage(null);

    try {
      const formData = new FormData(e.target as HTMLFormElement);

      // Client-side validation before sending
      const firstName = formData.get("firstName") as string;
      const lastName = formData.get("lastName") as string;
      const email = formData.get("email") as string;
      const company = formData.get("company") as string;
      const jobTitle = formData.get("jobTitle") as string;
      const message = formData.get("message") as string;

      if (
        !firstName ||
        !lastName ||
        !email ||
        !company ||
        !jobTitle ||
        !message
      ) {
        setFormError(
          "Please fill in all required fields (First Name, Last Name, Email, Company, Job Title, Message)"
        );
        setIsLoading(false);
        return;
      }

      console.log("Submitting contact form with data:", {
        firstName,
        lastName,
        email,
        company,
        jobTitle,
      });

      const result = await submitContactForm(formData);

      console.log("Contact form result:", result);

      if (result.success) {
        setFormSubmitted(true);
        setSuccessMessage(
          result.message || "Your message has been sent successfully!"
        );

        // Reset form after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
          setSuccessMessage(null);
          const form = e.target as HTMLFormElement;
          form.reset();
        }, 5000);
      } else {
        console.error("Contact form failed:", result.error, result.details);
        setFormError(
          result.error || "An error occurred while sending your message."
        );

        // Show additional details in development
        if (process.env.NODE_ENV === "development" && result.details) {
          setFormError(`${result.error}\n\nDetails: ${result.details}`);
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError(
        "An unexpected error occurred. Please try again or email us directly at info@makkn.com."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />

      <main className="flex-1">
        <section className="w-full py-8 md:py-12 bg-gradient-to-b from-[#F5F3FF] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6320ce]">
                    Contact Us
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground">
                    Have questions about our products or need a custom solution?
                    Our team is here to help
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <div className="container mx-auto max-w-4xl py-8 md:py-12">
          <div className="mx-auto max-w-md px-4 sm:px-0">
            <AnimateOnScroll>
              {formError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {formError}
                </div>
              )}

              {successMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
                  {successMessage}
                </div>
              )}

              {!formSubmitted ? (
                <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="Your Position"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+20 123 456 7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your needs and how we can help"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="text-[#6D2FD5] hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-[#6D2FD5] hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </div>
              ) : (
                <div className="rounded-lg border bg-card p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#6D2FD5] mb-2">
                    Thank You!
                  </h3>
                  <p>
                    Your message has been sent. Our team will get back to you
                    shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setFormSubmitted(false);
                      setSuccessMessage(null);
                    }}
                    className="mt-4 bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
