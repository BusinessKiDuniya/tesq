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
      <section className="hero-surface diag-edge relative isolate overflow-hidden text-primary-foreground">
        {/* Ambient background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 size-[420px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-40 right-0 size-[500px] rounded-full bg-accent/10 blur-3xl" />

          {/* Engineering grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-24">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* Eyebrow / live badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>

              <span className="text-xs font-bold tracking-[0.16em] text-primary-foreground/80 uppercase">
                Energy Efficiency Capacitors
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-4xl text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Heavy micron capacitors
              <span className="mt-2 block text-accent">
                engineered for performance.
              </span>
            </h1>

            {/* Accent line */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-1 w-16 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] text-primary-foreground/50 uppercase">
                Engineered in India
              </span>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
              TESQ Capacitors manufactures MPP self-healing, electrolytic and
              gel-filled capacitors for ceiling fans, coolers, submersible
              pumps, air conditioning and industrial motors — built to IS:1709
              and IS:2993, with every unit tested before dispatch.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-accent px-7 py-4 text-sm font-extrabold text-accent-foreground shadow-[0_10px_35px_rgba(0,0,0,.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(0,0,0,.3)]"
              >
                Explore Product Range
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.06] px-7 py-4 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
              >
                Send Bulk Enquiry
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-primary-foreground/55">
              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                IS:1709 Compliant
              </span>

              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                IS:2993 Compliant
              </span>

              <span className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                100% Tested
              </span>
            </div>

            {/* Stats */}
            <dl className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/10">
              {[
                ["15+", "Years expertise"],
                ["12", "Capacitor series"],
                ["100%", "Tested output"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`group py-5 ${
                    index !== 2 ? "border-r border-white/10" : ""
                  }`}
                >
                  <dt className="text-2xl font-black text-accent transition-transform duration-300 group-hover:scale-105 sm:text-3xl">
                    {value}
                  </dt>

                  <dd className="mt-1 text-[10px] font-semibold tracking-wider text-primary-foreground/50 uppercase sm:text-xs">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT PRODUCT SHOWCASE */}
          <div className="relative z-10 lg:pl-4">
            {/* Decorative ring */}
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] border border-white/10" />
            <div className="pointer-events-none absolute -inset-12 rounded-[3rem] border border-accent/10" />

            {/* Product card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08] p-3 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:-translate-y-2">
              {/* Top label */}
              <div className="absolute left-7 top-7 z-20 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-[10px] font-black tracking-[0.15em] text-gray-800 uppercase shadow-lg backdrop-blur">
                TESQ Performance Series
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <img
                  src="/images/products/group.jpg"
                  alt="Range of TESQ capacitors including box type, cylindrical and square capacitors"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="eager"
                />

                {/* Image gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating product info */}
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div className="rounded-xl border border-white/20 bg-black/45 px-4 py-3 text-white shadow-xl backdrop-blur-md">
                  <p className="text-[10px] font-bold tracking-wider text-white/60 uppercase">
                    Built for
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    Motors • Fans • Pumps • HVAC
                  </p>
                </div>

                <Link
                  href="/products"
                  aria-label="View TESQ products"
                  className="group/arrow flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <ArrowRightIcon className="size-5 transition-transform group-hover/arrow:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Floating quality badge */}
            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/15 bg-[#111827]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-lg text-accent">
                  ✓
                </div>

                <div>
                  <p className="text-xs font-black">Quality Tested</p>
                  <p className="mt-0.5 text-[10px] text-white/50">
                    Before every dispatch
                  </p>
                </div>
              </div>
            </div>

            {/* Floating engineering tag */}
            <div className="absolute -right-3 -top-5 hidden rounded-xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl md:block">
              <p className="text-[9px] font-bold tracking-widest text-white/50 uppercase">
                Made in
              </p>
              <p className="text-sm font-black text-accent">INDIA 🇮🇳</p>
            </div>
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
