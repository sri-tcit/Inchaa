import { X, Check } from "lucide-react";

export function EngineerWhyMatters() {
  return (
    <section className="bg-bg-section-2 py-16 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-text-heading text-3xl md:text-[42px] font-bold leading-tight">
          Why the right engineer matters
        </h2>

        {/* Blockquote callout */}
        <div className="mt-8 border-l-4 border-blue-500 pl-6">
          <p className="text-text-heading text-xl md:text-2xl font-bold leading-snug">
            In the UAE, engineering is not optional — it is regulated.
          </p>
          <p className="mt-3 text-text-muted text-base leading-relaxed">
            Municipality approvals in Abu Dhabi, Dubai, and Sharjah require stamped engineering drawings
            before any construction permit is issued. A structural miscalculation doesn't just delay your project
            — it puts lives at risk.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bad way */}
          <div className="bg-bg-card rounded-2xl p-6 border border-ui-border">
            <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
              <X className="w-4 h-4" strokeWidth={2.5} />
              How most people hire
            </div>
            <p className="mt-4 text-text-body text-base leading-relaxed">
              One WhatsApp referral. No comparison, no way to evaluate credentials before committing.
            </p>
          </div>

          {/* Inchaa way */}
          <div className="bg-bg-card rounded-2xl p-6 border border-ui-border">
            <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
              <Check className="w-4 h-4" strokeWidth={2.5} />
              How Inchaa works
            </div>
            <p className="mt-4 text-text-body text-base leading-relaxed">
              Post your requirements, receive multiple proposals from reliable professionals, and
              compare qualifications and pricing before you commit.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
