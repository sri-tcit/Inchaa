"use client";

import { motion } from "framer-motion";

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
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/70 shadow-sm backdrop-blur-[10px] max-w-max">
                    <span className="text-center text-[#76797B] font-poppins text-sm font-normal leading-[1.5]">For Customers</span>
                </div>
            </div>
            <h2 className="text-[#323232] text-center font-poppins text-[24px] md:text-[34px] font-bold leading-[130%] pb-[8px]">
                Plan smarter. Compare better. Build with confidence.
            </h2>
            <p className="text-[#76797B] text-center font-poppins text-[16px] font-normal leading-[150%] pb-[16px]">
                The Inchaa customer app is designed to remove uncertainty from construction and service decisions. From finding the right professionals to tracking every quotation and project detail, everything is organized in one simple flow.
            </p>
            <button className="flex w-[220px] h-[44px] px-[24px] py-[8px] justify-center items-center rounded-[16px] bg-[linear-gradient(108deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] text-white font-semibold mx-auto cursor-pointer">
                Get the App
            </button>
        </motion.div>
    );
}
