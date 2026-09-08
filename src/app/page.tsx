"use client";
import { products } from "@/data";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CopyrightIcon,
  DropIcon,
  FactoryIcon,
  FanIcon,
  FileZipIcon,
  GaugeIcon,
  PackageIcon,
  ShieldCheckIcon,
  SnowflakeIcon,
  WindIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const strengths = [
  {
    icon: ShieldCheckIcon,
    title: "Quality &amp; Reliability",
    points: [
      "100% tested in our Delhi plant",
      "Long life expectancy",
      "Engineered to international standards",
    ],
    detail: "Capacitance, insulation and surge checks",
  },
  {
    icon: GaugeIcon,
    title: "Safety First",
    points: [
      "Tested safety features on each phase",
      "Over-pressure disconnection",
      "Non-PCB pollutant materials",
    ],
    detail: "Stable performance in demanding conditions",
  },
  {
    icon: FactoryIcon,
    title: "Efficiency &amp; Productivity",
    points: [
      "Easy installation ergonomics",
      "Time saving components",
      "Pan-India distributor network",
    ],
    detail: "Ratings, leads and enclosures made to spec",
  },
];

const segments = [
  { icon: FanIcon, label: "Ceiling & Exhaust Fans" },
  { icon: SnowflakeIcon, label: "Air Conditioning" },
  { icon: DropIcon, label: "Water Pumps" },
  { icon: WindIcon, label: "Air Coolers" },
  { icon: CopyrightIcon, label: "Industrial Motors" },
  { icon: FileZipIcon, label: "Power Correction" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-surface diag-edge text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div className="relative z-10">
            <p className="eyebrow">Energy Efficiency Capacitors</p>
            <h1 className="mt-4 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
              Heavy micron capacitors,
              <span className="block text-accent">engineered in India</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              TESQ Capacitors manufactures MPP self-healing, electrolytic and
              gel filled capacitors for ceiling fans, coolers, submersible
              pumps, air conditioning and industrial motors — built to IS:1709
              and IS:2993 and 100% tested before dispatch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
              >
                View Product Range <ArrowRightIcon className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-white/10"
              >
                Send Bulk Enquiry
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[
                ["15+", "Years of expertise"],
                ["12", "Capacitor series"],
                ["100%", "Tested output"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="text-3xl font-extrabold text-accent">{k}</dt>
                  <dd className="text-xs tracking-wide text-primary-foreground/70 uppercase">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative z-10">
            <img
              src={"/images/products/group.jpg"}
              alt="Range of TESQ capacitors including box type, cylindrical and square capacitors"
              className="w-full rounded-lg bg-white/95 p-4 shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

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
              // search={{ category: title }}
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

      {/* Trust strip */}
      <section className="border-b border-border bg-surface mt-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "ISO 9001:2015 Certified Company",
            "IS:1709 &amp; IS:2993 Compliant",
            "RoHS Compliant Materials",
            "Burst Proof, Self-Healing Design",
          ].map((t) => (
            <div key={t} className="flex items-center gap-3">
              <CheckCircleIcon className="size-5 shrink-0 text-accent" />
              <span
                className="text-sm font-semibold text-foreground/85"
                dangerouslySetInnerHTML={{ __html: t }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
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
            See all 12 series →
          </Link>
        </div>

        <div className="relative mt-10">
          {/* Slider */}
          <div
            id="product-slider"
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          >
            {products.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                href={"/products/" + p.slug}
                className="card-industrial group min-w-[85%] shrink-0 snap-start overflow-hidden sm:min-w-[48%] lg:min-w-[calc(33.333%-16px)]"
              >
                <div className="flex h-48 items-center justify-center bg-surface p-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <div className="border-t border-border p-5">
                  <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
                    {p.category}
                  </p>

                  <h3 className="mt-1 text-lg font-bold group-hover:text-primary">
                    {p.name}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">{p.mfd}</p>

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
              ←
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
              →
            </button>
          </div>
        </div>
      </section>

      {/* Why TESQ */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="eyebrow">Why TESQ</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Reliability and safety on every installation
          </h2>
          <span className="rule-accent mt-4" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-card p-7"
              >
                <s.icon className="size-8 text-primary" />
                <h3
                  className="mt-4 text-xl font-bold"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <ul className="mt-4 space-y-2.5">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments we serve */}
      <section className="border-y border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="eyebrow">Segments we serve</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Engineered around real applications
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {segments.map((segment) => (
              <div
                key={segment.label}
                className="group border border-primary/20 bg-card px-3 py-7 transition-colors hover:border-primary"
              >
                <segment.icon className="mx-auto size-9 text-primary transition-transform group-hover:-translate-y-1" />
                <p className="mt-4 text-sm font-bold leading-snug">
                  {segment.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The company we are */}
      <section className="overflow-hidden bg-card">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          <div className="px-4 py-16 sm:px-8 lg:py-24 lg:pr-16">
            <p className="eyebrow">The company we are</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Precision built into every batch
            </h2>
            <span className="rule-accent mt-4" />
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              TESQ Capacitors manufactures dependable motor-run and motor-start
              solutions from Delhi for OEMs, distributors and electrical
              businesses across India. Every batch is tested before dispatch.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {strengths.map((strength) => (
                <div key={strength.title}>
                  <strength.icon className="size-7 text-signal" />
                  <h3 className="mt-3 text-base font-bold">{strength.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {strength.detail}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discover TESQ <ArrowRightIcon className="size-4" />
            </Link>
          </div>

          <div className="company-panel relative flex min-h-[440px] items-center justify-center px-8 py-16 text-primary-foreground">
            <div className="relative z-10 w-full max-w-lg">
              <p className="text-sm font-bold uppercase text-accent">
                Quality in numbers
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px bg-primary-foreground/20">
                {[
                  ["15+", "Years of expertise"],
                  ["12", "Product series"],
                  ["100%", "Output tested"],
                  ["Pan-India", "Supply support"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-primary-deep/80 p-6 sm:p-8">
                    <p className="text-3xl font-extrabold text-accent sm:text-4xl">
                      {value}
                    </p>
                    <p className="mt-2 text-sm text-primary-foreground/75">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Built for your specification</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Need bulk supply or a custom OEM rating?
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Share your MFD, voltage, terminal type and monthly quantity for
              pricing and lead-time guidance.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-signal px-7 py-3.5 text-sm font-bold text-signal-foreground transition-opacity hover:opacity-90"
          >
            <PackageIcon className="size-4" /> Request a quotation
          </Link>
        </div>
      </section>
    </div>
  );
}
