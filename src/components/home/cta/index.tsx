"use client";
import { PackageIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-border">
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
          <PackageIcon className="size-4" />
          Request a quotation
        </Link>
      </div>
    </section>
  );
}
