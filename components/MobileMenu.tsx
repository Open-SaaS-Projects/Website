"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  productsOpen,
  setProductsOpen,
  solutions,
  onBookDemo,
}: any) {
  if (!mobileMenuOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t">
      <div className="py-4 space-y-4 px-4">
        <div className="space-y-2">
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="flex items-center justify-between w-full px-2 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
          >
            <span>Solutions</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                productsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {productsOpen && (
            <div className="pl-4 space-y-2 border-l-2 border-gray-200 ml-2">
              {solutions.map((solution: any, index: number) => (
                <Link
                  key={index}
                  href={solution.path}
                  className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-gray-100 rounded-md"
                  onClick={() => {
                    setProductsOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  <div className="bg-[#F5F3FF] p-1.5 rounded-md">
                    {solution.icon}
                  </div>
                  <span>{solution.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Static links */}
        {[
          { name: "Company", href: "/#company" },
          { name: "Services", href: "/#services" },
          { name: "Careers", href: "/careers" },
          { name: "Contact", href: "/contact" },
          { name: "Ready to Use", href: "/ready-to-use" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block px-2 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {/* Book a Demo Button - Mobile */}
        <div className="pt-4 border-t border-gray-200">
          <Button
            className="w-full bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full"
            onClick={() => {
              setMobileMenuOpen(false);
              onBookDemo();
            }}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
