import Image from "next/image";

export default function OriginShowcase() {
  return (
    <section
      className="bg-[#e9eaec] px-4 pb-16 pt-4 sm:px-6 md:px-8 md:pb-20 md:pt-6 lg:px-10 lg:pb-24"
      aria-label="Origine de fabrication Champagne Bernard Njandja"
    >
      <div className="mx-auto max-w-[1820px]">
        {/* Grande image paysage */}
        <div className="relative overflow-hidden bg-[#d8d4ce]">
          <div className="relative aspect-[16/7] min-h-[260px] w-full sm:min-h-[340px] md:min-h-[420px] lg:min-h-[520px] xl:min-h-[620px]">
            <Image
              src="/images/origin/cbn-origin-landscape.jpg"
              alt="Origine de fabrication Champagne Bernard Njandja"
              fill
              priority={false}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bloc texte sous l'image */}
        <div className="mx-auto flex max-w-[980px] flex-col items-center px-4 pb-2 pt-12 text-center sm:px-6 md:pt-14 lg:pt-16">
          <h2 className="max-w-[900px] text-[24px] font-semibold uppercase leading-[1.08] tracking-[-0.03em] text-[#111111] sm:text-[30px] md:text-[38px] lg:text-[48px]">
            Au cœur du Champagne,
            <br />
            une signature d’exception
          </h2>

          <div className="mt-7 max-w-[760px] space-y-3 text-[13px] font-normal leading-[1.65] tracking-[0.002em] text-[#6b6762] sm:text-[14px] md:mt-8 md:text-[15px] lg:text-[16px]">
            <p>
              Chaque bouteille est le fruit d’un travail acharné et d’un
              savoir-faire minutieusement cultivé dans la région de
              Champagne-Ardenne, au cœur du village de Cerseuil, à proximité de
              Reims.
            </p>

            <p>
              CHAMPAGNE BERNARD NJANDJA y puise l’authenticité de son terroir,
              l’exigence de son élaboration et la promesse d’une expérience
              sensorielle pensée pour les instants les plus raffinés.
            </p>
          </div>

          <a
            href="#cuvee-royal"
            className="mt-8 inline-flex items-center border-b border-[#111111] pb-[3px] text-[11px] font-normal uppercase tracking-[0.08em] text-[#111111] transition-opacity duration-300 hover:opacity-60 md:mt-10 md:text-[12px]"
          >
            Découvrir notre maison
          </a>
        </div>
      </div>
    </section>
  );
}