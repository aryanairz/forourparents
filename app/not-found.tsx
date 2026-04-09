"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Home, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Lang } from "@/data/questions";

type MultiText = { en: string; ml: string; gu: string; vi: string; tl: string; es?: string };

const excuses: MultiText[] = [
  {
    en: "went to get chai",
    ml: "ചായയ്ക്ക് പോയി",
    gu: "ચા લેવા ગયો છે",
    vi: "đi lấy trà rồi",
    tl: "pumunta para kumuha ng tsaa",
  },
  {
    en: "is taking a break before the interview",
    ml: "ഇന്റർവ്യൂക്ക് മുമ്പ് ഒരു ഇടവേളയിലാണ്",
    gu: "ઇન્ટરવ્યૂ પહેલાં થોડો વિરામ લઈ રહ્યું છે",
    vi: "đang nghỉ một chút trước buổi phỏng vấn",
    tl: "nagpapahinga muna bago ang interbyu",
  },
  {
    en: "got lost like Congress",
    ml: "കോൺഗ്രസിനെ പോലെ വഴിതെറ്റി",
    gu: "કોંગ્રેસ જેવી રીતે ખોવાઈ ગયું",
    vi: "lạc đường như Quốc hội vậy",
    tl: "naligaw tulad ng Kongreso",
  },
  {
    en: "stepped out to vote",
    ml: "വോട്ട് ചെയ്യാൻ പുറത്തുപോയി",
    gu: "મત આપવા બહાર ગયું છે",
    vi: "ra ngoài để đi bỏ phiếu",
    tl: "lumabas para bumoto",
  },
];

const facts: MultiText[] = [
  {
    en: "The original U.S. flag had 13 stars and 13 stripes.",
    ml: "ആദ്യ യു.എസ്. പതാകയ്ക്ക് 13 നക്ഷത്രങ്ങളും 13 വരകളും ഉണ്ടായിരുന്നു.",
    gu: "મૂળ યુ.એસ. ધ્વજમાં 13 તારા અને 13 પટ્ટા હતા.",
    vi: "Lá cờ Hoa Kỳ ban đầu có 13 ngôi sao và 13 sọc.",
    tl: "Ang orihinal na watawat ng U.S. ay may 13 bituin at 13 guhit.",
  },
  {
    en: "Yellowstone was the world's first national park.",
    ml: "യെല്ലോസ്റ്റോൺ ലോകത്തിലെ ആദ്യ ദേശീയോദ്യാനമായിരുന്നു.",
    gu: "યેલોસ્ટોન વિશ્વનું પ્રથમ નેશનલ પાર્ક હતું.",
    vi: "Yellowstone là công viên quốc gia đầu tiên trên thế giới.",
    tl: "Ang Yellowstone ang unang pambansang parke sa buong mundo.",
  },
  {
    en: "The U.S. Constitution is the oldest still-active written national constitution.",
    ml: "ഇന്നും പ്രാബല്യത്തിലുള്ള ഏറ്റവും പഴയ എഴുത്തുപരമായ ദേശീയ ഭരണഘടന യു.എസ്. ഭരണഘടനയാണ്.",
    gu: "યુ.એસ. બંધારણ આજે પણ અમલમાં રહેલું સૌથી જૂનું લેખિત રાષ્ટ્રીય બંધારણ છે.",
    vi: "Hiến pháp Hoa Kỳ là bản hiến pháp quốc gia thành văn lâu đời nhất vẫn còn hiệu lực.",
    tl: "Ang Konstitusyon ng U.S. ang pinakamatandang nakasulat na pambansang konstitusyon na aktibo pa rin.",
  },
  {
    en: "Hawaii was the last state admitted to the Union, in 1959.",
    ml: "1959-ൽ യൂണിയനിൽ ചേർന്ന അവസാന സംസ്ഥാനമാണ് ഹവായി.",
    gu: "1959માં સંઘમાં જોડાયેલું છેલ્લું રાજ્ય હવાઈ હતું.",
    vi: "Hawaii là tiểu bang cuối cùng gia nhập Liên bang vào năm 1959.",
    tl: "Ang Hawaii ang huling estado na tinanggap sa Union, noong 1959.",
  },
];

function getText(lang: Lang, item: MultiText) {
  return item[lang] ?? item.en;
}

export default function NotFound() {
  const { lang } = useLanguage();
  const [excuseIdx, setExcuseIdx] = useState(0);
  const [excuseVisible, setExcuseVisible] = useState(true);
  const [factIdx, setFactIdx] = useState(0);
  const [factVisible, setFactVisible] = useState(true);
  const excuseList = useMemo(() => excuses, []);
  const factList = useMemo(() => facts, []);

  const l = (en: string, ml: string, gu?: string, vi?: string, tl?: string, es?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : lang === "vi" ? (vi ?? en) : lang === "tl" ? (tl ?? en) : (es ?? en);

  useEffect(() => {
    const t = setInterval(() => {
      setExcuseVisible(false);
      setTimeout(() => {
        setExcuseIdx((p) => (p + 1) % excuseList.length);
        setExcuseVisible(true);
      }, 280);
    }, 2500);
    return () => clearInterval(t);
  }, [excuseList.length]);

  useEffect(() => {
    const t = setInterval(() => {
      setFactVisible(false);
      setTimeout(() => {
        setFactIdx((p) => (p + 1) % factList.length);
        setFactVisible(true);
      }, 280);
    }, 5000);
    return () => clearInterval(t);
  }, [factList.length]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center space-y-8">
        <p className="text-[7rem] leading-none font-extrabold text-orange-200 select-none animate-popIn">
          404
        </p>

        <div className="space-y-3 animate-fadeUp" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {l("Oops! This page", "അയ്യോ! ഈ പേജ്", "અરે! આ પેજ", "Ôi! Trang này", "Naku! Ang pahinang ito")}
          </h1>
          <div className="h-10 flex items-center justify-center overflow-hidden">
            <span
              className="text-xl sm:text-2xl font-semibold text-orange-500 transition-all duration-300 whitespace-nowrap"
              style={{
                opacity: excuseVisible ? 1 : 0,
                transform: excuseVisible ? "translateY(0)" : "translateY(-8px)",
              }}
            >
              {getText(lang, excuseList[excuseIdx])}
            </span>
          </div>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-sm mx-auto pt-1">
            {l(
              "Don't worry. Finding this page is easier than passing the civics test, and you'll ace that too.",
              "വിഷമിക്കേണ്ട. ഈ പേജ് കണ്ടെത്തുന്നത് സിവിക്സ് പരീക്ഷയെക്കാൾ എളുപ്പമാണ്, അതും നിങ്ങൾ നന്നായി ചെയ്യും.",
              "ચિંતા ન કરો. આ પેજ શોધવું સિવિક્સ ટેસ્ટ પાસ કરવા કરતાં સરળ છે, અને તે પણ તમે સારી રીતે કરશો.",
              "Đừng lo. Tìm lại trang này còn dễ hơn cả đậu bài thi quốc tịch, và bạn cũng sẽ làm tốt bài thi đó.",
              "Huwag mag-alala. Mas madaling hanapin ang pahinang ito kaysa pumasa sa civics test, at papasa ka rin doon.",
            )}
          </p>
        </div>

        <div
          className="bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 mx-auto max-w-sm animate-fadeUp min-h-[80px] flex items-center justify-center"
          style={{ animationDelay: "0.2s" }}
        >
          <p
            className="text-sm text-orange-700 font-medium leading-relaxed transition-all duration-300"
            style={{
              opacity: factVisible ? 1 : 0,
              transform: factVisible ? "translateY(0)" : "translateY(-6px)",
            }}
          >
            <span className="font-semibold">{l("Did you know?", "നിങ്ങൾക്കറിയാമോ?", "શું તમને ખબર છે?", "Bạn có biết không?", "Alam mo ba?")}</span>{" "}
            {getText(lang, factList[factIdx])}
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center pt-1 animate-fadeUp"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 min-h-[52px] bg-primary text-white text-base font-bold rounded-xl px-8 py-3 hover:bg-primary-dark active:scale-[0.97] transition-all no-underline shadow-md"
          >
            <Home className="w-4 h-4" />
            {l("Take me home", "ഹോം പേജിലേക്ക് കൊണ്ടുപോവൂ", "મને હોમ પર લઈ જાઓ", "Đưa tôi về trang chủ", "Dalhin ako sa home")}
          </Link>
          <Link
            href="/quiz"
            className="flex items-center justify-center gap-2 min-h-[52px] border-2 border-orange-300 text-orange-700 bg-orange-50 hover:bg-orange-100 text-base font-semibold rounded-xl px-8 py-3 active:scale-[0.97] transition-all no-underline"
          >
            <BookOpen className="w-4 h-4" />
            {l("Practice instead", "പകരം പരിശീലിക്കാം", "બદલે પ્રેક્ટિસ કરો", "Luyện tập thay thế", "Mag-practice na lang")}
          </Link>
        </div>
      </div>
    </div>
  );
}
