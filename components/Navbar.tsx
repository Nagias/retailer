import { ArrowRight } from "lucide-react";

const menuItems = [
  { label: "Sản phẩm", href: "#products" },
  { label: "Điểm mạnh", href: "#strengths" },
  { label: "Chọn theo nhu cầu", href: "#use-cases" },
  { label: "Mua ở đâu", href: "#retailers" },
  { label: "FAQ", href: "#faq" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-hyper-border bg-white/95 backdrop-blur">
      <nav className="section-container flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="text-xl font-black text-hyper-text">
          Hyper<span className="text-hyper-orange">Work</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-hyper-muted transition hover:text-hyper-orange"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#products"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-hyper-orange px-4 text-sm font-bold text-white transition hover:bg-hyper-orange-hover"
        >
          Xem sản phẩm
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
