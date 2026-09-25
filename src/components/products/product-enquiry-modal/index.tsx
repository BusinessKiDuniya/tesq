"use client";

import { useState } from "react";
import {
  XIcon,
  PaperPlaneTiltIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

type ProductEnquiryModalProps = {
  productName: string;
  open: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  quantity: string;
  company: string;
  capacitorDetails: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  quantity: "",
  company: "",
  capacitorDetails: "",
};

export default function ProductEnquiryModal({
  productName,
  open,
  onClose,
}: ProductEnquiryModalProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  if (!open) return null;

  const updateField =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleClose = () => {
    if (status === "sending") return;

    setStatus("idle");
    setForm(initialForm);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status === "sending") return;

    setStatus("sending");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          productName,
          submittedAt: new Date().toISOString(),
          pageUrl: window.location.href,
          source: "product-page",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Failed to send enquiry.",
        );
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/55 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          disabled={status === "sending"}
          aria-label="Close enquiry form"
          className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#10233f] disabled:cursor-not-allowed"
        >
          <XIcon className="size-6" weight="bold" />
        </button>

        {status === "success" ? (
          <div className="flex min-h-[500px] flex-col items-center justify-center px-6 py-16 text-center sm:px-12">
            <div className="grid size-16 place-items-center rounded-full bg-[#eefcf5] text-[#16a34a]">
              <CheckCircleIcon className="size-9" weight="fill" />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold text-[#10233f]">
              Enquiry sent successfully
            </h2>

            <p className="mt-3 max-w-lg text-[#64748b]">
              Thank you for contacting TESQ Capacitors. Our sales team will
              review your requirement and get back to you shortly.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-8 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="px-6 sm:px-8 lg:px-10 py-2 sm:py-4 lg:py-6">
            {/* Header */}
            <div className="pr-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#10233f] sm:text-4xl">
                Request a <span className="text-primary">quote</span>
              </h2>

              <p className="mt-1 text-sm text-[#64748b]">
                Send us your requirement for{" "}
                <span className="font-semibold text-[#10233f]">
                  {productName}
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-2">
              <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
                {/* Name */}
                <FormField label="Name" required>
                  <input
                    required
                    value={form.name}
                    onChange={updateField("name")}
                    placeholder="Enter your name"
                    className="quote-input"
                  />
                </FormField>

                {/* Email */}
                <FormField label="Email" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={updateField("email")}
                    placeholder="Enter your email"
                    className="quote-input"
                  />
                </FormField>

                {/* Phone */}
                <FormField label="Phone Number">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={updateField("phone")}
                    placeholder="Enter your phone number"
                    className="quote-input"
                  />
                </FormField>

                {/* Quantity */}
                <FormField label="Required Quantity" required>
                  <input
                    required
                    value={form.quantity}
                    onChange={updateField("quantity")}
                    placeholder="Enter required quantity"
                    className="quote-input"
                  />
                </FormField>

                {/* Company */}
                <div className="md:col-span-2">
                  <FormField label="Company Name" required>
                    <input
                      required
                      value={form.company}
                      onChange={updateField("company")}
                      placeholder="Enter company name"
                      className="quote-input"
                    />
                  </FormField>
                </div>

                {/* Details */}
                <div className="md:col-span-2">
                  <FormField label="Capacitor Details" required>
                    <textarea
                      required
                      rows={6}
                      value={form.capacitorDetails}
                      onChange={updateField("capacitorDetails")}
                      placeholder="Value, Dimensions, etc."
                      className="quote-input resize-y"
                    />
                  </FormField>
                </div>
              </div>

              {status === "error" && (
                <div className="mt-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  Something went wrong while sending your enquiry. Please try
                  again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-7 inline-flex min-w-36 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                <PaperPlaneTiltIcon className="size-4" weight="bold" />

                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[15px] font-medium text-[#363b43]">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </span>

      {children}
    </label>
  );
}
