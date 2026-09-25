"use client";

import {
  ClockIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

const ADDRESS = "TESQ Capacitors (India), Delhi, India";
const PHONE = "+91 92113 03462";
const EMAIL = "sales@tesqcapacitors.com";

const contactPoints = [
  {
    icon: MapPinIcon,
    label: "Plant & office",
    value: ADDRESS,
  },
  {
    icon: PhoneIcon,
    label: "Call us",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
  },
  {
    icon: EnvelopeSimpleIcon,
    label: "Email us",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: ClockIcon,
    label: "Working hours",
    value: "Mon – Sat, 9:30 AM – 6:30 PM",
  },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  quantity: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  quantity: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status === "sending") return;

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Failed to send enquiry.",
        );
      }

      setStatus("sent");
      setForm(initialForm);
    } catch (error) {
      console.error("[CONTACT FORM]", error);
      setStatus("idle");
    }
  };

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-[#071a2d] text-primary-foreground">
        {/* =========================================================
      BACKGROUND
  ========================================================= */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(37,99,235,0.38),transparent_35%),radial-gradient(circle_at_15%_100%,rgba(14,165,233,0.16),transparent_35%)]" />

        {/* Blue glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-blue-500/20 blur-3xl" />

        {/* Bottom cyan glow */}
        <div className="pointer-events-none absolute -bottom-48 left-1/3 size-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* =========================================================
      DECORATIVE DOTS
  ========================================================= */}

        <div className="pointer-events-none absolute right-8 top-10 hidden opacity-30 lg:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className="size-1.5 rounded-full bg-blue-200" />
            ))}
          </div>
        </div>

        {/* Decorative ring */}
        <div className="pointer-events-none absolute -right-28 top-1/2 hidden size-[460px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />

        <div className="pointer-events-none absolute -right-16 top-1/2 hidden size-[340px] -translate-y-1/2 rounded-full border border-white/5 lg:block" />

        {/* =========================================================
      CONTENT
  ========================================================= */}

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-primary-foreground/50">
            <span>Home</span>
            <span>/</span>
            <span className="text-primary-foreground/80">Contact</span>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Get in touch
            </p>
          </div>

          {/* Heading */}
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s find the right{" "}
            <span className="text-accent">capacitor solution.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/70 sm:text-lg sm:leading-8">
            Tell us what you need — from MFD and voltage ratings to terminal
            type, application and monthly quantity. Our team can help identify
            the right specification for your requirement.
          </p>

          {/* Quick information */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-full bg-white/10">
                <PhoneIcon className="size-4 text-accent" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                  Call us
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white/90">
                  {PHONE}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-full bg-white/10">
                <EnvelopeSimpleIcon className="size-4 text-accent" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                  Email
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white/90">
                  {EMAIL}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-full bg-white/10">
                <ClockIcon className="size-4 text-accent" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                  Working hours
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white/90">
                  Mon – Sat, 9:30 AM – 6:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
      BOTTOM DIAGONAL EDGE
  ========================================================= */}

        <div className="absolute bottom-0 left-0 h-10 w-full bg-[#f7faff] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactPoints.map((point) => (
            <div
              key={point.label}
              className="rounded-lg border border-border bg-card p-6"
            >
              <point.icon className="size-6 text-accent" />
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {point.label}
              </p>
              {point.href ? (
                <a
                  href={point.href}
                  className="mt-1 block text-sm font-semibold hover:text-primary"
                >
                  {point.value}
                </a>
              ) : (
                <p className="mt-1 text-sm font-semibold">{point.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <p className="eyebrow">Request a quote</p>
            <h2 className="mt-2 text-2xl font-extrabold">
              Send us your requirement
            </h2>
            <span className="rule-accent mt-4" />

            {status === "sent" ? (
              <div className="mt-8 rounded-md border border-accent/40 bg-surface p-6">
                <p className="font-bold text-foreground">
                  Thanks — your enquiry has been sent.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our team will get back to you within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-bold text-primary hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" required>
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      value={form.company}
                      onChange={update("company")}
                      className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                      placeholder="Company name"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" required>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                      placeholder="+91"
                    />
                  </Field>
                </div>

                <Field label="Monthly quantity">
                  <input
                    value={form.quantity}
                    onChange={update("quantity")}
                    className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                    placeholder="e.g. 5,000 pcs / month"
                  />
                </Field>

                <Field label="Your requirement" required>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full resize-none rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
                    placeholder="MFD, rated voltage, terminal type, application..."
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  <PaperPlaneTiltIcon className="size-4" />
                  {status === "sending" ? "Sending..." : "Send enquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="TESQ Capacitors location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.976140012976!2d77.06215785!3d28.788429200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d077e827b5551%3A0x36bf2e0fb985c5b8!2sSector%204%2C%20Khera%20Khurd%2C%20Delhi%2C%20110039!5e1!3m2!1sen!2sin!4v1790327973308!5m2!1sen!2sin"
              className="h-[420px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
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
      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
