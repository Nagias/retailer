"use client";

import { useEffect, useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { hyperworkProducts } from "@/data/hyperwork-products";
import type { ProductUseCase } from "@/data/hyperwork-products";

type FilterKey = "all" | "keyboard" | "mouse" | ProductUseCase;

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "keyboard", label: "Bàn phím" },
  { key: "mouse", label: "Chuột" },
  { key: "office", label: "Văn phòng" },
  { key: "setup", label: "Setup gọn" },
  { key: "mobile", label: "Di động" },
  { key: "performance", label: "Hiệu suất cao" }
];

export default function ProductGridSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  useEffect(() => {
    function handleFilter(event: Event) {
      const detail = (event as CustomEvent<FilterKey>).detail;
      if (filters.some((filter) => filter.key === detail)) {
        setActiveFilter(detail);
      }
    }

    window.addEventListener("hyperwork-filter", handleFilter);
    return () => window.removeEventListener("hyperwork-filter", handleFilter);
  }, []);

  const products = useMemo(() => {
    if (activeFilter === "all") {
      return hyperworkProducts;
    }
    if (activeFilter === "keyboard" || activeFilter === "mouse") {
      return hyperworkProducts.filter(
        (product) => product.category === activeFilter
      );
    }
    return hyperworkProducts.filter((product) =>
      product.useCases.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section id="products" className="bg-hyper-soft py-16 sm:py-20">
      <div className="section-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow=""
            heading="Phím chuột có gu cùng HyperWork"
          />
          <div className="flex max-w-xl flex-wrap gap-2 lg:justify-end">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`min-h-10 rounded-full px-4 text-sm font-bold transition ${
                  activeFilter === filter.key
                    ? "bg-hyper-orange text-white"
                    : "border border-hyper-border bg-white text-hyper-muted hover:border-hyper-orange hover:text-hyper-orange"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
