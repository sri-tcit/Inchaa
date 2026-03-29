"use client";

import { motion } from "framer-motion";
import { JoinButton } from "@/components/join/JoinButton";

export function ProviderCTA() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 md:px-6 py-12 md:pt-24 text-center max-w-[990px] mx-auto"
        >
            <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E7EB] bg-white shadow-sm max-w-max">
                    <span className="text-mid-grey text-sm text-center">For service providers</span>
                </div>
            </div>
            <h2 className="text-navy text-center text-2xl md:text-[34px] font-bold leading-tight tracking-tight pb-2">
                Get discovered. Win more projects. Work smarter.
            </h2>
            <p className="text-mid-grey text-center text-base leading-relaxed pb-6 max-w-2xl mx-auto">
                Inchaa connects your business with customers who are actively looking for verified contractors, engineers, and consultants.
            </p>
            <div className="flex justify-center">
                <JoinButton size="md" className="w-full max-w-[260px] justify-center">
                    Join as a professional
                </JoinButton>
            </div>
        </motion.div>
    );
}
