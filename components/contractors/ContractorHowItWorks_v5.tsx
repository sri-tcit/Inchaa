import { PostProjectButton } from "@/components/shared/PostProjectModal";

const steps = [
  {
    num: "01",
    title: "Post your project",
    description:
      "Describe your scope, location, and budget in minutes. Add photos or drawings — no sign-up fees, no commitment.",
  },
  {
    num: "02",
    title: "Receive verified quotes",
    description:
      "Licensed, credential-checked contractors respond with detailed proposals tailored to your project.",
  },
  {
    num: "03",
    title: "Compare side by side",
    description:
      "Review pricing, credentials, and past work in one dashboard. No more chasing contractors on WhatsApp.",
  },
  {
    num: "04",
    title: "Hire with confidence",
    description:
      "Pick the best fit for your budget and timeline. Manage the whole engagement from Inchaa.",
  },
];

export function ContractorHowItWorks_v5() {
  return (
    <section className="bg-bg-section py-16 md:py-24 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">

          {/* Left */}
          <div className="lg:pt-1">
            <h2 className="text-text-heading text-3xl md:text-[42px] font-bold leading-tight">
              How It Works
            </h2>
            <p className="mt-4 text-text-muted text-base leading-relaxed">
              From posting your project to hiring with confidence — four straightforward steps.
            </p>
            <div className="mt-8">
              <PostProjectButton campaign="contractors_lp_hiw" size="md" />
            </div>
          </div>

          {/* Right: steps */}
          <div>
            {steps.map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-[60px_1fr] gap-4 py-8 border-t border-ui-border last:border-b"
              >
                <span className="text-[40px] font-black text-step-num leading-none select-none pt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-text-heading text-lg font-bold leading-snug">{step.title}</h3>
                  <p className="mt-2 text-text-muted text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
