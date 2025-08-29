"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AgentCardsGrid } from "@/components/agent-card";
import { agents } from "@/data/agents";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import Link from "next/link";
import { SolutionSection } from "@/components/solution-card";

const solutions = [
  {
    heading: "Never Miss a Lead",
    description: "Capture, track, and follow up with leads automatically, no more missed opportunities."
  },
  {
    heading: "Spend Less on Ads, Get More ROI",
    description: "Target the right audience with tailored messaging that converts better."
  },
  {
    heading: "Shorten the Sales Cycle",
    description: "Auto-personalized content and follow-ups close deals faster."
  },
  {
    heading: "Do More With Less",
    description: "Run multi-channel campaigns without a full marketing team."
  }
];

export default function MarketingSalesAgentPage() {
  const [productsOpen, setProductsOpen] = useState(false);
  
  const marketingSalesAgent = agents.find(agent => agent.name === "Growth Intelligence");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Replace the header with MainNavigation */}
      <MainNavigation />

      <main className="flex-1">
        <div id="top"></div>
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#6320ce] mb-4">
                Growth Intelligence
              </h1>
              <p className="max-w-4xl text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed">
                Supercharge your marketing and sales efforts with AI that
                generates, targets, and converts leads
              </p>
            </div>
          </div>

          {/* Our Features Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#6320ce]">
              Our Features
            </h2>
            <p className="max-w-3xl text-muted-foreground lg:text-lg leading-relaxed">
              AI-driven marketing and sales tools that accelerate growth and
              maximize conversions
            </p>
          </div>

          {/* Features Grid - Using Reusable Component */}
          {marketingSalesAgent && (
            <AgentCardsGrid 
              features={marketingSalesAgent.features} 
              className="mb-16" 
            />
          )}

          {/* How Do We Solve Your Problem Section */}
          <SolutionSection solutions={solutions} />

          <div className="flex justify-center py-8">
            <Button
              size="lg"
              className="bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full text-white"
              asChild
            >
              <Link href="/contact#top">Connect to Sales</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Replace the footer with MainFooter */}
      <MainFooter />
      <Chatbot />
    </div>
  );
}
