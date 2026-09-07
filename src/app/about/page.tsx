"use client"
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
      <section className="hero-surface diag-edge text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            A specialist capacitor manufacturer serving India&apos;s motor
            industry
          </h1>
          <p className="mt-5 max-w-3xl text-primary-foreground/80">
            Thanks to know-how developed over the last 15 years, TESQ is placed
            as a specialist in energy management, providing a unique and
            comprehensive capacitor portfolio for fans, coolers, pumps, air
            conditioning and industrial motors.
          </p>
        </div>
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
            src={"/images/products/group.jpg"}
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

      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="eyebrow">What Sets Us Apart</p>
          <h2 className="mt-2 text-3xl font-extrabold">
            Quality, safety and productivity
          </h2>
          <span className="rule-accent mt-4" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <v.icon className="size-7 text-accent" />
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
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
