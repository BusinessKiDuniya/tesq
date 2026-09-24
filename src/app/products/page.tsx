"use client";

import { capacitorProducts, productApplications } from "@/data";
import { getProductName } from "@/libs/home";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Products() {
  const [active, setActive] = useState("All");

  const list = useMemo(() => {
    if (active === "All") {
      return capacitorProducts;
    }

    return capacitorProducts.filter(
      (product) => product.application.trim() === active,
    );
  }, [active]);

  return (
    <div>
      {/* Hero */}
      <section className="hero-surface diag-edge text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:py-16">
          <p className="eyebrow">Product Catalogue</p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Capacitor range
          </h1>

          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Explore TESQ capacitor solutions across motor, AC, panel, fan,
            washing machine and other electrical applications.
          </p>
        </div>
      </section>

      {/* Catalogue */}
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

          {productApplications.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={
                "rounded-md border px-4 py-2 text-sm font-semibold transition-colors " +
                (active === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-primary hover:text-primary")
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product count */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">{list.length}</span>{" "}
            {list.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Products */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((product) => {
            const productName = getProductName(product);

            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="card-industrial group flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#f4f4f2]">
                  <img
                    src={`/images/products/capacitor_products/${product.image}`}
                    alt={`${productName} - ${product.capacitance}`}
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

                {/* Details */}
                <div className="flex flex-1 flex-col border-t border-border p-5">
                  <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
                    {product.application}
                  </p>

                  <h2 className="mt-1 text-lg font-bold group-hover:text-primary">
                    {productName}
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.capacitance} · {product.ratedVoltage} ·{" "}
                    {product.dielectric}
                  </p>

                  <dl className="mt-4 space-y-1 text-sm">
                    <div className="flex gap-2">
                      <dt className="font-semibold">Capacitance:</dt>
                      <dd className="text-muted-foreground">
                        {product.capacitance}
                      </dd>
                    </div>

                    <div className="flex gap-2">
                      <dt className="font-semibold">Voltage:</dt>
                      <dd className="text-muted-foreground">
                        {product.ratedVoltage}
                      </dd>
                    </div>

                    <div className="flex gap-2">
                      <dt className="font-semibold">Frequency:</dt>
                      <dd className="text-muted-foreground">
                        {product.ratedFrequency}
                      </dd>
                    </div>

                    <div className="flex gap-2">
                      <dt className="font-semibold">Tolerance:</dt>
                      <dd className="text-muted-foreground">
                        {product.capacitanceTolerance}
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

        {list.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
