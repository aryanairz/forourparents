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
    vi: "Vì Cha Mẹ Chúng Ta",
  },
  home: { en: "Home", ml: "ഹോം", gu: "હોમ", vi: "Trang chủ" },
  back: { en: "Back", ml: "പിന്നോട്ട്", gu: "પાછા", vi: "Quay lại" },
  next: { en: "Next", ml: "അടുത്തത്", gu: "આગળ", vi: "Tiếp" },
  start: { en: "Start", ml: "ആരംഭിക്കുക", gu: "શરૂ કરો", vi: "Bắt đầu" },
  practice: { en: "Practice", ml: "പരിശീലനം", gu: "પ્રેક્ટિસ", vi: "Luyện tập" },
  askQuestions: { en: "Ask Questions", ml: "ചോദ്യങ്ങൾ ചോദിക്കുക", gu: "પ્રશ્નો પૂછો", vi: "Đặt câu hỏi" },
  reviewMistakes: { en: "Review Mistakes", ml: "തെറ്റുകൾ പരിശോധിക്കുക", gu: "ભૂલો તપાસો", vi: "Xem lại lỗi sai" },
  clearMistakes: { en: "Clear Mistakes", ml: "തെറ്റുകൾ മായ്ക്കുക", gu: "ભૂલો સાફ કરો", vi: "Xóa lỗi sai" },
  correct: { en: "Correct!", ml: "ശരി!", gu: "સાચું!", vi: "Đúng!" },
  incorrect: { en: "Incorrect", ml: "തെറ്റ്", gu: "ખોટું", vi: "Sai" },
  explanation: { en: "Explanation", ml: "വിശദീകരണം", gu: "સમજૂતી", vi: "Giải thích" },
  showAnswer: { en: "Show Answer", ml: "ഉത്തരം കാണിക്കുക", gu: "જવાબ બતાવો", vi: "Xem đáp án" },
  iGotIt: { en: "I got it ✓", ml: "എനിക്ക് കിട്ടി ✓", gu: "મને આવડ્યું ✓", vi: "Tôi đúng ✓" },
  iMissedIt: { en: "I missed it ✗", ml: "എനിക്ക് കിട്ടിയില്ല ✗", gu: "મારાથી ચૂકાયું ✗", vi: "Tôi sai ✗" },
  topic: { en: "Topic", ml: "വിഷയം", gu: "વિષય", vi: "Chủ đề" },
  allTopics: { en: "All Topics", ml: "എല്ലാ വിഷയങ്ങളും", gu: "બધા વિષયો", vi: "Tất cả chủ đề" },
  readAloud: { en: "Read Aloud 🔊", ml: "ഉറക്കെ വായിക്കുക 🔊", gu: "મોટેથી વાંચો 🔊", vi: "Đọc to 🔊" },
  language: { en: "Language", ml: "ഭാഷ", gu: "ભાષા", vi: "Ngôn ngữ" },
  quizMode: { en: "Quiz Mode", ml: "ക്വിസ് മോഡ്", gu: "ક્વિઝ મોડ", vi: "Chế độ kiểm tra" },
  practiceMode: { en: "Practice Mode", ml: "പരിശീലന മോഡ്", gu: "પ્રેક્ટિસ મોડ", vi: "Chế độ luyện tập" },
  selectTopic: { en: "Select a Topic", ml: "ഒരു വിഷയം തിരഞ്ഞെടുക്കുക", gu: "એક વિષય પસંદ કરો", vi: "Chọn một chủ đề" },
  startPractice: { en: "Start Practice", ml: "പരിശീലനം ആരംഭിക്കുക", gu: "પ્રેક્ટિસ શરૂ કરો", vi: "Bắt đầu luyện tập" },
  startReview: { en: "Start Review", ml: "പരിശോധന ആരംഭിക്കുക", gu: "સમીક્ષા શરૂ કરો", vi: "Bắt đầu ôn tập" },
  attempted: { en: "Attempted", ml: "ശ്രമിച്ചത്", gu: "પ્રયત્ન કર્યા", vi: "Đã làm" },
  score: { en: "Score", ml: "സ്കോർ", gu: "સ્કોર", vi: "Điểm" },
  missed: { en: "Missed", ml: "തെറ്റിയത്", gu: "ચૂક્યા", vi: "Sai" },
  noMistakes: { en: "No Mistakes!", ml: "തെറ്റുകൾ ഇല്ല!", gu: "કોઈ ભૂલો નથી!", vi: "Không có lỗi sai!" },
  noMistakesDesc: {
    en: "You haven't missed any questions! Wonderful!",
    ml: "ഒരു ചോദ്യവും തെറ്റിയിട്ടില്ല! വളരെ നന്നായി!",
    gu: "તમે કોઈ પ્રશ્ન ચૂક્યા નથી! અદ્ભુત!",
    vi: "Bạn chưa trả lời sai câu nào! Tuyệt vời!",
  },
  clearConfirm: {
    en: "Are you sure you want to clear all mistakes?",
    ml: "എല്ലാ തെറ്റുകളും മായ്ക്കണമെന്ന് ഉറപ്പാണോ?",
    gu: "શું તમે ખરેખર બધી ભૂલો સાફ કરવા માંગો છો?",
    vi: "Bạn có chắc muốn xóa tất cả lỗi sai không?",
  },
  yes: { en: "Yes", ml: "അതെ", gu: "હા", vi: "Có" },
  no: { en: "No", ml: "അല്ല", gu: "ના", vi: "Không" },
  cancel: { en: "Cancel", ml: "റദ്ദാക്കുക", gu: "રદ કરો", vi: "Hủy" },
  quizComplete: { en: "Quiz Complete!", ml: "ക്വിസ് പൂർത്തിയായി!", gu: "ક્વિઝ પૂરી થઈ!", vi: "Hoàn thành bài kiểm tra!" },
  quizCompleteDesc: {
    en: "Well done! Keep practicing to master all the questions.",
    ml: "നന്നായി! എല്ലാ ചോദ്യങ്ങളും പഠിക്കാൻ പരിശീലനം തുടരുക.",
    gu: "શાબાશ! બધા પ્રશ્નો નિપુણ કરવા માટે પ્રેક્ટિસ ચાલુ રાખો.",
    vi: "Giỏi lắm! Hãy tiếp tục luyện tập để nắm vững tất cả câu hỏi.",
  },
  tryAgain: { en: "Try Again", ml: "വീണ്ടും ശ്രമിക്കുക", gu: "ફરી પ્રયત્ન કરો", vi: "Thử lại" },
  goHome: { en: "Go Home", ml: "ഹോം പേജിലേക്ക്", gu: "હોમ પર જાઓ", vi: "Về trang chủ" },
  questionOf: { en: "Question", ml: "ചോദ്യം", gu: "પ્રશ્ન", vi: "Câu hỏi" },
  wellDone: { en: "Excellent work!", ml: "അടിപൊളി!", gu: "ઉત્તમ કામ!", vi: "Xuất sắc!" },
  keepTrying: {
    en: "Keep going! You're learning!",
    ml: "തുടരൂ! പഠിച്ചുകൊണ്ടിരിക്കുന്നു!",
    gu: "ચાલુ રાખો! તમે શીખી રહ્યા છો!",
    vi: "Tiếp tục nào! Bạn đang tiến bộ!",
  },
  speechUnavailable: {
    en: "Text-to-speech not available on this device",
    ml: "ഈ ഉപകരണത്തിൽ ടെക്സ്റ്റ്-ടു-സ്പീച്ച് ലഭ്യമല്ല",
    gu: "આ ઉપકરણ પર ટેક્સ્ટ-ટુ-સ્પીચ ઉપલબ્ધ નથી",
    vi: "Chuyển văn bản thành giọng nói không khả dụng trên thiết bị này",
  },
  noQuestions: { en: "No Questions", ml: "ചോദ്യങ്ങൾ ഇല്ല", gu: "કોઈ પ્રશ્નો નથી", vi: "Không có câu hỏi" },
  noQuestionsDesc: {
    en: "No questions available for this selection.",
    ml: "ഈ തിരഞ്ഞെടുപ്പിന് ചോദ്യങ്ങൾ ലഭ്യമല്ല.",
    gu: "આ પસંદગી માટે કોઈ પ્રશ્નો ઉપલબ્ધ નથી.",
    vi: "Không có câu hỏi nào cho lựa chọn này.",
  },
  progress: { en: "Progress", ml: "പുരോഗതി", gu: "પ્રગતિ", vi: "Tiến độ" },
  greeting: {
    en: "Welcome to For Our Parents!",
    ml: "നമ്മുടെ മാതാപിതാക്കൾക്കായി-ലേക്ക് സ്വാഗതം!",
    gu: "આપણા માતાપિતા માટેમાં આપનું સ્વાગત છે!",
    vi: "Chào mừng đến với For Our Parents!",
  },
  homeSubtitle: {
    en: "Let's practice for the civics test together",
    ml: "നമുക്ക് ഒരുമിച്ച് സിവിക്സ് ടെസ്റ്റിന് പഠിക്കാം",
    gu: "ચાલો સાથે મળીને સિવિક્સ ટેસ્ટની પ્રેક્ટિસ કરીએ",
    vi: "Cùng nhau ôn thi công dân nhé",
  },
  homeHelp: {
    en: "Tap a button below to start studying. You can do this!",
    ml: "തുടങ്ങാൻ താഴെയുള്ള ഒരു ബട്ടൺ അമർത്തൂ. നിങ്ങൾക്ക് ഇത് കഴിയും!",
    gu: "અભ્યાસ શરૂ કરવા નીચે એક બટન દબાવો. તમે આ કરી શકો છો!",
    vi: "Nhấn nút bên dưới để bắt đầu học. Bạn làm được!",
  },
  quizEncourage: {
    en: "You're doing great! Take your time.",
    ml: "നന്നായി പോകുന്നു! സമയം എടുത്തോളൂ.",
    gu: "તમે સરસ કરી રહ્યા છો! તમારો સમય લો.",
    vi: "Bạn đang làm rất tốt! Cứ từ từ nhé.",
  },
  practiceEncourage: {
    en: "Think carefully and then see the answer.",
    ml: "നന്നായി ആലോചിക്കൂ, എന്നിട്ട് ഉത്തരം നോക്കൂ.",
    gu: "ધ્યાનથી વિચારો, પછી જવાબ જુઓ.",
    vi: "Suy nghĩ kỹ rồi xem đáp án nhé.",
  },
  mistakesEncourage: {
    en: "Don't worry! Mistakes help us learn.",
    ml: "വിഷമിക്കേണ്ട! തെറ്റുകൾ പഠിക്കാൻ സഹായിക്കും.",
    gu: "ચિંતા ન કરો! ભૂલો શીખવામાં મદદ કરે છે.",
    vi: "Đừng lo! Sai lầm giúp chúng ta học hỏi.",
  },
  greatScore: {
    en: "Amazing! You're almost ready!",
    ml: "ഗംഭീരം! ഏകദേശം തയ്യാറായി!",
    gu: "અદ્ભુત! તમે લગભગ તૈયાર છો!",
    vi: "Tuyệt vời! Bạn gần sẵn sàng rồi!",
  },
  goodScore: {
    en: "Good effort! Let's try again!",
    ml: "നല്ല ശ്രമം! നമുക്ക് വീണ്ടും ശ്രമിക്കാം!",
    gu: "સારો પ્રયત્ન! ચાલો ફરી પ્રયત્ન કરીએ!",
    vi: "Cố gắng tốt! Thử lại nhé!",
  },
  practiceSelectHelp: {
    en: "Pick a topic you'd like to study.",
    ml: "പഠിക്കാൻ ആഗ്രഹിക്കുന്ന വിഷയം തിരഞ്ഞെടുക്കൂ.",
    gu: "તમે જે વિષય ભણવા માંગો છો તે પસંદ કરો.",
    vi: "Chọn một chủ đề bạn muốn học.",
  },
  login: { en: "Login", ml: "ലോഗിൻ", gu: "લોગિન", vi: "Đăng nhập" },
  enterPin: {
    en: "Enter your 4-digit PIN",
    ml: "നിങ്ങളുടെ 4 അക്ക പിൻ നമ്പർ നൽകുക",
    gu: "તમારો 4 અંકનો PIN દાખલ કરો",
    vi: "Nhập mã PIN 4 chữ số",
  },
  pinPlaceholder: { en: "Enter PIN", ml: "പിൻ നൽകുക", gu: "PIN દાખલ કરો", vi: "Nhập PIN" },
  loginButton: { en: "Start Learning", ml: "പഠനം ആരംഭിക്കുക", gu: "શીખવાનું શરૂ કરો", vi: "Bắt đầu học" },
  loginError: {
    en: "Email or PIN is incorrect. Please try again.",
    ml: "ഇ-മെയിൽ അല്ലെങ്കിൽ PIN തെറ്റാണ്. വീണ്ടും ശ്രമിക്കുക.",
    gu: "ઇ-મેઇલ અથવા PIN ખોટું છે. કૃપા કરીને ફરી પ્રયત્ન કરો.",
    vi: "Email hoặc mã PIN không đúng. Vui lòng thử lại.",
  },
  loginWelcome: {
    en: "Welcome back!",
    ml: "വീണ്ടും സ്വാഗതം!",
    gu: "ફરી આપનું સ્વાગત છે!",
    vi: "Chào mừng trở lại!",
  },
  dashboard: { en: "My Progress", ml: "എന്റെ പുരോഗതി", gu: "મારી પ્રગતિ", vi: "Tiến độ của tôi" },
  viewDashboard: { en: "View Progress", ml: "പുരോഗതി കാണുക", gu: "પ્રગતિ જુઓ", vi: "Xem tiến độ" },
  recentScores: { en: "Recent Scores", ml: "സമീപകാല സ്കോറുകൾ", gu: "તાજેતરના સ્કોર", vi: "Điểm gần đây" },
  averageScore: { en: "Average Score", ml: "ശരാശരി സ്കോർ", gu: "સરેરાશ સ્કોર", vi: "Điểm trung bình" },
  totalAttempts: { en: "Total Attempts", ml: "മൊത്തം ശ്രമങ്ങൾ", gu: "કુલ પ્રયત્નો", vi: "Tổng số lần làm" },
  improvementTip: {
    en: "Keep practicing! You're getting better every day.",
    ml: "പരിശീലനം തുടരൂ! നിങ്ങൾ ദിവസവും മെച്ചപ്പെടുന്നു.",
    gu: "પ્રેક્ટિસ ચાલુ રાખો! તમે દરરોજ સુધરી રહ્યા છો.",
    vi: "Hãy tiếp tục luyện tập! Bạn đang tiến bộ mỗi ngày.",
  },
  logout: { en: "Logout", ml: "ലോഗ് ഔട്ട്", gu: "લોગઆઉટ", vi: "Đăng xuất" },
  pleaseLogin: {
    en: "Please login to continue",
    ml: "തുടരാൻ ലോഗിൻ ചെയ്യുക",
    gu: "ચાલુ રાખવા લોગિન કરો",
    vi: "Vui lòng đăng nhập để tiếp tục",
  },
  eligibility: {
    en: "Am I Eligible?",
    ml: "ഞാൻ യോഗ്യനാണോ?",
    gu: "શું હું લાયક છું?",
    vi: "Tôi có đủ điều kiện không?",
  },
  signup: { en: "Sign Up", ml: "സൈൻ അപ്പ്", gu: "સાઇન અપ", vi: "Đăng ký" },
  signupButton: { en: "Create Account", ml: "അക്കൗണ്ട് സൃഷ്ടിക്കുക", gu: "એકાઉન્ટ બનાવો", vi: "Tạo tài khoản" },
  namePlaceholder: { en: "Your name", ml: "നിങ്ങളുടെ പേര്", gu: "તમારું નામ", vi: "Tên của bạn" },
  enterName: {
    en: "Enter your name",
    ml: "നിങ്ങളുടെ പേര് നൽകുക",
    gu: "તમારું નામ દાખલ કરો",
    vi: "Nhập tên của bạn",
  },
  signupSuccess: {
    en: "Account created! You can now log in.",
    ml: "അക്കൗണ്ട് സൃഷ്ടിച്ചു! ഇപ്പോൾ ലോഗിൻ ചെയ്യാം.",
    gu: "એકાઉન્ટ બનાવ્યું! હવે તમે લોગિન કરી શકો છો.",
    vi: "Đã tạo tài khoản! Bạn có thể đăng nhập ngay.",
  },
  signupError: {
    en: "Could not create account. Please try again.",
    ml: "അക്കൗണ്ട് സൃഷ്ടിക്കാനായില്ല. വീണ്ടും ശ്രമിക്കുക.",
    gu: "એકાઉન્ટ બનાવી શકાયું નહીં. કૃપા કરીને ફરી પ્રયત્ન કરો.",
    vi: "Không thể tạo tài khoản. Vui lòng thử lại.",
  },
  alreadyHaveAccount: {
    en: "Already have an account?",
    ml: "ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?",
    gu: "પહેલેથી એકાઉન્ટ છે?",
    vi: "Đã có tài khoản?",
  },
  needAccount: {
    en: "Need an account?",
    ml: "ഒരു അക്കൗണ്ട് വേണോ?",
    gu: "એકાઉન્ટ જોઈએ છે?",
    vi: "Cần tạo tài khoản?",
  },
  orDivider: { en: "or", ml: "അല്ലെങ്കിൽ", gu: "અથવા", vi: "hoặc" },
  heroTagline: {
    en: "Pass Your Civics Test — In Your Language",
    ml: "സിവിക്സ് ടെസ്റ്റ് പാസാക്കൂ — മലയാളത്തിൽ",
    gu: "તમારી સિવિક્સ ટેસ્ટ પાસ કરો — ગુજરાતીમાં",
    vi: "Đậu bài thi công dân — Bằng tiếng Việt",
  },
  heroDescription: {
    en: "Free bilingual study tool for Malayalam-speaking elders preparing for U.S. citizenship.",
    ml: "യു.എസ്. പൗരത്വത്തിന് തയ്യാറെടുക്കുന്ന മലയാളം സംസാരിക്കുന്ന മുതിർന്നവർക്കുള്ള സൗജന്യ ദ്വിഭാഷാ പഠന ഉപകരണം.",
    gu: "U.S. નાગરિકતા માટે તૈયારી કરતા વડીલો માટે મફત અભ્યાસ સાધન.",
    vi: "Công cụ học miễn phí dành cho người lớn tuổi chuẩn bị thi quốc tịch Mỹ.",
  },
  firstName: { en: "First Name", ml: "പ്രഥമ നാമം", gu: "પ્રથમ નામ", vi: "Tên" },
  lastName: { en: "Last Name", ml: "കുടുംബ നാമം", gu: "અટક", vi: "Họ" },
  email: { en: "Email Address", ml: "ഇമെയിൽ വിലാസം", gu: "ઇમેઇલ સરનામું", vi: "Địa chỉ email" },
  phone: { en: "Phone Number (optional)", ml: "ഫോൺ നമ്പർ (ഐച്ഛികം)", gu: "ફોન નંબર (વૈકલ્પિક)", vi: "Số điện thoại (không bắt buộc)" },
  enterFirstName: { en: "Enter your first name", ml: "നിങ്ങളുടെ പ്രഥമ നാമം നൽകുക", gu: "તમારું પ્રથમ નામ દાખલ કરો", vi: "Nhập tên của bạn" },
  enterLastName: { en: "Enter your last name", ml: "നിങ്ങളുടെ കുടുംബ നാമം നൽകുക", gu: "તમારી અટક દાખલ કરો", vi: "Nhập họ của bạn" },
  enterEmail: { en: "Enter your email address", ml: "നിങ്ങളുടെ ഇമെയിൽ വിലാസം നൽകുക", gu: "તમારું ઇમેઇલ સરનામું દાખલ કરો", vi: "Nhập địa chỉ email" },
  enterPhone: { en: "e.g. (555) 123-4567", ml: "ഉദാ. (555) 123-4567", gu: "દા.ત. (555) 123-4567", vi: "VD: (555) 123-4567" },
  loginEmailLabel: { en: "Enter your email", ml: "നിങ്ങളുടെ ഇമെയിൽ നൽകുക", gu: "તમારું ઇમેઇલ દાખલ કરો", vi: "Nhập email của bạn" },
  state: { en: "State", ml: "സംസ്ഥാനം", gu: "રાજ્ય", vi: "Tiểu bang" },
  selectState: { en: "Select your state", ml: "നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക", gu: "તમારું રાજ્ય પસંદ કરો", vi: "Chọn tiểu bang của bạn" },
  congressionalDistrict: { en: "Congressional District", ml: "കോൺഗ്രഷണൽ ജില്ല", gu: "કોંગ્રેશનલ ડિસ્ટ્રિક્ટ", vi: "Khu vực quốc hội" },
  selectDistrict: { en: "Select your district", ml: "നിങ്ങളുടെ ജില്ല തിരഞ്ഞെടുക്കുക", gu: "તમારો ડિસ્ટ્રિક્ટ પસંદ કરો", vi: "Chọn khu vực của bạn" },
  findYourDistrict: { en: "Don't know your district? Find it here →", ml: "നിങ്ങളുടെ ജില്ല അറിയില്ലേ? ഇവിടെ കണ്ടെത്തുക →", gu: "તમારો ડિસ્ટ્રિક્ટ ખબર નથી? અહીં શોધો →", vi: "Không biết khu vực của bạn? Tìm ở đây →" },
  atLargeDistrict: { en: "At-Large (entire state)", ml: "മുഴുവൻ സംസ്ഥാനം", gu: "સમગ્ર રાજ્ય", vi: "Toàn tiểu bang" },
};

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}
