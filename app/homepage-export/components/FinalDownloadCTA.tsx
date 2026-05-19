"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import Image from "next/image";

export function FinalDownloadCTA() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-[url('/assets/smarter-bg.png')] content-center bg-center bg-no-repeat min-h-[400px] md:min-h-[572px]">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-[55px_64px]">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 z-10 relative"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight pb-[16px] mb-0">
                                Start Building <br /> Smarter with <span className="text-[#FFFFFF]">Inchaa</span>
                            </h2>

                            <p className="text-[#323232] font-poppins text-[16px] font-normal leading-[150%] mb-[0px] pb-[34px]">
                                Your complete platform for managing projects, quotes and professionals.
                            </p>

                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                                <div>
                                    <h4 className="text-[#323232] font-poppins text-[16px] font-semibold leading-[130%]  mb-[0px] pb-[8px]">
                                        Download Now
                                    </h4>

                                    <div className="flex gap-4 mb-[34px] flex-wrap lg:flex-row flex-col">
                                        <Image src="/assets/apple-store.png" alt="Apple Store" width={186} height={56} className="w-[140px] md:w-[186px] h-auto" />
                                        <Image src="/assets/google-play.png" alt="Google Play" width={186} height={56} className="w-[140px] md:w-[186px] h-auto" />
                                    </div>

                                    <div className="flex flex-wrap gap-4 md:gap-[24px]">

                                        <div className="flex items-center gap-2">
                                            <div className="flex w-[40px] h-[40px] justify-center items-center rounded-[12px] bg-[rgba(60,73,221,0.4)]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M12.5007 1.6665H5.00065C4.55862 1.6665 4.1347 1.8421 3.82214 2.15466C3.50958 2.46722 3.33398 2.89114 3.33398 3.33317V16.6665C3.33398 17.1085 3.50958 17.5325 3.82214 17.845C4.1347 18.1576 4.55862 18.3332 5.00065 18.3332H15.0007C15.4427 18.3332 15.8666 18.1576 16.1792 17.845C16.4917 17.5325 16.6673 17.1085 16.6673 16.6665V5.83317L12.5007 1.6665Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.666 1.6665V4.99984C11.666 5.44186 11.8416 5.86579 12.1542 6.17835C12.4667 6.49091 12.8907 6.6665 13.3327 6.6665H16.666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.33268 7.5H6.66602" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.3327 10.8335H6.66602" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.3327 14.1665H6.66602" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-[#323232] font-poppins text-[14px] font-normal leading-[150%]">Request Service</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="flex w-[40px] h-[40px] justify-center items-center rounded-[12px] bg-[rgba(60,73,221,0.4)]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M12.5007 1.6665H5.00065C4.55862 1.6665 4.1347 1.8421 3.82214 2.15466C3.50958 2.46722 3.33398 2.89114 3.33398 3.33317V16.6665C3.33398 17.1085 3.50958 17.5325 3.82214 17.845C4.1347 18.1576 4.55862 18.3332 5.00065 18.3332H15.0007C15.4427 18.3332 15.8666 18.1576 16.1792 17.845C16.4917 17.5325 16.6673 17.1085 16.6673 16.6665V5.83317L12.5007 1.6665Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.666 1.6665V4.99984C11.666 5.44186 11.8416 5.86579 12.1542 6.17835C12.4667 6.49091 12.8907 6.6665 13.3327 6.6665H16.666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.33268 7.5H6.66602" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.3327 10.8335H6.66602" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.3327 14.1665H6.66602" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-[#323232] font-poppins text-[14px] font-normal leading-[150%]">Compare Quotes</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="flex w-[40px] h-[40px] justify-center items-center rounded-[12px] bg-[rgba(60,73,221,0.4)]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M12.5007 1.6665H5.00065C4.55862 1.6665 4.1347 1.8421 3.82214 2.15466C3.50958 2.46722 3.33398 2.89114 3.33398 3.33317V16.6665C3.33398 17.1085 3.50958 17.5325 3.82214 17.845C4.1347 18.1576 4.55862 18.3332 5.00065 18.3332H15.0007C15.4427 18.3332 15.8666 18.1576 16.1792 17.845C16.4917 17.5325 16.6673 17.1085 16.6673 16.6665V5.83317L12.5007 1.6665Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.666 1.6665V4.99984C11.666 5.44186 11.8416 5.86579 12.1542 6.17835C12.4667 6.49091 12.8907 6.6665 13.3327 6.6665H16.666" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.33268 7.5H6.66602" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.3327 10.8335H6.66602" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.3327 14.1665H6.66602" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-[#323232] font-poppins text-[14px] font-normal leading-[150%]">Track Progress</p>
                                        </div>
                                    </div>


                                </div>

                                <div className="sm:block lg:hidden">
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="relative md:absolute bottom-0 md:right-[50px] lg:right-[120px] w-[280px] md:w-[470px] h-[320px] md:h-[520px]  lg:hidden sm:block"
                                    >
                                        <Image
                                            src="/assets/smarter-phone.png"
                                            alt="Phone"
                                            fill
                                            className="object-contain object-bottom"
                                        />
                                    </motion.div>
                                </div>
                            </div>




                        </motion.div>

                        <div className="h-full flex items-end justify-center md:items-end md:justify-end z-0 mt-8 md:mt-0 relative md:static hidden lg:block">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative md:absolute bottom-0 md:right-[50px] lg:right-[120px] w-[280px] md:w-[470px] h-[320px] md:h-[520px]"
                            >
                                <Image
                                    src="/assets/smarter-phone.png"
                                    alt="Phone"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
