import { PostProjectButton } from "@/components/shared/PostProjectModal";

const benefits = [
  {
    title: "Multiple competing quotes",
    description:
      "Word of mouth gives you one option. Inchaa gives you several. Receive 3–5 detailed proposals for the same project and choose based on facts — pricing, scope, credentials, past work — not hope.",
  },
  {
    title: "Verified contractors",
    description:
      "Every contractor on Inchaa is reviewed for a valid UAE trade license, business credentials, and past project experience before they can receive a single inquiry.",
  },
  {
    title: "One dashboard",
    description:
      "Quotations, documents, communication, and project tracking in one place. No more lost paperwork, forgotten follow-ups, or trying to remember which contractor said what three weeks ago.",
  },
  {
    title: "Built for construction",
    description:
      "Inchaa is purpose-built for the construction industry — villa builds, MEP works, renovation, and 30+ specialist trades. Our platform understands the difference between a general contractor and a sub-contractor.",
  },
  {
    title: "Free for homeowners",
    description:
      "Posting projects, receiving quotes, and comparing contractors costs you nothing.",
  },
];

export function ContractorWhyChoose() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="block w-5 h-[3px] bg-yellow" />
          <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">Why Inchaa</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
              Why Homeowners Choose Inchaa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border-l-2 border-yellow pl-4">
                <h3 className="text-charcoal text-sm font-semibold">{b.title}</h3>
                <p className="mt-1.5 text-mid-grey text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <PostProjectButton
            campaign="contractors_lp"
            className="inline-flex items-center bg-yellow text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:brightness-95 transition-all duration-150"
          />
        </div>
      </div>
    </section>
  );
}
