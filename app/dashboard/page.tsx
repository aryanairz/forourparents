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
import { Landmark, Scale, ScrollText, Flag, Flame, CheckCircle2, ArrowRight, BookOpen, Layers, AlertCircle, ClipboardCheck, MapPin, Star } from "lucide-react";
import { getPersonalizedQuestions } from "@/data/personalizedQuestions";
import { motion, useReducedMotion } from "framer-motion";
import type { Lang } from "@/data/questions";

/* â”€â”€â”€ Constants â”€â”€â”€ */
const NAVY = "#1B2A4A";
const RED = "#C41E3A";
const FONT = "var(--font-dm-sans, system-ui, sans-serif)";

const langNames: Record<Lang, string> = {
  en: "English",
  ml: "Malayalam",
  gu: "Gujarati",
  vi: "Vietnamese",
  tl: "Tagalog",
};

const topicIconMap: Record<string, React.ReactNode> = {
  government: <Landmark size={20} style={{ color: "#7C3AED" }} />,
  rights: <Scale size={20} style={{ color: "#0891B2" }} />,
  history: <ScrollText size={20} style={{ color: "#B45309" }} />,
  symbols: <Flag size={20} style={{ color: "#BE123C" }} />,
  extra: <Star size={20} style={{ color: "#D97706" }} />,
};

const officialTopics: Topic[] = ["government", "rights", "history", "symbols"];
const allDisplayTopics: Topic[] = ["government", "rights", "history", "symbols"];

/* â”€â”€â”€ Animated counter hook â”€â”€â”€ */
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

/* â”€â”€â”€ Stat Block â”€â”€â”€ */
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
          {value === -1 ? "â€”" : display}
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

/* â”€â”€â”€ Progress Bar â”€â”€â”€ */
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
  const l = (en: string, ml: string, gu?: string, vi?: string, tl?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : lang === "vi" ? (vi ?? en) : (tl ?? en);

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
          gap: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
          {topicIconMap[topic]}
          <span style={{ fontSize: 16, fontWeight: 600, color: NAVY }}>
            {topicLabels[topic]?.[lang] ?? topicLabels[topic]?.en}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          {clean ? (
            <>
              <CheckCircle2 size={16} style={{ color: "#16A34A", flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "#16A34A", whiteSpace: "nowrap" }}>
                {l("No mistakes", "തെറ്റുകളില്ല", "કોઈ ભૂלો નथी", "Không lỗi", "Walang pagkakamali")}
              </span>
            </>
          ) : (
            <span style={{ fontSize: 14, fontWeight: 600, color: RED, whiteSpace: "nowrap" }}>
              {mistakes} {l("to review", "അവലോകനം ചെയ്യാൻ", "સमीक्षा करवा", "cần ôn", "upang suriin")}
            </span>
          )}
          <span style={{ fontSize: 13, color: "#9CA3AF", whiteSpace: "nowrap" }}>
            / {total}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */

export default function DashboardPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  const [user, setUser] = useState(getCurrentUser());
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [mistakeIds, setMistakeIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const l = (en: string, ml: string, gu?: string, vi?: string, tl?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : lang === "vi" ? (vi ?? en) : (tl ?? en);

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

  /* â”€â”€ This week's date range (Mondayâ€“Sunday) â”€â”€ */
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0=Sun
  const mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - mondayOffset);
  weekStart.setHours(0, 0, 0, 0);

  const weekAttempts = attempts.filter(
    (a) => new Date(a.completed_at) >= weekStart
  );

  /* â”€â”€ Stats from THIS WEEK only â”€â”€ */
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

  /* â”€â”€ Topic mistakes (real data from localStorage) â”€â”€ */
  const topicTotals: Record<string, number> = {};
  const topicMistakes: Record<string, number> = {};
  [...allDisplayTopics, "extra" as Topic].forEach((tp) => {
    const topicQs = questions.filter((q) => q.topic === tp);
    topicTotals[tp] = topicQs.length;
    topicMistakes[tp] = topicQs.filter((q) => mistakeIds.includes(q.id)).length;
  });

  // Personalized questions (Your State & Officials)
  const personalizedQs = user.state ? getPersonalizedQuestions(user.state, user.district) : [];
  const hasPersonalized = personalizedQs.length > 0;

  /* â”€â”€ Study streak (all-time, not weekly) â”€â”€ */
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

  /* â”€â”€ Last study mode â”€â”€ */
  const lastMode = attempts.length > 0 ? attempts[0].mode : null;
  const continueLink =
    lastMode === "quiz" ? "/quiz" : lastMode === "practice" ? "/practice" : "/practice";

  /* â”€â”€ Mistake count â”€â”€ */
  const mistakeCount = mistakeIds.length;
  const hasAttempts = attempts.length > 0;

  /* â”€â”€ First name â”€â”€ */
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
      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 1: GREETING
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
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
            `à´¤à´¿à´°à´¿à´•àµ† à´¸àµà´µà´¾à´—à´¤à´‚, ${firstName}`,
            `àªªàª¾àª›àª¾ àª†àªµà«‹, ${firstName}`,
            `ChÃ o má»«ng trá»Ÿ láº¡i, ${firstName}`,
            `Maligayang pagbabalik, ${firstName}`
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
            `All Questions Â· Studying in ${langNames[lang]}`,
            `à´Žà´²àµà´²à´¾ à´šàµ‹à´¦àµà´¯à´™àµà´™à´³àµà´‚ Â· ${langNames[lang]}-àµ½ à´ªà´ à´¿à´•àµà´•àµà´¨àµà´¨àµ`,
            `àª¬à´§àª¾ àªªà«àª°àª¶à«àª¨à«‹ Â· ${langNames[lang]}àª®àª¾àª‚ àª…à¤­à«àª¯àª¾àª¸`,
            `Táº¥t cáº£ cÃ¢u há»i Â· Há»c báº±ng ${langNames[lang]}`,
            `Lahat ng Tanong Â· Nag-aaral sa ${langNames[lang]}`
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
              {l("Continue Practicing", "à´ªà´°à´¿à´¶àµ€à´²à´¨à´‚ à´¤àµà´Ÿà´°àµà´•", "àªªà«àª°à«‡àª•à«àªŸàª¿àª¸ àªšàª¾àª²à« àª°àª¾àª–à«‹", "Tiáº¿p tá»¥c luyá»‡n táº­p", "Magpatuloy sa Pagsasanay")}
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          EMPTY STATE NUDGE (only for brand new users)
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
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
              "à´¨à´¿à´™àµà´™àµ¾ à´‡à´¤àµà´µà´°àµ† à´ªà´°à´¿à´¶àµ€à´²à´¨à´‚ à´†à´°à´‚à´­à´¿à´šàµà´šà´¿à´Ÿàµà´Ÿà´¿à´²àµà´²!",
              "àª¤àª®à«‡ àª¹àªœà« àªªà«àª°à«‡àª•à«àªŸàª¿àª¸ àª¶àª°à«‚ àª•àª°à«€ àª¨àª¥à«€!",
              "Báº¡n chÆ°a báº¯t Ä‘áº§u luyá»‡n táº­p!",
              "Hindi ka pa nagsisimulang magsanay!"
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
              "à´¸à´¿à´µà´¿à´•àµà´¸àµ à´Ÿàµ†à´¸àµà´±àµà´±à´¿àµ½ 128 à´šàµ‹à´¦àµà´¯à´™àµà´™à´³àµà´£àµà´Ÿàµ. à´à´¤àµ†à´™àµà´•à´¿à´²àµà´‚ à´µà´¿à´·à´¯à´¤àµà´¤à´¿àµ½ à´†à´°à´‚à´­à´¿à´•àµà´•àµ‚.",
              "àª¸àª¿àªµàª¿àª•à«àª¸ àªŸà«‡àª¸à«àªŸàª®àª¾àª‚ 128 àªªà«àª°àª¶à«àª¨à«‹ àª›à«‡. àª•à«‹àªˆàªªàª£ àªµàª¿àª·àª¯àª¥à«€ àª¶àª°à«‚ àª•àª°à«‹.",
              "BÃ i thi cÃ´ng dÃ¢n cÃ³ 128 cÃ¢u há»i. Báº¯t Ä‘áº§u vá»›i báº¥t ká»³ chá»§ Ä‘á» nÃ o.",
              "Ang pagsusulit sa civics ay may 128 tanong. Magsimula sa anumang paksa."
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
              "à´†à´¦àµà´¯ à´ªà´°à´¿à´¶àµ€à´²à´¨à´‚ à´†à´°à´‚à´­à´¿à´•àµà´•àµà´•",
              "àª¤àª®àª¾àª°à«€ àªªà«àª°àª¥àª® àªªà«àª°à«‡àª•à«àªŸàª¿àª¸ àª¶àª°à«‚ àª•àª°à«‹",
              "Báº¯t Ä‘áº§u bÃ i luyá»‡n táº­p Ä‘áº§u tiÃªn",
              "Simulan ang Iyong Unang Pagsasanay"
            )}
            <ArrowRight size={18} />
          </Link>
        </div>
      )}

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION: QUICK ACTIONS (nav cards)
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        style={{ marginTop: 32 }}
      >
        {[
          {
            href: "/quiz",
            icon: <ClipboardCheck size={22} style={{ color: "#D4772C" }} />,
            title: l("Practice Test", "à´ªàµà´°à´¾à´•àµà´Ÿàµ€à´¸àµ à´Ÿàµ†à´¸àµà´±àµà´±àµ", "àªªà«àª°à«‡àª•à«àªŸàª¿àª¸ àªŸà«‡àª¸à«àªŸ", "BÃ i thi thá»­", "Pagsusulit"),
            color: "#D4772C",
          },
          {
            href: "/practice",
            icon: <Layers size={22} style={{ color: "#B45309" }} />,
            title: l("Flashcards", "à´«àµà´²à´¾à´·àµà´•à´¾àµ¼à´¡àµ", "àª«à«àª²à«…àª¶àª•àª¾àª°à«àª¡", "Tháº» ghi nhá»›", "Mga Flashcard"),
            color: "#B45309",
          },
          {
            href: "/mistakes",
            icon: <AlertCircle size={22} style={{ color: "#0891B2" }} />,
            title: l("Review Mistakes", "à´¤àµ†à´±àµà´±àµà´•àµ¾", "àª­à«‚àª²à«‹", "Lá»—i sai", "Suriin ang mga Pagkakamali"),
            color: "#0891B2",
          },
          {
            href: "/eligibility",
            icon: <BookOpen size={22} style={{ color: "#7C3AED" }} />,
            title: l("Eligibility", "à´¯àµ‹à´—àµà´¯à´¤", "àª²àª¾àª¯àª•àª¾àª¤", "Äiá»u kiá»‡n", "Kwalipikasyon"),
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

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 2: STATS ROW
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        style={{ marginTop: 48 }}
      >
        <StatBlock
          value={totalQuestionsPracticed}
          label={l("THIS WEEK", "à´ˆ à´†à´´àµà´š", "àª† àª…àª àªµàª¾àª¡àª¿àª¯à«‡", "TUáº¦N NÃ€Y", "LINGGONG ITO")}
          animate={shouldAnimate}
        />
        <StatBlock
          value={accuracy}
          label={l("ACCURACY", "à´•àµƒà´¤àµà´¯à´¤", "àªšà«‹àª•àª¸àª¾àªˆ", "Äá»˜ CHÃNH XÃC", "KATUMPAKAN")}
          suffix="%"
          animate={shouldAnimate}
        />
        <StatBlock
          value={mistakeCount}
          label={l("MISTAKES", "à´¤àµ†à´±àµà´±àµà´•àµ¾", "àª­à«‚àª²à«‹", "Lá»–I SAI", "MGA PAGKAKAMALI")}
          animate={shouldAnimate}
        />
        <StatBlock
          value={streak}
          label={l("DAY STREAK", "à´¦à´¿à´µà´¸ à´¸àµà´Ÿàµà´°àµ€à´•àµà´•àµ", "àª¦àª¿àªµàª¸ àª¸à«àªŸà«àª°à«€àª•", "CHUá»–I NGÃ€Y", "SUNOD-SUNOD NA ARAW")}
          icon={
            practicedToday && streak > 0 ? (
              <Flame size={16} style={{ color: RED }} />
            ) : undefined
          }
          animate={shouldAnimate}
        />
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 3: TOPIC PROGRESS
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
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
          {l("Mistakes by Topic", "à´µà´¿à´·à´¯à´‚ à´…à´¨àµà´¸à´°à´¿à´šàµà´šàµ à´¤àµ†à´±àµà´±àµà´•àµ¾", "àªµàª¿àª·àª¯ àªªà«àª°àª®àª¾àª£à«‡ àª­à«‚àª²à«‹", "Lá»—i sai theo chá»§ Ä‘á»", "Mga Pagkakamali ayon sa Paksa")}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {allDisplayTopics.map((tp) => (
            <TopicProgressBar
              key={tp}
              topic={tp}
              mistakes={topicMistakes[tp]}
              total={topicTotals[tp]}
              animate={shouldAnimate}
            />
          ))}
          {hasPersonalized && (() => {
            const localMistakes = personalizedQs.filter((q) => mistakeIds.includes(q.id)).length;
            const clean = localMistakes === 0;
            const ll = (en: string, ml: string, gu?: string, vi?: string, tl?: string) =>
              lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : lang === "vi" ? (vi ?? en) : (tl ?? en);
            return (
              <div
                style={{
                  background: "#F5F5F5",
                  borderRadius: 16,
                  padding: "20px 24px",
                  fontFamily: FONT,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                    <MapPin size={20} style={{ color: "#7C3AED" }} />
                    <span style={{ fontSize: 16, fontWeight: 600, color: NAVY }}>
                      {ll("Your State & Officials", "à´¨à´¿à´™àµà´™à´³àµà´Ÿàµ† à´¸à´‚à´¸àµà´¥à´¾à´¨à´‚", "àª¤àª®àª¾àª°à«àª‚ àª°à¤¾à¤œà«àª¯", "Tiá»ƒu bang cá»§a báº¡n", "Iyong Estado")}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                    {clean ? (
                      <>
                        <CheckCircle2 size={16} style={{ color: "#16A34A", flexShrink: 0 }} />
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#16A34A", whiteSpace: "nowrap" }}>
                          {ll("No mistakes", "à´¤àµ†à´±àµà´±àµà´•à´³à´¿à´²àµà´²", "àª•à«‹àªˆ àª­à«‚à¦²à«‹ àª¨àª¥à«€", "KhÃ´ng lá»—i", "Walang pagkakamali")}
                        </span>
                      </>
                    ) : (
                      <span style={{ fontSize: 14, fontWeight: 600, color: RED, whiteSpace: "nowrap" }}>
                        {localMistakes} {ll("to review", "à´…à´µà´²àµ‹à´•à´¨à´‚ à´šàµ†à´¯àµà´¯à´¾àµ»", "àª¸à¤®à¥€à¦•à«à¦·à¤¾", "cáº§n Ã´n", "upang suriin")}
                      </span>
                    )}
                    <span style={{ fontSize: 13, color: "#9CA3AF", whiteSpace: "nowrap" }}>/ {personalizedQs.length}</span>
                  </div>
                </div>
              </div>
            );
          })()}
          <TopicProgressBar
            key="extra"
            topic={"extra" as Topic}
            mistakes={topicMistakes["extra"]}
            total={topicTotals["extra"]}
            animate={shouldAnimate}
          />
        </div>
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 4: MISTAKES TO REVIEW
          â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
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
                  `${mistakeCount} à´šàµ‹à´¦àµà´¯à´™àµà´™àµ¾ à´…à´µà´²àµ‹à´•à´¨à´‚ à´šàµ†à´¯àµà´¯à´¾à´¨àµà´£àµà´Ÿàµ`,
                  `${mistakeCount} àªªà«àª°àª¶à«àª¨à«‹ àª¸àª®à«€àª•à«àª·àª¾ àª•àª°àªµàª¾àª¨àª¾ àª›à«‡`,
                  `Báº¡n cÃ³ ${mistakeCount} cÃ¢u há»i cáº§n Ã´n láº¡i`,
                  `Mayroon kang ${mistakeCount} tanong${mistakeCount !== 1 ? "" : ""} na dapat suriin`
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
                  "à´¤àµ†à´±àµà´±àµà´•àµ¾ à´ªà´ à´¿à´•àµà´•à´¾àµ» à´¸à´¹à´¾à´¯à´¿à´•àµà´•àµà´‚. à´¸àµà´•àµ‹àµ¼ à´®àµ†à´šàµà´šà´ªàµà´ªàµ†à´Ÿàµà´¤àµà´¤à´¾àµ» à´…à´µ à´…à´µà´²àµ‹à´•à´¨à´‚ à´šàµ†à´¯àµà´¯àµà´•.",
                  "àª­à«‚àª²à«‹ àª¶à«€àª–àªµàª¾àª®àª¾àª‚ àª®àª¦àª¦ àª•àª°à«‡ àª›à«‡. àª¤àª®àª¾àª°à«‹ àª¸à«àª•à«‹àª° àª¸à«àª§àª¾àª°àªµàª¾ àª¸àª®à«€àª•à«àª·àª¾ àª•àª°à«‹.",
                  "Sai láº§m giÃºp báº¡n há»c. Ã”n láº¡i Ä‘á»ƒ cáº£i thiá»‡n Ä‘iá»ƒm sá»‘.",
                  "Ang mga pagkakamali ay tumutulong sa pag-aaral. Suriin ang mga ito para mapabuti ang iyong marka."
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
              {l("Review Mistakes", "à´¤àµ†à´±àµà´±àµà´•àµ¾ à´…à´µà´²àµ‹à´•à´¨à´‚", "àª­à«‚àª²à«‹ àª¸àª®à«€àª•à«àª·àª¾", "Ã”n lá»—i sai", "Suriin ang mga Pagkakamali")}
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
                "No mistakes to review â€” you're doing great!",
                "à´…à´µà´²àµ‹à´•à´¨à´‚ à´šàµ†à´¯àµà´¯à´¾àµ» à´¤àµ†à´±àµà´±àµà´•à´³à´¿à´²àµà´² â€” à´¨à´¿à´™àµà´™àµ¾ à´®à´¿à´•à´šàµà´š à´°àµ€à´¤à´¿à´¯à´¿àµ½ à´ªàµà´°à´µàµ¼à´¤àµà´¤à´¿à´•àµà´•àµà´¨àµà´¨àµ!",
                "àª¸àª®à«€àª•à«àª·àª¾ àª•àª°àªµàª¾ àª­à«‚àª²à«‹ àª¨àª¥à«€ â€” àª¤àª®à«‡ àª–à«‚àª¬ àª¸àª¾àª°à«àª‚ àª•àª°à«€ àª°àª¹à«àª¯àª¾ àª›à«‹!",
                "KhÃ´ng cÃ³ lá»—i sai cáº§n Ã´n â€” báº¡n Ä‘ang lÃ m ráº¥t tá»‘t!",
                "Walang pagkakamaling dapat suriin â€” magaling ka!"
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
            â† {t("home", lang)}
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
          <div className="text-4xl mb-2">ðŸ“ŠðŸ™</div>
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
                ? "à´šàµ‹à´¦àµà´¯à´™àµà´™àµ¾ à´ªà´°à´¿à´¶àµ‹à´§à´¿à´•àµà´•àµ‡à´£àµà´Ÿà´¤àµà´£àµà´Ÿàµ"
                : lang === "gu"
                ? "àªªà«àª°àª¶à«àª¨à«‹àª¨à«€ àª¸àª®à«€àª•à«àª·àª¾ àªœàª°à«‚àª°à«€ àª›à«‡"
                : "cÃ¢u há»i cáº§n Ã´n láº¡i"}
            </p>

            {weakestTopic && mistakesByTopic[weakestTopic[0] as Topic] > 0 && (
              <div className="bg-white/50 rounded-lg p-3 text-sm">
                <p className="text-orange-800 font-medium">
                  {lang === "en" ? "Focus on:" : lang === "ml" ? "à´¶àµà´°à´¦àµà´§à´¿à´•àµà´•àµ‡à´£àµà´Ÿ à´µà´¿à´·à´¯à´‚:" : lang === "gu" ? "àª§à«àª¯àª¾àª¨ àª†àªªà«‹:" : "Táº­p trung vÃ o:"}
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
