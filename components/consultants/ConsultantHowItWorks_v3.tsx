import { PostProjectButton } from "@/components/shared/PostProjectModal";

const steps = [
  {
    num: "01",
    title: "Post your requirements",
    description:
      "Describe your project scope, property type, location, and what type of consulting support you need — no sign-up fees, no commitment.",
  },
  {
    num: "02",
    title: "Receive proposals",
    description:
      "Consultants in your area respond with detailed proposals covering scope, methodology, timeline, and fees.",
  },
  {
    num: "03",
    title: "Compare expertise",
    description:
      "Review proposals side by side: qualifications, relevant experience, methodology, and pricing — all in one dashboard.",
  },
  {
    num: "04",
    title: "Engage with confidence",
    description:
      "Choose the consultant that best matches your project needs and manage everything from Inchaa.",
  },
];

export function ConsultantHowItWorks_v3() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">

          {/* Left */}
          <div className="lg:pt-1">
            <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight">
              How It Works
            </h2>
            <p className="mt-4 text-mid-grey text-base leading-relaxed">
              From posting your requirements to engaging the right consultant — four straightforward steps.
            </p>
            <div className="mt-8">
              <PostProjectButton campaign="consultants_lp_hiw" size="md" />
            </div>
          </div>

          {/* Right: steps */}
          <div>
            {steps.map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-[60px_1fr] gap-4 py-8 border-t border-[#E5E7EB] last:border-b"
              >
                <span className="text-[40px] font-black text-[#E0E0DE] leading-none select-none pt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-navy text-lg font-bold leading-snug">{step.title}</h3>
                  <p className="mt-2 text-mid-grey text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
