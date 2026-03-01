"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export default function EligibilityPage() {
  const { lang, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Link
          href="/"
          className="min-h-[44px] px-4 py-2 rounded-lg bg-gray-100 text-gray-700
                     font-semibold text-base active:scale-95 transition-all no-underline"
        >
          ← {t("home", lang)}
        </Link>
        <h1 className="text-lg font-bold text-primary flex-1 text-right">
          {t("eligibility", lang)}
        </h1>
      </div>

      {/* Page Title */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <Image
            src="/flag.png"
            alt="American Flag"
            width={80}
            height={54}
            className="rounded-xl shadow-md"
            priority
          />
        </div>
        <h2 className="text-q-heading sm:text-q-large font-bold text-primary">
          {lang === "en"
            ? "U.S. Citizenship Civics Test Exemptions"
            : "യു.എസ്. പൗരത്വ സിവിക്സ് ടെസ്റ്റ് ഇളവുകൾ"}
        </h2>
        <p className="text-base text-gray-600">
          {lang === "en"
            ? "If you meet any of these rules, you do NOT need to take the English language test."
            : "ഈ നിയമങ്ങളിൽ ഏതെങ്കിലും നിങ്ങൾക്ക് ബാധകമാണെങ്കിൽ, ഇംഗ്ലീഷ് ഭാഷാ ടെസ്റ്റ് എടുക്കേണ്ടതില്ല."}
        </p>
      </div>

      {/* 50/20 Rule */}
      <div className="bg-blue-50 rounded-2xl p-4 sm:p-5 border-2 border-blue-200 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✅</span>
          <h3 className="text-xl font-bold text-blue-900">
            {lang === "en" ? "50/20 Rule" : "50/20 നിയമം"}
          </h3>
        </div>
        <div className="space-y-2 text-base text-blue-800">
          <p>
            {lang === "en"
              ? "You are 50 years old or older, AND"
              : "നിങ്ങൾക്ക് 50 വയസ്സോ അതിൽ കൂടുതലോ ഉണ്ട്, കൂടാതെ"}
          </p>
          <p>
            {lang === "en"
              ? "You have been a lawful permanent resident (Green Card holder) for 20 years or more."
              : "നിങ്ങൾ 20 വർഷമോ അതിൽ കൂടുതലോ ആയി നിയമാനുസൃത സ്ഥിര താമസക്കാരനാണ് (ഗ്രീൻ കാർഡ് ഉടമ)."}
          </p>
        </div>
        <div className="bg-white/60 rounded-xl p-3 space-y-1">
          <p className="text-sm font-semibold text-blue-700">
            {lang === "en" ? "What this means:" : "ഇതിന്റെ അർത്ഥം:"}
          </p>
          <p className="text-sm text-blue-700">
            {lang === "en"
              ? "→ You do NOT have to take the English test."
              : "→ ഇംഗ്ലീഷ് ടെസ്റ്റ് എടുക്കേണ്ടതില്ല."}
          </p>
          <p className="text-sm text-blue-700">
            {lang === "en"
              ? "→ You still must take the civics test, but you may take it in Malayalam with your own interpreter."
              : "→ സിവിക്സ് ടെസ്റ്റ് എടുക്കണം, പക്ഷേ മലയാളത്തിൽ നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി എടുക്കാം."}
          </p>
        </div>
      </div>

      {/* 55/15 Rule */}
      <div className="bg-purple-50 rounded-2xl p-4 sm:p-5 border-2 border-purple-200 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✅</span>
          <h3 className="text-xl font-bold text-purple-900">
            {lang === "en" ? "55/15 Rule" : "55/15 നിയമം"}
          </h3>
        </div>
        <div className="space-y-2 text-base text-purple-800">
          <p>
            {lang === "en"
              ? "You are 55 years old or older, AND"
              : "നിങ്ങൾക്ക് 55 വയസ്സോ അതിൽ കൂടുതലോ ഉണ്ട്, കൂടാതെ"}
          </p>
          <p>
            {lang === "en"
              ? "You have been a lawful permanent resident for 15 years or more."
              : "നിങ്ങൾ 15 വർഷമോ അതിൽ കൂടുതലോ ആയി നിയമാനുസൃത സ്ഥിര താമസക്കാരനാണ്."}
          </p>
        </div>
        <div className="bg-white/60 rounded-xl p-3 space-y-1">
          <p className="text-sm font-semibold text-purple-700">
            {lang === "en" ? "What this means:" : "ഇതിന്റെ അർത്ഥം:"}
          </p>
          <p className="text-sm text-purple-700">
            {lang === "en"
              ? "→ Same as above. Exempt from English test."
              : "→ മുകളിൽ പറഞ്ഞതുപോലെ. ഇംഗ്ലീഷ് ടെസ്റ്റിൽ നിന്ന് ഒഴിവ്."}
          </p>
          <p className="text-sm text-purple-700">
            {lang === "en"
              ? "→ Civics test in your language with your own interpreter."
              : "→ സിവിക്സ് ടെസ്റ്റ് നിങ്ങളുടെ ഭാഷയിൽ, നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി."}
          </p>
        </div>
      </div>

      {/* 65/20 Rule */}
      <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border-2 border-amber-200 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✅</span>
          <h3 className="text-xl font-bold text-amber-900">
            {lang === "en"
              ? '65/20 "Special Consideration"'
              : '65/20 "പ്രത്യേക പരിഗണന"'}
          </h3>
        </div>
        <div className="space-y-2 text-base text-amber-800">
          <p>
            {lang === "en"
              ? "You are 65 years old or older, AND"
              : "നിങ്ങൾക്ക് 65 വയസ്സോ അതിൽ കൂടുതലോ ഉണ്ട്, കൂടാതെ"}
          </p>
          <p>
            {lang === "en"
              ? "You have been a lawful permanent resident for 20+ years."
              : "നിങ്ങൾ 20+ വർഷമായി നിയമാനുസൃത സ്ഥിര താമസക്കാരനാണ്."}
          </p>
        </div>
        <div className="bg-white/60 rounded-xl p-3 space-y-1">
          <p className="text-sm font-semibold text-amber-700">
            {lang === "en" ? "What this means:" : "ഇതിന്റെ അർത്ഥം:"}
          </p>
          <p className="text-sm text-amber-700">
            {lang === "en"
              ? "→ Civics test in your language with your own interpreter."
              : "→ സിവിക്സ് ടെസ്റ്റ് നിങ്ങളുടെ ഭാഷയിൽ, നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി."}
          </p>
          <p className="text-sm text-amber-700">
            {lang === "en"
              ? "→ You may be given a simplified set of questions (fewer to study)."
              : "→ ലളിതമാക്കിയ ചോദ്യങ്ങൾ ലഭിച്ചേക്കാം (പഠിക്കാൻ കുറവ്)."}
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 rounded-2xl p-5 border-2 border-green-200 space-y-3">
        <h3 className="text-lg font-bold text-green-900 text-center">
          {lang === "en"
            ? "📋 In All Cases Above:"
            : "📋 മുകളിലെ എല്ലാ സാഹചര്യങ്ങളിലും:"}
        </h3>
        <div className="space-y-2 text-base text-green-800">
          <p className="flex items-start gap-2">
            <span className="flex-shrink-0">✔️</span>
            <span>
              {lang === "en"
                ? "You do NOT need to take the English language test"
                : "ഇംഗ്ലീഷ് ഭാഷാ ടെസ്റ്റ് എടുക്കേണ്ടതില്ല"}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="flex-shrink-0">✔️</span>
            <span>
              {lang === "en"
                ? "You still MUST take the civics test"
                : "സിവിക്സ് ടെസ്റ്റ് എടുക്കണം"}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="flex-shrink-0">✔️</span>
            <span>
              {lang === "en"
                ? "You CAN take the civics test in Malayalam with your own interpreter at the naturalization interview"
                : "നാച്ചുറലൈസേഷൻ ഇന്റർവ്യൂവിൽ നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി മലയാളത്തിൽ സിവിക്സ് ടെസ്റ്റ് എടുക്കാം"}
            </span>
          </p>
        </div>
      </div>

      {/* Encouragement */}
      <div className="bg-yellow-50 rounded-2xl p-5 border-2 border-yellow-200 text-center space-y-3">
        <p className="text-lg font-bold text-yellow-800">
          {lang === "en"
            ? "🌟 This app helps you study all the civics questions in Malayalam!"
            : "🌟 ഈ ആപ്പ് മലയാളത്തിൽ എല്ലാ സിവിക്സ് ചോദ്യങ്ങളും പഠിക്കാൻ സഹായിക്കുന്നു!"}
        </p>
        <Link
          href="/quiz"
          className="inline-block bg-primary hover:bg-primary-dark text-white
                     text-lg font-bold rounded-xl px-8 py-4
                     transition-all active:scale-[0.97] no-underline"
        >
          {lang === "en" ? "📝 Start Studying Now" : "📝 ഇപ്പോൾ പഠനം ആരംഭിക്കുക"}
        </Link>
      </div>
    </div>
  );
}
