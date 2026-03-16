/**
 * Module-level singleton that tracks the one currently-playing HTMLAudioElement
 * across ReadAloud and useFeedbackSpeech so they can stop each other.
 */

let _current: HTMLAudioElement | null = null;

/** Register a new audio element as the active one, stopping any previous. */
export function setGlobalAudio(audio: HTMLAudioElement): void {
  if (_current && _current !== audio) {
    _current.pause();
    _current.src = "";
  }
  _current = audio;
}

/** Call when audio ends naturally so the ref doesn't linger. */
export function clearGlobalAudio(audio: HTMLAudioElement): void {
  if (_current === audio) _current = null;
}

/** Stop and clear whatever is currently playing. */
export function stopGlobalAudio(): void {
  if (_current) {
    _current.pause();
    _current.src = "";
    _current = null;
  }
}
