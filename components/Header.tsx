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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5">
        {/* Logo */}
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
          <span className="text-base sm:text-lg font-bold truncate">
            For Our Parents
          </span>
        </Link>

        {/* Nav links — hidden on small mobile */}
        <nav className="hidden sm:flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 no-underline transition-colors">
            {lang === "en" ? "Home" : "ഹോം"}
          </Link>
          <Link href="/quiz" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 no-underline transition-colors">
            {lang === "en" ? "Practice Test" : "പ്രാക്ടീസ് ടെസ്റ്റ്"}
          </Link>
          <Link href="/eligibility" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 no-underline transition-colors">
            {lang === "en" ? "Do You Qualify?" : "യോഗ്യത?"}
          </Link>
          <Link href="/help" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 no-underline transition-colors">
            {lang === "en" ? "Help" : "സഹായം"}
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleLang}
              className="flex-shrink-0 px-3 py-2 rounded-lg text-sm font-semibold
                         border border-orange-200 text-orange-700 bg-orange-50
                         hover:bg-orange-100
                         active:scale-95 transition-all min-h-[36px]"
              aria-label="Toggle language"
            >
              {lang === "en" ? "മലയാളം" : "English"}
            </button>
          )}
          {mounted && !isLoggedIn && (
            <Link
              href="/login"
              className="flex-shrink-0 px-3 py-2 rounded-lg text-sm font-semibold
                         bg-orange-500 text-white hover:bg-orange-600
                         active:scale-95 transition-all min-h-[36px] no-underline
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
