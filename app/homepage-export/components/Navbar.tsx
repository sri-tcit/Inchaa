"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle hash scrolling when page loads with hash in URL
    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const hash = window.location.hash.substring(1); // Remove the #
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [pathname]);

    // Handle body overflow when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        
        // Check if we're on the home page
        const isHomePage = pathname === '/';
        
        if (!isHomePage) {
            // If not on home page, navigate to home with hash, then scroll after navigation
            router.push(`/#${targetId}`);
            
            // Wait for navigation and DOM update, then scroll
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            // If on home page, just scroll to the section
            const element = document.getElementById(targetId);
            if (element) {
                const navbarHeight = 80; // Approximate height of fixed navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        
        // Close mobile menu after clicking a link
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? "bg-white/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-4 md:py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 z-50 relative">
                            <Image
                                src="/assets/incha-logo.svg"
                                alt="Inchaa Logo"
                                width={126}
                                height={24}
                                className="h-6 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link 
                                href="#how-it-works" 
                                onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                                className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors"
                            >
                                How It Works
                            </Link>
                            <Link 
                                href="#features" 
                                onClick={(e) => handleSmoothScroll(e, 'features')}
                                className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors"
                            >
                                Features
                            </Link>
                            <Link 
                                href="#why-inchaa" 
                                onClick={(e) => handleSmoothScroll(e, 'why-inchaa')}
                                className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors"
                            >
                                Why Inchaa
                            </Link>
                            <Link 
                                href="#support" 
                                onClick={(e) => handleSmoothScroll(e, 'support')}
                                className="text-sm font-medium text-[#76797B] hover:text-primary transition-colors"
                            >
                                Support
                            </Link>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3 md:gap-12">
                            <span className="hidden md:block text-sm font-medium text-[#76797B]">Join as Provider</span>
                            <button className="bg-[linear-gradient(108deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] text-white px-3 py-2 md:px-5 md:py-2.5 rounded-[16px] text-xs md:text-sm font-medium transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap">
                                Get the App
                            </button>
                            <button 
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 text-gray-700 relative z-50"
                                aria-label="Toggle mobile menu"
                                aria-expanded={mobileMenuOpen}
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 bg-white transition-all duration-300 ease-in-out z-40",
                    mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
                onClick={(e) => {
                    // Close menu when clicking on overlay (not on menu content)
                    if (e.target === e.currentTarget) {
                        setMobileMenuOpen(false);
                    }
                }}
            >
                {/* Mobile Menu Content */}
                <div className="pt-20 pb-8 px-4 h-full overflow-y-auto">
                    <nav className="flex flex-col gap-1 max-w-md mx-auto">
                        <Link 
                            href="#how-it-works" 
                            onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                            className="text-base font-medium text-[#76797B] hover:text-[#3C49DD] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50"
                        >
                            How It Works
                        </Link>
                        <Link 
                            href="#features" 
                            onClick={(e) => handleSmoothScroll(e, 'features')}
                            className="text-base font-medium text-[#76797B] hover:text-[#3C49DD] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50"
                        >
                            Features
                        </Link>
                        <Link 
                            href="#why-inchaa" 
                            onClick={(e) => handleSmoothScroll(e, 'why-inchaa')}
                            className="text-base font-medium text-[#76797B] hover:text-[#3C49DD] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50"
                        >
                            Why Inchaa
                        </Link>
                        <Link 
                            href="#support" 
                            onClick={(e) => handleSmoothScroll(e, 'support')}
                            className="text-base font-medium text-[#76797B] hover:text-[#3C49DD] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50"
                        >
                            Support
                        </Link>
                        <div className="pt-6 mt-4 border-t border-gray-200">
                            <div className="py-2 px-2">
                                <span className="text-sm font-medium text-[#76797B] block mb-4">Join as Provider</span>
                                <button className="w-full bg-[linear-gradient(108deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] text-white px-4 py-3 rounded-[16px] text-sm font-medium shadow-lg shadow-blue-600/20">
                                    Get the App
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
