import { capacitorProducts } from "@/data";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

const getProduct = (id: string) =>
  capacitorProducts.find((product) => product.id === id);

export default function ProductRangeExplorer() {
  const ranges = [
    {
      number: "01",
      title: "Box Type Capacitors",
      description:
        "Box-type capacitor solutions available in higher capacitance values for demanding electrical applications.",
      product: getProduct("cap-180-440v"),
    },
    {
      number: "02",
      title: "AC Conditioner Capacitors",
      description:
        "Capacitor solutions for air-conditioning and AC motor applications across different capacitance requirements.",
      product: getProduct("cap-50-440v"),
    },
    {
      number: "03",
      title: "Motor Capacitors",
      description:
        "Motor capacitor solutions covering a broad range of capacitance values for motor applications.",
      product: getProduct("tcv-1zt329"),
    },
    {
      number: "04",
      title: "Fan Capacitors",
      description:
        "Compact capacitor solutions designed for fan and appliance applications.",
      product: getProduct("tc7ts-zio6"),
    },
  ].filter(
    (
      range,
    ): range is typeof range & {
      product: NonNullable<typeof range.product>;
    } => Boolean(range.product),
  );

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Product Range</p>

            <h2 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Capacitor solutions for
              <span className="block text-primary">
                different applications.
              </span>
            </h2>

            <span className="rule-accent mt-5" />
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            View complete catalogue
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ranges.map((range) => (
            <Link
              href={`/products/${range.product.id}`}
              key={range.number}
              className="
                group relative grid overflow-hidden
                rounded-xl border border-border
                bg-[#f5f7fa]
                transition-all duration-500
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-[0_20px_60px_rgba(16,24,40,.10)]
                sm:grid-cols-[0.85fr_1.15fr]
              "
            >
              {/* Image */}
              <div className="relative min-h-[270px] overflow-hidden bg-white">
                <img
                  src={`/images/products/capacitor_products/${range.product.image}`}
                  alt={range.title}
                  className="
                    h-full w-full
                    object-contain
                    p-7
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                <span className="absolute left-5 top-5 text-[11px] font-black tracking-[0.2em] text-[#f15a29] bg-muted rounded-full p-1">
                  {range.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <p className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground">
                  {range.product.application}
                </p>

                <h3 className="mt-2 text-2xl font-extrabold">{range.title}</h3>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {range.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  View product
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
