"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { HyperWorkProduct } from "@/data/hyperwork-products";
import RetailerButtons from "@/components/RetailerButtons";

type ProductCardProps = {
  product: HyperWorkProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrls = product.imageUrls?.length ? product.imageUrls : [product.imageUrl];
  const [activeImage, setActiveImage] = useState(0);

  function goToPreviousImage() {
    setActiveImage((current) =>
      current === 0 ? imageUrls.length - 1 : current - 1
    );
  }

  function goToNextImage() {
    setActiveImage((current) =>
      current === imageUrls.length - 1 ? 0 : current + 1
    );
  }

  return (
    <article className="flex h-full flex-col rounded-[28px] border border-hyper-border bg-white p-4 transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[22px] bg-hyper-soft">
        <img
          src={imageUrls[activeImage]}
          alt={`${product.name} - ảnh ${activeImage + 1}`}
          className="h-full w-full object-cover transition duration-300"
        />
        {imageUrls.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goToPreviousImage}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-hyper-text shadow-sm transition hover:bg-hyper-orange hover:text-white sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100"
              aria-label={`Ảnh trước của ${product.name}`}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goToNextImage}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-hyper-text shadow-sm transition hover:bg-hyper-orange hover:text-white sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100"
              aria-label={`Ảnh tiếp theo của ${product.name}`}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {imageUrls.map((imageUrl, index) => (
                <button
                  type="button"
                  key={imageUrl}
                  onClick={() => setActiveImage(index)}
                  className={`h-2 rounded-full transition ${
                    activeImage === index
                      ? "w-6 bg-hyper-orange"
                      : "w-2 bg-hyper-text/25 hover:bg-hyper-text/45"
                  }`}
                  aria-label={`Xem ảnh ${index + 1} của ${product.name}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="text-xl font-bold text-hyper-text">{product.name}</h3>
        <ul className="mt-3 flex-1 space-y-2 text-sm leading-6 text-hyper-muted">
          {product.description.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hyper-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.colorOptions.map((color) => (
            <span
              key={color.name}
              className="h-5 w-5 rounded-full border-2 border-hyper-border shadow-inner ring-1 ring-black/5"
              style={{ backgroundColor: color.hex }}
              title={color.name}
              aria-label={`Màu ${color.name}`}
            />
          ))}
        </div>
        <div className="mt-5 flex min-h-[64px] items-end">
          <RetailerButtons
            fptUrl={product.retailerLinks.fpt}
            tgddUrl={product.retailerLinks.tgdd}
          />
        </div>
      </div>
    </article>
  );
}
