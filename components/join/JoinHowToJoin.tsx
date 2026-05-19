"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JoinButton } from "./JoinButton";

const steps = [
  {
    num: "1",
    title: "Create your profile",
    description:
      "Tell us about your business: services offered, areas covered, and years of experience.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=720&h=480&fit=crop",
    alt: "Person setting up a professional profile on a laptop",
  },
  {
    num: "2",
    title: "Submit your credentials",
    description:
      "Upload your valid UAE trade license, business registration, and examples of past project work.",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=720&h=480&fit=crop",
    alt: "Documents and trade license submission",
  },
  {
    num: "3",
    title: "Get reviewed",
    description:
      "Our team reviews your credentials. Only professionals who pass the review are activated on the platform.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=720&h=480&fit=crop",
    alt: "Inchaa team reviewing professional credentials",
  },
  {
    num: "4",
    title: "Start receiving leads",
    description:
      "Once activated, you receive project inquiries from homeowners and developers in your service area. Review, quote, and win.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=720&h=480&fit=crop",
    alt: "Professional receiving project notifications on dashboard",
  },
];

export function JoinHowToJoin() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-bg-base py-16 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-text-heading text-3xl md:text-[40px] font-bold leading-tight mb-12">
          How to Join
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
                        isActive ? "bg-yellow text-white" : "bg-bg-interactive text-text-muted"
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
                          isActive ? "bg-yellow/40" : "bg-ui-border"
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
                    <h3 className="text-text-body text-base font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-[80px]">
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-bg-card border border-ui-border">
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

        {/* Mobile image */}
        <div className="mt-8 lg:hidden">
          <div className="relative aspect-[3/2] rounded-lg overflow-hidden border border-ui-border">
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
          <JoinButton size="sm" />
        </motion.div>
      </div>
    </section>
  );
}
