import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MAKKN Technologies",
  description:
    "Read MAKKN Technologies' Privacy Policy. Learn how we collect, use, and protect your personal information when you interact with our AI solutions and services.",
  alternates: {
    canonical: "https://makkn.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | MAKKN Technologies",
    description:
      "Read MAKKN Technologies' Privacy Policy. Learn how we collect, use, and protect your personal information.",
    url: "https://makkn.com/privacy",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | MAKKN Technologies",
    description:
      "Read MAKKN Technologies' Privacy Policy. Learn how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
