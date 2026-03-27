import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { homeEn } from "@/content/home/en";

const { finalCta } = homeEn;

export function FinalCTA() {
  return (
    <section className="bg-bg-base py-16 md:py-24 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-center">

        <h2 className="text-text-heading text-3xl md:text-[40px] font-bold leading-tight max-w-xl mx-auto">
          {finalCta.heading}
        </h2>
        <p className="mt-4 text-text-muted text-base max-w-md mx-auto leading-relaxed">
          {finalCta.subtext}
        </p>

        <PostProjectButton
          campaign="homepage_final_cta"
          className="mt-8"
        >
          {finalCta.cta}
        </PostProjectButton>

      </div>
    </section>
  );
}
