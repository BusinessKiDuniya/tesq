import { strengths } from "@/data";
import { CheckCircleIcon } from "@phosphor-icons/react";

export default function WhyTesq(){
    return (
        <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="eyebrow">Why TESQ</p>

          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Reliability and safety on every installation
          </h2>

          <span className="rule-accent mt-4" />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="rounded-lg border border-border bg-card p-7"
              >
                <strength.icon className="size-8 text-primary" />

                <h3
                  className="mt-4 text-xl font-bold"
                  dangerouslySetInnerHTML={{ __html: strength.title }}
                />

                <ul className="mt-4 space-y-2.5">
                  {strength.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}