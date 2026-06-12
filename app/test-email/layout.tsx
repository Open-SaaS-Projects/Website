import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Test | MAKKN Technologies",
  description: "Internal email testing interface.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
