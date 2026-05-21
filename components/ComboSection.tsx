import { findProduct } from "@/data/hyperwork-products";
import SectionHeading from "@/components/SectionHeading";

const combos = [
  {
    title: "Work Essential",
    productIds: ["core-type", "core-click"],
    description:
      "Combo dễ tiếp cận cho học tập, văn phòng và nhập liệu hằng ngày."
  },
  {
    title: "Silent Setup",
    productIds: ["silentkey-mini", "silentium-mini"],
    description:
      "Combo gọn, êm, phù hợp môi trường cần tập trung và ít tiếng ồn."
  },
  {
    title: "Premium Desk",
    productIds: ["hyperone-gen-3", "silentium-gen-2"],
    description:
      "Combo cao cấp hơn cho góc làm việc hiện đại, đẹp và thoải mái."
  }
];

export default function ComboSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-container">
        <SectionHeading
          eyebrow=""
          heading="Combo khách hàng thường lựa chọn"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {combos.map((combo) => {
            const products = combo.productIds
              .map((id) => findProduct(id))
              .filter((product): product is NonNullable<ReturnType<typeof findProduct>> =>
                Boolean(product)
              );
            return (
              <article
                key={combo.title}
                className="rounded-[28px] border border-hyper-border bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="grid grid-cols-2 gap-3">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="overflow-hidden rounded-[22px] bg-hyper-soft"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-hyper-text">
                  {combo.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-hyper-muted">
                  {products.map((product) => product.name).join(" + ")}
                </p>
                <p className="mt-3 text-sm leading-6 text-hyper-muted">
                  {combo.description}
                </p>
                <p className="mt-5 text-xs leading-5 text-hyper-muted">
                  Combo là gợi ý phối sản phẩm. Việc bán theo bộ phụ thuộc từng
                  đại lý.
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
