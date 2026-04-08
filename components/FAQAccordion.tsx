"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const NAVY = "#1B2A4A";
const RED = "#C41E3A";

type MultiText = { en: string; ml: string; gu: string; vi: string; tl: string };

interface FAQItem {
  q: MultiText;
  a: MultiText;
}

const tri = (en: string, ml: string, gu: string, vi: string, tl: string): MultiText => ({ en, ml, gu, vi, tl });

const faqs: FAQItem[] = [
  {
    q: tri(
      "Is this completely free?",
      "ഇത് പൂർണ്ണമായും സൗജന്യമാണോ?",
      "શું આ સંપૂર્ણપણે મફત છે?",
      "Ứng dụng này có hoàn toàn miễn phí không?",
      "Ito ba ay ganap na libre?"
    ),
    a: tri(
      "Yes, 100% free. No ads, no subscription, and no hidden fees.",
      "അതെ, 100% സൗജന്യം. പരസ്യങ്ങളില്ല, സബ്സ്ക്രിപ്ഷൻ ഇല്ല, മറഞ്ഞ ഫീസുകളും ഇല്ല.",
      "હા, 100% મફત. કોઈ જાહેરાત નથી, કોઈ સબ્સ્ક્રિપ્શન નથી અને કોઈ છુપાયેલા શુલ્ક નથી.",
      "Có, hoàn toàn miễn phí. Không quảng cáo, không đăng ký và không có phí ẩn.",
      "Oo, 100% libre. Walang ads, walang subscription, at walang nakatagong bayarin."
    ),
  },
  {
    q: tri(
      "Who qualifies for the language exemptions?",
      "ഭാഷാ ഇളവുകൾക്ക് ആർ യോഗ്യരാണ്?",
      "ભાષા છૂટ માટે કોણ લાયક છે?",
      "Ai đủ điều kiện được miễn phần ngôn ngữ?",
      "Sino ang kwalipikado para sa mga language exemption?"
    ),
    a: tri(
      "If you qualify under the 50/20, 55/15, or 65/20 rules, you can take the civics test in your own language with an interpreter.",
      "50/20, 55/15, അല്ലെങ്കിൽ 65/20 നിയമങ്ങൾക്കു കീഴിൽ നിങ്ങൾ യോഗ്യരാണെങ്കിൽ, വ്യാഖ്യാതാവിനൊപ്പം നിങ്ങളുടെ സ്വന്തം ഭാഷയിൽ സിവിക്സ് ടെസ്റ്റ് എടുക്കാം.",
      "જો તમે 50/20, 55/15 અથવા 65/20 નિયમો હેઠળ લાયક હો, તો તમે દુભાષિયા સાથે તમારી ભાષામાં સિવિક્સ ટેસ્ટ આપી શકો છો.",
      "Nếu bạn đủ điều kiện theo quy tắc 50/20, 55/15 hoặc 65/20, bạn có thể thi quốc tịch bằng ngôn ngữ của mình với phiên dịch viên.",
      "Kung kwalipikado ka sa ilalim ng mga panuntunang 50/20, 55/15, o 65/20, maaari mong kunin ang civics test sa iyong sariling wika kasama ang isang interpreter."
    ),
  },
  {
    q: tri(
      "Which languages are supported?",
      "ഏതു ഭാഷകളാണ് പിന്തുണയ്ക്കുന്നത്?",
      "કઈ ભાષાઓ સપોર્ટ થાય છે?",
      "Ứng dụng hỗ trợ những ngôn ngữ nào?",
      "Anu-anong wika ang sinusuportahan?"
    ),
    a: tri(
      "We support English, Malayalam, Gujarati, Vietnamese, and Tagalog. Questions, answer choices, and explanations are available in all five languages.",
      "ഇംഗ്ലീഷ്, മലയാളം, ഗുജറാത്തി, വിയറ്റ്നാമീസ്, ടാഗലോഗ് ഭാഷകൾ ഞങ്ങൾ പിന്തുണയ്ക്കുന്നു. ചോദ്യങ്ങളും ഉത്തര തിരഞ്ഞെടുപ്പുകളും വിശദീകരണങ്ങളും അഞ്ച് ഭാഷകളിലും ലഭ്യമാണ്.",
      "અમે અંગ્રેજી, મલયાલમ, ગુજરાતી, વિયેતનામી અને ટાગાલોગ ભાષાઓને સપોર્ટ કરીએ છીએ. પ્રશ્નો, જવાબ વિકલ્પો અને સમજણ પાંચેય ભાષાઓમાં ઉપલબ્ધ છે.",
      "Chúng tôi hỗ trợ tiếng Anh, Malayalam, Gujarati, tiếng Việt và Tagalog. Câu hỏi, lựa chọn đáp án và phần giải thích đều có đủ bằng cả năm ngôn ngữ.",
      "Sinusuportahan namin ang English, Malayalam, Gujarati, Vietnamese, at Tagalog. Ang mga tanong, pagpipilian ng sagot, at paliwanag ay available sa lahat ng limang wika."
    ),
  },
  {
    q: tri(
      "How is this different from other test prep apps?",
      "മറ്റു പരീക്ഷാ തയ്യാറെടുപ്പ് ആപ്പുകളിൽ നിന്ന് ഇത് എങ്ങനെ വ്യത്യസ്തമാണ്?",
      "આ અન્ય ટેસ્ટ પ્રેપ એપ્સથી કેવી રીતે જુદું છે?",
      "Ứng dụng này khác gì so với các app luyện thi khác?",
      "Paano ito naiiba sa ibang test prep app?"
    ),
    a: tri(
      "It was built for parents and elders, with large text, simple navigation, and audio support on every question.",
      "ഇത് മാതാപിതാക്കൾക്കും മുതിർന്നവർക്കുമായി നിർമ്മിച്ചതാണ്. വലുതായ എഴുത്ത്, ലളിതമായ നാവിഗേഷൻ, ഓരോ ചോദ്യത്തിനും ഓഡിയോ പിന്തുണ എന്നിവയുണ്ട്.",
      "આ ખાસ માતા-પિતા અને વડીલો માટે બનાવવામાં આવ્યું છે, જેમાં મોટું લખાણ, સરળ નેવિગેશન અને દરેક પ્રશ્ન માટે ઑડિયો સપોર્ટ છે.",
      "Ứng dụng được xây dựng cho cha mẹ và người lớn tuổi, với chữ lớn, điều hướng đơn giản và hỗ trợ âm thanh cho mọi câu hỏi.",
      "Ginawa ito para sa mga magulang at nakatatanda, na may malaking text, simpleng nabigasyon, at audio support sa bawat tanong."
    ),
  },
  {
    q: tri(
      "Do I need to create an account?",
      "എനിക്ക് അക്കൗണ്ട് സൃഷ്ടിക്കണോ?",
      "શું મને એકાઉન્ટ બનાવવું પડશે?",
      "Tôi có cần tạo tài khoản không?",
      "Kailangan ko bang gumawa ng account?"
    ),
    a: tri(
      "You can try sample questions without an account, but creating a free account lets you save progress and review mistakes.",
      "അക്കൗണ്ട് ഇല്ലാതെ മാതൃകാ ചോദ്യങ്ങൾ പരീക്ഷിക്കാം, പക്ഷേ സൗജന്യ അക്കൗണ്ട് ഉണ്ടാക്കിയാൽ പുരോഗതി സൂക്ഷിക്കാനും തെറ്റുകൾ അവലോകനം ചെയ്യാനും കഴിയും.",
      "તમે એકાઉન્ટ વિના નમૂનાના પ્રશ્નો અજમાવી શકો છો, પરંતુ મફત એકાઉન્ટ બનાવવાથી પ્રગતિ સાચવી શકાય છે અને ભૂલોની સમીક્ષા કરી શકાય છે.",
      "Bạn có thể thử câu hỏi mẫu mà không cần tài khoản, nhưng tạo tài khoản miễn phí sẽ giúp lưu tiến độ và ôn lại lỗi sai.",
      "Maaari mong subukan ang mga sample na tanong kahit walang account, ngunit ang paggawa ng libreng account ay magbibigay-daan sa iyong i-save ang iyong progress at suriin ang mga pagkakamali."
    ),
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLanguage();

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderBottom: "1px solid #E5E7EB",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "22px 0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: isOpen ? RED : NAVY,
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  lineHeight: 1.4,
                  transition: "color 0.2s ease",
                }}
              >
                {item.q[lang]}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: `2px solid ${isOpen ? RED : "#D1D5DB"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isOpen ? RED : "#9CA3AF",
                  fontSize: 18,
                  lineHeight: 1,
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      color: "#4B5563",
                      lineHeight: 1.7,
                      paddingBottom: 22,
                      fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                      margin: 0,
                    }}
                  >
                    {item.a[lang]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
