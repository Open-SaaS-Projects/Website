"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

const wordmarkLogos: Record<string, string> = {
  insight: "/products/makkn-insight.png",
  desk: "/products/makkn-desk.png",
  guard: "/products/makkn-guard.png",
  docs: "/products/makkn-docs.png",
};

interface ProductDetailProps {
  product: Product;
  allProducts: Product[];
  onSelect: (slug: string) => void;
  onBack: () => void;
}

export default function ProductDetail({
  product,
  allProducts,
  onSelect,
  onBack,
}: ProductDetailProps) {
  return (
    <div className="w-full px-4 py-8 md:px-8 md:py-12 lg:flex lg:gap-10 lg:px-12">
      <aside className="mb-8 lg:sticky lg:top-24 lg:mb-0 lg:w-40 lg:flex-shrink-0 lg:self-start">
        <button
          onClick={onBack}
          className="mb-4 hidden items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#6320ce] lg:flex"
        >
          <ArrowLeft className="h-4 w-4" />
          Products
        </button>
        <div className="flex gap-4 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0">
          {allProducts.map((p) => (
            <button
              key={p.slug}
              onClick={() => onSelect(p.slug)}
              className={`flex flex-shrink-0 items-center justify-center rounded-lg p-2 transition-colors lg:w-full lg:justify-start ${
                p.slug === product.slug
                  ? "bg-[#F5F3FF]"
                  : "hover:bg-[#F5F3FF]/60"
              }`}
            >
              <Image
                src={wordmarkLogos[p.slug]}
                alt={p.name}
                width={1179}
                height={384}
                className="h-7 w-auto object-contain"
              />
            </button>
          ))}
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <button
          onClick={onBack}
          className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#6320ce] lg:hidden"
        >
          <ArrowLeft className="h-4 w-4" />
          Products
        </button>

        <div className="mb-8 flex h-14 items-center">
          <Image
            src={wordmarkLogos[product.slug]}
            alt={product.name}
            width={1179}
            height={384}
            priority
            className="h-full w-auto object-contain"
          />
        </div>
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {product.tagline}
        </p>

        <div className="mb-16 space-y-12">
          {product.highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`flex flex-col items-center gap-6 md:flex-row md:gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-gray-200 text-sm font-medium text-gray-400 md:w-1/2">
                Screenshot
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {highlight.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 rounded-2xl bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] p-8">
          <h2 className="mb-6 text-2xl font-bold text-[#6320ce]">
            Full Feature List
          </h2>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {product.featureList.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-gray-700"
              >
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6320ce]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center py-4">
          <Button
            size="lg"
            className="rounded-full bg-[#6320ce] text-white hover:bg-[#6320ce]/90"
            asChild
          >
            <Link href="/contact#top">Connect to Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
