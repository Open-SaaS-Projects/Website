"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface IndustriesDropdownProps {
  industries: any[];
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

export default function IndustriesDropdown({
  industries,
  open: controlledOpen,
  setOpen: controlledSetOpen,
}: IndustriesDropdownProps) {
  return (
    <div className="relative">
      <button
        onClick={() => controlledSetOpen?.(!controlledOpen)}
        className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#6D2FD5]"
      >
        Industries <ChevronDown className="h-4 w-4" />
      </button>
      {controlledOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[280px] z-50 border border-gray-100">
          <div className="grid gap-2">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.path}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium hover:bg-gray-50 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => controlledSetOpen?.(false)}
              >
                <div className="bg-[#F5F3FF] p-2 rounded-md">
                  {industry.icon}
                </div>
                <span>{industry.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
