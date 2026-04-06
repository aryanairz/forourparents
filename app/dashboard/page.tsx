"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import {
  getCurrentUser,
  getAllAttempts,
  getMistakes,
  logoutUser,
  type QuizAttempt,
} from "@/lib/storage";
import { questions, topicLabels, type Topic } from "@/data/questions";
import { Landmark, Scale, ScrollText, Flag, Flame, CheckCircle2, ArrowRight, BookOpen, Layers, AlertCircle, ClipboardCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Lang } from "@/data/questions";

/* ─── Constants ─── */
const NAVY = "#1B2A4A";
const RED = "#C41E3A";
const FONT = "var(--font-dm-sans, system-ui, sans-serif)";

const langNames: Record<Lang, string> = {
  en: "English",
  ml: "Malayalam",
  gu: "Gujarati",
  vi: "Vietnamese",
};

const topicIconMap: Record<string, React.ReactNode> = {
  government: <Landmark size={20} style={{ color: "#7C3AED" }} />,
  rights: <Scale size={20} style={{ color: "#0891B2" }} />,
  history: <ScrollText size={20} style={{ color: "#B45309" }} />,
  symbols: <Flag size={20} style={{ color: "#BE123C" }} />,
};

const officialTopics: Topic[] = ["government", "rights", "history", "symbols"];

/* ─── Animated counter hook ─── */
function useCountUp(target: number, duration: number, shouldAnimate: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!shouldAnimate || target === 0) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, shouldAnimate]);

  return value;
}

/* ─── Stat Block ─── */
function StatBlock({
  value,
  label,
  suffix,
  icon,
  animate,
}: {
  value: number;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
  animate: boolean;
}) {
  const display = useCountUp(value, 800, animate);
  return (
    <div
      style={{
        background: "#F5F5F5",
        borderRadius: 16,
        padding: 24,
        fontFamily: FONT,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 36, fontWeight: 700, color: NAVY, lineHeight: 1 }}>
          {value === -1 ? "—" : display}
          {suffix && value !== -1 && <span>{suffix}</span>}
        </span>
        {icon}
      </div>
      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: "#9CA3AF",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginTop: 8,
          marginBottom: 0,
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ─── Progress Bar ─── */
function TopicProgressBar({
  topic,
  mistakes,
  total,
  animate,
}: {
  topic: Topic;
  mistakes: number;
  total: number;
  animate: boolean;
}) {
  const { lang } = useLanguage();
  const clean = mistakes === 0;
  const l = (en: string, ml: string, gu: string, vi: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? gu : vi;

  return (
    <div
      style={{
        background: "#F5F5F5",
        borderRadius: 16,
        padding: "20px 24px",
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {topicIconMap[topic]}
          <span style={{ fontSize: 16, fontWeight: 600, color: NAVY }}>
            {topicLabels[topic]?.[lang] ?? topicLabels[topic]?.en}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {clean ? (
            <>
              <CheckCircle2 size={16} style={{ color: "#16A34A" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "#16A34A" }}>
                {l("No mistakes", "തെറ്റുകളില്ല", "કોઈ ભૂલો નથી", "Không lỗi")}
              </span>
            </>
          ) : (
            <span style={{ fontSize: 14, fontWeight: 600, color: RED }}>
              {mistakes} {l("to review", "അവലോകനം ചെയ്യാൻ", "સમીક્ષા કરવા", "cần ôn")}
            </span>
          )}
          <span style={{ fontSize: 13, color: "#9CA3AF", marginLeft: 4 }}>
            / {total}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN DASHBOARD COMPONENT
   ═══════════════════════════════════════════════════════ */

export default function DashboardPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  const [user, setUser] = useState(getCurrentUser());
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [mistakeIds, setMistakeIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const l = (en: string, ml: string, gu: string, vi: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? gu : vi;

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push("/login");
      return;
    }
    setUser(currentUser);

    const loadData = async () => {
      const [attemptsData, mistakesData] = await Promise.all([
        getAllAttempts(),
        getMistakes(),
      ]);
      setAttempts(attemptsData);
      setMistakeIds(mistakesData);
      setLoading(false);
    };

    loadData();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div
          className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: RED, borderTopColor: "transparent" }}
        />
      </div>
    );
  }

  if (!user) return null;

  /* ── This week's date range (Monday–Sunday) ── */
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0=Sun
  const mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - mondayOffset);
  weekStart.setHours(0, 0, 0, 0);

  const weekAttempts = attempts.filter(
    (a) => new Date(a.completed_at) >= weekStart
  );

  /* ── Stats from THIS WEEK only ── */
  const totalQuestionsPracticed = weekAttempts.reduce(
    (sum, a) => sum + a.total_questions, 0
  );
  const totalCorrect = weekAttempts.reduce(
    (sum, a) => sum + a.correct_answers, 0
  );
  const accuracy =
    totalQuestionsPracticed > 0
      ? Math.round((totalCorrect / totalQuestionsPracticed) * 100)
      : -1;

  /* ── Topic mistakes (real data from localStorage) ── */
  const officialQuestions = questions.filter(
    (q) => q.topic !== "extra" && officialTopics.includes(q.topic)
  );
  const topicTotals: Record<string, number> = {};
  const topicMistakes: Record<string, number> = {};
  officialTopics.forEach((tp) => {
    const topicQs = officialQuestions.filter((q) => q.topic === tp);
    topicTotals[tp] = topicQs.length;
    topicMistakes[tp] = topicQs.filter((q) => mistakeIds.includes(q.id)).length;
  });

  /* ── Study streak (all-time, not weekly) ── */
  const calcStreak = (): { streak: number; practicedToday: boolean } => {
    if (attempts.length === 0) return { streak: 0, practicedToday: false };

    const days = new Set<string>();
    attempts.forEach((a) => {
      const d = new Date(a.completed_at);
      days.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
    });

    const today = new Date();
    const todayKey = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    const practicedToday = days.has(todayKey);

    let streak = 0;
    const check = new Date(today);
    if (!practicedToday) check.setDate(check.getDate() - 1);

    for (let i = 0; i < 365; i++) {
      const key = `${check.getFullYear()}-${check.getMonth()}-${check.getDate()}`;
      if (days.has(key)) {
        streak++;
        check.setDate(check.getDate() - 1);
      } else {
        break;
      }
    }

    return { streak, practicedToday };
  };

  const { streak, practicedToday } = calcStreak();

  /* ── Last study mode ── */
  const lastMode = attempts.length > 0 ? attempts[0].mode : null;
  const continueLink =
    lastMode === "quiz" ? "/quiz" : lastMode === "practice" ? "/practice" : "/practice";

  /* ── Mistake count ── */
  const mistakeCount = mistakeIds.length;
  const hasAttempts = attempts.length > 0;

  /* ── First name ── */
  const firstName = user.firstName || user.name?.split(" ")[0] || "";

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0 } : undefined}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "40px 24px 80px",
        fontFamily: FONT,
      }}
    >
      {/* ══════════════════════════════════════════════════
          SECTION 1: GREETING
          ══════════════════════════════════════════════════ */}
      <div>
        <h1
          style={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 28,
            color: NAVY,
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {l(
            `Welcome back, ${firstName}`,
            `തിരികെ സ്വാഗതം, ${firstName}`,
            `પાછા આવો, ${firstName}`,
            `Chào mừng trở lại, ${firstName}`
          )}
        </h1>
        <p
          style={{
            fontFamily: FONT,
            fontWeight: 400,
            fontSize: 16,
            color: "#9CA3AF",
            marginTop: 4,
            marginBottom: 0,
          }}
        >
          {l(
            `All Questions · Studying in ${langNames[lang]}`,
            `എല്ലാ ചോദ്യങ്ങളും · ${langNames[lang]}-ൽ പഠിക്കുന്നു`,
            `બധા પ્રશ્નો · ${langNames[lang]}માં અभ્યાસ`,
            `Tất cả câu hỏi · Học bằng ${langNames[lang]}`
          )}
        </p>

        {hasAttempts && (
          <div style={{ marginTop: 24 }}>
            <Link
              href={continueLink}
              prefetch={false}
              className="btn-red-3d"
              style={{
                height: 56,
                fontSize: 16,
                paddingLeft: 32,
                paddingRight: 32,
                minWidth: 260,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {l("Continue Practicing", "പരിശീലനം തുടരുക", "પ્રેક્ટિસ ચાલુ રાખો", "Tiếp tục luyện tập")}
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════
          EMPTY STATE NUDGE (only for brand new users)
          ══════════════════════════════════════════════════ */}
      {!hasAttempts && (
        <div
          style={{
            background: "#F5F5F5",
            borderRadius: 16,
            padding: 32,
            textAlign: "center",
            marginTop: 32,
          }}
        >
          <h2
            style={{
              fontFamily: FONT,
              fontWeight: 700,
              fontSize: 20,
              color: NAVY,
              margin: "0 0 8px 0",
            }}
          >
            {l(
              "You haven't started practicing yet!",
              "നിങ്ങൾ ഇതുവരെ പരിശീലനം ആരംഭിച്ചിട്ടില്ല!",
              "તમે હજુ પ્રેક્ટિસ શરૂ કરી નથી!",
              "Bạn chưa bắt đầu luyện tập!"
            )}
          </h2>
          <p
            style={{
              fontFamily: FONT,
              fontSize: 16,
              color: "#6B7280",
              margin: "0 0 24px 0",
            }}
          >
            {l(
              "The civics test has 128 questions. Start with any topic and build your way up.",
              "സിവിക്സ് ടെസ്റ്റിൽ 128 ചോദ്യങ്ങളുണ്ട്. ഏതെങ്കിലും വിഷയത്തിൽ ആരംഭിക്കൂ.",
              "સિવિક્સ ટેસ્ટમાં 128 પ્રશ્નો છે. કોઈપણ વિષયથી શરૂ કરો.",
              "Bài thi công dân có 128 câu hỏi. Bắt đầu với bất kỳ chủ đề nào."
            )}
          </p>
          <Link
            href="/practice"
            prefetch={false}
            className="btn-red-3d"
            style={{
              height: 56,
              fontSize: 16,
              paddingLeft: 32,
              paddingRight: 32,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {l(
              "Start Your First Practice",
              "ആദ്യ പരിശീലനം ആരംഭിക്കുക",
              "તમારી પ્રથમ પ્રેક્ટિસ શરૂ કરો",
              "Bắt đầu bài luyện tập đầu tiên"
            )}
            <ArrowRight size={18} />
          </Link>
        </div>
      )}

      {/* ══════════════════════════════════════════════════
          SECTION: QUICK ACTIONS (nav cards)
          ══════════════════════════════════════════════════ */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        style={{ marginTop: 32 }}
      >
        {[
          {
            href: "/quiz",
            icon: <ClipboardCheck size={22} style={{ color: "#D4772C" }} />,
            title: l("Practice Test", "പ്രാക്ടീസ് ടെസ്റ്റ്", "પ્રેક્ટિસ ટેસ્ટ", "Bài thi thử"),
            color: "#D4772C",
          },
          {
            href: "/practice",
            icon: <Layers size={22} style={{ color: "#B45309" }} />,
            title: l("Flashcards", "ഫ്ലാഷ്കാർഡ്", "ફ્લૅશકાર્ડ", "Thẻ ghi nhớ"),
            color: "#B45309",
          },
          {
            href: "/mistakes",
            icon: <AlertCircle size={22} style={{ color: "#0891B2" }} />,
            title: l("Review Mistakes", "തെറ്റുകൾ", "ભૂલો", "Lỗi sai"),
            color: "#0891B2",
          },
          {
            href: "/eligibility",
            icon: <BookOpen size={22} style={{ color: "#7C3AED" }} />,
            title: l("Eligibility", "യോഗ്യത", "લાયકાત", "Điều kiện"),
            color: "#7C3AED",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={false}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              padding: "20px 12px",
              background: "#F5F5F5",
              borderRadius: 16,
              textDecoration: "none",
              transition: "background 0.15s, transform 0.1s",
              fontFamily: FONT,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#EEEEEE";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#F5F5F5";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: NAVY,
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 2: STATS ROW
          ══════════════════════════════════════════════════ */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        style={{ marginTop: 48 }}
      >
        <StatBlock
          value={totalQuestionsPracticed}
          label={l("THIS WEEK", "ഈ ആഴ്ച", "આ અઠવાડિયે", "TUẦN NÀY")}
          animate={shouldAnimate}
        />
        <StatBlock
          value={accuracy}
          label={l("ACCURACY", "കൃത്യത", "ચોકસાઈ", "ĐỘ CHÍNH XÁC")}
          suffix="%"
          animate={shouldAnimate}
        />
        <StatBlock
          value={mistakeCount}
          label={l("MISTAKES", "തെറ്റുകൾ", "ભૂલો", "LỖI SAI")}
          animate={shouldAnimate}
        />
        <StatBlock
          value={streak}
          label={l("DAY STREAK", "ദിവസ സ്ട്രീക്ക്", "દિવસ સ્ટ્રીક", "CHUỖI NGÀY")}
          icon={
            practicedToday && streak > 0 ? (
              <Flame size={16} style={{ color: RED }} />
            ) : undefined
          }
          animate={shouldAnimate}
        />
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 3: TOPIC PROGRESS
          ══════════════════════════════════════════════════ */}
      <div style={{ marginTop: 48 }}>
        <h2
          style={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 22,
            color: NAVY,
            margin: "0 0 24px 0",
          }}
        >
          {l("Mistakes by Topic", "വിഷയം അനുസരിച്ച് തെറ്റുകൾ", "વિષય પ્રમાણે ભૂલો", "Lỗi sai theo chủ đề")}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {officialTopics.map((tp) => (
            <TopicProgressBar
              key={tp}
              topic={tp}
              mistakes={topicMistakes[tp]}
              total={topicTotals[tp]}
              animate={shouldAnimate}
            />
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 4: MISTAKES TO REVIEW
          ══════════════════════════════════════════════════ */}
      <div style={{ marginTop: 48 }}>
        {mistakeCount > 0 ? (
          <div
            style={{
              background: "#FEF2F2",
              borderRadius: 16,
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: 16,
                  color: NAVY,
                  margin: 0,
                }}
              >
                {l(
                  `You have ${mistakeCount} question${mistakeCount !== 1 ? "s" : ""} to review`,
                  `${mistakeCount} ചോദ്യങ്ങൾ അവലോകനം ചെയ്യാനുണ്ട്`,
                  `${mistakeCount} પ્રશ્નો સમીક્ષા કરવાના છે`,
                  `Bạn có ${mistakeCount} câu hỏi cần ôn lại`
                )}
              </p>
              <p
                style={{
                  fontFamily: FONT,
                  fontSize: 14,
                  color: "#9CA3AF",
                  margin: "4px 0 0 0",
                }}
              >
                {l(
                  "Mistakes help you learn. Review them to improve your score.",
                  "തെറ്റുകൾ പഠിക്കാൻ സഹായിക്കും. സ്കോർ മെച്ചപ്പെടുത്താൻ അവ അവലോകനം ചെയ്യുക.",
                  "ભૂલો શીખવામાં મદદ કરે છે. તમારો સ્કોર સુધારવા સમીક્ષા કરો.",
                  "Sai lầm giúp bạn học. Ôn lại để cải thiện điểm số."
                )}
              </p>
            </div>
            <Link
              href="/mistakes"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 24px",
                border: "2px solid #E5E7EB",
                borderRadius: 999,
                height: 44,
                fontSize: 15,
                fontWeight: 600,
                color: NAVY,
                textDecoration: "none",
                fontFamily: FONT,
                whiteSpace: "nowrap",
                background: "#FFFFFF",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#F5F5F5";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
              }}
            >
              {l("Review Mistakes", "തെറ്റുകൾ അവലോകനം", "ભૂલો સમીક્ષા", "Ôn lỗi sai")}
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div
            style={{
              background: "#F0FDF4",
              borderRadius: 16,
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <CheckCircle2 size={20} style={{ color: "#16A34A", flexShrink: 0 }} />
            <p
              style={{
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: 16,
                color: "#16A34A",
                margin: 0,
              }}
            >
              {l(
                "No mistakes to review — you're doing great!",
                "അവലോകനം ചെയ്യാൻ തെറ്റുകളില്ല — നിങ്ങൾ മികച്ച രീതിയിൽ പ്രവർത്തിക്കുന്നു!",
                "સમીક્ષા કરવા ભૂલો નથી — તમે ખૂબ સારું કરી રહ્યા છો!",
                "Không có lỗi sai cần ôn — bạn đang làm rất tốt!"
              )}
            </p>
          </div>
        )}
      </div>

      {/* ============ OLD DASHBOARD - START ============
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50
                       text-gray-700 border border-gray-200 shadow-sm
                       font-semibold text-base active:scale-95 transition-all no-underline"
          >
            ← {t("home", lang)}
          </Link>
          <button
            onClick={handleLogout}
            className="min-h-[44px] px-4 py-2 rounded-lg bg-red-50 text-danger border border-red-200
                       font-semibold text-base active:scale-95 transition-all"
          >
            {t("logout", lang)}
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center border-2 border-blue-200">
          <div className="text-4xl mb-2">📊🙏</div>
          <h1 className="text-q-heading font-bold text-primary mb-1">
            {t("dashboard", lang)}
          </h1>
          <p className="text-lg text-gray-700">{user.name}</p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-blue-100 text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-1">
              {t("totalAttempts", lang)}
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-primary">
              {totalAttempts}
            </p>
          </div>

          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-green-100 text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-1">
              {t("averageScore", lang)}
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-success">
              {avgScore}%
            </p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
          <h2 className="text-lg font-bold text-orange-800 mb-3">
            {t("reviewMistakes", lang)}
          </h2>
          <div className="space-y-2">
            <p className="text-base text-orange-700">
              {mistakeQuestions.length}{" "}
              {lang === "en"
                ? "questions need review"
                : lang === "ml"
                ? "ചോദ്യങ്ങൾ പരിശോധിക്കേണ്ടതുണ്ട്"
                : lang === "gu"
                ? "પ્રશ્નોની સમીક્ષા જરૂરી છે"
                : "câu hỏi cần ôn lại"}
            </p>

            {weakestTopic && mistakesByTopic[weakestTopic[0] as Topic] > 0 && (
              <div className="bg-white/50 rounded-lg p-3 text-sm">
                <p className="text-orange-800 font-medium">
                  {lang === "en" ? "Focus on:" : lang === "ml" ? "ശ്രദ്ധിക്കേണ്ട വിഷയം:" : lang === "gu" ? "ધ્યાન આપો:" : "Tập trung vào:"}
                </p>
                <p className="text-orange-900 font-bold mt-1">
                  {topicLabels[weakestTopic[0] as Topic][lang] ?? topicLabels[weakestTopic[0] as Topic].en} (
                  {mistakesByTopic[weakestTopic[0] as Topic]})
                </p>
              </div>
            )}
          </div>

          <Link
            href="/mistakes"
            className="block w-full mt-4 min-h-[48px] bg-orange-600 text-white
                       text-lg font-bold rounded-xl px-5 py-3
                       active:scale-[0.97] transition-all no-underline text-center"
          >
            {t("reviewMistakes", lang)}
          </Link>
        </div>

        {attempts.length > 0 && (
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              {t("recentScores", lang)}
            </h2>
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {attempts.slice(0, 10).map((attempt) => (
                <div
                  key={attempt.id}
                  className="flex items-center justify-between bg-gray-50 rounded-lg p-3 text-sm"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700">
                      {attempt.mode === "quiz"
                        ? t("quizMode", lang)
                        : t("practiceMode", lang)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(attempt.completed_at).toLocaleDateString(
                        lang === "ml" ? "ml-IN" : lang === "gu" ? "gu-IN" : lang === "vi" ? "vi-VN" : "en-US",
                      )}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-xl font-bold ${
                        attempt.score_percent >= 80
                          ? "text-success"
                          : attempt.score_percent >= 60
                            ? "text-primary"
                            : "text-orange-600"
                      }`}
                    >
                      {attempt.score_percent}%
                    </p>
                    <p className="text-xs text-gray-500">
                      {attempt.correct_answers}/{attempt.total_questions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center">
          <p className="text-base text-yellow-800 font-medium">
            {t("improvementTip", lang)}
          </p>
        </div>
      </div>
      ============ OLD DASHBOARD - END ============ */}
    </motion.div>
  );
}
