"use client";

import AnimateOnScroll from "@/components/animate-on-scroll";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function ValueCard({
  title,
  description,
  icon,
  delay = 0,
}: ValueCardProps) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 group p-6 text-center h-56 flex flex-col justify-center items-center">
        <div className="bg-[#6D2FD5] rounded-full p-3 text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 text-center">{description}</p>
      </div>
    </AnimateOnScroll>
  );
}
