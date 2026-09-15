"use client";
import { products } from "@/data";
import {
  ArrowLeftIcon,
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
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    eyebrow: "POWER ELECTRONICS",
    title: "High-Performance",
    highlight: "Capacitors for Power Electronics",
    description:
      "MPP self-healing capacitors engineered for reliable performance across demanding power electronics applications.",
    image: "/images/products/group.jpg",
    tag: "TESQ Performance Series",
    application: "Power Electronics",
  },
  {
    eyebrow: "MOTORS & FANS",
    title: "Reliable Capacitors",
    highlight: "Built for Motors & Fans",
    description:
      "High-quality motor-run capacitors designed to deliver dependable performance in ceiling fans, coolers and motor applications.",
    image: "/images/products/group.jpg",
    tag: "Motor Capacitor Series",
    application: "Motors • Fans • Coolers",
  },
  {
    eyebrow: "PUMPS & HVAC",
    title: "Engineered for",
    highlight: "Demanding Applications",
    description:
      "Purpose-built capacitor solutions for pumps, air conditioning systems and industrial motor applications.",
    image: "/images/products/group.jpg",
    tag: "Industrial Series",
    application: "Pumps • HVAC • Motors",
  },
  {
    eyebrow: "ENGINEERED IN INDIA",
    title: "Tested for Quality.",
    highlight: "Built for Reliability.",
    description:
      "Every TESQ capacitor is manufactured with a focus on consistency, reliability and long-term performance.",
    image: "/images/products/group.jpg",
    tag: "TESQ Quality Standard",
    application: "Tested Before Dispatch",
  },
];

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
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const SLIDE_DURATION = 3000;

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % SLIDES.length);
  };

  const previousSlide = () => {
    setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Auto slider
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
      <section
        className="relative isolate overflow-hidden bg-[#f5f7fa]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Top accent */}
        <div className="absolute left-0 top-0 z-30 h-1 w-full bg-[#f15a29]" />

        {/* Engineering grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0b2a63 1px, transparent 1px), linear-gradient(90deg, #0b2a63 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Background shape */}
        <div
          className="
      pointer-events-none absolute
      -right-[15%] top-0
      h-full w-[65%]
      bg-[#e8edf5]
      [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]
    "
        />

        {/* Slider viewport */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)]"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {SLIDES.map((slide, index) => (
              <div key={index} className="w-full shrink-0">
                <div className="mx-auto grid min-h-[680px] max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20">
                  {/* LEFT */}
                  <div
                    className={`
                max-w-2xl
                transition-all duration-700
                ${
                  active === index
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
                  >
                    {/* Eyebrow */}
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-[2px] w-10 bg-[#f15a29]" />

                      <span className="text-xs font-bold tracking-[0.18em] text-[#123b82]">
                        {slide.eyebrow}
                      </span>
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-[700px] text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#101828] sm:text-5xl lg:text-6xl">
                      {slide.title}

                      <span className="mt-2 block text-[#123b82]">
                        {slide.highlight}
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-xl text-base leading-7 text-[#667085] sm:text-lg">
                      {slide.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/products"
                        className="
                    group inline-flex items-center
                    justify-center gap-3
                    rounded-md
                    bg-[#123b82]
                    px-7 py-4
                    text-sm font-bold text-white
                    shadow-[0_12px_30px_rgba(18,59,130,.18)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#0d2d66]
                  "
                      >
                        Explore Products
                        <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href="/contact"
                        className="
                    inline-flex items-center
                    justify-center gap-3
                    rounded-md
                    border border-[#d0d5dd]
                    bg-white
                    px-7 py-4
                    text-sm font-bold
                    text-[#101828]
                    transition-all duration-300
                    hover:border-[#123b82]
                    hover:text-[#123b82]
                  "
                      >
                        Request a Quote
                      </Link>
                    </div>

                    {/* Trust */}
                    <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                      {[
                        "Quality Tested",
                        "Engineered in India",
                        "Industrial Applications",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs font-semibold text-[#667085]"
                        >
                          <CheckCircleIcon className="size-4 text-[#123b82]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div
                    className={`
                relative flex min-h-[400px]
                items-center justify-center
                transition-all duration-700
                ${
                  active === index
                    ? "translate-x-0 scale-100 opacity-100"
                    : "translate-x-12 scale-95 opacity-0"
                }
              `}
                  >
                    {/* Giant number */}
                    <div
                      className="
                  pointer-events-none
                  absolute right-0 top-1/2
                  -translate-y-1/2
                  select-none
                  text-[180px]
                  font-black
                  leading-none
                  text-[#123b82]/[0.035]
                  lg:text-[300px]
                "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Product */}
                    <div className="relative z-10 w-full max-w-[680px]">
                      {/* Shadow */}
                      <div className="absolute inset-x-16 bottom-4 h-12 rounded-full bg-black/15 blur-2xl" />

                      <Image
                        src={slide.image}
                        alt={slide.highlight}
                        width={900}
                        height={650}
                        priority={index === 0}
                        className="
                    relative z-10
                    h-auto w-full
                    object-contain
                    drop-shadow-[0_25px_35px_rgba(16,24,40,.18)]
                  "
                      />

                      {/* Product tag */}
                      <div
                        className="
                    absolute bottom-4 left-4 z-20
                    rounded-lg
                    border border-white/80
                    bg-white/90
                    px-4 py-3
                    shadow-lg
                    backdrop-blur
                  "
                      >
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#98a2b3]">
                          TESQ
                        </p>

                        <p className="mt-1 text-sm font-bold text-[#101828]">
                          {slide.tag}
                        </p>
                      </div>

                      {/* Application */}
                      <div
                        className="
                    absolute right-4 top-4 z-20
                    hidden rounded-lg
                    bg-[#123b82]
                    px-4 py-3
                    text-white
                    shadow-xl
                    sm:block
                  "
                      >
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60">
                          Applications
                        </p>

                        <p className="mt-1 text-xs font-bold">
                          {slide.application}
                        </p>
                      </div>
                    </div>

                    {/* Decorative circles */}
                    <div className="pointer-events-none absolute right-[8%] top-[10%] size-24 rounded-full border border-[#123b82]/10" />

                    <div className="pointer-events-none absolute right-[2%] top-[4%] size-40 rounded-full border border-[#123b82]/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-5 lg:left-[calc(50%-500px)] lg:translate-x-0">
          {/* Previous */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
    flex size-11 items-center
    justify-center rounded-full
    border border-[#d0d5dd]
    bg-white text-[#344054]
    shadow-sm
    transition-all
    hover:border-[#123b82]
    hover:text-[#123b82]
  "
          >
            <ArrowLeftIcon className="size-4" />
          </button>

          {/* Progress */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="h-[3px] overflow-hidden bg-[#d0d5dd]"
              >
                <span
                  className={`
        block h-full transition-all duration-500
        ${active === index ? "w-12 bg-[#f15a29]" : "w-6 bg-transparent"}
      `}
                />
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
    flex size-11 items-center
    justify-center rounded-full
    bg-[#123b82]
    text-white
    shadow-sm
    transition-all
    hover:bg-[#0d2d66]
  "
          >
            <ArrowRightIcon className="size-4" />
          </button>

          {/* Counter */}
          <span className="text-xs font-bold tracking-widest text-[#98a2b3]">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom angled edge */}
        <div
          className="
      absolute bottom-0 left-0
      h-10 w-full
      bg-white
      [clip-path:polygon(0_100%,100%_100%,100%_0,0_70%)]
    "
        />
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
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="
            block
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
                  />
                </div>

                {/* CONTENT */}
                <div className="border-t border-border bg-card p-5">
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
