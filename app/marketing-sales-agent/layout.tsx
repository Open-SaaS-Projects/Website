import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Intelligence | MAKKN Technologies",
  description:
    "Accelerate sales and marketing with AI-powered automation. MAKKN's Growth Intelligence solution offers lead qualification, nurturing, personalized outreach campaigns, and seamless CRM integration.",
  alternates: {
    canonical: "https://makkn.com/marketing-sales-agent",
  },
  openGraph: {
    title: "Growth Intelligence | MAKKN Technologies",
    description:
      "Accelerate sales and marketing with AI-powered lead qualification, nurturing, and personalized outreach campaigns with CRM integration.",
    url: "https://makkn.com/marketing-sales-agent",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Intelligence | MAKKN Technologies",
    description:
      "Accelerate sales and marketing with AI-powered lead qualification, nurturing, and personalized outreach campaigns with CRM integration.",
  },
};

export default function MarketingSalesAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
