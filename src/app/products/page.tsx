"use client";

import { categories, products } from "@/data";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const [active, setActive] = useState<string>("All");
  const list =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <section className="hero-surface diag-edge text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:py-16">
          <p className="eyebrow">Product Catalogue</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Capacitor range
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Twelve capacitor series covering fan and appliance duty, pump and
            motor duty, and starting and industrial applications — all 440 VAC
            class unless stated, and 100% tested before dispatch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={
                "rounded-md border px-4 py-2 text-sm font-semibold transition-colors " +
                (active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-primary hover:text-primary")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.slug}
              href={"/products/" + p.slug}
              className="card-industrial group flex flex-col overflow-hidden"
            >
              <div className="flex h-52 items-center justify-center bg-surface p-4">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-border p-5">
                <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
                  {p.category}
                </p>
                <h2 className="mt-1 text-lg font-bold group-hover:text-primary">
                  {p.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.tagline}
                </p>
                <dl className="mt-4 space-y-1 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-semibold">MFD:</dt>
                    <dd className="text-muted-foreground">{p.mfd}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold">Volt:</dt>
                    <dd className="text-muted-foreground">{p.volt}</dd>
                  </div>
                </dl>
                <p className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Full specifications <ArrowRightIcon className="size-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
