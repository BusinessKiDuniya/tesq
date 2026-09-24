import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function ProductSeries() {
  const series = [
    ["Fan & appliance", "Compact motor-run range"],
    ["Motor & pump", "Heavy-duty starting support"],
    ["Industrial", "Reliable power applications"],
  ];
  return (
    <section className="relative z-20 mx-auto -mt-7 max-w-6xl px-4">
      <div className="grid border border-border bg-card shadow-lg sm:grid-cols-3">
        {series.map(([title, detail], index) => (
          <Link
            key={title}
            href="/products"
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
  );
}
