import { homeEn } from "@/content/home/en";

const { whyInchaa } = homeEn;

export function WhyInchaa() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
          {whyInchaa.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyInchaa.benefits.map((b) => (
            <div
              key={b.num}
              className="border border-[#E5E7EB] rounded-lg p-7 bg-white"
            >
              <span className="text-[44px] font-bold text-yellow leading-none">
                {b.num}
              </span>
              <h3 className="mt-5 text-navy text-base font-bold leading-snug">
                {b.title}
              </h3>
              <p className="mt-2 text-mid-grey text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
