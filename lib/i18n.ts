import { Lang } from "@/data/questions";

export type TranslationKey =
  | "appName"
  | "home"
  | "back"
  | "next"
  | "start"
  | "practice"
  | "askQuestions"
  | "reviewMistakes"
  | "clearMistakes"
  | "correct"
  | "incorrect"
  | "explanation"
  | "showAnswer"
  | "iGotIt"
  | "iMissedIt"
  | "topic"
  | "allTopics"
  | "readAloud"
  | "language"
  | "quizMode"
  | "practiceMode"
  | "selectTopic"
  | "startPractice"
  | "startReview"
  | "attempted"
  | "score"
  | "missed"
  | "noMistakes"
  | "noMistakesDesc"
  | "clearConfirm"
  | "yes"
  | "no"
  | "cancel"
  | "quizComplete"
  | "quizCompleteDesc"
  | "tryAgain"
  | "goHome"
  | "questionOf"
  | "wellDone"
  | "keepTrying"
  | "speechUnavailable"
  | "noQuestions"
  | "noQuestionsDesc"
  | "progress"
  | "greeting"
  | "homeSubtitle"
  | "homeHelp"
  | "quizEncourage"
  | "practiceEncourage"
  | "mistakesEncourage"
  | "greatScore"
  | "goodScore"
  | "practiceSelectHelp"
  | "login"
  | "enterPin"
  | "pinPlaceholder"
  | "loginButton"
  | "loginError"
  | "loginWelcome"
  | "dashboard"
  | "viewDashboard"
  | "recentScores"
  | "averageScore"
  | "totalAttempts"
  | "improvementTip"
  | "logout"
  | "pleaseLogin";

export const translations: Record<TranslationKey, Record<Lang, string>> = {
  appName: {
    en: "Maniama's Civics Helper",
    ml: "മണിയമ്മയുടെ സിവിക്സ് ഹെൽപ്പർ",
  },
  home: { en: "Home", ml: "ഹോം" },
  back: { en: "Back", ml: "പിന്നോട്ട്" },
  next: { en: "Next", ml: "അടുത്തത്" },
  start: { en: "Start", ml: "ആരംഭിക്കുക" },
  practice: { en: "Practice", ml: "പരിശീലനം" },
  askQuestions: { en: "Ask Questions", ml: "ചോദ്യങ്ങൾ ചോദിക്കുക" },
  reviewMistakes: { en: "Review Mistakes", ml: "തെറ്റുകൾ പരിശോധിക്കുക" },
  clearMistakes: { en: "Clear Mistakes", ml: "തെറ്റുകൾ മായ്ക്കുക" },
  correct: { en: "Correct!", ml: "ശരി!" },
  incorrect: { en: "Incorrect", ml: "തെറ്റ്" },
  explanation: { en: "Explanation", ml: "വിശദീകരണം" },
  showAnswer: { en: "Show Answer", ml: "ഉത്തരം കാണിക്കുക" },
  iGotIt: { en: "I got it ✓", ml: "എനിക്ക് കിട്ടി ✓" },
  iMissedIt: { en: "I missed it ✗", ml: "എനിക്ക് കിട്ടിയില്ല ✗" },
  topic: { en: "Topic", ml: "വിഷയം" },
  allTopics: { en: "All Topics", ml: "എല്ലാ വിഷയങ്ങളും" },
  readAloud: { en: "Read Aloud 🔊", ml: "ഉറക്കെ വായിക്കുക 🔊" },
  language: { en: "Language", ml: "ഭാഷ" },
  quizMode: { en: "Quiz Mode", ml: "ക്വിസ് മോഡ്" },
  practiceMode: { en: "Practice Mode", ml: "പരിശീലന മോഡ്" },
  selectTopic: { en: "Select a Topic", ml: "ഒരു വിഷയം തിരഞ്ഞെടുക്കുക" },
  startPractice: { en: "Start Practice", ml: "പരിശീലനം ആരംഭിക്കുക" },
  startReview: { en: "Start Review", ml: "പരിശോധന ആരംഭിക്കുക" },
  attempted: { en: "Attempted", ml: "ശ്രമിച്ചത്" },
  score: { en: "Score", ml: "സ്കോർ" },
  missed: { en: "Missed", ml: "തെറ്റിയത്" },
  noMistakes: { en: "No Mistakes!", ml: "തെറ്റുകൾ ഇല്ല!" },
  noMistakesDesc: {
    en: "Maniama, you haven't missed any questions! Wonderful!",
    ml: "മണിയമ്മേ, ഒരു ചോദ്യവും തെറ്റിയിട്ടില്ല! വളരെ നന്നായി!",
  },
  clearConfirm: {
    en: "Maniama, are you sure you want to clear all mistakes?",
    ml: "മണിയമ്മേ, എല്ലാ തെറ്റുകളും മായ്ക്കണമെന്ന് ഉറപ്പാണോ?",
  },
  yes: { en: "Yes", ml: "അതെ" },
  no: { en: "No", ml: "അല്ല" },
  cancel: { en: "Cancel", ml: "റദ്ദാക്കുക" },
  quizComplete: { en: "Quiz Complete!", ml: "ക്വിസ് പൂർത്തിയായി!" },
  quizCompleteDesc: {
    en: "Well done, Maniama! You answered all the questions.",
    ml: "മണിയമ്മേ, നന്നായി! എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകി.",
  },
  tryAgain: { en: "Try Again", ml: "വീണ്ടും ശ്രമിക്കുക" },
  goHome: { en: "Go Home", ml: "ഹോം പേജിലേക്ക്" },
  questionOf: { en: "Question", ml: "ചോദ്യം" },
  wellDone: { en: "Excellent, Maniama!", ml: "മണിയമ്മേ, അടിപൊളി!" },
  keepTrying: {
    en: "Keep going, Maniama! You're learning!",
    ml: "മണിയമ്മേ, തുടരൂ! പഠിച്ചുകൊണ്ടിരിക്കുന്നു!",
  },
  speechUnavailable: {
    en: "Text-to-speech not available on this device",
    ml: "ഈ ഉപകരണത്തിൽ ടെക്സ്റ്റ്-ടു-സ്പീച്ച് ലഭ്യമല്ല",
  },
  noQuestions: { en: "No Questions", ml: "ചോദ്യങ്ങൾ ഇല്ല" },
  noQuestionsDesc: {
    en: "No questions available for this selection.",
    ml: "ഈ തിരഞ്ഞെടുപ്പിന് ചോദ്യങ്ങൾ ലഭ്യമല്ല.",
  },
  progress: { en: "Progress", ml: "പുരോഗതി" },
  greeting: {
    en: "Welcome, Maniama!",
    ml: "സ്വാഗതം, മണിയമ്മേ!",
  },
  homeSubtitle: {
    en: "Let's practice for the civics test together",
    ml: "നമുക്ക് ഒരുമിച്ച് സിവിക്സ് ടെസ്റ്റിന് പഠിക്കാം",
  },
  homeHelp: {
    en: "Maniama, tap a big button below to start. You can do this!",
    ml: "മണിയമ്മേ, തുടങ്ങാൻ താഴെയുള്ള ഒരു ബട്ടൺ അമർത്തൂ. നിങ്ങൾക്ക് ഇത് കഴിയും!",
  },
  quizEncourage: {
    en: "You're doing great, Maniama! Take your time.",
    ml: "മണിയമ്മേ, നന്നായി പോകുന്നു! സമയം എടുത്തോളൂ.",
  },
  practiceEncourage: {
    en: "Maniama, think carefully and then see the answer.",
    ml: "മണിയമ്മേ, നന്നായി ആലോചിക്കൂ, എന്നിട്ട് ഉത്തരം നോക്കൂ.",
  },
  mistakesEncourage: {
    en: "Don't worry, Maniama! Mistakes help us learn.",
    ml: "മണിയമ്മേ, വിഷമിക്കേണ്ട! തെറ്റുകൾ പഠിക്കാൻ സഹായിക്കും.",
  },
  greatScore: {
    en: "Amazing, Maniama! You're almost ready!",
    ml: "മണിയമ്മേ, ഗംഭീരം! ഏകദേശം തയ്യാറായി!",
  },
  goodScore: {
    en: "Good effort, Maniama! Let's try again!",
    ml: "മണിയമ്മേ, നല്ല ശ്രമം! നമുക്ക് വീണ്ടും ശ്രമിക്കാം!",
  },
  practiceSelectHelp: {
    en: "Maniama, pick a topic you'd like to study.",
    ml: "മണിയമ്മേ, പഠിക്കാൻ ആഗ്രഹിക്കുന്ന വിഷയം തിരഞ്ഞെടുക്കൂ.",
  },
  login: { en: "Login", ml: "ലോഗിൻ" },
  enterPin: {
    en: "Enter your 4-digit PIN, Maniama",
    ml: "മണിയമ്മേ, നിങ്ങളുടെ 4 അക്ക പിൻ നമ്പർ നൽകുക",
  },
  pinPlaceholder: { en: "Enter PIN", ml: "പിൻ നൽകുക" },
  loginButton: { en: "Start Learning", ml: "പഠനം ആരംഭിക്കുക" },
  loginError: {
    en: "Wrong PIN. Please try again.",
    ml: "തെറ്റായ പിൻ. വീണ്ടും ശ്രമിക്കുക.",
  },
  loginWelcome: {
    en: "Welcome back, Maniama!",
    ml: "വീണ്ടും സ്വാഗതം, മണിയമ്മേ!",
  },
  dashboard: { en: "My Progress", ml: "എന്റെ പുരോഗതി" },
  viewDashboard: { en: "View Progress", ml: "പുരോഗതി കാണുക" },
  recentScores: { en: "Recent Scores", ml: "സമീപകാല സ്കോറുകൾ" },
  averageScore: { en: "Average Score", ml: "ശരാശരി സ്കോർ" },
  totalAttempts: { en: "Total Attempts", ml: "മൊത്തം ശ്രമങ്ങൾ" },
  improvementTip: {
    en: "Keep practicing! You're getting better every day.",
    ml: "പരിശീലനം തുടരൂ! നിങ്ങൾ ദിവസവും മെച്ചപ്പെടുന്നു.",
  },
  logout: { en: "Logout", ml: "ലോഗ് ഔട്ട്" },
  pleaseLogin: {
    en: "Please login to continue",
    ml: "തുടരാൻ ലോഗിൻ ചെയ്യുക",
  },
};

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}
