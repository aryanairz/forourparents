"use client";

import { useState, useEffect } from "react";
import { Lang, BilingualText } from "@/data/questions";
import { t } from "@/lib/i18n";

interface ReadAloudProps {
  text: BilingualText;
  options?: BilingualText[];
  lang: Lang;
}

export default function ReadAloud({ text, options, lang }: ReadAloudProps) {
  const [speaking, setSpeaking] = useState(false);
  const [error, setError] = useState(false);

  // Reset error and stop speaking when question changes
  useEffect(() => {
    setError(false);
    setSpeaking(false);
    window.speechSynthesis?.cancel();
  }, [text, lang]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const speak = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setError(true);
      return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();

    // Build the full text to read
    let fullText = text[lang];
    if (options && options.length > 0) {
      const letters = ["A", "B", "C", "D"];
      const optionText = options
        .map((opt, i) => `${letters[i]}. ${opt[lang]}`)
        .join(". ");
      fullText += ". " + optionText;
    }

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = lang === "ml" ? "ml-IN" : "en-US";
    utterance.rate = 0.85; // Slightly slower for elderly users

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => {
      setSpeaking(false);
      if (lang === "ml") setError(true);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  if (error) {
    return (
      <p className="text-sm text-orange-600 bg-orange-50 rounded-lg px-3 py-2 text-center">
        {t("speechUnavailable", lang)}
      </p>
    );
  }

  return (
    <button
      onClick={speaking ? stop : speak}
      className={`min-h-[44px] sm:min-h-[48px] px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg font-semibold
                  transition-all active:scale-95 w-full
                  ${
                    speaking
                      ? "bg-orange-100 border-2 border-orange-400 text-orange-700"
                      : "bg-blue-50 border-2 border-blue-200 text-primary hover:bg-blue-100"
                  }`}
    >
      {speaking ? "⏹ Stop" : t("readAloud", lang)}
    </button>
  );
}
