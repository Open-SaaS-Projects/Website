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
    heading: "Reduce Response Time",
    description: "Slash average response time with always-on support, even outside office hours."
  },
  {
    heading: "No More Missed Tickets",
    description: "Ensure every inquiry is logged, triaged, and addressed without manual intervention."
  },
  {
    heading: "Empower Your Team",
    description: "Let your human agents focus on complex issues while AI handles the repetitive load."
  },
  {
    heading: "Scale Without Growing Headcount",
    description: "Support more customers without hiring more staff, scale efficiently."
  }
];

export default function CustomerSupportAgentPage() {
  const [productsOpen, setProductsOpen] = useState(false);
  
  // Find the Customer Support Automation agent data
  const customerSupportAgent = agents.find(agent => agent.name === "Customer Support Automation");

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
                Customer Support Automation
              </h1>
              <p className="max-w-4xl text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed">
                Automate your customer support with AI that understands and
                resolves issues instantly
              </p>
            </div>
          </div>

          {/* Our Features Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#6320ce]">
              Our Features
            </h2>
            <p className="max-w-3xl text-muted-foreground lg:text-lg leading-relaxed">
              Discover powerful AI capabilities designed to transform your
              customer support operations
            </p>
          </div>

          {/* Features Grid - Responsive Layout */}
          {customerSupportAgent && (
            <AgentCardsGrid 
              features={customerSupportAgent.features} 
              className="mb-16"
            />
          )}

          {/* How Do We Solve Your Problem Section */}
          <SolutionSection solutions={solutions} />

          <div className="flex justify-center py-8">
            <Button
              size="lg"
              className="bg-[#6320ce] hover:bg-[#311B92]/90 rounded-full text-white"
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
