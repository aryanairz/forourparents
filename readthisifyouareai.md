# For Our Parents — Claude Handoff Document
*Last updated: 2026-03-24. Give this entire file to Claude at the start of each new session.*

---

## WHAT THIS APP IS

**For Our Parents** is a multilingual U.S. citizenship test prep app built for elderly immigrants. The core idea: adult children set up the app for their parents, who then study and practice the official USCIS civics test in their native language.

- **Target users:** Elderly immigrants (Malayalam, Gujarati, Vietnamese, English speakers)
- **Auth model:** Email + 4-digit PIN (no passwords — simple for elderly users)
- **Inspiration:** Speak.com UI/UX style, Duolingo-style question flow
- **Monetization:** Free (social impact startup)
- **Founder:** Aryan (high school student)

---

## TECH STACK

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + inline styles |
| Animations | Framer Motion |
| Database | Supabase (PostgreSQL) |
| Auth | Custom PIN-based (no Supabase Auth) |
| Fonts | DM Sans (UI), Source Serif 4 (headings), JetBrains Mono |
| Icons | Lucide React |
| Flags | flag-icons CSS library |

---

## COLOR SCHEME (applies everywhere)

```
Navy:        #1B2A4A  — headings, nav background, primary text
Red:         #C41E3A  — primary CTA buttons, active states, links
Red dark:    #8B1429  — button shadow / hover
Red hover:   #A31830  — button hover state
White:       #FFFFFF  — page backgrounds, cards
Light gray:  #F5F5F5  — onboarding container background
Body text:   #6B7280
Light text:  #9CA3AF  — captions, placeholders
Border:      #E5E7EB
Error:       #DC2626
Success:     #16A34A
```

---

## FILE STRUCTURE (key files only)

```
forourparents/
├── app/
│   ├── layout.tsx               — Root layout: fonts, Header, <main> wrapper
│   ├── globals.css              — Design system CSS variables + utility classes
│   ├── page.tsx                 — Landing page (logged-out) + AuthenticatedHome (logged-in)
│   ├── login/page.tsx           — Sign-in page (two-column Speak.com style)
│   ├── onboarding/page.tsx      — 4-step signup flow (NEW)
│   ├── dashboard/page.tsx       — Authenticated dashboard
│   ├── quiz/page.tsx            — Practice Test mode
│   ├── practice/page.tsx        — Practice/flashcard mode
│   ├── mistakes/page.tsx        — Review mistakes page
│   ├── eligibility/page.tsx     — Do You Qualify? page
│   └── help/page.tsx            — Help page
├── components/
│   ├── Header.tsx               — Global nav (navy bg, red accents)
│   ├── DemoQuiz.tsx             — Demo quiz on landing page
│   ├── FAQAccordion.tsx         — FAQ section on landing page
│   ├── LanguageMarquee.tsx      — Scrolling language ticker
│   ├── QuestionCard.tsx         — Quiz question display
│   ├── OptionButton.tsx         — Answer option button
│   ├── ProgressBar.tsx          — Quiz progress bar
│   └── ReadAloud.tsx            — Text-to-speech component
├── data/
│   ├── questions.ts             — All USCIS civics questions (see notes below)
│   ├── personalizedQuestions.ts — Dynamic Q23/Q29/Q61/Q62 based on user state
│   └── representatives.ts       — All 50 states: governor, senators, districts, capital
├── lib/
│   ├── storage.ts               — Supabase calls: signupUser, loginUserByNamePin, etc.
│   ├── useQuestionPool.ts       — Hook: combines generic + personalized questions
│   ├── LanguageContext.tsx      — Global language state (en/ml/gu/vi)
│   └── i18n.ts                  — Translation strings
└── supabase-schema.sql          — Full DB schema (run in Supabase SQL Editor)
```

---

## DATABASE SCHEMA (supabase-schema.sql)

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL UNIQUE,   -- unique, required
  phone TEXT NOT NULL UNIQUE,   -- unique, required (added 2026-03-24)
  pin TEXT NOT NULL,
  state TEXT,
  district INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_active TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE mistakes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  added_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, question_id)
);

CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  mode TEXT NOT NULL,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  score_percent INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);
```

Row Level Security is enabled on all tables with open policies (app handles auth logic).

---

## KEY DATA TYPES

```typescript
// questions.ts
export type Lang = "en" | "ml" | "gu" | "vi";
export type Topic = "government" | "rights" | "history" | "symbols";
export type BilingualText = Record<Lang, string>;

export interface Question {
  id: string;           // e.g. "q001", "q045"
  topic: Topic;
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number; // always 0 — quiz shuffles at display time
  explanation?: BilingualText;
  isDynamic?: boolean;
}

// storage.ts
export interface User {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  state?: string;        // 2-letter state code e.g. "CA"
  district?: number;     // congressional district number
}
```

---

## QUESTIONS ARCHITECTURE

### Official USCIS list: 128 questions
- **124 static questions** live in `data/questions.ts` with IDs `q001`–`q128` (skipping q023, q029, q061, q062)
- **4 dynamic questions** are generated by `data/personalizedQuestions.ts` based on user's state/district:
  - `q023` — Who is one of your state's U.S. senators?
  - `q029` — Name your U.S. representative
  - `q061` — Who is the governor of your state?
  - `q062` — What is the capital of your state?

### useQuestionPool hook
- `STATE_SPECIFIC_IDS = new Set(["q023", "q029", "q061", "q062"])` — filters these from generic pool
- For logged-in users with `user.state` set: adds personalized questions via `getPersonalizedQuestions(state, district)`
- For anonymous users: returns generic pool only

### Current officials (hardcoded in static questions)
- Q30: Speaker of the House = **Mike Johnson**
- Q38: President = **Donald Trump**
- Q39: Vice President = **JD Vance**
- Q57: Chief Justice = **John Roberts**

### Question ID format
- `q001`–`q022`: Government - Principles
- `q024`–`q028`, `q030`–`q060`: Government - System
- `q063`–`q072`: Rights and Responsibilities
- `q073`–`q118`: American History
- `q119`–`q128`: Symbols and Holidays

### ⚠️ PENDING: questions.ts rewrite
The `data/questions.ts` file has NOT been fully rewritten yet with all 128 official USCIS questions. The old g-series questions (g001–g066) and s-series questions (s001–s017) still exist. This is the biggest pending task. The new IDs should be q001–q128 (skipping q023, q029, q061, q062). correctIndex should always be 0. useQuestionPool.ts has already been updated to use the new IDs.

---

## LANDING PAGE (app/page.tsx)

The landing page is a Speak.com-style marketing page with these sections:
1. **Header** — logo + language dropdown + "Get Started" red 3D button → `/onboarding`
2. **FloatingNav** — pill appears after 480px scroll, navy bg, "Get Started" → `/onboarding`
3. **LanguageMarquee** — red scrolling ticker with all 4 languages
4. **Hero** — text LEFT, image RIGHT. Red overline, navy headline, two CTAs: "Get Started" → `/onboarding`, "I already have an account" → `/login`
5. **Big Statement** — centered bold text section
6. **Feature Blocks** — 3 feature callouts
7. **Demo Section** — "Try It Out" with DemoQuiz component (interactive)
8. **Testimonial** — quote section
9. **FAQ** — FAQAccordion component
10. **Bottom CTA** — full-width red section
11. **Footer**

### DemoQuiz
- Uses first 10 questions from questions.ts
- Shuffles answer options on every question load (correct answer is NOT always first)
- Tracks score, shows result screen at end

---

## ONBOARDING FLOW (app/onboarding/page.tsx) — NEW

4-step Speak.com-style flow at `/onboarding`. No nav header — just logo top-left.

- **Step 1:** Language selection (en/ml/gu/vi) — auto-advances after 300ms
- **Step 2:** Citizenship rule (50/20, 55/15, 65/20, "not sure") — auto-advances
- **Step 3:** State dropdown + Congressional District dropdown + "Continue" button (navy pill)
- **Step 4:** First Name, Last Name, Email, Phone (required), 4-digit PIN (eye toggle) + "Create Account" red pill button

Framer Motion slide animations between steps (slides left/right based on direction). Gray container (#F5F5F5) centered on white page.

On success: saves user to Supabase, sets language in LanguageContext, redirects to `/`.

---

## LOGIN PAGE (app/login/page.tsx) — REPLACED

Two-column layout at `/login`. No nav header — just logo in right column.

- **Left (hidden on mobile):** Light red panel (#FFF1F1) with interactive quiz card mockup (rotated -4deg, shows a sample question with clickable answers)
- **Right:** Email + 4-digit PIN form, "Sign In" red pill button, "Forgot your PIN?" link → `/help`, "Don't have an account? Sign up" → `/onboarding`

---

## HEADER (components/Header.tsx)

Three variants based on pathname:
1. **`/login` or `/onboarding`** → returns `null` (no header, pages manage their own logo)
2. **`/` (landing, logged-out)** → white header: logo + language dropdown + "Get Started" → `/onboarding`
3. **All other pages (authenticated)** → Navy (#1B2A4A) header: logo + centered nav links + language dropdown + Log Out button. Active nav link has red (#C41E3A) underline indicator.

Nav links: Home `/`, Practice Test `/quiz`, Do You Qualify? `/eligibility`, Help `/help`

---

## GLOBALS.CSS KEY CLASSES

```css
--color-primary: #C41E3A    /* red */
--color-heading: #1B2A4A    /* navy */
--color-primary-light: #FFF0F3

.btn-red-3d       /* Red 3D press button with shadow */
.btn-3d           /* Same but used on authenticated pages */
.marquee-track    /* Infinite scroll animation */
.landing-page     /* Scoped styles for landing page */
.onboarding-page  /* Removes main padding */
.login-page       /* Removes main padding */
```

---

## AUTH LOGIC (lib/storage.ts)

```typescript
// Sign up — phone is now required (not optional)
signupUser(firstName, lastName, email, pin, phone, state?, district?)

// Duplicate detection:
// error.code === '23505' && message.includes('users_email_key') → "email already exists"
// error.code === '23505' && message.includes('users_phone_key') → "phone already exists"

// Sign in
loginUserByNamePin(email, pin) → User | null

// Session
getCurrentUser() → User | null   (reads localStorage)
setCurrentUser(user)              (writes localStorage)
logoutUser()                      (clears localStorage)
```

---

## WHAT HAS BEEN DONE (chronological)

1. ✅ Complete Speak.com-style landing page redesign (red/navy/white, all 10 sections)
2. ✅ Hero section: text left, image right
3. ✅ FAQAccordion component (Framer Motion height animation)
4. ✅ LanguageMarquee component (CSS marquee, flag icons)
5. ✅ FloatingNav pill (appears on scroll)
6. ✅ DemoQuiz answer shuffling (correct answer no longer always first)
7. ✅ Color scheme updated site-wide: orange → red (#C41E3A), navy (#1B2A4A)
8. ✅ Header updated to navy background on all authenticated pages
9. ✅ globals.css CSS variables updated to red/navy system
10. ✅ useQuestionPool.ts STATE_SPECIFIC_IDS updated to new q-series IDs
11. ✅ Onboarding page created (/onboarding) — 4-step Speak.com flow
12. ✅ Login page replaced — two-column layout with quiz mockup left panel
13. ✅ Header returns null on /login and /onboarding
14. ✅ All "Get Started" CTAs now point to /onboarding
15. ✅ Phone number made mandatory in signup (required field, 10-digit validation)
16. ✅ Unique constraints added to email AND phone in supabase-schema.sql
17. ✅ Duplicate email/phone error messages added to signupUser()

---

## PENDING TASKS (most important first)

### 1. 🔴 CRITICAL: Rewrite data/questions.ts with all 128 USCIS questions
The file currently has old g-series and s-series questions. It needs to be completely rewritten with:
- IDs: q001–q022, q024–q028, q030–q060, q063–q072, q073–q128 (skip q023, q029, q061, q062)
- All questions in BilingualText format (en/ml/gu/vi)
- correctIndex always 0
- Topics: q001–q060 = "government", q063–q072 = "rights", q073–q118 = "history", q119–q128 = "symbols"
- Delete all s-series questions (not on official list)
- Q30 = Mike Johnson, Q38 = Donald Trump, Q39 = JD Vance, Q57 = John Roberts

### 2. 🟡 Multi-select questions in Practice Mode
Questions like "Name THREE national holidays" should:
- In **Practice Mode**: rotate different sets of answer choices each time (randomized)
- In **Practice Test Mode**: show n+3 answer choices (e.g. name 3 → show 6 choices, 3 correct), checkbox UI, no partial credit
Affected questions: Q10, Q41, Q48, Q65, Q67, Q69, Q70, Q80, Q81, Q93, Q99, Q100, Q101, Q106, Q117, Q126

### 3. 🟡 Landing page fixes still needed
- "Try It Out" text appears twice (once as red overline label, once as h2) — remove the overline label
- FloatingNav "Get Started" alignment — ensure it's perfectly centered
- Demo quiz container should not resize when an answer is clicked (fix layout shift)

### 4. 🟢 Fix LanguageContext.tsx line 36
Has a trailing `1` after the array declaration: `const order: Lang[] = ["en", "ml", "gu", "vi"];1`
Just delete the `1`.

---

## IMPORTANT CONVENTIONS

- All user-facing text uses `BilingualText` type — must provide en/ml/gu/vi translations
- `correctIndex` in Question is always 0; the quiz/practice components shuffle options at display time
- State codes are 2-letter (e.g. "CA", "TX") matching keys in representatives.ts
- District 0 = at-large (states with only one representative)
- The app uses localStorage for session (not cookies/Supabase Auth)
- No Supabase Auth — authentication is custom (email + PIN lookup in users table)
- `"use client"` is required on any component using hooks or browser APIs
- Font variables: `var(--font-dm-sans)`, `var(--font-source-serif)`, `var(--font-jetbrains)`
