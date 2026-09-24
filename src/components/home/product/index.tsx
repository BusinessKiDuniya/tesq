import { capacitorProducts } from "@/data";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function Products() {
  const featuredProductIds = [
    "cap-180-440v",
    "cap-50-440v",
    "cap-50-4-440v",
    "cap-72-440v-cyl",
    "tcv-1zt329",
    "tc7ts-zio6",
  ];

  const featuredProducts = featuredProductIds
    .map((id) => capacitorProducts.find((product) => product.id === id))
    .filter((product): product is (typeof capacitorProducts)[number] =>
      Boolean(product),
    );

  const getProductName = (product: (typeof capacitorProducts)[number]) => {
    return product.modelCode ?? `${product.capacitance} Capacitor`;
  };

  const getProductDescription = (
    product: (typeof capacitorProducts)[number],
  ) => {
    return `${product.capacitance} • ${product.ratedVoltage} • ${product.ratedFrequency}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Product Catalogue</p>

          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Capacitors for every motor duty
          </h2>

          <span className="rule-accent mt-4" />
        </div>

        <Link
          href="/products"
          className="text-sm font-bold text-primary hover:underline"
        >
          See all {capacitorProducts.length} products →
        </Link>
      </div>

      <div className="relative mt-10">
        {/* Product Slider */}
        <div
          id="product-slider"
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="
                  group
                  shrink-0
                  snap-start
                  overflow-hidden
                  card-industrial
                  w-[85%]
                  sm:w-[calc((100%-24px)/2)]
                  lg:w-[calc((100%-72px)/4)]
                "
            >
              {/* IMAGE */}
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={`/images/products/capacitor_products/${product.image}`}
                  alt={getProductName(product)}
                  loading="lazy"
                  className="
                      block
                      h-full
                      w-full
                      object-contain
                      object-center
                      transition-transform
                      duration-500
                      group-hover:scale-[1.07]
                    "
                />
              </div>

              {/* CONTENT */}
              <div className="border-t border-border bg-card p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  {product.application}
                </p>

                <h3 className="mt-1 text-lg font-bold group-hover:text-primary">
                  {getProductName(product)}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {getProductDescription(product)}
                </p>

                <p className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Specifications
                  <ArrowRightIcon className="size-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            aria-label="Previous products"
            onClick={() => {
              document
                .getElementById("product-slider")
                ?.scrollBy({ left: -400, behavior: "smooth" });
            }}
            className="flex size-11 items-center justify-center border border-border bg-background text-foreground transition hover:bg-primary hover:text-white"
          >
            <ArrowLeftIcon className="size-4" />
          </button>

          <button
            type="button"
            aria-label="Next products"
            onClick={() => {
              document
                .getElementById("product-slider")
                ?.scrollBy({ left: 400, behavior: "smooth" });
            }}
            className="flex size-11 items-center justify-center border border-border bg-background text-foreground transition hover:bg-primary hover:text-white"
          >
            <ArrowRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
