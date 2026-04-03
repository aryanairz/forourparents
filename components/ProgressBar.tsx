"use client";

import { Lang } from "@/data/questions";
import { t } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

interface ProgressBarProps {
  attempted: number;
  correct: number;
  total?: number;
  lang: Lang;
}

function AnimatedCount({ value, className }: { value: number; className: string }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={className}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}

export default function ProgressBar({ attempted, correct, total, lang }: ProgressBarProps) {
  const missed = attempted - correct;
  const progress = total ? (attempted / total) * 100 : 0;

  return (
    <div className="bg-white rounded-card border border-border shadow-card p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm font-semibold">
        <span className="flex items-center gap-1.5 text-text-secondary">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-xs font-bold text-text-secondary">
            <AnimatedCount value={attempted} className="tabular-nums" />
          </span>
          {t("attempted", lang)}
        </span>
        <span className="flex items-center gap-1.5 text-success">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-success-light text-xs font-bold text-success">
            <AnimatedCount value={correct} className="tabular-nums" />
          </span>
          {t("correct", lang).replace("!", "")}
        </span>
        <span className="flex items-center gap-1.5 text-danger">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-danger-light text-xs font-bold text-danger">
            <AnimatedCount value={missed} className="tabular-nums" />
          </span>
          {t("missed", lang)}
        </span>
        {total !== undefined && (
          <span className="ml-auto text-text-secondary text-xs tabular-nums">
            {attempted} / {total}
          </span>
        )}
      </div>
      {total !== undefined && (
        <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      )}
    </div>
  );
}
