import Image from "next/image";

const collections = [
  {
    id: "prestige-heritage-demi-sec",
    title: "Prestige Heritage",
    subtitle: "DEMI-SEC",
    href: "#cuvee-heritage-demi-sec",
    imageSrc: "/images/collections/prestige-heritage-demi-sec.jpg",
    imageAlt: "Prestige Heritage Demi-Sec - Champagne Bernard Njandja",
  },
  {
    id: "prestige-elegance-brut",
    title: "Prestige Elegance",
    subtitle: "BRUT",
    href: "#cuvee-elegance-brut",
    imageSrc: "/images/collections/prestige-elegance-brut.jpg",
    imageAlt: "Prestige Elegance Brut - Champagne Bernard Njandja",
  },
  {
    id: "prestige-elegance-demi-sec",
    title: "Prestige Elegance",
    subtitle: "DEMI-SEC",
    href: "#cuvee-elegance-demi-sec",
    imageSrc: "/images/collections/prestige-elegance-demi-sec.jpg",
    imageAlt: "Prestige Elegance Demi-Sec - Champagne Bernard Njandja",
  },
];

export default function CollectionsShowcaseSecondary() {
  return (
    <section
      className="bg-[#e9eaec] px-4 pb-20 pt-4 sm:px-6 md:px-8 md:pb-24 lg:px-10"
      aria-label="Autres cuvées Champagne Bernard Njandja"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 justify-items-center gap-y-12 md:grid-cols-3 md:gap-x-5 lg:gap-x-6">
          {collections.map((item) => (
            <article
              key={item.id}
              className="group flex w-full max-w-[500px] flex-col items-center"
            >
              <a
                href={item.href}
                className="block w-full focus:outline-none"
                aria-label={`Voir la cuvée ${item.title} ${item.subtitle}`}
              >
                <div className="relative mx-auto aspect-[41/58] w-full overflow-hidden bg-[#151515]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 92vw, (max-width: 1279px) 30vw, 500px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-6">
                    <span className="inline-flex h-[46px] w-[calc(100%-48px)] items-center justify-center border border-[#c9a45b] bg-[linear-gradient(180deg,#f6e1a6_0%,#e4c57d_28%,#cb9f4d_58%,#b88734_78%,#e7cc8d_100%)] px-6 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[#1b1306] shadow-[0_10px_24px_rgba(0,0,0,0.22)] md:h-[50px] md:text-[11px]">
                      Voir la cuvée
                    </span>
                  </div>
                </div>
              </a>

              <div className="flex flex-col items-center px-3 pt-6 text-center md:pt-7">
                <a
                  href={item.href}
                  className="text-[15px] font-normal leading-none tracking-[-0.01em] text-[#111111] transition-opacity duration-300 hover:opacity-65 md:text-[17px] lg:text-[18px]"
                >
                  {item.title}
                </a>

                <a
                  href={item.href}
                  className="mt-[8px] text-[13px] font-normal uppercase leading-none tracking-[0.03em] text-[#757575] transition-opacity duration-300 hover:opacity-65 md:text-[14px]"
                >
                  {item.subtitle}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}