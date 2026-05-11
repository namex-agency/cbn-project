import Image from "next/image";

export default function StoreLocatorShowcase() {
  return (
    <section
      className="bg-[#e9eaec] px-0 py-0"
      aria-label="Où déguster le Champagne Bernard Njandja"
    >
      <div className="mx-auto w-full max-w-[1918px]">
        <div className="relative overflow-hidden bg-black">
          <div className="relative min-h-[500px] w-full sm:min-h-[620px] md:min-h-[720px] lg:min-h-[820px] xl:min-h-[900px]">
            <Image
              src="/images/storelocator/store-locator-bg.jpg"
              alt="Où déguster le Champagne Bernard Njandja"
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />

            <div className="absolute inset-0 bg-black/28" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex w-full max-w-[1480px] flex-col items-center px-6 text-center sm:px-8 md:px-10 lg:px-12">
                <h2 className="text-[clamp(28px,4.8vw,72px)] font-semibold uppercase leading-[0.94] tracking-[-0.05em] text-white">
                  OÙ DÉGUSTER LE CHAMPAGNE BERNARD NJANDJA ?
                </h2>

                <p className="mt-7 max-w-[620px] text-[13px] font-normal leading-[1.45] tracking-[-0.01em] text-white/96 sm:text-[14px] md:mt-8 md:text-[15px]">
                  Localisez les restaurants, snacks &amp; cavistes à proximité
                  proposant les champagnes Bernard Njandja.
                </p>

                <a
                  href="#points-de-vente-cbn"
                  className="mt-9 inline-flex h-[46px] min-w-[182px] items-center justify-center bg-[#050505] px-8 text-center text-[12px] font-normal uppercase tracking-[0.16em] text-[#c9a45a] transition-all duration-300 hover:bg-[#0b0b0b] hover:text-[#dfbf7c] md:mt-10"
                >
                  Rechercher
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}