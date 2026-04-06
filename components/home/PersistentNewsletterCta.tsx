"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp, Mail, X } from "lucide-react";
import { useState } from "react";

export default function PersistentNewsletterCta() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        pointer-events-none fixed z-[90]
        bottom-4 left-4 right-4
        md:bottom-0 md:left-auto md:right-12
      "
    >
      <div className="pointer-events-auto ml-auto flex w-full flex-col items-end md:w-auto">
        {/* Panneau ouvert */}
        <div
          className={`
            w-full overflow-hidden
            border border-[#d9d0bf] bg-[#f7f4ee]
            shadow-[0_18px_40px_rgba(0,0,0,0.18)]
            transition-all duration-300 ease-out
            ${
              isOpen
                ? "mb-0 max-h-[760px] translate-y-0 opacity-100"
                : "mb-0 max-h-0 translate-y-3 opacity-0"
            }
            md:w-[388px]
          `}
        >
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le panneau newsletter"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center text-white transition-colors duration-300 hover:text-[#f1dfb0]"
            >
              <X className="h-6 w-6 stroke-[1.9]" />
            </button>

           <div className="relative h-[250px] w-full md:h-[345px]">
  {/* Image mobile */}
  <div className="absolute inset-0 md:hidden">
    <Image
      src="/images/newsletter/cbn-newsletter-mobile.jpg"
      alt="Visuel newsletter mobile Champagne Bernard Njandja"
      fill
      priority={false}
      className="object-cover object-center"
    />
  </div>

  {/* Image desktop */}
  <div className="absolute inset-0 hidden md:block">
    <Image
      src="/images/newsletter/cbn-newsletter-desktop.jpg"
      alt="Visuel newsletter desktop Champagne Bernard Njandja"
      fill
      priority={false}
      className="object-cover object-center"
    />
  </div>
</div>
          </div>

          <div className="px-5 pb-5 pt-5 md:px-6 md:pb-6 md:pt-6">
            <h3 className="text-[20px] font-medium leading-[1.15] tracking-[-0.02em] text-[#111111] md:text-[28px]">
              Restons en contact
            </h3>

            <p className="mt-4 text-[14px] leading-[1.55] text-[#262626] md:text-[15px]">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités,
              offres spéciales et bien plus...
            </p>

            <form className="mt-5 md:mt-6">
              <label htmlFor="newsletter-email" className="sr-only">
                Adresse e-mail
              </label>

              <div className="flex items-center gap-3 border-b border-[#ddd6c8] pb-3">
                <Mail className="h-[19px] w-[19px] shrink-0 text-[#b9912f]" />
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Votre adresse e-mail..."
                  className="w-full bg-transparent text-[15px] text-[#111111] outline-none placeholder:text-[#8d8b87]"
                />
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex h-[48px] w-full items-center justify-center bg-black px-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-[#1a1a1a]"
              >
                S’inscrire
              </button>
            </form>
          </div>
        </div>

        {/* CTA fermé / persistant */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Ouvrir la newsletter"
          className="
            flex h-[52px] w-full items-center
            bg-[#c8a96b] px-5 text-black
            shadow-[0_12px_28px_rgba(0,0,0,0.16)]
            transition-colors duration-300 hover:bg-[#d2b476]
            md:w-[388px]
          "
        >
          <span className="inline-flex w-[22px] items-center justify-start">
            {isOpen ? (
              <ChevronDown className="h-[18px] w-[18px] stroke-[2.2]" />
            ) : (
              <ChevronUp className="h-[18px] w-[18px] stroke-[2.2]" />
            )}
          </span>

          <span className="flex-1 text-center text-[12px] font-semibold uppercase tracking-[0.08em] md:text-[13px]">
            S’inscrire à la newsletter
          </span>
        </button>
      </div>
    </div>
  );
}