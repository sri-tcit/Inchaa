"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { JoinButton } from "@/components/join/JoinButton";

const WORDS = ["Consultants", "Advisors", "Surveyors", "Experts"];

export function ConsultantHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
      setAnimKey((k) => k + 1);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/assets/videos/consultunt/consultunt_01.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <h1 className="text-white font-bold leading-[1.08] tracking-tight
                       text-[28px] md:text-[40px] lg:text-[48px]">
          Find Trusted{" "}
          <span className="text-white" aria-label={WORDS[wordIndex]}>
            {WORDS[wordIndex].split("").map((char, i) => (
              <span
                key={`${animKey}-${i}`}
                className="inline-block"
                style={{
                  animation: "wordSlideIn 0.4s cubic-bezier(0.22,1,0.36,1) both",
                  animationDelay: `${i * 55}ms`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
          <br className="hidden md:block" />
          {" "}in the UAE
        </h1>
        <p className="mt-6 text-white/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Your project is only as good as the people advising it. Inchaa connects you
          with quantity surveyors, project management consultants, design consultants,
          and supervision consultants across the UAE.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <JoinButton size="md" className="rounded-full bg-white text-navy hover:bg-white/90 px-8 py-3.5">
            Join as a Professional
          </JoinButton>
          <Link
            href="/sign-in"
            className="inline-flex items-center text-sm font-semibold px-8 py-3.5 rounded-full border border-white text-white hover:bg-white/10 transition-all duration-150"
          >
            Sign In
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }}
      />
    </section>
  );
}
