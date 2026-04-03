"use client";

import { BilingualText, Lang } from "@/data/questions";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: BilingualText;
  lang: Lang;
  number?: number;
  total?: number;
}

export default function QuestionCard({ question, lang, number, total }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-card border border-border shadow-card p-6 sm:p-8 text-center"
    >
      {number !== undefined && total !== undefined && (
        <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
          Question {number} of {total}
        </p>
      )}
      <h2
        className="text-[1.375rem] sm:text-[1.5rem] font-semibold text-text-heading leading-[1.4] break-words"
        style={{ fontFamily: "var(--font-dm-sans, system-ui, sans-serif)" }}
      >
        {question[lang] ?? question.en}
      </h2>
    </motion.div>
  );
}
