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

export function Navbar2() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [lang, setLang]             = useState<"en" | "ar">("en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-charcoal/10"
            : "bg-white/80 backdrop-blur-md border-charcoal/[0.06]"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between gap-8">

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
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13.5px] font-medium text-charcoal/65 hover:text-charcoal px-4 py-2 rounded-lg hover:bg-charcoal/[0.06] transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language toggle */}
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "text-[12px] font-bold px-2 py-1 rounded transition-colors duration-150",
                  lang === "en" ? "text-charcoal" : "text-charcoal/35 hover:text-charcoal/70"
                )}
              >
                EN
              </button>
              <span className="text-charcoal/25 text-xs">/</span>
              <button
                onClick={() => setLang("ar")}
                className={cn(
                  "text-[12px] font-bold px-2 py-1 rounded transition-colors duration-150",
                  lang === "ar" ? "text-charcoal" : "text-charcoal/35 hover:text-charcoal/70"
                )}
              >
                AR
              </button>
            </div>

            <div className="w-px h-4 bg-charcoal/15" />

            <Link
              href="https://portal.inchaa.com/login"
              className="text-[13.5px] font-medium text-charcoal/65 hover:text-charcoal transition-colors duration-150"
            >
              Sign In
            </Link>

            <Link
              href="/join/"
              className="text-[13.5px] font-bold bg-yellow text-white px-5 py-2 rounded-lg hover:brightness-95 transition-all duration-150"
            >
              Join as a Professional
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal relative z-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-navy z-40 transition-all duration-200",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="pt-[84px] px-6 pb-8 flex flex-col h-full">
          <div className="flex flex-col divide-y divide-white/08">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white py-4 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://portal.inchaa.com/login"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-white/70 hover:text-white py-4 transition-colors duration-150"
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
                    ? "bg-yellow text-navy border-yellow"
                    : "text-white/40 border-white/20 hover:border-white/40"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/join/"
            onClick={() => setMobileOpen(false)}
            className="mt-auto w-full flex items-center justify-center bg-yellow text-navy text-sm font-bold px-4 py-3.5 rounded-lg"
          >
            Join as a Professional
          </Link>
        </div>
      </div>
    </>
  );
}
