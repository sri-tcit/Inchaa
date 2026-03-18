"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, HardHat, Ruler, ClipboardList } from "lucide-react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

const CYCLING_WORDS = ["Contractors", "Engineers", "Consultants"];

const CATEGORIES = [
  {
    icon: HardHat,
    label: "Contractors",
    description: "General, MEP, renovation & 30+ specialist trades",
    href: "/contractors",
  },
  {
    icon: Ruler,
    label: "Engineers",
    description: "Structural, civil, MEP & supervision engineers",
    href: "/engineers",
  },
  {
    icon: ClipboardList,
    label: "Consultants",
    description: "QS, project management & design consultants",
    href: "/consultants",
  },
];

const stats = [
  { stat: "500+", label: "Projects posted" },
  { stat: "3", label: "Emirates covered" },
  { stat: "100%", label: "Free for homeowners" },
];

export function Hero3() {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
        setWordVisible(true);
      }, 280);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 w-full">

        {/* Overline */}
        {/* <div className="flex items-center gap-2.5 mb-8">
          <span className="block w-5 h-[3px] bg-yellow" />
          <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">
            Construction Marketplace · UAE
          </span>
        </div> */}

        {/* Headline with cycling word */}
        <h1 className="text-navy font-bold leading-[1.06] tracking-tight
                       text-[40px] md:text-[58px] lg:text-[72px]">
          Find Trusted{" "}
          <span
            className="text-yellow"
            style={{
              opacity: wordVisible ? 1 : 0,
              transition: "opacity 0.28s ease",
            }}
          >
            {CYCLING_WORDS[wordIndex]}
          </span>
          <br className="hidden md:block" />
          <span> in the UAE</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-mid-grey text-base md:text-lg leading-relaxed max-w-[520px]">
          Post your project. Receive multiple quotes from verified professionals.
          Compare side by side. Hire with confidence.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <PostProjectButton
            campaign="homepage_hero3"
            className="inline-flex items-center bg-yellow text-navy text-sm font-bold px-7 py-3.5 rounded-lg hover:brightness-95 transition-all duration-150"
          >
            Post Your Project Free
          </PostProjectButton>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold hover:underline transition-all duration-150"
          >
            How it works <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Trust stats */}
        <div className="mt-10 pt-8 border-t border-[#E5E7EB] flex flex-wrap gap-10">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-navy text-2xl font-bold">{item.stat}</p>
              <p className="mt-0.5 text-mid-grey text-xs">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Category entry cards */}
        {/* <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CATEGORIES.map(({ icon: Icon, label, description, href }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-start gap-4 p-5 border border-[#E5E7EB] rounded-lg bg-white hover:border-navy hover:bg-[#F9F9FB] transition-colors duration-150"
            >
              <span className="mt-0.5 flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#F3F3F3] rounded-md">
                <Icon className="w-5 h-5 text-navy" />
              </span>
              <div>
                <p className="text-navy text-sm font-bold">{label}</p>
                <p className="mt-1 text-mid-grey text-xs leading-snug">{description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-mid-grey group-hover:text-navy ml-auto mt-0.5 flex-shrink-0 transition-colors duration-150" />
            </Link>
          ))}
        </div> */}

      </div>
    </section>
  );
}
