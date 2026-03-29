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
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-[48px]">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center mb-6"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/70 shadow-sm backdrop-blur-[10px] max-w-max">
                            <span className="text-center text-[#76797B] font-poppins text-sm font-normal leading-[1.5]">Testimonials</span>
                        </div>
                    </motion.div>
                    <h2 className="text-[#1D2030] text-center font-poppins text-[24px] md:text-[34px] font-bold leading-[130%] pb-[16px]">What Our Users Say</h2>
                    <p className="text-[#76797B] text-center font-poppins text-base font-normal leading-6">
                    Hear from customers and service providers who trust Inchaa for their needs
                    </p>
                </div>

                <div className="flex items-center justify-center mb-8 md:mb-[48px]">
                    <button 
                        onClick={() => setActiveTab("customers")}
                        className={`flex flex-col items-center justify-center px-6 py-3 rounded-full text-center font-poppins text-[14px] font-semibold leading-[130%] transition-all cursor-pointer ${
                            activeTab === "customers" 
                                ? "bg-[#3C49DD] text-white" 
                                : "bg-transparent text-[#76797B] hover:bg-gray-100"
                        }`}
                    >
                        Customers & Builders
                    </button>
                    <button 
                        onClick={() => setActiveTab("providers")}
                        className={`flex flex-col items-center justify-center px-6 py-3 rounded-full text-center font-poppins text-[14px] font-semibold leading-[130%] transition-all cursor-pointer ${
                            activeTab === "providers" 
                                ? "bg-[#3C49DD] text-white" 
                                : "bg-transparent text-[#76797B] hover:bg-gray-100"
                        }`}
                    >
                        Service Providers
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
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
                        >
                            <div className="mb-[24px]">
                               <Image src="/assets/double-quote.png" alt="Quote" width={32} height={48} className="pb-[16px]" />
                                <p className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">"{item.quote}"</p>
                            </div>
                            <div className="flex justify-between items-center">
                               
                               <div className="flex items-center gap-4">
                                    <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 rounded-full bg-[rgba(60,73,221,0.1)] text-[#3743D8] font-poppins text-[16px] font-semibold leading-[130%] text-center" >
                                    أح
                                    </div>
                                    <div>
                                        <div className="text-[#323232] font-poppins text-[16px] font-semibold leading-[130%]">{item.author}</div>
                                        <div className="text-[#76797B] font-poppins text-[14px] font-normal leading-[150%]">{item.role}</div>
                                    </div>
                                </div>
                                
                                <div className="flex gap-1">
                                    {[...Array(item.stars)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
