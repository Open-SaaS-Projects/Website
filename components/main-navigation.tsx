"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Building2,
  ShoppingCart,
  HeartPulse,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import IndustriesDropdown from "./IndustriesDropdown";
import MobileMenu from "./MobileMenu";
import BookDemoDialog from "./BookDemoDialog";

export default function MainNavigation() {
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  // Use useEffect to ensure we're only running client-side code
  useEffect(() => {
    setIsClient(true);
  }, []);

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
          <Link
            href="/products"
            className="text-sm font-medium transition-colors hover:text-[#6D2FD5]"
          >
            Products
          </Link>
          <IndustriesDropdown
            industries={industries}
            open={industriesOpen}
            setOpen={(open) => setIndustriesOpen(open)}
          />
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
        industriesOpen={industriesOpen}
        setIndustriesOpen={setIndustriesOpen}
        industries={industries}
      />

      <BookDemoDialog
        isOpen={demoDialogOpen}
        onClose={() => setDemoDialogOpen(false)}
      />
    </header>
  );
}
