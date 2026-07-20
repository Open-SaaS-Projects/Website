"use client";

import type { Product } from "@/data/products";
import ProductLogo from "./ProductLogo";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex w-56 flex-col items-center gap-4 rounded-xl border border-[#7C4DFF]/20 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#7C4DFF]/50 hover:shadow-lg"
    >
      <ProductLogo slug={product.slug} size={72} />
      <span className="text-base font-semibold text-gray-800">
        {product.name}
      </span>
    </button>
  );
}
