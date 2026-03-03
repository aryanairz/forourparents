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

type MistakeState = "list" | "reviewing" | "confirm-clear";

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

export default function MistakesPage() {
  const { lang, mounted } = useLanguage();
  const questions = useQuestionPool();
  const [state, setState] = useState<MistakeState>("list");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mistakeIds, setMistakeIds] = useState<string[]>([]);
  const [mistakeQuestions, setMistakeQuestions] = useState<Question[]>([]);

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
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ── Not logged in gate ──
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center px-4">
        <div className="text-6xl">📋</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {lang === "en"
            ? "Track Your Mistakes"
            : "നിങ്ങളുടെ തെറ്റുകൾ ട്രാക്ക് ചെയ്യുക"}
        </h2>
        <p className="text-base sm:text-lg text-gray-500 max-w-xs leading-relaxed">
          {lang === "en"
            ? "Create a free account to save and review the questions you got wrong."
            : "നിങ്ങൾ തെറ്റായി ഉത്തരം നൽകിയ ചോദ്യങ്ങൾ സംരക്ഷിക്കാനും അവലോകനം ചെയ്യാനും ഒരു സൗജന്യ അക്കൗണ്ട് സൃഷ്ടിക്കുക."}
        </p>
        <Link
          href="/login"
          className="w-full max-w-xs min-h-[60px] bg-primary hover:bg-primary-dark text-white
                     text-xl font-bold rounded-2xl shadow-lg
                     flex items-center justify-center px-6 py-4
                     transition-all active:scale-[0.97] no-underline"
        >
          {lang === "en" ? "Create Account" : lang === "ml" ? "അക്കൌണ്ട് സൃഷ്ടിക്കുക" : "ખાતું બનાવો"}
        </Link>
        <Link
          href="/login"
          className="text-primary font-semibold text-base hover:underline no-underline"
        >
          {lang === "en" ? "Already have an account? Log in →" : lang === "ml" ? "ഇതിനകം അക്കൌണ്ട് ഉണ്ടോ? ലോഗിൻ →" : "પહેલેથી ખાતું છે? લોગ ઇન →"}
        </Link>
        <Link
          href="/"
          className="text-gray-400 text-sm hover:underline no-underline"
        >
          ← {t("goHome", lang)}
        </Link>
      </div>
    );
  }

  // ── Confirm Clear ──
  if (state === "confirm-clear") {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center space-y-6">
        <div className="text-5xl">⚠️</div>
        <p className="text-xl font-semibold text-gray-900">
          {t("clearConfirm", lang)}
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <button
            onClick={handleClear}
            className="min-h-[56px] min-w-[120px] bg-danger text-white text-lg font-bold
                       rounded-xl px-6 py-3 active:scale-[0.97] transition-all"
          >
            {t("yes", lang)}
          </button>
          <button
            onClick={() => setState("list")}
            className="min-h-[56px] min-w-[120px] bg-gray-200 text-gray-700 text-lg font-bold
                       rounded-xl px-6 py-3 active:scale-[0.97] transition-all"
          >
            {t("cancel", lang)}
          </button>
        </div>
      </div>
    );
  }

  // ── Reviewing ──
  if (state === "reviewing" && reviewPool.length > 0) {
    const currentQ = reviewPool[currentIdx];
    if (!currentQ) return null;
    const answered = selectedOption !== null;

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-5">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => {
              refreshMistakes();
              setState("list");
            }}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50
                       text-gray-700 border border-gray-200 shadow-sm
                       font-semibold text-base active:scale-95 transition-all"
          >
            ← {t("back", lang)}
          </button>
          <h1 className="text-lg font-bold text-primary flex-1 text-right">
            {t("reviewMistakes", lang)}
          </h1>
        </div>

        <ProgressBar
          attempted={attempted}
          correct={correctCount}
          total={reviewPool.length}
          lang={lang}
        />

        <QuestionCard
          question={currentQ.question}
          lang={lang}
          number={currentIdx + 1}
          total={reviewPool.length}
        />

        <ReadAloud
          text={currentQ.question}
          options={displayOptions}
          lang={lang}
        />

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
              {currentIdx + 1 >= reviewPool.length
                ? `✓ ${lang === "en" ? "Done" : lang === "ml" ? "പൂർത്തിയായി" : "પૂર્ણ"}`
                : `→ ${t("next", lang)}`}
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── Mistake list ──
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/"
          className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50
                     text-gray-700 border border-gray-200 shadow-sm
                     font-semibold text-base active:scale-95 transition-all no-underline"
        >
          ← {t("home", lang)}
        </Link>
        <h1 className="text-lg font-bold text-primary flex-1 text-right">
          {t("reviewMistakes", lang)}
        </h1>
      </div>

      {mistakeQuestions.length === 0 ? (
        <div className="text-center py-12 space-y-4">
          <div className="text-6xl">🌟🙏</div>
          <h2 className="text-q-heading font-bold text-success">
            {t("noMistakes", lang)}
          </h2>
          <p className="text-lg text-gray-600">{t("noMistakesDesc", lang)}</p>
          <Link
            href="/"
            className="inline-block mt-4 min-h-[48px] bg-primary text-white text-lg font-bold
                       rounded-xl px-8 py-3 active:scale-[0.97] transition-all no-underline"
          >
            ← {t("goHome", lang)}
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 text-center space-y-2">
            <p className="text-lg font-semibold text-orange-700">
              {mistakeQuestions.length}{" "}
              {lang === "en" ? "questions to review" : lang === "ml" ? "ചോദ്യങ്ങൾ പരിശോധിക്കാൻ" : "પ્રશ્નો સમીક્ષા કરવા"}
            </p>
            <p className="text-sm text-orange-600">
              {t("mistakesEncourage", lang)}
            </p>
          </div>

          {/* Question list grouped by topic */}
          <div className="space-y-3">
            {mistakeQuestions.map((q) => (
              <div
                key={q.id}
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
              >
                <span
                  className="inline-block text-xs font-semibold text-blue-600 bg-blue-50
                                  rounded-full px-2 py-0.5 mb-2"
                >
                  {topicLabels[q.topic][lang]}
                </span>
                <p className="text-base text-gray-800">{q.question[lang]}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <button
              onClick={startReview}
              className="w-full min-h-[56px] bg-primary text-white text-xl font-bold
                         rounded-xl px-6 py-4 active:scale-[0.97] transition-all"
            >
              ▶ {t("startReview", lang)}
            </button>
            <button
              onClick={() => setState("confirm-clear")}
              className="w-full min-h-[48px] bg-red-50 text-danger border-2 border-red-200
                         text-lg font-semibold rounded-xl px-6 py-3
                         active:scale-[0.97] transition-all"
            >
              🗑 {t("clearMistakes", lang)}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
