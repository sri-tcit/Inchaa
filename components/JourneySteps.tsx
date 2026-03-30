"use client";

import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { useLanguage } from "@/context/LanguageContext";

export function JourneySteps() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#F8F8F8] py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-3">{t.journeySteps.eyebrow}</p>
            <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight tracking-tight">
              {t.journeySteps.h2}
            </h2>
            <p className="mt-4 text-mid-grey text-base leading-relaxed">
              {t.journeySteps.body}
            </p>
            <div className="mt-8">
              <PostProjectButton campaign="homepage_hiw" size="md" />
            </div>
          </div>
          <div className="border-t border-[#E5E7EB]">
            {t.journeySteps.steps.map((step) => (
              <div key={step.num} className="grid grid-cols-[56px_1fr] gap-5 py-8 border-b border-[#E5E7EB]">
                <span className="text-[42px] font-black text-[#E0E0DE] leading-none select-none">{step.num}</span>
                <div className="pt-1">
                  <h3 className="text-navy text-lg font-bold leading-snug">{step.title}</h3>
                  <p className="mt-2 text-mid-grey text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
