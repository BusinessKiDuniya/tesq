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

const cardStyles = [
  {
    // Blue
    gradient:
      "bg-[radial-gradient(circle_at_88%_18%,rgba(59,130,246,0.16),transparent_32%),linear-gradient(135deg,#ffffff_55%,#f1f6ff_100%)]",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBorder: "border-blue-100",
    accent: "bg-blue-500",
    watermark: "text-blue-500",
  },
  {
    // Green
    gradient:
      "bg-[radial-gradient(circle_at_88%_18%,rgba(16,185,129,0.17),transparent_32%),linear-gradient(135deg,#ffffff_55%,#f0fcf8_100%)]",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    iconBorder: "border-emerald-100",
    accent: "bg-emerald-400",
    watermark: "text-emerald-500",
  },
  {
    // Purple
    gradient:
      "bg-[radial-gradient(circle_at_88%_18%,rgba(139,92,246,0.16),transparent_32%),linear-gradient(135deg,#ffffff_55%,#f7f3ff_100%)]",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    iconBorder: "border-violet-100",
    accent: "bg-violet-400",
    watermark: "text-violet-500",
  },
  {
    // Orange
    gradient:
      "bg-[radial-gradient(circle_at_88%_18%,rgba(249,115,22,0.17),transparent_32%),linear-gradient(135deg,#ffffff_55%,#fff7ed_100%)]",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    iconBorder: "border-orange-100",
    accent: "bg-orange-400",
    watermark: "text-orange-500",
  },
  {
    // Light blue
    gradient:
      "bg-[radial-gradient(circle_at_88%_18%,rgba(59,130,246,0.14),transparent_32%),linear-gradient(135deg,#ffffff_55%,#f2f7ff_100%)]",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBorder: "border-blue-100",
    accent: "bg-blue-400",
    watermark: "text-blue-500",
  },
  {
    // Pink / red
    gradient:
      "bg-[radial-gradient(circle_at_88%_18%,rgba(244,63,94,0.15),transparent_32%),linear-gradient(135deg,#ffffff_55%,#fff3f6_100%)]",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    iconBorder: "border-rose-100",
    accent: "bg-rose-400",
    watermark: "text-rose-400",
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

      <section className="relative overflow-hidden bg-[#f7faff] py-16 sm:py-20 lg:py-24">
        {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

        {/* Top-left glow */}
        <div className="pointer-events-none absolute -left-40 -top-40 size-[420px] rounded-full bg-blue-100/40 blur-3xl" />

        {/* Bottom-right glow */}
        <div className="pointer-events-none absolute -bottom-48 -right-40 size-[460px] rounded-full bg-blue-100/40 blur-3xl" />

        {/* Top-right dots */}
        <div className="pointer-events-none absolute right-8 top-10 hidden opacity-45 lg:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className="size-1.5 rounded-full bg-blue-200" />
            ))}
          </div>
        </div>

        {/* Bottom-left dots */}
        <div className="pointer-events-none absolute bottom-12 left-8 hidden opacity-40 lg:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} className="size-1.5 rounded-full bg-blue-200" />
            ))}
          </div>
        </div>

        {/* =====================================================
          CONTENT
      ====================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                What Sets Us Apart
              </p>

              <span className="h-px w-8 bg-blue-400" />
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#10233f] sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
              Quality, safety and productivity
            </h2>

            <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-blue-500" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#65748b] sm:text-base">
              Designed around dependable performance, safe operation and
              practical efficiency for demanding industrial applications.
            </p>
          </div>

          {/* =====================================================
            CARDS
        ====================================================== */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              const style = cardStyles[index % cardStyles.length];

              return (
                <article
                  key={value.title}
                  className={`
                  group relative min-h-[300px]
                  overflow-hidden
                  rounded-[20px]
                  border border-white
                  ${style.gradient}
                  p-7
                  shadow-[0_8px_30px_rgba(31,67,120,0.07)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(31,67,120,0.13)]
                  sm:p-8
                `}
                >
                  {/* ==========================================
                    LARGE BACKGROUND ICON
                =========================================== */}

                  <Icon
                    aria-hidden="true"
                    weight="regular"
                    className={`
                    pointer-events-none
                    absolute
                    -right-4
                    -top-5
                    size-[150px]
                    ${style.watermark}
                    opacity-[0.22]
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:opacity-[0.28]
                  `}
                  />

                  {/* ==========================================
                    ICON BADGE
                =========================================== */}

                  <div
                    className={`
                    relative z-10
                    grid size-14
                    place-items-center
                    rounded-full
                    border
                    ${style.iconBorder}
                    ${style.iconBg}
                    shadow-[0_4px_14px_rgba(31,67,120,0.08)]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  `}
                  >
                    <Icon
                      weight="regular"
                      className={`size-7 ${style.iconColor}`}
                    />
                  </div>

                  {/* ==========================================
                    TITLE
                =========================================== */}

                  <h3
                    className="
                    relative z-10
                    mt-6
                    max-w-[80%]
                    text-xl
                    font-extrabold
                    leading-tight
                    tracking-tight
                    text-[#10233f]
                    sm:text-[22px]
                  "
                  >
                    {value.title}
                  </h3>

                  {/* ==========================================
                    ACCENT LINE
                =========================================== */}

                  <span
                    className={`
                    relative z-10
                    mt-4
                    block
                    h-1
                    w-11
                    rounded-full
                    ${style.accent}
                    transition-all
                    duration-300
                    group-hover:w-16
                  `}
                  />

                  {/* ==========================================
                    DESCRIPTION
                =========================================== */}

                  <p
                    className="
                    relative z-10
                    mt-5
                    max-w-[95%]
                    text-[15px]
                    leading-7
                    text-[#526176]
                  "
                  >
                    {value.text}
                  </p>

                  {/* ==========================================
                    BOTTOM ACCENT
                =========================================== */}

                  <div
                    className={`
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    ${style.accent}
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  `}
                  />
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
