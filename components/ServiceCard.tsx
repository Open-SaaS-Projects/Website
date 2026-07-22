"use client";

import AnimateOnScroll from "@/components/animate-on-scroll";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#6D2FD5]/20 hover:shadow-lg transition-all duration-300 hover:border-[#6D2FD5]/50 group w-full h-[290px]">
        <div className="p-6 relative overflow-hidden h-full flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6D2FD5]/10 to-transparent rounded-bl-full"></div>
          <div className="bg-[#6D2FD5] rounded-full text-white inline-flex items-center justify-center w-14 h-14 mb-4 group-hover:scale-110 transition-transform duration-300 shrink-0">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 shrink-0">{title}</h3>
          <p className="text-base leading-relaxed text-gray-600 relative z-10 overflow-y-auto">
            {description}
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
