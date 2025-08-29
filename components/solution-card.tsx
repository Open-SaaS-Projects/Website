"use client";

import { ThumbsUp } from "lucide-react";

interface SolutionCardProps {
  heading: string;
  description: string;
  className?: string;
}

export function SolutionCard({ 
  heading, 
  description, 
  className = "" 
}: SolutionCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full ${className}`}>
      <div className="bg-[#7C4DFF] rounded-full p-3 text-white flex-shrink-0">
        <ThumbsUp className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">
          {heading}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

interface SolutionSectionProps {
  title?: string;
  solutions: Array<{
    heading: string;
    description: string;
  }>;
  className?: string;
}

export function SolutionSection({ 
  title = "How Do We Solve Your Problem?",
  solutions,
  className = ""
}: SolutionSectionProps) {
  return (
    <div className={`py-12 bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] rounded-2xl mb-8 ${className}`}>
      <div className="container max-w-7xl mx-auto px-4 lg:px-16 lg:pb-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#6320ce]">
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              heading={solution.heading}
              description={solution.description}
              className={index >= 2 ? "lg:p-8" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}