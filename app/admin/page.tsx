import { getJobs } from "@/app/actions/jobs";
import { getApplications } from "@/app/actions/applications";
import AdminShell from "@/components/admin/AdminShell";

export default async function AdminPage() {
  const [jobs, applications] = await Promise.all([
    getJobs(),
    getApplications(),
  ]);

  const newApplicationsCount = applications.filter(
    (a) => a.status === "new",
  ).length;

  return (
    <AdminShell
      jobs={jobs}
      applications={applications}
      newApplicationsCount={newApplicationsCount}
    />
  );
}
