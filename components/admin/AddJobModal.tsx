"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { Job, JobType } from "@/data/jobs";

interface AddJobModalProps {
  job?: Job | null; // if provided, we're in edit mode
  onClose: () => void;
  onSave: (data: Omit<Job, "id" | "postedAt">) => void;
}

const JOB_TYPES: JobType[] = ["Full-time", "Part-time", "Contract"];

export default function AddJobModal({
  job,
  onClose,
  onSave,
}: AddJobModalProps) {
  const isEdit = Boolean(job);

  const [form, setForm] = useState({
    title: job?.title ?? "",
    department: job?.department ?? "",
    type: job?.type ?? ("Full-time" as JobType),
    location: job?.location ?? "",
    description: job?.description ?? "",
    status: job?.status ?? ("active" as Job["status"]),
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {isEdit ? "Edit position" : "Add position"}
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Title + Department */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Job Title <span className="text-[#6320ce]">*</span>
              </label>
              <input
                name="title"
                required
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. AI Engineer"
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Department
              </label>
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="e.g. Engineering"
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
              />
            </div>
          </div>

          {/* Type + Location */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
              >
                {JOB_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Location
              </label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Cairo / Remote"
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">
              Job Description <span className="text-[#6320ce]">*</span>
            </label>
            <textarea
              name="description"
              required
              rows={5}
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the role, responsibilities, and requirements..."
              className="resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
            />
          </div>

          {/* Active toggle */}
          <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-gray-800">
                Publish immediately
              </p>
              <p className="text-xs text-gray-400">
                Active jobs appear on the careers page
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={form.status === "active"}
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  status: prev.status === "active" ? "inactive" : "active",
                }))
              }
              className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6320ce]/30 focus:ring-offset-2 ${
                form.status === "active" ? "bg-[#6320ce]" : "bg-gray-300"
              }`}
            >
              <span
                className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-md ring-0 transition-transform ${
                  form.status === "active" ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-gray-200 px-6 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-[#6320ce] px-8 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              {isEdit ? "Save changes" : "Save position"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
