"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: "Find Contractors", href: "/contractors/" },
  { label: "Find Engineers", href: "/engineers/" },
  { label: "Find Consultants", href: "/consultants/" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-navy transition-shadow duration-200",
          scrolled && "shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        )}
      >
        <div className="max-w-[1320px] mx-auto px-4 md:px-6 h-[56px] flex items-center justify-between">
          {/* Left: logo + nav links + Post Your Project */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center z-50 relative">
              <Image
                src="/assets/incha-logo.svg"
                alt="Inchaa"
                width={110}
                height={22}
                className="h-[22px] w-auto brightness-0 invert"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}

              <div className="w-px h-5 bg-white/20" />

              <Link
                href="/post-project"
                className="text-sm font-semibold text-white hover:text-yellow transition-colors duration-150"
              >
                Post Your Project
              </Link>
            </div>
          </div>

          {/* Right: Sign In + Join as Professional */}
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="hidden md:block text-sm font-medium text-white/70 hover:text-white transition-colors duration-150"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              className="hidden md:flex items-center bg-yellow text-navy text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-95 transition-all duration-150"
            >
              Join as a Professional
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-white relative z-50"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden fixed inset-0 bg-navy z-40 transition-opacity duration-200",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="pt-[72px] px-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/70 hover:text-white py-3 border-b border-white/10 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/post-project"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-white py-3 border-b border-white/10"
          >
            Post Your Project
          </Link>
          <Link
            href="/signin"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-white/70 hover:text-white py-3 border-b border-white/10 transition-colors duration-150"
          >
            Sign In
          </Link>
          <Link
            href="/join"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center bg-yellow text-navy text-sm font-semibold px-4 py-3 rounded-lg"
          >
            Join as a Professional
          </Link>
        </div>
      </div>
    </>
  );
}
