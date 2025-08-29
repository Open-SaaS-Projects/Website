"use client";

import MainFooter from "@/components/main-footer";
import MainNavigation from "@/components/main-navigation";
import { Button } from "@/components/ui/button";
import BookDemoDialog from "../../components/BookDemoDialog";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { useState } from "react";
import React from "react";
import ReadyToUseGif from "@/components/ReadyToUseGif";
import Chatbot from "@/components/Chatbot";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function page() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [selectedDemoType, setSelectedDemoType] = useState<string>("");

  // Array of random GIF URLs (you can replace these with your preferred GIFs)
  const gifUrls = ["https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif"];

  interface ReadyToUseProps {
    title: string;
    description: string;
    gifUrl: string;
    gifPosition?: "left" | "right";
    onBookDemo: () => void;
  }

  function ReadyToUseSection({
    title,
    description,
    gifUrl,
    gifPosition = "left",
    onBookDemo,
  }: ReadyToUseProps) {
    return (
      <section
        className={`flex flex-col lg:flex-row items-center max-w-7xl lg:mx-auto py-16 md:py-20 lg:py-24 space-y-12 lg:space-y-0 px-6 md:px-12 lg:px-16 xl:px-24 ${
          gifPosition === "right" ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <ReadyToUseGif
            gifUrl={gifUrl}
            title={title}
            gifPosition={gifPosition}
          />
        </div>
        <div
          className={`flex flex-col w-full lg:w-1/2 space-y-8 text-center lg:text-left ${
            gifPosition === "left" ? "lg:ml-32" : "lg:mr-32"
          }`}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
            {description}
          </p>
          <Button
            size="lg"
            className="bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full px-10 py-4 text-xl font-semibold lg:self-start transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={onBookDemo}
          >
            Book a Demo
          </Button>
        </div>
      </section>
    );
  }

  return (
    <div
      className={`flex min-h-screen flex-col bg-white dark:bg-gray-900 ${poppins.variable} font-sans`}
    >
      <MainNavigation />
      <AnimateOnScroll>
        <div className="flex flex-col items-center justify-center space-y-6 text-center w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#F5F3FF] to-white">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6320ce]">
              Ready to Use Solutions
            </h1>
            <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed px-6 md:px-8">
              Built to integrate effortlessly into your workflow.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="mx-auto w-full">
          <ReadyToUseSection
            title="Customer Support"
            description="Enhance customer support through AI that intelligently understands and resolves inquiries in real time."
            gifUrl="/customer-support.gif"
            gifPosition="left"
            onBookDemo={() => {
              setSelectedDemoType("customer-support");
              setDemoDialogOpen(true);
            }}
          />
        </div>
        <div className="w-full mx-auto bg-gray-100">
          <ReadyToUseSection
            title="Document Intelligence"
            description="Transform unstructured documents and data into organized, actionable insights."
            gifUrl="/document-intelligence.gif"
            gifPosition="right"
            onBookDemo={() => {
              setSelectedDemoType("document-intelligence");
              setDemoDialogOpen(true);
            }}
          />
        </div>
      </main>
      <BookDemoDialog
        isOpen={demoDialogOpen}
        onClose={() => setDemoDialogOpen(false)}
        selectedDemoType={selectedDemoType}
      />
      <MainFooter />
      <Chatbot />
    </div>
  );
}
