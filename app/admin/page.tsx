"use client";

import { useState } from "react";
import { Plus, Briefcase, Users, Settings, LogOut, Menu, X } from "lucide-react";
import { jobs as initialJobs } from "@/data/jobs";
import type { Job } from "@/data/jobs";
import { applications } from "@/data/applications";
import StatsBar from "@/components/admin/StatsBar";
import JobTable from "@/components/admin/JobTable";
import AddJobModal from "@/components/admin/AddJobModal";
import ApplicationsPanel from "@/components/admin/ApplicationsPanel";

type NavItem = "jobs" | "applications";

export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [activeNav, setActiveNav] = useState<NavItem>("jobs");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleAdd = () => {
    setEditingJob(null);
    setModalOpen(true);
  };

  const handleEdit = (job: Job) => {
    setEditingJob(job);
    setModalOpen(true);
  };

  const handleSave = (data: Omit<Job, "id" | "postedAt">) => {
    if (editingJob) {
      // Edit existing
      setJobs((prev) =>
        prev.map((j) => (j.id === editingJob.id ? { ...j, ...data } : j)),
      );
    } else {
      // Add new
      const newJob: Job = {
        ...data,
        id: crypto.randomUUID(),
        postedAt: new Date().toISOString().split("T")[0],
      };
      setJobs((prev) => [newJob, ...prev]);
    }
    setModalOpen(false);
    setEditingJob(null);
  };

  const handleDelete = (id: string) => {
    // In production, confirm dialog before delete
    setJobs((prev) => prev.filter((j) => j.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setJobs((prev) =>
      prev.map((j) =>
        j.id === id
          ? { ...j, status: j.status === "active" ? "inactive" : "active" }
          : j,
      ),
    );
  };

  // ── Nav items ─────────────────────────────────────────────────────────────

  const newApplicationsCount = applications.filter(
    (a) => a.status === "new",
  ).length;

  const navItems: {
    id: NavItem;
    label: string;
    icon: React.ReactNode;
    badge?: number;
  }[] = [
    { id: "jobs", label: "Jobs", icon: <Briefcase className="h-4 w-4" /> },
    {
      id: "applications",
      label: "Applications",
      icon: <Users className="h-4 w-4" />,
      badge: newApplicationsCount,
    },
  ];

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Backdrop - only on mobile when open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-auto w-56 transform lg:transform-none transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-shrink-0 flex-col bg-[#1e1040]`}
      >
        {/* Close button - only on mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-white/70 hover:text-white z-10"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
          <div className="relative h-8 w-24 shrink-0 overflow-hidden">
            <img
              src="/makkn-logo.webp"
              alt="Makkn logo"
              className="absolute left-1/2 top-1/2 h-32 w-32 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
          <span className="text-xs font-medium uppercase leading-none tracking-wide text-purple-400">
            admin
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveNav(item.id);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                activeNav === item.id
                  ? "border-l-2 border-[#6320ce] bg-white/10 text-white"
                  : "text-white/50 hover:bg-white/5 hover:text-white/80"
              }`}
            >
              {item.icon}
              <span className="flex-1">{item.label}</span>
              {item.badge ? (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#6320ce] px-1 text-[10px] font-semibold text-white">
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 px-5 py-4">
          <p className="text-xs text-white/40">Logged in as</p>
          <p className="mt-0.5 truncate text-xs font-medium text-white/70">
            admin@makkn.com
          </p>
          <button className="mt-3 flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60">
            <LogOut className="h-3 w-3" />
            Sign out
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center gap-3 sm:gap-4 border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          {/* Burger menu - only visible on mobile/tablet */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-lg font-semibold text-gray-900">
              {activeNav === "jobs" && "Job Positions"}
              {activeNav === "applications" && "Applications"}
            </h1>
            <p className="text-xs text-gray-400">
              {activeNav === "jobs" && "Manage open and inactive positions"}
              {activeNav === "applications" && "Review submitted applications"}
            </p>
          </div>

          {activeNav === "jobs" && (
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 rounded-full bg-[#6320ce] px-3 sm:px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add position</span>
            </button>
          )}
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-hidden bg-gray-50 flex flex-col min-h-0">
          {activeNav === "jobs" && (
            <div className="flex flex-col gap-6 h-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <div className="shrink-0">
                <StatsBar jobs={jobs} />
              </div>
              <div className="flex-1 overflow-y-auto min-h-0 pb-10">
                <JobTable
                  jobs={jobs}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onToggleStatus={handleToggleStatus}
                />
              </div>
            </div>
          )}

          {activeNav === "applications" && (
            <div className="flex-1 overflow-hidden min-h-0 h-full">
              <ApplicationsPanel />
            </div>
          )}
        </main>
      </div>

      {/* ── Modal ── */}
      {modalOpen && (
        <AddJobModal
          job={editingJob}
          onClose={() => {
            setModalOpen(false);
            setEditingJob(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
