/**
 * Generates personalized civics questions based on the user's state & district.
 * These are injected into the question pool for logged-in users who have a state set.
 */

import { Question, BilingualText } from "./questions";
import { stateData } from "./representatives";

/**
 * Build personalized questions for a given state + district.
 * Returns an empty array if the state isn't in our data.
 */
export function getPersonalizedQuestions(
  stateCode: string,
  district?: number,
): Question[] {
  const state = stateData[stateCode];
  if (!state) return [];

  const questions: Question[] = [];

  // ── 1. Governor question ──────────────────────────
  questions.push({
    id: `p_gov_${stateCode}`,
    topic: "government",
    question: {
      en: `Who is the Governor of ${state.name}?`,
      ml: `${state.name}-ന്റെ ഗവർണർ ആരാണ്?`,
      gu: `${state.name}ના ગવર્નર કોણ છે?`,
    },
    options: buildGovernorOptions(state.governor, stateCode),
    correctIndex: 0,
    explanation: {
      en: `${state.governor} is the current Governor of ${state.name}.`,
      ml: `${state.governor} ആണ് ${state.name}-ന്റെ ഇപ്പോഴത്തെ ഗവർണർ.`,
      gu: `${state.governor} ${state.name}ના વર્તમાન ગવર્નર છે.`,
    },
  });

  // ── 2. Senator questions (one question per senator so both are learnable) ────
  // Two separate questions are added to the pool — one for each senator.
  // This means the quiz will ask about each senator independently, and
  // crucially the OTHER senator is never shown as a wrong answer.
  for (let si = 0; si < 2; si++) {
    const correctSenator = state.senators[si];
    const otherSenator = state.senators[1 - si];
    questions.push({
      id: `p_sen${si}_${stateCode}`,
      topic: "government",
      question: {
        en: `Who is one of your state's U.S. Senators? (${state.name})`,
        ml: `നിങ്ങളുടെ സംസ്ഥാനത്തെ അമേരിക്കൻ സെനറ്റർമാരിൽ ഒരാൾ ആരാണ്? (${state.name})`,
        gu: `તમારા રાજ્યના યુ.એસ. સેનેટરોમાંથી એક કોણ છે? (${state.name})`,
      },
      options: buildSenatorOptions(correctSenator, otherSenator),
      correctIndex: 0,
      explanation: {
        en: `${state.senators[0]} and ${state.senators[1]} are the U.S. Senators from ${state.name}.`,
        ml: `${state.senators[0]}-ഉം ${state.senators[1]}-ഉം ${state.name}-ൽ നിന്നുള്ള യു.എസ്. സെനറ്റർമാരാണ്.`,
        gu: `${state.senators[0]} અને ${state.senators[1]} ${state.name}ના યુ.એસ. સેનેટર છે.`,
      },
    });
  }

  // ── 3. U.S. Representative question ───────────────
  if (district !== undefined && state.districts[district]) {
    const rep = state.districts[district];
    const districtLabel = district === 0 ? "At-Large" : `District ${district}`;
    questions.push({
      id: `p_rep_${stateCode}_${district}`,
      topic: "government",
      question: {
        en: `Who is your U.S. Representative? (${state.name}, ${districtLabel})`,
        ml: `നിങ്ങളുടെ അമേരിക്കൻ പ്രതിനിധി ആരാണ്? (${state.name}, ${districtLabel})`,
        gu: `તમારા યુ.એસ. પ્રતિનિધિ કોણ છે? (${state.name}, ${districtLabel})`,
      },
      options: buildRepOptions(rep, stateCode, district),
      correctIndex: 0,
      explanation: {
        en: `${rep} is the U.S. Representative for ${state.name} ${districtLabel}.`,
        ml: `${rep} ആണ് ${state.name} ${districtLabel}-ന്റെ യു.എസ്. പ്രതിനിധി.`,
        gu: `${rep} ${state.name} ${districtLabel}ના યુ.એસ. પ્રતિનિધિ છે.`,
      },
    });
  }

  // ── 4. State capital question ─────────────────────
  questions.push({
    id: `p_cap_${stateCode}`,
    topic: "government",
    question: {
      en: `What is the capital of ${state.name}?`,
      ml: `${state.name}-ന്റെ തലസ്ഥാനം ഏതാണ്?`,
      gu: `${state.name}ની રાજધાની શું છે?`,
    },
    options: buildCapitalOptions(state.capital, stateCode),
    correctIndex: 0,
    explanation: {
      en: `${state.capital} is the capital of ${state.name}.`,
      ml: `${state.capital} ആണ് ${state.name}-ന്റെ തലസ്ഥാനം.`,
      gu: `${state.capital} ${state.name}ની રાજધાની છે.`,
    },
  });

  // Ensure correctIndex is always 0 — we'll shuffle at display time
  return questions;
}

// ── Helper: build 4 options with correct answer at index 0 ──

/** Well-known governors from other states to use as wrong answers */
const otherGovernors = [
  "Gavin Newsom", "Ron DeSantis", "Greg Abbott", "Kathy Hochul",
  "Tim Walz", "Josh Green", "Wes Moore", "Jared Polis",
  "Sarah Huckabee Sanders", "Kay Ivey", "Phil Scott", "Janet Mills",
  "Brad Little", "Spencer Cox", "Jeff Landry", "Ned Lamont",
  "Maura Healey", "Kelly Ayotte", "Tina Kotek", "Bob Ferguson",
];

/** Well-known senators to use as wrong answers */
const otherSenators = [
  "Chuck Schumer", "Mitch McConnell", "Marco Rubio", "Bernie Sanders",
  "Elizabeth Warren", "Ted Cruz", "Amy Klobuchar", "Susan Collins",
  "John Cornyn", "Patty Murray", "Ron Wyden", "Alex Padilla",
  "Josh Hawley", "Kirsten Gillibrand", "Mazie Hirono", "Bill Cassidy",
];

/** Well-known representatives to use as wrong answers */
const otherReps = [
  "Nancy Pelosi", "Alexandria Ocasio-Cortez", "Kevin McCarthy",
  "Jim Jordan", "Hakeem Jeffries", "Adam Schiff", "Marjorie Taylor Greene",
  "Katie Porter", "Ilhan Omar", "Dan Crenshaw", "Pramila Jayapal",
  "Jamie Raskin", "Mike Johnson", "Steve Scalise", "Rosa DeLauro",
];

/** Well-known state capitals to use as wrong answers */
const otherCapitals: Record<string, string[]> = {
  TX: ["Houston", "Dallas", "San Antonio"],
  CA: ["Los Angeles", "San Francisco", "San Diego"],
  NY: ["New York City", "Buffalo", "Syracuse"],
  default: ["Springfield", "Columbus", "Richmond", "Trenton", "Harrisburg", "Lansing", "Madison", "Frankfort", "Nashville", "Raleigh", "Phoenix", "Tallahassee"],
};

function pickWrongAnswers(correct: string, pool: string[], count: number): BilingualText[] {
  const filtered = pool.filter(
    (name) => name.toLowerCase() !== correct.toLowerCase()
  );
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((name) => ({ en: name, ml: name, gu: name }));
}

function buildGovernorOptions(correct: string, _stateCode: string): BilingualText[] {
  const wrongs = pickWrongAnswers(correct, otherGovernors, 3);
  return [{ en: correct, ml: correct, gu: correct }, ...wrongs];
}

function buildSenatorOptions(correct: string, otherStateSenator: string): BilingualText[] {
  // Exclude BOTH of this state's senators from the wrong-answers pool so
  // neither real senator ever appears as a fake "wrong" choice.
  const pool = otherSenators.filter(
    (s) => s.toLowerCase() !== otherStateSenator.toLowerCase()
  );
  const wrongs = pickWrongAnswers(correct, pool, 3);
  return [{ en: correct, ml: correct, gu: correct }, ...wrongs];
}

function buildRepOptions(correct: string, _stateCode: string, _district: number): BilingualText[] {
  const wrongs = pickWrongAnswers(correct, otherReps, 3);
  return [{ en: correct, ml: correct, gu: correct }, ...wrongs];
}

function buildCapitalOptions(correct: string, stateCode: string): BilingualText[] {
  const pool = [
    ...(otherCapitals[stateCode] || []),
    ...otherCapitals.default,
  ];
  const wrongs = pickWrongAnswers(correct, pool, 3);
  return [{ en: correct, ml: correct, gu: correct }, ...wrongs];
}
