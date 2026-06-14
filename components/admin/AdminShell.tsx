"use client";

import { useState, useEffect } from "react";
import { Briefcase, Users, LogOut, Menu, X, Plus } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import type { Job } from "@/app/actions/jobs";
import type { Application } from "@/app/actions/applications";
import StatsBar from "@/components/admin/StatsBar";
import JobTable from "@/components/admin/JobTable";
import ApplicationsPanel from "@/components/admin/ApplicationsPanel";
import AddJobModal from "@/components/admin/AddJobModal";

type NavItem = "jobs" | "applications";

interface AdminShellProps {
  jobs: Job[];
  applications: Application[];
  newApplicationsCount: number;
}

export default function AdminShell({
  jobs,
  applications,
  newApplicationsCount,
}: AdminShellProps) {
  const [activeNav, setActiveNav] = useState<NavItem>("jobs");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUserEmail = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUserEmail(session?.user?.email || null);
    };
    getUserEmail();
  }, []);

  const navItems = [
    {
      id: "jobs" as NavItem,
      label: "Jobs",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      id: "applications" as NavItem,
      label: "Applications",
      icon: <Users className="h-4 w-4" />,
      badge: newApplicationsCount,
    },
  ];

  const handleAdd = () => {
    setEditingJob(null);
    setModalOpen(true);
  };

  const handleEdit = (job: Job) => {
    setEditingJob(job);
    setModalOpen(true);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 lg:z-auto w-56 transform lg:transform-none transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-shrink-0 flex-col bg-[#1e1040]`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-white/70 hover:text-white z-10"
        >
          <X className="h-5 w-5" />
        </button>

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

        <div className="border-t border-white/10 px-5 py-4">
          <p className="text-xs text-white/40">Logged in as</p>
          <p className="mt-0.5 truncate text-xs font-medium text-white/70">
            {userEmail || "Loading..."}
          </p>
          <a
            href="/auth/signout"
            className="mt-3 flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60"
          >
            <LogOut className="h-3 w-3" />
            Sign out
          </a>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col min-w-0">
        <header className="flex items-center gap-3 sm:gap-4 border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-lg font-semibold text-gray-900">
              {activeNav === "jobs" ? "Job Positions" : "Applications"}
            </h1>
            <p className="text-xs text-gray-400">
              {activeNav === "jobs"
                ? "Manage open and inactive positions"
                : "Review submitted applications"}
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

        <main className="flex-1 overflow-hidden bg-gray-50 flex flex-col min-h-0">
          {activeNav === "jobs" ? (
            <div className="flex flex-col gap-6 h-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <div className="shrink-0">
                <StatsBar jobs={jobs} />
              </div>
              <div className="flex-1 overflow-y-auto min-h-0 pb-10">
                <JobTable jobs={jobs} onEdit={handleEdit} />
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-hidden min-h-0 h-full">
              <ApplicationsPanel applications={applications} />
            </div>
          )}
        </main>
      </div>

      {/* Add/Edit Job Modal */}
      {modalOpen && (
        <AddJobModal
          job={editingJob}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
