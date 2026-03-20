"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

const CYCLING_WORDS = ["Contractors", "Engineers", "Consultants"];

export function Hero4() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
      setAnimKey((k) => k + 1);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen overflow-hidden grid grid-cols-1 lg:[grid-template-columns:minmax(0,62fr)_minmax(0,38fr)]"
    >
      {/* ── Left: navy panel ─────────────────────────────── */}
      <div className="relative bg-navy flex flex-col justify-center items-center lg:items-start text-center lg:text-left
                      px-8 md:px-16 lg:px-16 xl:px-20
                      pt-32 pb-16 lg:pt-24 lg:pb-16 overflow-hidden">

        {/* Decorative large background text */}
        <span
          className="absolute right-[-20px] bottom-[-10px] font-bold leading-none select-none pointer-events-none hidden lg:block"
          style={{
            fontSize: "260px",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.04)",
          }}
        >
          UAE
        </span>

        {/* Yellow top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow" />

        {/* Headline */}
        <h1 className="relative z-10 text-white font-bold leading-[1.05] tracking-tight
                       text-[46px] md:text-[62px] lg:text-[72px] xl:text-[82px]">
          <span className="block text-white">Find Trusted</span>
          <span className="block text-yellow overflow-hidden" aria-label={CYCLING_WORDS[wordIndex]}>
            {CYCLING_WORDS[wordIndex].split("").map((char, i) => (
              <span
                key={`${animKey}-${i}`}
                className="inline-block"
                style={{
                  animation: `wordSlideIn 0.4s cubic-bezier(0.22,1,0.36,1) both`,
                  animationDelay: `${i * 55}ms`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
          <span className="block">in the UAE</span>
        </h1>

        {/* Divider */}
        <div className="mt-8 mb-8 w-12 h-[2px] bg-yellow relative z-10" />

        {/* Subtext */}
        <p className="relative z-10 text-white/55 text-lg md:text-xl leading-relaxed max-w-[500px]">
          Post your project free. Receive competing quotes from verified professionals.
          Compare and hire with confidence.
        </p>

        {/* CTA */}
        <div className="mt-10 relative z-10">
          <PostProjectButton campaign="homepage_hero4" size="lg" className="!text-lg !px-12 !py-5">
            Post Your Project Free
          </PostProjectButton>
        </div>
      </div>

      {/* ── Right: image panel ──────────────────────────── */}
      {/* Top gradient so transparent navbar text is readable over the light panel */}
      <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)" }}
      />

      <div
        className="hidden lg:block relative bg-[#F7F7F7]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <Image
          src="/assets/banner.webp"
          alt="Inchaa App"
          fill
          className="object-contain drop-shadow-xl p-12"
          priority
        />
      </div>

    </section>
  );
}
