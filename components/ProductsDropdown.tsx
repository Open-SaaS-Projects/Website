"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

interface ProductsDropdownItem {
  name: string;
  slug: string;
  icon?: ReactNode;
}

interface ProductsDropdownProps {
  items: ProductsDropdownItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ProductsDropdown({
  items,
  open,
  setOpen,
}: ProductsDropdownProps) {
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#6D2FD5]"
      >
        Products
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[220px] z-50 border border-gray-100">
          <div className="grid gap-2">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium hover:bg-gray-50 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setOpen(false)}
              >
                {item.icon && (
                  <div className="bg-[#F5F3FF] p-2 rounded-md">
                    {item.icon}
                  </div>
                )}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
