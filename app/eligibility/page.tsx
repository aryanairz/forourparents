"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { ArrowLeft, CheckCircle2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

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
    <motion.div
      initial="hidden" animate="show" variants={stagger}
      className="max-w-content mx-auto px-4 sm:px-6 py-6 sm:py-8"
    >
      {/* Back button */}
      <motion.div variants={fadeUp} className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-btn
                     bg-white border border-border text-text-secondary text-[0.9375rem] font-medium
                     hover:border-primary hover:text-primary transition-colors shadow-card no-underline"
        >
          <ArrowLeft size={15} /> {t("home", lang)}
        </Link>
      </motion.div>

      {/* Page Title */}
      <motion.div variants={fadeUp} className="text-center space-y-3 mb-8">
        <div className="flex justify-center">
          <Image src="/flag.png" alt="American Flag" width={80} height={54} className="rounded-card shadow-card" priority />
        </div>
        <h1 className="text-[1.75rem] sm:text-[2rem] font-bold text-text-heading font-serif leading-tight">
          {lang === "en" ? "U.S. Citizenship Civics Test Exemptions"
            : lang === "ml" ? "യു.എസ്. പൗരത്വ സിവിക്സ് ടെസ്റ്റ് ഇളവുകൾ"
            : lang === "gu" ? "યુ.એસ. નાગરિકતા સિવિક્સ ટેસ્ટ છૂટ" : lang === "vi" ? "Các trường hợp miễn thi quốc tịch Hoa Kỳ" : "Mga Exemption sa Pagsusulit sa Civics para sa U.S. Citizenship"}
        </h1>
        <p className="text-[1rem] text-text-secondary max-w-lg mx-auto leading-relaxed">
          {lang === "en" ? "If you meet any of these rules, you do NOT need to take the English language test."
            : lang === "ml" ? "ഈ നിയമങ്ങളിൽ ഏതെങ്കിലും നിങ്ങൾക്ക് ബാധകമാണെങ്കിൽ, ഇംഗ്ലീഷ് ഭാഷാ ടെസ്റ്റ് എടുക്കേണ്ടതില്ല."
            : lang === "gu" ? "જો તમે આમાંથી કોઈ પણ નિયમ પૂરો કરો છો, તો તમારે અંગ્રેજી ભાષાનો ટેસ્ટ આપવાની જરૂર નથી." : lang === "vi" ? "Nếu bạn đáp ứng bất kỳ quy tắc nào trong số này, bạn KHÔNG cần thi tiếng Anh." : "Kung natutugunan mo ang alinman sa mga panuntunang ito, HINDI mo kailangang kumuha ng pagsusulit sa wikang Ingles."}
        </p>
      </motion.div>

      <div className="space-y-4">
        {/* 50/20 Rule */}
        <motion.div variants={fadeUp} className="bg-white rounded-card p-5 sm:p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 size={24} className="text-success flex-shrink-0" />
            <h2 className="text-[1.25rem] font-bold text-text-heading font-serif">
              {lang === "en" ? "50/20 Rule" : lang === "ml" ? "50/20 നിയമം" : lang === "gu" ? "50/20 નિયમ" : lang === "vi" ? "Quy tắc 50/20" : "Panuntunan 50/20"}
            </h2>
          </div>
          <div className="space-y-2 text-[1rem] text-text-body mb-4">
            <p>• {lang === "en" ? "You are 50 years old or older, AND" : lang === "ml" ? "നിങ്ങൾക്ക് 50 വയസ്സോ അതിൽ കൂടുതലോ ഉണ്ട്, കൂടാതെ" : lang === "gu" ? "તમે 50 વર્ષ કે તેથી વધુ ઉંમરના છો, અને" : lang === "vi" ? "Bạn từ 50 tuổi trở lên, VÀ" : "Ikaw ay 50 taong gulang o mas matanda, AT"}</p>
            <p>• {lang === "en" ? "You have been a lawful permanent resident (Green Card holder) for 20 years or more." : lang === "ml" ? "നിങ്ങൾ 20 വർഷമോ അതിൽ കൂടുതലോ ആയി നിയമാനുസൃത സ്ഥിര താമസക്കാരനാണ് (ഗ്രീൻ കാർഡ് ഉടമ)." : lang === "gu" ? "તમે 20 વર્ષ કે તેથી વધુ સમયથી કાયદેસર કાયમી નિવાસી (ગ્રીન કાર્ડ ધારક) છો." : lang === "vi" ? "Bạn đã là thường trú nhân hợp pháp (có Thẻ Xanh) từ 20 năm trở lên." : "Ikaw ay isang legal na permanenteng residente (may Green Card) sa loob ng 20 taon o higit pa."}</p>
          </div>
          <div className="bg-accent-light rounded-card p-4 border border-blue-200">
            <p className="text-[0.8125rem] font-semibold text-accent uppercase tracking-wide mb-2">
              {lang === "en" ? "What this means" : lang === "ml" ? "ഇതിന്റെ അർത്ഥം" : lang === "gu" ? "આનો અર્થ" : lang === "vi" ? "Điều này có nghĩa là" : "Ano ang ibig sabihin nito"}
            </p>
            <div className="space-y-1.5 text-[0.9375rem] text-text-body">
              <p className="flex items-start gap-2"><CheckCircle2 size={15} className="text-success mt-0.5 flex-shrink-0" />
                {lang === "en" ? "You do NOT have to take the English test." : lang === "ml" ? "ഇംഗ്ലീഷ് ടെസ്റ്റ് എടുക്കേണ്ടതില്ല." : lang === "gu" ? "તમારે અંગ્રેજી ટેસ્ટ આપવાની જરૂર નથી." : lang === "vi" ? "Bạn KHÔNG phải thi tiếng Anh." : "HINDI mo kailangang kumuha ng pagsusulit sa English."}
              </p>
              <p className="flex items-start gap-2"><CheckCircle2 size={15} className="text-success mt-0.5 flex-shrink-0" />
                {lang === "en" ? "You still must take the civics test, but you may take it in your language with your own interpreter." : lang === "ml" ? "സിവിക്സ് ടെസ്റ്റ് എടുക്കണം, പക്ഷേ നിങ്ങളുടെ ഭാഷയിൽ സ്വന്തം വ്യാഖ്യാതാവുമായി എടുക്കാം." : lang === "gu" ? "સિવિક્સ ટેસ્ટ આપવી પડશે, પરંતુ તમારી ભાષામાં તમારા પોતાના દુભાષિયા સાથે આપી શકો છો." : lang === "vi" ? "Bạn vẫn phải thi quốc tịch, nhưng có thể thi bằng ngôn ngữ của mình với phiên dịch viên riêng." : "Kailangan mo pa ring kumuha ng pagsusulit sa civics, ngunit maaari mo itong kunin sa iyong wika gamit ang sarili mong interpreter."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 55/15 Rule */}
        <motion.div variants={fadeUp} className="bg-white rounded-card p-5 sm:p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 size={24} className="text-success flex-shrink-0" />
            <h2 className="text-[1.25rem] font-bold text-text-heading font-serif">
              {lang === "en" ? "55/15 Rule" : lang === "ml" ? "55/15 നിയമം" : lang === "gu" ? "55/15 નિયમ" : lang === "vi" ? "Quy tắc 55/15" : "Panuntunan 55/15"}
            </h2>
          </div>
          <div className="space-y-2 text-[1rem] text-text-body mb-4">
            <p>• {lang === "en" ? "You are 55 years old or older, AND" : lang === "ml" ? "നിങ്ങൾക്ക് 55 വയസ്സോ അതിൽ കൂടുതലോ ഉണ്ട്, കൂടാതെ" : lang === "gu" ? "તમે 55 વર્ષ કે તેથી વધુ ઉંમરના છો, અને" : lang === "vi" ? "Bạn từ 55 tuổi trở lên, VÀ" : "Ikaw ay 55 taong gulang o mas matanda, AT"}</p>
            <p>• {lang === "en" ? "You have been a lawful permanent resident for 15 years or more." : lang === "ml" ? "നിങ്ങൾ 15 വർഷമോ അതിൽ കൂടുതലോ ആയി നിയമാനുസൃത സ്ഥിര താമസക്കാരനാണ്." : lang === "gu" ? "તમે 15 વર્ષ કે તેથી વધુ સમયથી કાયદેસર કાયમી નિવાસી છો." : lang === "vi" ? "Bạn đã là thường trú nhân hợp pháp từ 15 năm trở lên." : "Ikaw ay isang legal na permanenteng residente sa loob ng 15 taon o higit pa."}</p>
          </div>
          <div className="bg-accent-light rounded-card p-4 border border-blue-200">
            <p className="text-[0.8125rem] font-semibold text-accent uppercase tracking-wide mb-2">
              {lang === "en" ? "What this means" : lang === "ml" ? "ഇതിന്റെ അർത്ഥം" : lang === "gu" ? "આનો અર્થ" : lang === "vi" ? "Điều này có nghĩa là" : "Ano ang ibig sabihin nito"}
            </p>
            <div className="space-y-1.5 text-[0.9375rem] text-text-body">
              <p className="flex items-start gap-2"><CheckCircle2 size={15} className="text-success mt-0.5 flex-shrink-0" />
                {lang === "en" ? "Same as above. Exempt from English test." : lang === "ml" ? "മുകളിൽ പറഞ്ഞതുപോലെ. ഇംഗ്ലീഷ് ടെസ്റ്റിൽ നിന്ന് ഒഴിവ്." : lang === "gu" ? "ઉપર જણાવ્યા પ્રમાણે. અંગ્રેજી ટેસ્ટમાંથી છૂટ." : lang === "vi" ? "Giống như trên. Được miễn thi tiếng Anh." : "Katulad ng nasa itaas. Exempt sa pagsusulit sa English."}
              </p>
              <p className="flex items-start gap-2"><CheckCircle2 size={15} className="text-success mt-0.5 flex-shrink-0" />
                {lang === "en" ? "Civics test in your language with your own interpreter." : lang === "ml" ? "സിവിക്സ് ടെസ്റ്റ് നിങ്ങളുടെ ഭാഷയിൽ, നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി." : lang === "gu" ? "તમારી ભાષામાં તમારા પોતાના દુભાષિયા સાથે સિવિક્સ ટેસ્ટ." : lang === "vi" ? "Thi quốc tịch bằng ngôn ngữ của bạn với phiên dịch viên riêng." : "Pagsusulit sa civics sa iyong wika gamit ang sarili mong interpreter."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 65/20 Rule */}
        <motion.div variants={fadeUp} className="bg-white rounded-card p-5 sm:p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 size={24} className="text-success flex-shrink-0" />
            <h2 className="text-[1.25rem] font-bold text-text-heading font-serif">
              {lang === "en" ? "65/20 Special Consideration" : lang === "ml" ? "65/20 പ്രത്യേക പരിഗണന" : lang === "gu" ? "65/20 વિશેષ વિચારણા" : lang === "vi" ? "65/20 Cân nhắc đặc biệt" : "65/20 Espesyal na Pagsasaalang-alang"}
            </h2>
          </div>
          <div className="space-y-2 text-[1rem] text-text-body mb-4">
            <p>• {lang === "en" ? "You are 65 years old or older, AND" : lang === "ml" ? "നിങ്ങൾക്ക് 65 വയസ്സോ അതിൽ കൂടുതലോ ഉണ്ട്, കൂടാതെ" : lang === "gu" ? "તમે 65 વર્ષ કે તેથી વધુ ઉંમરના છો, અને" : lang === "vi" ? "Bạn từ 65 tuổi trở lên, VÀ" : "Ikaw ay 65 taong gulang o mas matanda, AT"}</p>
            <p>• {lang === "en" ? "You have been a lawful permanent resident for 20+ years." : lang === "ml" ? "നിങ്ങൾ 20+ വർഷമായി നിയമാനുസൃത സ്ഥിര താമസക്കാരനാണ്." : lang === "gu" ? "તમે 20+ વર્ષથી કાયદેસર કાયમી નિવાસી છો." : lang === "vi" ? "Bạn đã là thường trú nhân hợp pháp từ 20+ năm." : "Ikaw ay isang legal na permanenteng residente sa loob ng 20+ taon."}</p>
          </div>
          <div className="bg-accent-light rounded-card p-4 border border-blue-200">
            <p className="text-[0.8125rem] font-semibold text-accent uppercase tracking-wide mb-2">
              {lang === "en" ? "What this means" : lang === "ml" ? "ഇതിന്റെ അർത്ഥം" : lang === "gu" ? "આનો અર્થ" : lang === "vi" ? "Điều này có nghĩa là" : "Ano ang ibig sabihin nito"}
            </p>
            <div className="space-y-1.5 text-[0.9375rem] text-text-body">
              <p className="flex items-start gap-2"><CheckCircle2 size={15} className="text-success mt-0.5 flex-shrink-0" />
                {lang === "en" ? "Civics test in your language with your own interpreter." : lang === "ml" ? "സിവിക്സ് ടെസ്റ്റ് നിങ്ങളുടെ ഭാഷയിൽ, നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി." : lang === "gu" ? "તમારી ભાષામાં તમારા પોતાના દુભાષિયા સાથે સિવિક્સ ટેસ્ટ." : lang === "vi" ? "Thi quốc tịch bằng ngôn ngữ của bạn với phiên dịch viên riêng." : "Pagsusulit sa civics sa iyong wika gamit ang sarili mong interpreter."}
              </p>
              <p className="flex items-start gap-2"><CheckCircle2 size={15} className="text-success mt-0.5 flex-shrink-0" />
                {lang === "en" ? "You may be given a simplified set of questions (fewer to study)." : lang === "ml" ? "ലളിതമാക്കിയ ചോദ്യങ്ങൾ ലഭിച്ചേക്കാം (പഠിക്കാൻ കുറവ്)." : lang === "gu" ? "તમને સરળ પ્રશ્નોનો સમૂહ મળી શકે (અભ્યાસ કરવા ઓછા)." : lang === "vi" ? "Bạn có thể được cho một bộ câu hỏi đơn giản hơn (ít hơn để học)." : "Maaari kang bigyan ng pinasimpleng hanay ng mga tanong (mas kaunti ang pag-aaralan)."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div variants={fadeUp} className="bg-success-light rounded-card p-5 sm:p-6 border border-success-border shadow-card">
          <h3 className="text-[1.125rem] font-bold text-success font-serif text-center mb-4">
            {lang === "en" ? "In All Cases Above:" : lang === "ml" ? "മുകളിലെ എല്ലാ സാഹചര്യങ്ങളിലും:" : lang === "gu" ? "ઉપરના બધા કેસોમાં:" : lang === "vi" ? "Trong tất cả các trường hợp trên:" : "Sa Lahat ng Kaso sa Itaas:"}
          </h3>
          <div className="space-y-3 text-[0.9375rem] text-text-body">
            <p className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-success mt-0.5 flex-shrink-0" />
              <span>{lang === "en" ? "You do NOT need to take the English language test" : lang === "ml" ? "ഇംഗ്ലീഷ് ഭാഷാ ടെസ്റ്റ് എടുക്കേണ്ടതില്ല" : lang === "gu" ? "તમારે અંગ્રેજી ભાષાનો ટેસ્ટ આપવાની જરૂર નથી" : lang === "vi" ? "Bạn KHÔNG cần thi tiếng Anh" : "HINDI mo kailangang kumuha ng pagsusulit sa wikang Ingles"}</span>
            </p>
            <p className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-success mt-0.5 flex-shrink-0" />
              <span>{lang === "en" ? "You still MUST take the civics test" : lang === "ml" ? "സിവിക്സ് ടെസ്റ്റ് എടുക്കണം" : lang === "gu" ? "તમારે હજુ પણ સિવિક્સ ટેસ્ટ આપવી પડશે" : lang === "vi" ? "Bạn vẫn PHẢI thi quốc tịch" : "KAILANGAN mo pa ring kumuha ng pagsusulit sa civics"}</span>
            </p>
            <p className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-success mt-0.5 flex-shrink-0" />
              <span>{lang === "en" ? "You CAN take the civics test in your language with your own interpreter at the naturalization interview" : lang === "ml" ? "നാച്ചുറലൈസേഷൻ ഇന്റർവ്യൂവിൽ നിങ്ങളുടെ സ്വന്തം വ്യാഖ്യാതാവുമായി മലയാളത്തിൽ സിവിക്സ് ടെസ്റ്റ് എടുക്കാം" : lang === "gu" ? "તમે નેચરലાઇઝેશન ઇન્ટરવ્યૂમાં તમારા પોતાના દુભાષિયા સાથે તમારી ભાષામાં સિવિક્સ ટેસ્ટ આપી શકો છો" : lang === "vi" ? "Bạn CÓ THỂ thi quốc tịch bằng ngôn ngữ của mình với phiên dịch viên riêng tại buổi phỏng vấn nhập tịch" : "MAAARI mong kunin ang pagsusulit sa civics sa iyong wika gamit ang sarili mong interpreter sa panayam sa naturalization"}</span>
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="bg-primary-light rounded-card p-6 sm:p-8 text-center space-y-4 border border-primary">
          <p className="text-[1.125rem] font-bold text-text-heading font-serif">
            {lang === "en" ? "This app helps you study all the civics questions in your language!"
              : lang === "ml" ? "ഈ ആപ്പ് മലയാളത്തിൽ എല്ലാ സിവിക്സ് ചോദ്യങ്ങളും പഠിക്കാൻ സഹായിക്കുന്നു!"
              : lang === "gu" ? "આ એપ તમને તમારી ભાષામાં બધા સિવિક્સ પ્રશ્નોનો અભ્યાસ કરવામાં મદદ કરે છે!" : lang === "vi" ? "Ứng dụng này giúp bạn học tất cả câu hỏi quốc tịch bằng ngôn ngữ của bạn!" : "Tinutulungan ka ng app na ito na pag-aralan ang lahat ng tanong sa civics sa iyong wika!"}
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white
                       text-[1.125rem] font-bold rounded-btn px-8 py-4 min-h-[56px]
                       shadow-btn hover:scale-[1.02] transition-all active:scale-[0.97] no-underline"
          >
            <BookOpen size={20} />
            {lang === "en" ? "Start Studying Now" : lang === "ml" ? "ഇപ്പോൾ പഠനം ആരംഭിക്കുക" : lang === "gu" ? "હવે અભ્યાસ શરૂ કરો" : lang === "vi" ? "Bắt đầu học ngay" : "Magsimulang Mag-aral Ngayon"}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
