"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import { homeEn } from "@/content/home/en";

const { hero } = homeEn;

const BG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&h=1000&fit=crop&q=85";
const DEMO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden flex items-center">
        {/* Background photo */}
        <img
          src={BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay: dark with navy tint */}
        <div className="absolute inset-0 bg-navy/75" />

        {/* Subtle bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #1C2136)" }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 md:px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-[780px]">
            <h1 className="text-white text-[40px] md:text-[62px] md:leading-[1.06] font-bold tracking-tight">
              {hero.heading}
            </h1>
            <p className="mt-6 text-white/60 text-base md:text-lg leading-relaxed max-w-[540px]">
              {hero.subtext}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/post-project"
                className="inline-flex items-center bg-yellow text-navy text-sm font-bold px-7 py-3.5 rounded-lg hover:brightness-95 transition-all duration-150"
              >
                {hero.cta}
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors duration-150"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30 bg-white/10">
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </span>
                Watch how it works
              </button>
            </div>
          </div>

          {/* Trust line */}
          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { stat: "500+", label: "Projects posted" },
              { stat: "3", label: "Emirates covered" },
              { stat: "100%", label: "Free for homeowners" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-yellow text-2xl font-bold">{item.stat}</p>
                <p className="mt-0.5 text-white/50 text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={DEMO_URL}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Inchaa demo"
            />
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white flex items-center gap-1.5 text-sm transition-colors duration-150"
            >
              <X className="w-4 h-4" /> Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
