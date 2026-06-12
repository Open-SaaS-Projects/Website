import type { Metadata } from "next";

/**
 * TODO: Add JobPosting structured data (JSON-LD) when active jobs are available.
 *
 * For each active job, include a script tag with JobPosting schema:
 * {
 *   "@context": "https://schema.org",
 *   "@type": "JobPosting",
 *   "title": "Job Title",
 *   "description": "Job description",
 *   "hiringOrganization": {
 *     "@type": "Organization",
 *     "name": "MAKKN Technologies",
 *     "sameAs": "https://makkn.com"
 *   },
 *   "jobLocation": {
 *     "@type": "Place",
 *     "address": {
 *       "@type": "PostalAddress",
 *       "addressLocality": "Cairo",
 *       "addressCountry": "EG"
 *     }
 *   },
 *   "employmentType": "FULL_TIME",
 *   "datePosted": "2025-01-01"
 * }
 */

export const metadata: Metadata = {
  title: "Careers | MAKKN Technologies",
  description:
    "Join MAKKN Technologies and shape the future of AI solutions. Explore career opportunities in Cairo, Egypt, and be part of a team delivering innovative AI-powered automation and intelligence.",
  alternates: {
    canonical: "https://makkn.com/careers",
  },
  openGraph: {
    title: "Careers | MAKKN Technologies",
    description:
      "Join MAKKN Technologies and shape the future of AI solutions. Explore career opportunities in Cairo, Egypt, with an innovative AI team.",
    url: "https://makkn.com/careers",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | MAKKN Technologies",
    description:
      "Join MAKKN Technologies and shape the future of AI solutions. Explore career opportunities in Cairo, Egypt, with an innovative AI team.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
