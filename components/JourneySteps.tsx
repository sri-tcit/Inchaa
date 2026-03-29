"use client";

import { motion } from "framer-motion";

const steps = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M17.4974 2.33337H6.9974C6.37856 2.33337 5.78506 2.57921 5.34748 3.01679C4.9099 3.45438 4.66406 4.04787 4.66406 4.66671V23.3334C4.66406 23.9522 4.9099 24.5457 5.34748 24.9833C5.78506 25.4209 6.37856 25.6667 6.9974 25.6667H20.9974C21.6162 25.6667 22.2097 25.4209 22.6473 24.9833C23.0849 24.5457 23.3307 23.9522 23.3307 23.3334V8.16671L17.4974 2.33337Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.3359 2.33337V7.00004C16.3359 7.61888 16.5818 8.21237 17.0194 8.64996C17.4569 9.08754 18.0504 9.33337 18.6693 9.33337H23.3359" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.6693 10.5H9.33594" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.6693 15.1666H9.33594" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.6693 19.8334H9.33594" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        title: "Post Your Request",
        description: "Clarify project details with detailed documents."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M11.9974 14.6667C14.9429 14.6667 17.3307 12.2789 17.3307 9.33333C17.3307 6.38781 14.9429 4 11.9974 4C9.05188 4 6.66406 6.38781 6.66406 9.33333C6.66406 12.2789 9.05188 14.6667 11.9974 14.6667Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.66406 28V25.3333C2.66406 23.9188 3.22597 22.5623 4.22616 21.5621C5.22635 20.5619 6.58291 20 7.9974 20H15.9974C17.4119 20 18.7684 20.5619 19.7686 21.5621C20.7688 22.5623 21.3307 23.9188 21.3307 25.3333V28" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M29.3359 28V25.3333C29.3351 24.1516 28.9417 23.0037 28.2178 22.0698C27.4938 21.1358 26.4801 20.4688 25.3359 20.1733" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.3359 4.17334C22.4832 4.46707 23.5 5.13427 24.2261 6.06975C24.9523 7.00523 25.3464 8.15578 25.3464 9.34001C25.3464 10.5242 24.9523 11.6748 24.2261 12.6103C23.5 13.5457 22.4832 14.2129 21.3359 14.5067" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        title: "Get Multiple Quotes",
        description: "Receive competitive quotes from verified contractors."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M18.6641 18.6667L22.1641 9.33337L25.6641 18.6667C24.6491 19.425 23.4241 19.8334 22.1641 19.8334C20.9041 19.8334 19.6791 19.425 18.6641 18.6667Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.33594 18.6667L5.83594 9.33337L9.33594 18.6667C8.32094 19.425 7.09594 19.8334 5.83594 19.8334C4.57594 19.8334 3.35094 19.425 2.33594 18.6667Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.16406 24.5H19.8307" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 3.5V24.5" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 8.16671H5.83333C8.16667 8.16671 11.6667 7.00004 14 5.83337C16.3333 7.00004 19.8333 8.16671 22.1667 8.16671H24.5" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        title: "Compare & Choose",
        description: "Select the best fit based on price and reviews."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M25.6693 14H22.7759C22.2661 13.9989 21.7699 14.1649 21.3632 14.4725C20.9566 14.7801 20.6619 15.2124 20.5243 15.7034L17.7826 25.4567C17.7649 25.5173 17.7281 25.5705 17.6776 25.6084C17.6271 25.6462 17.5657 25.6667 17.5026 25.6667C17.4395 25.6667 17.3781 25.6462 17.3276 25.6084C17.2771 25.5705 17.2403 25.5173 17.2226 25.4567L10.7826 2.54337C10.7649 2.48279 10.7281 2.42957 10.6776 2.39171C10.6271 2.35384 10.5657 2.33337 10.5026 2.33337C10.4395 2.33337 10.3781 2.35384 10.3276 2.39171C10.2771 2.42957 10.2403 2.48279 10.2226 2.54337L7.48094 12.2967C7.34381 12.7857 7.05088 13.2166 6.64661 13.5241C6.24234 13.8315 5.74881 13.9986 5.24094 14H2.33594" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        title: "Manage & Track",
        description: "Track progress and handle payments securely."
    }
]

export function JourneySteps() {
    return (
        <section className="py-12 md:py-20 bg-light-grey/40 border-t border-[#E5E7EB]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E7EB] bg-white shadow-sm max-w-max">
                            <span className="text-mid-grey text-sm">How it works</span>
                        </div>
                    </div>
                    <h2 className="text-navy text-center text-2xl md:text-[34px] font-bold leading-tight tracking-tight pb-4">
                        Your project journey, <span className="text-yellow">made simple</span>
                    </h2>
                    <p className="text-mid-grey text-center text-base leading-relaxed max-w-xl mx-auto">
                        Streamlined steps to get your project from idea to done.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-px bg-[#E5E7EB] -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, idx) => {
                            // const Icon = step.icon;
                            const isLast = idx === steps.length - 1;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    className={`flex flex-col items-center text-center group relative
                                ${!isLast ? "after:hidden md:after:block after:content-[''] after:h-px after:w-[223px] after:bg-[#E5E7EB] after:mt-4 after:top-[18px] after:right-[-123px] after:absolute" : ""}`}
                                >
                                    <div className="flex w-16 h-16 justify-center items-center rounded-xl border-4 border-[#F8F9FB] bg-yellow shadow-sm mb-4">
                                        {/* <Icon className="w-[24px] h-[24px] text-[#FFFFFF]" /> */}
                                        {
                                            step.icon
                                        }
                                    </div>
                                    <h3 className="text-navy text-lg font-bold leading-snug pb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-mid-grey text-sm text-center leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
