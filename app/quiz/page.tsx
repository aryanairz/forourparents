"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { questions as allQuestions, Question, BilingualText, Topic, allTopics, topicLabels } from "@/data/questions";
import { addMistake, saveQuizAttempt } from "@/lib/storage";
import { useFeedbackSpeech } from "@/lib/useFeedbackSpeech";
import { useQuestionPool } from "@/lib/useQuestionPool";
import QuestionCard from "@/components/QuestionCard";
import OptionButton from "@/components/OptionButton";
import ProgressBar from "@/components/ProgressBar";
import ReadAloud from "@/components/ReadAloud";
import { ArrowLeft, RotateCcw, Home, ChevronRight, Flag, Trophy, BookOpen, Landmark, Scale, ScrollText, MapPin, Star, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

/* ── helpers ───────────────────────────────────────── */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Split a bilingual text that uses " / " to list alternatives */
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

/** Does this text contain multiple slash-separated answers? */
function isMultiAnswer(bt: BilingualText): boolean {
  return bt.en.includes(" / ");
}

/** How many recently-shown questions to avoid repeating */
const MAX_RECENT = 20;

/**
 * Pick a random question from the pool.
 * - For single-select: splits multi-answer correct options ("/" separated)
 *   into one answer per appearance, returns 4 options with 1 correct.
 * - For multi-select (correctIndices): shuffles all options and remaps indices.
 * Avoids repeating recently-shown question IDs.
 */
function pickQuestion(pool: Question[], recentIds: string[]): {
  question: Question;
  displayOptions: BilingualText[];
  displayCorrectIndex: number;
  displayCorrectIndices?: number[];
} {
  const recentSet = new Set(recentIds);
  const available = pool.filter((q) => !recentSet.has(q.id));
  const candidates = available.length > 0 ? available : pool;
  const q = candidates[Math.floor(Math.random() * candidates.length)];

  // ── Multi-select questions: shuffle all options & remap indices ──
  if (q.correctIndices) {
    const correctSet = new Set(q.correctIndices);
    const tagged = q.options.map((opt, i) => ({ opt, wasCorrect: correctSet.has(i) }));
    const shuffled = shuffle(tagged);
    return {
      question: q,
      displayOptions: shuffled.map((s) => s.opt),
      displayCorrectIndex: shuffled.findIndex((s) => s.wasCorrect),
      displayCorrectIndices: shuffled
        .map((s, i) => (s.wasCorrect ? i : -1))
        .filter((i) => i !== -1),
    };
  }

  // ── Single-select questions ──
  const correctOption = q.options[q.correctIndex];
  const wrongOptions = q.options.filter((_, i) => i !== q.correctIndex);

  let chosenCorrect: BilingualText;
  if (isMultiAnswer(correctOption)) {
    const parts = splitBilingual(correctOption);
    chosenCorrect = parts[Math.floor(Math.random() * parts.length)];
  } else {
    chosenCorrect = correctOption;
  }

  const expandedWrong: BilingualText[] = wrongOptions.map((wo) => {
    if (isMultiAnswer(wo)) {
      const parts = splitBilingual(wo);
      return parts[Math.floor(Math.random() * parts.length)];
    }
    return wo;
  });

  const allOpts: { opt: BilingualText; isCorrect: boolean }[] = [
    { opt: chosenCorrect, isCorrect: true },
    ...expandedWrong.map((opt) => ({ opt, isCorrect: false })),
  ];
  const shuffled = shuffle(allOpts);

  return {
    question: q,
    displayOptions: shuffled.map((s) => s.opt),
    displayCorrectIndex: shuffled.findIndex((s) => s.isCorrect),
  };
}

type TopicKey = Topic | "all" | "local";

const topicIcons: Record<TopicKey, React.ReactNode> = {
  all: <BookOpen size={22} className="text-primary" />,
  government: <Landmark size={22} className="text-cat-government" />,
  rights: <Scale size={22} className="text-cat-rights" />,
  history: <ScrollText size={22} className="text-cat-history" />,
  symbols: <Flag size={22} className="text-cat-symbols" />,
  extra: <Star size={22} className="text-amber-500" />,
  local: <MapPin size={22} className="text-primary" />,
};

const topicColors: Record<TopicKey, string> = {
  all: "bg-primary",
  government: "bg-cat-government",
  rights: "bg-cat-rights",
  history: "bg-cat-history",
  symbols: "bg-cat-symbols",
  extra: "bg-amber-500",
  local: "bg-primary",
};

/* ── component ─────────────────────────────────────── */

export default function QuizPage() {
  const { lang, mounted } = useLanguage();
  const recentIdsRef = useRef<string[]>([]);
  const { speak: speakFeedback, stop: stopFeedback } = useFeedbackSpeech();
  const questionPool = useQuestionPool();
  const l = (en: string, ml: string, gu?: string, vi?: string) =>
    lang === "en" ? en : lang === "ml" ? ml : lang === "gu" ? (gu ?? en) : (vi ?? en);

  const [selectedTopic, setSelectedTopic] = useState<TopicKey>("all");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState<Question | null>(null);
  const [displayOptions, setDisplayOptions] = useState<BilingualText[]>([]);
  const [displayCorrectIndex, setDisplayCorrectIndex] = useState(0);
  const [displayCorrectIndices, setDisplayCorrectIndices] = useState<number[] | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Set<number>>(new Set());
  const [multiSubmitted, setMultiSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [finished, setFinished] = useState(false);

  const isMultiSelect = displayCorrectIndices != null && displayCorrectIndices.length > 0;
  const requiredCount = displayCorrectIndices?.length ?? 0;
  const answered = isMultiSelect ? multiSubmitted : selectedOption !== null;

  const filteredPool = useMemo(() => {
    if (selectedTopic === "all") return questionPool.filter((q) => q.topic !== "extra" && !q.id.startsWith("p_"));
    if (selectedTopic === "local") return questionPool.filter((q) => q.id.startsWith("p_"));
    return questionPool.filter((q) => q.topic === selectedTopic && !q.id.startsWith("p_"));
  }, [questionPool, selectedTopic]);

  const nextQuestion = useCallback(() => {
    stopFeedback();
    const result = pickQuestion(filteredPool.length > 0 ? filteredPool : questionPool, recentIdsRef.current);
    recentIdsRef.current = [...recentIdsRef.current, result.question.id].slice(-MAX_RECENT);
    setCurrentQ(result.question);
    setDisplayOptions(result.displayOptions);
    setDisplayCorrectIndex(result.displayCorrectIndex);
    setDisplayCorrectIndices(result.displayCorrectIndices);
    setSelectedOption(null);
    setSelectedOptions(new Set());
    setMultiSubmitted(false);
  }, [stopFeedback, filteredPool, questionPool]);

  useEffect(() => {
    if (mounted && questionPool.length > 0 && quizStarted) nextQuestion();
  }, [mounted, nextQuestion, quizStarted]);

  const handleSelect = useCallback(
    (idx: number) => {
      if (!currentQ) return;

      // Multi-select: toggle checkbox
      if (isMultiSelect) {
        if (multiSubmitted) return;
        setSelectedOptions((prev) => {
          const next = new Set(prev);
          if (next.has(idx)) next.delete(idx);
          else next.add(idx);
          return next;
        });
        return;
      }

      // Single-select: immediate answer
      if (answered) return;
      setSelectedOption(idx);
      setAttempted((p) => p + 1);
      const isCorrect = idx === displayCorrectIndex;
      if (isCorrect) {
        setCorrectCount((p) => p + 1);
      } else {
        addMistake(currentQ.id);
      }
      const prefix = isCorrect
        ? (lang === "en" ? "Correct! " : lang === "ml" ? "ശരി! " : lang === "gu" ? "સાચું! " : "Đúng! ")
        : (lang === "en" ? "Incorrect. " : lang === "ml" ? "തെറ്റ്. " : lang === "gu" ? "ખોટું. " : "Sai. ");
      speakFeedback(prefix + (currentQ.explanation[lang] ?? currentQ.explanation.en), lang);
    },
    [answered, currentQ, displayCorrectIndex, isMultiSelect, multiSubmitted, lang, speakFeedback],
  );

  const handleMultiSubmit = useCallback(() => {
    if (!currentQ || !displayCorrectIndices) return;
    setMultiSubmitted(true);
    setAttempted((p) => p + 1);

    const correctSet = new Set(displayCorrectIndices);
    const isCorrect =
      selectedOptions.size === correctSet.size &&
      Array.from(selectedOptions).every((i) => correctSet.has(i));

    if (isCorrect) {
      setCorrectCount((p) => p + 1);
    } else {
      addMistake(currentQ.id);
    }
    const prefix = isCorrect
      ? (lang === "en" ? "Correct! " : lang === "ml" ? "ശരി! " : lang === "gu" ? "સાચું! " : "Đúng! ")
      : (lang === "en" ? "Incorrect. " : lang === "ml" ? "തെറ്റ്. " : lang === "gu" ? "ખોટું. " : "Sai. ");
    speakFeedback(prefix + (currentQ.explanation[lang] ?? currentQ.explanation.en), lang);
  }, [currentQ, displayCorrectIndices, selectedOptions, lang, speakFeedback]);

  const handleNext = () => {
    nextQuestion();
  };

  const handleFinish = () => {
    setFinished(true);
    if (attempted > 0) saveQuizAttempt("quiz", attempted, correctCount);
  };

  const handleRestart = () => {
    recentIdsRef.current = [];
    setCorrectCount(0);
    setAttempted(0);
    setFinished(false);
    setSelectedOptions(new Set());
    setMultiSubmitted(false);
    setQuizStarted(false);
    setSelectedTopic("all");
  };

  // ── Topic Selection ──
  if (!quizStarted) {
    const localCount = questionPool.filter((q) => q.id.startsWith("p_")).length;
    const hasLocal = localCount > 0;
    const extraCount = questionPool.filter((q) => q.topic === "extra").length;
    const officialQuestions = allQuestions.filter((q) => q.topic !== "extra");
    const topicOptions: { key: TopicKey; label: string; count: number }[] = [
      { key: "all", label: t("allTopics", lang), count: officialQuestions.length },
      ...allTopics.map((topic) => ({
        key: topic as TopicKey,
        label: topicLabels[topic][lang] ?? topicLabels[topic].en,
        count: officialQuestions.filter((q) => q.topic === topic).length,
      })),
      ...(hasLocal ? [{ key: "local" as TopicKey, label: "Your State & Officials", count: localCount }] : []),
      ...(extraCount > 0 ? [{
        key: "extra" as TopicKey,
        label: topicLabels.extra[lang] ?? topicLabels.extra.en,
        count: extraCount,
      }] : []),
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
            {t("quizMode", lang)}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-callout border border-amber-200 rounded-card p-4 text-center">
          <p className="text-[1rem] text-text-body font-medium">
            {l("Pick a topic to focus on, or quiz all topics.", "ഒരു വിഷയം തിരഞ്ഞെടുക്കുക, അല്ലെങ്കിൽ എല്ലാ വിഷയങ്ങളും.", "એક વિષય પસંદ કરો, અથવા બધા વિષયો.", "Chọn một chủ đề hoặc luyện tất cả.")}
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-[1.25rem] font-bold text-text-heading text-center mb-4 font-serif">
            {t("selectTopic", lang)}
          </h2>
          <div className="space-y-3">
            {topicOptions.map(({ key, label, count }) => {
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
                  <span className={`text-[0.8125rem] font-medium px-2 py-0.5 rounded-full flex-shrink-0
                    ${active ? "bg-primary text-white" : "bg-gray-100 text-text-secondary"}`}>
                    {count}
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
            onClick={() => setQuizStarted(true)}
            className="w-full min-h-[56px] bg-primary hover:bg-primary-dark text-white text-[1.125rem] font-bold
                       rounded-btn px-6 py-4 shadow-btn hover:scale-[1.02] active:scale-[0.97] transition-all"
          >
            {t("startQuiz", lang)}
          </button>
        </motion.div>
      </motion.div>
    );
  }

  if (!mounted || !currentQ) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-text-secondary text-[1rem]">
          {l("Loading your questions...", "നിങ്ങളുടെ ചോദ്യങ്ങൾ ലോഡ് ചെയ്യുന്നു...", "તમારા પ્રশ્નો લોڈ થئی ਰਹੇ ਹਨ...", "Đang tải câu hỏi của bạn...")}
        </p>
      </div>
    );
  }

  // ── Finished screen ──
  if (finished) {
    const pct = attempted > 0 ? correctCount / attempted : 0;
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
        <motion.p variants={fadeUp} className="text-[1.0625rem] text-text-secondary">{t("quizCompleteDesc", lang)}</motion.p>

        <motion.div variants={fadeUp} className="bg-white rounded-card border border-border shadow-card p-6 space-y-2">
          <p className="text-[2.5rem] font-bold text-primary tabular-nums">{correctCount} / {attempted}</p>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden max-w-[200px] mx-auto">
            <motion.div
              className={`h-full rounded-full ${pct >= 0.6 ? "bg-success" : "bg-danger"}`}
              initial={{ width: 0 }}
              animate={{ width: `${pct * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            />
          </div>
          <p className="text-[1rem] text-text-secondary">
            {correctCount >= attempted * 0.9
              ? t("greatScore", lang)
              : correctCount >= attempted * 0.6
              ? t("wellDone", lang)
              : t("goodScore", lang)}
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-3 pt-2">
          <button
            onClick={handleRestart}
            className="w-full min-h-[56px] bg-primary hover:bg-primary-dark text-white text-[1.125rem] font-bold
                       rounded-btn px-6 py-4 shadow-btn hover:scale-[1.02] active:scale-[0.97] transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} /> {t("tryAgain", lang)}
          </button>
          <Link
            href="/mistakes"
            className="flex items-center justify-center gap-2 w-full min-h-[56px] bg-white border-2 border-primary
                       text-primary text-[1rem] font-semibold rounded-btn px-6 py-4
                       active:scale-[0.97] transition-all no-underline hover:bg-primary-light"
          >
            <RotateCcw size={18} /> {t("reviewMistakes", lang)}
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-1.5 w-full min-h-[48px] text-text-secondary
                       text-[1rem] font-medium rounded-btn px-6 py-3 hover:text-text-body no-underline"
          >
            <Home size={18} /> {t("goHome", lang)}
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  // ── Quiz screen ──
  return (
    <motion.div
      initial="hidden" animate="show" variants={stagger}
      className="max-w-content mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4"
    >
      {/* Header row */}
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-btn bg-white border border-border
                     text-text-secondary text-[0.9375rem] font-medium hover:border-primary hover:text-primary
                     transition-colors no-underline shadow-card"
        >
          <ArrowLeft size={15} /> {t("home", lang)}
        </Link>
        <h1 className="text-[1.0625rem] font-bold text-text-heading flex-1 text-right font-serif">
          {t("quizMode", lang)}
        </h1>
      </motion.div>

      <ProgressBar attempted={attempted} correct={correctCount} lang={lang} />

      <QuestionCard question={currentQ.question} lang={lang} />

      <ReadAloud text={currentQ.question} options={displayOptions} lang={lang} />

      {/* Multi-select instruction */}
      {isMultiSelect && !answered && (
        <div className="text-center text-[0.875rem] text-text-secondary font-medium bg-amber-50 border border-amber-200 rounded-card py-2 px-3">
          {lang === "en" ? `Select ${requiredCount} answer${requiredCount > 1 ? "s" : ""}` : lang === "ml" ? `${requiredCount} ഉത്തരങ്ങൾ തിരഞ്ഞെടുക്കുക` : lang === "gu" ? `${requiredCount} જવાબો પસંદ કરો` : `Chọn ${requiredCount} câu trả lời`}
        </div>
      )}

      {/* Options */}
      <div className="flex flex-col gap-3">
        {displayOptions.map((opt, idx) => {
          let isCorrectFlag: boolean | null = null;
          let selected = false;

          if (isMultiSelect) {
            selected = selectedOptions.has(idx);
            if (multiSubmitted) {
              const correctSet = new Set(displayCorrectIndices!);
              if (correctSet.has(idx)) isCorrectFlag = true;
              else if (selected) isCorrectFlag = false;
            }
          } else {
            selected = selectedOption === idx;
            if (answered) {
              if (idx === displayCorrectIndex) isCorrectFlag = true;
              else if (idx === selectedOption) isCorrectFlag = false;
            }
          }

          return (
            <OptionButton
              key={`${currentQ.id}-${idx}`}
              option={opt}
              lang={lang}
              index={idx}
              selected={selected}
              isCorrect={isCorrectFlag}
              disabled={isMultiSelect ? multiSubmitted : answered}
              onClick={() => handleSelect(idx)}
              checkbox={isMultiSelect}
            />
          );
        })}
      </div>

      {/* Multi-select submit button */}
      {isMultiSelect && !multiSubmitted && selectedOptions.size > 0 && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleMultiSubmit}
          className={`w-full min-h-[56px] text-white text-[1.0625rem] font-bold rounded-btn px-5 py-3 shadow-btn transition-all flex items-center justify-center gap-2 ${
            selectedOptions.size === requiredCount
              ? "bg-primary hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.97]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={selectedOptions.size !== requiredCount}
        >
          {lang === "en" ? "Submit Answer" : lang === "ml" ? "ഉത്തരം സമർപ്പിക്കുക" : lang === "gu" ? "જવાબ સબમિટ કરો" : "Gửi câu trả lời"}
          {selectedOptions.size > 0 && ` (${selectedOptions.size}/${requiredCount})`}
        </motion.button>
      )}

      {/* Feedback + explanation */}
      <AnimatePresence>
      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="space-y-3"
        >
          <div
            className={`text-center text-[1.0625rem] font-bold py-3 rounded-card ${
              (isMultiSelect
                ? (() => { const cs = new Set(displayCorrectIndices!); return selectedOptions.size === cs.size && Array.from(selectedOptions).every(i => cs.has(i)); })()
                : selectedOption === displayCorrectIndex)
                ? "bg-success-light text-success border border-success-border"
                : "bg-danger-light text-danger border border-danger-border"
            }`}
          >
            {(isMultiSelect
              ? (() => { const cs = new Set(displayCorrectIndices!); return selectedOptions.size === cs.size && Array.from(selectedOptions).every(i => cs.has(i)); })()
              : selectedOption === displayCorrectIndex)
              ? `✓ ${t("correct", lang)}`
              : `✗ ${t("incorrect", lang)}`}
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
                       rounded-btn px-5 py-3 shadow-btn hover:scale-[1.02] active:scale-[0.97] transition-all flex items-center justify-center gap-2"
          >
            {t("next", lang)} <ChevronRight size={20} />
          </button>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Finish quiz button */}
      {attempted > 0 && (
        <button
          onClick={handleFinish}
          className="w-full min-h-[48px] bg-white border border-border text-text-secondary text-[0.9375rem] font-semibold
                     rounded-btn px-4 py-3 active:scale-[0.97] transition-all
                     hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          <Flag size={16} />
          {lang === "en" ? "Finish Quiz" : lang === "ml" ? "ക്വിസ് അവസാനിപ്പിക്കുക" : lang === "gu" ? "ક્વિઝ પૂરી કરો" : "Hoàn thành bài thi"}
        </button>
      )}
    </motion.div>
  );
}
