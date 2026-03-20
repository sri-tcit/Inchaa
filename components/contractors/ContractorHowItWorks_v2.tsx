"use client";

import { motion } from "framer-motion";
import { ClipboardList, BadgeCheck, LayoutList, Handshake } from "lucide-react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Post your project",
    description:
      "Describe your scope, location, and budget in minutes. Add photos or drawings — no sign-up fees, no commitment.",
  },
  {
    num: "02",
    icon: BadgeCheck,
    title: "Get verified quotes",
    description:
      "Licensed, credential-checked contractors respond with detailed proposals tailored to your project.",
  },
  {
    num: "03",
    icon: LayoutList,
    title: "Compare side by side",
    description:
      "Review pricing, credentials, and past work in one dashboard. No more chasing on WhatsApp.",
  },
  {
    num: "04",
    icon: Handshake,
    title: "Hire with confidence",
    description:
      "Pick the best fit for your budget and timeline. Manage the whole engagement from Inchaa.",
  },
];

export function ContractorHowItWorks_v2() {
  return (
    <section className="bg-navy py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-yellow text-xs font-bold uppercase tracking-[0.18em] mb-3">
            Simple Process
          </span>
          <h2 className="text-white text-3xl md:text-[44px] font-bold leading-tight">
            From idea to hired — in 4 steps
          </h2>
          <p className="mt-4 text-white/65 text-base max-w-md mx-auto leading-relaxed">
            No middlemen, no guesswork. Just the right contractor for your project.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative bg-navy group px-8 py-10 flex flex-col gap-5 hover:bg-white/[0.04] transition-colors duration-200"
              >
                {/* Big ghost number */}
                <span
                  className="absolute top-4 right-5 font-black leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "80px",
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.12)",
                  }}
                >
                  {step.num}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-yellow/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-yellow" strokeWidth={1.8} />
                </div>

                {/* Step label */}
                <span className="text-yellow text-xs font-bold uppercase tracking-widest">
                  Step {step.num}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-white text-lg font-bold leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <PostProjectButton campaign="contractors_lp_hiw" size="lg" />
          <p className="mt-3 text-white/50 text-xs">Free to post. No commitment.</p>
        </motion.div>

      </div>
    </section>
  );
}
