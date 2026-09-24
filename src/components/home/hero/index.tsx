import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Engineering excellence",
    title: "Precision power solutions for Indian industry.",
    copy: "Reliable capacitor systems for fans, pumps, HVAC and industrial motors—engineered for demanding operating conditions.",
    image: "/images/manufacturing-floor.jpg",
    imageAlt: "Modern capacitor manufacturing line",
    imageClass: "object-cover",
    overlay: "bg-black/15",
  },

  {
    eyebrow: "Built around applications",
    title: "One dependable range. Every critical motor.",
    copy: "Application-focused motor-run and motor-start capacitors for OEM production, replacement and panel assembly.",
    image: "/images/industrial-applications.jpg",
    imageAlt: "Industrial motors, pumps, HVAC and electrical controls",
    imageClass: "object-cover",
    overlay: "bg-black/55",
  },

  {
    eyebrow: "Complete capacitor range",
    title: "From compact fan units to heavy-duty starting.",
    copy: "Choose from MPP self-healing, electrolytic and gel-filled constructions, with ratings and terminations matched to your specification.",
    image: "/images/products/group.jpg",
    imageAlt: "TESQ capacitor product range",
    imageClass: "object-contain object-center lg:object-right",
    overlay: "bg-black/35",
  },
] as const;

export default function Hero() {
  const [active, setActive] = useState(0);
  const currentSlide = slides[active] ?? slides[0];

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (next: number) =>
    setActive((next + slides.length) % slides.length);

  return (
    <section className="relative min-h-[590px] overflow-hidden bg-hero-end text-primary-foreground lg:min-h-[680px]">
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
            className={`h-full w-full transition-transform duration-[7000ms] motion-reduce:transition-none ${slide.imageClass} ${
              active === index ? "scale-105" : "scale-100"
            }`}
          />
          <div className={`absolute inset-0 ${slide.overlay}`} />
        </div>
      ))}

      <div className="relative z-20 mx-auto flex min-h-[590px] max-w-7xl items-end px-5 py-14 sm:px-8 lg:min-h-[680px] lg:items-center lg:py-20">
        <div key={active} className="animate-fade-in max-w-3xl">
          <p className="tech-label mb-4 flex items-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent" /> {currentSlide.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.06] font-bold sm:text-5xl lg:text-7xl">
            {currentSlide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
            {currentSlide.copy}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              View product range <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-sm border border-primary-foreground/40 bg-primary-deep/50 px-6 py-3.5 text-sm font-bold backdrop-blur-sm transition-colors hover:bg-primary-deep"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute right-5 bottom-5 z-30 flex items-center gap-3 sm:right-8 sm:bottom-8 lg:right-[max(2rem,calc((100vw-80rem)/2))]">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(active - 1)}
          className="grid size-11 place-items-center border border-primary-foreground/35 bg-primary-deep/50 backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeftIcon className="size-4" />
        </button>
        <div
          className="flex gap-2"
          aria-label={`Slide ${active + 1} of ${slides.length}`}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-1.5 transition-all ${active === index ? "w-9 bg-accent" : "w-4 bg-primary-foreground/40"}`}
            />
          ))}
        </div>
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
