import { CheckCircleIcon } from "@phosphor-icons/react";

export default function TrustStripe() {
  return (
    <section className="mt-16 border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "ISO 9001:2015 Certified Company",
          "IS:1709 &amp; IS:2993 Compliant",
          "RoHS Compliant Materials",
          "Burst Proof, Self-Healing Design",
        ].map((text) => (
          <div key={text} className="flex items-center gap-3">
            <CheckCircleIcon className="size-5 shrink-0 text-accent" />

            <span
              className="text-sm font-semibold text-foreground/85"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
