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
    gu: "આપણા માતાપિતા માટે",
  },
  home: { en: "Home", ml: "ഹോം", gu: "હોમ" },
  back: { en: "Back", ml: "പിന്നോട്ട്", gu: "પાછા" },
  next: { en: "Next", ml: "അടുത്തത്", gu: "આગળ" },
  start: { en: "Start", ml: "ആരംഭിക്കുക", gu: "શરૂ કરો" },
  practice: { en: "Practice", ml: "പരിശീലനം", gu: "પ્રેક્ટિસ" },
  askQuestions: { en: "Ask Questions", ml: "ചോദ്യങ്ങൾ ചോദിക്കുക", gu: "પ્રશ્નો પૂછો" },
  reviewMistakes: { en: "Review Mistakes", ml: "തെറ്റുകൾ പരിശോധിക്കുക", gu: "ભૂલો તપાસો" },
  clearMistakes: { en: "Clear Mistakes", ml: "തെറ്റുകൾ മായ്ക്കുക", gu: "ભૂલો સાફ કરો" },
  correct: { en: "Correct!", ml: "ശരി!", gu: "સાચું!" },
  incorrect: { en: "Incorrect", ml: "തെറ്റ്", gu: "ખોટું" },
  explanation: { en: "Explanation", ml: "വിശദീകരണം", gu: "સમજૂતી" },
  showAnswer: { en: "Show Answer", ml: "ഉത്തരം കാണിക്കുക", gu: "જવાબ બતાવો" },
  iGotIt: { en: "I got it ✓", ml: "എനിക്ക് കിട്ടി ✓", gu: "મને આવડ્યું ✓" },
  iMissedIt: { en: "I missed it ✗", ml: "എനിക്ക് കിട്ടിയില്ല ✗", gu: "મારાથી ચૂકાયું ✗" },
  topic: { en: "Topic", ml: "വിഷയം", gu: "વિષય" },
  allTopics: { en: "All Topics", ml: "എല്ലാ വിഷയങ്ങളും", gu: "બધા વિષયો" },
  readAloud: { en: "Read Aloud 🔊", ml: "ഉറക്കെ വായിക്കുക 🔊", gu: "મોટેથી વાંચો 🔊" },
  language: { en: "Language", ml: "ഭാഷ", gu: "ભાષા" },
  quizMode: { en: "Quiz Mode", ml: "ക്വിസ് മോഡ്", gu: "ક્વિઝ મોડ" },
  practiceMode: { en: "Practice Mode", ml: "പരിശീലന മോഡ്", gu: "પ્રેક્ટિસ મોડ" },
  selectTopic: { en: "Select a Topic", ml: "ഒരു വിഷയം തിരഞ്ഞെടുക്കുക", gu: "એક વિષય પસંદ કરો" },
  startPractice: { en: "Start Practice", ml: "പരിശീലനം ആരംഭിക്കുക", gu: "પ્રેક્ટિસ શરૂ કરો" },
  startReview: { en: "Start Review", ml: "പരിശോധന ആരംഭിക്കുക", gu: "સમીક્ષા શરૂ કરો" },
  attempted: { en: "Attempted", ml: "ശ്രമിച്ചത്", gu: "પ્રયત્ન કર્યા" },
  score: { en: "Score", ml: "സ്കോർ", gu: "સ્કોર" },
  missed: { en: "Missed", ml: "തെറ്റിയത്", gu: "ચૂક્યા" },
  noMistakes: { en: "No Mistakes!", ml: "തെറ്റുകൾ ഇല്ല!", gu: "કોઈ ભૂલો નથી!" },
  noMistakesDesc: {
    en: "You haven't missed any questions! Wonderful!",
    ml: "ഒരു ചോദ്യവും തെറ്റിയിട്ടില്ല! വളരെ നന്നായി!",
    gu: "તમે કોઈ પ્રશ્ન ચૂક્યા નથી! અદ્ભુત!",
  },
  clearConfirm: {
    en: "Are you sure you want to clear all mistakes?",
    ml: "എല്ലാ തെറ്റുകളും മായ്ക്കണമെന്ന് ഉറപ്പാണോ?",
    gu: "શું તમે ખરેખર બધી ભૂલો સાફ કરવા માંગો છો?",
  },
  yes: { en: "Yes", ml: "അതെ", gu: "હા" },
  no: { en: "No", ml: "അല്ല", gu: "ના" },
  cancel: { en: "Cancel", ml: "റദ്ദാക്കുക", gu: "રદ કરો" },
  quizComplete: { en: "Quiz Complete!", ml: "ക്വിസ് പൂർത്തിയായി!", gu: "ક્વિઝ પૂરી થઈ!" },
  quizCompleteDesc: {
    en: "Well done! Keep practicing to master all the questions.",
    ml: "നന്നായി! എല്ലാ ചോദ്യങ്ങളും പഠിക്കാൻ പരിശീലനം തുടരുക.",
    gu: "શાબાશ! બધા પ્રશ્નો નિપુણ કરવા માટે પ્રેક્ટિસ ચાલુ રાખો.",
  },
  tryAgain: { en: "Try Again", ml: "വീണ്ടും ശ്രമിക്കുക", gu: "ફરી પ્રયત્ન કરો" },
  goHome: { en: "Go Home", ml: "ഹോം പേജിലേക്ക്", gu: "હોમ પર જાઓ" },
  questionOf: { en: "Question", ml: "ചോദ്യം", gu: "પ્રશ્ન" },
  wellDone: { en: "Excellent work!", ml: "അടിപൊളി!", gu: "ઉત્તમ કામ!" },
  keepTrying: {
    en: "Keep going! You're learning!",
    ml: "തുടരൂ! പഠിച്ചുകൊണ്ടിരിക്കുന്നു!",
    gu: "ચાલુ રાખો! તમે શીખી રહ્યા છો!",
  },
  speechUnavailable: {
    en: "Text-to-speech not available on this device",
    ml: "ഈ ഉപകരണത്തിൽ ടെക്സ്റ്റ്-ടു-സ്പീച്ച് ലഭ്യമല്ല",
    gu: "આ ઉપકરણ પર ટેક્સ્ટ-ટુ-સ્પીચ ઉપલબ્ધ નથી",
  },
  noQuestions: { en: "No Questions", ml: "ചോദ്യങ്ങൾ ഇല്ല", gu: "કોઈ પ્રશ્નો નથી" },
  noQuestionsDesc: {
    en: "No questions available for this selection.",
    ml: "ഈ തിരഞ്ഞെടുപ്പിന് ചോദ്യങ്ങൾ ലഭ്യമല്ല.",
    gu: "આ પસંદગી માટે કોઈ પ્રશ્નો ઉપલબ્ધ નથી.",
  },
  progress: { en: "Progress", ml: "പുരോഗതി", gu: "પ્રગતિ" },
  greeting: {
    en: "Welcome to For Our Parents!",
    ml: "നമ്മുടെ മാതാപിതാക്കൾക്കായി-ലേക്ക് സ്വാഗതം!",
    gu: "આપણા માતાપિતા માટેમાં આપનું સ્વાગત છે!",
  },
  homeSubtitle: {
    en: "Let's practice for the civics test together",
    ml: "നമുക്ക് ഒരുമിച്ച് സിവിക്സ് ടെസ്റ്റിന് പഠിക്കാം",
    gu: "ચાલો સાથે મળીને સિવિક્સ ટેસ્ટની પ્રેક્ટિસ કરીએ",
  },
  homeHelp: {
    en: "Tap a button below to start studying. You can do this!",
    ml: "തുടങ്ങാൻ താഴെയുള്ള ഒരു ബട്ടൺ അമർത്തൂ. നിങ്ങൾക്ക് ഇത് കഴിയും!",
    gu: "અભ્યાસ શરૂ કરવા નીચે એક બટન દબાવો. તમે આ કરી શકો છો!",
  },
  quizEncourage: {
    en: "You're doing great! Take your time.",
    ml: "നന്നായി പോകുന്നു! സമയം എടുത്തോളൂ.",
    gu: "તમે સરસ કરી રહ્યા છો! તમારો સમય લો.",
  },
  practiceEncourage: {
    en: "Think carefully and then see the answer.",
    ml: "നന്നായി ആലോചിക്കൂ, എന്നിട്ട് ഉത്തരം നോക്കൂ.",
    gu: "ધ્યાનથી વિચારો, પછી જવાબ જુઓ.",
  },
  mistakesEncourage: {
    en: "Don't worry! Mistakes help us learn.",
    ml: "വിഷമിക്കേണ്ട! തെറ്റുകൾ പഠിക്കാൻ സഹായിക്കും.",
    gu: "ચિંતા ન કરો! ભૂલો શીખવામાં મદદ કરે છે.",
  },
  greatScore: {
    en: "Amazing! You're almost ready!",
    ml: "ഗംഭീരം! ഏകദേശം തയ്യാറായി!",
    gu: "અદ્ભુત! તમે લગભગ તૈયાર છો!",
  },
  goodScore: {
    en: "Good effort! Let's try again!",
    ml: "നല്ല ശ്രമം! നമുക്ക് വീണ്ടും ശ്രമിക്കാം!",
    gu: "સારો પ્રયત્ન! ચાલો ફરી પ્રયત્ન કરીએ!",
  },
  practiceSelectHelp: {
    en: "Pick a topic you'd like to study.",
    ml: "പഠിക്കാൻ ആഗ്രഹിക്കുന്ന വിഷയം തിരഞ്ഞെടുക്കൂ.",
    gu: "તમે જે વિષય ભણવા માંગો છો તે પસંદ કરો.",
  },
  login: { en: "Login", ml: "ലോഗിൻ", gu: "લોગિન" },
  enterPin: {
    en: "Enter your 4-digit PIN",
    ml: "നിങ്ങളുടെ 4 അക്ക പിൻ നമ്പർ നൽകുക",
    gu: "તમારો 4 અંકનો PIN દાખલ કરો",
  },
  pinPlaceholder: { en: "Enter PIN", ml: "പിൻ നൽകുക", gu: "PIN દાખલ કરો" },
  loginButton: { en: "Start Learning", ml: "പഠനം ആരംഭിക്കുക", gu: "શીખવાનું શરૂ કરો" },
  loginError: {
    en: "Wrong PIN. Please try again.",
    ml: "തെറ്റായ പിൻ. വീണ്ടും ശ്രമിക്കുക.",
    gu: "ખોટો PIN. કૃપા કરીને ફરી પ્રયત્ન કરો.",
  },
  loginWelcome: {
    en: "Welcome back!",
    ml: "വീണ്ടും സ്വാഗതം!",
    gu: "ફરી આપનું સ્વાગત છે!",
  },
  dashboard: { en: "My Progress", ml: "എന്റെ പുരോഗതി", gu: "મારી પ્રગતિ" },
  viewDashboard: { en: "View Progress", ml: "പുരോഗതി കാണുക", gu: "પ્રગતિ જુઓ" },
  recentScores: { en: "Recent Scores", ml: "സമീപകാല സ്കോറുകൾ", gu: "તાજેતરના સ્કોર" },
  averageScore: { en: "Average Score", ml: "ശരാശരി സ്കോർ", gu: "સરેરાશ સ્કોર" },
  totalAttempts: { en: "Total Attempts", ml: "മൊത്തം ശ്രമങ്ങൾ", gu: "કુલ પ્રયત્નો" },
  improvementTip: {
    en: "Keep practicing! You're getting better every day.",
    ml: "പരിശീലനം തുടരൂ! നിങ്ങൾ ദിവസവും മെച്ചപ്പെടുന്നു.",
    gu: "પ્રેક્ટિસ ચાલુ રાખો! તમે દરરોજ સુધરી રહ્યા છો.",
  },
  logout: { en: "Logout", ml: "ലോഗ് ഔട്ട്", gu: "લોગઆઉટ" },
  pleaseLogin: {
    en: "Please login to continue",
    ml: "തുടരാൻ ലോഗിൻ ചെയ്യുക",
    gu: "ચાલુ રાખવા લોગિન કરો",
  },
  eligibility: {
    en: "Am I Eligible?",
    ml: "ഞാൻ യോഗ്യനാണോ?",
    gu: "શું હું લાયક છું?",
  },
  signup: { en: "Sign Up", ml: "സൈൻ അപ്പ്", gu: "સાઇન અપ" },
  signupButton: { en: "Create Account", ml: "അക്കൗണ്ട് സൃഷ്ടിക്കുക", gu: "એકાઉન્ટ બનાવો" },
  namePlaceholder: { en: "Your name", ml: "നിങ്ങളുടെ പേര്", gu: "તમારું નામ" },
  enterName: {
    en: "Enter your name",
    ml: "നിങ്ങളുടെ പേര് നൽകുക",
    gu: "તમારું નામ દાખલ કરો",
  },
  signupSuccess: {
    en: "Account created! You can now log in.",
    ml: "അക്കൗണ്ട് സൃഷ്ടിച്ചു! ഇപ്പോൾ ലോഗിൻ ചെയ്യാം.",
    gu: "એકાઉન્ટ બનાવ્યું! હવે તમે લોગિન કરી શકો છો.",
  },
  signupError: {
    en: "Could not create account. Please try again.",
    ml: "അക്കൗണ്ട് സൃഷ്ടിക്കാനായില്ല. വീണ്ടും ശ്രമിക്കുക.",
    gu: "એકાઉન્ટ બનાવી શકાયું નહીં. કૃપા કરીને ફરી પ્રયત્ન કરો.",
  },
  alreadyHaveAccount: {
    en: "Already have an account?",
    ml: "ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?",
    gu: "પહેલેથી એકાઉન્ટ છે?",
  },
  needAccount: {
    en: "Need an account?",
    ml: "ഒരു അക്കൗണ്ട് വേണോ?",
    gu: "એકાઉન્ટ જોઈએ છે?",
  },
  orDivider: { en: "or", ml: "അല്ലെങ്കിൽ", gu: "અથવા" },
  heroTagline: {
    en: "Pass Your Civics Test — In Your Language",
    ml: "സിവിക്സ് ടെസ്റ്റ് പാസാക്കൂ — മലയാളത്തിൽ",
    gu: "તમારી સિવિક્સ ટેસ્ટ પાસ કરો — ગુજરાતીમાં",
  },
  heroDescription: {
    en: "Free bilingual study tool for Malayalam-speaking elders preparing for U.S. citizenship.",
    ml: "യു.എസ്. പൗരത്വത്തിന് തയ്യാറെടുക്കുന്ന മലയാളം സംസാരിക്കുന്ന മുതിർന്നവർക്കുള്ള സൗജന്യ ദ്വിഭാഷാ പഠന ഉപകരണം.",
    gu: "U.S. નાગરિકતા માટે તૈયારી કરતા વડીલો માટે મફત અભ્યાસ સાધન.",
  },
  firstName: { en: "First Name", ml: "പ്രഥമ നാമം", gu: "પ્રથમ નામ" },
  lastName: { en: "Last Name", ml: "കുടുംബ നാമം", gu: "અટક" },
  email: { en: "Email Address", ml: "ഇമെയിൽ വിലാസം", gu: "ઇમેઇલ સરનામું" },
  phone: { en: "Phone Number (optional)", ml: "ഫോൺ നമ്പർ (ഐച്ഛികം)", gu: "ફોન નંબર (વૈકલ્પિક)" },
  enterFirstName: { en: "Enter your first name", ml: "നിങ്ങളുടെ പ്രഥമ നാമം നൽകുക", gu: "તમારું પ્રથમ નામ દાખલ કરો" },
  enterLastName: { en: "Enter your last name", ml: "നിങ്ങളുടെ കുടുംബ നാമം നൽകുക", gu: "તમારી અટક દાખલ કરો" },
  enterEmail: { en: "Enter your email address", ml: "നിങ്ങളുടെ ഇമെയിൽ വിലാസം നൽകുക", gu: "તમારું ઇમેઇલ સરનામું દાખલ કરો" },
  enterPhone: { en: "e.g. (555) 123-4567", ml: "ഉദാ. (555) 123-4567", gu: "દા.ત. (555) 123-4567" },
  loginEmailLabel: { en: "Enter your email", ml: "നിങ്ങളുടെ ഇമെയിൽ നൽകുക", gu: "તમારું ઇમેઇલ દાખલ કરો" },
  state: { en: "State", ml: "സംസ്ഥാനം", gu: "રાજ્ય" },
  selectState: { en: "Select your state", ml: "നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക", gu: "તમારું રાજ્ય પસંદ કરો" },
  congressionalDistrict: { en: "Congressional District", ml: "കോൺഗ്രഷണൽ ജില്ല", gu: "કોંગ્રેશનલ ડિસ્ટ્રિક્ટ" },
  selectDistrict: { en: "Select your district", ml: "നിങ്ങളുടെ ജില്ല തിരഞ്ഞെടുക്കുക", gu: "તમારો ડિસ્ટ્રિક્ટ પસંદ કરો" },
  findYourDistrict: { en: "Don't know your district? Find it here →", ml: "നിങ്ങളുടെ ജില്ല അറിയില്ലേ? ഇവിടെ കണ്ടെത്തുക →", gu: "તમારો ડિસ્ટ્રિક્ટ ખબર નથી? અહીં શોધો →" },
  atLargeDistrict: { en: "At-Large (entire state)", ml: "മുഴുവൻ സംസ്ഥാനം", gu: "સમગ્ર રાજ્ય" },
};

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}
