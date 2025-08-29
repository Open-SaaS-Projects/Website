"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import { AgentCardsGrid } from "@/components/agent-card";
import { agents } from "@/data/agents";
import { SolutionSection } from "@/components/solution-card";

const solutions = [
  {
    heading: "Eliminates Manual Data Work",
    description: "No more wasting hours on spreadsheet wrangling—automate your data flow and spend time analyzing, not cleaning."
  },
  {
    heading: "Ensures Consistent & Reliable Insights",
    description: "By catching data issues early and applying transformation rules consistently, your reports and models become far more reliable."
  },
  {
    heading: "Empowers Faster Decisions",
    description: "Real-time, auto-updated dashboards means decision-makers always have the latest insights, no need to wait for reports."
  },
  {
    heading: "Scales with Your Business",
    description: "Whether you're a startup or an enterprise, the modular, integration-ready system grows with your data complexity and needs."
  }
];

export default function DataIntelligencePage() {
  const [productsOpen, setProductsOpen] = useState(false);
  
  // Find the Data Intelligence agent data
  const dataIntelligenceAgent = agents.find(agent => agent.name === "Data Intelligence");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <MainNavigation />

      <main className="flex-1">
        <div id="top"></div>
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#6320ce] mb-4">
                Data Intelligence
              </h1>
              <p className="max-w-4xl text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed">
                Transform raw data into actionable insights with automated
                pipelines, quality monitoring, and intelligent dashboards
              </p>
            </div>
          </div>

          {/* Our Features Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#6320ce]">
              Our Features
            </h2>
            <p className="max-w-3xl text-muted-foreground lg:text-lg leading-relaxed">
              Enterprise-grade data intelligence solutions that turn your raw
              data into business value
            </p>
          </div>

          {/* Features Grid - Responsive Layout */}
          {dataIntelligenceAgent && (
            <AgentCardsGrid 
              features={dataIntelligenceAgent.features} 
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

      {/* Footer */}
      <MainFooter />
      <Chatbot />
    </div>
  );
}
