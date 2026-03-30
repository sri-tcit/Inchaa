"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const customerTestimonials = [
    {
        quote: "Inchaa made finding a reliable electrician so easy! Got multiple quotes within hours and the work was completed professionally. Highly recommend!",
        author: "أحمد الحمادي",
        role: "Homeowner, Abu Dhabi",
        stars: 5,
    },
    {
        quote: "As a builder managing multiple projects, Inchaa has been a game-changer. I can quickly find verified contractors and track all my service requests in one place.",
        author: "فاطمة المنصوري",
        role: "Builder, Dubai",
        stars: 5,
    },
    {
        quote: "The transparency in pricing and the ability to compare quotes has saved me significant money on maintenance work. Great platform!",
        author: "خالد الكعبي",
        role: "Property Manager, Al Ain",
        stars: 5,
    },
];

const providerTestimonials = [
    {
        quote: "Inchaa has transformed my business! I get quality leads daily and the platform makes it so easy to manage quotes and projects. My bookings have increased by 40%.",
        author: "محمد العلي",
        role: "Electrician, Dubai",
        stars: 5,
    },
    {
        quote: "The best part about Inchaa is the direct communication with customers. No more back-and-forth emails - everything is organized in one place. Highly efficient!",
        author: "سارة النعيمي",
        role: "Plumber, Abu Dhabi",
        stars: 5,
    },
    {
        quote: "As a consultant, Inchaa helps me showcase my expertise to the right clients. The verification badge gives me credibility and I've built a strong reputation on the platform.",
        author: "علي الشامسي",
        role: "Construction Consultant, Sharjah",
        stars: 5,
    },
];

export function Testimonials() {
    const [activeTab, setActiveTab] = useState<"customers" | "providers">("customers");
    const testimonials = activeTab === "customers" ? customerTestimonials : providerTestimonials;

    return (
        <section className="py-12 md:py-20 bg-light-grey/40 border-t border-[#E5E7EB]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-[48px]">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center mb-6"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E7EB] bg-white shadow-sm max-w-max">
                            <span className="text-mid-grey text-sm">Testimonials</span>
                        </div>
                    </motion.div>
                    <h2 className="text-navy text-center text-2xl md:text-[34px] font-bold leading-tight tracking-tight pb-4">
                        What our users say
                    </h2>
                    <p className="text-mid-grey text-center text-base leading-relaxed max-w-xl mx-auto">
                        Hear from customers and service providers who trust Inchaa.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-12">
                    <button
                        type="button"
                        onClick={() => setActiveTab("customers")}
                        className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-150 cursor-pointer ${
                            activeTab === "customers"
                                ? "bg-yellow text-white shadow-sm"
                                : "bg-white text-mid-grey border border-[#E5E7EB] hover:bg-light-grey/60"
                        }`}
                    >
                        Customers &amp; builders
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab("providers")}
                        className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-150 cursor-pointer ${
                            activeTab === "providers"
                                ? "bg-yellow text-white shadow-sm"
                                : "bg-white text-mid-grey border border-[#E5E7EB] hover:bg-light-grey/60"
                        }`}
                    >
                        Service providers
                    </button>
                </div>

                <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5E7EB] flex flex-col justify-between"
                        >
                            <div className="mb-[24px]">
                               <Image src="/assets/double-quote.png" alt="Quote" width={32} height={48} className="pb-[16px]" />
                                <p className="text-mid-grey text-base leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                            </div>
                            <div className="flex justify-between items-center">
                               
                               <div className="flex items-center gap-4">
                                    <div className="flex w-12 h-12 justify-center items-center shrink-0 rounded-full bg-yellow/10 text-yellow text-base font-semibold text-center">
                                        {item.author.trim().charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-charcoal text-base font-semibold">{item.author}</div>
                                        <div className="text-mid-grey text-sm leading-relaxed">{item.role}</div>
                                    </div>
                                </div>
                                
                                <div className="flex gap-1">
                                    {[...Array(item.stars)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
