"use client";

import { BilingualText, Lang } from "@/data/questions";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface OptionButtonProps {
  option: BilingualText;
  lang: Lang;
  index: number;
  selected: boolean;
  isCorrect: boolean | null;
  disabled: boolean;
  onClick: () => void;
  checkbox?: boolean;
}

const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function OptionButton({ option, lang, index, selected, isCorrect, disabled, onClick, checkbox }: OptionButtonProps) {
  let containerClass = "bg-white border-border hover:border-primary hover:bg-primary-light hover:shadow-card";
  let badgeClass = "bg-gray-100 text-text-secondary";
  let icon: React.ReactNode = null;

  const isWrong = isCorrect === false && selected;
  const isRight = isCorrect === true;

  if (isCorrect === true && selected) {
    containerClass = "bg-success-light border-success-border ring-2 ring-success/20";
    badgeClass = "bg-success text-white";
    icon = (
      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 20 }}>
        <Check size={20} className="text-success flex-shrink-0" />
      </motion.span>
    );
  } else if (isCorrect === true && !selected) {
    containerClass = "bg-success-light border-success-border";
    badgeClass = "bg-success text-white";
    icon = (
      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 20 }}>
        <Check size={20} className="text-success flex-shrink-0" />
      </motion.span>
    );
  } else if (isWrong) {
    containerClass = "bg-danger-light border-danger-border ring-2 ring-danger/20";
    badgeClass = "bg-danger text-white";
    icon = <X size={20} className="text-danger flex-shrink-0" />;
  } else if (disabled) {
    containerClass = "bg-gray-50 border-border opacity-60";
    badgeClass = "bg-gray-200 text-text-secondary";
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      animate={isWrong ? { x: [0, -4, 4, -4, 0] } : { x: 0, scale: 1 }}
      transition={isWrong ? { duration: 0.3, ease: "easeInOut" } : { duration: 0.15 }}
      className={`w-full min-h-[56px] px-5 py-4 rounded-card border-2 text-left
                  flex items-center gap-4 transition-colors
                  text-[1rem] sm:text-[1.0625rem] text-text-body font-medium
                  ${containerClass}`}
    >
      <span
        className={`flex-shrink-0 w-9 h-9 ${checkbox ? "rounded-lg" : "rounded-full"} flex items-center justify-center
                    text-sm font-bold transition-colors ${badgeClass}`}
      >
        {checkbox
          ? (selected || isRight
              ? <Check size={16} />
              : <span className="w-4 h-4 border-2 border-current rounded-sm" />)
          : letters[index]}
      </span>
      <span className="flex-1 break-words leading-snug">{option[lang] ?? option.en}</span>
      {icon}
    </motion.button>
  );
}
