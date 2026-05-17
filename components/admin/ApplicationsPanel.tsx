"use client";

import { useState } from "react";
import { FileText, X, Download, ChevronRight, Search } from "lucide-react";
import {
  applications as initialApplications,
  STATUS_LABELS,
  STATUS_STYLES,
  type Application,
  type ApplicationStatus,
} from "@/data/applications";

const ALL_STATUSES: ApplicationStatus[] = [
  "new",
  "reviewing",
  "shortlisted",
  "rejected",
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getInitials(first: string, last: string) {
  return `${first[0]}${last[0]}`.toUpperCase();
}

// ── Detail drawer ────────────────────────────────────────────────────────────

interface DrawerProps {
  application: Application;
  onClose: () => void;
  onStatusChange: (id: string, status: ApplicationStatus) => void;
}

function ApplicationDrawer({
  application: app,
  onClose,
  onStatusChange,
}: DrawerProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-gray-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-[#6320ce]">
              {getInitials(app.firstName, app.lastName)}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {app.firstName} {app.lastName}
              </p>
              <p className="text-xs text-gray-400">{app.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-6 px-6 py-6">
          {/* Meta */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-1 text-xs font-medium text-gray-400">
                Applied for
              </p>
              <p className="text-sm font-medium text-gray-800">
                {app.jobTitle}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium text-gray-400">
                Submitted
              </p>
              <p className="text-sm text-gray-800">
                {formatDate(app.submittedAt)}
              </p>
            </div>
          </div>

          {/* Status selector */}
          <div>
            <p className="mb-2 text-xs font-medium text-gray-400">Status</p>
            <div className="flex flex-wrap gap-2">
              {ALL_STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => onStatusChange(app.id, s)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                    app.status === s
                      ? STATUS_STYLES[s] + " ring-2 ring-offset-1 ring-current"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {STATUS_LABELS[s]}
                </button>
              ))}
            </div>
          </div>

          {/* Resume */}
          <div>
            <p className="mb-2 text-xs font-medium text-gray-400">
              Resume / CV
            </p>
            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <FileText
                  className="h-4 w-4 text-[#6320ce]"
                  strokeWidth={1.5}
                />
                <span className="text-xs font-medium text-gray-700">
                  {app.resumeFileName}
                </span>
              </div>
              {/* Placeholder — wire to storage URL once backend is confirmed */}
              <button
                className="flex items-center gap-1 text-xs text-[#6320ce] hover:underline"
                title="Download resume"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </button>
            </div>
          </div>

          {/* Cover letter */}
          <div>
            <p className="mb-2 text-xs font-medium text-gray-400">
              Cover Letter
            </p>
            {app.coverLetter ? (
              <p className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm leading-relaxed text-gray-700">
                {app.coverLetter}
              </p>
            ) : (
              <p className="text-xs italic text-gray-400">
                No cover letter submitted.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main panel ───────────────────────────────────────────────────────────────

export default function ApplicationsPanel() {
  const [applications, setApplications] =
    useState<Application[]>(initialApplications);
  const [filterJob, setFilterJob] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Application | null>(null);

  const jobTitles = Array.from(new Set(applications.map((a) => a.jobTitle)));

  const filtered = applications.filter((a) => {
    const matchesJob = filterJob === "all" || a.jobTitle === filterJob;
    const matchesStatus = filterStatus === "all" || a.status === filterStatus;
    const matchesSearch =
      search === "" ||
      `${a.firstName} ${a.lastName} ${a.email}`
        .toLowerCase()
        .includes(search.toLowerCase());
    return matchesJob && matchesStatus && matchesSearch;
  });

  const handleStatusChange = (id: string, status: ApplicationStatus) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a)),
    );
    // Also update the drawer if it's open for this application
    setSelected((prev) => (prev?.id === id ? { ...prev, status } : prev));
  };

  return (
    <div className="flex flex-col h-full gap-4 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      {/* Filters row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
        {/* Search */}
        <div className="relative w-full sm:flex-1 sm:min-w-48">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search applicants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-[#6320ce] focus:ring-2 focus:ring-purple-100"
          />
        </div>

        {/* Filter by job */}
        <select
          value={filterJob}
          onChange={(e) => setFilterJob(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#6320ce]"
        >
          <option value="all">All positions</option>
          {jobTitles.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Filter by status */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#6320ce]"
        >
          <option value="all">All statuses</option>
          {ALL_STATUSES.map((s) => (
            <option key={s} value={s}>
              {STATUS_LABELS[s]}
            </option>
          ))}
        </select>

        <span className="ml-auto text-xs text-gray-400">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table / Cards */}
      <div className="flex-1 overflow-y-auto min-h-0 pb-10">
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center">
          <p className="text-sm font-medium text-gray-500">
            No applications found
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Try adjusting your filters
          </p>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-100 bg-white">
            {/* Header */}
            <div className="grid grid-cols-[1fr_180px_110px_100px_40px] gap-4 border-b border-gray-100 bg-gray-50 px-6 py-3">
              {["Applicant", "Position", "Submitted", "Status", ""].map((h) => (
                <span
                  key={h}
                  className="text-xs font-semibold uppercase tracking-wide text-gray-400"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Rows */}
            {filtered.map((app, i) => (
              <div
                key={app.id}
                onClick={() => setSelected(app)}
                className={`grid cursor-pointer grid-cols-[1fr_180px_110px_100px_40px] gap-4 px-6 py-4 transition-colors hover:bg-gray-50 ${
                  i !== filtered.length - 1 ? "border-b border-gray-100" : ""
                } ${selected?.id === app.id ? "bg-purple-50/50" : ""}`}
              >
                {/* Applicant */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-[#6320ce]">
                    {getInitials(app.firstName, app.lastName)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {app.firstName} {app.lastName}
                    </p>
                    <p className="text-xs text-gray-400">{app.email}</p>
                  </div>
                </div>

                {/* Position */}
                <div className="self-center">
                  <span className="text-xs text-gray-600">{app.jobTitle}</span>
                </div>

                {/* Submitted */}
                <div className="self-center">
                  <span className="text-xs text-gray-400">
                    {formatDate(app.submittedAt)}
                  </span>
                </div>

                {/* Status */}
                <div className="self-center">
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[app.status]}`}
                  >
                    {STATUS_LABELS[app.status]}
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center self-center">
                  <ChevronRight className="h-4 w-4 text-gray-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="block lg:hidden space-y-3">
            {filtered.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelected(app)}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:border-purple-200 hover:bg-purple-50/30 ${
                  selected?.id === app.id ? "border-purple-300 bg-purple-50/50" : ""
                }`}
              >
                {/* Avatar */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-[#6320ce]">
                  {getInitials(app.firstName, app.lastName)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">
                    {app.firstName} {app.lastName}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{app.jobTitle}</p>

                  {/* Status + Date row */}
                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[app.status]}`}
                    >
                      {STATUS_LABELS[app.status]}
                    </span>
                    <span className="text-xs text-gray-400">
                      {formatDate(app.submittedAt)}
                    </span>
                  </div>
                </div>

                {/* Chevron */}
                <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-300" />
              </div>
            ))}
          </div>
        </>
      )}
      </div>

      {/* Detail drawer */}
      {selected && (
        <ApplicationDrawer
          application={selected}
          onClose={() => setSelected(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
