import { capacitorProducts, strengths } from "@/data";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function CompanyWeAre() {
  return (
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

                <h3
                  className="mt-3 text-base font-bold"
                  dangerouslySetInnerHTML={{ __html: strength.title }}
                />

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
            Discover TESQ
            <ArrowRightIcon className="size-4" />
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
                [String(capacitorProducts.length), "Products"],
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
  );
}
