"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { submitCareerApplication } from "@/app/actions/careers";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";

export default function CareersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setFormError("File size must be less than 5MB");
        return;
      }

      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setFormError("Please upload a PDF or Word document");
        return;
      }

      setSelectedFile(file);
      setFormError(null);
    }
  };

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
      const resume = formData.get("resume") as File;

      if (!firstName || !lastName || !email) {
        setFormError(
          "Please fill in all required fields (First Name, Last Name, Email)"
        );
        setIsLoading(false);
        return;
      }

      if (!resume || resume.size === 0) {
        setFormError("Please upload your resume");
        setIsLoading(false);
        return;
      }

      console.log("Submitting career application with data:", {
        firstName,
        lastName,
        email,
        resumeSize: resume.size,
        resumeType: resume.type,
      });

      const result = await submitCareerApplication(formData);

      console.log("Career application result:", result);

      if (result.success) {
        setFormSubmitted(true);
        setSuccessMessage(
          result.message || "Your application has been submitted successfully!"
        );
        setSelectedFile(null);

        // Reset form after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
          setSuccessMessage(null);
          const form = e.target as HTMLFormElement;
          form.reset();
        }, 5000);
      } else {
        console.error(
          "Career application failed:",
          result.error,
          result.details
        );
        setFormError(
          result.error || "An error occurred while submitting your application."
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
      {/* Header */}
      <MainNavigation />

      <main className="flex-1">
        <section className="w-full py-8 md:py-12 bg-gradient-to-b from-[#F5F3FF] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6320ce]">
                    Join Our Team
                  </h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Help us build the future of AI Solutions for businesses
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="w-full py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <AnimateOnScroll>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#6320ce]">
                    Open Positions
                  </h2>
                  <div className="rounded-lg border p-8 text-center bg-gray-50">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="p-3 bg-[#F5F3FF] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#6D2FD5]"
                        >
                          <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5" />
                          <path d="M16 2v4" />
                          <path d="M8 2v4" />
                          <path d="M3 10h18" />
                          <circle cx="18" cy="18" r="4" />
                          <path d="M18 16.5v1.5h1.5" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-[#6320ce]">
                        No Open Positions
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        We're not hiring right now, but feel free to check back
                        soon! We're always looking for talented individuals to
                        join our team. Upload your resume for future positions.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Application Form */}
              <AnimateOnScroll>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#6320ce]">
                    Submit Your Application
                  </h2>

                  {formError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                      {formError}
                    </div>
                  )}

                  {successMessage && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
                      {successMessage}
                    </div>
                  )}

                  {!formSubmitted ? (
                    <div className="rounded-lg border p-6 bg-white">
                      <form onSubmit={handleSubmit} className="space-y-4">
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
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
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
                          <Label htmlFor="linkedin">LinkedIn Profile</Label>
                          <Input
                            id="linkedin"
                            name="linkedin"
                            type="url"
                            placeholder="https://linkedin.com/in/yourprofile"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Cover Letter</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about yourself and why you'd like to join MAKKN"
                            className="min-h-[120px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="resume">Resume/CV *</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              ref={fileInputRef}
                              id="resume"
                              name="resume"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              onChange={handleFileChange}
                              required
                            />
                            <Button
                              type="button"
                              variant="outline"
                              className="flex-1"
                              onClick={() => fileInputRef.current?.click()}
                            >
                              <Upload className="mr-2 h-4 w-4" />
                              {selectedFile ? selectedFile.name : "Choose File"}
                            </Button>
                          </div>
                          {selectedFile && (
                            <p className="text-xs text-muted-foreground">
                              Selected file: {selectedFile.name} (
                              {Math.round(selectedFile.size / 1024)} KB)
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground">
                            Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                          </p>
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full"
                          disabled={isLoading}
                        >
                          {isLoading ? "Submitting..." : "Submit Application"}
                        </Button>
                      </form>
                    </div>
                  ) : (
                    <div className="rounded-lg border p-6 text-center bg-white">
                      <h3 className="text-xl font-semibold text-[#6D2FD5] mb-2">
                        Thank You!
                      </h3>
                      <p>
                        Your application has been submitted. We'll review it and
                        contact you if there's a match.
                      </p>
                      <Button
                        onClick={() => {
                          setFormSubmitted(false);
                          setSuccessMessage(null);
                        }}
                        className="mt-4 bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full"
                      >
                        Submit Another Application
                      </Button>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}
