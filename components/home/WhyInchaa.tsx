import { homeEn } from "@/content/home/en";

const { whyInchaa } = homeEn;

export function WhyInchaa() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-navy text-2xl md:text-3xl font-bold">{whyInchaa.heading}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyInchaa.benefits.map((b) => (
              <div key={b.num} className="border-l-2 border-yellow pl-4">
                <h3 className="text-charcoal text-sm font-semibold">{b.title}</h3>
                <p className="mt-1.5 text-mid-grey text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
