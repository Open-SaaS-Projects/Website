"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/animate-on-scroll";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import { AgentCardsGrid } from "@/components/agent-card";
import { agents } from "@/data/agents";
import { SolutionSection } from "@/components/solution-card";

const solutions = [
  {
    heading: "Conversational Teammate",
    description: "No more clunky platforms, get a conversational teammate that handles recruiting tasks in real time."
  },
  {
    heading: "Fair Chance for All",
    description: "Scan 100% of resumes. Give every candidate a fair chance."
  },
  {
    heading: "Keep Candidates Informed",
    description: "Keep candidates informed at every step. No more ghosting."
  },
  {
    heading: "Pay For What You Use",
    description: "Pay for what you use, not for features you don't need."
  }
];

export default function RecruitingAgentPage() {
  const [productsOpen, setProductsOpen] = useState(false);
  
  // Find the AI Talent Assistant agent data
  const recruitingAgent = agents.find(agent => agent.name === "AI Talent Assistant");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Replace the header with MainNavigation */}
      <MainNavigation />

      <main className="flex-1">
        <div id="top"></div>
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20">
          <AnimateOnScroll>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#6320ce] mb-4">
                  AI Talent Assistant
                </h1>
                <p className="max-w-4xl text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed">
                  Automate your hiring to handle high hiring volume, tight
                  deadlines, or complex candidate evaluations
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Our Features Section */}
          <AnimateOnScroll>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#6320ce]">
                Our Features
              </h2>
              <p className="max-w-3xl text-muted-foreground lg:text-lg leading-relaxed">
                Powerful AI capabilities designed to streamline your recruitment
                process and find the perfect candidates
              </p>
            </div>
          </AnimateOnScroll>

          {/* Features Grid - Responsive Layout */}
          {recruitingAgent && (
            <AgentCardsGrid 
              features={recruitingAgent.features} 
              className="mb-16"
            />
          )}

          {/* How Do We Solve Your Problem Section */}
          <AnimateOnScroll>
            <SolutionSection solutions={solutions} />
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="flex justify-center py-8">
              <Button
                size="lg"
                className="bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full text-white"
                asChild
              >
                <Link href="/contact#top">Connect to Sales</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      {/* Replace the footer with MainFooter */}
      <MainFooter />
      <Chatbot />
    </div>
  );
}
