"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { getCurrentUser, logoutUser } from "@/lib/storage";
import { t } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Lang } from "@/data/questions";

const langLabels: Record<Lang, string> = {
  en: "English",
  ml: "മലയാളം",
  gu: "ગുજરાતી",
};

export default function Header() {
  const { lang, setLang, mounted } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    setIsLoggedIn(!!user);
    setUserName(user?.firstName || user?.name?.split(" ")[0] || null);
  }, [pathname]);

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    setUserName(null);
    router.push("/");
  };

  const l = (en: string, ml: string, gu: string) =>
    lang === "en" ? en : lang === "ml" ? ml : gu;

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
            {l("Home", "ഹോം", "હોમ")}
          </Link>
          <Link href="/quiz" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 no-underline transition-colors">
            {l("Practice Test", "പ്രാക്ടീസ് ടെസ്റ്റ്", "પ્રેક્ટિસ ટેસ્ટ")}
          </Link>
          <Link href="/eligibility" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 no-underline transition-colors">
            {l("Do You Qualify?", "യോഗ്യത?", "શું તમે લાયક છો?")}
          </Link>
          <Link href="/help" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 no-underline transition-colors">
            {l("Help", "സഹായം", "મદદ")}
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {mounted && (
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="flex-shrink-0 px-3 py-2 rounded-lg text-sm font-semibold
                         border border-orange-200 text-orange-700 bg-orange-50
                         hover:bg-orange-100 cursor-pointer
                         active:scale-95 transition-all min-h-[36px]
                         appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23c2410c%22%20d%3D%22M2%204l4%204%204-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_8px_center] pr-7"
              aria-label="Select language"
            >
              {(Object.keys(langLabels) as Lang[]).map((code) => (
                <option key={code} value={code}>
                  {langLabels[code]}
                </option>
              ))}
            </select>
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
          {mounted && isLoggedIn && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleLogout}
                className="flex-shrink-0 px-3 py-2 rounded-lg text-sm font-semibold
                           border border-orange-300 text-orange-700 bg-orange-50 hover:bg-orange-100
                           active:scale-95 transition-all min-h-[36px]"
              >
                {lang === "en" ? "Log Out" : lang === "ml" ? "ലോഗൗട്ട്" : "લૉગ આઉટ"}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
