"use client";

import type React from "react";
import AnimateOnScroll from "@/components/animate-on-scroll";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import { activeJobs } from "@/data/jobs";
import JobCard from "@/components/careers/jobCard";
import EmptyPositions from "@/components/careers/emptyPositions";

export default function CareersPage() {
  const hasJobs = activeJobs.length > 0;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <MainNavigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white px-6 pb-16 pt-20 text-center">
          <AnimateOnScroll>
            <h1 className="mb-4 text-4xl font-bold text-[#6320ce] md:text-5xl">
              Join Our Team
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-500 md:text-lg">
              Join a high-impact team shaping the future of AI and digital
              transformation.
            </p>
          </AnimateOnScroll>
        </section>

        {/* Open Positions Section */}
        <section className="mx-auto max-w-3xl px-6 py-16">
          <AnimateOnScroll>
            <h2 className="mb-6 text-2xl font-bold text-[#6320ce]">
              Open Positions
            </h2>
          </AnimateOnScroll>
          {hasJobs ? (
            <div className="flex flex-col gap-3">
              {activeJobs.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} />
              ))}
            </div>
          ) : (
            <EmptyPositions />
          )}
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
      <Chatbot />
    </div>
  );
}
