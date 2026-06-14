"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  MessageSquare,
  Users,
  FileText,
  BarChart3,
  TrendingUp,
  Database,
  Building2,
  ShoppingCart,
  HeartPulse,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import SolutionsDropdown from "./SolutionsDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import MobileMenu from "./MobileMenu";
import BookDemoDialog from "./BookDemoDialog";

export default function MainNavigation() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  // Use useEffect to ensure we're only running client-side code
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Solution items with icons and new names/order
  const solutions = [
    {
      name: "Customer Support Intelligence",
      path: "/customer-support-agent",
      icon: <MessageSquare className="h-4 w-4 text-[#6D2FD5]" />,
    },
    {
      name: "Document Intelligence",
      path: "/data-structuring-engine",
      icon: <FileText className="h-4 w-4 text-[#6D2FD5]" />,
    },
    {
      name: "Data Intelligence",
      path: "/data-intelligence",
      icon: <Database className="h-4 w-4 text-[#6D2FD5]" />,
    },
    {
      name: "Recommendation Engine",
      path: "/recommendation-engine",
      icon: <BarChart3 className="h-4 w-4 text-[#6D2FD5]" />,
    },
    {
      name: "Growth Intelligence",
      path: "/marketing-sales-agent",
      icon: <TrendingUp className="h-4 w-4 text-[#6D2FD5]" />,
    },
  ];

  // Industry items with icons
  const industries = [
    {
      name: "AI for Real Estate",
      path: "/industries/ai-for-real-estate",
      icon: <Building2 className="h-4 w-4 text-[#6D2FD5]" />,
    },
    {
      name: "AI for Retail & E-Commerce",
      path: "/industries/ai-for-retail-ecommerce",
      icon: <ShoppingCart className="h-4 w-4 text-[#6D2FD5]" />,
    },
    {
      name: "AI for Healthcare",
      path: "/industries/ai-for-healthcare",
      icon: <HeartPulse className="h-4 w-4 text-[#6D2FD5]" />,
    },
    {
      name: "AI for Manufacturing",
      path: "/industries/ai-for-manufacturing",
      icon: <Factory className="h-4 w-4 text-[#6D2FD5]" />,
    },
  ];

  // If we're not on the client yet, render a simple header
  if (!isClient) {
    return (
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-20 items-center">
          <div className="items-center gap-2">
            <Logo />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-4 pr-6 lg:pl-6 lg:pr-8">
      <div className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex gap-6">
          <SolutionsDropdown solutions={solutions} />
          <IndustriesDropdown industries={industries} />
          <Link
            href="/#services"
            className="text-sm font-medium transition-colors hover:text-[#6D2FD5]"
          >
            Services
          </Link>
          <Link
            href="/#company"
            className="text-sm font-medium transition-colors hover:text-[#6D2FD5]"
          >
            About
          </Link>
          <Link
            href="/careers"
            className="text-sm font-medium transition-colors hover:text-[#6D2FD5]"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-[#6D2FD5]"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-auto p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        productsOpen={productsOpen}
        setProductsOpen={setProductsOpen}
        industriesOpen={industriesOpen}
        setIndustriesOpen={setIndustriesOpen}
        solutions={solutions}
        industries={industries}
      />

      <BookDemoDialog
        isOpen={demoDialogOpen}
        onClose={() => setDemoDialogOpen(false)}
      />
    </header>
  );
}
