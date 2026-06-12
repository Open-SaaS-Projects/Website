import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Intelligence | MAKKN Technologies",
  description:
    "Transform raw data into actionable insights with MAKKN's Data Intelligence platform. Advanced analytics, predictive modeling, custom dashboards, and real-time business intelligence for data-driven decisions.",
  alternates: {
    canonical: "https://makkn.com/data-intelligence",
  },
  openGraph: {
    title: "Data Intelligence | MAKKN Technologies",
    description:
      "Transform raw data into actionable insights with advanced analytics, predictive modeling, and custom dashboards for data-driven decisions.",
    url: "https://makkn.com/data-intelligence",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Intelligence | MAKKN Technologies",
    description:
      "Transform raw data into actionable insights with advanced analytics, predictive modeling, and custom dashboards for data-driven decisions.",
  },
};

export default function DataIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
