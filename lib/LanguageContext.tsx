"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Lang } from "@/data/questions";
import { getStoredLanguage, setStoredLanguage } from "@/lib/storage";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggleLang: () => {},
  mounted: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLang(getStoredLanguage());
    setMounted(true);
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "ml" : "en";
    setLang(next);
    setStoredLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
