"use client";

import { BilingualText, Lang } from "@/data/questions";

interface QuestionCardProps {
  question: BilingualText;
  lang: Lang;
  number?: number;
  total?: number;
}

export default function QuestionCard({
  question,
  lang,
  number,
  total,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-4 sm:p-6">
      {number !== undefined && total !== undefined && (
        <p className="text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2 font-medium">
          {number} / {total}
        </p>
      )}
      <h2 className="text-xl sm:text-q-heading md:text-q-large font-bold text-gray-900 leading-snug break-words">
        {question[lang]}
      </h2>
    </div>
  );
}
