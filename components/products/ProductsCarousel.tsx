"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/data/products";

interface ProductsCarouselProps {
  products: Product[];
  onSelect: (product: Product) => void;
}

export default function ProductsCarousel({
  products,
  onSelect,
}: ProductsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const index = Math.round(track.scrollLeft / track.clientWidth);
        setActiveIndex(index);
        ticking = false;
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-2 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:snap-none sm:mx-0 sm:px-0 sm:pb-0 xl:grid-cols-4 xl:gap-8"
      >
        {products.map((product) => (
          <div
            key={product.slug}
            className="w-full shrink-0 snap-center sm:w-auto sm:shrink"
          >
            <ProductCard product={product} onClick={() => onSelect(product)} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to product ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-[#6320ce]" : "w-2 bg-[#6320ce]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
