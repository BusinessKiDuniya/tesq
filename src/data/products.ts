
export type Product = {
  slug: string;
  name: string;
  category: "Fan & Appliance" | "Motor & Pump" | "Starting & Industrial";
  image: string;
  tagline: string;
  mfd: string;
  volt: string;
  size: string;
  type: string;
  applications: string[];
  description: string;
};

export const products: Product[] = [
  {
    slug: "ceiling-fan-capacitor",
    name: "Ceiling Fan Capacitor",
    category: "Fan & Appliance",
    image: "/images/products/ceiling.jpg",
    tagline: "Dry type running capacitor for ceiling fan motors",
    mfd: "2.0, 2.25, 2.50, 3.15 MFD",
    volt: "440 V AC",
    size: "28 x 52 mm",
    type: "Dry (MPP-SH)",
    applications: ["Ceiling fans", "Fan assembly lines", "OEM fan manufacturing", "Replacement market"],
    description:
      "Metallised polypropylene, self-healing running capacitor built for continuous duty in single-phase ceiling fan motors. Heavy micron film and a sealed cylindrical can keep capacitance stable through long running hours and Indian summer ambient temperatures.",
  },
  {
    slug: "square-capacitor",
    name: "Square Capacitor",
    category: "Fan & Appliance",
    image: "/images/products/square.jpg",
    tagline: "Epoxy coated square box capacitor for compact fittings",
    mfd: "1.0, 1.25, 1.50, 1.70, 1.80 MFD",
    volt: "440 V AC",
    size: "Compact square body",
    type: "Dry with epoxy coating",
    applications: ["Table & pedestal fans", "Wall fans", "Small appliance motors", "Compact motor housings"],
    description:
      "Epoxy coated MPP-SH square capacitor rated 440 VAC / 70°C. The flat body fits tight motor housings while the epoxy fill resists moisture, vibration and dust ingress.",
  },
  {
    slug: "oil-capacitor",
    name: "Oil Capacitor",
    category: "Fan & Appliance",
    image: "/images/products/oil.jpg",
    tagline: "Gel filled can capacitor with pin and wire terminations",
    mfd: "2.5, 3.15, 4.0 MFD",
    volt: "440 V AC",
    size: "28 x 52 mm",
    type: "Filling with gelly (can), pin & wire",
    applications: ["Fan motors", "Small pump motors", "Appliance motors", "Replacement fitments"],
    description:
      "Gel filled cylindrical can capacitor supplied with pin or wire terminals. The filling improves heat dissipation and dielectric stability where duty cycles are long and ambient temperature is high.",
  },
  {
    slug: "cooler-motor-capacitor",
    name: "Cooler Motor Capacitor",
    category: "Fan & Appliance",
    image: "/images/products/cooler.jpg",
    tagline: "Running capacitor for air cooler motors and pumps",
    mfd: "4.0, 5.0 MFD",
    volt: "440 V AC",
    size: "28 x 52, 30 x 52 mm",
    type: "Pin & wire",
    applications: ["Desert air coolers", "Personal coolers", "Cooler pump motors", "Cooler OEM assembly"],
    description:
      "Purpose built for air cooler motors that run in humid, water-splashed environments. Sealed can construction with insulated flexible leads and burst-proof end-of-life behaviour.",
  },
  {
    slug: "exhaust-fan-capacitor",
    name: "Exhaust Fan Capacitor",
    category: "Fan & Appliance",
    image: "/images/products/exhaust.jpg",
    tagline: "Cylindrical capacitor for exhaust and ventilation fans",
    mfd: "6.0, 8.0 MFD",
    volt: "440 V AC",
    size: "30 x 52, 35 x 52 mm",
    type: "Cylindrical",
    applications: ["Exhaust fans", "Kitchen ventilation", "Industrial ventilation", "Air circulators"],
    description:
      "Higher capacitance cylindrical capacitor for exhaust and ventilation duty, where motors start under load and run continuously for long shifts.",
  },
  {
    slug: "mono-block-capacitor",
    name: "Mono Block Capacitor",
    category: "Motor & Pump",
    image: "/images/products/mono.jpg",
    tagline: "Gel filled capacitor for monoblock pump sets",
    mfd: "10.0, 12.50, 15.0, 20.0, 25.0 MFD",
    volt: "440 V AC",
    size: "30 x 52, 35 x 52, 35 x 72, 40 x 72 mm",
    type: "Filling with gelly (can), pin & wire",
    applications: ["Monoblock pumps", "Water lifting sets", "Domestic pumping", "Agricultural pumping"],
    description:
      "Rugged gel filled can capacitor for monoblock pump motors. Designed to hold capacitance under voltage fluctuation typical of rural and semi-urban supply.",
  },
  {
    slug: "submersible-panel-capacitor",
    name: "Submersible Panel Capacitor",
    category: "Motor & Pump",
    image: "/images/products/submersible.jpg",
    tagline: "Panel mount capacitor for submersible pump control panels",
    mfd: "25.0, 36.0, 40.0, 50.0, 60.0, 72.0 MFD",
    volt: "250 V",
    size: "30 x 95, 40 x 95, 45 x 95, 50 x 95 mm",
    type: "Filling with gelly (can)",
    applications: ["Submersible pump panels", "Borewell control panels", "Irrigation panels", "Panel builders"],
    description:
      "High capacitance can capacitor engineered for submersible pump starter panels. Supplied across a wide MFD band so panel builders can standardise on one series.",
  },
  {
    slug: "heavy-duty-capacitor",
    name: "Heavy Duty Capacitor",
    category: "Motor & Pump",
    image: "/images/products/heavyduty.jpg",
    tagline: "Agricultural motor duty capacitor for demanding sites",
    mfd: "36.0, 50.0, 72.0 MFD",
    volt: "440 V AC",
    size: "45 x 95, 45 x 120, 50 x 125 mm",
    type: "Special for agriculture motor",
    applications: ["Agricultural motors", "Irrigation pump sets", "Threshers & farm equipment", "Rural distribution"],
    description:
      "Heavy micron SH-MPP element in a reinforced can, built for agricultural motors exposed to dust, heat and unstable supply voltage over long irrigation seasons.",
  },
  {
    slug: "starting-capacitor",
    name: "Starting Capacitor",
    category: "Starting & Industrial",
    image: "/images/products/starting.jpg",
    tagline: "Electrolytic aluminium start capacitor, burst proof",
    mfd: "40-60 up to 400-500 MFD",
    volt: "200 to 275 V",
    size: "45 x 125 mm",
    type: "Aluminium electrolytic",
    applications: ["Single phase motor starting", "Compressors", "Pump starting", "Machine tools"],
    description:
      "Aluminium electrolytic starting capacitor rated up to 105°C, with a burst-proof base for safe end of life. Short duty rated for high starting torque applications.",
  },
  {
    slug: "mpp-starting-capacitor",
    name: "MPP Starting Capacitor",
    category: "Starting & Industrial",
    image: "/images/products/mpp.jpg",
    tagline: "Dry MPP film start capacitor for longer service life",
    mfd: "40-60 up to 200-250 MFD",
    volt: "250 V (MPP film)",
    size: "40 x 95, 45 x 95, 50 x 95 mm",
    type: "Dry MPP film",
    applications: ["Motor starting", "Pump sets", "Frequent start-stop duty", "Panel assembly"],
    description:
      "Dry MPP film alternative to electrolytic start capacitors. Self-healing film gives longer service life and stable performance where start cycles are frequent.",
  },
  {
    slug: "ac-capacitor",
    name: "AC Capacitor (Single & Dual)",
    category: "Starting & Industrial",
    image: "/images/products/ac.jpg",
    tagline: "Single and dual run capacitors for air conditioning",
    mfd: "25 to 72 MFD",
    volt: "440 V AC",
    size: "As per rating",
    type: "Single & dual",
    applications: ["Split & window air conditioners", "Condenser fan motors", "Compressor run duty", "HVAC service"],
    description:
      "Run capacitors for air conditioning compressors and condenser fan motors, available in single and dual sections to suit OEM and service requirements.",
  },
  {
    slug: "box-type-capacitor",
    name: "Box Type Capacitor",
    category: "Starting & Industrial",
    image: "/images/products/box.jpg",
    tagline: "High MFD box capacitor with terminal or wire output",
    mfd: "72.0, 108.0, 144.0, 180.0, 216.0, 254.0, 288.0 MFD",
    volt: "440 V AC",
    size: "Box construction, multiple sizes",
    type: "Terminal & wire",
    applications: ["Industrial motors", "Power factor duty", "Large pump sets", "Panel installations"],
    description:
      "High capacitance box type capacitor with MPP 'SH' element to IS:2993, offered with stud terminals or flying leads for panel and industrial motor installations.",
  },
];

export const categories = [
  "Fan & Appliance",
  "Motor & Pump",
  "Starting & Industrial",
] as const;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
