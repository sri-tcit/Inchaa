"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const APP_URL = "https://inchaa.com/app?utm_source=website&utm_medium=cta&utm_campaign=homepage_customers";

export function CustomerCTA() {
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
                    <span className="text-mid-grey text-sm">For customers</span>
                </div>
            </div>
            <h2 className="text-navy text-center text-2xl md:text-[34px] font-bold leading-tight tracking-tight pb-2">
                Plan smarter. Compare better. Build with confidence.
            </h2>
            <p className="text-mid-grey text-center text-base leading-relaxed pb-6 max-w-2xl mx-auto">
                The Inchaa customer app removes guesswork from construction decisions. Find the right professionals, track quotations, and manage project details in one flow.
            </p>
            <Link
                href={APP_URL}
                className="inline-flex w-full max-w-[220px] mx-auto items-center justify-center min-h-11 px-7 py-3.5 rounded-lg bg-yellow text-white text-sm font-bold hover:brightness-95 transition-all duration-150"
            >
                Get the app
            </Link>
        </motion.div>
    );
}
