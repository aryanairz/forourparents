import { Lang } from "@/data/questions";
import { supabase } from "./supabase";

const LANG_KEY = "civics-helper-lang";
const USER_KEY = "civics-helper-user";

// ── Language ──────────────────────────────────────────

export function getStoredLanguage(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "ml" || stored === "gu") return stored;
  } catch {
    // localStorage unavailable
  }
  return "en";
}

export function setStoredLanguage(lang: Lang): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // localStorage unavailable
  }
}

// ── User Session ─────────────────────────────────────

export interface User {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  state?: string;
  district?: number;
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(USER_KEY);
    if (stored) return JSON.parse(stored) as User;
  } catch {
    // corrupted data
  }
  return null;
}

export function setCurrentUser(user: User | null): void {
  if (typeof window === "undefined") return;
  try {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  } catch {
    // localStorage unavailable
  }
}

export async function loginUser(
  name: string,
  pin: string,
): Promise<User | null> {
  try {
    // @ts-ignore - Types will work once Supabase credentials are configured
    const { data, error } = await supabase
      .from("users")
      .select("id, name")
      .eq("name", name)
      .eq("pin", pin)
      .single<{ id: string; name: string }>();

    if (error || !data) return null;

    const user: User = { id: data.id, name: data.name };
    setCurrentUser(user);

    // Update last active
    await supabase
      .from("users")
      // @ts-expect-error - Types will work once Supabase credentials are configured
      .update({ last_active: new Date().toISOString() })
      .eq("id", data.id);

    return user;
  } catch {
    return null;
  }
}

export function logoutUser(): void {
  setCurrentUser(null);
}

// ── Signup ───────────────────────────────────────────

export async function signupUser(
  firstName: string,
  lastName: string,
  email: string,
  pin: string,
  phone?: string,
  state?: string,
  district?: number,
): Promise<{ user: User | null; errorMsg?: string }> {
  try {
    const name = `${firstName.trim()} ${lastName.trim()}`;
    const { data, error } = await supabase
      .from("users")
      // @ts-ignore - Types will work once Supabase credentials are configured
      .insert({ name, first_name: firstName.trim(), last_name: lastName.trim(), email: email.trim().toLowerCase(), pin, phone: phone?.trim() || null, state: state || null, district: district ?? null })
      .select("id, name")
      .single<{ id: string; name: string }>();

    if (error) {
      console.error("Supabase signup error:", error);
      // Check for duplicate email error
      if (error.code === '23505' && error.message.includes('users_email_key')) {
        return { user: null, errorMsg: "This email already has an account. Please login instead." };
      }
      return { user: null, errorMsg: error.message };
    }
    if (!data) return { user: null, errorMsg: "No data returned" };
    return {
      user: { id: data.id, name: data.name, firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim().toLowerCase(), phone: phone?.trim() || undefined, state: state || undefined, district: district },
    };
  } catch (e) {
    console.error("Signup exception:", e);
    return { user: null, errorMsg: String(e) };
  }
}

// ── Login by name + pin (flexible) ───────────────────

export async function loginUserByNamePin(
  email: string,
  pin: string,
): Promise<User | null> {
  try {
    // @ts-ignore - Types will work once Supabase credentials are configured
    const { data, error } = await supabase
      .from("users")
      .select("id, name, first_name, last_name, email, phone, state, district")
      .eq("email", email.trim().toLowerCase())
      .eq("pin", pin)
      .single<{ id: string; name: string; first_name?: string; last_name?: string; email?: string; phone?: string; state?: string; district?: number }>();

    if (error || !data) return null;

    const user: User = {
      id: data.id,
      name: data.name,
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      phone: data.phone,
      state: data.state || undefined,
      district: data.district ?? undefined,
    };
    setCurrentUser(user);

    await supabase
      .from("users")
      // @ts-expect-error - Types will work once Supabase credentials are configured
      .update({ last_active: new Date().toISOString() })
      .eq("id", data.id);

    return user;
  } catch {
    return null;
  }
}

// ── Mistakes (localStorage - works offline, no login needed) ─────

const MISTAKES_KEY = "civics-helper-mistakes";

/** Returns a per-user key so different users on the same browser never share mistakes */
function getMistakesKey(): string {
  const user = getCurrentUser();
  if (user?.id) return `${MISTAKES_KEY}-${user.id}`;
  return MISTAKES_KEY;
}

function loadMistakeSet(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem(getMistakesKey());
    if (stored) {
      const arr = JSON.parse(stored) as string[];
      return new Set(arr);
    }
  } catch {
    // corrupted data
  }
  return new Set();
}

function saveMistakeSet(set: Set<string>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getMistakesKey(), JSON.stringify(Array.from(set)));
  } catch {
    // localStorage unavailable
  }
}

/** Get all mistake question IDs */
export function getMistakes(): string[] {
  return Array.from(loadMistakeSet());
}

/** Add a question to mistakes — duplicates are automatically ignored */
export function addMistake(questionId: string): void {
  const set = loadMistakeSet();
  set.add(questionId); // Set guarantees no duplicates
  saveMistakeSet(set);
}

/** Remove a single mistake (she got it right in review) */
export function removeMistake(questionId: string): void {
  const set = loadMistakeSet();
  set.delete(questionId);
  saveMistakeSet(set);
}

/** Clear all mistakes for the current user */
export function clearAllMistakes(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(getMistakesKey());
    // Also clear the legacy shared key in case old data is present
    localStorage.removeItem(MISTAKES_KEY);
  } catch {
    // localStorage unavailable
  }
}

// ── Progress Tracking ────────────────────────────────

export async function saveQuizAttempt(
  mode: "quiz" | "practice",
  totalQuestions: number,
  correctAnswers: number,
): Promise<void> {
  const user = getCurrentUser();
  if (!user) return;

  const scorePercent = Math.round((correctAnswers / totalQuestions) * 100);

  try {
    // @ts-ignore - Types will work once Supabase credentials are configured
    await supabase.from("quiz_attempts").insert({
      user_id: user.id,
      mode,
      total_questions: totalQuestions,
      correct_answers: correctAnswers,
      score_percent: scorePercent,
    });
  } catch {
    // Ignore errors
  }
}

export interface QuizAttempt {
  id: string;
  mode: string;
  total_questions: number;
  correct_answers: number;
  score_percent: number;
  completed_at: string;
}

export async function getRecentAttempts(
  limit: number = 10,
): Promise<QuizAttempt[]> {
  const user = getCurrentUser();
  if (!user) return [];

  try {
    // @ts-ignore - Types will work once Supabase credentials are configured
    const { data, error } = await supabase
      .from("quiz_attempts")
      .select("*")
      .eq("user_id", user.id)
      .order("completed_at", { ascending: false })
      .limit(limit);

    if (error || !data) return [];
    return data;
  } catch {
    return [];
  }
}
