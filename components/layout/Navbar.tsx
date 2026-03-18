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
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-gradient-to-b from-black/50 to-transparent"
        )}
      >
        <div className="max-w-[1320px] mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">
          {/* Left: logo + nav links */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center z-50 relative">
              <Image
                src="/assets/incha-logo.svg"
                alt="Inchaa"
                width={110}
                height={22}
                className="h-[22px] w-auto brightness-0 invert"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/75 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Post Project + lang switcher + Join */}
          <div className="flex items-center gap-5">
            <Link
              href="/post-project"
              className="hidden lg:block text-sm font-medium text-white/75 hover:text-white transition-colors duration-150"
            >
              Post Your Project
            </Link>
            <div className="hidden lg:block w-px h-4 bg-white/20" />

            {/* Language switcher */}
            <div className="hidden md:flex items-center border border-white/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold transition-colors duration-150",
                  lang === "en"
                    ? "bg-white text-navy"
                    : "text-white/60 hover:text-white"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold transition-colors duration-150",
                  lang === "ar"
                    ? "bg-white text-navy"
                    : "text-white/60 hover:text-white"
                )}
              >
                AR
              </button>
            </div>

            <Link
              href="http://inchaa-staging-fe.s3-website.me-central-1.amazonaws.com/service-provider"
              className="hidden md:flex items-center bg-yellow text-navy text-sm font-bold px-4 py-2 rounded-lg hover:brightness-95 transition-all duration-150"
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

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-navy z-40 transition-opacity duration-200",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="pt-[80px] px-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/70 hover:text-white py-3.5 border-b border-white/10 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/post-project"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-white/70 hover:text-white py-3.5 border-b border-white/10 transition-colors duration-150"
          >
            Post Your Project
          </Link>

          {/* Mobile language switcher */}
          <div className="py-3.5 border-b border-white/10 flex items-center gap-2">
            <span className="text-white/50 text-sm">Language:</span>
            <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold transition-colors duration-150",
                  lang === "en" ? "bg-white text-navy" : "text-white/60 hover:text-white"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold transition-colors duration-150",
                  lang === "ar" ? "bg-white text-navy" : "text-white/60 hover:text-white"
                )}
              >
                AR
              </button>
            </div>
          </div>

          <Link
            href="http://inchaa-staging-fe.s3-website.me-central-1.amazonaws.com/service-provider"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 flex items-center justify-center bg-yellow text-navy text-sm font-bold px-4 py-3 rounded-lg"
          >
            Join as a Professional
          </Link>
        </div>
      </div>
    </>
  );
}
