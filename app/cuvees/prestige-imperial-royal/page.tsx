"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const SLIDES: Slide[] = [
  {
    src: "/images/royal/royal-slide-1.png",
    alt: "Champagne Bernard Njandja Prestige Imperial Royal — vue principale",
  },
  {
    src: "/images/royal/royal-slide-2.png",
    alt: "Champagne Bernard Njandja Prestige Imperial Royal — vue secondaire",
  },
  {
    src: "/images/royal/royal-slide-3.png",
    alt: "Champagne Bernard Njandja Prestige Imperial Royal — vue détail",
  },
];

const AGE_OPTIONS = [
  {
    label: "11 ans — Prestige Imperial Royal",
    href: "/cuvees/prestige-imperial-royal",
    active: true,
  },
];

export default function PrestigeImperialRoyalPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAgeMenuOpen, setIsAgeMenuOpen] = useState(false);
  const ageMenuRef = useRef<HTMLDivElement | null>(null);

  const activeAgeLabel = useMemo(
    () => AGE_OPTIONS.find((option) => option.active)?.label ?? AGE_OPTIONS[0].label,
    []
  );

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!ageMenuRef.current) return;
      if (!ageMenuRef.current.contains(event.target as Node)) {
        setIsAgeMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAgeMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#0f0f10]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[61.4fr_38.6fr]">
        <section className="relative overflow-hidden bg-[#f4f4f1]">
          <Link
            href="/menu"
            className="absolute left-7 top-7 z-30 inline-flex items-center text-[11px] font-normal uppercase tracking-[0.28em] text-black/72 transition-opacity duration-300 hover:opacity-55 sm:left-9 sm:top-8"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Menu
          </Link>

          <Link
            href="/"
            className="absolute left-1/2 top-6 z-30 -translate-x-1/2 transition-opacity duration-300 hover:opacity-75 sm:top-7"
            aria-label="Accueil Champagne Bernard Njandja"
          >
            <div className="relative h-[32px] w-[200px] sm:h-[34px] sm:w-[220px]">
              <Image
                src="/images/brand/champagne-bernard-njandja-logo.svg"
                alt="Champagne Bernard Njandja"
                fill
                className="object-contain"
                sizes="220px"
                priority
              />
            </div>
          </Link>

          <div className="relative flex min-h-[60vh] items-center justify-center px-6 pb-24 pt-20 sm:px-10 sm:pb-28 lg:min-h-screen lg:px-16 lg:pb-24 lg:pt-16 xl:px-20">
            <button
              type="button"
              aria-label="Voir l’image précédente"
              onClick={goToPreviousSlide}
              className="absolute left-6 top-1/2 z-20 hidden h-[44px] w-[44px] -translate-y-1/2 items-center justify-center bg-black text-white transition-colors duration-300 hover:bg-[#1b1b1b] lg:inline-flex xl:left-10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[14px] w-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Voir l’image suivante"
              onClick={goToNextSlide}
              className="absolute right-6 top-1/2 z-20 hidden h-[44px] w-[44px] -translate-y-1/2 items-center justify-center bg-black/70 text-white transition-colors duration-300 hover:bg-black lg:inline-flex xl:right-10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[14px] w-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="relative w-full max-w-[980px]">
              <div className="relative mx-auto aspect-[1.16/1] w-full max-w-[760px] sm:max-w-[820px] lg:max-w-[900px]">
                {SLIDES.map((slide, index) => (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                    aria-hidden={index !== currentSlide}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 58vw, 92vw"
                      className="object-contain object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-10">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Aller à la slide ${index + 1}`}
                aria-pressed={index === currentSlide}
                onClick={() => setCurrentSlide(index)}
                className="group inline-flex h-6 items-center justify-center"
              >
                <span
                  className={`block h-px w-10 transition-colors duration-300 sm:w-12 ${
                    index === currentSlide ? "bg-black" : "bg-black/22 group-hover:bg-black/42"
                  }`}
                />
              </button>
            ))}
          </div>
        </section>

        <section className="flex min-h-[40vh] flex-col border-l border-black/[0.03] bg-[#f3f3f0]">
          <div className="flex items-start justify-end px-7 pb-3 pt-7 sm:px-10 sm:pt-8 lg:px-14 lg:pb-4 lg:pt-9 xl:px-16">
            <Link
              href="/store-locator"
              className="text-[11px] uppercase tracking-[0.28em] text-black/80 transition-opacity duration-300 hover:opacity-55"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Store Locator
            </Link>
          </div>

          <div className="flex flex-1 flex-col justify-center px-7 pb-24 pt-10 sm:px-10 sm:pb-28 sm:pt-12 lg:px-14 lg:pb-36 lg:pt-10 xl:px-16">
            <div className="mx-auto w-full max-w-[565px]">
              <div className="mb-12 flex items-start justify-between gap-6 lg:mb-11">
                <h1
                  className="max-w-[72%] text-[18px] font-normal uppercase leading-[1.68] tracking-[0.075em] text-[#111112] sm:text-[19px] lg:text-[18px] xl:text-[19px]"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Prestige Imperial Royal - 11 ans
                </h1>

                <Link
                  href="/#collections"
                  className="mt-[2px] text-[11px] uppercase tracking-[0.22em] text-black/82 underline decoration-[0.7px] underline-offset-[5px] transition-opacity duration-300 hover:opacity-55"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Retour
                </Link>
              </div>

              <div className="mb-6" ref={ageMenuRef}>
                <p
                  className="mb-3 text-[10px] uppercase tracking-[0.34em] text-black/46"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Âge
                </p>

                <div className="relative">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isAgeMenuOpen}
                    onClick={() => setIsAgeMenuOpen((prev) => !prev)}
                    className="flex h-[58px] w-full items-center justify-between border border-black/[0.04] bg-[#ececea] px-5 text-left transition-colors duration-300 hover:bg-[#e8e8e5]"
                  >
                    <span
                      className="text-[14px] font-normal tracking-[0.01em] text-[#111112]"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    >
                      11 ans
                    </span>

                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center text-black/72 transition-transform duration-300 ${
                        isAgeMenuOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[15px] w-[15px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  {isAgeMenuOpen && (
                    <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 overflow-hidden border border-black/[0.06] bg-[#f6f6f4] shadow-[0_18px_40px_rgba(0,0,0,0.07)]">
                      <nav aria-label="Sélection d’âge" className="py-1">
                        {AGE_OPTIONS.map((option) => (
                          <Link
                            key={option.href}
                            href={option.href}
                            onClick={() => setIsAgeMenuOpen(false)}
                            className={`flex min-h-[52px] items-center px-5 text-[13px] tracking-[0.04em] transition-colors duration-200 ${
                              option.active
                                ? "bg-black text-white"
                                : "text-[#111112] hover:bg-black/[0.04]"
                            }`}
                            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                          >
                            {option.label}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  )}
                </div>
              </div>

              <Link
                href="/acheter/prestige-imperial-royal"
                className="mb-12 inline-flex h-[54px] w-full items-center justify-center bg-black px-6 text-[11px] uppercase tracking-[0.19em] text-white transition-colors duration-300 hover:bg-[#171717] sm:h-[56px] lg:mb-11"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Acheter
              </Link>

              <div className="max-w-[470px] pb-10 lg:pb-16">
                <h2
                  className="mb-7 text-[12px] uppercase tracking-[0.15em] text-[#111112]"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Description et conservation
                </h2>

                <p
                  className="max-w-[39ch] text-[15px] leading-[2.24] text-black/84"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  La cuvée Prestige Imperial Royal incarne une vision rare du
                  champagne de prestige, pensée pour les instants les plus
                  exclusifs. Son équilibre révèle une profondeur élégante,
                  construite avec précision et maîtrise.
                </p>

                <p
                  className="mt-6 max-w-[39ch] text-[15px] leading-[2.24] text-black/76"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Vieillie pendant 11 ans, cette cuvée exprime une richesse
                  aromatique remarquable, entre maturité, tension et finesse,
                  destinée aux célébrations d’exception.
                </p>

                <Link
                  href="/maison/conservation"
                  className="mt-10 inline-block pr-10 text-[12px] uppercase tracking-[0.115em] text-black/88 underline decoration-[0.7px] underline-offset-[5px] transition-opacity duration-300 hover:opacity-60"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Comment conserver le Champagne Bernard Njandja&nbsp;?
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}