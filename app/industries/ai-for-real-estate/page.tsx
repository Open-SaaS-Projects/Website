import { Metadata } from "next";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "AI for Real Estate | MAKKN Technologies",
  description:
    "Transform property management with intelligent automation. Streamline operations, enhance customer experiences, and unlock data-driven insights with MAKKN's AI solutions for real estate.",
  alternates: {
    canonical: "https://makkn.com/industries/ai-for-real-estate",
  },
  openGraph: {
    title: "AI for Real Estate | MAKKN Technologies",
    description:
      "Transform property management with intelligent automation. Streamline operations, enhance customer experiences, and unlock data-driven insights.",
    url: "https://makkn.com/industries/ai-for-real-estate",
    siteName: "MAKKN Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Real Estate | MAKKN Technologies",
    description:
      "Transform property management with intelligent automation. Streamline operations, enhance customer experiences, and unlock data-driven insights.",
  },
};

export default function AIForRealEstatePage() {
  const industry = industries.find((ind) => ind.slug === "ai-for-real-estate");

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
