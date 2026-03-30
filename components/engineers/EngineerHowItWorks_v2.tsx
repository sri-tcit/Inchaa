"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

const steps = [
  {
    num: "1",
    title: "Post your project",
    description:
      "Describe your engineering requirements: project type, location, scope, and technical needs. Takes minutes.",
  },
  {
    num: "2",
    title: "Receive proposals",
    description:
      "Engineers with valid credentials and relevant experience respond with detailed proposals.",
  },
  {
    num: "3",
    title: "Compare qualifications",
    description:
      "Review proposals side by side — qualifications, experience, scope of services, and fees.",
  },
  {
    num: "4",
    title: "Engage with confidence",
    description:
      "Choose the engineer that best matches your technical requirements and budget.",
  },
];

export function EngineerHowItWorks_v2() {
  return (
    <section className="bg-[#F8F8F8] py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-[1160px] mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
        >
          <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight">
            How It Works
          </h2>
          <div className="hidden md:block">
            <PostProjectButton campaign="engineers_lp_hiw" size="md" />
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col p-8 md:p-0 md:pr-8 lg:pr-10"
            >
              {/* Connector arrow — desktop only, between steps */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute right-0 top-[28px] translate-x-1/2 z-10 items-center justify-center w-6 h-6 rounded-full bg-[#E5E7EB]">
                  <ArrowRight className="w-3.5 h-3.5 text-yellow" strokeWidth={2.5} />
                </div>
              )}

              {/* Step number */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[56px] md:text-[64px] font-black leading-none text-yellow"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {step.num}
                </span>
              </div>

              {/* Thin yellow rule */}
              <div className="w-8 h-[3px] bg-yellow mb-5" />

              {/* Content */}
              <h3 className="text-navy text-base font-bold leading-snug mb-3">
                {step.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Mobile divider */}
              {i < steps.length - 1 && (
                <div className="lg:hidden mt-8 mb-2 border-b border-[#E5E7EB]" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 md:hidden">
          <PostProjectButton campaign="engineers_lp_hiw" size="lg" />
        </div>

      </div>
    </section>
  );
}
