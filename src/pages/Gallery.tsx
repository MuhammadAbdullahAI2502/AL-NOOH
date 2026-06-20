import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryData, type GalleryCategory } from "../data/galleryData";
import { cn } from "../utils/cn";
import { useSEO } from "../hooks/useSEO";

const filterOptions: GalleryCategory[] = ["All", "Farm", "Livestock", "Transport", "Process", "Certificates"];

export default function GalleryPage() {
  useSEO(
    "Gallery — Farms, Livestock & Export Operations | Al Nooh",
    "Photo gallery of our farms, livestock, transport fleet, export process, and certifications — see how Al Nooh delivers premium animals worldwide."
  );
  const [active, setActive] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<{ images: typeof galleryData; index: number } | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? galleryData : galleryData.filter((img) => img.category === active)),
    [active]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((s) => (s ? { ...s, index: (s.index + 1) % s.images.length } : s));
      if (e.key === "ArrowLeft") setLightbox((s) =>
        s ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length } : s
      );
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const openLightbox = (index: number) => setLightbox({ images: filtered, index });
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((s) => (s ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length } : s));
  const next = () => setLightbox((s) => (s ? { ...s, index: (s.index + 1) % s.images.length } : s));

  return (
    <section className="relative bg-gradient-to-b from-brand-cream via-brand-cream to-brand-green-50 min-h-screen text-brand-ink-900 pt-40 pb-24">
      <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 bg-brand-gold-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold-500/15 border border-brand-gold-400/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold-500"></span>
            <span className="text-sm font-semibold text-brand-gold-600 tracking-wide uppercase">Gallery</span>
          </div>
          <h1 className="mt-5 font-serif text-5xl sm:text-6xl font-bold leading-tight text-brand-green-950 mb-6">
            Livestock Gallery — <span className="text-brand-gold-500">Stories from Farm to Export</span>
          </h1>
          <p className="mt-5 text-brand-ink-700 text-lg sm:text-xl leading-relaxed font-medium">
            Explore our premium livestock images from farm pastures, export logistics, health certification, and global shipping operations.
          </p>
        </div>

        {/* Gallery Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { label: "Total Images", value: "150+" },
            { label: "Livestock Types", value: "6+" },
            { label: "Export Countries", value: "16+" },
            { label: "Certifications", value: "5+" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-2xl font-bold text-brand-gold-500 mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-brand-green-700 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {filterOptions.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                active === category
                  ? "bg-brand-green-950 text-brand-cream shadow-lg shadow-brand-green-950/10"
                  : "bg-white border border-brand-green-200 text-brand-ink-900 hover:bg-brand-green-50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-3xl border border-brand-green-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
            >
              <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-72 object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-green-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-green-200 mb-1">{image.category}</p>
                {image.breed && (
                  <p className="text-xs font-medium text-brand-gold-300 mb-1">{image.breed}</p>
                )}
                <p className="text-sm font-semibold text-brand-cream">{image.alt}</p>
              </div>
              <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-brand-cream/80 text-brand-green-900 flex items-center justify-center shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>

        {lightbox && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-brand-ink-950/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 h-12 w-12 rounded-full bg-white text-brand-ink-900 flex items-center justify-center shadow-xl"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightbox.images[lightbox.index].src}
                alt={lightbox.images[lightbox.index].alt}
                className="w-full h-[70vh] object-contain rounded-3xl bg-brand-cream"
              />
              <div className="mt-6 p-6 bg-brand-green-950 text-brand-cream rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-gold-400 font-semibold mb-1">
                      {lightbox.images[lightbox.index].category}
                    </p>
                    <p className="text-lg font-bold">{lightbox.images[lightbox.index].alt}</p>
                  </div>
                </div>

                {lightbox.images[lightbox.index].breed && (
                  <div className="mb-3 pb-3 border-b border-brand-cream/20">
                    <p className="text-xs text-brand-cream/70 uppercase">Breed</p>
                    <p className="text-sm font-semibold">{lightbox.images[lightbox.index].breed}</p>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {lightbox.images[lightbox.index].age && (
                    <div>
                      <p className="text-xs text-brand-cream/70 uppercase">Age</p>
                      <p className="text-sm font-semibold">{lightbox.images[lightbox.index].age}</p>
                    </div>
                  )}
                  {lightbox.images[lightbox.index].weight && (
                    <div>
                      <p className="text-xs text-brand-cream/70 uppercase">Weight</p>
                      <p className="text-sm font-semibold">{lightbox.images[lightbox.index].weight}</p>
                    </div>
                  )}
                  {lightbox.images[lightbox.index].certifications && (
                    <div>
                      <p className="text-xs text-brand-cream/70 uppercase">Certifications</p>
                      <p className="text-sm font-semibold">{lightbox.images[lightbox.index].certifications?.length}</p>
                    </div>
                  )}
                </div>

                {lightbox.images[lightbox.index].certifications && (
                  <div className="mb-4 pb-4 border-b border-brand-cream/20">
                    <p className="text-xs text-brand-cream/70 uppercase mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {lightbox.images[lightbox.index].certifications?.map((cert, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gold-500/20 border border-brand-gold-500 text-brand-gold-300 text-xs font-semibold"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {lightbox.images[lightbox.index].description && (
                  <p className="text-sm text-brand-cream/90">{lightbox.images[lightbox.index].description}</p>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  onClick={prev}
                  className="inline-flex items-center justify-center rounded-full bg-white p-3 shadow-xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-brand-ink-900" />
                </button>
                <div className="text-center text-sm text-brand-cream">
                  {lightbox.images[lightbox.index].category} • {lightbox.images[lightbox.index].alt}
                </div>
                <button
                  onClick={next}
                  className="inline-flex items-center justify-center rounded-full bg-white p-3 shadow-xl"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-brand-ink-900" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
