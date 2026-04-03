"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import {
  questions as allQuestions,
  Question,
  topicLabels,
  BilingualText,
} from "@/data/questions";
import { getMistakes, clearAllMistakes, removeMistake, getCurrentUser } from "@/lib/storage";
import { useQuestionPool } from "@/lib/useQuestionPool";
import QuestionCard from "@/components/QuestionCard";
import OptionButton from "@/components/OptionButton";
import ReadAloud from "@/components/ReadAloud";
import ProgressBar from "@/components/ProgressBar";
import { ArrowLeft, Play, ChevronDown, ChevronUp, Trash2, RotateCcw, Home, Star, ClipboardList, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

type MistakeState = "list" | "reviewing" | "confirm-clear";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Split a bilingual text that uses " / " to list alternative accepted answers */
function splitBilingual(bt: BilingualText): BilingualText[] {
  const enParts = bt.en.split(" / ");
  if (enParts.length <= 1) return [bt];
  const mlParts = bt.ml.split(" / ");
  const guParts = bt.gu.split(" / ");
  const viParts = (bt.vi ?? bt.en).split(" / ");
  return enParts.map((en, i) => ({
    en: en.trim(),
    ml: (mlParts[i] ?? en).trim(),
    gu: (guParts[i] ?? en).trim(),
    vi: (viParts[i] ?? en).trim(),
  }));
}

function isMultiAnswer(bt: BilingualText): boolean {
  return bt.en.includes(" / ");
}

/**
 * Shuffle options for a question, splitting any multi-answer correct option
 * into a single randomly-chosen answer so e.g. "Madison / Hamilton / Jay"
 * appears as just "James Madison" (or Hamilton, or Jay) each time.
 */
function shuffleOptions(q: Question): {
  options: BilingualText[];
  correctIndex: number;
} {
  const correctOption = q.options[q.correctIndex];
  const wrongOptions = q.options.filter((_, i) => i !== q.correctIndex);

  // Pick one answer from multi-answer correct options
  let chosenCorrect: BilingualText;
  if (isMultiAnswer(correctOption)) {
    const parts = splitBilingual(correctOption);
    chosenCorrect = parts[Math.floor(Math.random() * parts.length)];
  } else {
    chosenCorrect = correctOption;
  }

  // Also split any multi-answer wrong options
  const expandedWrong: BilingualText[] = wrongOptions.map((wo) => {
    if (isMultiAnswer(wo)) {
      const parts = splitBilingual(wo);
      return parts[Math.floor(Math.random() * parts.length)];
    }
    return wo;
  });

  // Build 4 options: 1 correct + 3 wrong, shuffled
  const allOpts: { opt: BilingualText; isCorrect: boolean }[] = [
    { opt: chosenCorrect, isCorrect: true },
    ...expandedWrong.map((opt) => ({ opt, isCorrect: false })),
  ];
  const shuffled = shuffle(allOpts);

  return {
    options: shuffled.map((s) => s.opt),
    correctIndex: shuffled.findIndex((s) => s.isCorrect),
  };
}

export default function MistakesPage() {
  const { lang, mounted } = useLanguage();
  const questions = useQuestionPool();
  const l = (en: string, ml: string, gu?: string, vi?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : (vi ?? en);
  const [state, setState] = useState<MistakeState>("list");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mistakeIds, setMistakeIds] = useState<string[]>([]);
  const [mistakeQuestions, setMistakeQuestions] = useState<Question[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Review state
  const [reviewPool, setReviewPool] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [displayOptions, setDisplayOptions] = useState<BilingualText[]>([]);
  const [displayCorrectIndex, setDisplayCorrectIndex] = useState(0);

  // Shuffle options whenever the review question changes
  useEffect(() => {
    const currentQ = reviewPool[currentIdx];
    if (currentQ) {
      const { options, correctIndex } = shuffleOptions(currentQ);
      setDisplayOptions(options);
      setDisplayCorrectIndex(correctIndex);
    }
  }, [currentIdx, reviewPool]);

  const refreshMistakes = useCallback(() => {
    const ids = getMistakes();
    setMistakeIds(ids);
    setMistakeQuestions(questions.filter((q) => ids.includes(q.id)));
  }, [questions]);

  useEffect(() => {
    if (mounted) {
      setIsLoggedIn(!!getCurrentUser());
      refreshMistakes();
    }
  }, [mounted, refreshMistakes]);

  const startReview = () => {
    const pool = shuffle(mistakeQuestions);
    setReviewPool(pool);
    setCurrentIdx(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setAttempted(0);
    // Shuffle options for the first question immediately
    if (pool[0]) {
      const { options, correctIndex } = shuffleOptions(pool[0]);
      setDisplayOptions(options);
      setDisplayCorrectIndex(correctIndex);
    }
    setState("reviewing");
  };

  const startReviewFromQuestion = (questionId: string) => {
    const clicked = mistakeQuestions.find((q) => q.id === questionId);
    const rest = mistakeQuestions.filter((q) => q.id !== questionId);
    if (!clicked) return;
    const pool = [clicked, ...shuffle(rest)];
    setReviewPool(pool);
    setCurrentIdx(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setAttempted(0);
    const { options, correctIndex } = shuffleOptions(pool[0]);
    setDisplayOptions(options);
    setDisplayCorrectIndex(correctIndex);
    setState("reviewing");
  };

  const handleSelect = (idx: number) => {
    if (selectedOption !== null || !reviewPool[currentIdx]) return;
    setSelectedOption(idx);
    setAttempted((p) => p + 1);
    if (idx === displayCorrectIndex) {
      setCorrectCount((p) => p + 1);
      // Remove from mistakes if they got it right
      removeMistake(reviewPool[currentIdx].id);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 >= reviewPool.length) {
      refreshMistakes();
      setState("list");
      return;
    }
    setCurrentIdx((p) => p + 1);
    setSelectedOption(null);
  };

  const handleClear = () => {
    clearAllMistakes();
    refreshMistakes();
    setState("list");
  };

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-text-secondary text-[1rem]">
          {l("Loading...", "ലോഡ് ചെയ്യുന്നു...", "લોડ થઈ રહ્યું છે...", "Đang tải...")}
        </p>
      </div>
    );
  }

  // ── Not logged in gate ──
  if (!isLoggedIn) {
    return (
      <motion.div
        initial="hidden" animate="show" variants={stagger}
        className="flex flex-col items-center justify-center min-h-[60vh] gap-5 text-center px-4 max-w-sm mx-auto"
      >
        <motion.div variants={fadeUp} className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
          <ClipboardList size={32} className="text-primary" />
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-[1.5rem] font-bold text-text-heading font-serif">
          {lang === "en" ? "Track Your Mistakes" : lang === "ml" ? "നിങ്ങളുടെ തെറ്റുകൾ ട്രാക്ക് ചെയ്യുക"
            : lang === "gu" ? "તમારી ભૂલો ટ્રેક કરો" : "Theo dõi lỗi của bạn"}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[1rem] text-text-secondary leading-relaxed">
          {lang === "en" ? "Create a free account to save and review the questions you got wrong."
            : lang === "ml" ? "നിങ്ങൾ തെറ്റായി ഉത്തരം നൽകിയ ചോദ്യങ്ങൾ സംരക്ഷിക്കാനും അവലോകനം ചെയ്യാനും ഒരു സൌജന്യ അക്കൌണ്ട് സൃഷ്ടിക്കുക."
            : lang === "gu" ? "તમે ખોટા જવાબ આપેલા પ્રશ્નો સેવ અને સમીક્ષા કરવા માટે મફત ખાતું બનાવો."
            : "Tạo tài khoản miễn phí để lưu và ôn lại các câu hỏi bạn trả lời sai."}
        </motion.p>
        <motion.div variants={fadeUp} className="w-full">
        <Link
          href="/login"
          className="w-full min-h-[56px] bg-primary hover:bg-primary-dark text-white text-[1.125rem] font-bold
                     rounded-btn flex items-center justify-center gap-2 px-6 py-4 shadow-btn
                     transition-all hover:scale-[1.02] active:scale-[0.97] no-underline"
        >
          <LogIn size={20} />
          {lang === "en" ? "Create Account" : lang === "ml" ? "അക്കൌണ്ട് സൃഷ്ടിക്കുക" : lang === "gu" ? "ખાતું બનાવો" : "Tạo tài khoản"}
        </Link>
        </motion.div>
        <Link href="/login" className="text-primary font-semibold text-[1rem] hover:underline no-underline">
          {lang === "en" ? "Already have an account? Log in" : lang === "ml" ? "ഇതിനകം അക്കൌണ്ട് ഉണ്ടോ? ലോഗിൻ" : lang === "gu" ? "પહેલેથી ખાતું છે? લોગ ઇન" : "Đã có tài khoản? Đăng nhập"}
        </Link>
        <Link href="/" className="flex items-center gap-1 text-text-secondary text-[0.9375rem] hover:text-text-body no-underline">
          <Home size={15} /> {t("goHome", lang)}
        </Link>
      </motion.div>
    );
  }

  // ── Confirm Clear ──
  if (state === "confirm-clear") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="max-w-content mx-auto px-4 sm:px-6 py-12 text-center space-y-5"
      >
        <div className="w-16 h-16 rounded-full bg-danger-light flex items-center justify-center mx-auto">
          <Trash2 size={28} className="text-danger" />
        </div>
        <p className="text-[1.25rem] font-semibold text-text-heading font-serif">
          {t("clearConfirm", lang)}
        </p>
        <div className="flex gap-3 justify-center pt-2">
          <button
            onClick={handleClear}
            className="min-h-[52px] min-w-[120px] bg-danger text-white text-[1rem] font-bold
                       rounded-btn px-6 py-3 active:scale-[0.97] transition-all"
          >
            {t("yes", lang)}
          </button>
          <button
            onClick={() => setState("list")}
            className="min-h-[52px] min-w-[120px] bg-white border border-border text-text-body text-[1rem] font-semibold
                       rounded-btn px-6 py-3 active:scale-[0.97] transition-all hover:bg-gray-50"
          >
            {t("cancel", lang)}
          </button>
        </div>
      </motion.div>
    );
  }

  // ── Reviewing ──
  if (state === "reviewing" && reviewPool.length > 0) {
    const currentQ = reviewPool[currentIdx];
    if (!currentQ) return null;
    const answered = selectedOption !== null;

    return (
      <motion.div
        initial="hidden" animate="show" variants={stagger}
        className="max-w-content mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <button
            onClick={() => { refreshMistakes(); setState("list"); }}
            className="flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-btn bg-white border border-border
                       text-text-secondary text-[0.9375rem] font-medium hover:border-primary hover:text-primary
                       transition-colors shadow-card"
          >
            <ArrowLeft size={15} /> {t("back", lang)}
          </button>
          <h1 className="text-[1.0625rem] font-bold text-text-heading flex-1 text-right font-serif">
            {t("reviewMistakes", lang)}
          </h1>
        </motion.div>

        <ProgressBar attempted={attempted} correct={correctCount} total={reviewPool.length} lang={lang} />

        <QuestionCard question={currentQ.question} lang={lang} number={currentIdx + 1} total={reviewPool.length} />

        <ReadAloud text={currentQ.question} options={displayOptions} lang={lang} />

        <div className="flex flex-col gap-3">
          {displayOptions.map((opt, idx) => {
            let isCorrect: boolean | null = null;
            if (answered) {
              if (idx === displayCorrectIndex) isCorrect = true;
              else if (idx === selectedOption) isCorrect = false;
            }
            return (
              <OptionButton
                key={idx} option={opt} lang={lang} index={idx}
                selected={selectedOption === idx} isCorrect={isCorrect}
                disabled={answered} onClick={() => handleSelect(idx)}
              />
            );
          })}
        </div>

        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="space-y-3"
          >
            <div
              className={`text-center text-[1.0625rem] font-bold py-3 rounded-card border ${
                selectedOption === displayCorrectIndex
                  ? "bg-success-light text-success border-success-border"
                  : "bg-danger-light text-danger border-danger-border"
              }`}
            >
              {selectedOption === displayCorrectIndex ? `✓ ${t("correct", lang)}` : `✗ ${t("incorrect", lang)}`}
            </div>

            <div className="bg-accent-light rounded-card p-4 border border-blue-200">
              <p className="text-[0.8125rem] font-semibold text-accent uppercase tracking-wide mb-1.5">
                {t("explanation", lang)}
              </p>
              <p className="text-[1rem] text-text-body break-words leading-relaxed">
                {currentQ.explanation[lang] ?? currentQ.explanation.en}
              </p>
            </div>

            <button
              onClick={handleNext}
              className="w-full min-h-[56px] bg-primary hover:bg-primary-dark text-white text-[1.0625rem] font-bold
                         rounded-btn px-5 py-3 shadow-btn hover:scale-[1.02] active:scale-[0.97] transition-all"
            >
              {currentIdx + 1 >= reviewPool.length
                ? (lang === "en" ? "✓ Done" : lang === "ml" ? "✓ പൂർത്തിയായി" : "✓ પૂર્ણ")
                : `${t("next", lang)} →`}
            </button>
          </motion.div>
        )}
      </motion.div>
    );
  }

  // ── Mistake list ──
  return (
    <motion.div
      initial="hidden" animate="show" variants={stagger}
      className="max-w-content mx-auto px-4 sm:px-6 py-6 sm:py-8"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
        <Link
          href="/"
          className="flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-btn bg-white border border-border
                     text-text-secondary text-[0.9375rem] font-medium hover:border-primary hover:text-primary
                     transition-colors shadow-card no-underline"
        >
          <Home size={15} /> {t("home", lang)}
        </Link>
        <h1 className="text-[1.0625rem] font-bold text-text-heading flex-1 text-right font-serif">
          {t("reviewMistakes", lang)}
        </h1>
      </motion.div>

      {mistakeQuestions.length === 0 ? (
        <motion.div variants={fadeUp} className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-success-light flex items-center justify-center mx-auto">
            <Star size={28} className="text-success" />
          </div>
          <h2 className="text-[1.375rem] font-bold text-success font-serif">
            {t("noMistakes", lang)}
          </h2>
          <p className="text-[1rem] text-text-secondary">{t("noMistakesDesc", lang)}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-2 min-h-[48px] bg-primary hover:bg-primary-dark text-white
                       text-[1rem] font-bold rounded-btn px-8 py-3 shadow-btn active:scale-[0.97] transition-all no-underline"
          >
            <Home size={18} /> {t("goHome", lang)}
          </Link>
        </motion.div>
      ) : (
        <>
          <motion.div variants={fadeUp} className="bg-primary-light rounded-card p-4 border-l-4 border-primary text-left space-y-1">
            <p className="text-[1.0625rem] font-bold text-primary">
              {mistakeQuestions.length}{" "}
              {lang === "en" ? "questions to review" : lang === "ml" ? "ചോദ്യങ്ങൾ പരിശോധിക്കാൻ" : lang === "gu" ? "પ્રશ્નો સમીક્ષા કરવા" : "câu hỏi cần ôn lại"}
            </p>
            <p className="text-[0.9375rem] text-text-secondary">
              {t("mistakesEncourage", lang)}
            </p>
          </motion.div>

          {/* Question list */}
          <div className="flex flex-col gap-2 mt-4">
            {mistakeQuestions.map((q) => {
              const isExpanded = expandedId === q.id;
              const correctAnswer = q.options[q.correctIndex];
              return (
                <motion.div
                  key={q.id}
                  variants={fadeUp}
                  className="bg-white rounded-card border border-border shadow-card overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : q.id)}
                    className="w-full text-left p-4 hover:bg-primary-light active:scale-[0.99]
                               transition-all cursor-pointer min-h-[56px]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-[0.75rem] font-semibold text-accent bg-accent-light
                                         rounded-full px-2.5 py-0.5 mb-2">
                          {topicLabels[q.topic][lang] ?? topicLabels[q.topic].en}
                        </span>
                        <p className="text-[1rem] text-text-body leading-snug">{q.question[lang] ?? q.question.en}</p>
                      </div>
                      <span className="text-text-secondary mt-0.5 flex-shrink-0">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border px-4 pb-4 pt-3 space-y-3 animate-slideDown">
                      <div className="bg-success-light rounded-card p-3 border border-success-border">
                        <p className="text-[0.75rem] font-semibold text-success uppercase tracking-wide mb-1">
                          {lang === "en" ? "Correct Answer" : lang === "ml" ? "ശരിയായ ഉത്തരം" : lang === "gu" ? "સાચો જવાബ" : "Câu trả lời đúng"}
                        </p>
                        <p className="text-[1rem] font-semibold text-success">
                          {correctAnswer[lang] ?? correctAnswer.en}
                        </p>
                      </div>

                      <div className="bg-accent-light rounded-card p-3 border border-blue-200">
                        <p className="text-[0.75rem] font-semibold text-accent uppercase tracking-wide mb-1">
                          {t("explanation", lang)}
                        </p>
                        <p className="text-[0.9375rem] text-text-body leading-relaxed">
                          {q.explanation[lang] ?? q.explanation.en}
                        </p>
                      </div>

                      <button
                        onClick={() => startReviewFromQuestion(q.id)}
                        className="w-full min-h-[48px] bg-primary hover:bg-primary-dark text-white text-[1rem] font-bold
                                   rounded-btn px-4 py-2.5 shadow-btn active:scale-[0.97] transition-all
                                   flex items-center justify-center gap-2"
                      >
                        <Play size={16} />
                        {lang === "en" ? "Practice this question" : lang === "ml" ? "ഈ ചോദ്യം പ്രാക്ടീസ് ചെയ്യുക" : lang === "gu" ? "આ પ્રશ્ન પ્રેક્ટિસ કરો" : "Luyện câu hỏi này"}
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Actions */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-4">
            <button
              onClick={startReview}
              className="w-full min-h-[56px] bg-primary hover:bg-primary-dark text-white text-[1.125rem] font-bold
                         rounded-btn px-6 py-4 shadow-btn hover:scale-[1.02] active:scale-[0.97] transition-all
                         flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} /> {t("startReview", lang)}
            </button>
            <button
              onClick={() => setState("confirm-clear")}
              className="w-full min-h-[48px] bg-danger-light text-danger border border-danger-border
                         text-[1rem] font-semibold rounded-btn px-6 py-3
                         active:scale-[0.97] transition-all hover:bg-red-100
                         flex items-center justify-center gap-2"
            >
              <Trash2 size={18} /> {t("clearMistakes", lang)}
            </button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
