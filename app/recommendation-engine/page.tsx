"use client";
import { Button } from "@/components/ui/button";
import { MousePointer, BarChart3, Map, Users, ThumbsUp } from "lucide-react";
import { useState } from "react";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import Link from "next/link";

export default function RecommendationEnginePage() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Replace the header with MainNavigation */}
      <MainNavigation />

      <main className="flex-1 font-medium">
        <div id="top"></div>
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#6320ce] mb-4">
                Recommendation Engine
              </h1>
              <p className="max-w-4xl text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed">
                Personalize every user experience with AI that understands
                preferences and predicts needs
              </p>
            </div>
          </div>

          {/* Our Features Section */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#6320ce]">
              Our Features
            </h2>
            <p className="max-w-3xl text-muted-foreground lg:text-lg leading-relaxed">
              AI-powered personalization that creates unique experiences for
              every user
            </p>
          </div>

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
                          <MousePointer className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          User Behavior Tracking
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Tracks clicks, searches, purchases, and interactions
                          to understand preferences.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <BarChart3 className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Product/Content Recommendations
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Shows the most relevant items or articles to each user
                          in real time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Map className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Context-Aware Suggestions
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Tailors recommendations based on time, device, and
                          location.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Dynamic Segmentation
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Automatically groups users into behavioral segments
                          for smarter targeting.
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
                      <MousePointer className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      User Behavior Tracking
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Tracks clicks, searches, purchases, and interactions to
                      understand preferences.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Product/Content Recommendations
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Shows the most relevant items or articles to each user in
                      real time.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Map className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Context-Aware Suggestions
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Tailors recommendations based on time, device, and
                      location.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Dynamic Segmentation
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Automatically groups users into behavioral segments for
                      smarter targeting.
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
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#6D2FD5] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Boost Engagement & Time on Site
                    </h3>
                    <p className="text-gray-600">
                      Users stay longer when they see what matters most to them.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#6D2FD5] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Increase Conversions
                    </h3>
                    <p className="text-gray-600">
                      Personalized experiences drive more clicks, purchases, and
                      actions.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#6D2FD5] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Make Every User Feel Understood
                    </h3>
                    <p className="text-gray-600">
                      Create experiences that feel tailor-made without manual
                      effort.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#6D2FD5] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Scale Personalization Effortlessly
                    </h3>
                    <p className="text-gray-600">
                      Serve 1 or 1 million users, AI personalizes each journey
                      in real time.
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
      <Chatbot />
    </div>
  );
}
