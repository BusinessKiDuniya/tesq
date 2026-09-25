import { capacitorProducts } from "@/data";

export const getProductName = (product: (typeof capacitorProducts)[number]) => {
  if (product.modelCode) {
    return `${product.modelCode} · ${product.capacitance}`;
  }

  return `${product.capacitance} Capacitor`;
};
