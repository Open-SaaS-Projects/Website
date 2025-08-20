"use client";

import MainFooter from "@/components/main-footer";
import MainNavigation from "@/components/main-navigation";
import { Button } from "@/components/ui/button";
import BookDemoDialog from "../../components/BookDemoDialog";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { useState } from "react";
import React from "react";

export default function page() {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  // Array of random GIF URLs (you can replace these with your preferred GIFs)
  const gifUrls = ["https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif"];

  interface ReadyToUseCardProps {
    bgColor: string;
    title: string;
    description: string;
    gifUrl: string;
  }

  function ReadyToUseSection({
    bgColor,
    title,
    description,
    gifUrl,
  }: ReadyToUseCardProps) {
    return (
      <section
        className={`flex flex-col md:flex-row items-center py-12 space-y-8 md:space-y-0 md:space-x-16 w-full px-4 md:px-8 lg:px-16 xl:px-24 ${bgColor}`}
      >
        <div className="flex items-center justify-center md:justify-start w-full md:w-1/2 px-4 md:px-8 lg:px-16 xl:px-24">
          <img
            src={gifUrl}
            alt={title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
          <Button
            size="lg"
            className="bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full px-10 py-4 text-xl font-semibold md:self-start transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setDemoDialogOpen(true)}
          >
            Book a Demo
          </Button>
          <BookDemoDialog
            isOpen={demoDialogOpen}
            onClose={() => setDemoDialogOpen(false)}
          />
        </div>
      </section>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <MainNavigation />
      <AnimateOnScroll>
        <div className="flex flex-col items-center justify-center space-y-4 text-center w-full py-8 md:py-12 bg-gradient-to-b from-[#F5F3FF] to-white">
          <div className="space-y-2">
            <h1 className="md:text-3xl font-bold tracking-tighter text-xl text-[#6320ce] mt-8">
              Ready to Use Solutions
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed px-10">
              Help us build the future of AI Solutions for businesses
            </p>
          </div>
        </div>
      </AnimateOnScroll>
      <main className="flex-grow flex flex-col items-center justify-center">
        <ReadyToUseSection
          bgColor="bg-white"
          title="Customer Support"
          description="Ai powered customer service solutions."
          gifUrl="https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif"
        />
        <ReadyToUseSection
          bgColor="bg-gray-100"
          title="Document Intelligence"
          description="Advanced document processing and analysis."
          gifUrl="https://media.giphy.com/media/3o7aCSPyU4a1g1fX3G/giphy.gif"
        />
      </main>
      <MainFooter />
    </div>
  );
}
