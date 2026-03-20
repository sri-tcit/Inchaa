"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

const steps = [
  {
    num: "1",
    title: "Post your requirements",
    description:
      "Describe your project scope, property type, location, and what type of consulting support you need.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=720&h=480&fit=crop",
    alt: "Person posting consulting requirements",
  },
  {
    num: "2",
    title: "Receive proposals",
    description:
      "Consultants in your area respond with detailed proposals covering scope, methodology, timeline, and fees.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=720&h=480&fit=crop",
    alt: "Consultant reviewing proposal",
  },
  {
    num: "3",
    title: "Compare expertise",
    description:
      "Review proposals side by side: qualifications, relevant experience, methodology, and pricing.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&h=480&fit=crop",
    alt: "Comparing consultant proposals on dashboard",
  },
  {
    num: "4",
    title: "Engage",
    description:
      "Choose the consultant that best matches your project needs.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=720&h=480&fit=crop",
    alt: "Team finalising consultant engagement",
  },
];

export function ConsultantHowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#F8F8F8] py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <div
                  key={step.num}
                  className="flex gap-5 md:gap-6 cursor-pointer"
                  onMouseEnter={() => setActiveStep(i)}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: i * 0.15 }}
                      className={`w-9 h-9 rounded-full text-sm font-bold flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isActive ? "bg-yellow text-white" : "bg-[#E5E7EB] text-mid-grey"
                      }`}
                    >
                      {step.num}
                    </motion.div>
                    {i < steps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                        className={`w-px flex-1 my-1 origin-top transition-colors duration-200 ${
                          isActive ? "bg-yellow/40" : "bg-[#E5E7EB]"
                        }`}
                      />
                    )}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.1 }}
                    className={`${i < steps.length - 1 ? "pb-8" : ""} transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <h3 className="text-charcoal text-base font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-mid-grey text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-[80px]">
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-white border border-[#E5E7EB]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].img}
                  alt={steps[activeStep].alt}
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

        <div className="mt-8 lg:hidden">
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden border border-[#E5E7EB]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep}
                src={steps[activeStep].img}
                alt={steps[activeStep].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <PostProjectButton
            campaign="consultants_lp"
            size="sm"
          />
        </motion.div>
      </div>
    </section>
  );
}
