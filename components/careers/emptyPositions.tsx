"use client";

import { motion } from "framer-motion";
import { CalendarX } from "lucide-react";

export default function EmptyPositions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 px-8 py-16 text-center"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-50">
        <CalendarX className="h-7 w-7 text-[#6320ce]" strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">
        No Open Positions
      </h3>
      <p className="max-w-sm text-sm leading-relaxed text-gray-500">
        We&apos;re not hiring right now, but feel free to check back soon!
        We&apos;re always looking for talented individuals to join our team.
      </p>
    </motion.div>
  );
}
