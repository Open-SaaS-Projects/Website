"use client";

import type React from "react";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  MessageSquare,
  LayoutDashboard,
  Mail,
  BarChart3,
  Database,
  MousePointer,
  Layers,
  Users,
  Search,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Define the agent data structure
interface AgentFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Agent {
  name: string;
  title: string;
  description: string;
  path: string;
  features: AgentFeature[];
}

// Define the agents data with new names and order
const agents: Agent[] = [
  {
    name: "Customer Support Automation",
    title: "",
    description:
      "Automate your customer support with AI that understands and resolves issues instantly.",
    path: "/customer-support-agent",
    features: [
      {
        icon: <MessageSquare className="h-8 w-8 text-[#6D2FD5]" />,
        title: "AI Chat & Email Assistant",
        description:
          "Handle repetitive customer queries instantly via chat and email from account issues to FAQ responses.",
      },
      {
        icon: <Layers className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Multichannel Support",
        description:
          "Integrates with chat, email, WhatsApp, and social media to offer consistent support everywhere.",
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Auto-Triage & Routing",
        description:
          "Classifies and routes tickets to the right human agent or department when needed.",
      },
    ],
  },
  {
    name: "AI Talent Assistant",
    title: "",
    description:
      "Automate your hiring to handle high volume, tight deadlines, or complex candidate evaluations.",
    path: "/recruiting-agent",
    features: [
      {
        icon: <FileText className="h-8 w-8 text-[#6D2FD5]" />,
        title: "AI Resume Screening",
        description:
          "Quickly identify top candidates with AI. Automatically screens, scores, and ranks resumes based on job relevance.",
      },
      {
        icon: <MessageSquare className="h-8 w-8 text-[#6D2FD5]" />,
        title: "AI Job Profile",
        description:
          "Generate tailored job descriptions and interview questions instantly in alignment with your hiring goals.",
      },
      {
        icon: <LayoutDashboard className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Candidates Dashboard",
        description:
          "Track, manage, and evaluate applicants from one streamlined dashboard. Send bulk, personalized notifications.",
      },
    ],
  },
  {
    name: "Document Intelligence",
    title: "",
    description:
      "Transform unstructured documents and data into organized, actionable insights.",
    path: "/data-structuring-engine",
    features: [
      {
        icon: <FileText className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Intelligent Document Parsing",
        description:
          "Recognizes and categorizes document types. Applies logic based on layout, tone, and content.",
      },
      {
        icon: <Database className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Data Field Extraction",
        description:
          "Extracts key fields and converts data into structured formats like JSON, CSV, or database rows.",
      },
      {
        icon: <Search className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Context-Aware NLP Extraction",
        description:
          "Extracts entities and insights from free-form text. Tags categories, sentiment, and flags actions needed.",
      },
    ],
  },
  {
    name: "Data Intelligence",
    title: "",
    description:
      "Transform raw data into actionable insights with automated pipelines, quality monitoring, and intelligent dashboards.",
    path: "/data-intelligence",
    features: [
      {
        icon: <Database className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Automated Data Pipelines",
        description:
          "Seamlessly extract, clean, transform, and load data from multiple sources into your central system.",
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Dynamic Dashboards & Reports",
        description:
          "Generate interactive, role-based dashboards and reports tailored to decision-makers.",
      },
      {
        icon: <Database className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Integration-Ready Architecture",
        description:
          "Easily integrates with popular databases, cloud platforms, and BI tools like Power BI and Tableau.",
      },
    ],
  },
  {
    name: "Recommendation Engine",
    title: "",
    description:
      "Personalize every user experience with AI that understands preferences and predicts needs.",
    path: "/recommendation-engine",
    features: [
      {
        icon: <MousePointer className="h-8 w-8 text-[#6D2FD5]" />,
        title: "User Behavior Tracking",
        description:
          "Tracks clicks, searches, purchases, and interactions to understand user preferences.",
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Product/Content Recommendations",
        description:
          "Shows the most relevant items or articles to each user in real time.",
      },
      {
        icon: <Users className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Dynamic Segmentation",
        description:
          "Automatically groups users into behavioral segments for smarter targeting.",
      },
    ],
  },
  {
    name: "Growth Intelligence",
    title: "",
    description:
      "Supercharge your marketing and sales efforts with AI that generates, targets, and converts leads.",
    path: "/marketing-sales-agent",
    features: [
      {
        icon: <Mail className="h-8 w-8 text-[#6D2FD5]" />,
        title: "AI Campaign Generator",
        description:
          "Instantly create email, ad, and social content tailored to your audience and tone.",
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Lead Scoring Engine",
        description:
          "Prioritize leads using behavior, engagement, and fit scoring to improve conversions.",
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Multi-Channel Outreach",
        description:
          "Automates email, LinkedIn, and SMS sequences for follow-ups and nurturing.",
      },
    ],
  },
];

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
        {/* Reduced mb-6 to mb-4 and mt-12 to mt-4 */}
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
      {/* Reduced from h-32 md:h-32 */}

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
              {currentAgent.features.map((feature, index) => (
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
              {currentAgent.features.map((feature, index) => (
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
