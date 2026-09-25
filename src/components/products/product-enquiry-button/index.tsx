"use client";

import { useState } from "react";
import { FileTextIcon } from "@phosphor-icons/react";
import ProductEnquiryModal from "../product-enquiry-modal";

export default function ProductEnquiryButton({
  productName,
}: {
  productName: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-bold text-signal-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md"
      >
        <FileTextIcon className="size-4" />
        Enquire about this product
      </button>

      <ProductEnquiryModal
        productName={productName}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
