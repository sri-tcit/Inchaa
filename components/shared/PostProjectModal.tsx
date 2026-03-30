"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const APP_URL = "https://inchaa.com/app";
const APP_STORE_URL = "https://apps.apple.com/ae/app/inchaa/id6752644267";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.inchaa";

function getUtmUrl(medium: string, campaign: string) {
  return `${APP_URL}?utm_source=website&utm_medium=${medium}&utm_campaign=${campaign}`;
}

function mergeUtmIntoStoreUrl(baseUrl: string, medium: string, campaign: string) {
  const u = new URL(baseUrl);
  u.searchParams.set("utm_source", "website");
  u.searchParams.set("utm_medium", medium);
  u.searchParams.set("utm_campaign", campaign);
  return u.toString();
}

/** iPhone / iPad / iPod, including iPadOS “desktop” Safari (Macintosh + touch). */
function isAppleMobileOrTablet(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return true;
  return (
    navigator.platform === "MacIntel" &&
    typeof navigator.maxTouchPoints === "number" &&
    navigator.maxTouchPoints > 1
  );
}

function isAndroid(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android/i.test(navigator.userAgent);
}

/** Direct store URL for phones/tablets; null → use modal or /app fallback. */
function getNativeStoreUrl(campaign: string): string | null {
  if (isAppleMobileOrTablet()) {
    return mergeUtmIntoStoreUrl(APP_STORE_URL, "cta", campaign);
  }
  if (isAndroid()) {
    return mergeUtmIntoStoreUrl(PLAY_STORE_URL, "cta", campaign);
  }
  return null;
}

const BASE_CLASSES =
  "inline-flex items-center bg-yellow text-white rounded-lg hover:brightness-95 transition-all duration-150";

const SIZE_CLASSES = {
  sm: "text-sm font-semibold px-5 py-2.5",
  md: "text-sm font-bold px-7 py-3.5",
  lg: "text-base font-bold px-10 py-4",
};

const QR_SRC = "/assets/post-project-qr.png";

export function PostProjectButton({
  campaign = "contractors_lp",
  className = "",
  size = "md",
  variant = "button",
  children = "Post Your Project Free",
}: {
  campaign?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "button" | "unstyled";
  children?: React.ReactNode;
}) {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [showModal]);

  const handleClick = useCallback(() => {
    const storeUrl = getNativeStoreUrl(campaign);
    if (storeUrl) {
      window.location.href = storeUrl;
      return;
    }
    if (isMobile) {
      window.location.href = getUtmUrl("cta", campaign);
      return;
    }
    setShowModal(true);
  }, [isMobile, campaign]);

  const buttonClass =
    variant === "unstyled"
      ? className
      : `${BASE_CLASSES} ${SIZE_CLASSES[size]} ${className}`.trim();

  return (
    <>
      <button type="button" onClick={handleClick} className={buttonClass}>
        {children}
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowModal(false)}
          role="presentation"
        >
          <div
            className="relative bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="post-project-app-modal-title"
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-3 end-3 text-mid-grey hover:text-charcoal transition-colors duration-150"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3
              id="post-project-app-modal-title"
              className="text-charcoal text-lg font-semibold font-poppins pe-8"
            >
              {t.common.postProjectAppModalTitle}
            </h3>

            <div className="mt-6 mx-auto w-[200px] h-[200px] relative rounded-lg overflow-hidden border border-[#E5E7EB] bg-white">
              <Image
                src={QR_SRC}
                alt=""
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>

            <p className="mt-4 text-mid-grey text-sm leading-relaxed">
              {t.common.postProjectAppModalSubtitle}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
