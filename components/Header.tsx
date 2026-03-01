"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { getCurrentUser } from "@/lib/storage";
import { t } from "@/lib/i18n";
import { useEffect, useState } from "react";

export default function Header() {
  const { lang, toggleLang, mounted } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!getCurrentUser());
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-xl mx-auto flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3">
        <Link
          href="/"
          className="font-bold text-gray-900 no-underline flex items-center gap-2 min-w-0"
        >
          <Image
            src="/logo.png"
            alt="For Our Parents"
            width={32}
            height={32}
            className="rounded-lg flex-shrink-0"
          />
          <span className="text-base sm:text-lg truncate">
            For Our Parents
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleLang}
              className="flex-shrink-0 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold
                         border border-gray-200 text-gray-600 bg-white
                         hover:bg-gray-50 hover:border-gray-300
                         active:scale-95 transition-all min-h-[40px]"
              aria-label="Toggle language"
            >
              {lang === "en" ? "മലയാളം" : "EN"}
            </button>
          )}
          {mounted && !isLoggedIn && (
            <Link
              href="/login"
              className="flex-shrink-0 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold
                         bg-primary text-white
                         hover:bg-primary-dark
                         active:scale-95 transition-all min-h-[40px] no-underline
                         flex items-center"
            >
              {t("login", lang)}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
