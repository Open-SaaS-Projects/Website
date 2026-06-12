import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support Intelligence | MAKKN Technologies",
  description:
    "Automate your customer support with AI-powered chatbots that understand and resolve issues instantly. 24/7 availability, multi-channel support, and seamless CRM integration with MAKKN's Customer Support Intelligence.",
  alternates: {
    canonical: "https://makkn.com/customer-support-agent",
  },
  openGraph: {
    title: "Customer Support Intelligence | MAKKN Technologies",
    description:
      "Automate your customer support with AI-powered chatbots that understand and resolve issues instantly. 24/7 availability and multi-channel support.",
    url: "https://makkn.com/customer-support-agent",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Support Intelligence | MAKKN Technologies",
    description:
      "Automate your customer support with AI-powered chatbots that understand and resolve issues instantly. 24/7 availability and multi-channel support.",
  },
};

export default function CustomerSupportAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
