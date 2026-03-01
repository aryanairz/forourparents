/**
 * Hook that builds the full question pool based on the current user's state/district.
 * - Removes hardcoded state-specific questions (the old Texas ones)
 * - Adds personalized questions for logged-in users with state set
 * - Returns generic-only pool for anonymous users
 */

import { useMemo } from "react";
import { questions, Question } from "@/data/questions";
import { getPersonalizedQuestions } from "@/data/personalizedQuestions";
import { getCurrentUser } from "@/lib/storage";

/** Question IDs that are state-specific and should be replaced by personalized ones */
const STATE_SPECIFIC_IDS = new Set(["g030", "g035", "g054", "g055"]);

export function useQuestionPool(): Question[] {
  return useMemo(() => {
    // Remove old Texas-hardcoded questions
    const generic = questions.filter((q) => !STATE_SPECIFIC_IDS.has(q.id));

    const user = getCurrentUser();
    if (!user?.state) return generic;

    // Add personalized questions for this user's state & district
    const personalized = getPersonalizedQuestions(user.state, user.district);
    return [...generic, ...personalized];
  }, []);
}
