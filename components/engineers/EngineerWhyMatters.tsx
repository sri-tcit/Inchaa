import { PostProjectButton } from "@/components/shared/PostProjectModal";

export function EngineerWhyMatters() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Why the Right Engineer Matters
          </h2>
          <div className="mt-6 space-y-4 text-mid-grey text-sm leading-relaxed">
            <p>
              In the UAE, engineering is not optional – it is regulated. Municipality approvals
              in Abu Dhabi, Dubai, and Sharjah require stamped engineering drawings before any
              construction permit is issued. A structural miscalculation does not just delay
              your project – it puts lives at risk.
            </p>
            <p>
              Yet most homeowners find their engineer the same way they find their contractor:
              one WhatsApp referral, no comparison, no way to evaluate credentials before
              committing.
            </p>
            <p>
              Inchaa changes that. Post your engineering requirements, receive multiple proposals
              from reliable professionals, and compare qualifications and pricing before you
              commit. The same transparency you expect when hiring a contractor – now applied to
              the engineers who design and oversee the work.
            </p>
          </div>
          <PostProjectButton
            campaign="engineers_lp"
            className="mt-8 inline-flex items-center bg-yellow text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:brightness-95 transition-all duration-150"
          />
        </div>
      </div>
    </section>
  );
}
