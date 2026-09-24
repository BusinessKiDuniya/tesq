"use client";

import Link from "next/link";

import {
  ArrowLeftIcon,
  CheckCircleIcon,
  FileTextIcon,
} from "@phosphor-icons/react";

import { capacitorProducts, type CapacitorProduct } from "@/data";

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
        <div className="flex items-center justify-center rounded-lg border border-border bg-surface p-8">
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
              <div key={key} className="rounded-md border border-border p-4">
                <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
                  {key}
                </p>

                <p className="mt-1 text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(productName)}`}
              className="inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-bold text-signal-foreground hover:opacity-90"
            >
              <FileTextIcon className="size-4" />
              Enquire about this product
            </Link>

            <a
              href="tel:+919211303462"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-bold hover:border-primary hover:text-primary"
            >
              Call sales
            </a>
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="bg-surface py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold">
              Technical specifications
            </h2>

            <span className="rule-accent mt-3" />

            <div className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
              <table className="w-full text-sm">
                <tbody>
                  {specs.map(([key, value], index) => (
                    <tr key={key} className={index % 2 ? "bg-surface" : ""}>
                      <th
                        scope="row"
                        className="w-2/5 border-b border-border p-4 text-left font-semibold"
                      >
                        {key}
                      </th>

                      <td className="border-b border-border p-4 text-muted-foreground">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Application */}
          <div>
            <h2 className="text-2xl font-extrabold">Application</h2>

            <span className="rule-accent mt-3" />

            <ul className="mt-6 space-y-3">
              <li className="flex gap-2 rounded-md border border-border bg-card p-4 text-sm">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {product.application}
              </li>

              <li className="flex gap-2 rounded-md border border-border bg-card p-4 text-sm">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {product.ratedVoltage} rated operation
              </li>

              <li className="flex gap-2 rounded-md border border-border bg-card p-4 text-sm">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {product.ratedFrequency} rated frequency
              </li>

              <li className="flex gap-2 rounded-md border border-border bg-card p-4 text-sm">
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
                    <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
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
