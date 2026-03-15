/**
 * Hook that builds the full question pool based on the current user's state/district.
 * - Removes hardcoded state-specific questions (the old Texas ones)
 * - Adds personalized questions for logged-in users with state set
 * - Returns generic-only pool for anonymous users
 */

import { useState, useEffect } from "react";
import { questions, Question } from "@/data/questions";
import { getPersonalizedQuestions } from "@/data/personalizedQuestions";
import { getCurrentUser } from "@/lib/storage";

/** Question IDs that are state-specific and should be replaced by personalized ones */
const STATE_SPECIFIC_IDS = new Set(["g030", "g035", "g054", "g055"]);

export function useQuestionPool(): Question[] {
  const [pool, setPool] = useState<Question[]>([]);

  useEffect(() => {
    const generic = questions.filter((q) => !STATE_SPECIFIC_IDS.has(q.id));
    const user = getCurrentUser();
    if (!user?.state) {
      setPool(generic);
      return;
    }
    const personalized = getPersonalizedQuestions(user.state, user.district);
    setPool([...generic, ...personalized]);
  }, []);

  return pool;
}
