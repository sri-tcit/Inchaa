"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useIsEmbedded } from "@/lib/hooks";

const privacySections = [
    {
        number: 1,
        title: "Introduction",
        content: "We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our marketplace app (\"Inchaa\"). By using our services, you agree to the collection and use of information in accordance with this policy. Definition: \"Service Provider\" refers to Main Contractors, Sub-Contractors, and Consultants listed on the Inchaa platform."
    },
    {
        number: 2,
        title: "Information We Collect",
        intro: "We collect and store the following information to provide a seamless user experience:",
        points: [
            "Profile Information: When you create an account, we collect details such as your name, email address, phone number, and address.",
            "Location Information: We may collect your location based on the address you provide (or device location if enabled) to recommend relevant Service Providers near you.",
            "Service Provider Details: We collect and store information about Service Providers, such as their name, contact details, services offered, profile details, business details (if applicable), and user reviews/ratings.",
            "Request for Quote (RFQ) Information: When a customer submits a request for quote, we collect request details such as service category, requirements/notes, location/site details, and attachments (if applicable).",
            "Usage Information: We may collect data about your interaction with the app to improve performance and user experience."
        ]
    },
    {
        number: 3,
        title: "How We Use Your Information",
        intro: "We use your information for the following purposes:",
        points: [
            "Personalization: To recommend Service Providers based on your location and preferences.",
            "Communication: To send you account-related notifications, including updates on RFQs, quotations, approvals, status changes, and reviews.",
            "Platform Operations: To enable quotation workflows, improve user experience, maintain safety, and prevent misuse/fraud.",
            "Feedback: To allow you to leave reviews for Service Providers and rate their services."
        ]
    },
    {
        number: 4,
        title: "Analytics and Third-Party Services",
        intro: "We use third-party analytics providers, such as [Google Analytics, Firebase Analytics, etc.], to help us understand how users interact with our app and improve the user experience. These providers may collect information such as device type, IP address, usage patterns, and other usage data. We may also use third-party services to support platform functionality. These providers may process certain personal data on our behalf strictly for delivering their services. Examples include:",
        points: [
            "Google Maps Platform / Google Maps API (map display, location search, geocoding, and distance calculations)",
            "Twilio (OTP/SMS verification and notifications)",
            "SendGrid (email notifications)",
            "Google Firebase / Google Analytics (analytics and performance monitoring)",
            "Cloud hosting providers (hosting, storage, and infrastructure services)"
        ],
        content: "These third parties are contractually required to protect your data and use it only for delivering services to Inchaa."
    },
    {
        number: 5,
        title: "How We Protect Your Data",
        intro: "We implement appropriate technical, administrative, and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our safeguards include:",
        points: [
            "Technical Safeguards: Encryption of sensitive data at rest using industry-standard encryption (AES-256 or equivalent), encryption of data in transit using secure communication protocols (TLS 1.2 or higher), secure and encrypted database connections, token-based authentication for APIs and system integrations, and secure API communications with authentication keys and access controls.",
            "Access Controls: Role-based access control (RBAC) based on the principle of least privilege, multi-factor authentication (MFA) for administrative access, restricted access to production systems, and logging and monitoring of access activities.",
            "Operational Safeguards: Regular security reviews and vulnerability assessments, periodic penetration testing (annually or bi-annually), secure backup, retention, and disaster recovery procedures, and internal security awareness and training for employees."
        ],
        content: "Access to Personally Identifiable Information (PII) such as name, phone number, email address, and address is restricted to authorized personnel only. Admin portal access is controlled through role-based permissions. While we strive to use commercially acceptable means to protect personal data, no method of transmission over the Internet or method of electronic storage is completely secure. Therefore, we cannot guarantee absolute security. Users are responsible for maintaining the confidentiality of their account credentials and should notify us immediately of any suspected unauthorized activity."
    },
    {
        number: 6,
        title: "Sharing Your Information",
        intro: "We do not sell or rent your personal data. However, we may share your data with trusted third-party providers who assist us in delivering services such as hosting, email communication, notifications, analytics, and reviews. Specific sharing scenarios include:",
        points: [
            "Sharing with Service Providers (RFQ Visibility): When a customer submits a Request for Quote (RFQ), Inchaa may share required request details with relevant Service Providers so they can review the request and submit quotations. This may include customer name (or profile name), contact details (phone/email as applicable), address/location, service requirements and notes, and attachments (if provided).",
            "Admin Portal Access (Operational Use): Authorized Inchaa admin users may access customer and Service Provider details through the admin portal for verification, approvals, and account review processes, platform operations and support activities, dispute handling and fraud prevention, and compliance, monitoring, and enforcement of platform policies. Admin access is restricted to authorized roles only."
        ],
        content: "These third parties are contractually required to protect your data and use it only for delivering services to Inchaa."
    },
    {
        number: 7,
        title: "Cookies and Tracking Technologies",
        content: "We use cookies and similar technologies to improve your experience on our app. You can manage your cookie preferences through your device settings."
    },
    {
        number: 8,
        title: "Your Rights",
        content: "You have the right to access, update, or delete the personal information we hold about you. For any data-related requests, please contact us at support@inchaa.com."
    },
    {
        number: 9,
        title: "Data Retention",
        content: "We retain personal information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements."
    },
    {
        number: 10,
        title: "Changes to This Policy",
        content: "We may update this Privacy Policy from time to time. Any changes will be posted here with the updated \"Last Updated\" date."
    },
    {
        number: 11,
        title: "Contact Us",
        content: "If you have any questions about this Privacy Policy or your data, please contact us at: ",
        email: "support@inchaa.com"
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
                                 Last updated: 26 Jan 2026
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
