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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50
                     text-gray-700 border border-gray-200
                     font-semibold text-base active:scale-95 transition-all no-underline
                     shadow-sm"
        >
          ← {t("home", lang)}
        </Link>
      </div>

      {/* Page Title */}
      <div className="text-center space-y-4 mb-10">
        <div className="flex justify-center">
          <Image
            src="/flag.png"
            alt="American Flag"
            width={96}
            height={64}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#e87c3a]">
          {lang === "en"
            ? "U.S. Citizenship Civics Test Exemptions"
            : lang === "ml"
            ? "യു.എസ്. പൗരത്വ സിവിക്സ് ടെസ്റ്റ് ഇളവുകൾ"
            : lang === "gu" ? "યુ.એસ. નાગરિકતા સિવિક્સ ટેસ્ટ છૂટ" : "Các trường hợp miễn thi quốc tịch Hoa Kỳ"}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {lang === "en"
            ? "If you meet any of these rules, you do NOT need to take the English language test."
            : lang === "ml"
            ? "ഈ നിയമങ്ങളിൽ ഏതെങ്കിലും നിങ്ങൾക്ക് ബാധകമാണെങ്കിൽ, ഇംഗ്ലീഷ് ഭാഷാ ടെസ്റ്റ് എടുക്കേണ്ടതില്ല."
            : lang === "gu" ? "જો તમે આમાંથી કોઈ પણ નિયમ પૂરો કરો છો, તો તમારે અંગ્રેજી ભાષાનો ટેસ્ટ આપવાની જરૂર નથી." : "Nếu bạn đáp ứng bất kỳ quy tắc nào trong số này, bạn KHÔNG cần thi tiếng Anh."}
        </p>
      </div>

      <div className="space-y-6">
        {/* 50/20 Rule */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✅</span>
            <h2 className="text-2xl font-bold text-gray-900">
              {lang === "en" ? "50/20 Rule" : lang === "ml" ? "50/20 നിയമം" : lang === "gu" ? "50/20 નિયમ" : "Quy tắc 50/20"}
            </h2>
          </div>
          <div className="space-y-3 text-base text-gray-700 mb-4">
            <p>
              {lang === "en"
                ? "You are 50 years old or older, AND"
                : lang === "ml"
                ? "നിങ്ങൾക്ക് 50 വയസ്സോ അതിൽ കൂടുതലോ ഉണ്ട്, കൂടാതെ"
                : lang === "gu" ? "તમે 50 વર્ષ કે તેથી વધુ ઉંમરના છો, અને" : "Bạn từ 50 tuổi trở lên, VÀ"}
            </p>
            <p>
              {lang === "en"
                ? "You have been a lawful permanent resident (Green Card holder) for 20 years or more."
                : lang === "ml"
                ? "നിങ്ങൾ 20 വർഷമോ അതിൽ കൂടുതലോ ആയി നിയമാനുസൃത സ്ഥിര താമസക്കാരനാണ് (ഗ്രീൻ കാർഡ് ഉടമ)."
                : lang === "gu" ? "તમે 20 વર્ષ કે તેથી વધુ સમયથી કાયદેસર કાયમી નિવાસી (ગ્રીન કાર્ડ ધારક) છો." : "Bạn đã là thường trú nhân hợp pháp (có Thẻ Xanh) từ 20 năm trở lên."}
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm font-bold text-blue-900 mb-2">
              {lang === "en" ? "What this means:" : lang === "ml" ? "ഇതിന്റെ അർത്ഥം:" : lang === "gu" ? "આનો અર્થ:" : "Điều này có nghĩa là:"}
            </p>
            <div className="space-y-1.5 text-sm text-blue-800">
              <p>→ {lang === "en" ? "You do NOT have to take the English test." : lang === "ml" ? "ഇംഗ്ലീഷ് ടെസ്റ്റ് എടുക്കേണ്ടതില്ല." : lang === "gu" ? "તમારે અંગ્રેજી ટેસ્ટ આપવાની જરૂર નથી." : "Bạn KHÔNG phải thi tiếng Anh."}</p>
              <p>→ {lang === "en" ? "You still must take the civics test, but you may take it in your language with your own interpreter." : lang === "ml" ? "സിവിക്സ് ടെസ്റ്റ് എടുക്കണം, പക്ഷേ മലയാളത്തിൽ നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി എടുക്കാം." : lang === "gu" ? "સિવિક્સ ટેસ્ટ હજુ આપવી પડશે, પરંતુ તમે તમારી ભાષામાં તમારા પોતાના દુભાષિયા સાથે આપી શકો છો." : "Bạn vẫn phải thi quốc tịch, nhưng có thể thi bằng ngôn ngữ của mình với phiên dịch viên riêng."}</p>
            </div>
          </div>
        </div>

        {/* 55/15 Rule */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✅</span>
            <h2 className="text-2xl font-bold text-gray-900">
              {lang === "en" ? "55/15 Rule" : lang === "ml" ? "55/15 നിയമം" : lang === "gu" ? "55/15 નિયમ" : "Quy tắc 55/15"}
            </h2>
          </div>
          <div className="space-y-3 text-base text-gray-700 mb-4">
            <p>
              {lang === "en"
                ? "You are 55 years old or older, AND"
                : lang === "ml"
                ? "നിങ്ങൾക്ക് 55 വയസ്സോ അതിൽ കൂടുതലോ ഉണ്ട്, കൂടാതെ"
                : lang === "gu" ? "તમે 55 વર્ષ કે તેથી વધુ ઉંમરના છો, અને" : "Bạn từ 55 tuổi trở lên, VÀ"}
            </p>
            <p>
              {lang === "en"
                ? "You have been a lawful permanent resident for 15 years or more."
                : lang === "ml"
                ? "നിങ്ങൾ 15 വർഷമോ അതിൽ കൂടുതലോ ആയി നിയമാനുസൃത സ്ഥിര താമസക്കാരനാണ്."
                : lang === "gu" ? "તમે 15 વર્ષ કે તેથી વધુ સમયથી કાયદેસર કાયમી નિવાસી છો." : "Bạn đã là thường trú nhân hợp pháp từ 15 năm trở lên."}
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
            <p className="text-sm font-bold text-purple-900 mb-2">
              {lang === "en" ? "What this means:" : lang === "ml" ? "ഇതിന്റെ അർത്ഥം:" : lang === "gu" ? "આનો અર્થ:" : "Điều này có nghĩa là:"}
            </p>
            <div className="space-y-1.5 text-sm text-purple-800">
              <p>→ {lang === "en" ? "Same as above. Exempt from English test." : lang === "ml" ? "മുകളിൽ പറഞ്ഞതുപോലെ. ഇംഗ്ലീഷ് ടെസ്റ്റിൽ നിന്ന് ഒഴിവ്." : lang === "gu" ? "ઉપર જણાવ્યા પ્રમાણે. અંગ્રેજી ટેસ્ટમાંથી છૂટ." : "Giống như trên. Được miễn thi tiếng Anh."}</p>
              <p>→ {lang === "en" ? "Civics test in your language with your own interpreter." : lang === "ml" ? "സിവിക്സ് ടെസ്റ്റ് നിങ്ങളുടെ ഭാഷയിൽ, നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി." : lang === "gu" ? "તમારી ભાષામાં તમારા પોતાના દુભાષિયા સાથે સિવિક્સ ટેસ્ટ." : "Thi quốc tịch bằng ngôn ngữ của bạn với phiên dịch viên riêng."}</p>
            </div>
          </div>
        </div>

        {/* 65/20 Rule */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✅</span>
            <h2 className="text-2xl font-bold text-gray-900">
              {lang === "en"
                ? '65/20 "Special Consideration"'
                : lang === "ml"
                ? '65/20 "പ്രത്യേക പരിഗണന"'
                : '65/20 "વિશેષ વિચારણા"'}
            </h2>
          </div>
          <div className="space-y-3 text-base text-gray-700 mb-4">
            <p>
              {lang === "en"
                ? "You are 65 years old or older, AND"
                : lang === "ml"
                ? "നിങ്ങൾക്ക് 65 വയസ്സോ അതിൽ കൂടുതലോ ഉണ്ട്, കൂടാതെ"
                : lang === "gu" ? "તમે 65 વર્ષ કે તેથી વધુ ઉંમરના છો, અને" : "Bạn từ 65 tuổi trở lên, VÀ"}
            </p>
            <p>
              {lang === "en"
                ? "You have been a lawful permanent resident for 20+ years."
                : lang === "ml"
                ? "നിങ്ങൾ 20+ വർഷമായി നിയമാനുസൃത സ്ഥിര താമസക്കാരനാണ്."
                : lang === "gu" ? "તમે 20+ વર્ષથી કાયદેસર કાયમી નિવાસી છો." : "Bạn đã là thường trú nhân hợp pháp từ 20+ năm."}
            </p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="text-sm font-bold text-amber-900 mb-2">
              {lang === "en" ? "What this means:" : lang === "ml" ? "ഇതിന്റെ അർത്ഥം:" : lang === "gu" ? "આનો અર્થ:" : "Điều này có nghĩa là:"}
            </p>
            <div className="space-y-1.5 text-sm text-amber-800">
              <p>→ {lang === "en" ? "Civics test in your language with your own interpreter." : lang === "ml" ? "സിവിക്സ് ടെസ്റ്റ് നിങ്ങളുടെ ഭാഷയിൽ, നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി." : lang === "gu" ? "તમારી ભાષામાં તમારા પોતાના દુભાષિયા સાથે સિવિક્સ ટેસ્ટ." : "Thi quốc tịch bằng ngôn ngữ của bạn với phiên dịch viên riêng."}</p>
              <p>→ {lang === "en" ? "You may be given a simplified set of questions (fewer to study)." : lang === "ml" ? "ലളിതമാക്കിയ ചോദ്യങ്ങൾ ലഭിച്ചേക്കാം (പഠിക്കാൻ കുറവ്)." : lang === "gu" ? "તમને સરળ પ્રશ્નોનો સમૂહ મળી શકે (અભ્યાસ કરવા ઓછા)." : "Bạn có thể được cho một bộ câu hỏi đơn giản hơn (ít hơn để học)."}</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-200 shadow-md">
          <h3 className="text-xl font-bold text-green-900 text-center mb-5">
            {lang === "en"
              ? "📋 In All Cases Above:"
              : lang === "ml"
              ? "📋 മുകളിലെ എല്ലാ സാഹചര്യങ്ങളിലും:"
              : lang === "gu" ? "📋 ઉપરના બધા કેસોમાં:" : "📋 Trong tất cả các trường hợp trên:"}
          </h3>
          <div className="space-y-3 text-base text-green-800">
            <p className="flex items-start gap-3">
              <span className="flex-shrink-0 text-xl">✔️</span>
              <span>
                {lang === "en"
                  ? "You do NOT need to take the English language test"
                  : lang === "ml"
                  ? "ഇംഗ്ലീഷ് ഭാഷാ ടെസ്റ്റ് എടുക്കേണ്ടതില്ല"
                  : lang === "gu" ? "તમારે અંગ્રેજી ભાષાનો ટેસ્ટ આપવાની જરૂર નથી" : "Bạn KHÔNG cần thi tiếng Anh"}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="flex-shrink-0 text-xl">✔️</span>
              <span>
                {lang === "en"
                  ? "You still MUST take the civics test"
                  : lang === "ml"
                  ? "സിവിക്സ് ടെസ്റ്റ് എടുക്കണം"
                  : lang === "gu" ? "તમારે હજુ પણ સિવિક્સ ટેસ્ટ આપવી પડશે" : "Bạn vẫn PHẢI thi quốc tịch"}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="flex-shrink-0 text-xl">✔️</span>
              <span>
                {lang === "en"
                  ? "You CAN take the civics test in your language with your own interpreter at the naturalization interview"
                  : lang === "ml"
                  ? "നാച്ചുറലൈസേഷൻ ഇന്റർവ്യൂവിൽ നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി മലയാളത്തിൽ സിവിക്സ് ടെസ്റ്റ് എടുക്കാം"
                  : lang === "gu" ? "તમે નેચરલાઇઝેશન ઇન્ટરવ્યૂમાં તમારા પોતાના દુભાષિયા સાથે તમારી ભાષામાં સિવિક્સ ટેસ્ટ આપી શકો છો" : "Bạn CÓ THỂ thi quốc tịch bằng ngôn ngữ của mình với phiên dịch viên riêng tại buổi phỏng vấn nhập tịch"}
              </span>
            </p>
          </div>
        </div>

        {/* Encouragement */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 text-center space-y-5 border border-orange-200 shadow-lg">
          <p className="text-xl font-bold text-gray-900">
            {lang === "en"
              ? "🌟 This app helps you study all the civics questions in your language!"
              : lang === "ml"
              ? "🌟 ഈ ആപ്പ് മലയാളത്തിൽ എല്ലാ സിവിക്സ് ചോദ്യങ്ങളും പഠിക്കാൻ സഹായിക്കുന്നു!"
              : lang === "gu" ? "🌟 આ એપ તમને તમારી ભાષામાં બધા સિવિક્સ પ્રશ્નોનો અભ્યાસ કરવામાં મદદ કરે છે!" : "🌟 Ứng dụng này giúp bạn học tất cả câu hỏi quốc tịch bằng ngôn ngữ của bạn!"}
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-[#e87c3a] hover:bg-[#d66d2d] text-white
                       text-lg font-bold rounded-xl px-10 py-4 shadow-lg shadow-orange-200
                       transition-all active:scale-[0.97] no-underline"
          >
            {lang === "en" ? "📝 Start Studying Now" : lang === "ml" ? "📝 ഇപ്പോൾ പഠനം ആരംഭിക്കുക" : lang === "gu" ? "📝 હવે અભ્યાસ શરૂ કરો" : "📝 Bắt đầu học ngay"}
          </Link>
        </div>
      </div>
    </div>
  );
}
