import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommendation Engine | MAKKN Technologies",
  description:
    "Deliver personalized product and content recommendations with MAKKN's AI-powered Recommendation Engine. Behavioral analysis, pattern recognition, A/B testing, and seamless e-commerce integration.",
  alternates: {
    canonical: "https://makkn.com/recommendation-engine",
  },
  openGraph: {
    title: "Recommendation Engine | MAKKN Technologies",
    description:
      "Deliver personalized product and content recommendations with AI-powered behavioral analysis, pattern recognition, and A/B testing.",
    url: "https://makkn.com/recommendation-engine",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recommendation Engine | MAKKN Technologies",
    description:
      "Deliver personalized product and content recommendations with AI-powered behavioral analysis, pattern recognition, and A/B testing.",
  },
};

export default function RecommendationEngineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
