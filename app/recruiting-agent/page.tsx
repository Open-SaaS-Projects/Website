"use client";
import { Button } from "@/components/ui/button";
import {
  FileText,
  MessageSquare,
  LayoutDashboard,
  Bell,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/animate-on-scroll";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";

export default function RecruitingAgentPage() {
  const [productsOpen, setProductsOpen] = useState(false);

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
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6D2FD5]/5 to-[#6320ce]/5 rounded-xl"></div>

            {/* Mobile/Tablet: Horizontal Scroll */}
            <div className="lg:hidden">
              <div className="flex overflow-x-auto pb-8 pt-4 px-4 snap-x snap-mandatory scrollbar-hide">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <FileText className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          AI Resume Screening
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Quickly identify top candidates with AI. Automatically
                          screens, scores, and ranks resumes based on job
                          relevance—saving you hours of manual review.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <MessageSquare className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          AI Job Profile
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Generate tailored job descriptions and interview
                          questions instantly. Ensuring consistency, clarity,
                          and alignment with your hiring goals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <LayoutDashboard className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Candidates Dashboard
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Track, manage, and evaluate applicants from one
                          streamlined dashboard. Complete with filters, status
                          updates, and communication tools.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Bell className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Candidate Notification
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Send bulk, personalized notifications to keep
                          candidates informed at every stage ensuring a
                          transparent, timely experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none lg:hidden"></div>
            </div>

            {/* Large Screens: Grid Layout */}
            <div className="hidden lg:block p-6">
              <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      AI Resume Screening
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Quickly identify top candidates with AI. Automatically
                      screens, scores, and ranks resumes based on job
                      relevance—saving you hours of manual review.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      AI Job Profile
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Generate tailored job descriptions and interview questions
                      instantly. Ensuring consistency, clarity, and alignment
                      with your hiring goals.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <LayoutDashboard className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Candidates Dashboard
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Track, manage, and evaluate applicants from one
                      streamlined dashboard. Complete with filters, status
                      updates, and communication tools.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Bell className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Candidate Notification
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Send bulk, personalized notifications to keep candidates
                      informed at every stage ensuring a transparent, timely
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How Do We Solve Your Problem Section */}
          <AnimateOnScroll>
            <div className="py-12 bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] rounded-2xl mb-8">
              <div className="container max-w-7xl mx-auto px-4 lg:px-16 lg:pb-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#6320ce]">
                  How Do We Solve Your Problem?
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <AnimateOnScroll delay={0.1}>
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                      <div className="bg-[#6D2FD5] rounded-full p-3 text-white flex-shrink-0">
                        <ThumbsUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Conversational Teammate
                        </h3>
                        <p className="text-gray-600">
                          No more clunky platforms, get a conversational
                          teammate that handles recruiting tasks in real time.
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={0.2}>
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                      <div className="bg-[#6D2FD5] rounded-full p-3 text-white flex-shrink-0">
                        <ThumbsUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Fair Chance for All
                        </h3>
                        <p className="text-gray-600">
                          Scan 100% of resumes. Give every candidate a fair
                          chance.
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={0.3}>
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                      <div className="bg-[#6D2FD5] rounded-full p-3 text-white flex-shrink-0">
                        <ThumbsUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Keep Candidates Informed
                        </h3>
                        <p className="text-gray-600">
                          Keep candidates informed at every step. No more
                          ghosting.
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={0.4}>
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                      <div className="bg-[#6D2FD5] rounded-full p-3 text-white flex-shrink-0">
                        <ThumbsUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Pay For What You Use
                        </h3>
                        <p className="text-gray-600">
                          Pay for what you use, not for features you don't need.
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
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
