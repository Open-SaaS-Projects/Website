"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductDetail from "@/components/products/ProductDetail";

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("product");
  const selected = products.find((p) => p.slug === slug) ?? null;

  const selectProduct = (nextSlug: string) => {
    router.push(`/products?product=${nextSlug}`, { scroll: false });
  };

  const goBack = () => {
    router.push("/products", { scroll: false });
  };

  if (selected) {
    return (
      <ProductDetail
        product={selected}
        allProducts={products}
        onSelect={selectProduct}
        onBack={goBack}
      />
    );
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20">
      <h1 className="mb-12 text-center text-4xl font-bold text-[#6320ce] lg:text-5xl xl:text-6xl">
        Products
      </h1>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            onClick={() => selectProduct(product.slug)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />
      <main className="flex-1">
        <Suspense fallback={null}>
          <ProductsContent />
        </Suspense>
      </main>
      <MainFooter />
      <Chatbot />
    </div>
  );
}
