"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    question: "Tôi mua HyperWork ở đâu?",
    answer:
      "Bấm nút đại lý trên từng sản phẩm để mở đúng trang bán hàng tại FPT Shop hoặc Thế Giới Di Động."
  },
  {
    question: "Giá và tồn kho xem ở đâu?",
    answer:
      "Website không hiển thị giá. Giá bán, khuyến mãi, tồn kho và giao hàng cần kiểm tra trực tiếp trên trang đại lý."
  },
  {
    question: "Vì sao có sản phẩm chỉ có một nút đại lý?",
    answer:
      "Nút chỉ hiển thị khi có link sản phẩm chính xác. Đại lý nào chưa có link sẽ được ẩn để tránh dẫn sai."
  },
  {
    question: "Màu sắc và hình ảnh có thể khác thực tế không?",
    answer:
      "Có thể khác nhẹ theo phiên bản, màu còn hàng hoặc nội dung bán kèm. Hãy kiểm tra lại trên trang đại lý trước khi mua."
  },
  {
    question: "Bảo hành và đổi trả thế nào?",
    answer:
      "Bảo hành, đổi trả và giao hàng do từng đại lý áp dụng. Xem chính sách cuối cùng tại FPT Shop hoặc Thế Giới Di Động."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="section-container">
        <SectionHeading eyebrow="FAQ" heading="Câu hỏi thường gặp" />
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-hyper-border bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-hyper-text sm:px-6"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition duration-200 ${
                      isOpen ? "rotate-180 text-hyper-orange" : "text-hyper-muted"
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-hyper-muted sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
