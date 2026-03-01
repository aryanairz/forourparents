"use client";

import { Lang } from "@/data/questions";
import { t } from "@/lib/i18n";

interface ProgressBarProps {
  attempted: number;
  correct: number;
  total?: number;
  lang: Lang;
}

export default function ProgressBar({
  attempted,
  correct,
  total,
  lang,
}: ProgressBarProps) {
  const missed = attempted - correct;
  const pct = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-3 sm:p-4">
      {/* Progress bar — shows accuracy percentage */}
      <div className="w-full h-2.5 sm:h-3 bg-gray-200 rounded-full mb-2.5 sm:mb-3 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-between gap-y-1 text-sm sm:text-base font-medium">
        <span className="text-gray-600">
          {t("attempted", lang)}: <strong>{attempted}</strong>
        </span>
        <span className="text-success">
          {t("correct", lang).replace("!", "")}: <strong>{correct}</strong>
        </span>
        <span className="text-danger">
          {t("missed", lang)}: <strong>{missed}</strong>
        </span>
      </div>
    </div>
  );
}
