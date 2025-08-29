"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/particles-background";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Function to handle smooth scrolling to features section
  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      const navbarHeight = 80;
      const elementPosition = featuresSection.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to handle smooth scrolling to services section
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const navbarHeight = 80;
      const elementPosition = servicesSection.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full lg:py-12 relative overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Smarter Solutions. Simpler Work.
            </motion.h1>
            <motion.p
              className="max-w-[600px] mx-auto text-muted-foreground md:text-xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Supercharging Your Digital Transformation with AI Software
              Solutions
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full"
                  asChild
                >
                  <a href="#features-heading" onClick={scrollToFeatures}>
                    Explore Our Solutions
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#6320ce] text-[#6320ce] hover:bg-[#6320ce]/10"
                  asChild
                >
                  <a href="#services" onClick={scrollToServices}>
                    Explore Our Services
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
