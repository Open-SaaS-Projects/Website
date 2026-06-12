import { Metadata } from "next";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "AI for Manufacturing | MAKKN Technologies",
  description:
    "Optimize production with data-driven intelligence. Increase operational efficiency, reduce downtime, and accelerate growth with MAKKN's AI solutions for manufacturing.",
  alternates: {
    canonical: "https://makkn.com/industries/ai-for-manufacturing",
  },
  openGraph: {
    title: "AI for Manufacturing | MAKKN Technologies",
    description:
      "Optimize production with data-driven intelligence. Increase operational efficiency, reduce downtime, and accelerate growth.",
    url: "https://makkn.com/industries/ai-for-manufacturing",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Manufacturing | MAKKN Technologies",
    description:
      "Optimize production with data-driven intelligence. Increase operational efficiency, reduce downtime, and accelerate growth.",
  },
};

export default function AIForManufacturingPage() {
  const industry = industries.find(
    (ind) => ind.slug === "ai-for-manufacturing"
  );

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
