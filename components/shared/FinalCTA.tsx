import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { homeEn } from "@/content/home/en";

const { finalCta } = homeEn;

export function FinalCTA() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-center">

        {/* Overline */}
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <span className="block w-5 h-[3px] bg-yellow" />
          <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">
            Get started today
          </span>
        </div>

        <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight max-w-xl mx-auto">
          {finalCta.heading}
        </h2>
        <p className="mt-4 text-mid-grey text-base max-w-md mx-auto leading-relaxed">
          {finalCta.subtext}
        </p>

        <PostProjectButton
          campaign="homepage_final_cta"
          className="inline-flex items-center mt-8 bg-yellow text-navy text-sm font-bold px-7 py-4 rounded-lg hover:brightness-95 transition-all duration-150"
        >
          {finalCta.cta}
        </PostProjectButton>

      </div>
    </section>
  );
}
