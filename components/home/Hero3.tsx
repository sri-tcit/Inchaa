"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      }, 500);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden relative">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-4 md:px-6 w-full relative">

        {/* Top: two-column headline + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text content */}
          <div>
            <h1 className="text-navy font-bold leading-[1.06] tracking-tight text-[40px] md:text-[58px] lg:text-[62px]">
              <span className="whitespace-nowrap">
                Find Trusted{" "}
                <span className="inline-block overflow-hidden align-bottom" style={{ verticalAlign: "baseline" }}>
                  <span
                    className="inline-block text-yellow"
                    style={{
                      opacity: wordVisible ? 1 : 0,
                      transform: wordVisible ? "translateY(0)" : "translateY(60%)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    {CYCLING_WORDS[wordIndex]}
                  </span>
                </span>
              </span>
              <br />
              <span>in the UAE</span>
            </h1>

            <p className="mt-6 text-mid-grey text-base md:text-lg leading-relaxed max-w-[520px]">
              Post your project. Receive multiple quotes from verified professionals.
              Compare side by side. Hire with confidence.
            </p>

            <div className="mt-8">
              <PostProjectButton
                campaign="homepage_hero3"
                className="inline-flex items-center bg-yellow text-white text-base font-bold px-10 py-4 rounded-lg hover:brightness-95 transition-all duration-150"
              >
                Post Your Project Free
              </PostProjectButton>
            </div>
          </div>

          {/* Right: banner image */}
          <div className="relative hidden lg:flex items-center justify-end">
            <Image
              src="/assets/banner.webp"
              alt="Inchaa App"
              width={380}
              height={380}
              className="w-[380px] h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>

        </div>


      </div>
    </section>
  );
}
