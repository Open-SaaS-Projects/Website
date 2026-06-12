"use client";

import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ShoppingCart, HeartPulse, Factory, ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import ParticlesBackground from "@/components/particles-background";
import AnimateOnScroll from "@/components/animate-on-scroll";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ShoppingCart,
  HeartPulse,
  Factory,
};

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="w-full lg:py-12 relative overflow-hidden">
          <ParticlesBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-16 lg:py-20">
            <AnimateOnScroll>
              <div className="mx-auto max-w-3xl text-center">
                <motion.h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 text-gray-900"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Industries We Serve
                </motion.h1>
                <motion.p
                  className="max-w-[700px] mx-auto text-gray-500 md:text-xl mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  MAKKN's AI solutions are purpose-built for the industries that power the modern economy.
                </motion.p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="w-full py-8 md:py-12 lg:py-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => {
                const IndustryIcon = iconMap[industry.icon] || Building2;
                return (
                  <AnimateOnScroll key={industry.id} delay={index * 0.1}>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="group block h-full"
                    >
                      <div className="h-full bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all">
                        <div className="flex flex-col gap-4">
                          <div className="bg-[#6320ce] rounded-lg p-3 w-fit">
                            <IndustryIcon className="h-10 w-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {industry.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-4">
                              {industry.subtitle}
                            </p>
                            <div className="flex items-center text-[#6320ce] font-medium hover:underline group-hover:gap-2 transition-all">
                              <span>Explore {industry.title}</span>
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <MainFooter />
      <Chatbot />
    </div>
  );
}
