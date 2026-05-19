"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
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
                        One Platform Connecting Everyone in the <br className="hidden md:block" />
                        <span className="text-[#3743D8] font-poppins text-[24px] md:text-[34px] font-bold leading-[140%]">Construction Ecosystem</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-5xl mx-auto aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer"
                >
                    {/* Video Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 group-hover:bg-gray-900/30 transition-colors">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <Play className="w-6 h-6 text-blue-600 ml-1 fill-blue-600" />
                            </div>
                        </div>
                    </div>
                    {/* Ideally an <img> tag with a poster here */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                </motion.div>
            </div>
        </section>
    );
}
