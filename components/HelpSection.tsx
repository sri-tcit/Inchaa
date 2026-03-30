"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
    {
        question: "Can I have multiple accounts?",
        answer: "No. Each user can create only one Inchaa account per phone number. If you need another account, you must use a different mobile number."
    },
    {
        question: "How do I update my phone number?",
        answer: "You can update your phone number from My Profile → Edit Profile. After updating, the changes will be saved to your Inchaa account."
    },
    {
        question: "How can I delete my Inchaa account?",
        answer: "Go to Account → Delete Account and confirm the request. Account deletion will be completed after Email OTP verification."
    },
    {
        question: "How do I contact customer support?",
        answer: "You can contact our support team from Help & Support in the app. You can also email us at support@inchaa.com."
    },
    {
        question: "How do I change the app language?",
        answer: "Go to Account → Language and choose English or Arabic. The app will update based on your selected language."
    }
];


export function HelpSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-20 bg-white border-t border-[#E5E7EB]">
            <div className="container mx-auto px-4 md:px-6">
            <motion.div 
                className="text-center mb-8 md:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E7EB] bg-white shadow-sm max-w-max">
                        <span className="text-mid-grey text-sm">Help &amp; support</span>
                    </div>
                </div>
                <h2 className="text-navy text-center text-2xl md:text-[34px] font-bold leading-tight tracking-tight pb-4">
                    We&apos;re here to help you <span className="text-yellow">succeed</span>
                </h2>
            </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* FAQ List */}
                    <motion.div 
                        className="w-full lg:col-span-2 rounded-2xl p-8 border border-[#E5E7EB] bg-light-grey/30 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="space-y-4">
                            <h3 className="text-navy text-xl font-bold leading-tight">Frequently asked questions</h3>
                            {faqData.map((faq, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm overflow-hidden"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                >
                                    <button
                                        onClick={() => toggleAccordion(idx)}
                                        className="w-full flex justify-between items-start self-stretch px-[24px] py-[20px] text-left cursor-pointer hover:bg-white/80 transition-colors"
                                    >
                                        <span className="text-charcoal text-base font-semibold pr-4">{faq.question}</span>
                                        <motion.div
                                            initial={false}
                                            animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0"
                                        >
                                            {openIndex === idx ? (
                                                <Minus className="w-5 h-5 text-mid-grey" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-mid-grey" />
                                            )}
                                        </motion.div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {openIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-[24px] pb-[20px]">
                                                    <p className="text-mid-grey text-sm leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="lg:col-span-1 w-full rounded-2xl p-8 border border-[#E5E7EB] bg-light-grey/30 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                                <h3 className="text-navy text-xl font-bold leading-tight pb-4">Need more help?</h3>
                                <p className="text-mid-grey text-base leading-relaxed pb-4">
                                    Our team is ready to assist you with any questions.
                                </p>

                                <div className="space-y-4">
                                    <motion.button 
                                        className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm flex items-center gap-3 self-stretch p-4 w-full cursor-pointer hover:bg-light-grey/40 transition-colors"
                                        whileHover={{ scale: 1.01, y: -1 }}
                                        whileTap={{ scale: 0.99 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="flex w-10 h-10 justify-center items-center rounded-xl bg-navy shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M16.666 3.3335H3.33268C2.41221 3.3335 1.66602 4.07969 1.66602 5.00016V15.0002C1.66602 15.9206 2.41221 16.6668 3.33268 16.6668H16.666C17.5865 16.6668 18.3327 15.9206 18.3327 15.0002V5.00016C18.3327 4.07969 17.5865 3.3335 16.666 3.3335Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.3327 5.8335L10.8577 10.5835C10.6004 10.7447 10.3029 10.8302 9.99935 10.8302C9.69575 10.8302 9.39829 10.7447 9.14102 10.5835L1.66602 5.8335" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                                        </div>
                                        <div className="text-left">
                                            <div className="text-charcoal text-sm font-semibold pb-1">Email support</div>
                                            <div className="text-mid-grey text-xs leading-relaxed">support@inchaa.com</div>
                                        </div>
                                    </motion.button>
                                    <motion.button 
                                        className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm flex items-center gap-3 self-stretch p-4 w-full cursor-pointer hover:bg-light-grey/40 transition-colors"
                                        whileHover={{ scale: 1.01, y: -1 }}
                                        whileTap={{ scale: 0.99 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="flex w-10 h-10 justify-center items-center rounded-xl bg-navy shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6.58268 16.6669C8.17316 17.4827 10.0028 17.7037 11.7418 17.29C13.4808 16.8763 15.0148 15.8551 16.0675 14.4104C17.1201 12.9656 17.6222 11.1925 17.4832 9.41034C17.3441 7.62821 16.5732 5.95434 15.3092 4.69036C14.0452 3.42638 12.3713 2.65541 10.5892 2.51638C8.80709 2.37735 7.03391 2.87941 5.5892 3.93207C4.14449 4.98474 3.12326 6.51879 2.70953 8.2578C2.29581 9.9968 2.5168 11.8264 3.33268 13.4169L1.66602 18.3335L6.58268 16.6669Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                                        </div>
                                        <div className="text-left">
                                            <div className="text-charcoal text-sm font-semibold pb-1">In-app chat</div>
                                            <div className="text-mid-grey text-xs leading-relaxed">Available 24/7</div>
                                        </div>
                                    </motion.button>
                            </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
