"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

const logos: Record<string, string> = {
  insight: "/products/makkn-insight.png",
  desk: "/products/makkn-desk.png",
  guard: "/products/makkn-guard.png",
  docs: "/products/makkn-docs.png",
};

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex aspect-square w-full flex-col items-center justify-start overflow-hidden lg:h-72 gap-5 rounded-2xl border border-[#7C4DFF]/15 bg-white p-8 pt-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7C4DFF]/40 hover:shadow-xl"
    >
      <div className="flex h-12 shrink-0 items-center justify-center">
        <Image
          src={logos[product.slug]}
          alt={product.name}
          width={1179}
          height={384}
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-[#7C4DFF]">
        {product.category}
      </span>

      <span className="h-[3px] w-8 shrink-0 rounded-full bg-gradient-to-r from-[#6320ce] to-[#7C4DFF] transition-all duration-300 group-hover:w-14" />

      <div className="grid w-full place-items-center">
        <p className="col-start-1 row-start-1 line-clamp-4 text-[11px] leading-relaxed text-gray-500 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
          {product.tagline}
        </p>
        <span className="col-start-1 row-start-1 flex items-center gap-1.5 text-sm font-semibold text-[#6320ce] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Explore Product
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}
