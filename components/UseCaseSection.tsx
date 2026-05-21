"use client";

import {
  ArrowDown,
  Briefcase,
  Laptop,
  MoveRight,
  Zap
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import type { ProductUseCase } from "@/data/hyperwork-products";

const useCases: {
  filter: ProductUseCase;
  icon: typeof Briefcase;
  title: string;
  summary: string;
}[] = [
  {
    filter: "office",
    icon: Briefcase,
    title: "Làm việc văn phòng",
    summary: "Ưu tiên gõ êm, click nhẹ và dùng thoải mái cả ngày."
  },
  {
    filter: "setup",
    icon: Laptop,
    title: "Setup gọn đẹp",
    summary: "Ưu tiên thiết kế tối giản, ít dây và dễ phối góc làm việc."
  },
  {
    filter: "mobile",
    icon: MoveRight,
    title: "Học tập & di chuyển",
    summary: "Ưu tiên thiết bị nhỏ gọn, dễ mang theo và kết nối nhanh."
  },
  {
    filter: "performance",
    icon: Zap,
    title: "Hiệu suất cao",
    summary: "Ưu tiên thao tác chắc tay, phản hồi tốt và nhiều tính năng hơn."
  }
];

export default function UseCaseSection() {
  function handleUseCaseClick(filter: ProductUseCase) {
    window.dispatchEvent(
      new CustomEvent("hyperwork-filter", {
        detail: filter
      })
    );
  }

  return (
    <section id="use-cases" className="bg-white py-16 sm:py-20">
      <div className="section-container">
        <SectionHeading
          eyebrow=""
          heading="Bạn cần phím / chuột cho nhu cầu gì?"
          description="Bấm vào nhu cầu phù hợp để lọc nhanh danh sách phím và chuột HyperWork bên dưới."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <article
                key={useCase.filter}
                className="group relative overflow-hidden rounded-[28px] border border-hyper-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-hyper-orange/45 hover:shadow-soft"
              >
                <div className="absolute right-5 top-5 text-5xl font-semibold leading-none text-hyper-soft transition duration-300 group-hover:text-hyper-orange/10">
                  0{index + 1}
                </div>
                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hyper-orange/10 text-hyper-orange transition duration-300 group-hover:bg-hyper-orange group-hover:text-white">
                    <Icon size={23} aria-hidden="true" />
                  </div>
                </div>

                <div className="relative mt-8 min-h-[132px]">
                  <h3 className="text-2xl font-semibold leading-tight text-hyper-text">
                    {useCase.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-hyper-muted">
                    {useCase.summary}
                  </p>
                </div>

                <a
                  href="#products"
                  onClick={() => handleUseCaseClick(useCase.filter)}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-hyper-border px-4 text-sm font-semibold text-hyper-text transition hover:border-hyper-orange hover:text-hyper-orange"
                >
                  Lọc sản phẩm
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
