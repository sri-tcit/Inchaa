"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Contractors", href: "/contractors/" },
  { label: "Engineers",   href: "/engineers/" },
  { label: "Consultants", href: "/consultants/" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [lang, setLang]             = useState<"en" | "ar">("en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.08)]"
            : "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/assets/incha-logo.svg"
              alt="Inchaa"
              width={100}
              height={20}
              className="h-[20px] w-auto"
            />
          </Link>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13.5px] font-medium text-[#374151] hover:text-black transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language toggle */}
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "text-[12px] font-bold px-2 py-1 rounded transition-colors duration-150",
                  lang === "en" ? "text-black" : "text-black/35 hover:text-black/60"
                )}
              >
                EN
              </button>
              <span className="text-black/20 text-xs">/</span>
              <button
                onClick={() => setLang("ar")}
                className={cn(
                  "text-[12px] font-bold px-2 py-1 rounded transition-colors duration-150",
                  lang === "ar" ? "text-black" : "text-black/35 hover:text-black/60"
                )}
              >
                AR
              </button>
            </div>

            <div className="w-px h-4 bg-black/15" />

            <Link
              href="https://portal.inchaa.com/login"
              className="text-[13.5px] font-medium text-[#374151] hover:text-black transition-colors duration-150"
            >
              Sign In
            </Link>

            <a
              href="https://portal.inchaa.com/signup"
              className="text-[13.5px] font-bold bg-navy text-white px-5 py-2 rounded-lg hover:bg-[#252c42] transition-colors duration-150"
            >
              Join as a Professional
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-black relative z-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-white z-40 transition-all duration-200",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="pt-[84px] px-6 pb-8 flex flex-col h-full">
          <div className="flex flex-col divide-y divide-black/08">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[#111] py-4 hover:text-black/60 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://portal.inchaa.com/login"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[#111] py-4 hover:text-black/60 transition-colors duration-150"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {(["en", "ar"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "text-xs font-bold px-3 py-1.5 rounded-md border transition-colors duration-150 uppercase",
                  lang === l
                    ? "bg-navy text-white border-navy"
                    : "text-black/50 border-black/20 hover:border-black/40"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="https://portal.inchaa.com/signup"
            onClick={() => setMobileOpen(false)}
            className="mt-auto w-full flex items-center justify-center bg-navy text-white text-sm font-bold px-4 py-3.5 rounded-lg"
          >
            Join as a Professional
          </a>
        </div>
      </div>
    </>
  );
}
