import Image from "next/image";

const galleryItems = [
  {
    id: "gallery-vineyard-path",
    src: "/images/gallery/gallery-vineyard-path-V2.jpg",
    alt: "Vignoble Champagne Bernard Njandja - vue sur rangs de vignes",
  },
  {
    id: "gallery-vineyard-aerial",
    src: "/images/gallery/gallery-vineyard-aerial-V2.jpg",
    alt: "Vignoble Champagne Bernard Njandja - vue aérienne des parcelles",
  },
];

export default function GalleryDualShowcase() {
  return (
    <section
      className="bg-[#e9eaec] px-4 pb-12 pt-4 sm:px-6 md:px-8 md:pb-16 md:pt-6 lg:px-10 lg:pb-20"
      aria-label="Galerie visuelle Champagne Bernard Njandja"
    >
      <div className="mx-auto max-w-[1820px]">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-5 xl:gap-6">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden bg-[#d8d4ce]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={false}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.02)_100%)]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}