"use client";

import Link from "next/link";
import { Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function MainFooter() {
  const [logoError, setLogoError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to ensure we're only running client-side code
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If we're not on the client yet, render a simple footer
  if (!isClient) {
    return (
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} MAKKN Technologies, Inc. All
            rights reserved.
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container mx-auto px-4 md:px-6">
        {/* Updated grid with equal column widths and proper spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {/* Company info column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {logoError ? (
                <div className="h-10 text-[#6320ce] font-bold text-2xl">
                  MAKKN
                </div>
              ) : (
                <img
                  src="/makkn-logo.webp"
                  alt="MAKKN Logo"
                  className="h-20 w-auto"
                  onError={() => setLogoError(true)}
                />
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Supercharging your AI transformation since 2025.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/makkn/"
                className="text-muted-foreground hover:text-[#6D2FD5]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Solutions column - equal width */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Solutions</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/customer-support-agent"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Customer Support Automation
              </Link>
              <Link
                href="/recruiting-agent"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                AI Talent Assistant
              </Link>
              <Link
                href="/data-structuring-engine"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Document Intelligence
              </Link>
              <Link
                href="/data-intelligence"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Data Intelligence
              </Link>
              <Link
                href="/recommendation-engine"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Recommendation Engine
              </Link>
              <Link
                href="/marketing-sales-agent"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Growth Intelligence
              </Link>
            </nav>
          </div>

          {/* Company column - equal width */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/#company"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                About
              </Link>
              <Link
                href="/#services"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Services
              </Link>
              <Link
                href="/careers"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Office column - equal width */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Office</h3>
            <nav className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#6D2FD5] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Building No.11G/4, New Maadi, In Front of Gate 3 Technology
                  Village, Cairo, Egypt.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#6D2FD5] flex-shrink-0" />
                <Link
                  href="mailto:info@makkn.com"
                  className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
                >
                  info@makkn.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-0 w-0 text-[#6D2FD5] flex-shrink-0" />
                <Link
                  href="tel:+201234567890"
                  className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
                ></Link>
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} MAKKN Technologies, Inc. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-[#6D2FD5]"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-[#6D2FD5]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
