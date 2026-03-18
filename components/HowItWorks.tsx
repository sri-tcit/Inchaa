"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

const DEMO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
const POSTER = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop";

export function HowItWorks() {
  const [playing, setPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full aspect-video max-h-[600px] min-h-[400px] overflow-hidden">
        <img
          src={POSTER}
          alt="Inchaa demo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl md:text-[42px] font-bold leading-tight max-w-xl">
            See Inchaa in Action
          </h2>
          <p className="mt-3 text-white/70 text-sm md:text-base max-w-sm">
            Watch how homeowners find and hire verified professionals across the UAE.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-8 flex items-center gap-2.5 bg-white text-charcoal text-sm font-semibold pl-4 pr-5 py-2.5 rounded-full hover:bg-yellow transition-colors duration-150"
          >
            <Play className="w-4 h-4 fill-charcoal" />
            Watch the Video
          </button>
        </div>
      </section>

      {/* Lightbox modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
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
              className="absolute -top-10 right-0 text-white/70 hover:text-white flex items-center gap-1.5 text-sm transition-colors duration-150"
            >
              <X className="w-4 h-4" /> Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
