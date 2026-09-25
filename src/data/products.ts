export interface CapacitorProduct {
  id: string;
  image: string;
  modelCode: string | null;
  application: string;
  capacitance: string;
  capacitanceTolerance: string;
  ratedVoltage: string;
  ratedFrequency: string;
  dielectric: string;
  climaticCategory: string;
  referenceStandard: string;
  cmlNumber: string;
}

export const capacitorProducts: CapacitorProduct[] = [
  // ─────────────────────────────────────────────
  // BOX TYPE CAPACITORS
  // ─────────────────────────────────────────────

  {
    id: "cap-180-440v",
    image: "180-big.png",
    modelCode: "TC6Q5-ZI22",
    application: "BOX TYPE CAPACITORS",
    capacitance: "180 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-144-440v",
    image: "144 big.png",
    modelCode: "TC6Q5-ZI22",
    application: "BOX TYPE CAPACITORS",
    capacitance: "144 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-108-440v",
    image: "108 big.png",
    modelCode: "TC6Q5-ZI22",
    application: "BOX TYPE CAPACITORS",
    capacitance: "108 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-72-440v-box",
    image: "72 big.png",
    modelCode: "TC6Q5-ZI22",
    application: "BOX TYPE CAPACITORS",
    capacitance: "72 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },

  // ─────────────────────────────────────────────
  // AC CONDITIONER CAPACITORS
  // ─────────────────────────────────────────────

  {
    id: "cap-50-440v",
    image: "50 steel.png",
    modelCode: "TC75T-ZI22",
    application: "AC CONDITIONER CAPACITORS",
    capacitance: "50 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH TCS RS",
    climaticCategory: "40/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-50-4-440v",
    image: "50-4-steel.png",
    modelCode: "TC75T-ZI22",
    application: "AC CONDITIONER CAPACITORS",
    capacitance: "50+4 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH TCS RD",
    climaticCategory: "40/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-45-440v",
    image: "45 steel.png",
    modelCode: "TC75T-ZI22",
    application: "AC CONDITIONER CAPACITORS",
    capacitance: "45 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH TCS RS",
    climaticCategory: "40/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-36-4-440v",
    image: "36-4-steel.png",
    modelCode: "TC75T-ZI22",
    application: "AC CONDITIONER CAPACITORS",
    capacitance: "36+4 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH TCS RD",
    climaticCategory: "40/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },

  // ─────────────────────────────────────────────
  // AC / MOTOR
  // ─────────────────────────────────────────────

  {
    id: "cap-72-440v-cyl",
    image: "72_2.png",
    modelCode: "TC75T-ZI22",
    application: "AC CONDITIONER CAPACITORS",
    capacitance: "72 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-36-440v",
    image: "36.png",
    modelCode: "TC&55-ZI22",
    application: "Motor / AC",
    capacitance: "36 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-25-440v",
    image: "25_2.png",
    modelCode: "TC&55-ZI22",
    application: "Motor / AC",
    capacitance: "25 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-20-440v",
    image: "20.png",
    modelCode: "TC&55-ZI22",
    application: "Motor / AC",
    capacitance: "20 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },

  // ─────────────────────────────────────────────
  // PANEL CAPACITORS
  // ─────────────────────────────────────────────

  {
    id: "cap-72-250v",
    image: "72.png",
    modelCode: "TC75T-ZI22",
    application: "PANEL",
    capacitance: "72 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "250 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "cap-50-250v",
    image: "50 small.png",
    modelCode: "TC75T-ZI22",
    application: "PANEL",
    capacitance: "50 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "250 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },

  // ─────────────────────────────────────────────
  // MOTOR CAPACITORS
  // ─────────────────────────────────────────────

  {
    id: "tcv-1zt329",
    image: "15.png",
    modelCode: "TCV.1ZT329",
    application: "Motor",
    capacitance: "15 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "tc7ss-zi06",
    image: "12.5.png",
    modelCode: "TC7SS.ZI06",
    application: "MOTOR",
    capacitance: "12.5 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "tc7sr-zio3",
    image: "10.png",
    modelCode: "TC7SR-ZIO3",
    application: "MOTOR",
    capacitance: "10 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "tc7sr-zio2",
    image: "10.png",
    modelCode: "TC7SR-ZIO2",
    application: "MOTOR",
    capacitance: "10 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "tc7ts-ze07-s",
    image: "8.png",
    modelCode: "TC7TS.ZE07",
    application: "MOTOR",
    capacitance: "8 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "tc7tr-ze07-r",
    image: "8.png",
    modelCode: "TC7TR.ZE07",
    application: "MOTOR",
    capacitance: "8 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },

  // ─────────────────────────────────────────────
  // WASHING MACHINE CAPACITORS
  // ─────────────────────────────────────────────

  {
    id: "tc7ts-zh22",
    image: "10+6.png",
    modelCode: "TC7TS-ZH22",
    application: "WACHING MACHINE CAPACITORS",
    capacitance: "10 MFD (Blue & White) + 6 MFD (Red & White)",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "tc7ts-zh18",
    image: "8+5.png",
    modelCode: "TC7TS-ZH18",
    application: "WACHING MACHINE CAPACITORS",
    capacitance: "8 MFD (Blue & White) + 5 MFD (Red & White)",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },

  // ─────────────────────────────────────────────
  // MOTOR CAPACITORS
  // ─────────────────────────────────────────────

  {
    id: "tcv-2a10",
    image: "6.png",
    modelCode: "TCV.2A10",
    application: "MOTOR CAPACITORS",
    capacitance: "6 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "tc7ts-ze11-30x52",
    image: "4.png",
    modelCode: "TC7TS-ZE11",
    application: "MOTOR CAPACITORS",
    capacitance: "4 MFD (30*52)",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "tc7ts-ze11",
    image: "4.png",
    modelCode: "TC7TS-ZE11",
    application: "MOTOR CAPACITORS",
    capacitance: "4 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },

  // ─────────────────────────────────────────────
  // FAN CAPACITORS
  // ─────────────────────────────────────────────

  {
    id: "tc7ts-zio6",
    image: "3.15.png",
    modelCode: "TC7TS-ZIO6",
    application: "FAN CAPACITORS",
    capacitance: "3.15 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
  {
    id: "tc6ts-zh18",
    image: "3.15.png",
    modelCode: "TC6TS-ZH18",
    application: "FAN CAPACITORS",
    capacitance: "3.15 MFD",
    capacitanceTolerance: "±5%",
    ratedVoltage: "440 VAC",
    ratedFrequency: "50 Hz",
    dielectric: "SH-MPP",
    climaticCategory: "-25/85/21",
    referenceStandard: "IS:2993",
    cmlNumber: "8100152599",
  },
];

export function getProduct(id: string) {
  return capacitorProducts.find((p) => p.id === id);
}

export const productApplications = Array.from(
  new Set(
    capacitorProducts
      .map((product) => product.application.trim())
      .filter(Boolean),
  ),
);
