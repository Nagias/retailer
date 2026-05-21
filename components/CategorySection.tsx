import {
  BatteryCharging,
  Bluetooth,
  Keyboard,
  MousePointerClick,
  Volume2
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const strengths = [
  {
    id: "quiet",
    icon: Volume2,
    metric: "Êm",
    title: "Gõ & click nhẹ",
    detail: "Giảm ồn khi làm việc"
  },
  {
    id: "connection",
    icon: Bluetooth,
    metric: "3",
    title: "Kiểu kết nối",
    detail: "Bluetooth / 2.4G / Type-C"
  },
  {
    id: "layout",
    icon: Keyboard,
    metric: "65-100%",
    title: "Layout linh hoạt",
    detail: "Gọn bàn, dễ phối setup"
  },
  {
    id: "battery",
    icon: BatteryCharging,
    metric: "Pin",
    title: "Dùng dài ngày",
    detail: "Sạc nhanh, ít gián đoạn"
  }
];

export default function CategorySection() {
  return (
    <section id="strengths" className="overflow-hidden bg-hyper-soft py-16 sm:py-20">
      <div className="section-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow=""
            heading="Setup gọn hơn, làm việc đã hơn"
            description="Phím êm, chuột nhẹ, kết nối nhanh và đủ tinh gọn để bàn làm việc luôn sẵn sàng."
          />
          <div className="hidden min-w-[210px] items-center gap-3 rounded-full border border-hyper-border bg-white px-4 py-3 shadow-sm lg:flex">
            <MousePointerClick size={20} className="text-hyper-orange" aria-hidden="true" />
            <span className="text-sm font-bold text-hyper-text">
              Tối ưu cho thao tác hằng ngày
            </span>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <article
                  key={strength.id}
                  className="group relative overflow-hidden rounded-[28px] border border-hyper-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-hyper-orange/45 hover:shadow-soft"
                >
                  <div className="absolute right-5 top-5 text-5xl font-black leading-none text-hyper-soft transition duration-300 group-hover:text-hyper-orange/10">
                    0{index + 1}
                  </div>

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-hyper-orange/10 text-hyper-orange transition duration-300 group-hover:bg-hyper-orange group-hover:text-white">
                      <Icon size={26} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="relative mt-8">
                    <p className="text-4xl font-black tracking-normal text-hyper-text">
                      {strength.metric}
                    </p>
                    <h3 className="mt-3 text-lg font-bold text-hyper-text">
                      {strength.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-hyper-muted">
                      {strength.detail}
                    </p>
                  </div>

                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
