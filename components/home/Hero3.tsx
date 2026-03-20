"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

const CYCLING_WORDS = ["Contractors", "Engineers", "Consultants"];

export function Hero3() {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
        setWordVisible(true);
      }, 600);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white overflow-hidden grid grid-cols-1 lg:[grid-template-columns:minmax(0,52fr)_minmax(0,48fr)] min-h-screen">

      {/* ── Left: content ─────────────────────────────────────── */}
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left
                      px-6 md:px-16 lg:px-16 xl:px-24
                      pt-28 pb-14 lg:pt-24 lg:pb-16">

        {/* Headline */}
        <h1 className="text-navy font-bold leading-[1.06] tracking-tight
                       text-[36px] md:text-[48px] lg:text-[58px] xl:text-[68px]">
          <span className="block">
            Find Trusted{" "}
            <span
              className={`text-yellow inline-block ${wordVisible ? "word-in" : "word-out"}`}
            >
              {CYCLING_WORDS[wordIndex]}
            </span>
          </span>
          <span className="block">in the UAE</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-mid-grey text-base md:text-lg leading-relaxed max-w-[460px]">
          Post your project. Receive multiple quotes from verified professionals.
          Compare side by side. Hire with confidence.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <PostProjectButton campaign="homepage_hero3" size="lg">
            Post Your Project Free
          </PostProjectButton>
        </div>
      </div>

      {/* ── Right: app banner ───────────────────────────────────── */}
      <div
        className="hidden lg:block relative bg-[#F7F7F7]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
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
