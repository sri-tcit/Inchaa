"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useIsEmbedded } from "@/lib/hooks";

const termsSections = [
    {
        number: 1,
        title: "Acceptance of Terms",
        content: "By accessing and using Inchaa (\"the Platform\"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
        number: 2,
        title: "Description of Service",
        content: "Inchaa is a digital platform that connects customers with verified contractors, engineers, and consultants. The platform facilitates project management, quotation requests, and communication between users and service providers."
    },
    {
        number: 3,
        title: "User Registration",
        intro: "To use certain features of the Platform, you must register for an account. You agree to:",
        points: [
            "Provide accurate, current, and complete information during registration",
            "Maintain and promptly update your account information",
            "Keep your password secure and confidential",
            "Accept responsibility for all activities under your account"
        ]
    },
    {
        number: 4,
        title: "Service Provider Verification",
        content: "While Inchaa strives to verify service providers on the platform, we do not guarantee the quality, safety, or legality of services offered. Users are encouraged to conduct their own due diligence before engaging any service provider."
    },
    {
        number: 5,
        title: "Quotations and Payments",
        content: "All quotations provided through the Platform are estimates and may be subject to change. Payment terms are agreed upon between the customer and service provider. Inchaa is not responsible for any disputes arising from payment issues."
    },
    {
        number: 6,
        title: "Intellectual Property",
        content: "All content, features, and functionality of the Platform are owned by Inchaa Technologies and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
        number: 7,
        title: "Limitation of Liability",
        content: "Inchaa shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Platform or any services obtained through the Platform."
    },
    {
        number: 8,
        title: "Changes to Terms",
        content: "Inchaa reserves the right to modify these terms at any time. We will notify users of any material changes via email or through the Platform. Continued use of the Platform after changes constitutes acceptance of the new terms."
    },
    {
        number: 9,
        title: "Contact Information",
        content: "For any questions regarding these Terms & Conditions, please contact us at ",
        email: "legal@inchaa.com"
    }
];

export default function TermsConditions() {
    const isEmbedded = useIsEmbedded();

    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20">
            {!isEmbedded && <Navbar />}
            
            <div className={`${isEmbedded ? 'pt-20' : 'pt-32'} pb-20 px-4 md:px-6 bg-[#F8F9FB] relative before:content-[''] before:fixed before:top-0 before:left-0 before:w-[300px] before:h-[482px] before:bg-[url('/assets/left-overlay.png')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:fixed after:top-0 after:right-0 after:w-[230px] after:h-[482px] after:bg-[url('/assets/right-overlay.png')] after:bg-no-repeat after:bg-center after:bg-contain`}>
                <div className="container mx-auto max-w-4xl">
                <div className="pb-[40px]">
                            <h1 className="text-[#1D2030] text-center font-poppins text-[34px] font-bold leading-[130%] pb-[8px]">
                                Terms & <span className="bg-gradient-to-r from-[#39F] via-[#3040E8] to-[#8C3CDD] bg-clip-text text-transparent font-poppins text-[34px] font-bold leading-[130%]">Conditions</span>
                            </h1>
                            <p className="text-[#76797B] text-center font-poppins text-[16px] font-normal leading-[150%]">
                                Last updated: January 2026
                            </p>
                        </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden"
                    >
                        {/* Header */}
                     

                        {/* Content Sections */}
                        <div className="space-y-10 p-[30px]">
                            {termsSections.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="space-y-4"
                                >
                                    <h2 className="text-[#1D2030] font-poppins text-[24px] md:text-[28px] font-bold leading-[130%]">
                                        {section.number}. {section.title}
                                    </h2>
                                    
                                    {section.intro && (
                                        <p className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                            {section.intro}
                                        </p>
                                    )}
                                    
                                    {section.points && (
                                        <ul className="space-y-2 ml-6">
                                            {section.points.map((point, pointIdx) => (
                                                <li key={pointIdx} className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    
                                    {section.content && (
                                        <p className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                            {section.content}
                                            {section.email && (
                                                <a 
                                                    href={"mailto:" + section.email}
                                                    className="text-[#3C49DD] hover:underline ml-1"
                                                >
                                                    {section.email}
                                                </a>
                                            )}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {!isEmbedded && <Footer />}
        </main>
    );
}
