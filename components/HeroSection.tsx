import { ArrowRight, BadgeCheck, MousePointer2 } from "lucide-react";

export default function HeroSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="top" className="bg-white pb-16 pt-10 sm:pb-20 lg:pt-16">
      <div className="section-container grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="inline-flex rounded-full bg-hyper-orange/10 px-4 py-2 text-sm font-bold text-hyper-orange">
            HyperWork Gear
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-normal text-hyper-text sm:text-6xl lg:text-7xl">
            Nâng gu góc làm việc từ phím chạm đầu tiên
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-hyper-muted">
            Khám phá phím và chuột HyperWork gọn, êm, dễ phối setup. Chọn đúng
            thiết bị cho nhu cầu của bạn và mua nhanh tại FPT Shop hoặc Thế Giới
            Di Động.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-hyper-orange px-6 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-hyper-orange-hover"
            >
              Xem sản phẩm
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#retailers"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-hyper-border bg-white px-6 text-base font-bold text-hyper-text transition hover:-translate-y-0.5 hover:border-hyper-blue hover:text-hyper-blue"
            >
              Mua tại đại lý
              <MousePointer2 size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-2 top-8 z-10 max-w-[250px] rounded-3xl border border-hyper-border bg-white p-4 shadow-soft">
            <div className="flex gap-3">
              <BadgeCheck className="mt-1 text-hyper-orange" size={22} />
              <p className="text-sm font-bold leading-5 text-hyper-text">
                Mua chính hãng tại FPT Shop & Thế Giới Di Động
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-hyper-border bg-hyper-soft shadow-soft">
            <img
              src={`${basePath}/images/hyperwork-office-banner.png`}
              alt="Bộ bàn phím và chuột HyperWork trong góc làm việc hiện đại"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
