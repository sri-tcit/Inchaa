"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useIsEmbedded } from "@/lib/hooks";

const privacySections = [
    {
        number: 1,
        title: "Information We Collect",
        intro: "We collect information you provide directly to us including:",
        points: [
            "Name, email address, phone number, and other contact information",
            "Account credentials and profile information",
            "Project details, documents, and photographs you upload",
            "Communications between you and service providers",
            "Payment and billing information"
        ]
    },
    {
        number: 2,
        title: "How We Use Your Information",
        intro: "We use the information we collect to:",
        points: [
            "Provide, maintain, and improve our services",
            "Connect you with verified service providers",
            "Process transactions and send related information",
            "Send you technical notices, updates, and support messages",
            "Respond to your comments, questions and requests",
            "Monitor and analyze trends, usage, and activities"
        ]
    },
    {
        number: 3,
        title: "Information Sharing",
        intro: "We may share your information in the following circumstances:",
        points: [
            "With service providers when you request quotes or services",
            "With vendors and service providers who need access to perform services for us",
            "In response to legal requests or to protect our rights",
            "In connection with a merger, acquisition, or sale of assets"
        ]
    },
    {
        number: 4,
        title: "Data Security",
        content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure."
    },
    {
        number: 5,
        title: "Data Retention",
        content: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. You may request deletion of your data at any time."
    },
    {
        number: 6,
        title: "Your Rights",
        intro: "You have the right to:",
        points: [
            "Access and receive a copy of your personal data",
            "Rectify any inaccurate or incomplete personal data",
            "Request erasure of your personal data",
            "Object to processing of your personal data",
            "Request restriction of processing your personal data",
            "Data portability"
        ]
    },
    {
        number: 7,
        title: "Cookies and Tracking",
        content: "We use cookies and similar tracking technologies to track activity on our Platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
        number: 8,
        title: "Children's Privacy",
        content: "Our Platform is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16."
    },
    {
        number: 9,
        title: "Contact Us",
        content: "If you have any questions about this Privacy Policy, please contact us at ",
        email: "privacy@inchaa.com"
    }
];

export default function PrivacyPolicy() {
    const isEmbedded = useIsEmbedded();

    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20">
            {!isEmbedded && <Navbar />}
            
            <div className={`${isEmbedded ? 'pt-20' : 'pt-32'} pb-20 px-4 md:px-6 bg-[#F8F9FB] relative before:content-[''] before:fixed before:top-0 before:left-0 before:w-[300px] before:h-[482px] before:bg-[url('/assets/left-overlay.png')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:fixed after:top-0 after:right-0 after:w-[230px] after:h-[482px] after:bg-[url('/assets/right-overlay.png')] after:bg-no-repeat after:bg-center after:bg-contain`}>
                <div className="container mx-auto max-w-4xl">
                <div className="pb-[40px]">
                            <h1 className="text-[#1D2030] text-center font-poppins text-[34px] font-bold leading-[130%] pb-[8px]">
                                Privacy <span className="bg-gradient-to-r from-[#39F] via-[#3040E8] to-[#8C3CDD] bg-clip-text text-transparent font-poppins text-[34px] font-bold leading-[130%]">Policy</span>
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
                            {privacySections.map((section, idx) => (
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
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        const mailtoLink = "mailto:" + section.email;
                                                        window.location.href = mailtoLink;
                                                    }}
                                                    className="text-[#3C49DD] hover:underline ml-1 cursor-pointer"
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
