"use client";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const PHONE = "919211303462";
const MESSAGE = "Hi, I'd like to enquire about TESQ capacitors.";

const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsappLogoIcon className="relative size-8" weight="fill" />
    </a>
  );
}
