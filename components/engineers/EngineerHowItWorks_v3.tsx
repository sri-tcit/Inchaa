import { PostProjectButton } from "@/components/shared/PostProjectModal";

const steps = [
  {
    num: "01",
    title: "Post your project",
    description:
      "Describe your engineering requirements: project type, location, scope, and technical needs — no sign-up fees, no commitment.",
  },
  {
    num: "02",
    title: "Receive proposals",
    description:
      "Engineers with valid credentials and relevant experience respond with detailed proposals.",
  },
  {
    num: "03",
    title: "Compare qualifications",
    description:
      "Review proposals side by side — qualifications, experience, scope of services, and fees — all in one dashboard.",
  },
  {
    num: "04",
    title: "Engage with confidence",
    description:
      "Choose the engineer that best matches your technical requirements and budget.",
  },
];

export function EngineerHowItWorks_v3() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">

          {/* Left */}
          <div className="lg:pt-1">
            <h2 className="text-navy text-3xl md:text-[38px] font-bold leading-tight">
              How It Works
            </h2>
            <p className="mt-4 text-mid-grey text-sm leading-relaxed">
              From posting your project to engaging the right engineer — four straightforward steps.
            </p>
            <div className="mt-8">
              <PostProjectButton campaign="engineers_lp_hiw" size="sm" />
            </div>
          </div>

          {/* Right: steps */}
          <div>
            {steps.map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-[52px_1fr] gap-4 py-7 border-t border-[#E5E7EB] last:border-b"
              >
                <span className="text-[32px] font-black text-[#E0E0DE] leading-none select-none pt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-navy text-base font-bold leading-snug">{step.title}</h3>
                  <p className="mt-1.5 text-mid-grey text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
