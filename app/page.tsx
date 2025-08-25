"use client";

import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import AgentCarousel from "@/components/agent-carousel";
import AnimateOnScroll from "@/components/animate-on-scroll";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CompanyBlock from "@/components/CompanyBlock";
import ValueCard from "@/components/ValueCard";
import CircularLogo from "@/components/CircularLogo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { valuesData } from "@/data/values";
import Link from "next/link";

export default function LandingPage() {
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to ensure we're only running client-side code
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If we're not on the client yet, render a simple loading state
  if (!isClient) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <MainNavigation />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20">
          <HeroSection />
        </div>

        {/* Features Section - Now using the AgentCarousel component */}
        <section
          id="features"
          className="w-full py-8 md:py-16 lg:py-20 bg-muted/50"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <AnimateOnScroll>
              {/* Add an ID to the heading for scroll targeting */}
              <h2
                id="features-heading"
                className="text-3xl font-bold text-[#6320ce] text-center mb-20 lg:mb-12"
              >
                Our Solutions
              </h2>
              <AgentCarousel />
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE]"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <AnimateOnScroll>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
                <h2 className="text-3xl font-bold text-[#6320ce]">
                  Our Services
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Comprehensive services tailored to your business needs
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  delay={(index + 1) * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Company Section - Updated with Mission, Vision, and Values */}
        <section id="company" className="w-full py-8 md:py-16 lg:py-20 mb-8">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            {/* Company Logo at the top */}
            <AnimateOnScroll>
              <div className="text-center mb-8">
                <CircularLogo size="large" asLink={false} />
              </div>
            </AnimateOnScroll>

            {/* Mission and Vision Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <CompanyBlock
                title={companyData.mission.title}
                description={companyData.mission.description}
                icon={companyData.mission.icon}
                delay={0.1}
              />
              <CompanyBlock
                title={companyData.vision.title}
                description={companyData.vision.description}
                icon={companyData.vision.icon}
                delay={0.2}
              />
            </div>

            {/* Company Values Section */}
            <AnimateOnScroll delay={0.3}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#6320ce] mb-4">
                  Our Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
            </AnimateOnScroll>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {valuesData.map((value, index) => (
                <ValueCard
                  key={value.id}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>

            {/* Company Description */}
            <AnimateOnScroll delay={0.9}>
              <div className="text-center mt-16">
                <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Derived from the Arabic word for "enablement," MAKKN is driven
                  by a clear purpose: To enable businesses in their AI
                  transformation through smart, practical AI solutions that
                  simplify business operations, boost efficiency, and deliver
                  measurable value.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}
