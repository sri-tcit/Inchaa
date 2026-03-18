"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homeEn } from "@/content/home/en";

const { howItWorks } = homeEn;

export function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-charcoal text-2xl md:text-3xl font-bold">{howItWorks.heading}</h2>
          <p className="mt-2 text-mid-grey text-sm">{howItWorks.subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <div className="flex flex-col gap-2">
            {howItWorks.steps.map((step, i) => {
              const isActive = active === i;
              return (
                <button
                  key={step.num}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`text-left px-5 py-4 rounded-lg border transition-colors duration-150 ${
                    isActive
                      ? "border-yellow bg-[#FAFAF0]"
                      : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-lg font-bold w-5 transition-colors duration-150 ${isActive ? "text-yellow" : "text-[#D1D5DB]"}`}>
                      {step.num}
                    </span>
                    <span className={`text-sm font-semibold transition-colors duration-150 ${isActive ? "text-charcoal" : "text-mid-grey"}`}>
                      {step.title}
                    </span>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 ml-8 text-sm text-mid-grey leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-[72px]">
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden border border-[#E5E7EB]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={howItWorks.steps[active].img}
                  alt={howItWorks.steps[active].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:hidden">
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden border border-[#E5E7EB]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={howItWorks.steps[active].img}
                alt={howItWorks.steps[active].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
