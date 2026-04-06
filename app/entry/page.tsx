import Image from "next/image";
import EntryGateForm from "@/components/entry/EntryGateForm";

const ENTRY_BG_SRC = "/images/entry/cbn-entry-background.jpg";
const ENTRY_LOGO_SRC = "/images/entry/cbn-entry-logo.png";

export default function EntryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Fond principal */}
      <div className="absolute inset-0">
        <Image
          src={ENTRY_BG_SRC}
          alt="Univers d’entrée Champagne Bernard Njandja"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Voiles premium */}
      <div className="absolute inset-0 bg-black/52" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0.02)_24%,_rgba(0,0,0,0)_58%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.44)_0%,_rgba(0,0,0,0.18)_22%,_rgba(0,0,0,0.22)_68%,_rgba(0,0,0,0.58)_100%)]" />

      {/* Contenu */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-5 py-6 sm:px-8 md:px-10 md:py-8">
        {/* Logo haut */}
        <div className="pt-2 md:pt-4">
          <div className="relative h-[72px] w-[220px] sm:h-[84px] sm:w-[260px] md:h-[102px] md:w-[320px]">
            <Image
              src={ENTRY_LOGO_SRC}
              alt="Champagne Bernard Njandja"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Bloc central */}
        <section className="mx-auto flex w-full max-w-[980px] flex-1 flex-col items-center justify-center">
          <div className="w-full max-w-[720px] text-center">
            <p className="mx-auto max-w-[640px] text-[14px] font-medium uppercase leading-[1.45] tracking-[0.04em] text-white/92 sm:text-[15px] md:text-[16px]">
              Pour accéder au site Champagne Bernard Njandja, vous devez avoir
              l’âge légal de consommer et/ou d’acheter de l’alcool dans votre
              zone géographique. Si votre zone géographique ne prévoit pas
              d’âge légal, vous devez avoir 21 ans ou plus.
            </p>

            <div className="mt-8 sm:mt-10 md:mt-12">
              <EntryGateForm />
            </div>
          </div>
        </section>

        {/* Mentions bas */}
        <div className="mx-auto w-full max-w-[1180px] pb-1 text-center">
          <p className="text-[11px] uppercase leading-[1.55] tracking-[0.02em] text-white/58 sm:text-[12px]">
            L’abus d’alcool est dangereux pour la santé. À consommer avec
            modération. Veuillez ne pas partager ce site avec des mineurs.
          </p>

          <p className="mx-auto mt-3 max-w-[1100px] text-[11px] leading-[1.55] tracking-[0.01em] text-white/48 sm:text-[12px]">
            En accédant à ce site, vous confirmez avoir l’âge requis et
            acceptez les conditions générales d’utilisation ainsi que la charte
            de données personnelles et cookies de la Maison.
          </p>
        </div>
      </div>
    </main>
  );
}