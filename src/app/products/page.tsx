"use client";

import { capacitorProducts } from "@/data";

import { ArrowRightIcon } from "@phosphor-icons/react";

import Link from "next/link";

import { useState } from "react";

export default function Products() {
  const [active, setActive] = useState<string>("All");

  // Your current product data does not contain the old `category` field.
  // All current products have `application: "Agriculture"`.
  const list = capacitorProducts;

  const getProductName = (product: (typeof capacitorProducts)[number]) =>
    product.modelCode ?? `${product.capacitance} Capacitor`;

  return (
    <div>
      <section className="hero-surface diag-edge text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:py-16">
          <p className="eyebrow">Product Catalogue</p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Capacitor range
          </h1>

          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Explore our capacitor range engineered for reliable performance
            across motor, pump, fan, appliance and industrial applications.
            Every product is tested for quality before dispatch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive("All")}
            className={
              "rounded-md border px-4 py-2 text-sm font-semibold transition-colors " +
              (active === "All"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground/80 hover:border-primary hover:text-primary")
            }
          >
            All
          </button>

          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground opacity-60"
            title="Product categories will be available once category data is added to the product model."
          >
            Categories coming soon
          </button>
        </div>

        {/* Product count */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {list.length}
            </span>{" "}
            products
          </p>
        </div>

        {/* Products */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => {
            const productName = getProductName(p);

            return (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="card-industrial group flex flex-col overflow-hidden"
              >
                {/* Product image */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#f4f4f2]">
                  <img
                    src={`/images/products/capacitor_products/${p.image}`}
                    alt={`${productName} - ${p.capacitance}`}
                    loading="lazy"
                    className="
                      block
                      h-full
                      w-full
                      object-contain
                      object-center
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* Product details */}
                <div className="flex flex-1 flex-col border-t border-border p-5">
                  <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
                    {p.application}
                  </p>

                  <h2 className="mt-1 text-lg font-bold group-hover:text-primary">
                    {productName}
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.capacitance} · {p.ratedVoltage} · {p.dielectric}
                  </p>

                  <dl className="mt-4 space-y-1 text-sm">
                    <div className="flex gap-2">
                      <dt className="font-semibold">Capacitance:</dt>
                      <dd className="text-muted-foreground">
                        {p.capacitance}
                      </dd>
                    </div>

                    <div className="flex gap-2">
                      <dt className="font-semibold">Voltage:</dt>
                      <dd className="text-muted-foreground">
                        {p.ratedVoltage}
                      </dd>
                    </div>

                    <div className="flex gap-2">
                      <dt className="font-semibold">Frequency:</dt>
                      <dd className="text-muted-foreground">
                        {p.ratedFrequency}
                      </dd>
                    </div>

                    <div className="flex gap-2">
                      <dt className="font-semibold">Tolerance:</dt>
                      <dd className="text-muted-foreground">
                        {p.capacitanceTolerance}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-primary">
                    Full specifications
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}