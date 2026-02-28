"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export default function Header() {
  const { lang, toggleLang, mounted } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-blue-200 shadow-sm">
      <div className="max-w-xl mx-auto flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3">
        <Link
          href="/"
          className="text-base sm:text-xl font-bold text-primary no-underline flex items-center gap-1.5 min-w-0"
        >
          <Image
            src="/flag.png"
            alt="American Flag"
            width={24}
            height={24}
            className="rounded-sm flex-shrink-0 sm:w-7 sm:h-7"
          />
          <span className="truncate">
            {lang === "en" ? "Maniama's Helper" : "മണിയമ്മയുടെ ഹെൽപ്പർ"}
          </span>
        </Link>

        {mounted && (
          <button
            onClick={toggleLang}
            className="flex-shrink-0 flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold
                       border-2 border-primary text-primary bg-blue-50
                       hover:bg-primary hover:text-white
                       active:scale-95 transition-all min-h-[44px]"
            aria-label="Toggle language"
          >
            {lang === "en" ? "മലയാളം" : "EN"}
          </button>
        )}
      </div>
    </header>
  );
}
