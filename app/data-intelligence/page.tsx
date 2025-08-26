"use client";
import { Button } from "@/components/ui/button";
import { Database, Shield, BarChart3, Layers, ThumbsUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Import the MainNavigation and MainFooter components
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";

export default function DataIntelligencePage() {
  const [productsOpen, setProductsOpen] = useState(false);

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
                          <Database className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Automated Data Pipelines
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Seamlessly extract, clean, transform, and load data
                          from multiple sources (e.g., CRM, ERP, spreadsheets)
                          into your central system on a schedule or in
                          real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Shield className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Data Quality Monitoring
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Detect anomalies, duplicates, and missing values
                          automatically, with real-time alerts and built-in
                          validation rules to ensure clean, trustworthy data.
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
                          Dynamic Dashboards & Reports
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Generate interactive, role-based dashboards and
                          reports tailored to decision-makers, with drill-down
                          capabilities and customizable KPIs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group">
                      <div className="p-4 md:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                        <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Layers className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Integration-Ready Architecture
                        </h3>
                        <p className="text-gray-600 relative z-10 text-sm md:text-base">
                          Easily integrates with popular databases (PostgreSQL,
                          BigQuery), cloud platforms (AWS, Azure), and BI tools
                          (Power BI, Tableau, Looker).
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
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Automated Data Pipelines
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Seamlessly extract, clean, transform, and load data from
                      multiple sources into your central system on schedule or
                      in real-time.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Data Quality Monitoring
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Detect anomalies, duplicates, and missing values
                      automatically, with real-time alerts and built-in
                      validation rules.
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
                      Dynamic Dashboards & Reports
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Generate interactive, role-based dashboards and reports
                      tailored to decision-makers, with drill-down capabilities
                      and customizable KPIs.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#7C4DFF]/20 hover:shadow-lg transition-all duration-300 hover:border-[#7C4DFF]/50 h-full group hover:-translate-y-1">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C4DFF]/10 to-transparent rounded-bl-full"></div>
                    <div className="bg-[#7C4DFF] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Layers className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Integration-Ready Architecture
                    </h3>
                    <p className="text-gray-600 relative z-10 leading-relaxed">
                      Easily integrates with popular databases, cloud platforms
                      (AWS, Azure), and BI tools (Power BI, Tableau, Looker).
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
                      Eliminates Manual Data Work
                    </h3>
                    <p className="text-gray-600">
                      No more wasting hours on spreadsheet wrangling—automate
                      your data flow and spend time analyzing, not cleaning.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#7C4DFF] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Ensures Consistent & Reliable Insights
                    </h3>
                    <p className="text-gray-600">
                      By catching data issues early and applying transformation
                      rules consistently, your reports and models become far
                      more reliable.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#7C4DFF] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Empowers Faster Decisions
                    </h3>
                    <p className="text-gray-600">
                      Real-time, auto-updated dashboards means decision-makers
                      always have the latest insights, no need to wait for
                      reports.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                  <div className="bg-[#7C4DFF] rounded-full p-3 text-white flex-shrink-0">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Scales with Your Business
                    </h3>
                    <p className="text-gray-600">
                      Whether you're a startup or an enterprise, the modular,
                      integration-ready system grows with your data complexity
                      and needs.
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

      {/* Footer */}
      <MainFooter />
      <Chatbot />
    </div>
  );
}
