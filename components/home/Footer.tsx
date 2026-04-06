import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Youtube,
} from "lucide-react";

const cuveesLinks = [
  { label: "PRESTIGE IMPERIAL ROYAL", href: "#cuvee-royal" },
  { label: "PRESTIGE HERITAGE BRUT", href: "#cuvee-brut" },
  { label: "PRESTIGE HERITAGE DEMI-SEC", href: "#cuvee-heritage-demi-sec" },
  { label: "PRESTIGE ELEGANCE BRUT", href: "#cuvee-elegance-brut" },
  { label: "PRESTIGE ELEGANCE DEMI-SEC", href: "#cuvee-elegance-demi-sec" },
];

const maisonLinks = [
  { label: "NOTRE HISTOIRE", href: "#notre-histoire" },
  { label: "NOTRE ORIGINE", href: "#notre-origine" },
  { label: "LE MOT DU FONDATEUR", href: "#mot-fondateur" },
  { label: "GALERIE", href: "#galerie-cbn" },
  { label: "NOS ÉVÉNEMENTS", href: "#evenements-cbn" },
];

const aideLinks = [
  { label: "CONSERVATION ET DÉGUSTATION", href: "#conservation-degustation" },
  { label: "POINTS DE VENTE", href: "#points-de-vente" },
  { label: "NOUS CONTACTER", href: "#contact-cbn" },
];

const legalLinks = [
  { label: "CONDITIONS GÉNÉRALES D’UTILISATION", href: "#cgu" },
  { label: "DONNÉES PERSONNELLES ET COOKIES", href: "#donnees-personnelles" },
  { label: "DÉCLARATION D’ACCESSIBILITÉ", href: "#accessibilite" },
  {
    label: "QUALITÉS ET CARACTÉRISTIQUES ENVIRONNEMENTALES",
    href: "#qualites-environnementales",
  },
  { label: "PARAMÈTRES DES COOKIES", href: "#parametres-cookies" },
  { label: "CONDITIONS GÉNÉRALES DE VENTE", href: "#cgv" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: Music2,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: Youtube,
  },
];

const languages = [
  {
    label: "FRANÇAIS",
    short: "FR",
    flagSrc: "/images/flags/fr.png",
    flagAlt: "Drapeau français",
    href: "#lang-fr",
  },
  {
    label: "ENGLISH",
    short: "EN",
    flagSrc: "/images/flags/gb.png",
    flagAlt: "Drapeau britannique",
    href: "#lang-en",
  },
  {
    label: "DEUTSCH",
    short: "DE",
    flagSrc: "/images/flags/de.png",
    flagAlt: "Drapeau allemand",
    href: "#lang-de",
  },
  {
    label: "中文",
    short: "ZH",
    flagSrc: "/images/flags/cn.png",
    flagAlt: "Drapeau chinois",
    href: "#lang-zh",
  },
  {
    label: "РУССКИЙ",
    short: "RU",
    flagSrc: "/images/flags/ru.png",
    flagAlt: "Drapeau russe",
    href: "#lang-ru",
  },
  {
    label: "ESPAÑOL",
    short: "ES",
    flagSrc: "/images/flags/es.png",
    flagAlt: "Drapeau espagnol",
    href: "#lang-es",
  },
];

const hoverGold =
  "transition-colors duration-300 hover:text-[#c8a96b] hover:border-[#c8a96b]";

const footerLinkClass = `text-[14px] font-medium uppercase tracking-[-0.01em] text-[#f1efeb] ${hoverGold}`;
const footerMutedLinkClass = `text-[13px] font-normal uppercase tracking-[0.01em] text-[#8d8b87] ${hoverGold}`;

export default function Footer() {
  const currentLanguage = languages[0];

  return (
    <footer className="bg-black text-white" aria-label="Footer Champagne Bernard Njandja">
      <div className="mx-auto max-w-[1920px] px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-14 md:px-10 md:pb-12 lg:px-14 lg:pb-14 lg:pt-16 xl:px-[52px]">
        {/* Zone haute */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[1.35fr_0.9fr_0.9fr_0.8fr] lg:gap-x-14 xl:gap-x-20">
          <div className="max-w-[320px]">
            <p className="text-[13px] font-normal uppercase tracking-[0.02em] text-[#72706c]">
              NEWSLETTER
            </p>

            <p className="mt-9 max-w-[270px] text-[17px] font-normal leading-[1.5] tracking-[-0.015em] text-[#efede8]">
              Inscrivez-vous à notre newsletter et restez en contact avec
              Champagne Bernard Njandja.
            </p>

            <Link
              href="#newsletter"
              className={`mt-9 inline-flex border-b border-[#e7e2d8] pb-[4px] text-[15px] font-medium uppercase tracking-[-0.01em] text-[#efede8] ${hoverGold}`}
            >
              S’INSCRIRE À LA NEWSLETTER
            </Link>
          </div>

          <div>
            <p className="text-[13px] font-normal uppercase tracking-[0.02em] text-[#72706c]">
              NOS CUVÉES
            </p>

            <nav className="mt-9 flex flex-col gap-y-4" aria-label="Nos cuvées">
              {cuveesLinks.map((link) => (
                <Link key={link.label} href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[13px] font-normal uppercase tracking-[0.02em] text-[#72706c]">
              À PROPOS DE LA MAISON
            </p>

            <nav
              className="mt-9 flex flex-col gap-y-4"
              aria-label="À propos de la maison"
            >
              {maisonLinks.map((link) => (
                <Link key={link.label} href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[13px] font-normal uppercase tracking-[0.02em] text-[#72706c]">
              AIDE
            </p>

            <nav className="mt-9 flex flex-col gap-y-4" aria-label="Aide">
              {aideLinks.map((link) => (
                <Link key={link.label} href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Zone médiane */}
        <div className="mt-16 grid grid-cols-1 items-center gap-y-8 lg:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-10">
          <div className="flex justify-start">
            <Link
              href="/"
              className="inline-flex transition-opacity duration-300 hover:opacity-80"
              aria-label="Retour à l’accueil Champagne Bernard Njandja"
            >
              <Image
                src="/images/brand/cbn-logo-transparent.png"
                alt="Champagne Bernard Njandja"
                width={220}
                height={64}
                className="h-auto w-[156px] object-contain sm:w-[176px] lg:w-[190px] xl:w-[210px]"
                priority={false}
              />
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-5">
            <div className="flex items-center justify-center gap-x-4 sm:gap-x-5 lg:gap-x-[18px]">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center text-[#a19d97] transition-colors duration-300 hover:text-[#c8a96b]"
                >
                  <Icon className="h-[15px] w-[15px] stroke-[1.7]" />
                </a>
              ))}
            </div>

            {/* Langue cliquable sous les icônes */}
            <details className="group relative">
              <summary className="flex list-none cursor-pointer items-center gap-x-2 text-[12px] font-medium uppercase tracking-[0.03em] text-[#ece8e2] transition-colors duration-300 hover:text-[#c8a96b]">
                <span>{currentLanguage.label}</span>
<Image
  src={currentLanguage.flagSrc}
  alt={currentLanguage.flagAlt}
  width={16}
  height={12}
  className="h-[11px] w-[16px] object-cover"
 />
<ChevronDown className="h-[13px] w-[13px] stroke-[1.8] transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="absolute left-1/2 top-full z-30 mt-3 w-[210px] -translate-x-1/2 border border-[#1a1a1a] bg-black/95 p-2 backdrop-blur-sm">
                <div className="flex flex-col">
                  {languages.map((language) => (
                    <Link
                      key={language.short}
                      href={language.href}
                      className="flex items-center justify-between px-3 py-2 text-[11px] font-normal uppercase tracking-[0.04em] text-[#8d8b87] transition-colors duration-300 hover:text-[#c8a96b]"
                    >
                     <span>{language.label}</span>
<Image
  src={language.flagSrc}
  alt={language.flagAlt}
  width={16}
  height={12}
  className="ml-3 h-[11px] w-[16px] object-cover"
/>
                    </Link>
                  ))}
                </div>
              </div>
            </details>
          </div>

          <div className="flex justify-start lg:justify-end">
            <p className="max-w-[520px] text-left text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#6f6c68] lg:text-right">
              L’abus d’alcool est dangereux pour la santé. À consommer avec
              modération.
            </p>
          </div>
        </div>

        {/* Ligne séparatrice */}
        <div className="mt-12 h-px w-full bg-[#1f1e1b] lg:mt-14" />

        {/* Zone basse */}
        <div className="mt-10 flex flex-col gap-y-8 lg:mt-12">
          <div className="flex flex-col gap-y-6 xl:flex-row xl:items-start xl:justify-between xl:gap-x-10">
            <div className="flex flex-col gap-y-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4">
              <p className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[-0.01em] text-[#ece8e2]">
                © CHAMPAGNE BERNARD NJANDJA 2026
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4 lg:grid-cols-3 lg:gap-x-12 xl:flex xl:flex-wrap xl:justify-end xl:gap-x-12 xl:gap-y-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={footerMutedLinkClass}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <p className="text-[11px] font-normal tracking-[0.08em] text-[#66635f]">
              Made By NamEx.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}