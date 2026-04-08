"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { signupUser, setCurrentUser, clearAllMistakes } from "@/lib/storage";
import { getStateOptions, getDistrictOptions } from "@/data/representatives";
import type { Lang } from "@/data/questions";

const NAVY = "#1B2A4A";
const RED = "#C41E3A";

const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ml", label: "Malayalam (മലയാളം)" },
  { code: "gu", label: "Gujarati (ગુજરાતી)" },
  { code: "vi", label: "Vietnamese (Tiếng Việt)" },
  { code: "tl", label: "Tagalog" },
];

const RULE_OPTIONS = [
  { value: "50/20", title: "50/20 Rule", desc: "Age 50+ with 20+ years as a Green Card holder" },
  { value: "55/15", title: "55/15 Rule", desc: "Age 55+ with 15+ years as a Green Card holder" },
  { value: "65/20", title: "65/20 Special Consideration", desc: "Age 65+ with 20+ years — simplified question set" },
  { value: "unsure", title: "I'm not sure", desc: "We'll show you all questions" },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.22, ease: "easeOut" as const } },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.18, ease: "easeIn" as const } }),
};

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
      <div style={{ flex: 1, height: 4, background: "#E5E7EB", borderRadius: 999, overflow: "hidden" }}>
        <motion.div
          animate={{ width: `${(step / total) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ height: "100%", background: NAVY, borderRadius: 999 }}
        />
      </div>
      <span style={{ fontSize: 13, color: "#9CA3AF", fontWeight: 500, whiteSpace: "nowrap" }}>{step}/{total}</span>
    </div>
  );
}

export default function OnboardingPage() {
  const router = useRouter();
  const { lang, setLang } = useLanguage();
  const l = (en: string, ml: string, gu?: string, vi?: string, tl?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : lang === "vi" ? (vi ?? en) : (tl ?? en);

  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);

  // Form state
  const [language, setLanguage] = useState<Lang>("en");
  const [rule, setRule] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function go(nextStep: number, direction: number) {
    setDir(direction);
    setStep(nextStep);
  }

  function formatPhone(raw: string) {
    const d = raw.replace(/\D/g, "").slice(0, 10);
    if (d.length <= 3) return d.length ? `(${d}` : "";
    if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }

  function ruleTitle(value: string) {
    switch (value) {
      case "50/20":
        return l("50/20 Rule", "50/20 നിയമം", "50/20 નિયમ", "Quy tắc 50/20", "Panuntunan 50/20");
      case "55/15":
        return l("55/15 Rule", "55/15 നിയമം", "55/15 નિયમ", "Quy tắc 55/15", "Panuntunan 55/15");
      case "65/20":
        return l("65/20 Special Consideration", "65/20 പ്രത്യേക പരിഗണന", "65/20 વિશેષ વિચારણા", "Cân nhắc đặc biệt 65/20", "65/20 Espesyal na Konsiderasyon");
      default:
        return l("I'm not sure", "എനിക്ക് ഉറപ്പില്ല", "મને ખાતરી નથી", "Tôi không chắc", "Hindi ako sigurado");
    }
  }

  function ruleDesc(value: string) {
    switch (value) {
      case "50/20":
        return l("Age 50+ with 20+ years as a Green Card holder", "50+ വയസും 20+ വർഷം ഗ്രീൻ കാർഡ് ഉടമയും", "50+ ઉંમર અને 20+ વર્ષનો ગ્રીન કાર્ડ ધારક", "Từ 50 tuổi trở lên và có thẻ xanh từ 20+ năm", "Edad 50+ na may 20+ taon bilang may hawak ng Green Card");
      case "55/15":
        return l("Age 55+ with 15+ years as a Green Card holder", "55+ വയസും 15+ വർഷം ഗ്രീൻ കാർഡ് ഉടമയും", "55+ ઉંમર અને 15+ વર્ષનો ગ્રીન કાર્ડ ધારક", "Từ 55 tuổi trở lên và có thẻ xanh từ 15+ năm", "Edad 55+ na may 15+ taon bilang may hawak ng Green Card");
      case "65/20":
        return l("Age 65+ with 20+ years - simplified question set", "65+ വയസും 20+ വർഷവും - ലളിതമായ ചോദ്യങ്ങൾ", "65+ ઉંમર અને 20+ વર્ષ - સરળ પ્રશ્ન સમૂહ", "Từ 65 tuổi trở lên và có thẻ xanh từ 20+ năm - bộ câu hỏi đơn giản hơn", "Edad 65+ na may 20+ taon - pinasimpleng hanay ng mga tanong");
      default:
        return l("We'll show you all questions", "എല്ലാ ചോദ്യങ്ങളും ഞങ്ങൾ കാണിക്കും", "અમે તમને બધા પ્રશ્નો બતાવીશું", "Chúng tôi sẽ hiển thị toàn bộ câu hỏi cho bạn", "Ipapakita namin sa iyo ang lahat ng tanong");
    }
  }

  async function handleCreateAccount(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!firstName.trim() || !lastName.trim()) { setError(l("Please enter your first and last name.", "ദയവായി നിങ്ങളുടെ പേരും കുടുംബപ്പേരും നൽകുക.", "કૃપા કરીને તમારું પ્રથમ અને છેલ્લું નામ દાખલ કરો.", "Vui lòng nhập tên và họ của bạn.", "Mangyaring ilagay ang iyong pangalan at apelyido.")); return; }
    if (!email.trim()) { setError(l("Please enter your email.", "ദയവായി നിങ്ങളുടെ ഇമെയിൽ നൽകുക.", "કૃપા કરીને તમારું ઇમેલ દાખલ કરો.", "Vui lòng nhập email của bạn.", "Mangyaring ilagay ang iyong email.")); return; }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) { setError(l("Please enter a valid 10-digit phone number.", "ദയവായി സാധുവായ 10 അക്ക ഫോൺ നമ്പർ നൽകുക.", "કૃપા કરીને માન્ય 10 અંકનો ફોન નંબર દાખલ કરો.", "Vui lòng nhập số điện thoại 10 chữ số hợp lệ.", "Mangyaring maglagay ng wastong 10-digit na numero ng telepono.")); return; }
    if (pin.length !== 4) { setError(l("Please create a 4-digit PIN.", "ദയവായി 4 അക്ക PIN സൃഷ്ടിക്കുക.", "કૃપા કરીને 4 અંકનો PIN બનાવો.", "Vui lòng tạo mã PIN 4 chữ số.", "Mangyaring gumawa ng 4-digit na PIN.")); return; }
    setLoading(true);
    const { user, errorMsg } = await signupUser(
      firstName.trim(), lastName.trim(), email.trim(), pin,
      phone.trim(), state || undefined,
      district !== "" ? Number(district) : undefined
    );
    if (user) {
      setCurrentUser(user);
      clearAllMistakes();
      setLang(language);
      router.push("/");
    } else {
      setError(errorMsg || l("Something went wrong. Please try again.", "എന്തോ പിഴച്ചു. ദയവായി വീണ്ടും ശ്രമിക്കുക.", "કૈંક ખોટું થયું. કૃપા કરીને ફરી પ્રયાસ કરો.", "Có lỗi xảy ra. Vui lòng thử lại.", "May nangyaring mali. Mangyaring subukan muli."));
    }
    setLoading(false);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", height: 56, padding: "0 20px", fontSize: 17,
    fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
    color: NAVY, background: "#FFFFFF",
    border: "1px solid #E5E7EB", borderRadius: 16,
    outline: "none", boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 15, fontWeight: 600,
    color: NAVY, marginBottom: 8,
    fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
  };

  return (
    <div className="onboarding-page" style={{ minHeight: "100vh", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
      {/* Logo bar */}
      <div style={{ padding: "20px 32px" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/logo.png" alt="For Our Parents" width={32} height={32} style={{ borderRadius: 8 }} />
          <span style={{ fontFamily: "var(--font-dm-sans, system-ui, sans-serif)", fontWeight: 700, fontSize: 17, color: NAVY }}>
            For Our Parents
          </span>
        </Link>
      </div>

      {/* Centered container */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 16px 60px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: "#F5F5F5", borderRadius: 24, padding: "48px 48px",
            width: "100%", maxWidth: 560,
          }}
        >
          {/* Back arrow (steps 2+) */}
          {step > 1 && (
            <button
              onClick={() => go(step - 1, -1)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 4,
                color: "#9CA3AF", fontSize: 15, fontWeight: 500,
                fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                padding: 0, marginBottom: 16,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = NAVY)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              <ChevronLeft size={18} /> {l("Back", "പിന്നോട്ട്", "પાછા", "Quay lại", "Bumalik")}
            </button>
          )}

          <ProgressBar step={step} total={4} />

          <AnimatePresence mode="wait" custom={dir}>
            {/* ── STEP 1: Language ── */}
            {step === 1 && (
              <motion.div key="step1" custom={dir} variants={variants} initial="enter" animate="center" exit="exit">
                <h1 style={{ fontFamily: "var(--font-dm-sans, system-ui, sans-serif)", fontWeight: 700, fontSize: 26, color: NAVY, textAlign: "center", marginBottom: 8 }}>
                  {l("What language would you like to study in?", "നിങ്ങൾ ഏത് ഭാഷയിലാണ് പഠിക്കാൻ ആഗ്രഹിക്കുന്നത്?", "તમે કઈ ભાષામાં અભ્યાસ કરવા માંગો છો?", "Bạn muốn học bằng ngôn ngữ nào?", "Saang wika mo gustong mag-aral?")}
                </h1>
                <p style={{ textAlign: "center", fontSize: 15, color: "#9CA3AF", marginBottom: 28, fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
                  {l("You can change this anytime.", "ഇത് എപ്പോൾ വേണമെങ്കിലും മാറ്റാം.", "તમે આ ક્યારે પણ બદલી શકો છો.", "Bạn có thể đổi bất cứ lúc nào.", "Maaari mo itong palitan anumang oras.")}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {LANG_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLanguage(opt.code);
                        setTimeout(() => go(2, 1), 300);
                      }}
                      style={{
                        width: "100%", height: 56, padding: "0 24px",
                        textAlign: "left", fontSize: 17, fontWeight: 500,
                        fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                        color: language === opt.code ? NAVY : "#374151",
                        background: "#FFFFFF",
                        border: language === opt.code ? `2px solid ${NAVY}` : "2px solid transparent",
                        borderRadius: 16, cursor: "pointer",
                        transition: "border-color 0.15s, background 0.15s",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                      }}
                      onMouseEnter={(e) => { if (language !== opt.code) (e.currentTarget as HTMLElement).style.background = "#F9FAFB"; }}
                      onMouseLeave={(e) => { if (language !== opt.code) (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── STEP 2: Citizenship Rule ── */}
            {step === 2 && (
              <motion.div key="step2" custom={dir} variants={variants} initial="enter" animate="center" exit="exit">
                <h1 style={{ fontFamily: "var(--font-dm-sans, system-ui, sans-serif)", fontWeight: 700, fontSize: 26, color: NAVY, textAlign: "center", marginBottom: 8 }}>
                  {l("Which citizenship rule applies to you?", "ഏത് പൗരത്വ നിയമമാണ് നിങ്ങളെ ബാധിക്കുന്നത്?", "તમારા માટે કયો નાગરિકતા નિયમ લાગુ પડે છે?", "Quy tắc quốc tịch nào áp dụng cho bạn?", "Aling panuntunan sa pagkamamamayan ang naaangkop sa iyo?")}
                </h1>
                <p style={{ textAlign: "center", fontSize: 15, color: "#9CA3AF", marginBottom: 28, fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
                  {l("This helps us show you the right set of questions.", "ശരിയായ ചോദ്യങ്ങൾ കാണിക്കാൻ ഇത് സഹായിക്കും.", "આ અમને તમને યોગ્ય પ્રશ્નો બતાવવામાં મદદ કરે છે.", "Điều này giúp chúng tôi hiển thị đúng bộ câu hỏi cho bạn.", "Makakatulong ito sa amin na ipakita sa iyo ang tamang hanay ng mga tanong.")}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {RULE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setRule(opt.value);
                        setTimeout(() => go(3, 1), 300);
                      }}
                      style={{
                        width: "100%", minHeight: 72, padding: "16px 24px",
                        textAlign: "left",
                        fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                        color: NAVY, background: "#FFFFFF",
                        border: rule === opt.value ? `2px solid ${NAVY}` : "2px solid transparent",
                        borderRadius: 16, cursor: "pointer",
                        transition: "border-color 0.15s, background 0.15s",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                      }}
                      onMouseEnter={(e) => { if (rule !== opt.value) (e.currentTarget as HTMLElement).style.background = "#F9FAFB"; }}
                      onMouseLeave={(e) => { if (rule !== opt.value) (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; }}
                    >
                      <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 4 }}>{ruleTitle(opt.value)}</div>
                      <div style={{ fontWeight: 400, fontSize: 14, color: "#9CA3AF" }}>{ruleDesc(opt.value)}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── STEP 3: State & District ── */}
            {step === 3 && (
              <motion.div key="step3" custom={dir} variants={variants} initial="enter" animate="center" exit="exit">
                <h1 style={{ fontFamily: "var(--font-dm-sans, system-ui, sans-serif)", fontWeight: 700, fontSize: 26, color: NAVY, textAlign: "center", marginBottom: 8 }}>
                  {l("Where do you live?", "നിങ്ങൾ എവിടെയാണ് താമസിക്കുന്നത്?", "તમે ક્યાં રહેો છો?", "Bạn sống ở đâu?", "Saan ka nakatira?")}
                </h1>
                <p style={{ textAlign: "center", fontSize: 15, color: "#9CA3AF", marginBottom: 28, fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
                  {l("We'll personalize your practice questions with your local representatives.", "നിങ്ങളുടെ പ്രദേശത്തെ പ്രതിനിധികളെ അടിസ്ഥാനമാക്കി ചോദ്യങ്ങൾ വ്യക്തിഗതമാക്കാം.", "અમે તમારા સ્થાનિક પ્રતિનિધિઓ આધારે પ્રેક્ટિસ પ્રશ્નોને વ્યક્તિગત બનાવશું.", "Chúng tôi sẽ cá nhân hóa câu hỏi luyện tập dựa trên đại diện địa phương của bạn.", "Ipe-personalize namin ang iyong mga tanong batay sa iyong mga lokal na kinatawan.")}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>{l("State", "സംസ്ഥാനം", "રાજ્ય", "Tiểu bang", "Estado")}</label>
                    <select
                      value={state}
                      onChange={(e) => { setState(e.target.value); setDistrict(""); }}
                      style={{ ...inputStyle, appearance: "none" as const }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = NAVY)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                    >
                      <option value="">{l("Select your state", "നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക", "તમારું રાજ્ય પસંદ કરો", "Chọn tiểu bang của bạn", "Piliin ang iyong estado")}</option>
                      {getStateOptions().map((s) => (
                        <option key={s.code} value={s.code}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>{l("Congressional District", "കോൺഗ്രഷണൽ ജില്ലാ", "કોંગ્રેસનલ જિલ્લો", "Khu vực quốc hội", "Distrito ng Kongreso")}</label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      disabled={!state}
                      style={{ ...inputStyle, appearance: "none" as const, opacity: state ? 1 : 0.5 }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = NAVY)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                    >
                      <option value="">{l("Select your district", "നിങ്ങളുടെ ജില്ല തിരഞ്ഞെടുക്കുക", "તમારો જિલ્લો પસંદ કરો", "Chọn khu vực của bạn", "Piliin ang iyong distrito")}</option>
                      {state && getDistrictOptions(state).map((d) => (
                        <option key={d.value} value={d.value}>
                          {d.value === 0 ? l("At-Large (statewide)", "അറ്റ്-ലാർജ് (സംസ്ഥാനവ്യാപകം)", "એટ-લાર્જ (સમગ્ર રાજ્ય)", "At-Large (toàn tiểu bang)", "At-Large (buong estado)") : d.label}
                        </option>
                      ))}
                    </select>
                    <a
                      href="https://www.house.gov/representatives/find-your-representative"
                      target="_blank" rel="noopener noreferrer"
                      style={{ display: "block", marginTop: 8, fontSize: 14, color: RED, textDecoration: "none", fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                    >
                      {l("Don't know your district? Find it here ->", "നിങ്ങളുടെ ജില്ല അറിയില്ലേ? ഇവിടെ കണ്ടെത്തൂ ->", "તમારો જિલ્લો ખબર નથી? અહીં શોધો ->", "Không biết khu vực của bạn? Tìm tại đây ->", "Hindi mo alam ang iyong distrito? Hanapin dito ->")}
                    </a>
                  </div>
                  <button
                    onClick={() => go(4, 1)}
                    disabled={!state || !district}
                    style={{
                      width: "100%", height: 56, marginTop: 8,
                      background: state && district ? NAVY : "#E5E7EB",
                      color: state && district ? "#FFFFFF" : "#9CA3AF",
                      border: "none", borderRadius: 999, fontSize: 16, fontWeight: 700,
                      fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                      cursor: state && district ? "pointer" : "not-allowed",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => { if (state && district) (e.currentTarget as HTMLElement).style.background = "#0F1D35"; }}
                    onMouseLeave={(e) => { if (state && district) (e.currentTarget as HTMLElement).style.background = NAVY; }}
                  >
                    {l("Continue", "തുടരുക", "ચાલુ રાખો", "Tiếp tục", "Magpatuloy")}
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── STEP 4: Create Account ── */}
            {step === 4 && (
              <motion.div key="step4" custom={dir} variants={variants} initial="enter" animate="center" exit="exit">
                <h1 style={{ fontFamily: "var(--font-dm-sans, system-ui, sans-serif)", fontWeight: 700, fontSize: 26, color: NAVY, textAlign: "center", marginBottom: 32 }}>
                  {l("Create an account to get started", "തുടങ്ങാൻ ഒരു അക്കൗണ്ട് സൃഷ്ടിക്കൂ", "શરૂ કરવા માટે એકાઉન્ટ બનાવો", "Tạo tài khoản để bắt đầu", "Gumawa ng account para makapagsimula")}
                </h1>
                <form onSubmit={handleCreateAccount} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={labelStyle}>{l("First Name", "പേര്", "પ્રથમ નામ", "Tên", "Pangalan")}</label>
                      <input
                        type="text" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={l("First name", "പേര്", "પ્રથમ નામ", "Tên", "Pangalan")}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = NAVY)}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                        autoComplete="given-name"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>{l("Last Name", "കുടുംബപ്പേര്", "અટક", "Họ", "Apelyido")}</label>
                      <input
                        type="text" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={l("Last name", "കുടുംബപ്പേര്", "અટક", "Họ", "Apelyido")}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = NAVY)}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>{l("Email Address", "ഇമെയിൽ വിലാസം", "ઇમેલ સરનામું", "Địa chỉ email", "Email Address")}</label>
                    <input
                      type="email" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={l("you@example.com", "you@example.com", "you@example.com", "you@example.com")}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = NAVY)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>{l("Phone Number", "ഫോൺ നമ്പർ", "ફોન નંબર", "Số điện thoại", "Numero ng Telepono")}</label>
                    <input
                      type="tel" value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                      placeholder={l("(555) 123-4567", "(555) 123-4567", "(555) 123-4567", "(555) 123-4567")}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = NAVY)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>{l("Create a 4-digit PIN", "4 അക്ക PIN സൃഷ്ടിക്കൂ", "4 અંકનો PIN બનાવો", "Tạo mã PIN 4 chữ số", "Gumawa ng 4-digit na PIN")}</label>
                    <div style={{ position: "relative" }}>
                      <input
                        type={showPin ? "text" : "password"}
                        inputMode="numeric" maxLength={4}
                        value={pin}
                        onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                        placeholder="••••"
                        style={{ ...inputStyle, paddingRight: 52 }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = NAVY)}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPin(!showPin)}
                        style={{
                          position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                          background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: 0,
                          display: "flex", alignItems: "center",
                        }}
                      >
                        {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div style={{ background: "#FEE2E2", color: "#DC2626", border: "1px solid #FCA5A5", borderRadius: 12, padding: "12px 16px", fontSize: 14, fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !firstName.trim() || !lastName.trim() || !email.trim() || phone.replace(/\D/g, "").length < 10 || pin.length !== 4}
                    style={{
                      width: "100%", height: 56, marginTop: 8,
                      background: (!loading && firstName.trim() && lastName.trim() && email.trim() && phone.replace(/\D/g, "").length >= 10 && pin.length === 4) ? RED : "#E5E7EB",
                      color: (!loading && firstName.trim() && lastName.trim() && email.trim() && phone.replace(/\D/g, "").length >= 10 && pin.length === 4) ? "#FFFFFF" : "#9CA3AF",
                      border: "none", borderRadius: 999, fontSize: 17, fontWeight: 700,
                      fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                      cursor: (!loading && firstName.trim() && lastName.trim() && email.trim() && phone.replace(/\D/g, "").length >= 10 && pin.length === 4) ? "pointer" : "not-allowed",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      if (!loading && firstName.trim() && lastName.trim() && email.trim() && phone.replace(/\D/g, "").length >= 10 && pin.length === 4) el.style.background = "#A31830";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      if (!loading && firstName.trim() && lastName.trim() && email.trim() && phone.replace(/\D/g, "").length >= 10 && pin.length === 4) el.style.background = RED;
                    }}
                  >
                    {loading ? l("Creating account...", "അക്കൗണ്ട് സൃഷ്ടിക്കുന്നു...", "એકાઉન્ટ બનાવાઈ રહ્યું છે...", "Đang tạo tài khoản...", "Gumagawa ng account...") : l("Create Account", "അക്കൗണ്ട് സൃഷ്ടിക്കൂ", "એકાઉન્ટ બનાવો", "Tạo tài khoản", "Gumawa ng Account")}
                  </button>

                  <p style={{ textAlign: "center", fontSize: 15, color: "#6B7280", fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
                    {l("Already have an account?", "ഇതിനകം അക്കൗണ്ട് ഉണ്ടോ?", "પહેલેથી એકાઉન્ટ છે?", "Đã có tài khoản?", "Mayroon nang account?")}{" "}
                    <Link href="/login" style={{ color: RED, fontWeight: 600, textDecoration: "none" }}>{l("Sign in", "സൈൻ ഇൻ", "સાઇન ઇન", "Đăng nhập", "Mag-sign in")}</Link>
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
