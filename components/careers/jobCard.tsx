"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Upload,
  MapPin,
  Briefcase,
  Building2,
} from "lucide-react";
import type { Job } from "@/app/actions/jobs";
import { submitApplication } from "@/app/actions/careers";

interface JobCardProps {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(formRef.current!);
    // Inject job_id and job_title — not in the visible form fields
    formData.set("job_id", job.id);
    formData.set("job_title", job.title);

    const result = await submitApplication(formData);

    setIsSubmitting(false);

    if (!result.success) {
      setError(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-sm"
      style={{ borderColor: isOpen ? "#6320ce" : undefined }}
    >
      {/* Card header — clickable */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-2">
          <span className="text-base font-semibold text-gray-900">
            {job.title}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-[#6320ce]">
              <Briefcase className="h-3 w-3" />
              {job.type}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
              <Building2 className="h-3 w-3" />
              {job.department}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
              <MapPin className="h-3 w-3" />
              {job.location}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown
            className="h-5 w-5 transition-colors"
            style={{ color: isOpen ? "#6320ce" : "#9ca3af" }}
          />
        </motion.div>
      </button>

      {/* Expandable application panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 bg-[#faf9ff] px-6 py-6">
              {/* Job description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {job.description}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center rounded-xl border border-green-200 bg-green-50 py-8 text-center"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-green-800">
                    Application submitted!
                  </p>
                  <p className="mt-1 text-xs text-green-600">
                    We&apos;ll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  {/* Name row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-gray-700">
                        First Name <span className="text-[#6320ce]">*</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        placeholder="First name"
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-gray-700">
                        Last Name <span className="text-[#6320ce]">*</span>
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        placeholder="Last name"
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">
                      Email <span className="text-[#6320ce]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
                    />
                  </div>

                  {/* Cover letter */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">
                      Cover Letter{" "}
                      <span className="text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      name="cover_letter"
                      rows={4}
                      placeholder="Tell us why you're a great fit..."
                      className="resize-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
                    />
                  </div>

                  {/* Resume upload */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">
                      Resume / CV <span className="text-[#6320ce]">*</span>
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 bg-white px-4 py-6 text-center transition-colors hover:border-[#6320ce] hover:bg-purple-50"
                    >
                      <Upload
                        className="h-5 w-5 text-[#6320ce]"
                        strokeWidth={1.5}
                      />
                      {fileName ? (
                        <span className="text-xs font-medium text-[#6320ce]">
                          {fileName}
                        </span>
                      ) : (
                        <>
                          <span className="text-xs font-medium text-gray-700">
                            Click to upload
                          </span>
                          <span className="text-xs text-gray-400">
                            PDF or DOCX · Max 5MB
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="rounded-lg bg-rose-50 px-4 py-2.5 text-xs text-rose-600">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <div className="flex mx-auto pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full bg-[#6320ce] px-8 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
