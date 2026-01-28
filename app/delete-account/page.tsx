"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useIsEmbedded } from "@/lib/hooks";
import { User, Image as ImageIcon, FileText, MessageSquare, Bookmark } from "lucide-react";

const dataCategories = [
    {
        icon: User,
        title: "Account & Identity Data",
        description: "Your profile details, contact information, and account credentials."
    },
    {
        icon: ImageIcon,
        title: "Media & Uploaded Files",
        description: "Profile photos, project images, and any files you've shared."
    },
    {
        icon: FileText,
        title: "Service & Transaction History",
        description: "All quotations, service requests, posted ads, and related records."
    },
    {
        icon: MessageSquare,
        title: "Messages & Interactions",
        description: "All chat history and communications with contractors, engineers, or customers."
    },
    {
        icon: Bookmark,
        title: "Saved Preferences & Customizations",
        description: "Bookmarks, saved searches, and personalized settings."
    }
];

export default function DeleteAccount() {
    const isEmbedded = useIsEmbedded();

    return (
        <>
            <Head>
                <title>Delete Your Inchaa Account – Data Removal & Process</title>
                <meta 
                    name="description" 
                    content="Learn how to delete your Inchaa account, what data is removed, and what happens after deletion, including security and data retention details." 
                />
                <meta property="og:title" content="Delete Your Inchaa Account – Data Removal & Process" />
                <meta 
                    property="og:description" 
                    content="Step-by-step instructions for deleting your Inchaa account, including OTP verification, permanent data deletion, and important notes before you proceed." 
                />
                <meta property="og:url" content="https://inchaa.com/delete-account" />
                <meta property="og:site_name" content="Inchaa" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Delete Your Inchaa Account – Data Removal & Process" />
                <meta 
                    name="twitter:description" 
                    content="Understand how to delete your Inchaa account safely and what data will be erased from the platform." 
                />
            </Head>
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
                        <div className="p-[30px] space-y-8">
                            {/* Main Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="text-[#1D2030] font-poppins text-[28px] md:text-[32px] font-bold leading-[130%] mb-6">
                                    Delete Your Account
                                </h2>
                            </motion.div>

                            {/* How to Delete Steps */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.05 }}
                                className="space-y-4"
                            >
                                <h3 className="text-[#1D2030] font-poppins text-[20px] md:text-[24px] font-bold leading-[130%]">
                                    How to Delete Your Account
                                </h3>
                                <p className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%] mb-4">
                                    To delete your Inchaa account, follow these steps:
                                </p>
                                <ol className="space-y-3 ml-6 list-decimal">
                                    <li className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                        Open the Inchaa mobile app on your device
                                    </li>
                                    <li className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                        Navigate to Account settings
                                    </li>
                                    <li className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                        Select "Delete Account" from the account options
                                    </li>
                                    <li className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                        Review the information about account deletion
                                    </li>
                                    <li className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                        Confirm your request to delete the account
                                    </li>
                                </ol>
                                <p className="text-[#76797B] font-poppins text-[14px] font-normal leading-[150%] italic mt-4">
                                    Note: Account deletion must be initiated through the mobile app. This web page provides information only and cannot be used to delete your account.
                                </p>
                            </motion.div>

                            {/* Red Warning Box */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.15 }}
                                className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8"
                            >
                                <p className="text-red-700 font-poppins text-[16px] md:text-[18px] font-bold leading-[130%] mb-4">
                                    This action is permanent and cannot be undone.
                                </p>
                                <p className="text-[#1D2030] font-poppins text-[16px] font-normal leading-[150%] mb-6">
                                    Once your account is deleted, all your data will be permanently erased from the app, including:
                                </p>
                                
                                {/* Data Categories List */}
                                <div className="space-y-4">
                                    {dataCategories.map((category, idx) => {
                                        const IconComponent = category.icon;
                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.25 + idx * 0.1 }}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                                                    <IconComponent className="w-5 h-5 text-red-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-[#1D2030] font-poppins text-[16px] font-semibold leading-[130%] mb-1">
                                                        {category.title}
                                                    </h3>
                                                    <p className="text-[#76797B] font-poppins text-[14px] font-normal leading-[150%]">
                                                        {category.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* OTP Verification Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="space-y-4"
                            >
                                <h3 className="text-[#1D2030] font-poppins text-[20px] md:text-[24px] font-bold leading-[130%]">
                                    Verification Process
                                </h3>
                                <p className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                    To confirm, we will send a One-Time Password (OTP) to your registered email address. Please enter the OTP to proceed with account deletion. This verification step helps ensure that only the account owner can delete the account.
                                </p>
                                <p className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                    Account deletion must be initiated through the mobile app. This web page provides information only and cannot be used to delete your account.
                                </p>
                            </motion.div>

                            {/* Additional Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className="space-y-4 pt-4 border-t border-gray-200"
                            >
                                <h3 className="text-[#1D2030] font-poppins text-[20px] md:text-[24px] font-bold leading-[130%]">
                                    Important Notes
                                </h3>
                                <ul className="space-y-3 ml-6">
                                    <li className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%] list-disc">
                                        Account deletion is permanent and cannot be undone. Once completed, you will not be able to recover your account or any associated data.
                                    </li>
                                    <li className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%] list-disc">
                                        If you wish to use Inchaa services again in the future, you will need to create a new account with a different phone number.
                                    </li>
                                    <li className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%] list-disc">
                                        Some information may be retained for legal, regulatory, or compliance purposes as required by law, in accordance with our Privacy Policy.
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Contact Support */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className="pt-4 border-t border-gray-200"
                            >
                                <p className="text-[#76797B] font-poppins text-[16px] font-normal leading-[150%]">
                                    If you have questions about account deletion, need assistance with the process, or wish to discuss alternatives, please contact our support team at{" "}
                                    <a 
                                        href="mailto:support@inchaa.com"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = "mailto:support@inchaa.com";
                                        }}
                                        className="text-[#3C49DD] hover:underline cursor-pointer"
                                    >
                                        support@inchaa.com
                                    </a>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {!isEmbedded && <Footer />}
        </main>
        </>
    );
}
