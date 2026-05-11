"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const cuvees = [
  {
    label: "Prestige Imperial Royal",
    href: "/cuvees/prestige-imperial-royal",
    image: "/images/menu/prestige-imperial-royal.jpg",
    subtitle: "L’expression souveraine de la maison",
  },
  {
    label: "Prestige Heritage Brut",
    href: "/cuvees/prestige-heritage-brut",
    image: "/images/menu/prestige-heritage-brut.jpg",
    subtitle: "L’équilibre intemporel du brut",
  },
  {
    label: "Prestige Heritage Demi-Sec",
    href: "/cuvees/prestige-heritage-demi-sec",
    image: "/images/menu/prestige-heritage-demi-sec.jpg",
    subtitle: "Une douceur élégante et généreuse",
  },
  {
    label: "Prestige Elegance Brut",
    href: "/cuvees/prestige-elegance-brut",
    image: "/images/menu/prestige-elegance-brut.jpg",
    subtitle: "La finesse au service de la célébration",
  },
  {
    label: "Prestige Elegance Demi-Sec",
    href: "/cuvees/prestige-elegance-demi-sec",
    image: "/images/menu/prestige-elegance-demi-sec.jpg",
    subtitle: "Une signature plus ronde et lumineuse",
  },
];

const STICKY_LOGO_SRC = "/images/brand/sticky-cuvees-logo.png";

export default function StickyCuveesBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.88;
      const scrolledPastHero = window.scrollY > heroHeight;

      setIsVisible(scrolledPastHero);

      if (!scrolledPastHero) {
        setMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[85] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full pointer-events-none opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="border-b border-white/10 bg-[rgba(16,16,16,0.38)] shadow-[0_10px_38px_rgba(0,0,0,0.18)] backdrop-blur-[22px]">
        <div className="mx-auto max-w-[1920px]">
          {/* Barre sticky */}
          <div className="relative flex h-[74px] items-center px-4 sm:px-6 md:h-[88px] md:px-8 lg:px-10 xl:px-[52px]">
            {/* Gauche desktop / mobile */}
            <div className="flex w-[120px] items-center md:w-[170px]">
              {/* Mobile uniquement */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                className="inline-flex h-10 w-10 items-center justify-center text-white/90 transition-colors duration-300 hover:text-[#c8a96b] md:hidden"
              >
                {menuOpen ? (
                  <X className="h-6 w-6 stroke-[1.9]" />
                ) : (
                  <Menu className="h-6 w-6 stroke-[1.9]" />
                )}
              </button>

              {/* Desktop uniquement */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                className="hidden text-[12px] font-semibold uppercase tracking-[0.08em] text-white/90 transition-colors duration-300 hover:text-[#c8a96b] md:inline-flex"
              >
                {menuOpen ? "Fermer" : "Menu"}
              </button>
            </div>

            {/* Centre */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link
                href="/"
                aria-label="Retour à l’accueil Champagne Bernard Njandja"
                className="inline-flex items-center justify-center"
              >
                {!logoError ? (
                  <Image
                    src={STICKY_LOGO_SRC}
                    alt="Champagne Bernard Njandja"
                    width={148}
                    height={46}
                    className="h-auto w-[102px] object-contain sm:w-[112px] md:w-[124px]"
                    priority={false}
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-[15px] font-semibold uppercase tracking-[0.18em] text-white/92 md:text-[17px]">
                    CBN
                  </span>
                )}
              </Link>
            </div>

            {/* Droite desktop */}
            <div className="ml-auto hidden w-[170px] items-center justify-end md:flex">
              <Link
                href="/points-de-vente"
                className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/90 transition-colors duration-300 hover:text-[#c8a96b]"
              >
                Points de vente
              </Link>
            </div>

            {/* Spacer mobile droite */}
            <div className="ml-auto h-10 w-10 md:hidden" />
          </div>

          {/* Menu ouvert desktop */}
          <div
            className={`hidden overflow-hidden border-t border-white/10 bg-[rgba(20,20,20,0.34)] text-white shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-[24px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block ${
              menuOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-10 pb-10 pt-8 xl:px-[52px]">
              <div className="grid grid-cols-4 gap-5 xl:gap-6">
                {cuvees.slice(0, 4).map((cuvee) => (
                  <Link
                    key={cuvee.href}
                    href={cuvee.href}
                    onClick={() => setMenuOpen(false)}
                    className="group block"
                  >
                    <div className="relative aspect-[1.58/1] overflow-hidden bg-white/8 ring-1 ring-white/10">
                      <Image
                        src={cuvee.image}
                        alt={cuvee.label}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.10)_0%,_rgba(255,255,255,0.02)_28%,_rgba(0,0,0,0.08)_100%)]" />
                    </div>

                    <div className="pt-5">
                      <p className="text-[15px] font-medium uppercase tracking-[-0.01em] text-white/95 transition-colors duration-300 group-hover:text-[#c8a96b]">
                        {cuvee.label}
                      </p>
                      <p className="mt-2 text-[13px] uppercase tracking-[0.02em] text-white/58">
                        {cuvee.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-16 gap-y-4 text-[14px] font-medium uppercase tracking-[-0.01em] text-white/92 xl:w-[720px]">
                <Link
                  href="/la-maison"
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors duration-300 hover:text-[#c8a96b]"
                >
                  La Maison
                </Link>
                <Link
                  href="/points-de-vente"
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors duration-300 hover:text-[#c8a96b]"
                >
                  Points de vente
                </Link>
                <Link
                  href="/galerie"
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors duration-300 hover:text-[#c8a96b]"
                >
                  La Galerie
                </Link>
                <Link
                  href="/nous-contacter"
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors duration-300 hover:text-[#c8a96b]"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>

          {/* Menu ouvert mobile */}
          <div
            className={`overflow-hidden border-t border-white/10 bg-[rgba(20,20,20,0.42)] text-white backdrop-blur-[24px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
              menuOpen ? "max-h-[100svh] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-h-[calc(100svh-74px)] overflow-y-auto px-4 pb-6 pt-3">
              <nav
                aria-label="Navigation mobile des cuvées"
                className="flex flex-col gap-5"
              >
                {cuvees.map((cuvee) => (
                  <Link
                    key={cuvee.href}
                    href={cuvee.href}
                    onClick={() => setMenuOpen(false)}
                    className="block"
                  >
                    <div className="relative aspect-[1.25/1] overflow-hidden bg-white/8 ring-1 ring-white/10">
                      <Image
                        src={cuvee.image}
                        alt={cuvee.label}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.10)_0%,_rgba(255,255,255,0.02)_28%,_rgba(0,0,0,0.08)_100%)]" />
                    </div>

                    <div className="border-b border-white/10 pb-4 pt-3">
                      <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/95">
                        {cuvee.label}
                      </p>
                      <p className="mt-2 text-[12px] uppercase tracking-[0.04em] text-white/58">
                        {cuvee.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex flex-col border-t border-white/10 pt-4">
                <Link
                  href="/points-de-vente"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/92 transition-colors duration-300 hover:text-[#c8a96b]"
                >
                  Points de vente
                </Link>
                <Link
                  href="/nous-contacter"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/92 transition-colors duration-300 hover:text-[#c8a96b]"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}