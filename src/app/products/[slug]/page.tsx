import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  FileTextIcon,
} from "@phosphor-icons/react";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product not found — TESQ Capacitors",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${product.name} | ${product.mfd} — TESQ Capacitors`;
  const description = `${product.name}: ${product.mfd}, ${product.volt}, ${product.type}. ${product.tagline}. Manufactured in Delhi by TESQ Capacitors (India).`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function ProductDetail({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const specs: [string, string][] = [
    ["Capacitance (MFD)", product.mfd],
    ["Voltage rating", product.volt],
    ["Can size", product.size],
    ["Construction", product.type],
    ["Category", product.category],
    ["Tolerance", "± 5%"],
    ["Frequency", "50 Hz"],
    ["Climatic category", "-25 / 85 / 21"],
    ["Standards", "IS:2993 / IS:1709, RoHS compliant"],
  ];

  return (
    <div>
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

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-lg border border-border bg-surface p-8">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[420px] w-auto object-contain"
          />
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>

          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            {product.name}
          </h1>

          <span className="rule-accent mt-4" />

          <p className="mt-5 text-muted-foreground">{product.description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["MFD", product.mfd],
              ["Voltage", product.volt],
              ["Size", product.size],
              ["Type", product.type],
            ].map(([key, value]) => (
              <div key={key} className="rounded-md border border-border p-4">
                <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
                  {key}
                </p>

                <p className="mt-1 text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-bold text-signal-foreground hover:opacity-90"
            >
              <FileTextIcon className="size-4" />
              Enquire about this product
            </Link>

            <a
              href="tel:+919810000000"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-bold hover:border-primary hover:text-primary"
            >
              Call sales
            </a>
          </div>
        </div>
      </section>

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

          <div>
            <h2 className="text-2xl font-extrabold">Applications</h2>

            <span className="rule-accent mt-3" />

            <ul className="mt-6 space-y-3">
              {product.applications.map((application) => (
                <li
                  key={application}
                  className="flex gap-2 rounded-md border border-border bg-card p-4 text-sm"
                >
                  <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  {application}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-2xl font-extrabold">Related capacitors</h2>

          <span className="rule-accent mt-3" />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedProduct) => (
              <Link
                key={relatedProduct.slug}
                href={`/products/${relatedProduct.slug}`}
                className="card-industrial group overflow-hidden"
              >
                <div className="flex h-44 items-center justify-center bg-surface p-4">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    loading="lazy"
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <div className="border-t border-border p-5">
                  <h3 className="font-bold group-hover:text-primary">
                    {relatedProduct.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {relatedProduct.mfd}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
