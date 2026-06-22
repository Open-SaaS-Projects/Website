import { Metadata } from "next";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "AI for Retail & E-Commerce | MAKKN Technologies",
  description:
    "Elevate shopping experiences with personalized intelligence. Drive sales, optimize inventory, and deliver hyper-personalized customer journeys with MAKKN's AI solutions for retail.",
  alternates: {
    canonical: "https://makkn.com/industries/ai-for-retail-ecommerce",
  },
  openGraph: {
    title: "AI for Retail & E-Commerce | MAKKN Technologies",
    description:
      "Elevate shopping experiences with personalized intelligence. Drive sales, optimize inventory, and deliver hyper-personalized customer journeys.",
    url: "https://makkn.com/industries/ai-for-retail-ecommerce",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Retail & E-Commerce | MAKKN Technologies",
    description:
      "Elevate shopping experiences with personalized intelligence. Drive sales, optimize inventory, and deliver hyper-personalized customer journeys.",
  },
};

export default function AIForRetailEcommercePage() {
  const industry = industries.find(
    (ind) => ind.slug === "ai-for-retail-ecommerce"
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
