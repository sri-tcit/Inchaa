"use client";

import { motion } from "framer-motion";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { useIsEmbedded } from "@/lib/hooks";

const termsSections = [
    {
        number: 1,
        title: "Introduction",
        content: "These Terms and Conditions govern your use of the Inchaa marketplace app. By using the app, you agree to these terms. If you do not agree, please refrain from using our services. Definition: \"Service Provider\" refers to Main Contractors, Sub-Contractors, and Consultants listed on the Inchaa platform."
    },
    {
        number: 2,
        title: "Marketplace Services",
        content: "Inchaa serves as a marketplace platform that connects users with Service Providers. Users can view Service Provider profiles, shortlist/add them, and request quotations. When a customer submits a Request for Quote (RFQ), the selected Service Providers may view the request details and respond with quotations as per the platform workflow. Service Providers listed on the platform are responsible for providing accurate information and ensuring their services meet the expectations of users."
    },
    {
        number: 3,
        title: "User Responsibilities",
        intro: "You agree to the following responsibilities:",
        points: [
            "Account Information: You agree to provide accurate and up-to-date information when creating and maintaining your account.",
            "Request for Quote: By submitting an RFQ, you agree that necessary request details may be shared with relevant Service Providers for quotation and communication purposes.",
            "Reviews: Users can leave reviews for Service Providers. You agree to provide honest and constructive feedback based on your experience.",
            "Prohibited Activities: You agree not to engage in activities such as posting misleading reviews, fraud, abuse, or attempting to misuse the platform."
        ]
    },
    {
        number: 4,
        title: "Service Provider Listings",
        content: "Service Providers are responsible for managing their listings, including the accuracy of their services and pricing (if shown). Inchaa does not guarantee the quality, availability, or delivery of services offered by Service Providers."
    },
    {
        number: 5,
        title: "Verification & Account Status",
        intro: "Inchaa may perform administrative review of Service Provider accounts. Inchaa reserves the right to:",
        points: [
            "approve or reject registrations",
            "request resubmission of information",
            "deactivate/reactivate accounts based on compliance, policy violations, or operational reasons"
        ]
    },
    {
        number: 6,
        title: "No Payment System",
        content: "Currently, there is no payment system within the app. Any financial transactions or agreements between users and Service Providers must be handled outside of the app."
    },
    {
        number: 7,
        title: "Limitation of Liability",
        content: "We are not responsible for any disputes, damages, or service-related issues arising from the services provided by Service Providers. Inchaa is a marketplace platform and does not guarantee that all Service Providers meet specific standards."
    },
    {
        number: 8,
        title: "Data Security",
        content: "We implement reasonable administrative, technical, and physical safeguards to protect user information in accordance with our Privacy Policy. While we take appropriate measures to secure data, no system can be guaranteed to be completely secure. Inchaa shall not be responsible for unauthorized access caused by factors beyond reasonable control. Users are responsible for maintaining the confidentiality of their account credentials and for any activity occurring under their account."
    },
    {
        number: 9,
        title: "Termination of Access",
        content: "We reserve the right to suspend or terminate your access to the app if we believe you have violated these terms."
    },
    {
        number: 10,
        title: "Changes to Terms",
        content: "We may update these Terms and Conditions at any time. Any changes will be posted here, and the \"Last Updated\" date will reflect the most recent updates."
    },
    {
        number: 11,
        title: "Governing Law",
        content: "These Terms and Conditions are governed by the laws of the United Arab Emirates."
    },
    {
        number: 12,
        title: "Contact Us",
        content: "For any questions about these Terms and Conditions, please contact us at ",
        email: "support@inchaa.com"
    }
];

export default function TermsConditions() {
    const isEmbedded = useIsEmbedded();

    return (
        <main className="min-h-screen bg-bg-base">
            {!isEmbedded && <Navbar />}

            <div className={`${isEmbedded ? 'pt-20' : 'pt-32'} pb-20 px-4 md:px-6 bg-bg-base`}>
                <div className="container mx-auto max-w-4xl">
                <div className="pb-[40px]">
                            <h1 className="text-text-heading text-center font-poppins text-[34px] font-bold leading-[130%] pb-[8px]">
                                Terms & <span className="bg-gradient-to-r from-[#39F] via-[#3040E8] to-[#8C3CDD] bg-clip-text text-transparent font-poppins text-[34px] font-bold leading-[130%]">Conditions</span>
                            </h1>
                            <p className="text-text-muted text-center font-poppins text-[16px] font-normal leading-[150%]">
                                Last updated: 26 Jan 2026
                            </p>
                        </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-bg-card rounded-3xl border border-ui-border overflow-hidden"
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
                                    <h2 className="text-text-heading font-poppins text-[24px] md:text-[28px] font-bold leading-[130%]">
                                        {section.number}. {section.title}
                                    </h2>

                                    {section.intro && (
                                        <p className="text-text-muted font-poppins text-[16px] font-normal leading-[150%]">
                                            {section.intro}
                                        </p>
                                    )}

                                    {section.points && (
                                        <ul className="space-y-2 ml-6">
                                            {section.points.map((point, pointIdx) => (
                                                <li key={pointIdx} className="text-text-muted font-poppins text-[16px] font-normal leading-[150%]">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.content && (
                                        <p className="text-text-muted font-poppins text-[16px] font-normal leading-[150%]">
                                            {section.content}
                                            {section.email && (
                                                <a
                                                    href={"mailto:" + section.email}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        const mailtoLink = "mailto:" + section.email;
                                                        window.location.href = mailtoLink;
                                                    }}
                                                    className="text-blue-400 hover:underline ml-1 cursor-pointer"
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
