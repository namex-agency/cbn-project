import Image from "next/image";

export default function BrandStoryShowcase() {
  return (
    <section
      className="bg-[#e9eaec] px-4 pb-16 pt-8 sm:px-6 md:px-8 md:pb-20 md:pt-10 lg:px-10 lg:pb-24 lg:pt-12"
      aria-label="Mot du fondateur Champagne Bernard Njandja"
    >
      <div className="mx-auto max-w-[1820px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[0.48fr_0.52fr] lg:gap-x-12 xl:gap-x-16">
          {/* Colonne éditoriale gauche */}
          <div className="flex items-start bg-[#e9eaec]">
            <div className="w-full max-w-[520px] pt-2 lg:pt-0">
              <p className="text-[12px] font-normal uppercase tracking-[0.12em] text-[#6b6762] sm:text-[13px]">
                Bernard Njandja — Fondateur
              </p>

              <h2 className="mt-6 max-w-[500px] text-[22px] font-semibold uppercase leading-[1.02] tracking-[-0.04em] text-[#111111] sm:text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px]">
                Une vision du luxe qui a du sens
              </h2>

              <div className="mt-8 max-w-[430px] space-y-6 text-[16px] font-normal leading-[1.65] tracking-[-0.01em] text-[#55514c] sm:text-[17px]">
                <p>
                  Chez Champagne Bernard Njandja, chaque bouteille doit
                  incarner davantage qu’un grand vin&nbsp;: une présence, une
                  signature et une émotion durable.
                </p>

                <p>
                  Notre maison puise sa force dans l’authenticité, le
                  savoir-faire et une exigence constante, pour faire naître des
                  cuvées pensées comme de véritables expériences sensorielles.
                </p>

                <p>
                  La Cuvée Royal exprime cette ambition au plus haut
                  niveau&nbsp;: une élégance profonde, des arômes riches et
                  complexes, et une personnalité conçue pour les moments les
                  plus mémorables.
                </p>
              </div>

              <a
                href="#cuvee-royal"
                className="mt-10 inline-flex items-center border-b border-[#111111] pb-[4px] text-[12px] font-normal uppercase tracking-[0.11em] text-[#111111] transition-opacity duration-300 hover:opacity-60 md:mt-12 md:text-[13px]"
              >
                Découvrir la cuvée
              </a>
            </div>
          </div>

          {/* Colonne visuelle droite */}
          <div className="relative min-h-[620px] sm:min-h-[720px] lg:min-h-[860px] xl:min-h-[940px]">
            {/* Grand cadre PDG */}
            <div className="relative ml-auto h-[520px] w-full max-w-[860px] overflow-hidden bg-[#dcd8d2] sm:h-[620px] md:h-[720px] lg:h-[860px] xl:h-[940px]">
              <Image
                src="/images/brandstory/cbn-pdg-main.jpg"
                alt="PDG de Champagne Bernard Njandja"
                fill
                priority={false}
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.05)_100%)]" />
            </div>

            {/* Petit cadre cuvée */}
            <div className="relative mt-6 w-full max-w-[220px] sm:mt-8 sm:max-w-[240px] lg:absolute lg:bottom-[28px] lg:left-[-10%] lg:mt-0 lg:max-w-[200px] xl:bottom-[34px] xl:left-[-12%] xl:max-w-[230px]">
              <div className="border border-[#ddd8d1] bg-[#f3f0ea] p-[8px] sm:p-[10px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ece8e1]">
                  <Image
                    src="/images/brandstory/cbn-pdg-main-V2.jpg"
                    alt="Cuvée Royal Champagne Bernard Njandja"
                    fill
                    priority={false}
                    sizes="(max-width: 1023px) 50vw, 230px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}