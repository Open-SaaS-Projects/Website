"use client";

import Link from "next/link";
import { Linkedin, MapPin, Mail, Phone } from "lucide-react";

// WhatsApp SVG icon (not in lucide-react)
function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
import { products } from "@/data/products";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
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
              Supercharging your AI transformation.
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
              <Link
                href="https://wa.me/201109343844"
                className="text-muted-foreground hover:text-[#6D2FD5]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Products column - equal width */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Products</h3>
            <nav className="flex flex-col gap-2">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
                >
                  {product.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Industries column - equal width */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Industries</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/industries/ai-for-real-estate"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                AI for Real Estate
              </Link>
              <Link
                href="/industries/ai-for-retail-ecommerce"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                AI for Retail & E-Commerce
              </Link>
              <Link
                href="/industries/ai-for-healthcare"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                AI for Healthcare
              </Link>
              <Link
                href="/industries/ai-for-manufacturing"
                className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
              >
                AI for Manufacturing
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
                <WhatsappIcon className="h-4 w-4 text-[#6D2FD5] flex-shrink-0" />
                <Link
                  href="https://wa.me/201109343844"
                  className="text-sm text-muted-foreground hover:text-[#6D2FD5]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </Link>
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
