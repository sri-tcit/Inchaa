"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image"

export function CTASection() {
    return (
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-[2.5rem] bg-gray-900 overflow-hidden px-6 py-16 md:px-16 md:py-24 text-center md:text-left">

                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[80px] rounded-full translate-y-1/3 -translate-x-1/3" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Get discovered. Win more projects. Work smarter.
                            </h2>
                            <p className="text-gray-400 text-lg max-w-xl">
                                Join the fastest growing construction network. Whether you are a pro or a homeowner, Inchaa makes it easy.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-blue-600/30 cursor-pointer">
                                    Get Started Now
                                </button> */}
                            </div>
                        </div>

                        <div className="relative lg:h-[400px] flex items-center justify-center">
                            {/* Laptop Mockup */}
                            <div className="relative w-full max-w-lg aspect-video bg-gray-800 rounded-xl border-[4px] border-gray-700 shadow-2xl flex flex-col overflow-hidden">
                                <div className="h-6 bg-gray-800 border-b border-gray-700 flex items-center px-2 space-x-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                </div>
                                <div className="flex-1 bg-white p-4 relative">
                                    <div className="absolute inset-0 bg-blue-50/50" />
                                    <div className="relative z-10 grid grid-cols-3 gap-4 h-full">
                                        <div className="col-span-1 bg-white rounded shadow-sm h-full" />
                                        <div className="col-span-2 bg-white rounded shadow-sm h-full flex flex-col gap-2">
                                            <div className="h-1/3 bg-blue-100 rounded" />
                                            <div className="h-2/3 bg-gray-50 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
