"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Points de vente", href: "/points-de-vente" },
  { label: "Cuvée Royale", href: "/cuvees/cuvee-royale" },
  { label: "Offre commerciale", href: "/offre-commerciale" },
];

const heroSlides = [
  {
    id: "royal",
    title: "Cuvée Royale",
    subtitle: "Le summum du luxe et de l’exclusivité",
    href: "/cuvees/cuvee-royale",
    image: "/images/hero/hero-royal.jpg",
    alt: "Champagne Bernard Njandja - Cuvée Royale",
    eyebrow: "Prestige Imperial",
  },
  {
    id: "brut",
    title: "Brut",
    subtitle: "L’élégance emblématique pour les célébrations d’exception",
    href: "/cuvees/brut",
    image: "/images/hero/hero-brut.jpg",
    alt: "Champagne Bernard Njandja - Brut",
    eyebrow: "Prestige Heritage",
  },
  {
    id: "demi-sec",
    title: "Demi-Sec",
    subtitle: "Une douceur raffinée portée par une sophistication lumineuse",
    href: "/cuvees/demi-sec",
    image: "/images/hero/hero-demi-sec.jpg",
    alt: "Champagne Bernard Njandja - Demi-Sec",
    eyebrow: "Prestige Heritage",
  },
];

const SLIDE_DURATION = 12000;

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = useMemo(() => heroSlides[currentSlide], [currentSlide]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0a0a] text-white"
      aria-label="Hero Champagne Bernard Njandja"
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      {/* Luxury overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0.025)_24%,_rgba(255,255,255,0)_56%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.48)_0%,_rgba(0,0,0,0.16)_18%,_rgba(0,0,0,0.08)_52%,_rgba(0,0,0,0.66)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(90deg,_rgba(0,0,0,0.26)_0%,_rgba(0,0,0,0.12)_18%,_rgba(0,0,0,0)_38%,_rgba(0,0,0,0)_62%,_rgba(0,0,0,0.12)_82%,_rgba(0,0,0,0.26)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[44%] bg-[linear-gradient(to_top,_rgba(0,0,0,0.84)_0%,_rgba(0,0,0,0.48)_34%,_rgba(0,0,0,0.12)_68%,_rgba(0,0,0,0)_100%)] sm:h-[38%] lg:h-[32%]" />

      {/* Mobile fullscreen nav */}
      <div
        id="mobile-hero-menu"
        className={`fixed inset-0 z-[70] md:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="absolute inset-0 bg-black/88 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,169,107,0.10)_0%,_rgba(0,0,0,0)_42%)]" />

        <div className="relative flex min-h-screen flex-col px-5 pb-8 pt-5">
          <div className="flex items-start justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center text-white/88 transition-colors duration-300 hover:text-[#c8a96b]"
              aria-label="Fermer le menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Retour à l’accueil Champagne Bernard Njandja"
              className="block"
            >
              <div className="relative h-[64px] w-[132px]">
                <Image
                  src="/images/brand/cbn-logo-black.png"
                  alt="Champagne Bernard Njandja"
                  fill
                  priority
                  className="object-contain opacity-95"
                />
              </div>
            </Link>

            <div className="w-5" />
          </div>

          <div className="flex flex-1 items-center">
            <nav className="w-full" aria-label="Navigation mobile Hero">
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 pb-4 text-[14px] uppercase tracking-[0.22em] text-white/92 transition-colors duration-300 hover:text-[#c8a96b]"
                    >
                      <span>{link.label}</span>
                      <span className="translate-x-0 text-white/28 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#c8a96b]">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="pt-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
              Champagne Bernard Njandja
            </p>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="relative z-20 flex min-h-[100svh] flex-col">
        {/* Header */}
        <header className="relative flex items-start justify-between px-4 pt-5 sm:px-6 sm:pt-6 md:px-10 md:pt-8 lg:px-14 lg:pt-9">
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center text-white/88 transition-colors duration-300 hover:text-[#c8a96b]"
              aria-label="Ouvrir le menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-hero-menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Desktop left */}
          <div className="hidden md:block">
            <Link
              href="/menu"
              className="text-[12px] uppercase tracking-[0.18em] text-white/88 transition-colors duration-300 hover:text-[#c8a96b] lg:text-[13px]"
            >
              Menu
            </Link>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 top-3 -translate-x-1/2 sm:top-4 md:top-4 lg:top-5">
            <Link
              href="/"
              aria-label="Retour à l’accueil Champagne Bernard Njandja"
              className="block transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-[68px] w-[138px] sm:h-[76px] sm:w-[154px] md:h-[100px] md:w-[210px] lg:h-[126px] lg:w-[268px] xl:h-[138px] xl:w-[292px]">
                <Image
                  src="/images/brand/cbn-logo-black.png"
                  alt="Champagne Bernard Njandja"
                  fill
                  priority
                  className="object-contain opacity-95"
                />
              </div>
            </Link>
          </div>

          {/* Desktop right */}
          <div className="hidden md:block">
            <Link
              href="/points-de-vente"
              className="text-[12px] uppercase tracking-[0.18em] text-white/88 transition-colors duration-300 hover:text-[#c8a96b] lg:text-[13px]"
            >
              Points de vente
            </Link>
          </div>

          {/* Mobile spacer */}
          <div className="w-5 md:hidden" />
        </header>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom content */}
        <div className="relative px-4 pb-5 sm:px-6 sm:pb-7 md:px-10 md:pb-8 lg:px-14 lg:pb-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
            {/* Text block */}
            <div className="max-w-[92%] sm:max-w-[82%] md:max-w-[520px] lg:max-w-[620px] xl:max-w-[700px]">
              <p className="mb-4 text-[8px] uppercase tracking-[0.34em] text-white/58 sm:text-[9px] md:mb-5 md:text-[10px] lg:mb-6 lg:text-[11px]">
                {activeSlide.eyebrow}
              </p>

              <Link
                href={activeSlide.href}
                className="group inline-block"
                aria-label={`Découvrir ${activeSlide.title}`}
              >
                <h1 className="max-w-[9ch] text-[26px] font-semibold uppercase leading-[0.94] tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-[#c8a96b] sm:text-[34px] md:text-[44px] lg:text-[56px] xl:text-[64px]">
                  {activeSlide.title}
                </h1>
              </Link>

              <p className="mt-4 max-w-[270px] text-[9px] uppercase leading-[1.9] tracking-[0.24em] text-white/72 sm:max-w-[320px] sm:text-[10px] md:mt-5 md:max-w-[390px] md:text-[10px] lg:mt-6 lg:max-w-[470px] lg:text-[11px]">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Right block */}
            <div className="flex items-end justify-between gap-6 md:flex-col md:items-end md:justify-end md:gap-5">
              <div className="flex items-center gap-2.5">
                {heroSlides.map((slide, index) => {
                  const isActive = index === currentSlide;

                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Afficher ${slide.title}`}
                      className={`h-[5px] rounded-full transition-all duration-500 ${
                        isActive
                          ? "w-11 bg-[#c8a96b]"
                          : "w-4 bg-white/30 hover:bg-white/55"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="hidden md:flex">
                <Link
                  href="/offre-commerciale"
                  className="inline-flex items-center border-b border-white/72 pb-1 text-[12px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#c8a96b] hover:text-[#c8a96b] lg:text-[13px]"
                  aria-label="Découvrir l’offre commerciale"
                >
                  Offre commerciale
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}