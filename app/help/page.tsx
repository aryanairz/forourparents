"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { useState } from "react";
import { ArrowLeft, ChevronDown, ChevronUp, Heart, BookOpen, HelpCircle, Building2, Wrench, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

/* ── Trilingual content helpers ────────────────────── */
type Tri = { en: string; ml: string; gu: string; vi: string };
const tri = (en: string, ml: string, gu: string, vi: string): Tri => ({ en, ml, gu, vi });

/* ── FAQ data ─────────────────────────────────────── */
const faqs: { q: Tri; a: Tri }[] = [
  {
    q: tri(
      "What is the U.S. civics test?",
      "യു.എസ്. സിവിക്സ് ടെസ്റ്റ് എന്താണ്?",
      "યુ.એસ. સિવિક્સ ટેસ્ટ શું છે?",
      "Bài thi công dân Hoa Kỳ là gì?"
    ),
    a: tri(
      "During the naturalization interview, USCIS officers ask up to 10 questions from a list of 100 civics questions. You must answer at least 6 correctly to pass.",
      "നാച്ചുറലൈസേഷൻ ഇന്റർവ്യൂവിൽ, 100 സിവിക്സ് ചോദ്യങ്ങളുടെ പട്ടികയിൽ നിന്ന് USCIS ഓഫീസർമാർ 10 ചോദ്യങ്ങൾ വരെ ചോദിക്കുന്നു. പാസാകാൻ കുറഞ്ഞത് 6 എണ്ണം ശരിയായി ഉത്തരം നൽകണം.",
      "નેચરલાઇઝેશન ઇન્ટરવ્યૂ દરમિયાન, USCIS અધિકારીઓ 100 સિવિક્સ પ્રશ્નોની યાદીમાંથી 10 સુધી પ્રશ્નો પૂછે છે. પાસ થવા માટે તમારે ઓછામાં ઓછા 6 સાચા જવાબ આપવા પડશે.",
      "Trong buổi phỏng vấn nhập tịch, nhân viên USCIS hỏi tối đa 10 câu từ danh sách 100 câu hỏi công dân. Bạn phải trả lời đúng ít nhất 6 câu để đạt."
    ),
  },
  {
    q: tri(
      "Is this app free?",
      "ഈ ആപ്പ് സൌജന്യമാണോ?",
      "શું આ એપ મફત છે?",
      "Ứng dụng này có miễn phí không?"
    ),
    a: tri(
      "Yes! For Our Parents is completely free. Our mission is to help families prepare for the civics test without any cost.",
      "അതെ! 'For Our Parents' പൂർണ്ണമായും സൌജന്യമാണ്. മലയാളം സംസാരിക്കുന്ന കുടുംബങ്ങളെ ഒരു ചെലവും കൂടാതെ സിവിക്സ് ടെസ്റ്റിന് തയ്യാറെടുക്കാൻ സഹായിക്കുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം.",
      "હા! 'For Our Parents' સંપૂર્ણપણે મફત છે. પરિવારોને કોઈ ખર્ચ વિના સિવિક્સ ટેસ્ટ માટે તૈયાર કરવામાં મદદ કરવી એ અમારું લક્ષ્ય છે.",
      "Có! For Our Parents hoàn toàn miễn phí. Sứ mệnh của chúng tôi là giúp các gia đình chuẩn bị cho bài thi công dân mà không tốn chi phí."
    ),
  },
  {
    q: tri(
      "How many questions are on the real test?",
      "യഥാർത്ഥ ടെസ്റ്റിൽ എത്ര ചോദ്യങ്ങൾ ഉണ്ട്?",
      "ખરેખર ટેસ્ટમાં કેટલા પ્રશ્નો હોય છે?",
      "Bài thi thật có bao nhiêu câu hỏi?"
    ),
    a: tri(
      "The USCIS officer will ask you up to 10 civics questions from the official list of 100. You need to get 6 out of 10 correct to pass the civics portion.",
      "100 ചോദ്യങ്ങളുടെ ഔദ്യോഗിക പട്ടികയിൽ നിന്ന് USCIS ഓഫീസർ 10 സിവിക്സ് ചോദ്യങ്ങൾ വരെ ചോദിക്കും. സിവിക്സ് ഭാഗം പാസാകാൻ 10-ൽ 6 ശരിയാക്കണം.",
      "100 પ્રશ્નોની સત્તાવાર યાદીમાંથી USCIS અધિકારી 10 સિવિક્સ પ્રશ્નો સુધી પૂછશે. સિવિક્સ ભાગ પાસ કરવા માટે 10માંથી 6 સાચા મેળવવા જરૂરી છે.",
      "Nhân viên USCIS sẽ hỏi bạn tối đa 10 câu hỏi công dân từ danh sách chính thức 100 câu. Bạn cần trả lời đúng 6 trong 10 câu để đạt phần công dân."
    ),
  },
  {
    q: tri(
      "Can I study in other languages?",
      "മലയാളത്തിൽ പഠിക്കാമോ?",
      "શું હું બીજી ભાષાઓમાં અભ્યાસ કરી શકું?",
      "Tôi có thể học bằng ngôn ngữ khác không?"
    ),
    a: tri(
      "Yes! Use the language dropdown in the header to switch between English, Malayalam, Gujarati, and Vietnamese. All questions, answers, and explanations are available in all four languages.",
      "അതെ! ഇംഗ്ലീഷിനും മലയാളത്തിനും ഇടയിൽ മാറുന്നതിന് ഹെഡ്ഡറിലെ ഭാഷ ഡ്രോപ്പ്ഡൗണ് ഉപയോഗിക്കുക. എല്ലാ ചോദ്യങ്ങളും ഉത്തരങ്ങളും വിശദീകരണങ്ങളും നാല് ഭാഷകളിലും ലഭ്യമാണ്.",
      "હા! અંગ્રેજી, મલયાલમ, ગુજરાતી અને વિયેતનામીસ વચ્ચે સ્વિચ કરવા માટે હેડરમાં ભાષા ડ્રોપડાઉન વાપરો. બધા પ્રશ્નો, જવાબો અને સમજૂતીઓ ચારેય ભાષાઓમાં ઉપલબ્ધ છે.",
      "Có! Dùng menu ngôn ngữ ở phần đầu để chuyển giữa tiếng Anh, Malayalam, Gujarati và tiếng Việt. Tất cả câu hỏi, câu trả lời và giải thích đều có sẵn bằng cả bốn ngôn ngữ."
    ),
  },
  {
    q: tri(
      "What topics does the civics test cover?",
      "സിവിക്സ് ടെസ്റ്റ് ഏതൊക്കെ വിഷയങ്ങൾ ഉൾക്കൊള്ളുന്നു?",
      "સિવિક્સ ટેસ્ટ કયા વિષયો આવરી લે છે?",
      "Bài thi công dân bao gồm những chủ đề gì?"
    ),
    a: tri(
      "The test covers four main areas: American Government (how it works), Rights & Responsibilities, American History, and U.S. Symbols & Holidays.",
      "ടെസ്റ്റ് നാല് പ്രധാന മേഖലകൾ ഉൾക്കൊള്ളുന്നു: അമേരിക്കൻ ഗവൺമെന്റ്, അവകാശങ്ങളും ഉത്തരവാദിത്തങ്ങളും, അമേരിക്കൻ ചരിത്രം, യു.എസ്. ചിഹ്നങ്ങളും അവധി ദിനങ്ങളും.",
      "ટેસ્ટ ચાર મુખ્ય ક્ષેત્રોને આવરી લે છે: અમેરિકન સરકાર (તે કેવી રીતે કામ કરે છે), અધિકારો અને જવાબદારીઓ, અમેરિકન ઇતિહાસ, અને યુ.એસ. પ્રતીકો અને રજાઓ.",
      "Bài thi gồm bốn lĩnh vực chính: Chính phủ Hoa Kỳ, Quyền & Trách nhiệm, Lịch sử Hoa Kỳ, và Biểu tượng & Ngày lễ Hoa Kỳ."
    ),
  },
  {
    q: tri(
      "Do I need to create an account?",
      "ഒരു അക്കൌണ്ട് ഉണ്ടാക്കണോ?",
      "શું મારે ખાતું બનાવવાની જરૂર છે?",
      "Tôi có cần tạo tài khoản không?"
    ),
    a: tri(
      "You can practice without an account, but creating one (free) lets you track your progress, review mistakes, and get personalized questions about your congressional representatives.",
      "അക്കൗണ്ട് ഇല്ലാതെയും പരിശീലിക്കാം, പക്ഷേ ഒരെണ്ണം ഉണ്ടാക്കിയാൽ (സൌജന്യം) നിങ്ങളുടെ പുരോഗതി ട്രാക്ക് ചെയ്യാനും തെറ്റുകൾ അവലോകനം ചെയ്യാനും നിങ്ങളുടെ കോൺഗ്രസ് പ്രതിനിധികളെ കുറിച്ചുള്ള വ്യക്തിഗത ചോദ്യങ്ങൾ ലഭിക്കാനും കഴിയും.",
      "ખાતા વિના પણ પ્રેક્ટિસ કરી શકાય છે, પરંતુ એક બનાવવાથી (મફત) તમારી પ્રગતિ ટ્રેક કરવા, ભૂલોની સમીક્ષા કરવા અને તમારા કોંગ્રેસ પ્રતિનિધિઓ વિશે વ્યક્તિગત પ્રશ્નો મેળવવા માટે મદદ મળે છે.",
      "Bạn có thể luyện tập mà không cần tài khoản, nhưng việc tạo tài khoản (miễn phí) giúp bạn theo dõi tiến độ, ôn lại lỗi sai và nhận câu hỏi cá nhân về đại biểu quốc hội của bạn."
    ),
  },
];

/* ── Troubleshooting data ─────────────────────────── */
const troubleshooting: { issue: Tri; fix: Tri }[] = [
  {
    issue: tri("I can't log in", "എനിക്ക് ലോഗിൻ ചെയ്യാൻ കഴിയുന്നില്ല", "હું લોગ ઇન કરી શકતો નથી", "Tôi không thể đăng nhập"),
    fix: tri(
      "Make sure you're entering the email address you signed up with and the 4-digit PIN you chose. If you forgot your PIN, email us at contact.forourparents@gmail.com and we'll help you get back in.",
      "നിങ്ങൾ സൈൻ-അപ്പ് ചെയ്ത ഇമെയിൽ വിലാസവും 4 അക്ക PINും നൽകുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക. PIN മറന്നുപോയാൽ, contact.forourparents@gmail.com-ൽ ഞങ്ങൾക്ക് ഇമെയിൽ ചെയ്യുക, തിരിച്ചു കയറാൻ ഞങ്ങൾ സഹായിക്കും.",
      "ખાતરી કરો કે તમે સાઇન અપ કરેલ ઇમેઇલ એડ્રેસ અને 4-અંકનો PIN દાખલ કરી રહ્યા છો. જો તમે PIN ભૂલી ગયા હો, તો contact.forourparents@gmail.com પર ઇમેઇલ કરો, અમે તમને પાછા લોગ ઇન કરવામાં મદદ કરીશું.",
      "Hãy chắc chắn bạn đang nhập đúng email đã đăng ký và mã PIN 4 chữ số đã chọn. Nếu quên PIN, hãy gửi email cho chúng tôi tại contact.forourparents@gmail.com và chúng tôi sẽ giúp bạn."
    ),
  },
  {
    issue: tri("The app is not loading", "ആപ്പ് ലോഡ് ആകുന്നില്ല", "એપ લોડ થતી નથી", "Ứng dụng không tải được"),
    fix: tri(
      "Try refreshing the page or clearing your browser cache. Make sure you have a stable internet connection. The app works best on Chrome, Safari, or Edge.",
      "പേജ് റിഫ്രഷ് ചെയ്യുക അല്ലെങ്കിൽ ബ്രൗസർ കാഷ് ക്ലിയർ ചെയ്യുക. സ്ഥിരമായ ഇന്റർനെറ്റ് കണക്ഷൻ ഉണ്ടെന്ന് ഉറപ്പാക്കുക. Chrome, Safari, അല്ലെങ്കിൽ Edge-ൽ ആപ്പ് മികച്ച രീതിയിൽ പ്രവർത്തിക്കുന്നു.",
      "પેજ રિફ્રેશ કરો અથવા બ્રાઉઝર કેશ સાફ કરો. ખાતરી કરો કે તમારી પાસે સ્થિર ઇન્ટરનેટ કનેક્શન છે. એપ Chrome, Safari અથવા Edge પર શ્રેષ્ઠ કામ કરે છે.",
      "Hãy thử tải lại trang hoặc xóa bộ nhớ cache trình duyệt. Đảm bảo bạn có kết nối internet ổn định. Ứng dụng hoạt động tốt nhất trên Chrome, Safari hoặc Edge."
    ),
  },
  {
    issue: tri("Audio is not playing", "ഓഡിയോ പ്ലേ ആകുന്നില്ല", "ઓડિયો ચાલતું નથી", "Âm thanh không phát"),
    fix: tri(
      "Make sure your device volume is turned up and not on silent mode. The read-aloud feature uses your browser's text-to-speech engine. Some older browsers may not support all languages for text-to-speech.",
      "നിങ്ങളുടെ ഉപകരണത്തിന്റെ വോളിയം ഓൺ ആണെന്നും സൈലന്റ് മോഡിൽ അല്ലെന്നും ഉറപ്പാക്കുക. റീഡ്-അലൌഡ് ഫീച്ചർ ബ്രൗസറിന്റെ ടെക്സ്റ്റ്-ടു-സ്പീച്ച് എഞ്ചിൻ ഉപയോഗിക്കുന്നു. ചില പഴയ ബ്രൗസറുകൾ മലയാളം ടെക്സ്റ്റ്-ടു-സ്പീച്ച് പിന്തുണച്ചേക്കില്ല.",
      "ખાતરી કરો કે તમારા ઉપકરણનું વોલ્યુમ ચાલુ છે અને સાયલન્ટ મોડ પર નથી. વાંચો-મોટેથી ફીચર બ્રાઉઝરના ટેક્સ્ટ-ટુ-સ્પીચ એન્જીનનો ઉપયોગ કરે છે. કેટલાક જૂના બ્રાઉઝર ગુજરાતી ટેક્સ્ટ-ટુ-સ્પીચ સપોર્ટ ન કરી શકે.",
      "Đảm bảo âm lượng thiết bị đã bật và không ở chế độ im lặng. Tính năng đọc to sử dụng công cụ chuyển văn bản thành giọng nói của trình duyệt. Một số trình duyệt cũ có thể không hỗ trợ tất cả ngôn ngữ."
    ),
  },
  {
    issue: tri(
      "My progress isn't saving",
      "എന്റെ പുരോഗതി സേവ് ആകുന്നില്ല",
      "મારી પ્રગતિ સેવ થતી નથી",
      "Tiến độ của tôi không được lưu"
    ),
    fix: tri(
      "Progress is saved to your account. Make sure you're logged in before starting a quiz. If you're using a private/incognito window, your local session may not persist.",
      "പുരോഗതി നിങ്ങളുടെ അക്കൗണ്ടിൽ സേവ് ചെയ്യുന്നു. ക്വിസ് തുടങ്ങുന്നതിന് മുമ്പ് ലോഗിൻ ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക. പ്രൈവേറ്റ്/ഇൻകോഗ്നിറ്റോ വിൻഡോ ഉപയോഗിക്കുന്നുണ്ടെങ്കിൽ, ലോക്കൽ സെഷൻ നിലനിൽക്കണമെന്നില്ല.",
      "પ્રગતિ તમારા ખાતામાં સેવ થાય છે. ક્વિઝ શરૂ કરતા પહેલા લોગ ઇન કર્યું છે તેની ખાતરી કરો. જો તમે પ્રાઇવેટ/ઇન્કોગ્નિટો વિન્ડો વાપરી રહ્યા છો, તો લોકલ સેશન ટકી ન શકે.",
      "Tiến độ được lưu vào tài khoản của bạn. Hãy đảm bảo bạn đã đăng nhập trước khi bắt đầu bài thi. Nếu bạn đang dùng cửa sổ riêng tư/ẩn danh, phiên cục bộ có thể không được giữ lại."
    ),
  },
];

/* ── Collapsible Section ──────────────────────────── */
function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-border rounded-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-primary-light transition-colors text-left min-h-[52px]"
      >
        <span className="text-[1rem] font-semibold text-text-body">{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-text-secondary flex-shrink-0"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-3 bg-white border-t border-border">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main Help Page ───────────────────────────────── */
export default function HelpPage() {
  const { lang, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const l = (en: string, ml: string, gu?: string, vi?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : (vi ?? en);

  return (
    <motion.div
      initial="hidden" animate="show" variants={stagger}
      className="max-w-content mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="flex items-center justify-between mb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-btn
                     bg-white border border-border text-text-secondary text-[0.9375rem] font-medium
                     hover:border-primary hover:text-primary transition-colors shadow-card no-underline"
        >
          <ArrowLeft size={15} /> {t("home", lang)}
        </Link>
        <h1 className="text-[1.25rem] font-bold text-text-heading font-serif">
          {l("Help & Support", "സഹായവും പിന്തുണയും", "સહાય અને સમર્થન", "Trợ giúp & Hỗ trợ")}
        </h1>
      </motion.div>

      {/* ─── 1. About Us / Mission ─────────────────────────── */}
      <motion.section variants={fadeUp} className="bg-primary-light rounded-card p-5 sm:p-6 border border-primary">
        <h2 className="text-[1.0625rem] font-bold text-primary font-serif flex items-center gap-2 mb-3">
          <Heart size={18} className="flex-shrink-0" />
          {l("Our Mission", "ഞങ്ങളുടെ ദൗത്യം", "અમારું લક્ષ્ય", "Sứ mệnh của chúng tôi")}
        </h2>
        <p className="text-[1rem] text-text-body leading-relaxed">
          {l(
            "For Our Parents was built by the children of immigrants to help parents and elders prepare for the U.S. citizenship naturalization test. We know how stressful this process can be — especially when study materials aren't available in your language. This app provides all 100 official USCIS civics questions in English, Malayalam, Gujarati, and Vietnamese, with practice modes, audio support, and personalized questions based on your congressional district. It's completely free, and always will be.",
            "'For Our Parents' കുടിയേറ്റക്കാരുടെ മക്കൾ നിർമ്മിച്ചതാണ് — മലയാളം സംസാരിക്കുന്ന മാതാപിതാക്കളെയും മുതിർന്നവരെയും യു.എസ്. പൗരത്വ നാച്ചുറലൈസേഷൻ ടെസ്റ്റിന് തയ്യാറെടുക്കാൻ സഹായിക്കാൻ. ഈ പ്രക്രിയ എത്ര സമ്മർദ്ദകരമാണെന്ന് ഞങ്ങൾക്കറിയാം — പ്രത്യേകിച്ചും പഠന സാമഗ്രികൾ നിങ്ങളുടെ ഭാഷയിൽ ലഭ്യമല്ലാത്തപ്പോൾ. 100 ഔദ്യോഗിക USCIS സിവിക്സ് ചോദ്യങ്ങളും ഇംഗ്ലീഷിലും മലയാളത്തിലും ഈ ആപ്പ് നൽകുന്നു — പ്രാക്ടീസ് മോഡുകൾ, ഓഡിയോ പിന്തുണ, നിങ്ങളുടെ കോൺഗ്രഷണൽ ജില്ല അടിസ്ഥാനമാക്കിയുള്ള വ്യക്തിഗത ചോദ്യങ്ങൾ എന്നിവയോടൊപ്പം. ഇത് പൂർണ്ണമായും സൌജന്യമാണ്, എപ്പോഴും അങ്ങനെ തന്നെ ആയിരിക്കും.",
            "'For Our Parents' ઇમિગ્રન્ટ્સના બાળકો દ્વારા બનાવવામાં આવ્યું છે — ગુજરાતી બોલતા માતાપિતા અને વડીલોને યુ.એસ. નાગરિકતા નેચરલાઇઝેશન ટેસ્ટ માટે તૈયાર કરવામાં મદદ કરવા. આ પ્રક્રિયા કેટલી તણાવપૂર્ણ હોઈ શકે છે તે અમે જાણીએ છીએ — ખાસ કરીને જ્યારે અભ્યાસ સામગ્રી તમારી ભાષામાં ઉપલબ્ધ ન હોય. આ એપ 100 સત્તાવાર USCIS સિવિક્સ પ્રશ્નો અંગ્રેજી, મલયાલમ, ગુજરાતી અને વિયેતનામીસમાં પ્રદાન કરે છે — પ્રેક્ટિસ મોડ્સ, ઓડિયો સપોર્ટ અને તમારા કોંગ્રેસનલ ડિસ્ટ્રિક્ટ પર આધારિત વ્યક્તિગત પ્રશ્નો સાથે. તે સંપૂર્ણપણે મફત છે, અને હંમેશા રહેશે.",
            "'For Our Parents' được xây dựng bởi con cái của người nhập cư — để giúp cha mẹ và người lớn tuổi chuẩn bị cho bài thi nhập tịch Hoa Kỳ. Chúng tôi hiểu quá trình này căng thẳng đến thế nào — đặc biệt khi tài liệu học không có sẵn bằng ngôn ngữ của bạn. Ứng dụng này cung cấp tất cả 100 câu hỏi công dân USCIS chính thức bằng tiếng Anh, Malayalam, Gujarati và tiếng Việt — với các chế độ luyện tập, hỗ trợ âm thanh và câu hỏi cá nhân dựa trên khu vực quốc hội của bạn. Hoàn toàn miễn phí và sẽ luôn như vậy."
          )}
        </p>
      </motion.section>

      {/* ─── 2. How to Use the App ───────────────── */}
      <motion.section variants={fadeUp} className="space-y-3">
        <h2 className="text-[1.0625rem] font-bold text-text-body flex items-center gap-2">
          <BookOpen size={18} className="text-primary flex-shrink-0" />
          {l("How to Use This App", "ഈ ആപ്പ് എങ്ങനെ ഉപയോഗിക്കാം", "આ એપ કેવી રીતે વાપરવી", "Cách sử dụng ứng dụng này")}
        </h2>

        <div className="space-y-3">
          <Accordion
            title={l("1. Create an Account", "1. ഒരു അക്കൗണ്ട് ഉണ്ടാക്കുക", "1. ખાતું બનાવો", "1. Tạo tài khoản")}
            defaultOpen
          >
            <p className="text-[0.9375rem] text-text-body leading-relaxed">
              {l(
                "Tap \"Log In / Sign Up\" on the home page, then select \"Create Account.\" Enter your first name, last name, email, phone number, and choose a 4-digit PIN. You'll also select your state and congressional district so the app can ask you personalized questions about your representatives.",
                "ഹോം പേജിൽ \"ലോഗ് ഇൻ / സൈൻ അപ്\" ടാപ്പ് ചെയ്യുക, തുടർന്ന് \"അക്കൗണ്ട് ഉണ്ടാക്കുക\" തിരഞ്ഞെടുക്കുക. നിങ്ങളുടെ ആദ്യ പേര്, അവസാന പേര്, ഇമെയിൽ, ഫോൺ നമ്പർ എന്നിവ നൽകി 4 അക്ക PIN തിരഞ്ഞെടുക്കുക. നിങ്ങളുടെ സ്റ്റേറ്റും കോൺഗ്രഷണൽ ജില്ലയും തിരഞ്ഞെടുക്കുക — അങ്ങനെ ആപ്പിന് നിങ്ങളുടെ പ്രതിനിധികളെ കുറിച്ചുള്ള വ്യക്തിഗത ചോദ്യങ്ങൾ ചോദിക്കാൻ കഴിയും.",
                "હોમ પેજ પર \"લોગ ઇન / સાઇન અપ\" ટેપ કરો, પછી \"ખાતું બનાવો\" પસંદ કરો. તમારું પહેલું નામ, છેલ્લું નામ, ઇમેઇલ, ફોન નંબર દાખલ કરો અને 4-અંકનો PIN પસંદ કરો. તમારું રાજ્ય અને કોંગ્રેસનલ ડિસ્ટ્રિક્ટ પણ પસંદ કરો — જેથી એપ તમારા પ્રતિનિધિઓ વિશે વ્યક્તિગત પ્રશ્નો પૂછી શકે.",
                "Nhấn \"Đăng nhập / Đăng ký\" trên trang chủ, sau đó chọn \"Tạo tài khoản.\" Nhập tên, họ, email, số điện thoại và chọn mã PIN 4 chữ số. Bạn cũng sẽ chọn bang và khu vực quốc hội để ứng dụng có thể hỏi câu hỏi cá nhân về đại biểu của bạn."
              )}
            </p>
          </Accordion>

          <Accordion
            title={l(
              "2. Practice Mode (Study)",
              "2. പ്രാക്ടീസ് മോഡ് (പഠനം)",
              "2. પ્રેક્ટિસ મોડ (અભ્યાસ)",
              "2. Chế độ luyện tập (Học)"
            )}
          >
            <p className="text-gray-600 leading-relaxed">
              {l(
                "Practice Mode lets you study questions at your own pace. You can choose a specific topic (Government, Rights, History, or Symbols & Holidays) or study all topics together. After answering, you'll see whether you were correct and a detailed explanation. Use the 🔊 button to hear questions read aloud.",
                "പ്രാക്ടീസ് മോഡ് നിങ്ങളുടെ സ്വന്തം വേഗതയിൽ ചോദ്യങ്ങൾ പഠിക്കാൻ അനുവദിക്കുന്നു. ഒരു പ്രത്യേക വിഷയം (ഗവൺമെന്റ്, അവകാശങ്ങൾ, ചരിത്രം, അല്ലെങ്കിൽ ചിഹ്നങ്ങളും അവധി ദിനങ്ങളും) തിരഞ്ഞെടുക്കാം അല്ലെങ്കിൽ എല്ലാ വിഷയങ്ങളും ഒരുമിച്ച് പഠിക്കാം. ഉത്തരം നൽകിയ ശേഷം, നിങ്ങൾ ശരിയായിരുന്നോ എന്ന് കാണാം, വിശദമായ വിശദീകരണവും ലഭിക്കും. ചോദ്യങ്ങൾ ഉറക്കെ വായിക്കാൻ 🔊 ബട്ടൺ ഉപയോഗിക്കുക.",
                "પ્રેક્ટિસ મોડ તમને તમારી પોતાની ગતિએ પ્રશ્નોનો અભ્યાસ કરવા દે છે. તમે ચોક્કસ વિષય (સરકાર, અધિકારો, ઇતિહાસ, અથવા પ્રતીકો અને રજાઓ) પસંદ કરી શકો છો અથવા બધા વિષયો એકસાથે અભ્યાસ કરી શકો છો. જવાબ આપ્યા પછી, તમે સાચા હતા કે નહીં તે જોઈ શકશો અને વિગતવાર સમજૂતી મળશે. પ્રશ્નો મોટેથી વાંચવા માટે 🔊 બટન વાપરો.",
                "Chế độ luyện tập cho phép bạn học theo tốc độ riêng. Bạn có thể chọn chủ đề cụ thể (Chính phủ, Quyền, Lịch sử, hoặc Biểu tượng & Ngày lễ) hoặc học tất cả cùng lúc. Sau khi trả lời, bạn sẽ thấy đúng hay sai và giải thích chi tiết. Nhấn nút 🔊 để nghe đọc to."
              )}
            </p>
          </Accordion>

          <Accordion
            title={l(
              "3. Quiz Mode (Test Yourself)",
              "3. ക്വിസ് മോഡ് (സ്വയം ടെസ്റ്റ് ചെയ്യുക)",
              "3. ક્વિઝ મોડ (પોતાની કસોટી કરો)",
              "3. Chế độ thi (Tự kiểm tra)"
            )}
          >
            <p className="text-gray-600 leading-relaxed">
              {l(
                "Quiz Mode simulates the real civics test. You'll get multiple-choice questions and see your score at the end. This is great for testing yourself once you've studied. Your results are saved so you can track improvement over time.",
                "ക്വിസ് മോഡ് യഥാർത്ഥ സിവിക്സ് ടെസ്റ്റ് സിമുലേറ്റ് ചെയ്യുന്നു. മൾട്ടിപ്പിൾ-ചോയ്സ് ചോദ്യങ്ങൾ ലഭിക്കും, അവസാനം നിങ്ങളുടെ സ്കോർ കാണാം. പഠിച്ചതിനുശേഷം സ്വയം ടെസ്റ്റ് ചെയ്യാൻ ഇത് മികച്ചതാണ്. നിങ്ങളുടെ ഫലങ്ങൾ സേവ് ചെയ്യുന്നതിനാൽ കാലക്രമേണ പുരോഗതി ട്രാക്ക് ചെയ്യാം.",
                "ક્વિઝ મોડ ખરેખર સિવિક્સ ટેસ્ટનું અનુકરણ કરે છે. તમને મલ્ટિપલ-ચોઇસ પ્રશ્નો મળશે અને અંતે તમારો સ્કોર જોઈ શકશો. અભ્યાસ કર્યા પછી પોતાની કસોટી કરવા માટે આ શ્રેષ્ઠ છે. તમારા પરિણામો સેવ થાય છે જેથી સમય જતાં સુધારો ટ્રેક કરી શકો.",
                "Chế độ thi mô phỏng bài thi công dân thật. Bạn sẽ nhận được câu hỏi trắc nghiệm và xem điểm ở cuối. Đây là cách tuyệt vời để tự kiểm tra sau khi đã học. Kết quả được lưu lại để bạn theo dõi tiến bộ."
              )}
            </p>
          </Accordion>

          <Accordion
            title={l(
              "4. Review Mistakes",
              "4. തെറ്റുകൾ അവലോകനം ചെയ്യുക",
              "4. ભૂલોની સમીક્ષા કરો",
              "4. Ôn lại lỗi sai"
            )}
          >
            <p className="text-gray-600 leading-relaxed">
              {l(
                "The Review Mistakes feature shows you questions you previously got wrong. This is one of the most effective ways to study — focus on what you don't know yet. Keep reviewing until you can answer them all correctly!",
                "റിവ്യൂ മിസ്റ്റേക്സ് ഫീച്ചർ നിങ്ങൾ മുമ്പ് തെറ്റിച്ച ചോദ്യങ്ങൾ കാണിക്കുന്നു. പഠിക്കാനുള്ള ഏറ്റവും ഫലപ്രദമായ മാർഗ്ഗങ്ങളിലൊന്നാണ് ഇത് — നിങ്ങൾക്ക് ഇതുവരെ അറിയാത്ത കാര്യങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക. എല്ലാം ശരിയായി ഉത്തരം നൽകാൻ കഴിയുന്നത് വരെ അവലോകനം ചെയ്യുക!",
                "ભૂલોની સમીક્ષા ફીચર તમે અગાઉ ખોટા જવાબ આપેલા પ્રશ્નો બતાવે છે. અભ્યાસ કરવાની સૌથી અસરકારક રીતોમાંની એક છે — જે તમે હજુ જાણતા નથી તેના પર ધ્યાન આપો. જ્યાં સુધી બધા સાચા જવાબ ન આપી શકો ત્યાં સુધી સમીક્ષા કરતા રહો!",
                "Tính năng Ôn lại lỗi sai cho bạn thấy những câu hỏi đã trả lời sai. Đây là một trong những cách học hiệu quả nhất — tập trung vào những gì bạn chưa biết. Hãy ôn lại cho đến khi trả lời đúng tất cả!"
              )}
            </p>
          </Accordion>

          <Accordion
            title={l(
              "5. Dashboard (Your Stats)",
              "5. ഡാഷ്ബോർഡ് (നിങ്ങളുടെ സ്ഥിതിവിവരക്കണക്കുകൾ)",
              "5. ડેશબોર્ડ (તમારા આંકડા)",
              "5. Bảng điều khiển (Thống kê)"
            )}
          >
            <p className="text-gray-600 leading-relaxed">
              {l(
                "After logging in, your Dashboard shows your overall accuracy, number of questions attempted, and which topics need more work. Use this to guide your study sessions.",
                "ലോഗിൻ ചെയ്തതിനുശേഷം, നിങ്ങളുടെ ഡാഷ്ബോർഡ് മൊത്തത്തിലുള്ള കൃത്യത, ശ്രമിച്ച ചോദ്യങ്ങളുടെ എണ്ണം, കൂടുതൽ പ്രവർത്തനം ആവശ്യമായ വിഷയങ്ങൾ എന്നിവ കാണിക്കുന്നു. നിങ്ങളുടെ പഠന സെഷനുകൾ നയിക്കാൻ ഇത് ഉപയോഗിക്കുക.",
                "લોગ ઇન કર્યા પછી, તમારું ડેશબોર્ડ તમારી એકંદર ચોકસાઈ, પ્રયાસ કરેલા પ્રશ્નોની સંખ્યા અને કયા વિષયોને વધુ કામની જરૂર છે તે બતાવે છે. તમારા અભ્યાસ સત્રોને માર્ગદર્શન આપવા માટે આનો ઉપયોગ કરો.",
                "Sau khi đăng nhập, Bảng điều khiển hiển thị độ chính xác tổng thể, số câu hỏi đã làm và chủ đề nào cần ôn thêm. Dùng thông tin này để hướng dẫn việc học."
              )}
            </p>
          </Accordion>
        </div>
      </motion.section>

      {/* ─── 3. FAQ ───────────────── */}
      <motion.section variants={fadeUp} className="space-y-3">
        <h2 className="text-[1.0625rem] font-bold text-text-body flex items-center gap-2">
          <HelpCircle size={18} className="text-primary flex-shrink-0" />
          {l("Frequently Asked Questions", "പതിവ് ചോദ്യങ്ങൾ", "વારંવાર પૂછાતા પ્રશ્નો", "Câu hỏi thường gặp")}
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <Accordion key={i} title={faq.q[lang]}>
              <p className="text-[0.9375rem] text-text-body leading-relaxed">{faq.a[lang]}</p>
            </Accordion>
          ))}
        </div>
      </motion.section>

      {/* ─── 4. About the USCIS Naturalization Process */}
      <motion.section variants={fadeUp} className="space-y-4">
        <h2 className="text-[1.0625rem] font-bold text-text-body flex items-center gap-2">
          <Building2 size={18} className="text-primary flex-shrink-0" />
          {l("About the Naturalization Process", "നാച്ചുറലൈസേഷൻ പ്രക്രിയയെ കുറിച്ച്", "નેચરલાઇઝેશન પ્રક્રિ૯ા વિશે", "Về quy trình nhập tịch")}
        </h2>
        <div className="bg-white rounded-card border border-border p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-text-body mb-1">
              {l("Eligibility", "യോഗ്യത", "યોગ્યતા", "Điều kiện đủ tư cách")}
            </h3>
            <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
              {l(
                "You must be at least 18 years old, a lawful permanent resident (green card holder) for at least 5 years (or 3 years if married to a U.S. citizen), have continuous residence and physical presence in the U.S., and demonstrate good moral character.",
                "കുറഞ്ഞത് 18 വയസ്സ് ആയിരിക്കണം, കുറഞ്ഞത് 5 വർഷമായി നിയമാനുസൃത സ്ഥിര താമസക്കാരൻ (ഗ്രീൻ കാർഡ് ഉടമ) ആയിരിക്കണം (യു.എസ്. പൗരനെ വിവാഹം കഴിച്ചവർക്ക് 3 വർഷം), യു.എസ്.-ൽ തുടർച്ചയായ താമസവും ശാരീരിക സാന്നിധ്യവും ഉണ്ടായിരിക്കണം, നല്ല ധാർമ്മിക സ്വഭാവം പ്രകടിപ്പിക്കണം.",
                "તમે ઓછામાં ઓછા 18 વર્ષના હોવા જોઈએ, ઓછામાં ઓછા 5 વર્ષથી કાયદેસર કાયમી નિવાસી (ગ્રીન કાર્ડ ધારક) હોવા જોઈએ (યુ.એસ. નાગરિક સાથે લગ્ન કર્યા હોય તો 3 વર્ષ), યુ.એસ.માં સતત નિવાસ અને શારીરિક હાજરી હોવી જોઈએ, અને સારું નૈતિક ચરિત્ર દર્શાવવું જોઈએ.",
                "Bạn phải ít nhất 18 tuổi, là thường trú nhân hợp pháp (có thẻ xanh) ít nhất 5 năm (hoặc 3 năm nếu kết hôn với công dân Hoa Kỳ), có nơi cư trú liên tục và hiện diện thực tế tại Hoa Kỳ, và chứng minh phẩm chất đạo đức tốt."
              )}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-body mb-1">
              {l("The Interview", "ഇന്റർവ്യൂ", "ઇન્ટરવ્યૂ", "Buổi phỏng vấn")}
            </h3>
            <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
              {l(
                "Your naturalization interview includes an English test (reading, writing, and speaking) and a civics test. A USCIS officer will ask you up to 10 civics questions and you must answer at least 6 correctly. The interview is conducted in English.",
                "നിങ്ങളുടെ നാച്ചുറലൈസേഷൻ ഇന്റർവ്യൂവിൽ ഒരു ഇംഗ്ലീഷ് ടെസ്റ്റ് (വായന, എഴുത്ത്, സംസാരം) കൂടാതെ ഒരു സിവിക്സ് ടെസ്റ്റും ഉൾപ്പെടുന്നു. USCIS ഓഫീസർ 10 സിവിക്സ് ചോദ്യങ്ങൾ വരെ ചോദിക്കും, കുറഞ്ഞത് 6 എണ്ണം ശരിയായി ഉത്തരം നൽകണം. ഇന്റർവ്യൂ ഇംഗ്ലീഷിൽ ആണ് നടത്തുന്നത്.",
                "તમારા નેચરલાઇઝેશન ઇન્ટરવ્યૂમાં અંગ્રેજી ટેસ્ટ (વાંચન, લેખન અને બોલવું) અને સિવિક્સ ટેસ્ટનો સમાવેશ થાય છે. USCIS અધિકારી 10 સિવિક્સ પ્રશ્નો સુધી પૂછશે અને તમારે ઓછામાં ઓછા 6 સાચા જવાબ આપવા પડશે. ઇન્ટરવ્યૂ અંગ્રેજીમાં લેવામાં આવે છે.",
                "Buổi phỏng vấn nhập tịch bao gồm bài kiểm tra tiếng Anh (đọc, viết và nói) và bài thi công dân. Nhân viên USCIS sẽ hỏi tối đa 10 câu hỏi công dân và bạn phải trả lời đúng ít nhất 6 câu. Buổi phỏng vấn được tiến hành bằng tiếng Anh."
              )}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-body mb-1">
              {l("Test Day Tips", "ടെസ്റ്റ് ദിവസ നുറുങ്ങുകൾ", "ટેસ્ટ દિવસની ટિપ્સ", "Mẻ o ngày thi")}
            </h3>
            <ul className="text-[0.9375rem] text-text-secondary leading-relaxed space-y-1 list-disc list-inside">
              <li>
                {l(
                  "Bring your green card, state-issued ID, and appointment notice",
                  "നിങ്ങളുടെ ഗ്രീൻ കാർഡ്, സ്റ്റേറ്റ് ഇഷ്യൂ ചെയ്ത ID, അപ്പോയിന്റ്മെന്റ് നോട്ടീസ് എന്നിവ കൊണ്ടുവരുക",
                  "તમારું ગ્રીન કાર્ડ, રાજ્ય દ્વારા જારી કરેલ ID, અને એપોઇન્ટમેન્ટ નોટિસ લઈ આવો",
                  "Mang theo thẻ xanh, ID do tiểu bang cấp và giấy hẹn"
                )}
              </li>
              <li>
                {l(
                  "Arrive 30 minutes early",
                  "30 മിനിറ്റ് നേരത്തെ എത്തുക",
                  "30 મિનિટ વહેલા પહોંચો",
                  "Đến sớm 30 phút"
                )}
              </li>
              <li>
                {l(
                  "Stay calm — you've prepared well!",
                  "ശാന്തമായിരിക്കുക — നിങ്ങൾ നന്നായി തയ്യാറായിട്ടുണ്ട്!",
                  "શાંત રહો — તમે સારી તૈયારી કરી છે!",
                  "Giữ bình tĩnh — bạn đã chuẩn bị tốt!"
                )}
              </li>
              <li>
                {l(
                  "If you don't pass, you can retake the test within 60-90 days",
                  "പാസാകുന്നില്ലെങ്കിൽ, 60-90 ദിവസത്തിനുള്ളിൽ ടെസ്റ്റ് വീണ്ടും എടുക്കാം",
                  "જો પાસ ન થાઓ તો, 60-90 દિવસમાં ટેસ્ટ ફરીથી આપી શકો છો",
                  "Nếu không đạt, bạn có thể thi lại trong vòng 60-90 ngày"
                )}
              </li>
            </ul>
          </div>
          <div className="pt-2">
            <a
              href="https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[0.9375rem] font-semibold text-primary hover:text-primary-dark underline"
            >
              {l("Official USCIS Study Materials", "ഔദ്യോഗിക USCIS പഠന സാമഗ്രികൾ", "સત્તાવાર USCIS અભ્યાસ સામગ્રી", "Tài liệu học tập USCIS chính thức")}
            </a>
          </div>
        </div>
      </motion.section>

      {/* ─── 5. Troubleshooting ──────────────────── */}
      <motion.section variants={fadeUp} className="space-y-3">
        <h2 className="text-[1.0625rem] font-bold text-text-body flex items-center gap-2">
          <Wrench size={18} className="text-primary flex-shrink-0" />
          {l("Troubleshooting", "ട്രബിള്‍ഷൂട്ടിംഗ്", "સમસ્યા નિવારણ", "Khắc phục sự cố")}
        </h2>
        <div className="space-y-2">
          {troubleshooting.map((item, i) => (
            <Accordion key={i} title={item.issue[lang]}>
              <p className="text-[0.9375rem] text-text-body leading-relaxed">{item.fix[lang]}</p>
            </Accordion>
          ))}
        </div>
      </motion.section>

      {/* ─── 6. Contact / Feedback ───────────────── */}
      <motion.section variants={fadeUp} className="bg-white rounded-card border border-border p-5 sm:p-6 text-center space-y-4 shadow-card">
        <h2 className="text-[1.0625rem] font-bold text-text-body flex items-center justify-center gap-2">
          <Mail size={18} className="text-primary flex-shrink-0" />
          {l("Contact & Feedback", "ബന്ധപ്പെടുക & ഫീഡ്ബാക്ക്", "સંપર્ક અને પ્રતિસાદ", "Liên hệ & Phản hồi")}
        </h2>
        <p className="text-[1rem] text-text-secondary leading-relaxed max-w-xl mx-auto">
          {l(
            "Have a question, need help with your password or PIN, found a bug, or want to suggest a feature? Email us and we'll get back to you.",
            "ഒരു ചോദ്യമുണ്ടോ, പാസ്‌വേഡ് അല്ലെങ്കിൽ PIN-ൽ സഹായം വേണോ, ഒരു ബഗ് കണ്ടെത്തിയോ, അല്ലെങ്കിൽ ഒരു ഫീച്ചർ നിർദ്ദേശിക്കാൻ ആഗ്രഹിക്കുന്നുണ്ടോ? ഞങ്ങൾക്ക് ഇമെയിൽ ചെയ്യുക, ഞങ്ങൾ മറുപടി നൽകും.",
            "કોઈ પ્રશ્ન છે, પાસવર્ડ અથવા PIN માં મદદ જોઈએ છે, કોઈ બગ મળી છે, અથવા કોઈ ફીચર સૂચવવું છે? અમને ઇમેઇલ કરો અને અમે તમને જવાબ આપીશું.",
            "Có câu hỏi, cần trợ giúp về mật khẩu hoặc PIN, tìm thấy lỗi, hoặc muốn đề xuất tính năng? Gửi email cho chúng tôi và chúng tôi sẽ phản hồi."
          )}
        </p>
        <a
          href="mailto:contact.forourparents@gmail.com"
          className="inline-block px-8 py-3 rounded-btn bg-primary text-white font-semibold
                     hover:bg-primary-dark active:scale-95 transition-all no-underline
                     min-h-[48px] text-[1rem] shadow-btn"
        >
          contact.forourparents@gmail.com
        </a>
      </motion.section>

      {/* Bottom spacer */}
      <div className="h-8" />
    </motion.div>
  );
}
