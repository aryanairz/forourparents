"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Lang } from "@/data/questions";
import { getStoredLanguage, setStoredLanguage } from "@/lib/storage";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  mounted: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLangState(getStoredLanguage());
    setMounted(true);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    setStoredLanguage(next);
  };

  const toggleLang = () => {
    const order: Lang[] = ["en", "ml", "gu", "vi", "tl"];
    const idx = order.indexOf(lang);
    const next = order[(idx + 1) % order.length];
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
