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
    title: "Post your requirements",
    description: "Describe your project scope, property type, location, and what type of consulting support you need.",
  },
  {
    num: "02",
    Visual: IconQuotes,
    title: "Receive proposals",
    description: "Consultants in your area respond with detailed proposals covering scope, methodology, timeline, and fees.",
  },
  {
    num: "03",
    Visual: IconCompare,
    title: "Compare expertise",
    description: "Review proposals side by side: qualifications, relevant experience, methodology, and pricing.",
  },
  {
    num: "04",
    Visual: IconHire,
    title: "Engage",
    description: "Choose the consultant that best matches your project needs and manage everything from Inchaa.",
  },
];

export function ConsultantHowItWorks_v2() {
  return (
    <section className="bg-[#F8F8F8] py-20 md:py-28">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight">
            How It Works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[22px] top-3 bottom-3 w-px bg-[#E5E7EB] hidden md:block" />

          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              const { Visual } = step;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                  className={`relative flex items-start gap-8 md:gap-12 group ${!isLast ? "pb-12" : ""}`}
                >
                  {/* Number bubble */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-11 h-11 rounded-full border-2 border-yellow bg-[#F8F8F8] flex items-center justify-center group-hover:bg-yellow transition-colors duration-300">
                      <span className="text-yellow group-hover:text-white font-black text-sm transition-colors duration-300">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex items-start justify-between gap-8 pt-2">
                    <div className="flex-1">
                      <h3 className="text-navy text-xl md:text-2xl font-bold leading-snug mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#6B7280] text-sm md:text-base leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>

                    {/* Custom SVG mark */}
                    <div className="shrink-0 w-12 h-12 text-yellow/70 group-hover:text-yellow transition-colors duration-300 hidden sm:block">
                      <Visual />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <PostProjectButton campaign="consultants_lp_hiw" size="lg" />
          <span className="text-[#9CA3AF] text-sm">Free to post. No commitment.</span>
        </motion.div>

      </div>
    </section>
  );
}
