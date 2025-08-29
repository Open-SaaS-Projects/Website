"use client";

import type React from "react";
import { agents } from "../data/agents";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Define the variants for the animation
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function AgentCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [error, setError] = useState(false);

  // Calculate the index for the current page
  const agentIndex = ((page % agents.length) + agents.length) % agents.length;
  const currentAgent = agents[agentIndex];

  // Function to navigate to the next or previous page
  const navigate = useCallback(
    (newDirection: number) => {
      try {
        setPage([page + newDirection, newDirection]);
      } catch (err) {
        console.error("Navigation error:", err);
        setError(true);
      }
    },
    [page]
  );

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isPaused && !error) {
      const interval = setInterval(() => {
        navigate(1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [navigate, isPaused, error]);

  // If there's an error, show a simplified version
  if (error) {
    return (
      <div className="py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg text-black font-bold">
                  {agent.name}
                </CardTitle>
                {/* Added text-black and font-bold */}
                <CardDescription className="flex-grow">
                  {agent.description}
                </CardDescription>
              </CardHeader>
              <div className="p-6 pt-0 mt-auto">
                <Button
                  className="w-full bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full"
                  asChild
                >
                  <Link href={agent.path}>Learn More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Reduced top margin for mobile view */}
      <div className="flex flex-col items-center justify-center space-y-2 text-center mb-4 mt-4 md:mt-16">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-black mb-2">
                {currentAgent.name}
              </h2>
              {/* Changed text-[#6320ce] to text-black */}
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 md:mt-2 no-underline">
                {currentAgent.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Reduced spacer div height */}
      <div className="h-32 md:h-32 lg:h-12"></div>

      <div className="mx-auto w-full items-center gap-6 py-4 relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            {/* Mobile view - stack cards vertically */}
            <div className="block lg:hidden space-y-6">
              {currentAgent.features.slice(0, 3).map((feature, index) => (
                <Card
                  key={index}
                  className="h-full group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#6D2FD5]/50"
                >
                  <CardHeader className="h-auto py-6">
                    {feature.icon}
                    <CardTitle className="text-base font-bold">
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Desktop view - grid layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
              {currentAgent.features.slice(0, 3).map((feature, index) => (
                <Card
                  key={index}
                  className="h-full group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#6D2FD5]/50"
                >
                  <CardHeader className="min-h-[200px] py-6">
                    {feature.icon}
                    <CardTitle className="text-base font-bold">
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Reduced spacer div height */}
      <div className="h-[650px] sm:h-[550px] md:h-[550px] lg:h-[220px]"></div>
      {/* Reduced from h-[550px] sm:h-[450px] md:h-[400px] lg:h-[250px] */}

      {/* Navigation controls and Pagination indicators in flex container */}
      <div className="flex justify-center items-center gap-4 md:mt-10 lg:mt-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white h-8 w-8 md:h-10 md:w-10"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          <span className="sr-only">Previous</span>
        </Button>

        {/* Pagination indicators */}
        <div className="flex justify-center gap-2">
          {agents.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === agentIndex ? "bg-[#6D2FD5] w-6" : "bg-gray-300"
              }`}
              onClick={() => setPage([index, index > agentIndex ? 1 : -1])}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white h-8 w-8 md:h-10 md:w-10"
          onClick={() => navigate(1)}
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Explore More button - adjusted margin */}
      <div className="flex justify-center mt-16 md:mt-12 lg:mt-6 relative z-20">
        {/* Reduced from mt-8 */}
        <Button
          size="lg"
          className="bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full relative z-20"
          asChild
        >
          <Link href={currentAgent.path}>Explore More</Link>
        </Button>
      </div>
    </div>
  );
}
