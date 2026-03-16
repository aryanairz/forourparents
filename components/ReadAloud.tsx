"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Lang, BilingualText } from "@/data/questions";
import { t } from "@/lib/i18n";
import { setGlobalAudio, clearGlobalAudio, stopGlobalAudio } from "@/lib/audioManager";

interface ReadAloudProps {
  text: BilingualText;
  options?: BilingualText[];
  lang: Lang;
}

/** Pick the best Web Speech voice for a language tag. */
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
  return matches.find((v) => v.localService) ?? matches[0];
}

/** Build the full text string to speak (numbered options). */
function buildText(
  text: BilingualText,
  options: BilingualText[] | undefined,
  lang: Lang,
): string {
  let fullText = text[lang];
  if (options && options.length > 0) {
    const optionText = options
      .map((opt, i) => `${i + 1}. ${opt[lang]}`)
      .join(". ... ");
    fullText += ". ... " + optionText;
  }
  return fullText;
}

export default function ReadAloud({ text, options, lang }: ReadAloudProps) {
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const resumeTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load Web Speech voices — iOS fires voiceschanged asynchronously
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const load = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    const t1 = setTimeout(load, 250);
    const t2 = setTimeout(load, 1000);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Stop everything when question / language changes
  useEffect(() => {
    stopAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, lang]);

  useEffect(() => {
    return () => stopAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startResumeLoop = useCallback(() => {
    if (resumeTimer.current) clearInterval(resumeTimer.current);
    resumeTimer.current = setInterval(() => {
      if (window.speechSynthesis?.speaking) window.speechSynthesis.resume();
    }, 5000);
  }, []);

  const stopResumeLoop = useCallback(() => {
    if (resumeTimer.current) {
      clearInterval(resumeTimer.current);
      resumeTimer.current = null;
    }
  }, []);

  const stopAll = () => {
    window.speechSynthesis?.cancel();
    stopResumeLoop();
    stopGlobalAudio();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    setSpeaking(false);
    setLoading(false);
  };

  /** Speak using Google Cloud TTS — returns a real Malayalam voice, works on all devices. */
  const speakWithGoogleTTS = async (fullText: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: fullText, lang }),
      });
      if (!res.ok) throw new Error("TTS API failed");
      const { audioContent } = await res.json();

      const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
      audioRef.current = audio;
      setGlobalAudio(audio);
      audio.onplay = () => {
        setSpeaking(true);
        setLoading(false);
      };
      audio.onended = () => {
        setSpeaking(false);
        audioRef.current = null;
        clearGlobalAudio(audio);
      };
      audio.onerror = () => {
        setSpeaking(false);
        setLoading(false);
        audioRef.current = null;
        clearGlobalAudio(audio);
      };
      await audio.play();
    } catch {
      setSpeaking(false);
      setLoading(false);
    }
  };

  /** Speak using native Web Speech API — good for English on iOS/desktop. */
  const speakWithWebSpeech = (fullText: string) => {
    window.speechSynthesis.cancel();
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      const voice = pickVoice("en-US", voices);
      if (voice) utterance.voice = voice;
      utterance.onstart = () => {
        setSpeaking(true);
        startResumeLoop();
      };
      utterance.onend = () => {
        setSpeaking(false);
        stopResumeLoop();
      };
      utterance.onerror = (e) => {
        if (e.error === "interrupted" || e.error === "canceled") return;
        setSpeaking(false);
        stopResumeLoop();
      };
      window.speechSynthesis.speak(utterance);
    }, 100);
  };

  const speak = () => {
    const fullText = buildText(text, options, lang);
    // Malayalam & Gujarati always use Google TTS — iOS has no built-in voice for these
    // English uses native Web Speech API (faster, no API call needed)
    if (lang === "ml" || lang === "gu" || lang === "vi") {
      speakWithGoogleTTS(fullText);
    } else {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        speakWithWebSpeech(fullText);
      } else {
        speakWithGoogleTTS(fullText);
      }
    }
  };

  return (
    <button
      onClick={speaking ? stopAll : speak}
      disabled={loading}
      className={`min-h-[44px] sm:min-h-[48px] px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg font-semibold
                  transition-all active:scale-95 w-full
                  ${
                    loading
                      ? "bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-wait"
                      : speaking
                        ? "bg-orange-100 border-2 border-orange-400 text-orange-700"
                        : "bg-blue-50 border-2 border-blue-200 text-primary hover:bg-blue-100"
                  }`}
    >
      {loading ? "⏳ Loading..." : speaking ? "⏹ Stop" : t("readAloud", lang)}
    </button>
  );
}
