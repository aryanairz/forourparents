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

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type PracticeState = "select-topic" | "practicing" | "done";

export default function PracticePage() {
  const { lang, mounted } = useLanguage();
  const { speak: speakFeedback, stop: stopFeedback } = useFeedbackSpeech();
  const questions = useQuestionPool();
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
    if (pool[currentIdx]) {
      addMistake(pool[currentIdx].id);
    }
    setAttempted((p) => p + 1);
    goNext();
  };

  const goNext = async () => {
    stopFeedback();
    if (currentIdx + 1 >= pool.length) {
      setState("done");
      // Save practice attempt to database
      saveQuizAttempt("practice", attempted + 1, correct);
      return;
    }
    setCurrentIdx((p) => p + 1);
    setShowAnswer(false);
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ── Topic Selection ──
  if (state === "select-topic") {
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
            {t("practiceMode", lang)}
          </h1>
        </div>

        <h2 className="text-q-heading font-bold text-gray-900 text-center">
          {t("selectTopic", lang)}
        </h2>

        {/* Encouragement */}
        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center">
          <p className="text-base text-yellow-800 font-medium">
            {t("practiceSelectHelp", lang)}
          </p>
        </div>

        <div className="space-y-3">
          {/* All Topics */}
          <button
            onClick={() => setSelectedTopic("all")}
            className={`w-full min-h-[56px] px-5 py-4 rounded-xl text-lg font-semibold
                        border-2 transition-all active:scale-[0.97]
                        ${
                          selectedTopic === "all"
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                        }`}
          >
            📚 {t("allTopics", lang)}
          </button>

          {/* Individual topics */}
          {allTopics.map((topic) => {
            const icons: Record<Topic, string> = {
              government: "🏛️",
              rights: "⚖️",
              history: "📜",
              symbols: "🇺🇸",
            };
            return (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`w-full min-h-[56px] px-5 py-4 rounded-xl text-lg font-semibold
                            border-2 transition-all active:scale-[0.97]
                            ${
                              selectedTopic === topic
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                            }`}
              >
                {icons[topic]} {topicLabels[topic][lang]}
              </button>
            );
          })}
        </div>

        <button
          onClick={startPractice}
          className="w-full min-h-[56px] bg-primary text-white text-xl font-bold
                     rounded-xl px-6 py-4 active:scale-[0.97] transition-all mt-4"
        >
          ▶ {t("startPractice", lang)}
        </button>
      </div>
    );
  }

  // ── Done screen ──
  if (state === "done") {
    const missed = attempted - correct;
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center space-y-6">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-q-large font-bold text-primary">
          {t("quizComplete", lang)}
        </h2>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <p className="text-2xl font-bold text-primary">
            {correct} / {attempted}
          </p>
          <p className="text-lg text-gray-500">
            {correct >= attempted * 0.9
              ? t("greatScore", lang)
              : correct >= attempted * 0.6
                ? t("wellDone", lang)
                : t("goodScore", lang)}
          </p>
          {missed > 0 && (
            <p className="text-base text-orange-600">
              {t("missed", lang)}: {missed} →{" "}
              <Link href="/mistakes" className="underline font-semibold">
                {t("reviewMistakes", lang)}
              </Link>
            </p>
          )}
        </div>

        <div className="space-y-3 pt-4">
          <button
            onClick={() => {
              setState("select-topic");
              setSelectedTopic("all");
            }}
            className="w-full min-h-[56px] bg-primary text-white text-xl font-bold
                       rounded-xl px-6 py-4 active:scale-[0.97] transition-all"
          >
            {t("tryAgain", lang)}
          </button>
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

  // ── Practicing ──
  const currentQ = pool[currentIdx];
  if (!currentQ) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-5">
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setState("select-topic")}
          className="min-h-[44px] px-4 py-2 rounded-lg bg-gray-100 text-gray-700
                     font-semibold text-base active:scale-95 transition-all"
        >
          ← {t("back", lang)}
        </button>
        <h1 className="text-lg font-bold text-primary flex-1 text-right">
          {t("practiceMode", lang)}
        </h1>
      </div>

      <ProgressBar
        attempted={attempted}
        correct={correct}
        total={pool.length}
        lang={lang}
      />

      <QuestionCard
        question={currentQ.question}
        lang={lang}
        number={currentIdx + 1}
        total={pool.length}
      />

      {/* Read aloud */}
      <ReadAloud text={currentQ.question} lang={lang} />

      {/* Encouragement */}
      <div className="bg-yellow-50 rounded-lg px-4 py-2 text-center border border-yellow-200">
        <p className="text-sm text-yellow-800 font-medium">
          {t("practiceEncourage", lang)}
        </p>
      </div>

      {/* Show Answer / Self-assessment */}
      {!showAnswer ? (
        <button
          onClick={() => {
            setShowAnswer(true);
            const currentQ = pool[currentIdx];
            if (currentQ) {
              const answerText = currentQ.options[currentQ.correctIndex][lang];
              const explanation = currentQ.explanation[lang];
              const prefix = lang === "en" ? "The answer is: " : "ഉത്തരം: ";
              speakFeedback(prefix + answerText + ". " + explanation, lang);
            }
          }}
          className="w-full min-h-[56px] bg-blue-50 text-primary border-2 border-primary
                     text-xl font-bold rounded-xl px-6 py-4
                     active:scale-[0.97] transition-all"
        >
          👁 {t("showAnswer", lang)}
        </button>
      ) : (
        <div className="space-y-3 animate-[fadeIn_0.3s_ease-in]">
          {/* Answer display */}
          <div className="bg-success-light rounded-xl p-4 sm:p-5 border border-success">
            <p className="text-xs sm:text-sm font-semibold text-success mb-1">
              ✓ {lang === "en" ? "Answer" : "ഉത്തരം"}
            </p>
            <p className="text-lg sm:text-xl font-bold text-gray-900 break-words">
              {currentQ.options[currentQ.correctIndex][lang]}
            </p>
          </div>

          {/* Explanation */}
          <div className="bg-blue-50 rounded-xl p-3 sm:p-4 border border-blue-100">
            <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-1">
              {t("explanation", lang)}
            </p>
            <p className="text-base sm:text-lg text-gray-800 break-words">
              {currentQ.explanation[lang]}
            </p>
          </div>

          {/* Self-mark buttons */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <button
              onClick={handleGotIt}
              className="min-h-[48px] sm:min-h-[56px] bg-success text-white text-base sm:text-lg font-bold
                         rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 active:scale-[0.97] transition-all"
            >
              {t("iGotIt", lang)}
            </button>
            <button
              onClick={handleMissedIt}
              className="min-h-[48px] sm:min-h-[56px] bg-danger text-white text-base sm:text-lg font-bold
                         rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 active:scale-[0.97] transition-all"
            >
              {t("iMissedIt", lang)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
