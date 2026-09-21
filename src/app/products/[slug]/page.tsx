import { notFound } from "next/navigation";

import { getProduct } from "@/data/products";

import ProductsPage from "@/components/products";

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

  const productName =
    product.modelCode ?? `${product.capacitance} Capacitor`;

  const title = `${productName} | ${product.capacitance} — TESQ Capacitors`;

  const description = `${productName}: ${product.capacitance}, ${product.ratedVoltage}, ${product.dielectric}. ${product.application} capacitor manufactured by TESQ Capacitors (India).`;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      images: [
        {
          url: `/images/products/capacitor_products/${product.image}`,
          alt: productName,
        },
      ],
    },
  };
}

export default async function ProductDetail({
  params,w
}: ProductPageProps) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductsPage product={product} />;
}