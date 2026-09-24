"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { segments } from "@/data/home";

const colorStyles = {
  blue: {
    blob: "bg-blue-400/80",
    iconBg: "bg-blue-50",
    iconText: "text-blue-700",
    underline: "bg-blue-500",
    arrow: "text-blue-700",
    arrowBg: "bg-blue-50",
    hover: "group-hover:bg-blue-600",
  },

  sky: {
    blob: "bg-sky-400/80",
    iconBg: "bg-sky-50",
    iconText: "text-sky-600",
    underline: "bg-sky-400",
    arrow: "text-sky-700",
    arrowBg: "bg-sky-50",
    hover: "group-hover:bg-sky-500",
  },

  cyan: {
    blob: "bg-cyan-400/75",
    iconBg: "bg-cyan-50",
    iconText: "text-cyan-700",
    underline: "bg-cyan-400",
    arrow: "text-cyan-700",
    arrowBg: "bg-cyan-50",
    hover: "group-hover:bg-cyan-500",
  },

  orange: {
    blob: "bg-orange-400/75",
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
    underline: "bg-orange-400",
    arrow: "text-orange-600",
    arrowBg: "bg-orange-50",
    hover: "group-hover:bg-orange-500",
  },

  purple: {
    blob: "bg-violet-400/75",
    iconBg: "bg-violet-50",
    iconText: "text-violet-700",
    underline: "bg-violet-400",
    arrow: "text-violet-700",
    arrowBg: "bg-violet-50",
    hover: "group-hover:bg-violet-600",
  },

  green: {
    blob: "bg-lime-400/70",
    iconBg: "bg-lime-50",
    iconText: "text-green-600",
    underline: "bg-green-400",
    arrow: "text-green-600",
    arrowBg: "bg-green-50",
    hover: "group-hover:bg-green-500",
  },
} as const;

export default function SegmentsWeServe() {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow">
            Segments we serve
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#10233f] sm:text-4xl lg:text-[42px]">
            Engineered around real applications
          </h2>

          <span className="rule-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5">

          {segments.map((segment) => {
            const Icon = segment.icon;

            const style =
              colorStyles[
                segment.color as keyof typeof colorStyles
              ];

            return (
              <Link
                key={segment.label}
                href="/products"
                className="group relative flex flex-col items-center text-center"
              >

                <div className="relative h-[185px] w-full max-w-[190px]">

                  {/* Image container */}
                  <div
                    className="absolute left-1/2 top-0 h-[225px] w-[215px] -translate-x-1/2 overflow-hidden rounded-[32px] border-[4px] border-white bg-white shadow-[0_8px_25px_rgba(32,65,110,0.12)]"
                  >
                    <img
                      src={segment.image}
                      alt={segment.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Subtle image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
                  </div>
                  <div
                    className={`absolute -bottom-10 left-1/2 grid size-14 -translate-x-1/2 place-items-center rounded-full border-4 border-white shadow-[0_5px_18px_rgba(20,50,90,0.14)] ${style.iconBg} transition-transform duration-300 group-hover:-translate-y-1`}
                  >
                    <Icon
                      weight="regular"
                      className={`size-7 ${style.iconText}`}
                    />
                  </div>
                </div>

                {/* =================================================
                    LABEL
                ================================================= */}

                <div className="mt-4 flex min-h-[52px] items-start justify-center px-1">
                  <h3 className="text-[16px] font-extrabold leading-[1.15] text-[#10233f] sm:text-[17px]">
                    {segment.label}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}