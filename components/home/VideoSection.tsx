"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { homeEn } from "@/content/home/en";

const { video } = homeEn;

const DEMO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
const POSTER = "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1800&h=900&fit=crop";

export function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[520px] md:min-h-[600px] overflow-hidden flex items-center justify-center">
        <img
          src={POSTER}
          alt="Inchaa in action"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/70" />

        <div className="relative z-10 w-full max-w-[860px] mx-auto px-4 md:px-6 py-20 text-center">
          <h2 className="text-white text-[36px] md:text-[54px] font-bold leading-[1.1] tracking-tight">
            {video.heading}
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
            {video.subtext}
          </p>
          <button
            onClick={() => setModalOpen(true)}
            aria-label="Watch demo video"
            className="mt-10 inline-flex items-center gap-3 bg-yellow text-navy text-sm font-bold px-6 py-3 rounded-lg hover:brightness-95 transition-all duration-150"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-navy/10">
              <Play className="w-3.5 h-3.5 fill-navy" />
            </span>
            {video.cta}
          </button>
        </div>
      </section>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
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
              onClick={() => setModalOpen(false)}
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
