"use client";

import { motion } from "framer-motion";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

/* ── Custom concept SVGs ─────────────────────────────────────────── */

function IconPost() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
      <rect x="8" y="6" width="22" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="13" y1="15" x2="24" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="20" x2="24" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="25" x2="19" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="38" x2="34" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="29,29 34,24 39,29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconQuotes() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
      <rect x="6" y="28" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="20" width="8" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="30" y="13" width="8" height="25" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="34" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="32,10 33.2,11.5 36,8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCompare() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
      <rect x="5" y="10" width="15" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="16" x2="17" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="20" x2="17" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="24" x2="13" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="24" y="10" width="15" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="27" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="27" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="27" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="22" cy="22" r="2" fill="currentColor" />
    </svg>
  );
}

function IconHire() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
      <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2.5" />
      <circle cx="22" cy="22" r="9" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="16,22 20,26 28,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    Visual: IconPost,
    title: "Post your project",
    description: "Describe your scope, location, and budget in minutes. Add photos or drawings — no sign-up fees, no commitment.",
    tag: "Takes 2 minutes",
  },
  {
    num: "02",
    Visual: IconQuotes,
    title: "Get verified quotes",
    description: "Licensed, credential-checked contractors respond with detailed proposals tailored to your project.",
    tag: "Verified only",
  },
  {
    num: "03",
    Visual: IconCompare,
    title: "Compare side by side",
    description: "Review pricing, credentials, and past work in one place. No more chasing contractors on WhatsApp.",
    tag: "One dashboard",
  },
  {
    num: "04",
    Visual: IconHire,
    title: "Hire with confidence",
    description: "Pick the best fit for your budget and timeline. Manage the whole engagement from Inchaa.",
    tag: "Your choice",
  },
];

export function ContractorHowItWorks_v4() {
  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Heading row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight">
              How It Works
            </h2>
          </div>
          <div className="hidden md:block">
            <PostProjectButton campaign="contractors_lp_hiw" size="md" />
          </div>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {steps.map((step, i) => {
            const { Visual } = step;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl border border-[#E8E8E6] p-8 overflow-hidden hover:border-yellow/40 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-6"
              >
                {/* Ghost number — top right */}
                <span
                  className="absolute top-3 right-4 font-black leading-none select-none pointer-events-none text-[#F0EDE8]"
                  style={{ fontSize: "72px" }}
                >
                  {step.num}
                </span>

                {/* SVG mark */}
                <div className="w-10 h-10 text-yellow relative z-10">
                  <Visual />
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1 flex flex-col gap-2">
                  <h3 className="text-navy text-xl font-bold leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Outcome tag */}
                <div className="relative z-10">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-yellow border border-yellow/30 bg-yellow/5 px-3 py-1 rounded-full group-hover:bg-yellow/10 transition-colors duration-200">
                    {step.tag}
                  </span>
                </div>

                {/* Bottom yellow line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 md:hidden">
          <PostProjectButton campaign="contractors_lp_hiw" size="lg" />
        </div>

      </div>
    </section>
  );
}
