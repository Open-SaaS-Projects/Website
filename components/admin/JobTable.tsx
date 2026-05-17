"use client";

import { Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import type { Job } from "@/data/jobs";

interface JobTableProps {
  jobs: Job[];
  onEdit: (job: Job) => void;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

export default function JobTable({
  jobs,
  onEdit,
  onDelete,
  onToggleStatus,
}: JobTableProps) {
  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center">
        <p className="text-sm font-medium text-gray-500">No positions yet</p>
        <p className="mt-1 text-xs text-gray-400">
          Click &quot;Add position&quot; to get started
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-100 bg-white">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_120px_100px_120px] gap-4 border-b border-gray-100 bg-gray-50 px-6 py-3">
          {["Position", "Type", "Status", "Actions"].map((h) => (
            <span
              key={h}
              className="text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        {jobs.map((job, i) => (
          <div
            key={job.id}
            className={`grid grid-cols-[1fr_120px_100px_120px] gap-4 px-6 py-4 transition-colors hover:bg-gray-50 ${
              i !== jobs.length - 1 ? "border-b border-gray-100" : ""
            } ${job.status === "inactive" ? "opacity-60" : ""}`}
          >
            {/* Position info */}
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-gray-900">
                {job.title}
              </span>
              <span className="text-xs text-gray-400">
                {job.department} · {job.location}
              </span>
            </div>

            {/* Type */}
            <span className="self-center text-xs text-gray-500">{job.type}</span>

            {/* Status badge */}
            <div className="self-center">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  job.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {job.status === "active" ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Edit */}
              <button
                onClick={() => onEdit(job)}
                title="Edit"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-[#6320ce] transition-colors hover:bg-purple-100"
              >
                <Pencil className="h-3.5 w-3.5" />
              </button>

              {/* Toggle active/inactive */}
              <button
                onClick={() => onToggleStatus(job.id)}
                title={job.status === "active" ? "Set inactive" : "Set active"}
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  job.status === "active"
                    ? "bg-green-50 text-green-600 hover:bg-green-100"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                {job.status === "active" ? (
                  <Eye className="h-3.5 w-3.5" />
                ) : (
                  <EyeOff className="h-3.5 w-3.5" />
                )}
              </button>

              {/* Delete */}
              <button
                onClick={() => onDelete(job.id)}
                title="Delete"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="block lg:hidden space-y-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`rounded-xl border border-gray-100 bg-white p-4 transition-all ${
              job.status === "inactive" ? "opacity-60" : ""
            }`}
          >
            {/* Card Header - Title & Status */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                  {job.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {job.department} · {job.location}
                </p>
              </div>
              <span
                className={`flex-shrink-0 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  job.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {job.status === "active" ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Card Body - Type */}
            <div className="mb-3 pb-3 border-b border-gray-100">
              <span className="text-xs text-gray-500">{job.type}</span>
            </div>

            {/* Card Footer - Actions */}
            <div className="flex items-center gap-2">
              {/* Edit */}
              <button
                onClick={() => onEdit(job)}
                title="Edit"
                className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-purple-50 text-[#6320ce] transition-colors hover:bg-purple-100"
              >
                <Pencil className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Edit</span>
              </button>

              {/* Toggle active/inactive */}
              <button
                onClick={() => onToggleStatus(job.id)}
                title={job.status === "active" ? "Set inactive" : "Set active"}
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                  job.status === "active"
                    ? "bg-green-50 text-green-600 hover:bg-green-100"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                {job.status === "active" ? (
                  <Eye className="h-3.5 w-3.5" />
                ) : (
                  <EyeOff className="h-3.5 w-3.5" />
                )}
              </button>

              {/* Delete */}
              <button
                onClick={() => onDelete(job.id)}
                title="Delete"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
