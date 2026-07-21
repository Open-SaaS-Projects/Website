"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MainNavigation from "@/components/main-navigation";
import MainFooter from "@/components/main-footer";
import Chatbot from "@/components/Chatbot";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductDetail from "@/components/products/ProductDetail";

const viewVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("product");
  const selected = products.find((p) => p.slug === slug) ?? null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const selectProduct = (nextSlug: string) => {
    router.push(`/products?product=${nextSlug}`, { scroll: false });
  };

  const goBack = () => {
    router.push("/products", { scroll: false });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selected ? `detail-${selected.slug}` : "grid"}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={viewVariants}
      >
        {selected ? (
          <ProductDetail
            product={selected}
            allProducts={products}
            onSelect={selectProduct}
            onBack={goBack}
          />
        ) : (
          <>
            <section className="bg-gradient-to-b from-purple-50 to-white px-6 pb-16 pt-20 text-center">
              <h1 className="mb-4 text-4xl font-bold text-[#6320ce] md:text-5xl">
                Products
              </h1>
              <p className="mx-auto max-w-xl text-base text-gray-500 md:text-lg">
                Smart, practical AI products built to simplify how your
                business runs, so your team can focus on what matters most.
              </p>
            </section>

            <div className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    onClick={() => selectProduct(product.slug)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
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
