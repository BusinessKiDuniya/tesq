import {
  DropIcon,
  FactoryIcon,
  FanIcon,
  GaugeIcon,
  GearIcon,
  LightningIcon,
  ShieldCheckIcon,
  SnowflakeIcon,
  WindIcon,
} from "@phosphor-icons/react";

export const segments = [
  {
    icon: FanIcon,
    label: "Ceiling & Exhaust Fans",
    image: "/images/segments/fan.png",
    color: "blue",
  },

  {
    icon: SnowflakeIcon,
    label: "Air Conditioning",
    image: "/images/segments/air-conditioning.png",
    color: "sky",
  },

  {
    icon: DropIcon,
    label: "Water Pumps",
    image: "/images/segments/water-pump.png",
    color: "cyan",
  },

  {
    icon: WindIcon,
    label: "Air Coolers",
    image: "/images/segments/air-cooler.png",
    color: "orange",
  },

  {
    icon: GearIcon,
    label: "Industrial Motors",
    image: "/images/segments/industrial-motor.png",
    color: "purple",
  },

  {
    icon: LightningIcon,
    label: "Power Correction",
    image: "/images/segments/power-correction.png",
    color: "green",
  },
];

export const SLIDES = [
  {
    eyebrow: "POWER ELECTRONICS",
    title: "High-Performance",
    highlight: "Capacitors for Power Electronics",
    description:
      "MPP self-healing capacitors engineered for reliable performance across demanding power electronics applications.",
    image: "/images/products/group.jpg",
    tag: "TESQ Performance Series",
    application: "Power Electronics",
  },
  {
    eyebrow: "MOTORS & FANS",
    title: "Reliable Capacitors",
    highlight: "Built for Motors & Fans",
    description:
      "High-quality motor-run capacitors designed to deliver dependable performance in ceiling fans, coolers and motor applications.",
    image: "/images/products/group.jpg",
    tag: "Motor Capacitor Series",
    application: "Motors • Fans • Coolers",
  },
  {
    eyebrow: "PUMPS & HVAC",
    title: "Engineered for",
    highlight: "Demanding Applications",
    description:
      "Purpose-built capacitor solutions for pumps, air conditioning systems and industrial motor applications.",
    image: "/images/products/group.jpg",
    tag: "Industrial Series",
    application: "Pumps • HVAC • Motors",
  },
  {
    eyebrow: "ENGINEERED IN INDIA",
    title: "Tested for Quality.",
    highlight: "Built for Reliability.",
    description:
      "Every TESQ capacitor is manufactured with a focus on consistency, reliability and long-term performance.",
    image: "/images/products/group.jpg",
    tag: "TESQ Quality Standard",
    application: "Tested Before Dispatch",
  },
];

export const strengths = [
  {
    icon: ShieldCheckIcon,
    title: "Quality &amp; Reliability",
    points: [
      "100% tested in our Delhi plant",
      "Long life expectancy",
      "Engineered to international standards",
    ],
    detail: "Capacitance, insulation and surge checks",
  },
  {
    icon: GaugeIcon,
    title: "Safety First",
    points: [
      "Tested safety features on each phase",
      "Over-pressure disconnection",
      "Non-PCB pollutant materials",
    ],
    detail: "Stable performance in demanding conditions",
  },
  {
    icon: FactoryIcon,
    title: "Efficiency &amp; Productivity",
    points: [
      "Easy installation ergonomics",
      "Time saving components",
      "Pan-India distributor network",
    ],
    detail: "Ratings, leads and enclosures made to spec",
  },
];
