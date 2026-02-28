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
    <div className="space-y-6">
      {/* Greeting for Maniamma */}
      <div className="text-center py-4 sm:py-6 space-y-2 sm:space-y-3">
        <div className="flex justify-center">
          <Image
            src="/flag.png"
            alt="American Flag"
            width={80}
            height={54}
            className="rounded-lg shadow-md sm:w-24 sm:h-16"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-q-large md:text-4xl font-bold text-primary">
          {t("greeting", lang)}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          {t("homeSubtitle", lang)}
        </p>
      </div>

      {/* Warm encouragement card */}
      <div className="bg-yellow-50 rounded-2xl p-4 sm:p-5 border-2 border-yellow-200 text-center">
        <p className="text-base sm:text-lg text-yellow-800 font-medium leading-relaxed">
          {t("homeHelp", lang)}
        </p>
      </div>

      {/* Primary actions */}
      <div className="space-y-3 sm:space-y-4">
        <Link
          href="/quiz"
          className="block w-full min-h-[60px] sm:min-h-[72px] bg-primary hover:bg-primary-dark text-white
                     text-lg sm:text-xl md:text-2xl font-bold rounded-2xl shadow-lg
                     flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-4 sm:py-5
                     transition-all active:scale-[0.97] no-underline text-center"
        >
          📝 {t("askQuestions", lang)}
        </Link>

        <Link
          href="/practice"
          className="block w-full min-h-[60px] sm:min-h-[72px] bg-white hover:bg-blue-50 text-primary
                     text-lg sm:text-xl md:text-2xl font-bold rounded-2xl shadow-lg
                     border-2 border-primary
                     flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-4 sm:py-5
                     transition-all active:scale-[0.97] no-underline text-center"
        >
          🎯 {t("practice", lang)}
        </Link>
      </div>

      {/* Secondary actions */}
      <div className="pt-2 space-y-3">
        {isLoggedIn && (
          <Link
            href="/dashboard"
            className="block w-full min-h-[56px] bg-purple-50 hover:bg-purple-100 text-purple-700
                       text-lg font-semibold rounded-xl
                       border border-purple-200
                       flex items-center justify-center gap-2 px-5 py-4
                       transition-all active:scale-[0.97] no-underline text-center"
          >
            📊 {t("viewDashboard", lang)}
          </Link>
        )}

        <Link
          href="/mistakes"
          className="block w-full min-h-[56px] bg-warm-dark hover:bg-orange-100 text-gray-700
                     text-lg font-semibold rounded-xl
                     border border-orange-200
                     flex items-center justify-center gap-2 px-5 py-4
                     transition-all active:scale-[0.97] no-underline text-center"
        >
          🔄 {t("reviewMistakes", lang)}
        </Link>
      </div>

      {/* Personal note */}
      <div className="bg-green-50 rounded-2xl p-5 border border-green-200 text-center">
        <p className="text-base text-green-800">
          {lang === "en" ? (
            <>
              🌟 Maniamma, you can switch to <strong>മലയാളം</strong> anytime
              using the button at the top!
            </>
          ) : (
            <>
              🌟 മണിയമ്മേ, മുകളിലുള്ള ബട്ടൺ ഉപയോഗിച്ച് എപ്പോൾ വേണമെങ്കിലും{" "}
              <strong>English</strong>-ലേക്ക് മാറാം!
            </>
          )}
        </p>
      </div>
    </div>
  );
}
