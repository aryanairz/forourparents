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
  | "pleaseLogin"
  | "eligibility"
  | "signup"
  | "signupButton"
  | "namePlaceholder"
  | "enterName"
  | "signupSuccess"
  | "signupError"
  | "alreadyHaveAccount"
  | "needAccount"
  | "orDivider"
  | "heroTagline"
  | "heroDescription"
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "enterFirstName"
  | "enterLastName"
  | "enterEmail"
  | "enterPhone"
  | "loginEmailLabel"
  | "state"
  | "selectState"
  | "congressionalDistrict"
  | "selectDistrict"
  | "findYourDistrict"
  | "atLargeDistrict";

export const translations: Record<TranslationKey, Record<Lang, string>> = {
  appName: {
    en: "For Our Parents",
    ml: "നമ്മുടെ മാതാപിതാക്കൾക്കായി",
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
    en: "You haven't missed any questions! Wonderful!",
    ml: "ഒരു ചോദ്യവും തെറ്റിയിട്ടില്ല! വളരെ നന്നായി!",
  },
  clearConfirm: {
    en: "Are you sure you want to clear all mistakes?",
    ml: "എല്ലാ തെറ്റുകളും മായ്ക്കണമെന്ന് ഉറപ്പാണോ?",
  },
  yes: { en: "Yes", ml: "അതെ" },
  no: { en: "No", ml: "അല്ല" },
  cancel: { en: "Cancel", ml: "റദ്ദാക്കുക" },
  quizComplete: { en: "Quiz Complete!", ml: "ക്വിസ് പൂർത്തിയായി!" },
  quizCompleteDesc: {
    en: "Well done! You answered all the questions.",
    ml: "നന്നായി! എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകി.",
  },
  tryAgain: { en: "Try Again", ml: "വീണ്ടും ശ്രമിക്കുക" },
  goHome: { en: "Go Home", ml: "ഹോം പേജിലേക്ക്" },
  questionOf: { en: "Question", ml: "ചോദ്യം" },
  wellDone: { en: "Excellent work!", ml: "അടിപൊളി!" },
  keepTrying: {
    en: "Keep going! You're learning!",
    ml: "തുടരൂ! പഠിച്ചുകൊണ്ടിരിക്കുന്നു!",
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
    en: "Welcome to For Our Parents!",
    ml: "നമ്മുടെ മാതാപിതാക്കൾക്കായി-ലേക്ക് സ്വാഗതം!",
  },
  homeSubtitle: {
    en: "Let's practice for the civics test together",
    ml: "നമുക്ക് ഒരുമിച്ച് സിവിക്സ് ടെസ്റ്റിന് പഠിക്കാം",
  },
  homeHelp: {
    en: "Tap a button below to start studying. You can do this!",
    ml: "തുടങ്ങാൻ താഴെയുള്ള ഒരു ബട്ടൺ അമർത്തൂ. നിങ്ങൾക്ക് ഇത് കഴിയും!",
  },
  quizEncourage: {
    en: "You're doing great! Take your time.",
    ml: "നന്നായി പോകുന്നു! സമയം എടുത്തോളൂ.",
  },
  practiceEncourage: {
    en: "Think carefully and then see the answer.",
    ml: "നന്നായി ആലോചിക്കൂ, എന്നിട്ട് ഉത്തരം നോക്കൂ.",
  },
  mistakesEncourage: {
    en: "Don't worry! Mistakes help us learn.",
    ml: "വിഷമിക്കേണ്ട! തെറ്റുകൾ പഠിക്കാൻ സഹായിക്കും.",
  },
  greatScore: {
    en: "Amazing! You're almost ready!",
    ml: "ഗംഭീരം! ഏകദേശം തയ്യാറായി!",
  },
  goodScore: {
    en: "Good effort! Let's try again!",
    ml: "നല്ല ശ്രമം! നമുക്ക് വീണ്ടും ശ്രമിക്കാം!",
  },
  practiceSelectHelp: {
    en: "Pick a topic you'd like to study.",
    ml: "പഠിക്കാൻ ആഗ്രഹിക്കുന്ന വിഷയം തിരഞ്ഞെടുക്കൂ.",
  },
  login: { en: "Login", ml: "ലോഗിൻ" },
  enterPin: {
    en: "Enter your 4-digit PIN",
    ml: "നിങ്ങളുടെ 4 അക്ക പിൻ നമ്പർ നൽകുക",
  },
  pinPlaceholder: { en: "Enter PIN", ml: "പിൻ നൽകുക" },
  loginButton: { en: "Start Learning", ml: "പഠനം ആരംഭിക്കുക" },
  loginError: {
    en: "Wrong PIN. Please try again.",
    ml: "തെറ്റായ പിൻ. വീണ്ടും ശ്രമിക്കുക.",
  },
  loginWelcome: {
    en: "Welcome back!",
    ml: "വീണ്ടും സ്വാഗതം!",
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
  eligibility: {
    en: "Am I Eligible?",
    ml: "ഞാൻ യോഗ്യനാണോ?",
  },
  signup: { en: "Sign Up", ml: "സൈൻ അപ്പ്" },
  signupButton: { en: "Create Account", ml: "അക്കൗണ്ട് സൃഷ്ടിക്കുക" },
  namePlaceholder: { en: "Your name", ml: "നിങ്ങളുടെ പേര്" },
  enterName: {
    en: "Enter your name",
    ml: "നിങ്ങളുടെ പേര് നൽകുക",
  },
  signupSuccess: {
    en: "Account created! You can now log in.",
    ml: "അക്കൗണ്ട് സൃഷ്ടിച്ചു! ഇപ്പോൾ ലോഗിൻ ചെയ്യാം.",
  },
  signupError: {
    en: "Could not create account. Please try again.",
    ml: "അക്കൗണ്ട് സൃഷ്ടിക്കാനായില്ല. വീണ്ടും ശ്രമിക്കുക.",
  },
  alreadyHaveAccount: {
    en: "Already have an account?",
    ml: "ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?",
  },
  needAccount: {
    en: "Need an account?",
    ml: "ഒരു അക്കൗണ്ട് വേണോ?",
  },
  orDivider: { en: "or", ml: "അല്ലെങ്കിൽ" },
  heroTagline: {
    en: "Pass Your Civics Test — In Malayalam",
    ml: "സിവിക്സ് ടെസ്റ്റ് പാസാക്കൂ — മലയാളത്തിൽ",
  },
  heroDescription: {
    en: "Free bilingual study tool for Malayalam-speaking elders preparing for U.S. citizenship.",
    ml: "യു.എസ്. പൗരത്വത്തിന് തയ്യാറെടുക്കുന്ന മലയാളം സംസാരിക്കുന്ന മുതിർന്നവർക്കുള്ള സൗജന്യ ദ്വിഭാഷാ പഠന ഉപകരണം.",
  },
  firstName: { en: "First Name", ml: "പ്രഥമ നാമം" },
  lastName: { en: "Last Name", ml: "കുടുംബ നാമം" },
  email: { en: "Email Address", ml: "ഇമെയിൽ വിലാസം" },
  phone: { en: "Phone Number (optional)", ml: "ഫോൺ നമ്പർ (ഐച്ഛികം)" },
  enterFirstName: { en: "Enter your first name", ml: "നിങ്ങളുടെ പ്രഥമ നാമം നൽകുക" },
  enterLastName: { en: "Enter your last name", ml: "നിങ്ങളുടെ കുടുംബ നാമം നൽകുക" },
  enterEmail: { en: "Enter your email address", ml: "നിങ്ങളുടെ ഇമെയിൽ വിലാസം നൽകുക" },
  enterPhone: { en: "e.g. (555) 123-4567", ml: "ഉദാ. (555) 123-4567" },
  loginEmailLabel: { en: "Enter your email", ml: "നിങ്ങളുടെ ഇമെയിൽ നൽകുക" },
  state: { en: "State", ml: "സംസ്ഥാനം" },
  selectState: { en: "Select your state", ml: "നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക" },
  congressionalDistrict: { en: "Congressional District", ml: "കോൺഗ്രഷണൽ ജില്ല" },
  selectDistrict: { en: "Select your district", ml: "നിങ്ങളുടെ ജില്ല തിരഞ്ഞെടുക്കുക" },
  findYourDistrict: { en: "Don't know your district? Find it here →", ml: "നിങ്ങളുടെ ജില്ല അറിയില്ലേ? ഇവിടെ കണ്ടെത്തുക →" },
  atLargeDistrict: { en: "At-Large (entire state)", ml: "മുഴുവൻ സംസ്ഥാനം" },
};

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}
