"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useIsEmbedded } from "@/lib/hooks";

const deleteAccountSections = [
    {
        number: 1,
        title: "Introduction",
        content: "This page provides information about how to delete your Inchaa account. Account deletion is a permanent action that will remove your access to the platform and delete your personal data in accordance with our Privacy Policy. Please read this information carefully before proceeding with account deletion."
    },
    {
        number: 2,
        title: "How to Delete Your Account",
        intro: "To delete your Inchaa account, follow these steps:",
        points: [
            "Open the Inchaa mobile app on your device",
            "Navigate to Account settings",
            "Select \"Delete Account\" from the account options",
            "Review the information about account deletion",
            "Confirm your request to delete the account"
        ],
        content: "Account deletion must be initiated through the mobile app. This web page provides information only and cannot be used to delete your account."
    },
    {
        number: 3,
        title: "Verification Process",
        content: "For security purposes, account deletion requires Email OTP (One-Time Password) verification. After you confirm your deletion request in the app, you will receive an email with a verification code. You must enter this code to complete the account deletion process. This verification step helps ensure that only the account owner can delete the account."
    },
    {
        number: 4,
        title: "What Happens When You Delete",
        intro: "When you delete your account, the following will occur:",
        points: [
            "Your account will be permanently deactivated and you will lose access to all Inchaa services",
            "Your profile information, including name, email, phone number, and address will be deleted",
            "Your account history, including past RFQs (Requests for Quote) and quotations, will be removed",
            "You will no longer receive notifications or communications from Inchaa",
            "Any active projects or ongoing communications with Service Providers will be terminated"
        ]
    },
    {
        number: 5,
        title: "Data Retention",
        content: "While we will delete your personal information and account data, some information may be retained for legal, regulatory, or compliance purposes as required by law. This may include transaction records, dispute resolution records, or information necessary to comply with legal obligations. Any retained data will be handled in accordance with our Privacy Policy and applicable laws of the United Arab Emirates."
    },
    {
        number: 6,
        title: "Irreversible Action",
        content: "Account deletion is permanent and cannot be undone. Once your account is deleted and the verification process is completed, you will not be able to recover your account, profile information, or any associated data. If you wish to use Inchaa services again in the future, you will need to create a new account with a different phone number."
    },
    {
        number: 7,
        title: "Before You Delete",
        intro: "Before proceeding with account deletion, please consider the following:",
        points: [
            "Download or save any important information, documents, or data you may need from your account",
            "Complete or cancel any active Requests for Quote (RFQs) or ongoing projects",
            "Resolve any pending disputes or issues with Service Providers",
            "Cancel any active subscriptions or services associated with your account",
            "Ensure you have alternative contact methods for any Service Providers you were working with",
            "Note that you will need to use a different phone number if you wish to create a new account in the future"
        ]
    },
    {
        number: 8,
        title: "Contact Support",
        content: "If you have questions about account deletion, need assistance with the process, or wish to discuss alternatives to account deletion, please contact our support team at ",
        email: "support@inchaa.com"
    }
];

export default function DeleteAccount() {
    const isEmbedded = useIsEmbedded();

    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20">
            {!isEmbedded && <Navbar />}
            
            <div className={`${isEmbedded ? 'pt-20' : 'pt-32'} pb-20 px-4 md:px-6 bg-[#F8F9FB] relative before:content-[''] before:fixed before:top-0 before:left-0 before:w-[300px] before:h-[482px] before:bg-[url('/assets/left-overlay.png')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:fixed after:top-0 after:right-0 after:w-[230px] after:h-[482px] after:bg-[url('/assets/right-overlay.png')] after:bg-no-repeat after:bg-center after:bg-contain`}>
                <div className="container mx-auto max-w-4xl">
                <div className="pb-[40px]">
                            <h1 className="text-[#1D2030] text-center font-poppins text-[34px] font-bold leading-[130%] pb-[8px]">
                                Delete <span className="bg-gradient-to-r from-[#39F] via-[#3040E8] to-[#8C3CDD] bg-clip-text text-transparent font-poppins text-[34px] font-bold leading-[130%]">Account</span>
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
                            {deleteAccountSections.map((section, idx) => (
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
