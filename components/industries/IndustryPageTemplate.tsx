"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  FileText,
  MessageSquare,
  TrendingUp,
  Database,
  Users,
  Building2,
  ShoppingCart,
  HeartPulse,
  Factory,
  Zap,
  AlertCircle,
} from "lucide-react";
import type { Industry } from "@/data/industries";
import ParticlesBackground from "@/components/particles-background";
import AnimateOnScroll from "@/components/animate-on-scroll";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BarChart3,
  FileText,
  MessageSquare,
  TrendingUp,
  Database,
  Users,
  Building2,
  ShoppingCart,
  HeartPulse,
  Factory,
  Zap,
  AlertCircle,
};

interface IndustryPageTemplateProps {
  industry: Industry;
}

export default function IndustryPageTemplate({
  industry,
}: IndustryPageTemplateProps) {
  const IndustryIcon = iconMap[industry.icon] || Building2;

  // Function to scroll to solutions section
  const scrollToSolutions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const solutionsSection = document.getElementById("solutions");
    if (solutionsSection) {
      const navbarHeight = 80;
      const elementPosition = solutionsSection.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full lg:py-12 relative overflow-hidden bg-gray-50">
        <ParticlesBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24 lg:py-32">
          <AnimateOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-[#6320ce] rounded-xl p-4">
                  <IndustryIcon className="h-12 w-12 text-white" />
                </div>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 text-gray-900"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {industry.title}
              </motion.h1>
              <motion.p
                className="max-w-[700px] mx-auto text-gray-500 md:text-xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {industry.subtitle}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-[#6320ce] hover:bg-[#5210b0] rounded-full px-6 py-3"
                    >
                      Connect to Sales
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-[#6320ce] text-[#6320ce] hover:bg-[#6320ce]/10 px-6 py-3"
                    onClick={scrollToSolutions}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="text-[#6320ce] font-semibold text-sm uppercase tracking-wide mb-2">
                Key Challenges
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What {industry.title} Teams Face
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Common obstacles that slow down growth and efficiency
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {industry.challenges.map((challenge, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#6320ce] rounded-lg p-2">
                      <AlertCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {challenge.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="w-full py-16 md:py-20 lg:py-24 bg-gray-50"
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="text-[#6320ce] font-semibold text-sm uppercase tracking-wide mb-2">
                Our Solutions
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How MAKKN Solves It
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                AI-powered solutions designed specifically for your industry
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {industry.solutions.map((solution, index) => {
              const SolutionIcon = iconMap[solution.icon] || BarChart3;
              return (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#6320ce] rounded-lg p-3 flex-shrink-0">
                        <SolutionIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Ready to Transform {industry.title} with AI?
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Connect with our team to explore how MAKKN's AI solutions can
                drive measurable results for your organization.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-block"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#6320ce] hover:bg-[#5210b0] rounded-full text-white px-6 py-3"
                  >
                    Connect to Sales
                  </Button>
                </Link>
              </motion.div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
