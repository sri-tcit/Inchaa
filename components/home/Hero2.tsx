"use client";

import Link from "next/link";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { homeEn } from "@/content/home/en";

const { hero } = homeEn;

const PHOTO = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=1800&fit=crop&q=85";

const stats = [
  { stat: "500+", label: "Projects posted" },
  { stat: "3", label: "Emirates covered" },
  { stat: "100%", label: "Free for homeowners" },
];

export function Hero2() {
  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden">

      {/* ── Left: content panel ─────────────────────────────────── */}
      <div className="flex-[55] flex flex-col justify-center
                      px-6 md:px-12 lg:px-16 xl:px-24
                      pt-28 pb-12 lg:pt-20 lg:pb-0">

        {/* Overline badge */}
        <div className="flex items-center gap-2.5 mb-7">
          <span className="block w-5 h-[3px] bg-yellow" />
          <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">
            Construction Marketplace · UAE
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-navy text-[40px] md:text-[52px] xl:text-[62px]
                       font-bold leading-[1.07] tracking-tight max-w-[580px]">
          {hero.heading}
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-mid-grey text-base md:text-lg leading-relaxed max-w-[480px]">
          {hero.subtext}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <PostProjectButton
            campaign="homepage_hero"
            className="inline-flex items-center bg-yellow text-white text-sm font-bold px-7 py-3.5 rounded-lg hover:brightness-95 transition-all duration-150"
          >
            {hero.cta}
          </PostProjectButton>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 border border-[#D1D5DB] text-navy text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-[#F4F4F4] transition-colors duration-150"
          >
            How it works
          </Link>
        </div>

        {/* Trust stats */}
        <div className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-wrap gap-10">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-navy text-2xl font-bold">{item.stat}</p>
              <p className="mt-0.5 text-mid-grey text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: photo panel ──────────────────────────────────── */}
      <div className="flex-[45] relative min-h-[55vw] lg:min-h-0 overflow-hidden">
        {/* Yellow accent strip on the inner edge */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow z-10" />

        <img
          src={PHOTO}
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle dark vignette at the bottom so it doesn't abruptly cut off */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.18))" }}
        />
      </div>

    </section>
  );
}
