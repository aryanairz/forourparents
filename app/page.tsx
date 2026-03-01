"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { getCurrentUser } from "@/lib/storage";

export default function HomePage() {
  const { lang, mounted } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!getCurrentUser());
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center pt-2 sm:pt-4 pb-2 space-y-3">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="For Our Parents"
            width={96}
            height={96}
            className="rounded-2xl shadow-lg sm:w-28 sm:h-28"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          {t("heroTagline", lang)}
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-sm mx-auto leading-relaxed">
          {t("heroDescription", lang)}
        </p>
      </div>

      {/* Primary CTA buttons */}
      <div className="space-y-3">
        <Link
          href="/quiz"
          className="block w-full min-h-[64px] sm:min-h-[72px] bg-primary hover:bg-primary-dark text-white
                     text-lg sm:text-xl font-bold rounded-2xl shadow-lg
                     flex items-center justify-center gap-2.5 px-6 py-4
                     transition-all active:scale-[0.97] no-underline text-center"
        >
          📝 {t("askQuestions", lang)}
        </Link>

        <Link
          href="/practice"
          className="block w-full min-h-[64px] sm:min-h-[72px] bg-white hover:bg-gray-50 text-gray-900
                     text-lg sm:text-xl font-bold rounded-2xl shadow-md
                     border-2 border-gray-200
                     flex items-center justify-center gap-2.5 px-6 py-4
                     transition-all active:scale-[0.97] no-underline text-center"
        >
          🎯 {t("practice", lang)}
        </Link>
      </div>

      {/* Secondary actions row */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/mistakes"
          className="min-h-[56px] bg-white hover:bg-gray-50 text-gray-700
                     text-base font-semibold rounded-xl shadow-sm
                     border border-gray-200
                     flex items-center justify-center gap-2 px-4 py-3
                     transition-all active:scale-[0.97] no-underline text-center"
        >
          🔄 {t("reviewMistakes", lang)}
        </Link>
        <Link
          href="/eligibility"
          className="min-h-[56px] bg-white hover:bg-gray-50 text-gray-700
                     text-base font-semibold rounded-xl shadow-sm
                     border border-gray-200
                     flex items-center justify-center gap-2 px-4 py-3
                     transition-all active:scale-[0.97] no-underline text-center"
        >
          <Image src="/flag.png" alt="USA Flag" width={22} height={15} className="rounded-sm flex-shrink-0" />
          {t("eligibility", lang)}
        </Link>
        {isLoggedIn && (
          <Link
            href="/dashboard"
            className="col-span-2 min-h-[56px] bg-white hover:bg-gray-50 text-gray-700
                       text-base font-semibold rounded-xl shadow-sm
                       border border-gray-200
                       flex items-center justify-center gap-2 px-4 py-3
                       transition-all active:scale-[0.97] no-underline text-center"
          >
            📊 {t("viewDashboard", lang)}
          </Link>
        )}
      </div>

      {/* Eligibility snapshot */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-3">
        <h2 className="text-lg font-bold text-gray-900 text-center">
          <span className="flex items-center justify-center gap-2">
            <Image src="/flag.png" alt="USA Flag" width={26} height={18} className="rounded-sm" />
            {lang === "en" ? "Who Is This For?" : "ഇത് ആർക്കാണ്?"}
          </span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
          {lang === "en"
            ? "If you are 50+ years old and have held a Green Card for 15–20+ years, you can take the civics test in Malayalam with your own interpreter. No English test needed!"
            : "നിങ്ങൾക്ക് 50+ വയസ്സ് ഉണ്ടെങ്കിലും 15–20+ വർഷമായി ഗ്രീൻ കാർഡ് ഉടമയാണെങ്കിലും, സിവിക്സ് ടെസ്റ്റ് മലയാളത്തിൽ നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി എടുക്കാം. ഇംഗ്ലീഷ് ടെസ്റ്റ് ആവശ്യമില്ല!"}
        </p>
        <div className="flex justify-center">
          <Link
            href="/eligibility"
            className="text-primary font-semibold text-sm hover:underline no-underline"
          >
            {lang === "en" ? "Learn more →" : "കൂടുതൽ അറിയുക →"}
          </Link>
        </div>
      </div>

      {/* Login / Account prompt */}
      {!isLoggedIn && (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center space-y-3">
          <p className="text-base text-gray-600">
            {lang === "en"
              ? "Create a free account to track your progress across devices."
              : "ഉപകരണങ്ങളിൽ ഉടനീളം നിങ്ങളുടെ പുരോഗതി ട്രാക്ക് ചെയ്യാൻ ഒരു സൗജന്യ അക്കൗണ്ട് സൃഷ്ടിക്കുക."}
          </p>
          <Link
            href="/login"
            className="inline-block min-h-[48px] bg-gray-900 hover:bg-gray-800 text-white
                       text-base font-semibold rounded-xl px-8 py-3
                       transition-all active:scale-[0.97] no-underline"
          >
            {t("login", lang)} / {t("signup", lang)}
          </Link>
        </div>
      )}

      {/* Language tip */}
      <div className="bg-blue-50 rounded-xl p-4 text-center">
        <p className="text-sm text-blue-700">
          {lang === "en" ? (
            <>
              Switch to <strong>മലയാളം</strong> anytime using the button at the top
            </>
          ) : (
            <>
              മുകളിലുള്ള ബട്ടൺ ഉപയോഗിച്ച് എപ്പോൾ വേണമെങ്കിലും{" "}
              <strong>English</strong>-ലേക്ക് മാറാം
            </>
          )}
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center pb-4 space-y-1">
        <p className="text-xs text-gray-400">
          {lang === "en" ? "Built with ❤️ by" : "❤️ ഉപയോഗിച്ച് നിർമ്മിച്ചത്"}{" "}
          <span className="font-semibold text-gray-500">For Our Parents</span>
        </p>
        <p className="text-xs text-gray-400">
          {lang === "en"
            ? "Helping Malayalam-speaking elders become U.S. citizens"
            : "മലയാളം സംസാരിക്കുന്ന മുതിർന്നവരെ യു.എസ്. പൗരന്മാരാകാൻ സഹായിക്കുന്നു"}
        </p>
      </footer>
    </div>
  );
}
