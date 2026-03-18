import { homeEn } from "@/content/home/en";

const { howItWorks } = homeEn;

export function HowItWorks() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]" id="how-it-works">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        {/* Overline */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="block w-5 h-[3px] bg-yellow" />
          <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">
            How it works
          </span>
        </div>

        {/* Section header */}
        <div className="max-w-xl mb-12 md:mb-14">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
            {howItWorks.heading}
          </h2>
          <p className="mt-4 text-mid-grey text-base leading-relaxed">
            {howItWorks.subheading}
          </p>
        </div>

        {/* Step cards — alternating image side */}
        <div className="flex flex-col gap-5">
          {howItWorks.steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.num}
                className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2"
              >
                {/* Image */}
                <div
                  className={`relative min-h-[240px] md:min-h-[300px] overflow-hidden bg-[#F0F0F0] ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <img
                    src={step.img}
                    alt={step.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div
                  className={`flex items-center px-8 py-10 md:px-12 md:py-12 ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div>
                    <span className="text-[56px] font-bold text-yellow leading-none">
                      0{step.num}
                    </span>
                    <h3 className="mt-4 text-navy text-[22px] font-bold leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-mid-grey text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
