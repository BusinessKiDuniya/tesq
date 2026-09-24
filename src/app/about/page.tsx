"use client";
import ProductRangeExplorer from "@/components/about/product-range-explorer";
import {
  FactoryIcon,
  RecycleIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UsersIcon,
  WrenchIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const values = [
  {
    icon: TrophyIcon,
    title: "Certified quality",
    text: "ISO 9001:2015 certified processes, with products manufactured to IS:1709 and IS:2993.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built-in safety",
    text: "Over-pressure detection for safe disconnection at end of life and tested safety features on each phase.",
  },
  {
    icon: RecycleIcon,
    title: "RoHS compliance",
    text: "All materials and components are free of PCB pollutants and comply with RoHS.",
  },
  {
    icon: FactoryIcon,
    title: "In-house manufacturing",
    text: "Winding, assembly, filling and testing carried out at our own Delhi plant.",
  },
  {
    icon: WrenchIcon,
    title: "Customised designs",
    text: "Custom MFD ratings, can sizes, terminal styles and printing for OEM programmes.",
  },
  {
    icon: UsersIcon,
    title: "Distributor network",
    text: "Supply through a growing dealer and distributor network across India.",
  },
];

export default function About() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-[#071a2d] text-primary-foreground">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.35),transparent_38%),radial-gradient(circle_at_20%_100%,rgba(14,165,233,0.18),transparent_35%)]" />

        {/* Blue glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-blue-500/20 blur-3xl" />

        {/* Bottom glow */}
        <div className="pointer-events-none absolute -bottom-40 left-1/3 size-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Decorative grid */}
        <div className="pointer-events-none absolute right-8 top-10 hidden opacity-30 lg:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className="size-1.5 rounded-full bg-blue-200" />
            ))}
          </div>
        </div>

        {/* Diagonal decorative shape */}
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-[650px] rotate-[-8deg] rounded-[50%] border border-white/10 bg-white/[0.02]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-primary-foreground/50">
            <span>Home</span>
            <span>/</span>
            <span className="text-primary-foreground/80">About Us</span>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              About TESQ
            </p>
          </div>

          {/* Heading */}
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Engineering dependable capacitor solutions for{" "}
            <span className="text-accent">India&apos;s motor industry.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-base leading-7 text-primary-foreground/70 sm:text-lg sm:leading-8">
            With over 15 years of industry know-how, TESQ specialises in
            energy-management solutions and a comprehensive capacitor portfolio
            for fans, coolers, pumps, air conditioning systems and industrial
            motors.
          </p>

          {/* Supporting stats */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-extrabold text-white">15+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Years of know-how
              </p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-extrabold text-white">Multiple</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Industrial applications
              </p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-extrabold text-white">India</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Market focused
              </p>
            </div>
          </div>
        </div>

        {/* Bottom diagonal edge */}
        <div className="absolute bottom-0 left-0 h-10 w-full bg-[#f7faff] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-2 text-3xl font-extrabold">
            Heavy micron technology, advanced manufacturing
          </h2>
          <span className="rule-accent mt-4" />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              TESQ Capacitors (India) manufactures metallised polypropylene
              self-healing (MPP-SH), aluminium electrolytic and gel filled
              capacitors from its plant in Delhi. Every capacitor is produced
              with heavy micron film, sealed can construction and burst-proof
              end-of-life behaviour.
            </p>
            <p>
              Our range covers ceiling fan, cooler, exhaust fan, square, oil,
              monoblock, submersible panel, heavy duty agricultural, AC,
              starting, MPP starting and box type capacitors — supplied to OEMs,
              panel builders, pump manufacturers and the replacement market.
            </p>
            <p>
              100% of production is electrically tested for capacitance,
              insulation resistance and dielectric strength before dispatch, so
              what leaves the plant performs to the printed rating.
            </p>
          </div>
          <Link
            href="/products"
            className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:opacity-90"
          >
            Explore the catalogue
          </Link>
        </div>
        <div className="self-start rounded-lg border border-border bg-surface p-6">
          <img
            src={"/images/entrance.png"}
            alt="TESQ capacitor product range"
            className="w-full rounded-md"
            loading="lazy"
          />
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            {[
              ["15+", "Years experience"],
              ["12", "Product series"],
              ["440 V", "Standard AC rating"],
              ["-25/85/21", "Climatic category"],
            ].map(([k, v]) => (
              <div key={v} className="rounded-md bg-card p-4">
                <p className="text-2xl font-extrabold text-primary">{k}</p>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductRangeExplorer />

      <section className="relative overflow-hidden bg-[#f7faff] py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-40 -top-40 size-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-blue-100/40 blur-3xl" />

        {/* Decorative dots - top right */}
        <div className="pointer-events-none absolute right-8 top-10 hidden opacity-50 lg:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className="size-1.5 rounded-full bg-blue-200" />
            ))}
          </div>
        </div>

        {/* Decorative dots - bottom left */}
        <div className="pointer-events-none absolute bottom-10 left-8 hidden opacity-50 lg:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} className="size-1.5 rounded-full bg-blue-200" />
            ))}
          </div>
        </div>

        {/* =========================================================
          CONTENT
      ========================================================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What Sets Us Apart</p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#10233f] sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
              Quality, safety and productivity
            </h2>

            <span className="rule-accent mx-auto mt-4" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Designed around dependable performance, safe operation and
              practical efficiency for demanding industrial applications.
            </p>
          </div>

          {/* =========================================================
            FEATURE CARDS
        ========================================================= */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-white/80 bg-white p-7 shadow-[0_10px_35px_rgba(31,67,120,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,67,120,0.14)] sm:p-8"
                >
                  {/* Card gradient */}
                  <div className="pointer-events-none absolute inset-0" />

                  {/* Large watermark icon */}
                  <Icon
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-5 -top-4 size-40 opacity-[0.3] text-primary"
                  />

                  <div className="relative z-10 grid size-14 place-items-center rounded-full border shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon weight="regular" className="size-7" />
                  </div>

                  <h3 className="relative z-10 mt-6 text-xl font-extrabold leading-tight text-[#10233f] sm:text-[22px]">
                    {value.title}
                  </h3>

                  {/* Accent line */}
                  <span className="relative z-10 mt-4 block h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16" />

                  <p className="relative z-10 mt-5 text-[15px] leading-7 text-[#526176]">
                    {value.text}
                  </p>

                  {/* Bottom decorative line */}
                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-lg border border-border p-8">
          <p className="eyebrow">Standards &amp; Approvals</p>
          <h2 className="mt-2 text-2xl font-extrabold">
            Manufactured to Indian standards
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["IS:1709", "Capacitors for fan motors"],
              ["IS:2993", "AC motor capacitors, class SH"],
              ["ISO 9001:2015", "Quality management system"],
              ["RoHS", "Restricted substances compliance"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-md bg-surface p-5">
                <p className="text-lg font-extrabold text-primary">{k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
