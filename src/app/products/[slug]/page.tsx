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

  return (
    <ProductsPage product={product}/>
  );
}
