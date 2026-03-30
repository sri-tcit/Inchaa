"use client";

import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { useLanguage } from "@/context/LanguageContext";

export function EngineerHero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/assets/videos/engineer/engineer_01.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <h1 className="text-white font-bold leading-[1.08] tracking-tight
                       text-[28px] md:text-[40px] lg:text-[48px]">
          {t.engineerHero.h1}
          <br className="hidden md:block" />
          {" "}{t.engineerHero.h1Line2}
        </h1>
        <p className="mt-6 text-white/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          {t.engineerHero.body}
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <PostProjectButton campaign="engineers_hero" size="md">
            {t.common.postProjectFree}
          </PostProjectButton>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }}
      />
    </section>
  );
}
