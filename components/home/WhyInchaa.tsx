import { homeEn } from "@/content/home/en";

const { whyInchaa } = homeEn;

export function WhyInchaa() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-white text-2xl md:text-[32px] font-bold leading-tight mb-12">
          {whyInchaa.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {whyInchaa.benefits.map((b) => (
            <div key={b.num} className="bg-navy p-8">
              <span className="text-[32px] font-bold text-yellow leading-none">
                {b.num}
              </span>
              <h3 className="mt-4 text-white text-sm font-semibold">{b.title}</h3>
              <p className="mt-2 text-white/50 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
