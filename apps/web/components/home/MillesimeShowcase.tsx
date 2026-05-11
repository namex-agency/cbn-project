import Image from "next/image";

export default function MillesimeShowcase() {
  return (
    <section
      className="bg-[#e9eaec] px-4 py-10 sm:px-6 md:px-8 md:py-12 lg:px-10 lg:py-14"
      aria-label="Cuvée Royal Champagne Bernard Njandja"
    >
      <div className="mx-auto grid max-w-[1820px] grid-cols-1 items-stretch gap-y-10 md:grid-cols-[1.02fr_0.98fr] md:gap-x-0">
        {/* COLONNE IMAGE GAUCHE */}
        <div className="relative min-h-[520px] overflow-hidden sm:min-h-[620px] md:min-h-[760px] lg:min-h-[860px]">
          <Image
            src="/images/royal/royal-main.jpg"
            alt="Cuvée Royal - Champagne Bernard Njandja"
            fill
            sizes="(max-width: 767px) 100vw, 52vw"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* COLONNE ÉDITORIALE DROITE */}
        <div className="flex min-h-[520px] flex-col items-center justify-center bg-[#e9eaec] px-8 text-center sm:min-h-[620px] md:min-h-[760px] md:px-12 lg:min-h-[860px] lg:px-16">
          {/* Sur-titre */}
          <p className="text-[13px] font-normal uppercase tracking-[0.02em] text-[#6f7680] md:text-[14px]">
            CUVÉE ROYAL
          </p>

          {/* Cadre visuel */}
          <div className="mt-10 border border-[#ecebe7] bg-[#f3f1ed] p-[10px] md:mt-12 md:p-[12px]">
            <div className="relative h-[320px] w-[320px] bg-[#f7f5f1] sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px] lg:h-[500px] lg:w-[500px]">
              <Image
                src="/images/royal/royal-detail-V1.jpg"
                alt="Univers visuel de la Cuvée Royal"
                fill
                sizes="(max-width: 767px) 320px, (max-width: 1024px) 460px, 500px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Titre éditorial */}
          <h2 className="mt-10 max-w-[540px] text-[20px] font-semibold uppercase tracking-[-0.025em] text-[#0f1114] sm:text-[22px] md:mt-12 md:text-[25px] lg:text-[28px]">
            LE SUMMUM DU LUXE ET DE L’EXCLUSIVITÉ
          </h2>

          {/* CTA */}
          <a
            href="#cuvee-royal"
            className="mt-8 inline-flex border-b border-[#111111] pb-[2px] text-[13px] font-normal uppercase tracking-[0.01em] text-[#111111] transition-opacity duration-300 hover:opacity-60 md:mt-10"
          >
            DÉCOUVRIR LA CUVÉE
          </a>
        </div>
      </div>
    </section>
  );
}