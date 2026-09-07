"use client";

import { products } from "@/data/products";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
  MailboxIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <img
            src="/images/logo-light.png"
            alt="TESQ Capacitors logo"
            className="h-40 w-auto object-contain"
          />

          {/* Social Links */}
          <div className="mt-4 flex items-center gap-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-primary-deep"
            >
              <FacebookLogoIcon className="size-5" weight="fill" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-primary-deep"
            >
              <InstagramLogoIcon className="size-5" weight="fill" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-primary-deep"
            >
              <LinkedinLogoIcon className="size-5" weight="fill" />
            </a>

            <a
              href="https://wa.me/919810000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-primary-deep"
            >
              <WhatsappLogoIcon className="size-5" weight="fill" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-accent">
            Company
          </h4>

          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-accent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-primary-foreground/80 hover:text-accent"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-primary-foreground/80 hover:text-accent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-accent"
              >
                Contact / Enquiry
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-accent">
            Product Range
          </h4>

          <ul className="mt-3 space-y-1.5 text-sm">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-primary-foreground/80 hover:text-accent"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-accent">
            Reach Us
          </h4>

          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>Manufacturing Unit, Delhi, India</span>
            </li>

            <li className="flex gap-2">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-accent" />
              <a
                href="tel:+919810000000"
                className="hover:text-accent"
              >
                +91 98100 00000
              </a>
            </li>

            <li className="flex gap-2">
              <MailboxIcon className="mt-0.5 size-4 shrink-0 text-accent" />
              <a
                href="mailto:sales@tesqcapacitors.com"
                className="hover:text-accent"
              >
                sales@tesqcapacitors.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TESQ Capacitors (India). All rights
            reserved.
          </p>
          <p>Capacitor manufacturer &amp; exporter · Delhi, India</p>
        </div>
      </div>
    </footer>
  );
}