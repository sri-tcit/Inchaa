import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { homeEn } from "@/content/home/en";

const { finalCta } = homeEn;

export function FinalCTA() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 text-center">
        <h2 className="text-white text-2xl md:text-[36px] font-bold leading-tight">
          {finalCta.heading}
        </h2>
        <p className="mt-4 text-white/50 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          {finalCta.subtext}
        </p>
        <PostProjectButton
          campaign="homepage_final_cta"
          className="inline-flex items-center mt-8 bg-yellow text-navy text-sm font-bold px-6 py-3 rounded-lg hover:brightness-95 transition-all duration-150"
        >
          {finalCta.cta}
        </PostProjectButton>
      </div>
    </section>
  );
}
