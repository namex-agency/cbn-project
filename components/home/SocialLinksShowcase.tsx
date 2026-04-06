import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    id: "facebook",
    href: "https://www.facebook.com/",
    label: "Facebook Champagne Bernard Njandja",
    icon: Facebook,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/",
    label: "Instagram Champagne Bernard Njandja",
    icon: Instagram,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/",
    label: "LinkedIn Champagne Bernard Njandja",
    icon: Linkedin,
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/",
    label: "YouTube Champagne Bernard Njandja",
    icon: Youtube,
  },
];

const galleryItems = [
  {
    id: "social-1",
    src: "/images/social/social-1.jpg",
    alt: "Champagne Bernard Njandja - visuel social 1",
    frameClassName: "aspect-[323/398]",
  },
  {
    id: "social-2",
    src: "/images/social/social-2.jpg",
    alt: "Champagne Bernard Njandja - visuel social 2",
    frameClassName: "aspect-[323/330]",
  },
  {
    id: "social-3",
    src: "/images/social/social-3.jpg",
    alt: "Champagne Bernard Njandja - visuel social 3",
    frameClassName: "aspect-[323/398]",
  },
  {
    id: "social-4",
    src: "/images/social/social-4.jpg",
    alt: "Champagne Bernard Njandja - visuel social 4",
    frameClassName: "aspect-[323/330]",
  },
];

export default function SocialLinksShowcase() {
  return (
    <section
      className="bg-[#e9eaec] px-4 pb-16 pt-10 sm:px-6 md:px-8 md:pb-20 md:pt-12 lg:px-10 lg:pb-24 lg:pt-14"
      aria-label="Réseaux sociaux Champagne Bernard Njandja"
    >
      <div className="mx-auto max-w-[1820px]">
        {/* Header social */}
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d2ca] bg-transparent text-[#111111] transition-all duration-300 hover:border-[#111111] hover:-translate-y-[1px] hover:opacity-70 md:h-12 md:w-12"
                >
                  <Icon className="h-[18px] w-[18px] stroke-[1.7] md:h-[19px] md:w-[19px]" />
                </a>
              );
            })}
          </div>

          <p className="mt-5 text-[12px] font-normal uppercase tracking-[0.14em] text-[#7a746d] md:mt-6 md:text-[13px]">
            Réseaux sociaux
          </p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-[20px] font-semibold uppercase leading-none tracking-[-0.03em] text-[#111111] transition-opacity duration-300 hover:opacity-65 sm:text-[26px] md:text-[34px] lg:text-[42px]"
          >
            @CHAMPAGNEBERNARDNJANDJAOFF
          </a>
        </div>

        {/* Galerie */}
        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-3 sm:mt-12 sm:gap-x-4 sm:gap-y-4 lg:mt-14 lg:grid-cols-4 lg:gap-x-5 xl:gap-x-6">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group"
            >
              <div
                className={`relative w-full overflow-hidden bg-[#d9d5cf] ${item.frameClassName}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={false}
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.015)_0%,rgba(0,0,0,0.03)_100%)]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}