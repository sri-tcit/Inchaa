import { homeEn } from "@/content/home/en";

const { howItWorks } = homeEn;

export function HowItWorks() {
  return (
    <section className="bg-white" id="how-it-works">

      {/* Section header */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-xl">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
            {howItWorks.heading}
          </h2>
          <p className="mt-4 text-mid-grey text-base leading-relaxed">
            {howItWorks.subheading}
          </p>
        </div>
      </div>

      {/* Alternating steps */}
      <div className="border-t border-[#E5E7EB]">
        {howItWorks.steps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={step.num}
              className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#E5E7EB]"
            >
              {/* Image panel */}
              <div
                className={`relative min-h-[300px] lg:min-h-[480px] overflow-hidden bg-[#F5F5F7] ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <img
                  src={step.img}
                  alt={step.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Text panel */}
              <div
                className={`flex items-center px-8 py-14 md:px-16 md:py-20 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="max-w-md">
                  <span className="block text-[88px] md:text-[108px] font-bold text-yellow leading-none">
                    0{step.num}
                  </span>
                  <h3 className="mt-6 text-navy text-[26px] md:text-[32px] font-bold leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-mid-grey text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
