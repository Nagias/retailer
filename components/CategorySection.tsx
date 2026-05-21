import { BadgeCheck, Bluetooth, Keyboard, Volume2 } from "lucide-react";

const benefits = [
  {
    icon: Volume2,
    title: "Gõ êm, click nhẹ",
    detail: "Dễ dùng ở văn phòng, lớp học và không gian chung."
  },
  {
    icon: Bluetooth,
    title: "Kết nối linh hoạt",
    detail: "Nhiều lựa chọn Bluetooth, 2.4G hoặc Type-C."
  },
  {
    icon: Keyboard,
    title: "Dễ phối setup",
    detail: "Form gọn, màu trung tính, hợp góc làm việc hiện đại."
  },
  {
    icon: BadgeCheck,
    title: "Mua tại đại lý",
    detail: "Đi thẳng tới trang FPT Shop hoặc Thế Giới Di Động."
  }
];

export default function CategorySection() {
  return (
    <section id="strengths" className="bg-hyper-soft py-10 sm:py-12">
      <div className="section-container">
        <div className="rounded-[28px] border border-hyper-border bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-hyper-orange/10 text-hyper-orange">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-hyper-text">
                      {benefit.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-hyper-muted">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
