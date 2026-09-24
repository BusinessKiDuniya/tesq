"use client";

import { capacitorProducts } from "@/data/products";

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
  const footerProductIds = [
    "cap-180-440v",
    "cap-50-440v",
    "cap-72-250v",
    "tcv-1zt329",
    "tc7ts-ze07-s",
    "tc7ts-zio6",
  ];

  const footerProducts = footerProductIds
    .map((id) => capacitorProducts.find((product) => product.id === id))
    .filter((product): product is (typeof capacitorProducts)[number] =>
      Boolean(product),
    );

  const getProductName = (product: (typeof capacitorProducts)[number]) => {
    return product.modelCode ?? `${product.capacitance} Capacitor`;
  };

  return (
    <footer className="bg-[#F7F7FA] text-[#171717]">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] lg:px-8 lg:py-16">
        {/* Company Info */}
        <div className="flex flex-col">
          <Link
            href="/"
            aria-label="TESQ Capacitors home"
            className="inline-flex w-fit"
          >
            <img
              src="/images/logo.png"
              alt="TESQ Capacitors"
              className="h-36 w-36 object-contain object-left"
            />
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-[#5F6368]">
            Reliable capacitor solutions engineered for demanding motor, pump,
            fan, appliance and industrial applications.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-2.5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-[#3A2B94]/15 bg-white text-[#3A2B94] transition-all duration-200 hover:border-[#3A2B94] hover:bg-[#3A2B94] hover:text-white"
            >
              <FacebookLogoIcon className="size-[18px]" weight="fill" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-[#3A2B94]/15 bg-white text-[#3A2B94] transition-all duration-200 hover:border-[#3A2B94] hover:bg-[#3A2B94] hover:text-white"
            >
              <InstagramLogoIcon className="size-[18px]" weight="fill" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-full border border-[#3A2B94]/15 bg-white text-[#3A2B94] transition-all duration-200 hover:border-[#3A2B94] hover:bg-[#3A2B94] hover:text-white"
            >
              <LinkedinLogoIcon className="size-[18px]" weight="fill" />
            </a>

            <a
              href="https://wa.me/919810000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full border border-[#D62617]/20 bg-white text-[#D62617] transition-all duration-200 hover:border-[#D62617] hover:bg-[#D62617] hover:text-white"
            >
              <WhatsappLogoIcon className="size-[18px]" weight="fill" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.18em] text-[#3A2B94] uppercase">
            Company
          </h4>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="text-[#5F6368] transition-colors hover:text-[#3A2B94]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-[#5F6368] transition-colors hover:text-[#3A2B94]"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="text-[#5F6368] transition-colors hover:text-[#3A2B94]"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-[#5F6368] transition-colors hover:text-[#3A2B94]"
              >
                Contact / Enquiry
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.18em] text-[#3A2B94] uppercase">
            Product Range
          </h4>

          <ul className="mt-5 space-y-3 text-sm">
            {footerProducts.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.id}`}
                  className="group inline-flex items-center gap-1.5 text-[#5F6368] transition-colors hover:text-[#3A2B94]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#D62617] opacity-0 transition-opacity group-hover:opacity-100" />
                  {getProductName(product)}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/products"
            className="mt-5 inline-flex text-sm font-semibold text-[#D62617] transition-colors hover:text-[#3A2B94]"
          >
            View complete range →
          </Link>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.18em] text-[#3A2B94] uppercase">
            Reach Us
          </h4>

          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPinIcon
                className="mt-0.5 size-[18px] shrink-0 text-[#3A2B94]"
                weight="bold"
              />

              <span className="leading-5 text-[#5F6368]">
                Manufacturing Unit,
                <br />
                Delhi, India
              </span>
            </li>

            <li className="flex gap-3">
              <PhoneIcon
                className="mt-0.5 size-[18px] shrink-0 text-[#3A2B94]"
                weight="bold"
              />

              <a
                href="tel:+919810000000"
                className="text-[#5F6368] transition-colors hover:text-[#D62617]"
              >
                +91 98100 00000
              </a>
            </li>

            <li className="flex gap-3">
              <MailboxIcon
                className="mt-0.5 size-[18px] shrink-0 text-[#3A2B94]"
                weight="bold"
              />

              <a
                href="mailto:sales@tesqcapacitors.com"
                className="break-all text-[#5F6368] transition-colors hover:text-[#D62617]"
              >
                sales@tesqcapacitors.com
              </a>
            </li>
          </ul>

          {/* Enquiry CTA */}
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-md bg-[#D62617] px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#3A2B94]"
          >
            Send an enquiry
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#3A2B94]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-white/70 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} TESQ Capacitors (India). All rights
            reserved.
          </p>

          <p className="text-white/60">
            Capacitor manufacturer &amp; exporter · Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
}
