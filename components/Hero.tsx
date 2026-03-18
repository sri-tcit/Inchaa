import Link from "next/link";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop",
    alt: "Modern building under construction",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=450&fit=crop",
    alt: "Construction crane at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=450&fit=crop",
    alt: "Engineers reviewing blueprints on site",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=450&fit=crop",
    alt: "Architectural detail of modern structure",
  },
];

export function Hero() {
  return (
    <section className="relative bg-navy pt-[56px] overflow-hidden">
      <img
        src="/assets/blueprint.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.35] mix-blend-lighten pointer-events-none select-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, #1C2136 75%)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-white text-3xl md:text-[44px] md:leading-[1.15] font-bold tracking-tight">
              Build With
              <br />
              The Right Team
            </h1>
            <p className="mt-4 text-mid-grey text-base max-w-md">
              Connect with verified constructors, consultants, and engineers for your next project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/post-project"
                className="inline-flex items-center bg-yellow text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:brightness-95 transition-all duration-150"
              >
                Post Your Project
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center border border-white/30 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:border-white/60 transition-colors duration-150"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {heroImages.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
