"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/** Construction-site poster (Unsplash). Replace with /assets/your-poster.webp when you have a local shot. */
const VIDEO_POSTER_SRC =
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=85";

export function VideoSection() {
    const { t } = useLanguage();
    const v = t.homePage.video;

    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-[#1D2030] text-center font-poppins text-[24px] md:text-[34px] font-bold leading-[140%]">
                        {v.titleLine1} <br className="hidden md:block" />
                        <span className="text-yellow font-poppins text-[24px] md:text-[34px] font-bold leading-[140%]">{v.titleAccent}</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-5xl mx-auto aspect-video bg-charcoal rounded-2xl shadow-2xl overflow-hidden group cursor-pointer"
                >
                    <img
                        src={VIDEO_POSTER_SRC}
                        alt={v.posterAlt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                    />
                    <div
                        className="absolute inset-0 z-[1] bg-gradient-to-t from-black/50 via-black/20 to-black/25 group-hover:from-black/40 group-hover:via-black/15 group-hover:to-black/20 transition-colors"
                        aria-hidden
                    />
                    <div className="absolute inset-0 z-[2] flex items-center justify-center">
                        <button
                            type="button"
                            className="w-20 h-20 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                            aria-label={v.playLabel}
                        >
                            <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <Play className="w-6 h-6 text-yellow ml-1 fill-yellow" aria-hidden />
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
