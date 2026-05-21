"use client";

import { BadgeCheck, ExternalLink, SearchCheck } from "lucide-react";
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

const trustItems = [
  {
    icon: ExternalLink,
    label: "Link đúng trang sản phẩm"
  },
  {
    icon: BadgeCheck,
    label: "Mở tại đại lý chính thức"
  },
  {
    icon: SearchCheck,
    label: "Kiểm tra giá & tồn kho tại đại lý"
  }
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
                className={`min-h-10 rounded-full px-4 text-sm font-semibold transition ${
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
        <div className="mt-8 grid gap-3 rounded-[28px] border border-hyper-border bg-white p-4 sm:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hyper-orange/10 text-hyper-orange">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-hyper-text">
                  {item.label}
                </span>
              </div>
            );
          })}
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
