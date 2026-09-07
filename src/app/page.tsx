"use client";
import { products } from "@/data";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  FactoryIcon,
  GaugeIcon,
  PackageIcon,
  ShieldCheckIcon,
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
  },
  {
    icon: GaugeIcon,
    title: "Safety First",
    points: [
      "Tested safety features on each phase",
      "Over-pressure disconnection",
      "Non-PCB pollutant materials",
    ],
  },
  {
    icon: FactoryIcon,
    title: "Efficiency &amp; Productivity",
    points: [
      "Easy installation ergonomics",
      "Time saving components",
      "Pan-India distributor network",
    ],
  },
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

      {/* Trust strip */}
      <section className="border-b border-border bg-surface">
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <Link
              key={p.slug}
              href={"/products/" + p.slug}
              className="card-industrial group overflow-hidden"
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
                  Specifications <ArrowRightIcon className="size-4" />
                </p>
              </div>
            </Link>
          ))}
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

      {/* CTA */}
      <section className="hero-surface text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Need bulk supply or an OEM specification?
            </h2>
            <p className="mt-2 max-w-2xl text-primary-foreground/80">
              Share your MFD rating, voltage, terminal type and monthly quantity
              — our team responds with pricing and lead time within one working
              day.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-signal px-7 py-3.5 text-sm font-bold text-signal-foreground transition-opacity hover:opacity-90"
          >
            <PackageIcon className="size-4" /> Request a Quotation
          </Link>
        </div>
      </section>
    </div>
  );
}
