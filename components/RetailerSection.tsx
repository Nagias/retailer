import { ExternalLink, Store } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { buildFptSearchUrl, buildTgddSearchUrl } from "@/lib/retailer-links";

const retailers = [
  {
    title: "FPT Shop",
    description:
      "Mở trang FPT Shop để kiểm tra giá, ưu đãi, tồn kho và lựa chọn giao hàng tại thời điểm mua.",
    cta: "Xem HyperWork tại FPT Shop",
    href: buildFptSearchUrl(""),
    className:
      "border border-retailer-fpt bg-white text-retailer-fpt hover:bg-retailer-fpt hover:text-white"
  },
  {
    title: "Thế Giới Di Động",
    description:
      "Mở trang Thế Giới Di Động để xem giá, tồn kho, giao hàng hoặc cửa hàng gần bạn.",
    cta: "Xem HyperWork tại TGDĐ",
    href: buildTgddSearchUrl(""),
    className:
      "border border-retailer-tgdd bg-white text-hyper-text hover:bg-retailer-tgdd"
  }
];

export default function RetailerSection() {
  return (
    <section id="retailers" className="bg-hyper-soft py-16 sm:py-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="MUA Ở ĐÂU"
          heading="Mua HyperWork tại đại lý gần bạn"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {retailers.map((retailer) => (
            <article
              key={retailer.title}
              className="rounded-[28px] border border-hyper-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hyper-orange/10 text-hyper-orange">
                <Store size={25} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-hyper-text">
                {retailer.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-hyper-muted">
                {retailer.description}
              </p>
              <a
                href={retailer.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-semibold transition hover:-translate-y-0.5 ${retailer.className}`}
              >
                {retailer.cta}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-7 rounded-3xl border border-hyper-border bg-white p-5 text-sm leading-6 text-hyper-muted">
          Giá, tồn kho, khuyến mãi và giao hàng có thể thay đổi theo từng đại lý.
          Vui lòng kiểm tra thông tin cuối cùng trước khi mua.
        </p>
      </div>
    </section>
  );
}
