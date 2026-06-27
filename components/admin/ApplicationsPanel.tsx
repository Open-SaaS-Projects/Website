"use client";

import { useState, useTransition } from "react";
import {
  FileText,
  X,
  Download,
  ChevronRight,
  Search,
  Trash2,
} from "lucide-react";
import {
  type Application,
  updateApplicationStatus,
  deleteApplication,
  getResumeDownloadUrl,
  getResumeDownloadUrls,
} from "@/app/actions/applications";

type ApplicationStatus = Application["status"];

const ALL_STATUSES: ApplicationStatus[] = [
  "new",
  "reviewing",
  "shortlisted",
  "rejected",
];

const STATUS_LABELS: Record<ApplicationStatus, string> = {
  new: "New",
  reviewing: "Reviewing",
  shortlisted: "Shortlisted",
  rejected: "Rejected",
};

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  new: "bg-blue-50 text-blue-600",
  reviewing: "bg-yellow-50 text-yellow-600",
  shortlisted: "bg-emerald-50 text-emerald-600",
  rejected: "bg-rose-50 text-rose-500",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function getInitials(first: string, last: string) {
  return `${first[0]}${last[0]}`.toUpperCase();
}

// ── CSV export helpers ───────────────────────────────────────────────────────

function escapeCsvField(value: string): string {
  if (/[,"\r\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function buildCsvString(
  apps: Application[],
  resumeUrls: Record<string, string>,
): string {
  const header =
    "First Name,Last Name,Email,Job Title,Status,Submitted Date,Cover Letter,Resume URL";
  const rows = apps.map((a) => {
    const submittedDate = new Date(a.submitted_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
    const resumeUrl =
      a.resume_path ? (resumeUrls[a.resume_path] ?? "") : "";
    return [
      escapeCsvField(a.first_name),
      escapeCsvField(a.last_name),
      escapeCsvField(a.email),
      escapeCsvField(a.job_title),
      escapeCsvField(a.status),
      escapeCsvField(submittedDate),
      escapeCsvField(a.cover_letter ?? ""),
      escapeCsvField(resumeUrl),
    ].join(",");
  });
  return [header, ...rows].join("\n");
}

function buildExportFilename(activeJobFilter: string): string {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  if (activeJobFilter !== "all") {
    const slug = activeJobFilter
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    return `applications-${slug}-${today}.csv`;
  }
  return `applications-all-${today}.csv`;
}

// ── Detail drawer ────────────────────────────────────────────────────────────

interface DrawerProps {
  application: Application;
  onClose: () => void;
  onStatusChange: (id: string, status: ApplicationStatus) => void;
  onDelete: (id: string) => void;
}

function ApplicationDrawer({
  application: app,
  onClose,
  onStatusChange,
  onDelete,
}: DrawerProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!app.resume_path) return;
    setIsDownloading(true);
    const { url, error } = await getResumeDownloadUrl(app.resume_path);
    setIsDownloading(false);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.error("Failed to get resume download URL:", error);
    }
  };

  const handleDelete = () => {
    onDelete(app.id);
    onClose();
  };
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
              {getInitials(app.first_name, app.last_name)}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {app.first_name} {app.last_name}
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
                {app.job_title}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium text-gray-400">
                Submitted
              </p>
              <p className="text-sm text-gray-800">
                {formatDate(app.submitted_at)}
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
                  {app.resume_file_name || "No resume"}
                </span>
              </div>
              {app.resume_path ? (
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex items-center gap-1 text-xs text-[#6320ce] hover:underline disabled:opacity-50 disabled:cursor-wait"
                  title="Download resume"
                >
                  <Download className="h-3.5 w-3.5" />
                  {isDownloading ? "Loading..." : "Download"}
                </button>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-1 text-xs text-gray-400 cursor-not-allowed"
                  title="No resume available"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </button>
              )}
            </div>
          </div>

          {/* Cover letter */}
          <div>
            <p className="mb-2 text-xs font-medium text-gray-400">
              Cover Letter
            </p>
            {app.cover_letter ? (
              <p className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm leading-relaxed text-gray-700">
                {app.cover_letter}
              </p>
            ) : (
              <p className="text-xs italic text-gray-400">
                No cover letter submitted.
              </p>
            )}
          </div>

          {/* Delete section */}
          <div className="mt-8 border-t border-gray-100 pt-6">
            {showDeleteConfirm ? (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                <p className="mb-3 text-sm font-medium text-rose-800">
                  Delete this application?
                </p>
                <p className="mb-4 text-xs text-rose-600">
                  This action cannot be undone. The application will be
                  permanently removed.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleDelete}
                    className="flex-1 rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-700"
                  >
                    Yes, delete
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="flex items-center gap-2 rounded-lg border border-rose-200 bg-white px-4 py-2 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50"
              >
                <Trash2 className="h-4 w-4" />
                Delete application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main panel ───────────────────────────────────────────────────────────────

interface ApplicationsPanelProps {
  applications: Application[];
}

export default function ApplicationsPanel({
  applications,
}: ApplicationsPanelProps) {
  const [isPending, startTransition] = useTransition();
  const [filterJob, setFilterJob] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Application | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const jobTitles = Array.from(new Set(applications.map((a) => a.job_title)));

  const filtered = applications.filter((a) => {
    const matchesJob = filterJob === "all" || a.job_title === filterJob;
    const matchesStatus = filterStatus === "all" || a.status === filterStatus;
    const matchesSearch =
      search === "" ||
      `${a.first_name} ${a.last_name} ${a.email}`
        .toLowerCase()
        .includes(search.toLowerCase());
    return matchesJob && matchesStatus && matchesSearch;
  });

  const handleExportCsv = async () => {
    setIsExporting(true);
    try {
      const paths = filtered
        .map((a) => a.resume_path)
        .filter(Boolean) as string[];
      const resumeUrls = await getResumeDownloadUrls(paths);
      const csvString = buildCsvString(filtered, resumeUrls);
      const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = buildExportFilename(filterJob);
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to export CSV:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleStatusChange = (id: string, status: ApplicationStatus) => {
    startTransition(() => {
      updateApplicationStatus(id, status);
    });
    // Also update selected drawer state locally for instant UI feedback
    setSelected((prev) => (prev?.id === id ? { ...prev, status } : prev));
  };

  const handleDelete = (id: string) => {
    startTransition(() => {
      deleteApplication(id);
    });
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

        <div className="ml-auto flex flex-col items-end gap-1">
          <button
            onClick={handleExportCsv}
            disabled={filtered.length === 0 || isExporting}
            className="flex items-center gap-1.5 rounded-full border border-[#6320ce] bg-white px-3.5 py-1.5 text-xs font-medium text-[#6320ce] transition-colors hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="h-3.5 w-3.5" />
            {isExporting ? "Exporting..." : `Export (${filtered.length})`}
          </button>
        </div>
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
                {["Applicant", "Position", "Submitted", "Status", ""].map(
                  (h) => (
                    <span
                      key={h}
                      className="text-xs font-semibold uppercase tracking-wide text-gray-400"
                    >
                      {h}
                    </span>
                  ),
                )}
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
                      {getInitials(app.first_name, app.last_name)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {app.first_name} {app.last_name}
                      </p>
                      <p className="text-xs text-gray-400">{app.email}</p>
                    </div>
                  </div>

                  {/* Position */}
                  <div className="self-center">
                    <span className="text-xs text-gray-600">
                      {app.job_title}
                    </span>
                  </div>

                  {/* Submitted */}
                  <div className="self-center">
                    <span className="text-xs text-gray-400">
                      {formatDate(app.submitted_at)}
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
                    selected?.id === app.id
                      ? "border-purple-300 bg-purple-50/50"
                      : ""
                  }`}
                >
                  {/* Avatar */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-[#6320ce]">
                    {getInitials(app.first_name, app.last_name)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">
                      {app.first_name} {app.last_name}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      {app.job_title}
                    </p>

                    {/* Status + Date row */}
                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[app.status]}`}
                      >
                        {STATUS_LABELS[app.status]}
                      </span>
                      <span className="text-xs text-gray-400">
                        {formatDate(app.submitted_at)}
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
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
