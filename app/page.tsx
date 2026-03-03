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
        <div className="w-10 h-10 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="-mx-4 sm:-mx-5">
      {/* ── Hero Section ── */}
      <section className="relative mb-8">
        {/* Decorative hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-12 left-[10%] text-2xl text-rose-300">💕</div>
          <div className="absolute top-32 right-[15%] text-xl text-rose-300">💕</div>
          <div className="absolute bottom-20 left-[20%] text-lg text-rose-300">💕</div>
          <div className="absolute top-24 right-[8%] text-sm text-rose-300">💕</div>
        </div>

        {/* Main hero container with rounded background */}
        <div className="relative bg-gradient-to-br from-[#FDEFEB] via-[#FFF5F0] to-[#FFF0EB] 
                        px-8 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left — text */}
            <div className="flex-1 text-center md:text-left space-y-5 max-w-2xl">
              <h1 
                className={lang === "en" 
                  ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]" 
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-normal leading-[1.6]"
                }
                style={lang === "ml" ? { lineHeight: '1.6' } : undefined}
              >
                {lang === "en" ? (
                  <>Help Your Parents Pass the U.S. Citizenship Test</>
                ) : (
                  <>നിങ്ങളുടെ മാതാപിതാക്കളെ യു.എസ്. പൗരത്വ ടെസ്റ്റ് പാസാക്കാൻ സഹായിക്കുക</>
                )}
              </h1>
              <p 
                className={lang === "en" 
                  ? "text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0" 
                  : "text-base sm:text-lg text-gray-600 leading-[1.8] max-w-lg mx-auto md:mx-0"
                }
                style={lang === "ml" ? { lineHeight: '1.8' } : undefined}
              >
                {lang === "en"
                  ? "Practice the civics test in Malayalam. Built for the 50/20, 55/15, and 65/20 citizenship rules under U.S. immigration law."
                  : "മലയാളത്തിൽ സിവിക്സ് ടെസ്റ്റ് പരിശീലിക്കുക. യു.എസ്. ഇമിഗ്രേഷൻ നിയമത്തിലെ 50/20, 55/15, 65/20 പൗരത്വ നിയമങ്ങൾക്കായി നിർമ്മിച്ചത്."}
              </p>
              <div className="pt-2">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 min-h-[52px] sm:min-h-[56px]
                             bg-[#e87c3a] hover:bg-[#d66d2d] text-white
                             text-lg sm:text-xl font-bold rounded-xl shadow-lg shadow-orange-200
                             px-10 py-3.5 transition-all active:scale-[0.97] no-underline"
                >
                  {lang === "en" ? "Practice in Malayalam" : "മലയാളത്തിൽ പരിശീലിക്കുക"}
                </Link>
              </div>
            </div>

            {/* Right — hero image */}
            <div className="flex-shrink-0 w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] relative">
              <Image
                src="/hero.png"
                alt="Elderly couple"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Actions ── */}
      <section className="pt-8 space-y-4 px-6 sm:px-8 mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/quiz"
            className="min-h-[72px] bg-white hover:bg-orange-50 text-gray-800
                       text-[15px] font-semibold rounded-2xl shadow-sm
                       border border-gray-200
                       flex items-center justify-center gap-2 px-4 py-4
                       transition-all active:scale-[0.97] no-underline text-center"
          >
            📝 {lang === "en" ? "Practice Test" : "പ്രാക്ടീസ് ടെസ്റ്റ്"}
          </Link>
          <Link
            href="/practice"
            className="min-h-[72px] bg-white hover:bg-orange-50 text-gray-800
                       text-[15px] font-semibold rounded-2xl shadow-sm
                       border border-gray-200
                       flex items-center justify-center gap-2 px-4 py-4
                       transition-all active:scale-[0.97] no-underline text-center"
          >
            🎯 {t("practice", lang)}
          </Link>
          <Link
            href="/mistakes"
            className="min-h-[72px] bg-white hover:bg-orange-50 text-gray-800
                       text-[15px] font-semibold rounded-2xl shadow-sm
                       border border-gray-200
                       flex items-center justify-center gap-2 px-4 py-4
                       transition-all active:scale-[0.97] no-underline text-center"
          >
            🔄 {t("reviewMistakes", lang)}
          </Link>
          <Link
            href="/eligibility"
            className="min-h-[72px] bg-white hover:bg-orange-50 text-gray-800
                       text-[15px] font-semibold rounded-2xl shadow-sm
                       border border-gray-200
                       flex items-center justify-center gap-2 px-4 py-4
                       transition-all active:scale-[0.97] no-underline text-center"
          >
            <Image src="/flag.png" alt="USA Flag" width={22} height={15} className="rounded-sm flex-shrink-0" />
            {lang === "en" ? "Do You Qualify?" : "യോഗ്യത?"}
          </Link>
        </div>
        {isLoggedIn && (
          <Link
            href="/dashboard"
            className="block w-full min-h-[60px] bg-white hover:bg-orange-50 text-gray-800
                       text-[15px] font-semibold rounded-2xl shadow-sm border border-gray-200
                       flex items-center justify-center gap-2 px-4 py-3
                       transition-all active:scale-[0.97] no-underline text-center"
          >
            📊 {t("viewDashboard", lang)}
          </Link>
        )}
      </section>

      {/* ── Who Is This For ── */}
      <section className="pt-8 px-4 sm:px-5 mx-auto max-w-5xl">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3">
          <h2 className="text-lg font-bold text-gray-900 text-center">
            {lang === "en" ? "Who Is This For?" : "ഇത് ആർക്കാണ്?"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
            {lang === "en"
              ? "If you are 50+ years old and have held a Green Card for 15–20+ years, you can take the civics test in Malayalam with your own interpreter. No English test needed!"
              : "നിങ്ങൾക്ക് 50+ വയസ്സ് ഉണ്ടെങ്കിലും 15–20+ വർഷമായി ഗ്രീൻ കാർഡ് ഉടമയാണെങ്കിലും, സിവിക്സ് ടെസ്റ്റ് മലയാളത്തിൽ നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി എടുക്കാം. ഇംഗ്ലീഷ് ടെസ്റ്റ് ആവശ്യമില്ല!"}
          </p>
          <div className="flex justify-center">
            <Link
              href="/eligibility"
              className="text-orange-600 font-semibold text-sm hover:underline no-underline"
            >
              {lang === "en" ? "Learn more →" : "കൂടുതൽ അറിയുക →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sign Up Prompt ── */}
      {!isLoggedIn && (
        <section className="pt-8 px-4 sm:px-5 mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 text-center space-y-3 border border-orange-100">
            <p className="text-base text-gray-700">
              {lang === "en"
                ? "Create a free account to track your progress."
                : "നിങ്ങളുടെ പുരോഗതി ട്രാക്ക് ചെയ്യാൻ ഒരു സൗജന്യ അക്കൗണ്ട് സൃഷ്ടിക്കുക."}
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
        </section>
      )}

      {/* ── Footer ── */}
      <footer className="pt-10 pb-4 text-center space-y-1 px-4 sm:px-5">
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
