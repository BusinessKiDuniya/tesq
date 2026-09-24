"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  imageClass: string;
  overlay: string;
  type: "applications" | "manufacturing" | "products";
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}[] = [
  {
    eyebrow: "APPLICATION ENGINEERED",

    title: "Capacitors built for the way your machines work.",

    copy: "From motors and pumps to HVAC systems and control panels, find dependable capacitor solutions matched to real industrial applications.",

    image: "/images/industrial-applications.jpg",

    imageAlt: "Industrial motors, pumps, HVAC and electrical controls",

    imageClass: "object-cover",

    overlay: "bg-gradient-to-r from-black/75 via-black/45 to-black/10",

    type: "applications",

    primaryText: "Explore applications",
    primaryHref: "/products",
  },

  {
    eyebrow: "ENGINEERED IN INDIA",

    title: "Precision manufacturing. Consistent performance.",

    copy: "Built for demanding operating environments, our capacitor systems combine controlled manufacturing with application-focused engineering.",

    image: "/images/manufacturing-floor.jpg",

    imageAlt: "Modern capacitor manufacturing line",

    imageClass: "object-cover",

    overlay:
      "bg-gradient-to-r from-[#030C16] via-[#030C16]/65 via-[18%] via-[#030C16]/25 via-[34%] to-transparent",

    type: "manufacturing",

    primaryText: "Discover our capabilities",
    primaryHref: "/about",

    secondaryText: "Request a quote",
    secondaryHref: "/contact",
  },

  {
    eyebrow: "COMPLETE PRODUCT RANGE",

    title: "The right capacitor for every requirement.",

    copy: "Choose from MPP self-healing, electrolytic and gel-filled constructions with ratings, terminations and configurations matched to your specification.",

    image: "/images/2-header.png",

    imageAlt: "TESQ capacitor product range",

    imageClass: "object-contain object-center lg:object-right",

    overlay:
      "bg-gradient-to-r from-[#030C16] via-[#030C16]/65 via-[18%] via-[#030C16]/25 via-[34%] to-transparent",

    type: "products",

    primaryText: "View product range",
    primaryHref: "/products",

    secondaryText: "Get a specification",
    secondaryHref: "/contact",
  },
] as const;

export default function Hero() {
  const [active, setActive] = useState(0);

  const currentSlide = slides[active] ?? slides[0];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const goTo = (next: number) => {
    setActive((next + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[590px] overflow-hidden bg-hero-end text-primary-foreground lg:min-h-[680px]">
      {/* =========================================================
          BACKGROUND SLIDES
      ========================================================= */}

      {slides.map((slide, index) => (
        <div
          key={slide.title}
          aria-hidden={active !== index}
          className={`absolute inset-0 transition-all duration-1000 motion-reduce:transition-none ${
            active === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.imageAlt}
            width={1600}
            height={912}
            loading={index === 0 ? "eager" : "lazy"}
            className={`h-full w-full transition-transform duration-[7000ms] motion-reduce:transition-none ${
              slide.imageClass
            } ${active === index ? "scale-105" : "scale-100"}`}
          />

          {/* Individual slide gradient */}
          <div className={`absolute inset-0 ${slide.overlay}`} />

          {/* Bottom readability fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
        </div>
      ))}

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-20 mx-auto flex min-h-[590px] max-w-7xl items-end px-5 py-14 sm:px-8 lg:min-h-[680px] lg:items-center lg:py-20">
        <div
          key={active}
          className={`animate-fade-in ${
            currentSlide.type === "products" ? "max-w-2xl" : "max-w-3xl"
          }`}
        >
          {/* =====================================================
              SLIDE 1 — APPLICATIONS
          ===================================================== */}

          {currentSlide.type === "applications" && (
            <>
              <p className="tech-label mb-5 flex items-center gap-3 font-bold text-accent">
                <span className="h-px w-10 bg-accent" />
                {currentSlide.eyebrow}
              </p>

              <h1 className="max-w-3xl text-3xl font-bold leading-[1.06] sm:text-4xl lg:text-6xl">
                {currentSlide.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
                {currentSlide.copy}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={currentSlide.primaryHref}
                  className="inline-flex items-center gap-2 rounded-md bg-signal px-7 py-3.5 text-sm font-bold text-signal-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  {currentSlide.primaryText}
                  <ArrowRightIcon className="size-4" />
                </Link>

                {currentSlide.secondaryHref && (
                  <Link
                    href={currentSlide.secondaryHref}
                    className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/35 bg-primary-foreground/10 px-6 py-3.5 text-sm font-bold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/60 hover:bg-primary-foreground/20"
                  >
                    {currentSlide.secondaryText}
                  </Link>
                )}
              </div>
            </>
          )}

          {/* =====================================================
              SLIDE 2 — MANUFACTURING
          ===================================================== */}

          {currentSlide.type === "manufacturing" && (
            <>
              <p className="tech-label mb-5 flex items-center gap-3 font-bold text-accent">
                <span className="h-px w-10 bg-accent" />
                {currentSlide.eyebrow}
              </p>

              <h1 className="max-w-2xl text-3xl font-bold leading-[1.06] sm:text-4xl lg:text-6xl">
                {currentSlide.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
                {currentSlide.copy}
              </p>

              {/* Manufacturing highlights */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90">
                  <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-foreground">
                    <CheckIcon className="size-3" weight="bold" />
                  </span>
                  Controlled production
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90">
                  <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-foreground">
                    <CheckIcon className="size-3" weight="bold" />
                  </span>
                  Consistent quality
                </div>
              </div>

              {/* Different CTA treatment */}
              <div className="mt-8 flex items-center gap-5">
                <Link
                  href={currentSlide.primaryHref}
                  className="inline-flex items-center gap-2 rounded-md bg-signal px-7 py-3.5 text-sm font-bold text-signal-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  {currentSlide.primaryText}
                  <ArrowRightIcon className="size-4" />
                </Link>

                {currentSlide.secondaryHref && (
                  <Link
                    href={currentSlide.secondaryHref}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-primary-foreground transition-colors hover:text-accent"
                  >
                    {currentSlide.secondaryText}
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </>
          )}

          {/* =====================================================
              SLIDE 3 — PRODUCTS
          ===================================================== */}

          {currentSlide.type === "products" && (
            <>
              <p className="tech-label mb-5 flex items-center gap-3 font-bold text-accent">
                <span className="h-px w-10 bg-accent" />
                {currentSlide.eyebrow}
              </p>

              <h1 className="max-w-2xl text-3xl font-bold leading-[1.06] sm:text-4xl lg:text-6xl">
                {currentSlide.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
                {currentSlide.copy}
              </p>

              {/* Product types */}
              <div className="mt-7 grid max-w-lg grid-cols-1 gap-2 sm:grid-cols-3">
                <div className="border-l-2 border-accent pl-3">
                  <p className="text-sm font-bold">MPP</p>
                  <p className="mt-1 text-xs text-primary-foreground/60">
                    Self-healing
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-3">
                  <p className="text-sm font-bold">Electrolytic</p>
                  <p className="mt-1 text-xs text-primary-foreground/60">
                    Motor starting
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-3">
                  <p className="text-sm font-bold">Gel-filled</p>
                  <p className="mt-1 text-xs text-primary-foreground/60">
                    Heavy duty
                  </p>
                </div>
              </div>

              {/* Product CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href={currentSlide.primaryHref}
                  className="inline-flex items-center gap-2 rounded-md bg-signal px-7 py-3.5 text-sm font-bold text-signal-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  {currentSlide.primaryText}
                  <ArrowRightIcon className="size-4" />
                </Link>

                {currentSlide.secondaryHref && (
                  <Link
                    href={currentSlide.secondaryHref}
                    className="group inline-flex items-center gap-2 border-b border-primary-foreground/40 pb-1 text-sm font-bold text-primary-foreground transition-all hover:border-accent hover:text-accent"
                  >
                    {currentSlide.secondaryText}
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* =========================================================
          SLIDE NAVIGATION
      ========================================================= */}

      <div className="absolute bottom-5 right-5 z-30 flex items-center gap-3 sm:bottom-8 sm:right-8 lg:right-[max(2rem,calc((100vw-80rem)/2))]">
        {/* Previous */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(active - 1)}
          className="grid size-11 place-items-center border border-primary-foreground/35 bg-primary-deep/50 backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeftIcon className="size-4" />
        </button>

        {/* Indicators */}
        <div
          className="flex items-center gap-2"
          aria-label={`Slide ${active + 1} of ${slides.length}`}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => goTo(index)}
              className={`h-1.5 transition-all ${
                active === index
                  ? "w-9 bg-accent"
                  : "w-4 bg-primary-foreground/40 hover:bg-primary-foreground/70"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(active + 1)}
          className="grid size-11 place-items-center border border-primary-foreground/35 bg-primary-deep/50 backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
    </section>
  );
}
