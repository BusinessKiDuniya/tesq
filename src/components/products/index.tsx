"use client";

import Link from "next/link";

import {
  ArrowLeftIcon,
  CheckCircleIcon,
  FileTextIcon,
  PlusIcon,
  EqualsIcon,
  LightningIcon,
  WaveSineIcon,
  StackIcon,
  ThermometerIcon,
  FileTextIcon as DocumentIcon,
  ShieldCheckIcon,
  GearIcon,
  BarcodeIcon,
} from "@phosphor-icons/react";

import { capacitorProducts, type CapacitorProduct } from "@/data";
import ProductEnquiryButton from "./product-enquiry-button";

export default function ProductsPage({
  product,
}: {
  product: CapacitorProduct;
}) {
  const productName = product.modelCode ?? `${product.capacitance} Capacitor`;

  const related = capacitorProducts
    .filter((p) => p.id !== product.id && p.application === product.application)
    .slice(0, 3);

  const specs: [string, string][] = [
    ["Capacitance", product.capacitance],
    ["Capacitance tolerance", product.capacitanceTolerance],
    ["Voltage rating", product.ratedVoltage],
    ["Rated frequency", product.ratedFrequency],
    ["Dielectric", product.dielectric],
    ["Climatic category", product.climaticCategory],
    ["Reference standard", product.referenceStandard],
    ["CML number", product.cmlNumber],
    ["Application", product.application],
    ...(product.modelCode
      ? [["Model code", product.modelCode] as [string, string]]
      : []),
  ];

  /*
   * Icon for each specification.
   * The fallback icon keeps this safe if another specification
   * is added later.
   */
  const specificationIcons = [
    PlusIcon,
    EqualsIcon,
    LightningIcon,
    WaveSineIcon,
    StackIcon,
    ThermometerIcon,
    DocumentIcon,
    ShieldCheckIcon,
    GearIcon,
    BarcodeIcon,
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            <ArrowLeftIcon className="size-4" />
            All products
          </Link>
        </div>
      </section>

      {/* Product overview */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2">
        {/* Product image */}
        <div className="flex items-center justify-center rounded-2xl border border-border bg-surface p-8">
          <img
            src={`/images/products/capacitor_products/${product.image}`}
            alt={productName}
            className="max-h-[420px] w-auto object-contain"
          />
        </div>

        {/* Product information */}
        <div>
          <p className="eyebrow">{product.application}</p>

          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            {productName}
          </h1>

          {product.modelCode && (
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Model Code: {product.modelCode}
            </p>
          )}

          <span className="rule-accent mt-4" />

          <p className="mt-5 text-muted-foreground">
            TESQ capacitor designed for reliable electrical performance, with a{" "}
            {product.capacitance} capacitance rating and {product.ratedVoltage}{" "}
            rated voltage.
          </p>

          {/* Key specifications */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Capacitance", product.capacitance],
              ["Voltage", product.ratedVoltage],
              ["Frequency", product.ratedFrequency],
              ["Dielectric", product.dielectric],
            ].map(([key, value]) => (
              <div
                key={key}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  {key}
                </p>

                <p className="mt-1 text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <ProductEnquiryButton productName={productName} />

            <a
              href="tel:+919211303462"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-bold transition-colors hover:border-primary hover:text-primary"
            >
              Call sales
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL SPECIFICATIONS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f7faff] py-16 lg:py-20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#10233f] sm:text-4xl lg:text-[42px] lg:leading-tight">
              Technical specifications
            </h2>

            <span className="mt-4 block h-2 w-24 rounded-full bg-[#1769e0]" />
          </div>

          {/* Specification table */}
          <div className="overflow-hidden rounded-[22px] border border-[#e1e9f5] bg-white shadow-[0_12px_40px_rgba(31,67,120,0.08)]">
            <div className="divide-y divide-[#e2eaf5]">
              {specs.map(([key, value], index) => {
                const Icon = specificationIcons[index] ?? DocumentIcon;

                return (
                  <div
                    key={key}
                    className={`grid min-h-[76px] items-center gap-4 px-5 py-4 transition-colors sm:grid-cols-[72px_minmax(260px,0.8fr)_1.4fr] sm:px-7 ${
                      index % 2 === 0 ? "bg-white" : "bg-[#eef5ff]"
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-start">
                      <div className="grid size-9 place-items-center rounded-full border border-[#d7e5f8] bg-[#f4f8ff] shadow-[0_2px_8px_rgba(30,80,150,0.06)]">
                        <Icon weight="bold" className="size-4 text-[#1769e0]" />
                      </div>
                    </div>

                    {/* Label */}
                    <div className="sm:border-r sm:border-[#dce5f1] sm:pr-8">
                      <p className="font-extrabold text-[#10233f]">
                        {key}
                      </p>
                    </div>

                    {/* Value */}
                    <div className="pl-16 sm:pl-0">
                      <p className="font-medium text-[#465675]">
                        {value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="bg-surface py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold">Application</h2>

            <span className="rule-accent mt-3" />

            <ul className="mt-6 space-y-3">
              <li className="flex gap-2 rounded-xl border border-border bg-card p-4 text-sm">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {product.application}
              </li>

              <li className="flex gap-2 rounded-xl border border-border bg-card p-4 text-sm">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {product.ratedVoltage} rated operation
              </li>

              <li className="flex gap-2 rounded-xl border border-border bg-card p-4 text-sm">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {product.ratedFrequency} rated frequency
              </li>

              <li className="flex gap-2 rounded-xl border border-border bg-card p-4 text-sm">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {product.dielectric} dielectric construction
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-2xl font-extrabold">Related capacitors</h2>

          <span className="rule-accent mt-3" />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedProduct) => {
              const relatedName =
                relatedProduct.modelCode ??
                `${relatedProduct.capacitance} Capacitor`;

              return (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="card-industrial group overflow-hidden"
                >
                  <div className="flex h-44 items-center justify-center bg-surface p-4">
                    <img
                      src={`/images/products/capacitor_products/${relatedProduct.image}`}
                      alt={relatedName}
                      loading="lazy"
                      className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="border-t border-border p-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                      {relatedProduct.application}
                    </p>

                    <h3 className="mt-1 font-bold group-hover:text-primary">
                      {relatedName}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {relatedProduct.capacitance} ·{" "}
                      {relatedProduct.ratedVoltage}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
