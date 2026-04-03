"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import {
  getCurrentUser,
  getRecentAttempts,
  getMistakes,
  logoutUser,
  type QuizAttempt,
} from "@/lib/storage";
import { questions, topicLabels, type Topic } from "@/data/questions";

export default function DashboardPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const [user, setUser] = useState(getCurrentUser());
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [mistakeIds, setMistakeIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push("/login");
      return;
    }

    const loadData = async () => {
      const [attemptsData, mistakesData] = await Promise.all([
        getRecentAttempts(20),
        getMistakes(),
      ]);
      setAttempts(attemptsData);
      setMistakeIds(mistakesData);
      setLoading(false);
    };

    loadData();
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  // Calculate statistics
  const totalAttempts = attempts.length;
  const avgScore =
    totalAttempts > 0
      ? Math.round(
          attempts.reduce((sum, a) => sum + a.score_percent, 0) / totalAttempts,
        )
      : 0;

  const mistakeQuestions = questions.filter((q) => mistakeIds.includes(q.id));
  const mistakesByTopic: Record<Topic, number> = {
    government: 0,
    rights: 0,
    history: 0,
    symbols: 0,
  };
  mistakeQuestions.forEach((q) => {
    mistakesByTopic[q.topic]++;
  });

  const weakestTopic = Object.entries(mistakesByTopic).sort(
    ([, a], [, b]) => b - a,
  )[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/"
          className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50
                     text-gray-700 border border-gray-200 shadow-sm
                     font-semibold text-base active:scale-95 transition-all no-underline"
        >
          ← {t("home", lang)}
        </Link>
        <button
          onClick={handleLogout}
          className="min-h-[44px] px-4 py-2 rounded-lg bg-red-50 text-danger border border-red-200
                     font-semibold text-base active:scale-95 transition-all"
        >
          {t("logout", lang)}
        </button>
      </div>

      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center border-2 border-blue-200">
        <div className="text-4xl mb-2">📊🙏</div>
        <h1 className="text-q-heading font-bold text-primary mb-1">
          {t("dashboard", lang)}
        </h1>
        <p className="text-lg text-gray-700">{user.name}</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-blue-100 text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">
            {t("totalAttempts", lang)}
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-primary">
            {totalAttempts}
          </p>
        </div>

        <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-green-100 text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">
            {t("averageScore", lang)}
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-success">
            {avgScore}%
          </p>
        </div>
      </div>

      {/* Mistakes overview */}
      <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
        <h2 className="text-lg font-bold text-orange-800 mb-3">
          {t("reviewMistakes", lang)}
        </h2>
        <div className="space-y-2">
          <p className="text-base text-orange-700">
            {mistakeQuestions.length}{" "}
            {lang === "en"
              ? "questions need review"
              : lang === "ml"
              ? "ചോദ്യങ്ങൾ പരിശോധിക്കേണ്ടതുണ്ട്"
              : lang === "gu"
              ? "પ્રશ્નોની સમીક્ષા જરૂરી છે"
              : "câu hỏi cần ôn lại"}
          </p>

          {weakestTopic && mistakesByTopic[weakestTopic[0] as Topic] > 0 && (
            <div className="bg-white/50 rounded-lg p-3 text-sm">
              <p className="text-orange-800 font-medium">
                {lang === "en" ? "Focus on:" : lang === "ml" ? "ശ്രദ്ധിക്കേണ്ട വിഷയം:" : lang === "gu" ? "ધ્યાન આપો:" : "Tập trung vào:"}
              </p>
              <p className="text-orange-900 font-bold mt-1">
                {topicLabels[weakestTopic[0] as Topic][lang] ?? topicLabels[weakestTopic[0] as Topic].en} (
                {mistakesByTopic[weakestTopic[0] as Topic]})
              </p>
            </div>
          )}
        </div>

        <Link
          href="/mistakes"
          className="block w-full mt-4 min-h-[48px] bg-orange-600 text-white
                     text-lg font-bold rounded-xl px-5 py-3
                     active:scale-[0.97] transition-all no-underline text-center"
        >
          {t("reviewMistakes", lang)}
        </Link>
      </div>

      {/* Recent scores */}
      {attempts.length > 0 && (
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            {t("recentScores", lang)}
          </h2>
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {attempts.slice(0, 10).map((attempt) => (
              <div
                key={attempt.id}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3 text-sm"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-700">
                    {attempt.mode === "quiz"
                      ? t("quizMode", lang)
                      : t("practiceMode", lang)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(attempt.completed_at).toLocaleDateString(
                      lang === "ml" ? "ml-IN" : lang === "gu" ? "gu-IN" : lang === "vi" ? "vi-VN" : "en-US",
                    )}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-xl font-bold ${
                      attempt.score_percent >= 80
                        ? "text-success"
                        : attempt.score_percent >= 60
                          ? "text-primary"
                          : "text-orange-600"
                    }`}
                  >
                    {attempt.score_percent}%
                  </p>
                  <p className="text-xs text-gray-500">
                    {attempt.correct_answers}/{attempt.total_questions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Encouragement */}
      <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center">
        <p className="text-base text-yellow-800 font-medium">
          {t("improvementTip", lang)}
        </p>
      </div>
    </div>
  );
}
