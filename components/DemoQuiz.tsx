"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { questions as civicsQuestions } from "@/data/questions";

// Use first 10 questions from the official question bank (already translated in all 4 languages)
// Override g004 option 0 to show just "Capitalism" (not the slash variant) in the demo
const QUESTIONS = civicsQuestions.slice(0, 10).map((q) => {
  if (q.id === "g004") {
    return {
      ...q,
      options: q.options.map((opt, i) =>
        i === 0
          ? { en: "Capitalism", ml: "മുതലാളിത്തം", gu: "મૂડીવાદ", vi: "Chủ nghĩa tư bản" }
          : opt
      ),
    };
  }
  return q;
});

function shuffleOptions(options: (typeof QUESTIONS)[0]["options"], correctIndex: number) {
  const indexed = options.map((opt, i) => ({ opt, isCorrect: i === correctIndex }));
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  return {
    shuffledOptions: indexed.map((x) => x.opt),
    shuffledCorrectIndex: indexed.findIndex((x) => x.isCorrect),
  };
}

export default function DemoQuiz() {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const question = QUESTIONS[currentIndex];

  // Reshuffle whenever question changes (currentIndex or shuffleSeed changes)
  const { shuffledOptions, shuffledCorrectIndex } = useMemo(
    () => shuffleOptions(question.options, question.correctIndex),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentIndex, shuffleSeed]
  );

  const handleSelect = (optionIndex: number) => {
    if (answered) return;
    setSelectedAnswer(optionIndex);
    setAnswered(true);
    if (optionIndex === shuffledCorrectIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setFinished(false);
    setScore(0);
    setShuffleSeed((s) => s + 1);
  };

  const getOptionStyle = (optionIndex: number) => {
    const base: React.CSSProperties = {
      width: "100%",
      minHeight: 48,
      padding: "12px 16px",
      border: "2px solid #E5E7EB",
      borderRadius: 12,
      backgroundColor: "transparent",
      cursor: answered ? "default" : "pointer",
      textAlign: "left" as const,
      fontSize: 15,
      fontWeight: 500,
      color: "#4B4B4B",
      fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
      transition: "all 0.15s ease",
      display: "flex",
      alignItems: "center",
      gap: 10,
    };

    if (!answered) return base;

    if (optionIndex === shuffledCorrectIndex) {
      return { ...base, backgroundColor: "#DCFCE7", borderColor: "#16A34A", color: "#15803D", fontWeight: 600 };
    }
    if (optionIndex === selectedAnswer && optionIndex !== shuffledCorrectIndex) {
      return { ...base, backgroundColor: "#FEE2E2", borderColor: "#DC2626", color: "#DC2626", fontWeight: 600 };
    }
    return { ...base, opacity: 0.5 };
  };

  if (finished) {
    return (
      <div style={{ textAlign: "center", padding: "40px 24px" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
        <h3
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: 8,
            fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
          }}
        >
          {score} / {QUESTIONS.length}
        </h3>
        <p style={{ fontSize: 16, color: "#777777", marginBottom: 24, lineHeight: 1.5 }}>
          {t("landingTrySample", lang)}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          <Link
            href="/login"
            className="btn-3d"
            style={{ height: 48, fontSize: 15, paddingLeft: 32, paddingRight: 32 }}
          >
            {t("landingGetStarted", lang)}
          </Link>
          <button
            onClick={handleRestart}
            style={{
              background: "none",
              border: "none",
              color: "#2563EB",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
              padding: "8px 16px",
            }}
          >
            {t("tryAgain", lang)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px 20px 20px" }}>
      {/* Progress label */}
      <p
        style={{
          textAlign: "center",
          fontSize: 13,
          fontWeight: 600,
          color: "#AFAFAF",
          marginBottom: 6,
          textTransform: "uppercase" as const,
          letterSpacing: "0.05em",
          fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
        }}
      >
        {t("questionOf", lang)} {currentIndex + 1} / {QUESTIONS.length}
      </p>

      {/* Progress bar */}
      <div
        style={{
          height: 6,
          borderRadius: 3,
          backgroundColor: "#E5E7EB",
          marginBottom: 28,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 3,
            backgroundColor: "#D4772C",
            width: `${((currentIndex + (answered ? 1 : 0)) / QUESTIONS.length) * 100}%`,
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Question */}
      <h3
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: 600,
          color: "#1A1A1A",
          marginBottom: 24,
          lineHeight: 1.4,
          fontFamily: "var(--font-dm-sans, system-ui, sans-serif)",
        }}
      >
        {question.question[lang]}
      </h3>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {shuffledOptions.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            style={getOptionStyle(i)}
            onMouseEnter={(e) => {
              if (!answered) {
                (e.currentTarget as HTMLElement).style.borderColor = "#D4772C";
                (e.currentTarget as HTMLElement).style.backgroundColor = "#FFF4EB";
              }
            }}
            onMouseLeave={(e) => {
              if (!answered) {
                (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }
            }}
          >
            {answered && i === shuffledCorrectIndex && (
              <span style={{ color: "#16A34A", fontWeight: 700, fontSize: 16 }}>✓</span>
            )}
            {answered && i === selectedAnswer && i !== shuffledCorrectIndex && (
              <span style={{ color: "#DC2626", fontWeight: 700, fontSize: 16 }}>✗</span>
            )}
            {option[lang]}
          </button>
        ))}
      </div>

      {/* Next / Finish button — always rendered to prevent layout shift */}
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", visibility: answered ? "visible" : "hidden" }}>
        <button
          onClick={handleNext}
          className="btn-3d"
          style={{ height: 44, fontSize: 14, paddingLeft: 40, paddingRight: 40 }}
        >
          {currentIndex < QUESTIONS.length - 1
            ? t("next", lang).toUpperCase()
            : t("quizComplete", lang).toUpperCase()}
        </button>
      </div>
    </div>
  );
}
