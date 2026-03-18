"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

const DEMO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

export function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&h=900&fit=crop&q=85"
          alt="Inchaa in action"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[760px] mx-auto px-4 md:px-6 py-20 text-center">
          <h2 className="text-white text-[38px] md:text-[58px] font-bold leading-[1.1] tracking-tight">
            See Inchaa in Action
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Watch how homeowners post projects and receive verified quotes in minutes.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            aria-label="Watch demo video"
            className="mt-10 inline-flex items-center gap-3 bg-white text-navy text-sm font-bold px-7 py-3.5 rounded-full hover:bg-white/90 transition-all duration-150 shadow-lg"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-navy">
              <Play className="w-3 h-3 fill-white text-white ml-0.5" />
            </span>
            Watch the Video
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
