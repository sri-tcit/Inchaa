"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const APP_URL = "https://inchaa.com/app";

function getUtmUrl(medium: string, campaign: string) {
  return `${APP_URL}?utm_source=website&utm_medium=${medium}&utm_campaign=${campaign}`;
}

const BASE_CLASSES =
  "inline-flex items-center bg-yellow text-white rounded-lg hover:brightness-95 transition-all duration-150";

const SIZE_CLASSES = {
  sm: "text-sm font-semibold px-5 py-2.5",
  md: "text-sm font-bold px-7 py-3.5",
  lg: "text-base font-bold px-10 py-4",
};

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
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
  }, []);

  const handleClick = useCallback(() => {
    if (isMobile) {
      window.location.href = getUtmUrl("cta", campaign);
    } else {
      setShowModal(true);
    }
  }, [isMobile, campaign]);

  const buttonClass =
    variant === "unstyled"
      ? className
      : `${BASE_CLASSES} ${SIZE_CLASSES[size]} ${className}`.trim();

  return (
    <>
      <button onClick={handleClick} className={buttonClass}>
        {children}
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-bg-card border border-ui-border rounded-lg p-8 max-w-sm w-full mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-text-muted hover:text-text-body transition-colors duration-150"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-text-body text-lg font-semibold">
              Post Your Project on the Inchaa App
            </h3>

            <div className="mt-6 mx-auto w-[180px] h-[180px] rounded-lg bg-bg-interactive flex items-center justify-center border border-ui-border">
              <span className="text-text-muted text-xs">QR Code</span>
            </div>

            <p className="mt-4 text-text-muted text-sm leading-relaxed">
              Scan the QR code using your phone camera to download the app and receive quotes.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
