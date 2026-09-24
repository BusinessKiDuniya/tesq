"use client";

import TrustStripe from "@/components/home/trust-stripe";
import Hero from "@/components/home/hero";
import { SLIDES } from "@/data";
import { useEffect, useState } from "react";
import Products from "@/components/home/product";
import WhyTesq from "@/components/home/why-tesq";
import SegmentsWeServe from "@/components/home/segments-we-serve";
import CompanyWeAre from "@/components/home/company-we-are";
import CTA from "@/components/home/cta";
import ProcessVideo from "@/components/home/process-video";
import ProductSeries from "@/components/home/product-series/index,";
import HandsAtWork from "@/components/home/hands-at-work";
import MachineFloor from "@/components/home/machine-floor";

export default function Home() {
  const [active, setActive] = useState(0);
  const [isPaused] = useState(false);

  const SLIDE_DURATION = 3000;

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [active, isPaused]);

  return (
    <div>
      {/* Hero Slider */}
      <Hero />

      {/* Product Series Navigation */}
      <ProductSeries />

      {/* Trust Strip */}
      <TrustStripe />

      {/* Products */}
      <Products />

      <ProcessVideo />

      {/* Why TESQ */}
      <WhyTesq />

      {/* Hands at work */}
      <HandsAtWork />

      {/* Segments We Serve */}
      <SegmentsWeServe />

      {/* The Company We Are */}
      <CompanyWeAre />

      {/* Machine floor */}
      <MachineFloor />

      {/* CTA */}
      <CTA />
    </div>
  );
}
