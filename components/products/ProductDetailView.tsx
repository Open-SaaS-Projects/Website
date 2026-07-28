"use client";

import { useRouter } from "next/navigation";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import ProductDetail from "@/components/products/ProductDetail";
import { products, type Product } from "@/data/products";

export default function ProductDetailView({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />
      <main className="flex-1">
        <ProductDetail
          product={product}
          allProducts={products}
          onSelect={(slug) =>
            router.push(`/products/${slug}`, { scroll: false })
          }
        />
      </main>
      <MainFooter />
      <Chatbot />
    </div>
  );
}
