import Image from "next/image";

const collections = [
  {
    id: "prestige-imperial-royal",
    title: "Prestige Imperial",
    subtitle: "ROYAL",
    href: "/cuvees/prestige-imperial-royal",
    imageSrc: "/images/collections/prestige-imperial-royal.jpg",
    imageAlt: "Prestige Imperial Royal - Champagne Bernard Njandja",
  },
  {
    id: "prestige-heritage-brut",
    title: "Prestige Heritage",
    subtitle: "BRUT",
    href: "#cuvee-brut",
    imageSrc: "/images/collections/prestige-heritage-brut.jpg",
    imageAlt: "Prestige Heritage Brut - Champagne Bernard Njandja",
  },
];

export default function CollectionsShowcase() {
  return (
    <section
      className="flex min-h-screen items-center justify-center bg-[#e9eaec] px-6 py-20 sm:px-8 md:px-10 md:py-24 lg:px-12 lg:py-28"
      aria-label="Collections Champagne Bernard Njandja"
    >
      <div className="w-full max-w-[920px]">
        <div className="grid grid-cols-1 justify-items-center gap-y-14 md:grid-cols-2 md:gap-x-12 md:gap-y-0">
          {collections.map((item) => (
            <article
              key={item.id}
              className="group flex w-full max-w-[404px] flex-col items-center"
            >
              <a
                href={item.href}
                className="block w-full focus:outline-none"
                aria-label={`Voir la cuvée ${item.title} ${item.subtitle}`}
              >
                <div className="relative w-full overflow-hidden bg-[#111111] aspect-[74/86]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 88vw, 404px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.14]" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center opacity-0 translate-y-5 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:bottom-6">
                    <span className="inline-flex h-[50px] w-[calc(100%-52px)] items-center justify-center border border-[#c8a96b] bg-[linear-gradient(180deg,#f3dfab_0%,#ddbf78_26%,#c69c4c_52%,#b68532_74%,#e7ca88_100%)] px-6 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[#1b1306] shadow-[0_10px_25px_rgba(0,0,0,0.22)]">
                      Voir la cuvée
                    </span>
                  </div>
                </div>
              </a>

              <div className="flex flex-col items-center px-2 pt-6 text-center md:pt-7">
                <a
                  href={item.href}
                  className="text-[15px] font-normal leading-none tracking-[-0.01em] text-[#111111] transition-opacity duration-300 hover:opacity-65 md:text-[17px]"
                >
                  {item.title}
                </a>

                <a
                  href={item.href}
                  className="mt-[8px] text-[13px] font-normal uppercase leading-none tracking-[0.03em] text-[#7d7d7d] transition-opacity duration-300 hover:opacity-65 md:text-[14px]"
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