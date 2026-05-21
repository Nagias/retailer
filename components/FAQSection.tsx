"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    question: "Tôi mua sản phẩm HyperWork ở đâu?",
    answer:
      "Bạn có thể bấm nút FPT Shop hoặc Thế Giới Di Động trên từng sản phẩm để mở đúng trang bán hàng của đại lý."
  },
  {
    question: "Vì sao một số sản phẩm chỉ có một nút đại lý?",
    answer:
      "Nút mua chỉ hiển thị khi sản phẩm có link đại lý chính xác. Nếu chưa có link tại FPT Shop hoặc Thế Giới Di Động, nút tương ứng sẽ được ẩn."
  },
  {
    question: "Giá bán và tồn kho được kiểm tra ở đâu?",
    answer:
      "Website không hiển thị giá. Giá bán, khuyến mãi, voucher, tồn kho và thời gian giao hàng cần kiểm tra trực tiếp trên trang của đại lý."
  },
  {
    question: "Tôi nên chọn sản phẩm theo tiêu chí nào?",
    answer:
      "Bạn có thể lọc theo nhu cầu như văn phòng, setup gọn, di động hoặc hiệu suất cao. Mỗi card sản phẩm cũng có mô tả ngắn, tag và màu sẵn có để so sánh nhanh."
  },
  {
    question: "Màu sắc và hình ảnh sản phẩm có phải bản cuối cùng không?",
    answer:
      "Hình ảnh và màu sắc được dùng để tham khảo sản phẩm. Tùy chọn màu còn hàng, phiên bản bán ra và phụ kiện kèm theo cần kiểm tra lại tại đại lý trước khi mua."
  },
  {
    question: "Bảo hành và đổi trả xử lý như thế nào?",
    answer:
      "Chính sách bảo hành, đổi trả và giao hàng do từng đại lý áp dụng. Bạn nên xem kỹ thông tin trên trang FPT Shop hoặc Thế Giới Di Động trước khi đặt mua."
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
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-hyper-text sm:px-6"
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
