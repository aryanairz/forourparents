"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Lang, BilingualText } from "@/data/questions";
import { t } from "@/lib/i18n";

interface ReadAloudProps {
  text: BilingualText;
  options?: BilingualText[];
  lang: Lang;
}

/**
 * Checks whether any voice is available for the given BCP-47 language tag.
 * On iOS, getVoices() returns [] until the voiceschanged event fires,
 * so we also accept a cached list.
 */
function hasVoiceFor(langTag: string, voices: SpeechSynthesisVoice[]): boolean {
  const prefix = langTag.split("-")[0].toLowerCase(); // "ml", "en", etc.
  return voices.some(
    (v) =>
      v.lang.toLowerCase().startsWith(prefix + "-") ||
      v.lang.toLowerCase() === prefix,
  );
}

/** Pick the best voice for a language tag, preferring local/high-quality voices. */
function pickVoice(
  langTag: string,
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | null {
  const prefix = langTag.split("-")[0].toLowerCase();
  const matches = voices.filter(
    (v) =>
      v.lang.toLowerCase().startsWith(prefix + "-") ||
      v.lang.toLowerCase() === prefix,
  );
  if (matches.length === 0) return null;
  // Prefer a local (non-network) voice for reliability
  return matches.find((v) => v.localService) ?? matches[0];
}

export default function ReadAloud({ text, options, lang }: ReadAloudProps) {
  const [speaking, setSpeaking] = useState(false);
  const [fallback, setFallback] = useState(false); // true = reading English because no ML voice
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const resumeTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Load voices — iOS fires voiceschanged asynchronously
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const load = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    };

    load(); // Immediate attempt (works on most Android / desktop)
    window.speechSynthesis.addEventListener("voiceschanged", load);
    // iOS backup: poll a few times
    const t1 = setTimeout(load, 250);
    const t2 = setTimeout(load, 1000);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Reset state when question / language changes
  useEffect(() => {
    setSpeaking(false);
    setFallback(false);
    window.speechSynthesis?.cancel();
    if (resumeTimer.current) {
      clearInterval(resumeTimer.current);
      resumeTimer.current = null;
    }
  }, [text, lang]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
      if (resumeTimer.current) clearInterval(resumeTimer.current);
    };
  }, []);

  /**
   * iOS pauses speech after ~15 seconds of audio.
   * The workaround is to call resume() on a short interval while speaking.
   */
  const startResumeLoop = useCallback(() => {
    if (resumeTimer.current) clearInterval(resumeTimer.current);
    resumeTimer.current = setInterval(() => {
      if (window.speechSynthesis?.speaking) {
        window.speechSynthesis.resume();
      }
    }, 5000);
  }, []);

  const stopResumeLoop = useCallback(() => {
    if (resumeTimer.current) {
      clearInterval(resumeTimer.current);
      resumeTimer.current = null;
    }
  }, []);

  const speak = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // Stop any current speech
    window.speechSynthesis.cancel();
    stopResumeLoop();

    // Determine whether we have a voice for the selected language
    const wantMalayalam = lang === "ml";
    const hasMl = hasVoiceFor("ml-IN", voices);
    const useLang = wantMalayalam && !hasMl ? "en" : lang;
    const usingFallback = wantMalayalam && !hasMl;
    setFallback(usingFallback);

    // Build the full text — use numbered options (1, 2, 3, 4) to avoid confusion
    let fullText = text[useLang];
    if (options && options.length > 0) {
      const optionText = options
        .map((opt, i) => `${i + 1}. ${opt[useLang]}`)
        .join(". ... ");
      fullText += ". ... " + optionText;
    }

    // Small delay after cancel() — iOS needs it
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = useLang === "ml" ? "ml-IN" : "en-US";
      utterance.rate = 0.8; // Slow for elderly users

      // Try to use the best matching voice
      const voice = pickVoice(utterance.lang, voices);
      if (voice) utterance.voice = voice;

      utterance.onstart = () => {
        setSpeaking(true);
        startResumeLoop(); // iOS 15-second workaround
      };
      utterance.onend = () => {
        setSpeaking(false);
        stopResumeLoop();
      };
      utterance.onerror = (e) => {
        // "interrupted" fires on cancel() — not a real error
        if (e.error === "interrupted" || e.error === "canceled") return;
        setSpeaking(false);
        stopResumeLoop();
      };

      window.speechSynthesis.speak(utterance);
    }, 100);
  };

  const stop = () => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
    stopResumeLoop();
  };

  // Don't render if speech synthesis isn't available at all
  if (typeof window !== "undefined" && !window.speechSynthesis) return null;

  return (
    <div className="space-y-1.5">
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
      {/* Show a note when falling back to English because no Malayalam voice exists */}
      {fallback && speaking && (
        <p className="text-xs text-center text-orange-600 bg-orange-50 rounded-lg px-2 py-1.5">
          {lang === "ml"
            ? "മലയാളം ശബ്ദം ലഭ്യമല്ല — ഇംഗ്ലീഷിൽ വായിക്കുന്നു"
            : "Malayalam voice not available — reading in English"}
        </p>
      )}
    </div>
  );
}
