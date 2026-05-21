import { ExternalLink } from "lucide-react";

type RetailerButtonsProps = {
  fptUrl?: string;
  tgddUrl?: string;
};

export default function RetailerButtons({ fptUrl, tgddUrl }: RetailerButtonsProps) {
  const retailers = [
    fptUrl
      ? {
          label: "FPT Shop",
          labelLines: ["Mua tại", "FPT Shop"],
          href: fptUrl,
          className:
            "border border-retailer-fpt bg-white text-retailer-fpt hover:bg-retailer-fpt hover:text-white"
        }
      : null,
    tgddUrl
      ? {
          label: "Thế Giới Di Động",
          labelLines: ["Mua tại Thế Giới", "Di Động"],
          href: tgddUrl,
          className:
            "border border-retailer-tgdd bg-white text-hyper-text hover:bg-retailer-tgdd"
        }
      : null
  ].filter(Boolean) as {
    label: string;
    labelLines: string[];
    href: string;
    className: string;
  }[];

  if (!retailers.length) {
    return null;
  }

  const isSingleRetailer = retailers.length === 1;

  return (
    <div className={`grid gap-3 ${isSingleRetailer ? "" : "sm:grid-cols-2"}`}>
      {retailers.map((retailer) => (
        <a
          key={retailer.label}
          href={retailer.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
            isSingleRetailer ? "min-h-12" : "min-h-14"
          } ${retailer.className}`}
        >
          <span
            className={`text-left ${
              isSingleRetailer ? "leading-none" : "grid leading-[1.35]"
            }`}
          >
            {(isSingleRetailer
              ? [`Mua tại ${retailer.label}`]
              : retailer.labelLines
            ).map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
          <ExternalLink size={16} className="shrink-0" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
