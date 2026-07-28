"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
}

export default function ProductDetail({
  product,
  allProducts,
  onSelect,
}: ProductDetailProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product.slug]);

  return (
    <div className="w-full px-4 py-8 md:px-8 md:py-12 lg:flex lg:gap-10 lg:px-12">
      <aside className="sticky top-20 z-30 -mx-4 mb-8 border-b border-gray-100 bg-white/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/80 md:-mx-8 md:px-8 lg:top-24 lg:mx-0 lg:mb-0 lg:w-40 lg:flex-shrink-0 lg:self-start lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <div className="flex justify-between gap-1 overflow-visible pb-2 sm:gap-3 lg:justify-start lg:flex-col lg:gap-3 lg:pb-0">
          {allProducts.map((p) => (
            <button
              key={p.slug}
              onClick={() => onSelect(p.slug)}
              className={`flex min-w-0 flex-1 items-center justify-center rounded-lg p-1 transition-colors sm:p-2 lg:w-full lg:flex-none lg:justify-start ${
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
                className="h-5 w-auto object-contain sm:h-7"
              />
            </button>
          ))}
        </div>
      </aside>

      <div className="min-w-0 flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="mb-8 flex h-14 items-center justify-center lg:justify-start">
              <Image
                src={wordmarkLogos[product.slug]}
                alt={product.name}
                width={1179}
                height={384}
                priority
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="mb-12 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground lg:text-left lg:mx-0 mx-auto">
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
                  {highlight.image ? (
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm md:w-1/2">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-gray-200 text-sm font-medium text-gray-400 md:w-1/2">
                      Screenshot
                    </div>
                  )}
                  <div className="w-full text-center md:w-1/2 md:text-left">
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
              <h2 className="mb-6 text-center text-2xl font-bold text-[#6320ce] lg:text-left">
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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
