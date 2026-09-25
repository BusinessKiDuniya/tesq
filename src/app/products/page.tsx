"use client";

import { capacitorProducts, productApplications } from "@/data";
import { getProductName } from "@/lib/home";
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
      <section className="relative isolate overflow-hidden bg-[#071a2d] text-primary-foreground">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(37,99,235,0.38),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(14,165,233,0.16),transparent_35%)]" />

        {/* Product-side glow */}
        <div className="pointer-events-none absolute -right-24 top-1/2 size-[420px] -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />

        {/* Decorative dots */}
        <div className="pointer-events-none absolute right-8 top-10 hidden opacity-30 lg:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className="size-1.5 rounded-full bg-blue-200" />
            ))}
          </div>
        </div>

        {/* Decorative ring */}
        <div className="pointer-events-none absolute -right-20 top-1/2 hidden size-[420px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-primary-foreground/50">
            <span>Home</span>
            <span>/</span>
            <span className="text-primary-foreground/80">
              Product Catalogue
            </span>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Product Catalogue
            </p>
          </div>

          {/* Heading */}
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Capacitors engineered for{" "}
            <span className="text-accent">every application.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/70 sm:text-lg sm:leading-8">
            Explore the TESQ range of capacitor solutions for motors, air
            conditioning, fans, pumps, washing machines, control panels and
            other electrical applications.
          </p>

          {/* Product categories */}
          <div className="mt-9 flex flex-wrap gap-2">
            {[
              "Motor Capacitors",
              "AC Capacitors",
              "Fan Capacitors",
              "Pump Capacitors",
              "Panel Solutions",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom diagonal edge */}
        <div className="absolute bottom-0 left-0 h-10 w-full bg-[#f7faff] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
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
