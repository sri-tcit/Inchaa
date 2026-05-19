"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface FeatureHighlightProps {
    title: string;
    description: string;
    points: string[];
    imageSide?: "left" | "right";
    gradient?: string;
    pointsTitle?: string;
    imagePath?: string;
}

export function FeatureHighlight({ title, description, points, imageSide = "left", gradient = "from-purple-100 to-blue-100", pointsTitle, imagePath }: FeatureHighlightProps) {
    return (
        <div className={`flex flex-col gap-6 md:gap-10 lg:gap-[60px] items-center w-full ${imageSide === "right" ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

            {/* Content Side */}
            <motion.div
                initial={{ opacity: 0, x: imageSide === "right" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1 space-y-8 px-0 lg:p-[0px_40px] order-2 lg:order-none"
            >
                <h2 className="text-[#323232] font-poppins text-[24px] font-bold leading-[130%] pb-[16px] mb-0">
                    {title}
                </h2>
                <p className="text-[#76797B] font-poppins text-[14px] font-normal leading-[150%] pb-[24px] mb-0">
                    {description}
                </p>

                <h3 className="text-[#76797B] font-poppins text-[16px] font-semibold leading-[130%] pb-[24px] mb-0">{pointsTitle}</h3>
                <ul className="space-y-4">
                    {points.map((point, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx, duration: 0.3 }}
                            className="flex items-start gap-3"
                        >
                            <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 rounded-full bg-[rgba(60,73,221,0.1)]">
                                <Image src="/assets/tick-icon.png" alt="Check" width={14} height={14} />
                            </div>
                            <span className="text-[#323232] font-poppins text-[16px] font-normal leading-[150%]">{point}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Image Side */}
            <div className="flex-1 w-full order-1 lg:order-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative aspect-square md:aspect-[4/3] rounded-3xl ${gradient} p-8 md:p-12 overflow-hidden`}
                >

                    <div className="h-[300px] md:h-[550px] w-full">
                        <Image
                            src={imagePath || ""}
                            alt="Feature Highlight"
                            fill
                            className="object-contain"
                        />
                    </div>
                </motion.div>
            </div>

        </div>
    );
}
