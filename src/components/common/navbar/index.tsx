"use client";
import {
  HamburgerIcon,
  MailboxIcon,
  PhoneIcon,
  XIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact / Enquiry" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs">
          <p className="font-medium tracking-wide">
            ISO 9001:2015 Certified · IS:1709 &amp; IS:2993 · RoHS Compliant ·
            Made in India
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919810000000"
              className="flex items-center gap-1.5 hover:text-accent"
            >
              <PhoneIcon className="size-3.5" /> +91 98100 00000
            </a>
            <a
              href="mailto:sales@tesqcapacitors.com"
              className="hidden items-center gap-1.5 hover:text-accent sm:flex"
            >
              <MailboxIcon className="size-3.5" /> sales@tesqcapacitors.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={"/images/logo.png"}
              alt="TESQ Capacitors logo"
              className="h-20 w-auto object-cover"
            />
            <span className="sr-only">TESQ Capacitors</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className="rounded-md px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 rounded-md bg-signal px-5 py-2.5 text-sm font-bold text-signal-foreground transition-opacity hover:opacity-90"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 lg:hidden"
          >
            {open ? (
              <XIcon className="size-5" />
            ) : (
              <HamburgerIcon className="size-5" />
            )}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
