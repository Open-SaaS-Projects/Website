"use client";

import type { Job } from "@/data/jobs";

interface StatsBarProps {
  jobs: Job[];
}

export default function StatsBar({ jobs }: StatsBarProps) {
  const total = jobs.length;
  const active = jobs.filter((j) => j.status === "active").length;
  const inactive = jobs.filter((j) => j.status === "inactive").length;

  const stats = [
    { label: "Total Positions", value: total, color: "text-[#6320ce]" },
    { label: "Active", value: active, color: "text-emerald-600" },
    { label: "Inactive", value: inactive, color: "text-gray-400" },
  ];

  return (
    <div className="flex gap-3 sm:grid sm:grid-cols-3 sm:gap-4 overflow-x-auto pb-1 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-3 aspect-square flex-1 min-w-0 sm:aspect-auto sm:block sm:px-5 sm:py-4"
        >
          <p className="mb-1 text-center text-[10px] leading-tight sm:text-left sm:text-xs font-medium uppercase tracking-wide text-gray-400">
            {stat.label}
          </p>
          <p className={`text-2xl sm:text-3xl font-semibold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
