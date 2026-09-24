"use client";

import TrustStripe from "@/components/home/trust-stripe";
import Hero from "@/components/home/hero";
import { SLIDES } from "@/data";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Products from "@/components/home/product";
import WhyTesq from "@/components/home/why-tesq";
import SegmentsWeServe from "@/components/home/segments-we-serve";
import CompanyWeAre from "@/components/home/company-we-are";
import CTA from "@/components/home/cta";
import ManufacturingQuality from "@/components/home/manufacturing-quality";

/*
 * Your actual product data does not contain `name`, `slug`,
 * `category` or `mfd`.
 *
 * These helpers derive the display values from the actual
 * CapacitorProduct structure.
 */

export default function Home() {
  const [active, setActive] = useState(0);
  const [isPaused] = useState(false);

  const SLIDE_DURATION = 3000;

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [active, isPaused]);

  return (
    <div>
      {/* Hero Slider */}
      <Hero />

      {/* Product Series Navigation */}
      <section className="relative z-20 mx-auto -mt-7 max-w-6xl px-4">
        <div className="grid border border-border bg-card shadow-lg sm:grid-cols-3">
          {[
            ["Fan & appliance", "Compact motor-run range"],
            ["Motor & pump", "Heavy-duty starting support"],
            ["Industrial", "Reliable power applications"],
          ].map(([title, detail], index) => (
            <Link
              key={title}
              href="/products"
              className="group flex items-center justify-between gap-4 border-b border-border px-6 py-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
            >
              <span>
                <span className="block text-[11px] font-bold uppercase text-muted-foreground">
                  0{index + 1} / Series
                </span>

                <span className="mt-1 block font-display text-base font-bold group-hover:text-primary">
                  {title}
                </span>

                <span className="mt-1 block text-xs text-muted-foreground">
                  {detail}
                </span>
              </span>

              <ArrowRightIcon className="size-5 shrink-0 text-signal transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStripe />

      {/* Products */}
      <Products />

      <ManufacturingQuality />

      {/* Why TESQ */}
      <WhyTesq />

      {/* Segments We Serve */}
      <SegmentsWeServe />

      {/* The Company We Are */}
      <CompanyWeAre />

      {/* CTA */}
      <CTA />
    </div>
  );
}
