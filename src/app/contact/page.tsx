"use client";

import {
  ClockIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PaperPlaneTiltIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

/*
 * Replace app/contact/page.tsx with this file.
 *
 * The form below is UI-only: onSubmit currently just shows a success
 * state. Wire handleSubmit to your email/CRM endpoint (an API route,
 * Formspree, Resend, etc.) before going live — see the TODO inside it.
 *
 * Update ADDRESS, PHONE, EMAIL and the map query below to your real details.
 */

const ADDRESS = "TESQ Capacitors (India), Delhi, India";
const PHONE = "+91 00000 00000";
const EMAIL = "sales@tesqcapacitors.com";
const MAP_QUERY = encodeURIComponent(ADDRESS);

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
    setStatus("sending");

    // TODO: replace with a real call, e.g.:
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("sent");
    setForm(initialForm);
  };

  return (
    <div>
      <section className="hero-surface diag-edge text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Talk to us about your capacitor requirement
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Share your MFD, voltage, terminal type and monthly quantity and
            we&apos;ll get back with pricing and lead time.
          </p>
        </div>
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
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="h-[420px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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