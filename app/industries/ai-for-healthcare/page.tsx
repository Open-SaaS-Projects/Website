import { Metadata } from "next";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "AI for Healthcare | MAKKN Technologies",
  description:
    "Enhance patient care with intelligent automation. Improve clinical outcomes, streamline workflows, and unlock insights from medical data with MAKKN's AI solutions for healthcare.",
  alternates: {
    canonical: "https://makkn.com/industries/ai-for-healthcare",
  },
  openGraph: {
    title: "AI for Healthcare | MAKKN Technologies",
    description:
      "Enhance patient care with intelligent automation. Improve clinical outcomes, streamline workflows, and unlock insights from medical data.",
    url: "https://makkn.com/industries/ai-for-healthcare",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Healthcare | MAKKN Technologies",
    description:
      "Enhance patient care with intelligent automation. Improve clinical outcomes, streamline workflows, and unlock insights from medical data.",
  },
};

export default function AIForHealthcarePage() {
  const industry = industries.find((ind) => ind.slug === "ai-for-healthcare");

  if (!industry) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />
      <main className="flex-1">
        <IndustryPageTemplate industry={industry} />
      </main>
      <MainFooter />
      <Chatbot />
    </div>
  );
}
