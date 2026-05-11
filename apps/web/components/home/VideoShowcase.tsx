export default function VideoShowcase() {
  return (
    <section
      className="bg-[#e9eaec] px-4 pb-10 pt-4 sm:px-6 md:px-8 md:pb-12 md:pt-6 lg:px-10 lg:pb-14"
      aria-label="Vidéo événementielle Champagne Bernard Njandja"
    >
      <div className="mx-auto max-w-[1820px]">
        <div className="relative overflow-hidden bg-[#d9d5cf]">
          
          {/* Bloc vidéo plein cadre */}
          <div className="relative w-full aspect-[16/9] min-h-[320px] sm:min-h-[420px] md:min-h-[560px] lg:min-h-[720px] xl:min-h-[820px]">

            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/video/cbn-video-poster.jpg"
            >
              <source src="/videos/cbn-showcase.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>

            {/* Voile ultra léger (effet luxe discret) */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.02)_40%,rgba(0,0,0,0.08)_100%)]" />

          </div>
        </div>
      </div>
    </section>
  );
}