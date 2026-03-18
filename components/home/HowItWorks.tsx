import { homeEn } from "@/content/home/en";

const { howItWorks } = homeEn;

export function HowItWorks() {
  return (
    <section className="bg-light-grey py-16 md:py-24" id="how-it-works">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="max-w-xl mb-12">
          <h2 className="text-navy text-2xl md:text-[32px] font-bold leading-tight">
            {howItWorks.heading}
          </h2>
          <p className="mt-3 text-mid-grey text-sm leading-relaxed">
            {howItWorks.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E5E7EB] border border-[#E5E7EB] rounded-lg overflow-hidden">
          {howItWorks.steps.map((step) => (
            <div key={step.num} className="bg-white p-8 md:p-10">
              <span className="text-[42px] font-bold text-yellow leading-none">
                {step.num}
              </span>
              <h3 className="mt-4 text-charcoal text-base font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-mid-grey text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
