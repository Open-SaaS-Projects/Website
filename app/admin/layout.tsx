import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | MAKKN Technologies",
  description: "Internal admin dashboard for managing jobs and applications.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
