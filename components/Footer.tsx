import { buildFptSearchUrl, buildTgddSearchUrl } from "@/lib/retailer-links";

const quickLinks = [
  { label: "Sản phẩm", href: "#products" },
  { label: "Điểm mạnh", href: "#strengths" },
  { label: "Chọn theo nhu cầu", href: "#use-cases" },
  { label: "Mua ở đâu", href: "#retailers" },
  { label: "FAQ", href: "#faq" }
];

export default function Footer() {
  return (
    <footer className="bg-hyper-dark py-12 text-white">
      <div className="section-container grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a href="#top" className="text-2xl font-semibold">
            Hyper<span className="text-hyper-orange">Work</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Phím và chuột HyperWork cho góc làm việc hiện đại.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
            Quick links
          </h3>
          <div className="mt-4 grid gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition hover:text-hyper-orange"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
            Retailer links
          </h3>
          <div className="mt-4 grid gap-3">
            <a
              href={buildFptSearchUrl("")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 transition hover:text-hyper-orange"
            >
              FPT Shop
            </a>
            <a
              href={buildTgddSearchUrl("")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 transition hover:text-hyper-orange"
            >
              Thế Giới Di Động
            </a>
          </div>
        </div>
      </div>
      <div className="section-container mt-10 border-t border-white/10 pt-6">
        <p className="text-sm text-white/55">
          © 2026 HyperWork Demo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
