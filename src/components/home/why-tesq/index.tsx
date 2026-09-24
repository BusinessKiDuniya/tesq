import { strengths } from "@/data";
import { CheckCircleIcon } from "@phosphor-icons/react";

const cardStyles = [
  {
    accent: "text-blue-700",
    iconBg: "bg-blue-50",
    checkBg: "bg-blue-100",
    checkText: "text-blue-700",
    divider: "bg-blue-600",
    gradient:
      "bg-[radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.35),rgba(37,99,235,0.08)_35%,transparent_65%)]",
    glow: "bg-blue-500/10",
  },
  {
    accent: "text-orange-600",
    iconBg: "bg-orange-50",
    checkBg: "bg-orange-100",
    checkText: "text-orange-600",
    divider: "bg-orange-500",
    gradient:
      "bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.35),rgba(249,115,22,0.08)_35%,transparent_65%)]",
    glow: "bg-orange-500/10",
  },
  {
    accent: "text-emerald-600",
    iconBg: "bg-emerald-50",
    checkBg: "bg-emerald-100",
    checkText: "text-emerald-600",
    divider: "bg-emerald-500",
    gradient:
      "bg-[radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.35),rgba(16,185,129,0.08)_35%,transparent_65%)]",
    glow: "bg-emerald-500/10",
  },
];

export default function WhyTesq() {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-16 lg:py-20">

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      {/* Top-left curved glow */}
      <div className="pointer-events-none absolute -left-40 -top-32 h-80 w-[650px] rounded-[50%] bg-gradient-to-br from-blue-100/70 via-blue-50/30 to-transparent blur-2xl" />

      {/* Top-right curved glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-[650px] rounded-full bg-gradient-to-bl from-blue-100/70 via-blue-50/20 to-transparent blur-2xl" />

      {/* Bottom-left decoration */}
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-80 w-[650px] rotate-[12deg] rounded-[50%] bg-blue-100/40 blur-xl" />

      {/* Bottom-right decoration */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-72 w-[550px] rounded-[50%] bg-blue-50/70 blur-xl" />

      {/* Decorative dots - top left */}
      <div className="pointer-events-none absolute left-5 top-8 hidden opacity-60 sm:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="size-1.5 rounded-full bg-blue-200"
            />
          ))}
        </div>
      </div>

      {/* Decorative dots - bottom right */}
      <div className="pointer-events-none absolute bottom-10 right-5 hidden opacity-60 sm:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="size-1.5 rounded-full bg-blue-200"
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section heading */}
        <div className="mb-10 max-w-3xl lg:mb-12">
          <p className="eyebrow">
            Why TESQ
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#10233f] sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
            Reliability and safety on every installation
          </h2>

          <span className="rule-accent mt-4" />
        </div>

        {/* =========================================================
            CARDS
        ========================================================= */}

        <div className="grid gap-6 lg:grid-cols-3">
          {strengths.map((strength, index) => {
            const style =
              cardStyles[index % cardStyles.length];

            const Icon = strength.icon;

            return (
              <article
                key={strength.title}
                className="group relative min-h-[330px] overflow-hidden rounded-2xl border border-white/80 bg-white p-7 shadow-[0_12px_40px_rgba(31,67,120,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(31,67,120,0.13)] sm:p-8"
              >

                {/* =================================================
                    CARD GRADIENT
                ================================================= */}

                <div
                  className={`pointer-events-none absolute inset-0 ${style.gradient}`}
                />

                {/* Large soft glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 size-56 rounded-full blur-3xl ${style.glow}`}
                />

                {/* Large watermark icon */}
                <Icon
                  aria-hidden="true"
                  weight="regular"
                  className={`pointer-events-none absolute -right-2 top-3 size-36 opacity-[0.08] ${style.accent}`}
                />

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="relative z-10">

                  {/* Icon */}
                  <div
                    className={`grid size-14 place-items-center rounded-full ${style.iconBg} shadow-sm`}
                  >
                    <Icon
                      weight="regular"
                      className={`size-8 ${style.accent}`}
                    />
                  </div>

                  {/* Heading */}
                  <h3
                    className={`mt-6 max-w-[90%] text-[25px] font-extrabold leading-tight text-[#14243b] ${style.accent}`}
                    dangerouslySetInnerHTML={{
                      __html: strength.title,
                    }}
                  />

                  {/* Divider */}
                  <span
                    className={`mt-4 block h-1 w-11 rounded-full ${style.divider}`}
                  />

                  {/* Points */}
                  <ul className="mt-6 space-y-4">
                    {strength.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[15px] leading-6 text-[#33445c]"
                      >
                        <span
                          className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ${style.checkBg}`}
                        >
                          <CheckCircleIcon
                            weight="fill"
                            className={`size-4 ${style.checkText}`}
                          />
                        </span>

                        <span className="pt-0.5">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}