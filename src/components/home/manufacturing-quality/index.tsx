import { capacitorProducts } from "@/data";
import { getProductName } from "@/libs/home";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function ManufacturingQuality() {
  const qualityProductIds = ["cap-72-440v-cyl", "cap-25-440v", "cap-50-440v"];

  const images = qualityProductIds
    .map((id) => capacitorProducts.find((product) => product.id === id))
    .filter((product): product is (typeof capacitorProducts)[number] =>
      Boolean(product),
    );

  return (
    <section className="overflow-hidden bg-[#071936] text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[600px] overflow-hidden">
          {/* Main image */}
          <div className="absolute inset-0">
            <img
              src={`/images/products/capacitor_products/${images[0]?.image}`}
              alt="TESQ capacitor manufacturing and product quality"
              className="h-full w-full object-contain bg-white"
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071936]/10 via-transparent to-[#071936]" />

          {/* Small image cards */}
          <div className="absolute bottom-7 left-7 flex gap-3">
            {images.slice(1).map((product, index) => (
              <div
                key={product.id}
                className="
                  size-24 overflow-hidden rounded-lg
                  border border-white/20
                  bg-white/95
                  shadow-2xl
                  sm:size-28
                "
              >
                <img
                  src={`/images/products/capacitor_products/${product.image}`}
                  alt={getProductName(product)}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Quality badge */}
          <div
            className="
              absolute right-6 top-6
              rounded-lg border border-white/15
              bg-[#071936]/80 px-5 py-4
              backdrop-blur-xl
            "
          >
            <p className="text-[10px] font-bold tracking-[0.18em] text-white/50">
              QUALITY STANDARD
            </p>

            <p className="mt-1 text-lg font-extrabold text-[#f15a29]">
              100% TESTED
            </p>
          </div>
        </div>

        {/* Content side */}
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#f15a29]">
              MANUFACTURING & QUALITY
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Precision at every stage of production.
            </h2>

            <span className="mt-5 block h-1 w-14 bg-[#f15a29]" />

            <p className="mt-7 leading-7 text-white/65">
              Every TESQ capacitor goes through controlled manufacturing and
              testing processes designed to maintain consistency, electrical
              performance and reliability before it reaches the customer.
            </p>

            {/* Quality points */}
            <div className="mt-10 space-y-6">
              {[
                [
                  "01",
                  "Electrical Testing",
                  "Capacitance, voltage and insulation characteristics are checked before dispatch.",
                ],
                [
                  "02",
                  "Safety Validation",
                  "Components are evaluated for reliable operation under demanding conditions.",
                ],
                [
                  "03",
                  "Production Consistency",
                  "Controlled processes help maintain consistent specifications across batches.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex gap-5 border-b border-white/10 pb-6"
                >
                  <span className="text-sm font-black text-[#f15a29]">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-bold">{title}</h3>

                    <p className="mt-1 text-sm leading-6 text-white/50">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="
                mt-9 inline-flex items-center gap-2
                rounded-md bg-[#f15a29]
                px-6 py-3.5
                text-sm font-bold text-white
                transition-transform duration-300
                hover:-translate-y-0.5
              "
            >
              About TESQ
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
