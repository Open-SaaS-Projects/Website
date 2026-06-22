import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Intelligence | MAKKN Technologies",
  description:
    "Automate document processing with AI-powered extraction, OCR, and intelligent data capture. MAKKN's Document Intelligence solution handles classification, routing, and compliance for streamlined workflows.",
  alternates: {
    canonical: "https://makkn.com/data-structuring-engine",
  },
  openGraph: {
    title: "Document Intelligence | MAKKN Technologies",
    description:
      "Automate document processing with AI-powered extraction, OCR, and intelligent data capture for streamlined workflows and compliance.",
    url: "https://makkn.com/data-structuring-engine",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Document Intelligence | MAKKN Technologies",
    description:
      "Automate document processing with AI-powered extraction, OCR, and intelligent data capture for streamlined workflows and compliance.",
  },
};

export default function DataStructuringEngineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
