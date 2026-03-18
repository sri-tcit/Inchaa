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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const linkClass = "text-sm font-semibold text-black/70 hover:text-black transition-colors duration-150";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/[0.06]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">
          {/* Left: logo + nav links */}
          <div className="flex items-center gap-10 h-full">
            <Link href="/" className="flex items-center z-50 relative h-full">
              <Image
                src="/assets/incha-logo.svg"
                alt="Inchaa"
                width={110}
                height={22}
                className="h-[22px] w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-7 translate-y-1.5">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: lang switcher + Sign In + Join */}
          <div className="flex items-center gap-5 translate-y-1.5">
            {/* Language switcher */}
            <div className="hidden md:flex items-center rounded-lg overflow-hidden border border-black/20">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold transition-colors duration-150",
                  lang === "en"
                    ? "bg-yellow text-white"
                    : "text-black/60 hover:text-black"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold transition-colors duration-150",
                  lang === "ar"
                    ? "bg-yellow text-white"
                    : "text-black/60 hover:text-black"
                )}
              >
                AR
              </button>
            </div>
            <div className="hidden md:block w-px h-4 bg-black/40" />

            <Link href="/sign-in" className={linkClass}>
              Sign In
            </Link>

            <Link
              href="http://inchaa-staging-fe.s3-website.me-central-1.amazonaws.com/service-provider"
              className="hidden md:flex items-center bg-yellow text-white text-sm font-bold px-4 py-2 rounded-lg hover:brightness-95 transition-all duration-150"
            >
              Join as a Professional
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 relative z-50 text-black"
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
            href="/sign-in"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-white/70 hover:text-white py-3.5 border-b border-white/10 transition-colors duration-150"
          >
            Sign In
          </Link>

          {/* Mobile language switcher */}
          <div className="py-3.5 border-b border-white/10 flex items-center gap-2">
            <span className="text-white/50 text-sm">Language:</span>
            <div className="flex items-center border border-black/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold transition-colors duration-150",
                  lang === "en" ? "bg-yellow text-white" : "text-black/60 hover:text-black"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={cn(
                  "px-3 py-1.5 text-xs font-bold transition-colors duration-150",
                  lang === "ar" ? "bg-yellow text-white" : "text-black/60 hover:text-black"
                )}
              >
                AR
              </button>
            </div>
          </div>

          <Link
            href="http://inchaa-staging-fe.s3-website.me-central-1.amazonaws.com/service-provider"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 flex items-center justify-center bg-yellow text-white text-sm font-bold px-4 py-3 rounded-lg"
          >
            Join as a Professional
          </Link>
        </div>
      </div>
    </>
  );
}
