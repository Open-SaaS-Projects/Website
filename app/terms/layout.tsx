import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MAKKN Technologies",
  description:
    "Read MAKKN Technologies' Terms of Service. Understand the terms and conditions governing your use of our AI solutions, services, and website.",
  alternates: {
    canonical: "https://makkn.com/terms",
  },
  openGraph: {
    title: "Terms of Service | MAKKN Technologies",
    description:
      "Read MAKKN Technologies' Terms of Service. Understand the terms governing your use of our AI solutions and services.",
    url: "https://makkn.com/terms",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | MAKKN Technologies",
    description:
      "Read MAKKN Technologies' Terms of Service. Understand the terms governing your use of our AI solutions and services.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
