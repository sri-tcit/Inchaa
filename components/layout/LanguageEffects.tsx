"use client";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageEffects() {
  const { lang } = useLanguage();
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
