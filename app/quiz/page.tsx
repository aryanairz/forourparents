"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { questions, Question, BilingualText } from "@/data/questions";
import { addMistake, saveQuizAttempt } from "@/lib/storage";
import QuestionCard from "@/components/QuestionCard";
import OptionButton from "@/components/OptionButton";
import ProgressBar from "@/components/ProgressBar";
import ReadAloud from "@/components/ReadAloud";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleOptions(q: Question): {
  options: BilingualText[];
  correctIndex: number;
} {
  const indices = q.options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    options: indices.map((i) => q.options[i]),
    correctIndex: indices.indexOf(q.correctIndex),
  };
}

export default function QuizPage() {
  const { lang, mounted } = useLanguage();
  const [shuffled, setShuffled] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [finished, setFinished] = useState(false);
  const [displayOptions, setDisplayOptions] = useState<BilingualText[]>([]);
  const [displayCorrectIndex, setDisplayCorrectIndex] = useState(0);

  useEffect(() => {
    setShuffled(shuffle(questions));
  }, []);

  const currentQ = shuffled[currentIdx];
  const answered = selectedOption !== null;

  // Shuffle options whenever the question changes
  useEffect(() => {
    if (currentQ) {
      const { options, correctIndex } = shuffleOptions(currentQ);
      setDisplayOptions(options);
      setDisplayCorrectIndex(correctIndex);
    }
  }, [currentQ?.id, currentIdx]);

  const handleSelect = useCallback(
    (idx: number) => {
      if (answered || !currentQ) return;
      setSelectedOption(idx);
      setAttempted((p) => p + 1);
      if (idx === displayCorrectIndex) {
        setCorrectCount((p) => p + 1);
      } else {
        addMistake(currentQ.id);
      }
    },
    [answered, currentQ, displayCorrectIndex],
  );

  const handleNext = async () => {
    if (currentIdx + 1 >= shuffled.length) {
      setFinished(true);
      // Save quiz attempt to database
      saveQuizAttempt("quiz", attempted, correctCount);
      return;
    }
    setCurrentIdx((p) => p + 1);
    setSelectedOption(null);
  };

  const handleRestart = () => {
    setShuffled(shuffle(questions));
    setCurrentIdx(0);
    setSelectedOption(null);
    setCorrectCount(0);
    setAttempted(0);
    setFinished(false);
  };

  if (!mounted || shuffled.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ── Finished screen ──
  if (finished) {
    return (
      <div className="space-y-6 text-center py-8">
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
    <div className="space-y-4">
      {/* Back + progress */}
      <div className="flex items-center gap-3 mb-2">
        <Link
          href="/"
          className="min-h-[44px] px-4 py-2 rounded-lg bg-gray-100 text-gray-700
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
        total={shuffled.length}
        lang={lang}
      />

      <QuestionCard
        question={currentQ.question}
        lang={lang}
        number={currentIdx + 1}
        total={shuffled.length}
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
            {currentIdx + 1 >= shuffled.length
              ? `🏁 ${t("quizComplete", lang)}`
              : `→ ${t("next", lang)}`}
          </button>
        </div>
      )}
    </div>
  );
}
