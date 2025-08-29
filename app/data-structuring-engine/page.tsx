"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import { AgentCardsGrid } from "@/components/agent-card";
import { SolutionSection } from "@/components/solution-card";
import { agents } from "@/data/agents";

export default function DataStructuringEnginePage() {
  const [productsOpen, setProductsOpen] = useState(false);
  
  // Find the Document Intelligence agent data
  const documentIntelligenceAgent = agents.find(agent => agent.name === "Document Intelligence");
  
  // Define solutions for this page
  const solutions = [
    {
      heading: "Turn Chaos into Clarity",
      description: "Makes sense of massive volumes of emails, PDFs, forms, and documents. Converts messy inputs into clean, searchable records."
    },
    {
      heading: "Accelerate Processes",
      description: "Cuts time spent on manual data entry or reviewing forms/documents. Enables faster decisions across departments."
    },
    {
      heading: "Reduce Errors and Risks",
      description: "Avoids human error in data transcription. Flags missing or inconsistent fields automatically."
    },
    {
      heading: "Unlock Insights from Previously Unusable Data",
      description: "Extracts data from legacy documents and sources previously siloed. Powers analytics, audits, and automation with new visibility."
    }
  ];

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
                Document Intelligence
              </h1>
              <p className="max-w-4xl text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed">
                Transform unstructured documents and data into organized,
                actionable insights
              </p>
            </div>
          </div>

          {/* Our Features Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#6320ce]">
              Our Features
            </h2>
            <p className="max-w-3xl text-muted-foreground lg:text-lg leading-relaxed">
              Advanced AI capabilities that transform your document processing
              workflow
            </p>
          </div>

          {/* Features Grid - Responsive Layout */}
          {documentIntelligenceAgent && (
            <AgentCardsGrid 
              features={documentIntelligenceAgent.features} 
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
