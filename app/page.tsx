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

      <main className="flex-1 container max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section - Now using the AgentCarousel component */}
        <section
          id="features"
          className="w-full py-8 md:py-16 lg:py-20 bg-muted/50 rounded-2xl mb-8"
        >
          <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll>
              {/* Add an ID to the heading for scroll targeting */}
              <h2
                id="features-heading"
                className="text-3xl font-bold text-[#6320ce] text-center mb-14 lg:mb-12"
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
          className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] rounded-2xl mb-8"
        >
          <div className="container mx-auto px-4 md:px-6">
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

        {/* Ready to Use Solutions Section - Integrated */}
        <section
          id="ready-to-use"
          className="w-full py-8 md:py-16 lg:py-20 bg-white rounded-2xl mb-8"
        >
          <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 lg:mb-12">
                <h2 className="text-3xl font-bold text-[#6320ce]">
                  Ready to Use Solutions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Instantly deployable AI solutions designed for immediate
                  business impact
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <AnimateOnScroll delay={0.1}>
                <Card className="h-full border-2 hover:border-[#6320ce]/30 transition-colors duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src="https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif"
                        alt="Customer Support"
                        className="w-24 h-24 object-contain rounded-lg"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#6320ce] text-center">
                      <img
                        src="https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif"
                        alt="Customer Support"
                        className="w-24 h-24 object-contain rounded-lg"
                      />
                    </CardTitle>
                    <CardTitle className="text-xl font-bold text-[#6320ce] text-center">
                      Customer Support Agent
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      AI-powered customer service solutions that provide instant
                      support and improve customer satisfaction around the
                      clock.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Card className="h-full border-2 hover:border-[#6320ce]/30 transition-colors duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src="https://media.giphy.com/media/3o7aCSPyU4a1g1fX3G/giphy.gif"
                        alt="Document Intelligence"
                        className="w-24 h-24 object-contain rounded-lg"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#6320ce] text-center">
                      Document Intelligence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      Advanced document processing and analysis that transforms
                      unstructured data into organized, actionable insights.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll delay={0.3}>
              <div className="flex justify-center">
                <Link href="/ready-to-use">
                  <Button
                    size="lg"
                    className="bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full px-10 py-4 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Explore More Solutions
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Company Section - Updated with Mission, Vision, and Values */}
        <section
          id="company"
          className="w-full py-8 md:py-16 lg:py-20 rounded-2xl mb-8"
        >
          <div className="container mx-auto px-4 md:px-6">
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
