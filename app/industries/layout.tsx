import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | MAKKN Technologies",
  description:
    "MAKKN's AI solutions built for Real Estate, Retail & E-Commerce, Healthcare, and Manufacturing. Discover industry-specific intelligent automation and data intelligence.",
  alternates: {
    canonical: "https://makkn.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | MAKKN Technologies",
    description:
      "MAKKN's AI solutions built for Real Estate, Retail & E-Commerce, Healthcare, and Manufacturing industries.",
    url: "https://makkn.com/industries",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | MAKKN Technologies",
    description:
      "MAKKN's AI solutions built for Real Estate, Retail & E-Commerce, Healthcare, and Manufacturing industries.",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
