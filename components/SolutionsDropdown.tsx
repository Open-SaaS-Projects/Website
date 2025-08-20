"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function SolutionsDropdown({ solutions }: { solutions: any[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#6D2FD5]"
      >
        Solutions <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-3 min-w-[280px] z-50 border border-gray-100">
          <div className="grid gap-2">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.path}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium hover:bg-gray-50 rounded-md transition-all duration-200 hover:translate-x-1"
                onClick={() => setOpen(false)}
              >
                <div className="bg-[#F5F3FF] p-2 rounded-md">
                  {solution.icon}
                </div>
                <span>{solution.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
