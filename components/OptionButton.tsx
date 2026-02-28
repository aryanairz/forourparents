"use client";

import { BilingualText, Lang } from "@/data/questions";

interface OptionButtonProps {
  option: BilingualText;
  lang: Lang;
  index: number;
  selected: boolean;
  isCorrect: boolean | null; // null = not yet answered
  disabled: boolean;
  onClick: () => void;
}

const letters = ["A", "B", "C", "D"];

export default function OptionButton({
  option,
  lang,
  index,
  selected,
  isCorrect,
  disabled,
  onClick,
}: OptionButtonProps) {
  let bgClass =
    "bg-white border-gray-300 hover:border-primary hover:bg-blue-50";
  let textClass = "text-gray-800";

  if (isCorrect === true && selected) {
    bgClass = "bg-success-light border-success";
    textClass = "text-success font-bold";
  } else if (isCorrect === true && !selected) {
    // highlight the correct answer even if user didn't pick it
    bgClass = "bg-success-light border-success";
    textClass = "text-success";
  } else if (isCorrect === false && selected) {
    bgClass = "bg-danger-light border-danger";
    textClass = "text-danger font-bold";
  } else if (disabled) {
    bgClass = "bg-gray-50 border-gray-200";
    textClass = "text-gray-400";
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full min-h-[52px] sm:min-h-[64px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 text-left
                  flex items-start gap-2.5 sm:gap-3 transition-all active:scale-[0.98]
                  text-base sm:text-q-body ${bgClass} ${textClass}`}
    >
      <span
        className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-primary
                        flex items-center justify-center text-xs sm:text-sm font-bold mt-0.5"
      >
        {letters[index]}
      </span>
      <span className="flex-1 break-words">{option[lang]}</span>
    </button>
  );
}
