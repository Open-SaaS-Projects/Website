import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | MAKKN Technologies",
  description:
    "Explore the MAKKN product suite: MAKKN Insight, MAKKN Desk, MAKKN Guard, and MAKKN Docs — AI-powered tools for call intelligence, customer support, facility safety, and document processing.",
  alternates: {
    canonical: "https://makkn.com/products",
  },
  openGraph: {
    title: "Products | MAKKN Technologies",
    description:
      "Explore the MAKKN product suite: MAKKN Insight, MAKKN Desk, MAKKN Guard, and MAKKN Docs.",
    url: "https://makkn.com/products",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | MAKKN Technologies",
    description:
      "Explore the MAKKN product suite: MAKKN Insight, MAKKN Desk, MAKKN Guard, and MAKKN Docs.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
