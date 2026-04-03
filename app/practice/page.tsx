"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import {
  questions as allQuestions,
  Question,
  Topic,
  allTopics,
  topicLabels,
} from "@/data/questions";
import { addMistake, saveQuizAttempt } from "@/lib/storage";
import { useFeedbackSpeech } from "@/lib/useFeedbackSpeech";
import { useQuestionPool } from "@/lib/useQuestionPool";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import ReadAloud from "@/components/ReadAloud";
import {
  BookOpen,
  Landmark,
  Scale,
  ScrollText,
  Flag,
  ChevronRight,
  Check,
  Eye,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  RotateCcw,
  Home,
  Trophy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type PracticeState = "select-topic" | "practicing" | "done";

const topicIcons: Record<Topic | "all", React.ReactNode> = {
  all: <BookOpen size={22} className="text-primary" />,
  government: <Landmark size={22} className="text-cat-government" />,
  rights: <Scale size={22} className="text-cat-rights" />,
  history: <ScrollText size={22} className="text-cat-history" />,
  symbols: <Flag size={22} className="text-cat-symbols" />,
};

const topicColors: Record<Topic | "all", string> = {
  all: "bg-primary",
  government: "bg-cat-government",
  rights: "bg-cat-rights",
  history: "bg-cat-history",
  symbols: "bg-cat-symbols",
};

export default function PracticePage() {
  const { lang, mounted } = useLanguage();
  const { speak: speakFeedback, stop: stopFeedback } = useFeedbackSpeech();
  const questions = useQuestionPool();
  const l = (en: string, ml: string, gu?: string, vi?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : (vi ?? en);
  const [state, setState] = useState<PracticeState>("select-topic");
  const [selectedTopic, setSelectedTopic] = useState<Topic | "all">("all");
  const [pool, setPool] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);

  const startPractice = () => {
    const filtered =
      selectedTopic === "all"
        ? questions
        : questions.filter((q) => q.topic === selectedTopic);
    setPool(shuffle(filtered));
    setCurrentIdx(0);
    setShowAnswer(false);
    setAttempted(0);
    setCorrect(0);
    setState("practicing");
  };

  const handleGotIt = () => {
    setAttempted((p) => p + 1);
    setCorrect((p) => p + 1);
    goNext();
  };

  const handleMissedIt = () => {
    if (pool[currentIdx]) addMistake(pool[currentIdx].id);
    setAttempted((p) => p + 1);
    goNext();
  };

  const goNext = async () => {
    stopFeedback();
    if (currentIdx + 1 >= pool.length) {
      setState("done");
      saveQuizAttempt("practice", attempted + 1, correct);
      return;
    }
    setCurrentIdx((p) => p + 1);
    setShowAnswer(false);
  };

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-text-secondary text-[1rem]">
          {l("Loading your questions...", "നിങ്ങളുടെ ചോദ്യങ്ങൾ ലോഡ് ചെയ്യുന്നു...", "તમારા પ્રશ્નો લોડ થઈ રહ્યા છે...", "Đang tải câu hỏi của bạn...")}
        </p>
      </div>
    );
  }

  // ── Topic Selection ──
  if (state === "select-topic") {
    const topicOptions: { key: Topic | "all"; label: string }[] = [
      { key: "all", label: t("allTopics", lang) },
      ...allTopics.map((topic) => ({ key: topic, label: topicLabels[topic][lang] ?? topicLabels[topic].en })),
    ];

    return (
      <motion.div
        initial="hidden" animate="show" variants={stagger}
        className="max-w-content mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-btn bg-white border border-border
                       text-text-secondary text-[0.9375rem] font-medium hover:border-primary hover:text-primary
                       transition-colors no-underline shadow-card"
          >
            <ArrowLeft size={16} />
            {t("home", lang)}
          </Link>
          <h1 className="text-[1.125rem] font-bold text-text-heading flex-1 text-right font-serif">
            {t("practiceMode", lang)}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-callout border border-amber-200 rounded-card p-4 text-center">
          <p className="text-[1rem] text-text-body font-medium">
            {t("practiceSelectHelp", lang)}
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-[1.25rem] font-bold text-text-heading text-center mb-4 font-serif">
            {t("selectTopic", lang)}
          </h2>
          <div className="space-y-3">
            {topicOptions.map(({ key, label }) => {
              const active = selectedTopic === key;
              return (
                <motion.button
                  key={key}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTopic(key)}
                  className={`w-full min-h-[56px] px-4 py-4 rounded-card border-2 text-left
                               flex items-center gap-3 transition-all
                               ${active
                                 ? "border-primary bg-primary-light shadow-card"
                                 : "border-border bg-white hover:border-primary hover:bg-primary-light"
                               }`}
                >
                  <span className={`flex-shrink-0 w-10 h-10 rounded-btn flex items-center justify-center
                    ${active ? `${topicColors[key]} [&>svg]:text-white` : "bg-gray-100"}`}>
                    {topicIcons[key]}
                  </span>
                  <span className={`flex-1 text-[1rem] font-semibold ${active ? "text-primary" : "text-text-body"}`}>
                    {label}
                  </span>
                  {active
                    ? <Check size={20} className="text-primary flex-shrink-0" />
                    : <ChevronRight size={18} className="text-text-secondary flex-shrink-0" />
                  }
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <button
            onClick={startPractice}
            className="w-full min-h-[56px] bg-primary hover:bg-primary-dark text-white text-[1.125rem] font-bold
                       rounded-btn px-6 py-4 shadow-btn hover:scale-[1.02] active:scale-[0.97] transition-all"
          >
            {t("startPractice", lang)}
          </button>
        </motion.div>
      </motion.div>
    );
  }

  // ── Done screen ──
  if (state === "done") {
    const missed = attempted - correct;
    const pct = attempted > 0 ? correct / attempted : 0;
    return (
      <motion.div
        initial="hidden" animate="show" variants={stagger}
        className="max-w-content mx-auto px-4 sm:px-6 py-10 text-center space-y-6"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center">
            <Trophy size={40} className="text-primary" />
          </div>
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-[1.75rem] font-bold text-text-heading font-serif">
          {t("quizComplete", lang)}
        </motion.h2>

        <motion.div variants={fadeUp} className="bg-white rounded-card border border-border shadow-card p-6 space-y-3">
          <p className="text-[2.5rem] font-bold text-primary tabular-nums">{correct} / {attempted}</p>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden max-w-[200px] mx-auto">
            <motion.div
              className={`h-full rounded-full ${pct >= 0.6 ? "bg-success" : "bg-danger"}`}
              initial={{ width: 0 }}
              animate={{ width: `${pct * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            />
          </div>
          <p className="text-[1.0625rem] text-text-secondary">
            {correct >= attempted * 0.9
              ? t("greatScore", lang)
              : correct >= attempted * 0.6
              ? t("wellDone", lang)
              : t("goodScore", lang)}
          </p>
          {missed > 0 && (
            <p className="text-[1rem] text-primary">
              {t("missed", lang)}: {missed} →{" "}
              <Link href="/mistakes" className="underline font-semibold text-primary">
                {t("reviewMistakes", lang)}
              </Link>
            </p>
          )}
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-3 pt-2">
          <button
            onClick={() => { setState("select-topic"); setSelectedTopic("all"); }}
            className="w-full min-h-[56px] bg-primary hover:bg-primary-dark text-white text-[1.125rem] font-bold
                       rounded-btn px-6 py-4 shadow-btn hover:scale-[1.02] active:scale-[0.97] transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} /> {t("tryAgain", lang)}
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-1.5 w-full min-h-[48px] text-text-secondary
                       text-[1rem] font-medium rounded-btn px-6 py-3 hover:text-text-body no-underline transition-colors"
          >
            <Home size={18} /> {t("goHome", lang)}
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  // ── Practicing ──
  const currentQ = pool[currentIdx];
  if (!currentQ) return null;

  return (
    <motion.div
      initial="hidden" animate="show" variants={stagger}
      className="max-w-content mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <button
          onClick={() => setState("select-topic")}
          className="flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-btn bg-white border border-border
                     text-text-secondary text-[0.9375rem] font-medium hover:border-primary hover:text-primary
                     transition-colors shadow-card"
        >
          <ArrowLeft size={15} /> {t("back", lang)}
        </button>
        <h1 className="text-[1.0625rem] font-bold text-text-heading flex-1 text-right font-serif">
          {t("practiceMode", lang)}
        </h1>
      </motion.div>

      <ProgressBar attempted={attempted} correct={correct} total={pool.length} lang={lang} />

      <QuestionCard question={currentQ.question} lang={lang} number={currentIdx + 1} total={pool.length} />

      <ReadAloud text={currentQ.question} lang={lang} />

      {/* Show Answer / Self-assessment */}
      {!showAnswer ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            setShowAnswer(true);
            const answerText = currentQ.options[currentQ.correctIndex][lang] ?? currentQ.options[currentQ.correctIndex].en;
            const explanation = currentQ.explanation[lang] ?? currentQ.explanation.en;
            const prefix = lang === "en" ? "The answer is: " : lang === "ml" ? "ഉത്തരം: " : lang === "gu" ? "જવાબ: " : "Câu trả lời là: ";
            speakFeedback(prefix + answerText + ". " + explanation, lang);
          }}
          className="w-full min-h-[56px] bg-white border-2 border-border hover:border-primary hover:bg-primary-light
                     text-text-body text-[1.0625rem] font-semibold rounded-btn px-6 py-4
                     transition-all flex items-center justify-center gap-2"
        >
          <Eye size={20} className="text-primary" />
          {t("showAnswer", lang)}
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="space-y-3"
        >
          {/* Answer */}
          <div className="bg-success-light rounded-card p-5 border border-success-border">
            <p className="text-[0.8125rem] font-semibold text-success uppercase tracking-wide mb-1.5">
              {lang === "en" ? "✓ Answer" : lang === "ml" ? "✓ ഉത്തരം" : lang === "gu" ? "✓ જવાબ" : "✓ Câu trả lời"}
            </p>
            <p className="text-[1.25rem] font-bold text-text-body break-words">
              {currentQ.options[currentQ.correctIndex][lang] ?? currentQ.options[currentQ.correctIndex].en}
            </p>
          </div>

          {/* Explanation */}
          <div className="bg-accent-light rounded-card p-4 border border-blue-200">
            <p className="text-[0.8125rem] font-semibold text-accent uppercase tracking-wide mb-1">
              {t("explanation", lang)}
            </p>
            <p className="text-[1rem] text-text-body break-words leading-relaxed">
              {currentQ.explanation[lang] ?? currentQ.explanation.en}
            </p>
          </div>

          {/* Self-mark */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleGotIt}
              className="min-h-[56px] bg-success hover:bg-green-700 text-white text-[1rem] font-bold
                         rounded-btn px-3 py-3 active:scale-[0.97] transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={20} /> {t("iGotIt", lang)}
            </button>
            <button
              onClick={handleMissedIt}
              className="min-h-[56px] bg-danger hover:bg-red-700 text-white text-[1rem] font-bold
                         rounded-btn px-3 py-3 active:scale-[0.97] transition-all flex items-center justify-center gap-2"
            >
              <XCircle size={20} /> {t("iMissedIt", lang)}
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
