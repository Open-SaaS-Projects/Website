import type React from "react";
import AnimateOnScroll from "@/components/animate-on-scroll";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import JobCard from "@/components/careers/jobCard";
import EmptyPositions from "@/components/careers/emptyPositions";
import { getActiveJobs } from "@/app/actions/jobs";

export default async function CareersPage() {
  const jobs = await getActiveJobs();
  const hasJobs = jobs.length > 0;

  return (
    <div className="flex min-h-screen flex-col">
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
            <h2 className="mb-6 text-2xl font-bold text-[#6320ce] text-center md:text-left">
              Open Positions
            </h2>
          </AnimateOnScroll>
          {hasJobs ? (
            <div className="flex flex-col gap-3">
              {jobs.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} />
              ))}
            </div>
          ) : (
            <EmptyPositions />
          )}
        </section>
      </main>

      <MainFooter />
      <Chatbot />
    </div>
  );
}
