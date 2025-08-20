"use client";

import AnimateOnScroll from "@/components/animate-on-scroll";

interface CompanyBlockProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function CompanyBlock({
  title,
  description,
  icon,
  delay = 0,
}: CompanyBlockProps) {
  return (
    <AnimateOnScroll delay={delay}>
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="bg-[#6320ce] rounded-full p-3 text-white">{icon}</div>
          <h2 className="text-3xl font-bold text-[#6320ce]">{title}</h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </AnimateOnScroll>
  );
}
