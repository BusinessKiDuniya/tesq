import { HandHeartIcon } from "@phosphor-icons/react";

export default function HandsAtWork() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
      <div className="grid gap-10 overflow-hidden rounded-lg bg-card lg:grid-cols-2">
        <div className="aspect-[4/3] lg:aspect-auto">
          <img
            src="/images/women_empowerment.png"
            alt="Worker hand-assembling a capacitor can before sealing"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-10">
          <HandHeartIcon className="size-7 text-signal" />
          <p className="mt-4 font-medium">Checked by hand, not just machine</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Every unit gets a human check before it&apos;s sealed
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Machines wind and fill the can, but it&apos;s our floor staff who
            inspect the terminal crimp, seal quality and labelling on every
            single piece — a step that catches what an automated line alone
            would miss.
          </p>
        </div>
      </div>
    </section>
  );
}
