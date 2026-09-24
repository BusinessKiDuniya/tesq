import { segments } from "@/data/home";

export default function SegmentsWeServe(){
    return (
        <section className="border-y border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="eyebrow">Segments we serve</p>

          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Engineered around real applications
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {segments.map((segment) => (
              <div
                key={segment.label}
                className="group border border-primary/20 bg-card px-3 py-7 transition-colors hover:border-primary"
              >
                <segment.icon className="mx-auto size-9 text-primary transition-transform group-hover:-translate-y-1" />

                <p className="mt-4 text-sm font-bold leading-snug">
                  {segment.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}