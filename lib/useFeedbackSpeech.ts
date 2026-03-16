"use client";

import { useRef, useCallback } from "react";
import { Lang } from "@/data/questions";

/**
 * Speaks feedback text using Google TTS (Malayalam/Gujarati) or
 * Web Speech API (English). Stops any previous speech first.
 */
export function useFeedbackSpeech() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = useCallback(() => {
    if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
  }, []);

  const speak = useCallback(
    async (text: string, lang: Lang) => {
      stop();

      if (lang === "ml" || lang === "gu" || lang === "vi") {
        // Google TTS for Malayalam / Gujarati
        try {
          const res = await fetch("/api/tts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, lang }),
          });
          if (!res.ok) return;
          const { audioContent } = await res.json();
          const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
          audioRef.current = audio;
          audio.onended = () => { audioRef.current = null; };
          await audio.play();
        } catch {
          // silently fail
        }
      } else {
        // Web Speech API for English
        if (typeof window === "undefined" || !window.speechSynthesis) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        utterance.rate = 0.88;
        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find(
          (v) => v.lang.startsWith("en") && v.localService,
        ) ?? voices.find((v) => v.lang.startsWith("en")) ?? null;
        if (voice) utterance.voice = voice;
        window.speechSynthesis.speak(utterance);
      }
    },
    [stop],
  );

  return { speak, stop };
}
