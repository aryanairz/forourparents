"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { questions as allQuestions, Question, BilingualText } from "@/data/questions";
import { addMistake, saveQuizAttempt } from "@/lib/storage";
import { useFeedbackSpeech } from "@/lib/useFeedbackSpeech";
import { useQuestionPool } from "@/lib/useQuestionPool";
import QuestionCard from "@/components/QuestionCard";
import OptionButton from "@/components/OptionButton";
import ProgressBar from "@/components/ProgressBar";
import ReadAloud from "@/components/ReadAloud";

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
  const mlParts = bt.ml.split(" / ");
  const guParts = bt.gu.split(" / ");
  // safeguard: if counts don't match, return the original unsplit
  if (enParts.length !== mlParts.length) return [bt];
  return enParts.map((en, i) => ({
    en: en.trim(),
    ml: mlParts[i]?.trim() ?? en.trim(),
    gu: guParts[i]?.trim() ?? en.trim(),
  }));
}

/** Does this text contain multiple slash-separated answers? */
function isMultiAnswer(bt: BilingualText): boolean {
  return bt.en.includes(" / ");
}

/**
 * Pick a random question from the pool, splitting multi-answer
 * correct options into a single answer per appearance.
 * Returns a Question with exactly 4 single-item options.
 */
function pickQuestion(pool: Question[], lastId: string | null): {
  question: Question;
  displayOptions: BilingualText[];
  displayCorrectIndex: number;
} {
  // Pick a question that isn't the same as the last one
  let q: Question;
  if (pool.length <= 1) {
    q = pool[0];
  } else {
    do {
      q = pool[Math.floor(Math.random() * pool.length)];
    } while (q.id === lastId);
  }

  const correctOption = q.options[q.correctIndex];
  const wrongOptions = q.options.filter((_, i) => i !== q.correctIndex);

  // Split multi-answer correct option → pick one at random
  let chosenCorrect: BilingualText;
  if (isMultiAnswer(correctOption)) {
    const parts = splitBilingual(correctOption);
    chosenCorrect = parts[Math.floor(Math.random() * parts.length)];
  } else {
    chosenCorrect = correctOption;
  }

  // For wrong options, also split any multi-answer ones and pick one each
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
    question: q,
    displayOptions: shuffled.map((s) => s.opt),
    displayCorrectIndex: shuffled.findIndex((s) => s.isCorrect),
  };
}

/* ── component ─────────────────────────────────────── */

export default function QuizPage() {
  const { lang, mounted } = useLanguage();
  const lastIdRef = useRef<string | null>(null);
  const { speak: speakFeedback, stop: stopFeedback } = useFeedbackSpeech();
  const questionPool = useQuestionPool();

  const [currentQ, setCurrentQ] = useState<Question | null>(null);
  const [displayOptions, setDisplayOptions] = useState<BilingualText[]>([]);
  const [displayCorrectIndex, setDisplayCorrectIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [finished, setFinished] = useState(false);

  const nextQuestion = useCallback(() => {
    stopFeedback();
    const { question, displayOptions: opts, displayCorrectIndex: ci } =
      pickQuestion(questionPool, lastIdRef.current);
    lastIdRef.current = question.id;
    setCurrentQ(question);
    setDisplayOptions(opts);
    setDisplayCorrectIndex(ci);
    setSelectedOption(null);
  }, [stopFeedback, questionPool]);

  useEffect(() => {
    if (mounted && questionPool.length > 0) nextQuestion();
  }, [mounted, nextQuestion]);

  const answered = selectedOption !== null;

  const handleSelect = useCallback(
    (idx: number) => {
      if (answered || !currentQ) return;
      setSelectedOption(idx);
      setAttempted((p) => p + 1);
      const isCorrect = idx === displayCorrectIndex;
      if (isCorrect) {
        setCorrectCount((p) => p + 1);
      } else {
        addMistake(currentQ.id);
      }
      const prefix = isCorrect
        ? (lang === "en" ? "Correct! " : lang === "ml" ? "ശരി! " : "સાચું! ")
        : (lang === "en" ? "Incorrect. " : lang === "ml" ? "തെറ്റ്. " : "ખોટું. ");
      speakFeedback(prefix + currentQ.explanation[lang], lang);
    },
    [answered, currentQ, displayCorrectIndex, lang, speakFeedback],
  );

  const handleNext = () => {
    nextQuestion();
  };

  const handleFinish = () => {
    setFinished(true);
    if (attempted > 0) saveQuizAttempt("quiz", attempted, correctCount);
  };

  const handleRestart = () => {
    lastIdRef.current = null;
    setCorrectCount(0);
    setAttempted(0);
    setFinished(false);
    nextQuestion();
  };

  if (!mounted || !currentQ) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ── Finished screen ──
  if (finished) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center space-y-6">{" "}
        <div className="text-6xl mb-4">🎉🙏</div>
        <h2 className="text-q-large font-bold text-primary">
          {t("quizComplete", lang)}
        </h2>
        <p className="text-xl text-gray-600">{t("quizCompleteDesc", lang)}</p>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <p className="text-2xl font-bold text-primary">
            {correctCount} / {attempted}
          </p>
          <p className="text-lg text-gray-500">
            {correctCount >= attempted * 0.9
              ? t("greatScore", lang)
              : correctCount >= attempted * 0.6
                ? t("wellDone", lang)
                : t("goodScore", lang)}
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <button
            onClick={handleRestart}
            className="w-full min-h-[56px] bg-primary text-white text-xl font-bold
                       rounded-xl px-6 py-4 active:scale-[0.97] transition-all"
          >
            {t("tryAgain", lang)}
          </button>
          <Link
            href="/mistakes"
            className="block w-full min-h-[56px] bg-orange-50 text-orange-700 border-2 border-orange-300
                       text-lg font-semibold rounded-xl px-6 py-4
                       active:scale-[0.97] transition-all no-underline text-center"
          >
            🔄 {t("reviewMistakes", lang)}
          </Link>
          <Link
            href="/"
            className="block w-full min-h-[48px] text-gray-600 text-lg font-medium
                       rounded-xl px-6 py-3 active:scale-[0.97] transition-all no-underline text-center"
          >
            ← {t("goHome", lang)}
          </Link>
        </div>
      </div>
    );
  }

  // ── Quiz screen ──
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-5">
      {/* Back + progress */}
      <div className="flex items-center gap-3 mb-4">
        <Link
          href="/"
          className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50
                     text-gray-700 border border-gray-200 shadow-sm
                     font-semibold text-base active:scale-95 transition-all no-underline"
        >
          ← {t("home", lang)}
        </Link>
        <h1 className="text-lg font-bold text-primary flex-1 text-right">
          {t("quizMode", lang)}
        </h1>
      </div>

      <ProgressBar
        attempted={attempted}
        correct={correctCount}
        lang={lang}
      />

      <QuestionCard
        question={currentQ.question}
        lang={lang}
      />

      {/* Read aloud */}
      <ReadAloud
        text={currentQ.question}
        options={displayOptions}
        lang={lang}
      />

      {/* Options */}
      <div className="space-y-3">
        {displayOptions.map((opt, idx) => {
          let isCorrect: boolean | null = null;
          if (answered) {
            if (idx === displayCorrectIndex) isCorrect = true;
            else if (idx === selectedOption) isCorrect = false;
          }

          return (
            <OptionButton
              key={idx}
              option={opt}
              lang={lang}
              index={idx}
              selected={selectedOption === idx}
              isCorrect={isCorrect}
              disabled={answered}
              onClick={() => handleSelect(idx)}
            />
          );
        })}
      </div>

      {/* Feedback + explanation */}
      {answered && (
        <div className="space-y-2.5 sm:space-y-3 animate-[fadeIn_0.3s_ease-in]">
          <div
            className={`text-center text-lg sm:text-xl font-bold py-2.5 sm:py-3 rounded-xl ${
              selectedOption === displayCorrectIndex
                ? "bg-success-light text-success"
                : "bg-danger-light text-danger"
            }`}
          >
            {selectedOption === displayCorrectIndex
              ? `✓ ${t("correct", lang)}`
              : `✗ ${t("incorrect", lang)}`}
          </div>

          <div className="bg-blue-50 rounded-xl p-3 sm:p-4 border border-blue-100">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-1">
              {t("explanation", lang)}
            </p>
            <p className="text-base sm:text-lg text-gray-800 break-words">
              {currentQ.explanation[lang]}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="w-full min-h-[52px] sm:min-h-[56px] bg-primary text-white text-lg sm:text-xl font-bold
                       rounded-xl px-5 sm:px-6 py-3 sm:py-4 active:scale-[0.97] transition-all"
          >
            → {t("next", lang)}
          </button>
        </div>
      )}

      {/* Finish quiz button — always visible */}
      {attempted > 0 && (
        <button
          onClick={handleFinish}
          className="w-full min-h-[48px] bg-gray-100 text-gray-600 text-base font-semibold
                     rounded-xl px-4 py-3 active:scale-[0.97] transition-all mt-2
                     hover:bg-gray-200"
        >
          🏁 {lang === "en" ? "Finish Quiz" : lang === "ml" ? "ക്വിസ് അവസാനിപ്പിക്കുക" : "ક્વિઝ પૂરી કરો"}
        </button>
      )}
    </div>
  );
}
