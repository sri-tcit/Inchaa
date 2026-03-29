"use client";

import { motion } from "framer-motion";
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
                <h2 className="text-navy text-2xl md:text-[28px] font-bold leading-tight tracking-tight pb-4 mb-0">
                    {title}
                </h2>
                <p className="text-mid-grey text-sm md:text-base leading-relaxed pb-6 mb-0">
                    {description}
                </p>

                <h3 className="text-navy text-base font-semibold leading-snug pb-4 mb-0">{pointsTitle}</h3>
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
                            <div className="flex w-6 h-6 justify-center items-center shrink-0 rounded-full bg-yellow/10">
                                <Image src="/assets/tick-icon.png" alt="" width={14} height={14} />
                            </div>
                            <span className="text-charcoal text-base leading-relaxed">{point}</span>
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
