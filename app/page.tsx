"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { getCurrentUser } from "@/lib/storage";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import DemoQuiz from "@/components/DemoQuiz";
import FAQAccordion from "@/components/FAQAccordion";

/* ─── Color constants ─── */
const NAVY = "#1B2A4A";
const RED = "#C41E3A";

/* ─── Animation helpers ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.15 } },
};

/* ─── Marquee data ─── */
const marqueeItems = [
  { text: "English", native: "English" },
  { text: "Malayalam", native: "മലയാളം" },
  { text: "Gujarati", native: "ગુજરાતી" },
  { text: "Vietnamese", native: "Tiếng Việt" },
  { text: "Tagalog", native: "Tagalog" },
  { text: "English", native: "English" },
  { text: "Malayalam", native: "മലയാളം" },
  { text: "Gujarati", native: "ગુજરાતી" },
  { text: "Vietnamese", native: "Tiếng Việt" },
  { text: "Tagalog", native: "Tagalog" },
];

/* ─── Floating Nav (appears after hero) ─── */
function FloatingNav() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 480);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: "-50%" }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20, x: "-50%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        zIndex: 100,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          background: NAVY,
          borderRadius: 999,
          padding: "10px 20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <Image src="/logo.png" alt="For Our Parents" width={26} height={26} style={{ borderRadius: 6 }} />
          <span
            style={{
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
              whiteSpace: "nowrap",
            }}
          >
            For Our Parents
          </span>
        </Link>

        <Link
          href="/login"
          prefetch={false}
          style={{
            background: RED,
            color: "#FFFFFF",
            borderRadius: 999,
            padding: "7px 18px",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
            whiteSpace: "nowrap",
          }}
        >
          {t("landingGetStarted", lang)}
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Language Marquee ─── */
function LanguageMarquee() {
  return (
    <section style={{ background: RED, overflow: "hidden", padding: "14px 0" }}>
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "0 36px",
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ opacity: 0.55, fontSize: 20, fontWeight: 300 }}>★</span>
            {item.text}
            <span style={{ opacity: 0.7, fontSize: 14, fontWeight: 400 }}>({item.native})</span>
          </span>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const { lang, mounted } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      router.replace("/dashboard");
      return;
    }
    setIsLoggedIn(false);
  }, [router]);

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <div className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: RED, borderTopColor: "transparent" }} />
      </div>
    );
  }

  if (isLoggedIn) {
    return <AuthenticatedHome />;
  }

  const l = (en: string, ml: string, gu: string, vi: string, tl?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? gu : lang === "vi" ? vi : (tl ?? en);

  return (
    <div className="landing-page" style={{ background: "#FFFFFF" }}>

      {/* Floating nav pill */}
      <FloatingNav />

      {/* ══════════════════════════════════════════════════
          SECTION 1: HERO
          ══════════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", padding: "80px 0 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 64,
              flexWrap: "wrap",
            }}
          >
            {/* Left: Text + CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeFromLeft}
              style={{ flex: "1 1 380px" }}
            >
              {/* Overline */}
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: RED,
                  marginBottom: 16,
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                }}
              >
                {l("U.S. Citizenship Test Prep", "U.S. പൗരത്വ ടെസ്റ്റ് തയ്യാറെടുപ്പ്", "U.S. નાગરિકતા ટેસ્ટ તૈયારી", "Ôn thi quốc tịch Hoa Kỳ", "Paghahanda sa U.S. Citizenship Test")}
              </p>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: NAVY,
                  lineHeight: 1.1,
                  marginBottom: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                {t("landingHero", lang)}
              </h1>

              {/* Subtext */}
              <p
                style={{
                  fontSize: 17,
                  color: "#4B5563",
                  lineHeight: 1.65,
                  marginBottom: 36,
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                }}
              >
                {l(
                  "Free practice in English, Malayalam, Gujarati, Vietnamese, and Tagalog. Designed for immigrant parents \u2014 large text, audio, and zero fluff.",
                  "ഇംഗ്ലീഷ്, മലയാളം, ഗുജറാത്തി, വിയറ്റ്നാമീസ്, ടാഗലോഗ് ഭാഷകളിൽ സൗജന്യ പരിശീലനം. കുടിയേറ്റ മാതാപിതാക്കൾക്കായി — വലിയ ടെക്സ്റ്റ്, ഓഡിയോ, അനാവശ്യമില്ല.",
                  "અંગ્રેજી, મલયાલમ, ગુજરાતી, વિએતનામીસ અને ટાગાલોગમાં મફત પ્રેક્ટિસ. ઈમિગ્રન્ટ માતાપિતા માટે — મોટું લખાણ, ઑડિયો, કોઈ બિનજરૂરી વસ્તુ નહીં.",
                  "Luyện tập miễn phí bằng tiếng Anh, Malayalam, Gujarati, tiếng Việt và Tagalog. Thiết kế cho phụ huynh nhập cư — chữ lớn, audio, không rườm rà.",
                  "Libreng pagsasanay sa English, Malayalam, Gujarati, Vietnamese, at Tagalog. Dinisenyo para sa mga magulang na imigrante \u2014 malaking teksto, audio, at walang kalat."
                )}
              </p>

              {/* CTA buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 340 }}>
                <Link
                  href="/login"
                  className="btn-red-3d"
                  style={{ height: 56, fontSize: 16, paddingLeft: 32, paddingRight: 32 }}
                >
                  {t("landingGetStarted", lang)}
                </Link>
                <Link
                  href="/login"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 44,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#6B7280",
                    textDecoration: "none",
                    fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  }}
                >
                  {t("landingAlreadyHave", lang)}
                </Link>
              </div>
            </motion.div>

            {/* Right: Hero image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeFromRight}
              style={{ flex: "1 1 360px", display: "flex", justifyContent: "center" }}
            >
              <Image
                src="/hero.png"
                alt="Elderly couple studying for the citizenship test"
                width={420}
                height={420}
                className="object-contain"
                priority
                style={{ maxWidth: "100%", height: "auto", borderRadius: 24 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2: LANGUAGE MARQUEE TICKER
          ══════════════════════════════════════════════════ */}
      <LanguageMarquee />

      {/* ══════════════════════════════════════════════════
          SECTION 3: BIG CENTERED STATEMENT
          ══════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{ background: "#FFFFFF", padding: "100px 0" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(36px, 6vw, 64px)",
              color: NAVY,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            {t("landingFreeTitle", lang)}
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#6B7280",
              lineHeight: 1.65,
              maxWidth: 560,
              margin: "0 auto",
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
            }}
          >
            {t("landingFreeDesc", lang)}
          </p>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════
          SECTION 4: TWO FEATURE BLOCKS
          ══════════════════════════════════════════════════ */}
      <section style={{ background: "#F8F9FA", padding: "80px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32,
            }}
          >
            {/* Block 1: 128 Questions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeFromLeft}
              style={{
                background: "#FFFFFF",
                borderRadius: 20,
                padding: "40px 36px",
                border: `2px solid #E5E7EB`,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(56px, 8vw, 80px)",
                  fontWeight: 900,
                  color: RED,
                  lineHeight: 1,
                  marginBottom: 8,
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                }}
              >
                128
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: NAVY,
                  marginBottom: 12,
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                }}
              >
                {l("Official USCIS Questions", "ഔദ്യോഗിക USCIS ചോദ്യങ്ങൾ", "સત્તાવાર USCIS પ્રશ્નો", "Câu hỏi USCIS chính thức", "Opisyal na mga Tanong ng USCIS")}
              </h3>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.6, fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
                {l(
                  "Every single question from the official USCIS civics test, translated and verified in all 5 languages.",
                  "ഔദ്യോഗിക USCIS സിവിക്സ് ടെസ്റ്റിലെ എല്ലാ ചോദ്യങ്ങളും, 5 ഭാഷകളിലും വിവർത്തനം ചെയ്ത് പരിശോധിച്ചത്.",
                  "સત્તાવાર USCIS સિવિક્સ ટેસ્ટના દરેક પ્રશ્ન, 5 ભાષાઓમાં અનુવાદિત અને ચકાસાયેલ.",
                  "Tất cả câu hỏi từ bài thi công dân USCIS chính thức, được dịch và xác minh bằng cả 5 ngôn ngữ.",
                  "Bawat tanong mula sa opisyal na USCIS civics test, isinalin at na-verify sa lahat ng 5 wika."
                )}
              </p>

              {/* Visual bar chart */}
              <div style={{ marginTop: 32, display: "flex", alignItems: "flex-end", gap: 6, height: 64 }}>
                {[30, 42, 54, 63, 72, 82, 91, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                    style={{
                      flex: 1,
                      background: i === 7 ? RED : `rgba(196, 30, 58, ${0.15 + i * 0.1})`,
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                ))}
              </div>
              <p style={{ fontSize: 12, color: "#9CA3AF", marginTop: 8, fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
                {l("Score improvement over practice sessions", "പരിശീലന സെഷനുകളിൽ സ്കോർ മെച്ചപ്പെടൽ", "પ્રેક્ટિસ સત્રોમાં સ્કોર સુધારો", "Điểm cải thiện qua các buổi luyện tập", "Pagbuti ng marka sa mga sesyon ng pagsasanay")}
              </p>
            </motion.div>

            {/* Block 2: 4 Languages */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeFromRight}
              style={{
                background: NAVY,
                borderRadius: 20,
                padding: "40px 36px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Background star decoration */}
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  fontSize: 160,
                  opacity: 0.04,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                ★
              </div>

              <div
                style={{
                  fontSize: "clamp(56px, 8vw, 80px)",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: 8,
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                }}
              >
                5
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 12,
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                }}
              >
                {l("Languages Supported", "പിന്തുണയ്ക്കുന്ന ഭാഷകൾ", "સમર્થિત ભાષાઓ", "Ngôn ngữ hỗ trợ", "Mga Sinusuportahang Wika")}
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
                {l(
                  "Study in the language your parents are most comfortable with. No English required.",
                  "നിങ്ങളുടെ മാതാപിതാക്കൾക്ക് ഏറ്റവും സുഖകരമായ ഭാഷയിൽ പഠിക്കുക. ഇംഗ്ലീഷ് ആവശ്യമില്ല.",
                  "તમારા માતાપિતાને સૌથી આરામદાયક ભાષામાં અભ્યાસ કરો. અંગ્રેજી જરૂરી નથી.",
                  "Học bằng ngôn ngữ mà bố mẹ bạn thoải mái nhất. Không cần tiếng Anh.",
                  "Mag-aral sa wikang pinaka-komportable ang iyong mga magulang. Hindi kailangan ng English."
                )}
              </p>

              {/* Language pills */}
              <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  { name: "English", code: "us" },
                  { name: "മലയാളം", code: "in" },
                  { name: "ગુજરાતી", code: "in" },
                  { name: "Tiếng Việt", code: "vn" },
                  { name: "Tagalog", code: "ph" },
                ].map((l) => (
                  <span
                    key={l.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 14px",
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: 999,
                      color: "#FFFFFF",
                      fontSize: 14,
                      fontWeight: 600,
                      fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                    }}
                  >
                    <span className={`fi fi-${l.code}`} style={{ borderRadius: 2, fontSize: 13 }} />
                    {l.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5: INTERACTIVE DEMO
          ══════════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", padding: "100px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: NAVY,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              {t("landingTryTitle", lang)}
            </h2>
            <p style={{ fontSize: 17, color: "#6B7280", fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}>
              {t("landingTryDesc", lang)}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
            style={{ maxWidth: 680, margin: "0 auto" }}
          >
            {/* Device frame in navy */}
            <div
              style={{
                borderRadius: 24,
                border: `8px solid ${NAVY}`,
                background: "#FFFFFF",
                overflow: "hidden",
                boxShadow: `0 24px 64px rgba(27, 42, 74, 0.18)`,
              }}
            >
              <div
                style={{
                  background: NAVY,
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {[RED, "#F59E0B", "#22C55E"].map((c, i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  }}
                >
                  forourparents.app
                </span>
              </div>
              <DemoQuiz />
            </div>
          </motion.div>

          <p
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "#9CA3AF",
              marginTop: 24,
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
            }}
          >
            {t("landingTrySample", lang)}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6: TESTIMONIAL
          ══════════════════════════════════════════════════ */}
      <section style={{ background: "#F8F9FA", padding: "100px 0" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{ maxWidth: 720, margin: "0 auto", padding: "0 32px", textAlign: "center" }}
        >
          {/* Stars */}
          <div style={{ fontSize: 22, color: "#FCD34D", marginBottom: 24, letterSpacing: 4 }}>
            ★★★★★
          </div>

          <blockquote
            style={{
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 600,
              color: NAVY,
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
              margin: "0 0 32px 0",
              fontStyle: "italic",
            }}
          >
            {l(
              "\u201CMy mother is 67 and barely speaks English. She passed the civics test on her first try using this app in Malayalam. I cried when she called me.\u201D",
              "\u201Cഎൻ്റെ അമ്മയ്ക്ക് 67 വയസ്സാണ്, ഇംഗ്ലീഷ് ഒട്ടും അറിയില്ല. മലയാളത്തിൽ ഈ ആപ്പ് ഉപയോഗിച്ച് ആദ്യ ശ്രമത്തിൽ തന്നെ സിവിക്സ് ടെസ്റ്റ് പാസായി. അമ്മ വിളിച്ചപ്പോൾ ഞാൻ കരഞ്ഞുപോയി.\u201D",
              "\u201Cમારી માતા 67 વર્ષની છે અને ભાગ્યે જ અંગ્રેજી બોલે છે. આ એપ પર ગુજરાતીમાં પ્રથમ પ્રયાસમાં જ સિવિક્સ ટેસ્ટ પાસ કર્યો. જ્યારે તેમણે ફોન કર્યો ત્યારે હું રડી પડ્યો.\u201D",
              "\u201CMẹ tôi 67 tuổi và hầu như không nói được tiếng Anh. Bà đã đỗ bài thi công dân ngay lần đầu tiên nhờ ứng dụng này bằng tiếng Việt. Tôi đã khóc khi bà gọi điện báo tin.\u201D",
              "\u201CAng nanay ko ay 67 taong gulang at halos hindi marunong mag-English. Naipasa niya ang civics test sa unang pagsubok gamit ang app na ito sa Tagalog. Umiyak ako nang tawagan niya ako.\u201D"
            )}
          </blockquote>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${RED}, ${NAVY})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 16,
                fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
              }}
            >
              A
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: NAVY, fontFamily: "var(--font-dm-sans, system-ui, sans-serif)", margin: 0 }}>
                Anjali R.
              </p>
              <p style={{ fontSize: 13, color: "#6B7280", fontFamily: "var(--font-dm-sans, system-ui, sans-serif)", margin: 0 }}>
                {l("Daughter of a new U.S. citizen", "ഒരു പുതിയ U.S. പൗരയുടെ മകൾ", "નવા U.S. નાગરિકની દીકરી", "Con gái của một công dân Hoa Kỳ mới", "Anak ng bagong U.S. citizen")}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7: FAQ
          ══════════════════════════════════════════════════ */}
      <section style={{ background: "#FFFFFF", padding: "100px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: NAVY,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {l("Common questions", "സാധാരണ ചോദ്യങ്ങൾ", "સામાન્ય પ્રશ્નો", "Câu hỏi thường gặp", "Mga karaniwang tanong")}
            </h2>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 8: BOTTOM CTA
          ══════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{ background: NAVY, padding: "120px 0" }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 32px",
            textAlign: "center",
          }}
        >
          {/* American flag stars decorative */}
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.15)",
              letterSpacing: 12,
              marginBottom: 32,
            }}
          >
            ★ ★ ★ ★ ★
          </div>

          <h2
            style={{
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            {t("landingCtaTitle", lang)}
          </h2>

          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.65)",
              marginBottom: 48,
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
            }}
          >
            {t("landingCtaFree", lang)}
          </p>

          <Link
            href="/login"
            className="btn-red-3d"
            style={{ height: 60, fontSize: 17, paddingLeft: 48, paddingRight: 48 }}
          >
            {t("landingGetStarted", lang)}
          </Link>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════
          SECTION 9: FOOTER
          ══════════════════════════════════════════════════ */}
      <footer style={{ background: "#0F1C31", padding: "48px 0 36px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 32,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Image src="/logo.png" alt="For Our Parents" width={32} height={32} style={{ borderRadius: 8 }} />
                <span
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: 16,
                    fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  }}
                >
                  {t("landingFooter", lang)}
                </span>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  maxWidth: 260,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {t("landingFooterSub", lang)}
              </p>
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 12,
                    fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  }}
                >
                  {l("App", "ആപ്പ്", "એપ", "Ứng dụng", "App")}
                </p>
                {[
                  { label: l("Practice Test", "പ്രാക്ടീസ് ടെസ്റ്റ്", "પ્રેક્ટિસ ટેસ્ટ", "Bài thi thử", "Pagsusulit"), href: "/login" },
                  { label: l("Flashcard Mode", "ഫ്ലാഷ്കാർഡ് മോഡ്", "ફ્લૅશકાર્ડ મોડ", "Chế độ thẻ ghi nhớ", "Flashcard Mode"), href: "/login" },
                  { label: l("Eligibility Check", "യോഗ്യതാ പരിശോധന", "લાયકાત ચકાસણી", "Kiểm tra điều kiện", "Pagsusuri ng Kwalipikasyon"), href: "/eligibility" },
                ].map((link) => (
                  <div key={link.label} style={{ marginBottom: 8 }}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>

              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: 12,
                    fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                  }}
                >
                  {l("Languages", "ഭാഷകൾ", "ભાષાઓ", "Ngôn ngữ", "Mga Wika")}
                </p>
                {["English", "Malayalam", "Gujarati", "Vietnamese", "Tagalog"].map((l) => (
                  <div key={l} style={{ marginBottom: 8 }}>
                    <span
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.55)",
                        fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                      }}
                    >
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.3)",
                textAlign: "center",
                fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} For Our Parents · {l("Built with ❤️ for immigrant families · Not affiliated with USCIS", "കുടിയേറ്റ കുടുംബങ്ങൾക്കായി ❤️ നിർമ്മിച്ചത് · USCIS-മായി ബന്ധമില്ല", "ઈમિગ્રન્ટ પરિવારો માટે ❤️ થી બનાવેલ · USCIS સાથે સંલગ્ન નથી", "Xây dựng với ❤️ cho gia đình nhập cư · Không liên kết với USCIS", "Ginawa nang may ❤️ para sa mga pamilyang imigrante · Hindi kaanib ng USCIS")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Authenticated Home (preserves existing functionality) ── */
function AuthenticatedHome() {
  const { lang } = useLanguage();

  const l = (en: string, ml: string, gu?: string, vi?: string, tl?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : lang === "vi" ? (vi ?? en) : (tl ?? en);

  return (
    <div className="max-w-grid mx-auto px-4 sm:px-6">
      <section className="py-8">
        <h1
          className="text-2xl sm:text-3xl font-bold text-text-heading mb-6"
          style={{ fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}
        >
          {l("Welcome back!", "തിരികെ സ്വാഗതം!", "પાછા આવો!", "Chào mừng trở lại!", "Maligayang pagbabalik!")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              href: "/quiz",
              title: l("Practice Test", "പ്രാക്ടീസ് ടെസ്റ്റ്", "પ્રેક્ટિસ ટેસ્ટ", "Bài thi thử"),
              desc: l("Multiple-choice, just like the real test", "യഥാർത്ഥ ടെസ്റ്റ് പോലെ", "ખરેખર ટેસ્ટ જેવo", "Giống bài thi thật"),
              color: "#D4772C",
            },
            {
              href: "/practice",
              title: l("Practice Mode", "പ്രാക്ടീസ് മോഡ്", "પ્રેક્ટિસ મોડ", "Luyện tập"),
              desc: l("Flashcards — see the answer at your own pace", "ഫ്ലാഷ്കാർഡ് — സ്വന്തം ഗതിയിൽ", "ફ્લૅશકાર્ડ્સ", "Thẻ ghi nhớ"),
              color: "#B45309",
            },
            {
              href: "/mistakes",
              title: l("Review Mistakes", "തെറ്റുകൾ അവലോകനം", "ભૂલો સમીક્ષા", "Ôn lỗi sai"),
              desc: l("Focus on the questions you got wrong", "തെറ്റായ ചോദ്യങ്ങൾ", "ખોટા પ્રશ્નો", "Câu hỏi sai"),
              color: "#0891B2",
            },
            {
              href: "/eligibility",
              title: l("Do You Qualify?", "യോഗ്യത?", "શું તમે લાયક છો?", "Điều kiện?"),
              desc: l("Special rules for ages 50+", "50+ ആള്‍ക്ക് പ്രത്യേക നിയമങ്ങൾ", "50+ ઉંમર નિયમો", "Quy tắc cho 50+"),
              color: "#7C3AED",
            },
            {
              href: "/dashboard",
              title: l("Dashboard", "ഡാഷ്ബോർഡ്", "ડૅશબોર્ડ", "Bảng điều khiển"),
              desc: l("Track your progress", "പുരോഗതി ട്രാക്ക് ചെയ്യുക", "પ્રગતિ ટ્રૅક કરો", "Theo dõi tiến độ"),
              color: "#2563EB",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="block p-6 rounded-card border border-border hover:shadow-card-hover hover:border-primary/30
                         hover:-translate-y-1 transition-all duration-300 no-underline bg-white"
            >
              <div
                className="w-3 h-3 rounded-full mb-3"
                style={{ backgroundColor: item.color }}
              />
              <h3 className="text-[1.0625rem] font-bold text-text-heading mb-1">
                {item.title}
              </h3>
              <p className="text-[0.9375rem] text-text-secondary">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
