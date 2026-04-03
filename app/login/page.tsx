"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { loginUserByNamePin } from "@/lib/storage";
import { useLanguage } from "@/lib/LanguageContext";

const NAVY = "#1B2A4A";
const RED = "#C41E3A";

/** Static quiz card mockup shown in the left panel */
function QuizMockup({ lang }: { lang: "en" | "ml" | "gu" | "vi" }) {
  const [selected, setSelected] = useState<number | null>(null);
  const correct = 0;
  const l = (en: string, ml: string, gu?: string, vi?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : (vi ?? en);
  const options = [
    l("The U.S. Constitution", "യു.എസ്. ഭരണഘടന", "યુ.એસ. બંધારણ", "Hiến pháp Hoa Kỳ"),
    l("The Declaration of Independence", "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം", "સ્વતંત્રતાની ઘોષણા", "Tuyên ngôn Độc lập"),
    l("The Bill of Rights", "ബിൽ ഓഫ് റൈറ്റ്സ്", "બિલ ઑફ રાઇટ્સ", "Tuyên ngôn Nhân quyền"),
    l("The Federalist Papers", "ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ്", "ફેડરાલિસ્ટ પેપર્સ", "Các bài viết Federalist"),
  ];

  return (
    <div
      style={{
        background: "#FFFFFF", borderRadius: 20,
        padding: "24px 20px", width: 300, maxWidth: "90%",
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        transform: "rotate(-4deg)",
        fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 4 }}>
        {l("QUESTION 2 / 10", "ചോദ്യം 2 / 10", "પ્રશ્ન 2 / 10", "CÂU 2 / 10")}
      </div>
      <div style={{ height: 3, background: "#E5E7EB", borderRadius: 999, marginBottom: 16, overflow: "hidden" }}>
        <div style={{ width: "20%", height: "100%", background: RED, borderRadius: 999 }} />
      </div>
      <p style={{ fontSize: 15, fontWeight: 600, color: NAVY, marginBottom: 16, lineHeight: 1.4 }}>
        {l("What is the supreme law of the land?", "രാജ്യത്തിന്റെ പരമോന്നത നിയമം എന്താണ്?", "જમીનની સર્વોચ્ચ કાનૂન શું છે?", "Luật tối cao của quốc gia là gì?")}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === correct;
          let bg = "#F9FAFB";
          let border = "1px solid #E5E7EB";
          let color = "#374151";
          if (isSelected && isCorrect) { bg = "#DCFCE7"; border = "1px solid #86EFAC"; color = "#16A34A"; }
          else if (isSelected && !isCorrect) { bg = "#FEE2E2"; border = "1px solid #FCA5A5"; color = "#DC2626"; }
          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              style={{
                padding: "8px 12px", borderRadius: 10, fontSize: 13,
                background: bg, border, color,
                textAlign: "left", cursor: "pointer", fontWeight: isSelected ? 600 : 500,
                fontFamily: "inherit", transition: "all 0.15s",
              }}
            >
              {isSelected && isCorrect && "✓ "}{isSelected && !isCorrect && "✗ "}{opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const { lang } = useLanguage();
  const l = (en: string, ml: string, gu?: string, vi?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : (vi ?? en);
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%", height: 56, padding: "0 20px", fontSize: 17,
    fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
    color: NAVY, background: "#FFFFFF",
    border: "1px solid #E5E7EB", borderRadius: 16,
    outline: "none", boxSizing: "border-box",
  };

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.trim()) { setError(l("Please enter your email.", "ദയവായി നിങ്ങളുടെ ഇമെയിൽ നൽകുക.", "કૃપા કરીને તમારું ઇમેલ દાખલ કરો.", "Vui lòng nhập email của bạn.")); return; }
    if (pin.length !== 4) { setError(l("Please enter your 4-digit PIN.", "ദയവായി നിങ്ങളുടെ 4 അക്ക PIN നൽകുക.", "કૃપા કરીને તમારો 4 અંકનો PIN દાખલ કરો.", "Vui lòng nhập mã PIN 4 chữ số của bạn.")); return; }
    setLoading(true);
    const user = await loginUserByNamePin(email.trim(), pin);
    if (user) {
      router.push("/");
    } else {
      setError(l("No account found with that email and PIN. Please check and try again.", "ആ ഇമെയിലും PIN-ഉം ഉപയോഗിച്ച് അക്കൗണ്ട് കണ്ടെത്താനായില്ല. ദയവായി പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.", "આ ઇમેલ અને PIN સાથે કોઈ એકાઉન્ટ મળ્યું નથી. કૃપા કરીને ચકાસી ફરી પ્રયાસ કરો.", "Không tìm thấy tài khoản với email và PIN đó. Vui lòng kiểm tra và thử lại."));
      setPin("");
    }
    setLoading(false);
  }

  return (
    <div
      className="login-page"
      style={{
        minHeight: "100vh", display: "flex",
        fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
      }}
    >
      {/* ── LEFT PANEL ── */}
      <div
        style={{
          flex: 1, background: "#FFF1F1",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 40, position: "relative", overflow: "hidden",
        }}
        className="hidden md:flex"
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(196,30,58,0.06)" }} />
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(27,42,74,0.06)" }} />
        <QuizMockup lang={lang} />
      </div>

      {/* ── RIGHT PANEL ── */}
      <div
        style={{
          flex: 1, background: "#FFFFFF",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "60px 48px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ width: "100%", maxWidth: 400 }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 40 }}>
            <Image src="/logo.png" alt="For Our Parents" width={36} height={36} style={{ borderRadius: 10 }} />
            <span style={{ fontWeight: 700, fontSize: 17, color: NAVY }}>For Our Parents</span>
          </Link>

          <h1 style={{ fontSize: 32, fontWeight: 700, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            {l("Sign in to continue", "തുടരാൻ സൈൻ ഇൻ ചെയ്യുക", "આગળ વધવા માટે સાઇન ઇન કરો", "Đăng nhập để tiếp tục")}
          </h1>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 15, fontWeight: 600, color: NAVY, marginBottom: 8 }}>
                {l("Email Address", "ഇമെയിൽ വിലാസം", "ઇમેલ સરનામું", "Địa chỉ email")}
              </label>
              <input
                type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={l("Enter your email", "നിങ്ങളുടെ ഇമെയിൽ നൽകുക", "તમારું ઇમેલ દાખલ કરો", "Nhập email của bạn")}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = NAVY)}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                disabled={loading}
                autoComplete="email"
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 15, fontWeight: 600, color: NAVY, marginBottom: 8 }}>
                {l("4-digit PIN", "4 അക്ക PIN", "4 અંકનો PIN", "PIN 4 chữ số")}
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPin ? "text" : "password"}
                  inputMode="numeric" maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  placeholder={l("Enter your PIN", "നിങ്ങളുടെ PIN നൽകുക", "તમારો PIN દાખલ કરો", "Nhập PIN của bạn")}
                  style={{ ...inputStyle, paddingRight: 52 }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = NAVY)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                  disabled={loading}
                  autoComplete="current-password"
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
              <div style={{ background: "#FEE2E2", color: "#DC2626", border: "1px solid #FCA5A5", borderRadius: 12, padding: "12px 16px", fontSize: 14 }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", height: 56, marginTop: 8,
                background: loading ? "#E5E7EB" : RED,
                color: loading ? "#9CA3AF" : "#FFFFFF",
                border: "none", borderRadius: 999, fontSize: 17, fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#A31830"; }}
              onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = RED; }}
            >
              {loading ? l("Signing in...", "സൈൻ ഇൻ ചെയ്യുന്നു...", "સાઇન ઇન થઈ રહ્યું છે...", "Đang đăng nhập...") : l("Sign In", "സൈൻ ഇൻ", "સાઇન ઇન", "Đăng nhập")}
            </button>
          </form>

          <div style={{ marginTop: 20, textAlign: "center" }}>
            <Link
              href="/help"
              style={{ fontSize: 14, color: RED, textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              {l("Forgot your PIN?", "PIN മറന്നോ?", "તમારો PIN ભૂલી ગયા?", "Quên PIN của bạn?")}
            </Link>
          </div>

          <p style={{ marginTop: 16, textAlign: "center", fontSize: 15, color: "#6B7280" }}>
            {l("Don't have an account?", "അക്കൗണ്ട് ഇല്ലേ?", "એકાઉન્ટ નથી?", "Chưa có tài khoản?")}{" "}
            <Link href="/onboarding" style={{ color: RED, fontWeight: 600, textDecoration: "none" }}>
              {l("Sign up", "സൈൻ അപ്പ്", "સાઇન અપ", "Đăng ký")}
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
