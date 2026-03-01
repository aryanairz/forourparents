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
      <h2 className="text-xl sm:text-q-heading md:text-q-large font-bold text-gray-900 leading-snug break-words">
        {question[lang]}
      </h2>
    </div>
  );
}
