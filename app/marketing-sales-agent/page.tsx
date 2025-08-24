"use client";
import { Button } from "@/components/ui/button";
import { Mail, BarChart3, Database, ThumbsUp, TrendingUp } from "lucide-react";
import { useState } from "react";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Link from "next/link";

export default function MarketingSalesAgentPage() {
  const [productsOpen, setProductsOpen] = useState(false);

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

          {/* Features Grid - Responsive Layout */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF]/5 to-[#311B92]/5 rounded-xl"></div>

            {/* Mobile/Tablet: Horizontal Scroll */}
            <div className="lg:hidden">
              <div className="flex overflow-x-auto pb-8 pt-4 px-4 snap-x snap-mandatory scrollbar-hide">
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          AI Campaign Generator
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Instantly create email, ad, and social content
                          tailored to your audience and tone.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <BarChart3 className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Lead Scoring Engine
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Prioritize leads using behavior, engagement, and fit
                          scoring to improve conversions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Database className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          CRM Integration
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Syncs with major CRMs (e.g., Salesforce, HubSpot) to
                          streamline lead management and communication.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <TrendingUp className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Multi-Channel Outreach
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Automates email, LinkedIn, and SMS sequences for
                          follow-ups and nurturing.
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
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      AI Campaign Generator
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Instantly create email, ad, and social content tailored to
                      your audience and tone.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Lead Scoring Engine
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Prioritize leads using behavior, engagement, and fit
                      scoring to improve conversions.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      CRM Integration
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Syncs with major CRMs (e.g., Salesforce, HubSpot) to
                      streamline lead management and communication.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Multi-Channel Outreach
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Automates email, LinkedIn, and SMS sequences for
                      follow-ups and nurturing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How Do We Solve Your Problem Section */}
          <div className="py-12 bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] rounded-2xl mb-8">
            <div className="container max-w-7xl mx-auto px-4 lg:px-16 lg:pb-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-[#6320ce]">
                How Do We Solve Your Problem?
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#7C4DFF] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Never Miss a Lead
                    </h3>
                    <p className="text-gray-600">
                      Capture, track, and follow up with leads automatically, no
                      more missed opportunities.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#7C4DFF] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Spend Less on Ads, Get More ROI
                    </h3>
                    <p className="text-gray-600">
                      Target the right audience with tailored messaging that
                      converts better.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#7C4DFF] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Shorten the Sales Cycle
                    </h3>
                    <p className="text-gray-600">
                      Auto-personalized content and follow-ups close deals
                      faster.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#7C4DFF] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Do More With Less
                    </h3>
                    <p className="text-gray-600">
                      Run multi-channel campaigns without a full marketing team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
    </div>
  );
}
