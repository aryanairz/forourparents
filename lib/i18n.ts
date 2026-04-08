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
  | "startQuiz"
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
  | "atLargeDistrict"
  | "landingHero"
  | "landingGetStarted"
  | "landingAlreadyHave"
  | "landingFreeTitle"
  | "landingFreeDesc"
  | "landingLangTitle"
  | "landingLangDesc"
  | "landingBuiltTitle"
  | "landingBuiltDesc"
  | "landingTryTitle"
  | "landingTryDesc"
  | "landingTrySample"
  | "landingCtaTitle"
  | "landingCtaFree"
  | "landingFooter"
  | "landingFooterSub";

export const translations: Record<TranslationKey, Record<Lang, string>> = {
  appName: {
    en: "For Our Parents",
    ml: "നമ്മുടെ മാതാപിതാക്കൾക്കായി",
    gu: "આપણા માતાપિતા માટે",
    vi: "Vì Cha Mẹ Chúng Ta",
    tl: "Para sa Ating mga Magulang",
  },
  home: { en: "Home", ml: "ഹോം", gu: "હોમ", vi: "Trang chủ", tl: "Home" },
  back: { en: "Back", ml: "പിന്നോട്ട്", gu: "પાછા", vi: "Quay lại", tl: "Bumalik" },
  next: { en: "Next", ml: "അടുത്തത്", gu: "આગળ", vi: "Tiếp", tl: "Susunod" },
  start: { en: "Start", ml: "ആരംഭിക്കുക", gu: "શરૂ કરો", vi: "Bắt đầu", tl: "Simulan" },
  practice: { en: "Practice", ml: "പരിശീലനം", gu: "પ્રેક્ટિસ", vi: "Luyện tập", tl: "Magsanay" },
  askQuestions: { en: "Ask Questions", ml: "ചോദ്യങ്ങൾ ചോദിക്കുക", gu: "પ્રશ્નો પૂછો", vi: "Đặt câu hỏi", tl: "Magtanong" },
  reviewMistakes: { en: "Review Mistakes", ml: "തെറ്റുകൾ പരിശോധിക്കുക", gu: "ભૂલો તપાસો", vi: "Xem lại lỗi sai", tl: "Suriin ang mga Pagkakamali" },
  clearMistakes: { en: "Clear Mistakes", ml: "തെറ്റുകൾ മായ്ക്കുക", gu: "ભૂલો સાફ કરો", vi: "Xóa lỗi sai", tl: "Burahin ang mga Pagkakamali" },
  correct: { en: "Correct!", ml: "ശരി!", gu: "સાચું!", vi: "Đúng!", tl: "Tama!" },
  incorrect: { en: "Incorrect", ml: "തെറ്റ്", gu: "ખોટું", vi: "Sai", tl: "Mali" },
  explanation: { en: "Explanation", ml: "വിശദീകരണം", gu: "સમજૂતી", vi: "Giải thích", tl: "Paliwanag" },
  showAnswer: { en: "Show Answer", ml: "ഉത്തരം കാണിക്കുക", gu: "જવાબ બતાવો", vi: "Xem đáp án", tl: "Ipakita ang Sagot" },
  iGotIt: { en: "I got it ✓", ml: "എനിക്ക് കിട്ടി ✓", gu: "મને આવડ્યું ✓", vi: "Tôi đúng ✓", tl: "Tama ako ✓" },
  iMissedIt: { en: "I missed it ✗", ml: "എനിക്ക് കിട്ടിയില്ല ✗", gu: "મારાથી ચૂકાયું ✗", vi: "Tôi sai ✗", tl: "Mali ako ✗" },
  topic: { en: "Topic", ml: "വിഷയം", gu: "વિષય", vi: "Chủ đề", tl: "Paksa" },
  allTopics: { en: "All Topics", ml: "എല്ലാ വിഷയങ്ങളും", gu: "બધા વિષયો", vi: "Tất cả chủ đề", tl: "Lahat ng Paksa" },
  readAloud: { en: "Read Aloud 🔊", ml: "ഉറക്കെ വായിക്കുക 🔊", gu: "મોટેથી વાંચો 🔊", vi: "Đọc to 🔊", tl: "Basahin nang Malakas 🔊" },
  language: { en: "Language", ml: "ഭാഷ", gu: "ભાષા", vi: "Ngôn ngữ", tl: "Wika" },
  quizMode: { en: "Quiz Mode", ml: "ക്വിസ് മോഡ്", gu: "ક્વિઝ મોડ", vi: "Chế độ kiểm tra", tl: "Mode ng Pagsusulit" },
  practiceMode: { en: "Practice Mode", ml: "പരിശീലന മോഡ്", gu: "પ્રેક્ટિસ મોડ", vi: "Chế độ luyện tập", tl: "Mode ng Pagsasanay" },
  selectTopic: { en: "Select a Topic", ml: "ഒരു വിഷയം തിരഞ്ഞെടുക്കുക", gu: "એક વિષય પસંદ કરો", vi: "Chọn một chủ đề", tl: "Pumili ng Paksa" },
  startPractice: { en: "Start Practice", ml: "പരിശീലനം ആരംഭിക്കുക", gu: "પ્રેક્ટિસ શરૂ કરો", vi: "Bắt đầu luyện tập", tl: "Simulan ang Pagsasanay" },
  startQuiz: { en: "Start Quiz", ml: "ക്വിസ് ആരംഭിക്കുക", gu: "ક્વિઝ શરૂ કરો", vi: "Bắt đầu kiểm tra", tl: "Simulan ang Pagsusulit" },
  startReview: { en: "Start Review", ml: "പരിശോധന ആരംഭിക്കുക", gu: "સમીક્ષા શરૂ કરો", vi: "Bắt đầu ôn tập", tl: "Simulan ang Pagsusuri" },
  attempted: { en: "Attempted", ml: "ശ്രമിച്ചത്", gu: "પ્રયત્ન કર્યા", vi: "Đã làm", tl: "Sinubukan" },
  score: { en: "Score", ml: "സ്കോർ", gu: "સ્કોર", vi: "Điểm", tl: "Marka" },
  missed: { en: "Missed", ml: "തെറ്റിയത്", gu: "ચૂક્યા", vi: "Sai", tl: "Mali" },
  noMistakes: { en: "No Mistakes!", ml: "തെറ്റുകൾ ഇല്ല!", gu: "કોઈ ભૂલો નથી!", vi: "Không có lỗi sai!", tl: "Walang Pagkakamali!" },
  noMistakesDesc: {
    en: "You haven't missed any questions! Wonderful!",
    ml: "ഒരു ചോദ്യവും തെറ്റിയിട്ടില്ല! വളരെ നന്നായി!",
    gu: "તમે કોઈ પ્રશ્ન ચૂક્યા નથી! અદ્ભુત!",
    vi: "Bạn chưa trả lời sai câu nào! Tuyệt vời!",
    tl: "Wala kang namaling tanong! Kahanga-hanga!",
  },
  clearConfirm: {
    en: "Are you sure you want to clear all mistakes?",
    ml: "എല്ലാ തെറ്റുകളും മായ്ക്കണമെന്ന് ഉറപ്പാണോ?",
    gu: "શું તમે ખરેખર બધી ભૂલો સાફ કરવા માંગો છો?",
    vi: "Bạn có chắc muốn xóa tất cả lỗi sai không?",
    tl: "Sigurado ka bang gusto mong burahin lahat ng pagkakamali?",
  },
  yes: { en: "Yes", ml: "അതെ", gu: "હા", vi: "Có", tl: "Oo" },
  no: { en: "No", ml: "അല്ല", gu: "ના", vi: "Không", tl: "Hindi" },
  cancel: { en: "Cancel", ml: "റദ്ദാക്കുക", gu: "રદ કરો", vi: "Hủy", tl: "Kanselahin" },
  quizComplete: { en: "Quiz Complete!", ml: "ക്വിസ് പൂർത്തിയായി!", gu: "ક્વિઝ પૂરી થઈ!", vi: "Hoàn thành bài kiểm tra!", tl: "Tapos na ang Pagsusulit!" },
  quizCompleteDesc: {
    en: "Well done! Keep practicing to master all the questions.",
    ml: "നന്നായി! എല്ലാ ചോദ്യങ്ങളും പഠിക്കാൻ പരിശീലനം തുടരുക.",
    gu: "શાબાશ! બધા પ્રશ્નો નિપુણ કરવા માટે પ્રેક્ટિસ ચાલુ રાખો.",
    vi: "Giỏi lắm! Hãy tiếp tục luyện tập để nắm vững tất cả câu hỏi.",
    tl: "Magaling! Patuloy na magsanay para ma-master ang lahat ng tanong.",
  },
  tryAgain: { en: "Try Again", ml: "വീണ്ടും ശ്രമിക്കുക", gu: "ફરી પ્રયત્ન કરો", vi: "Thử lại", tl: "Subukan Muli" },
  goHome: { en: "Go Home", ml: "ഹോം പേജിലേക്ക്", gu: "હોમ પર જાઓ", vi: "Về trang chủ", tl: "Pumunta sa Home" },
  questionOf: { en: "Question", ml: "ചോദ്യം", gu: "પ્રશ્ન", vi: "Câu hỏi", tl: "Tanong" },
  wellDone: { en: "Excellent work!", ml: "അടിപൊളി!", gu: "ઉત્તમ કામ!", vi: "Xuất sắc!", tl: "Napakahusay!" },
  keepTrying: {
    en: "Keep going! You're learning!",
    ml: "തുടരൂ! പഠിച്ചുകൊണ്ടിരിക്കുന്നു!",
    gu: "ચાલુ રાખો! તમે શીખી રહ્યા છો!",
    vi: "Tiếp tục nào! Bạn đang tiến bộ!",
    tl: "Ituloy mo! Natututo ka na!",
  },
  speechUnavailable: {
    en: "Text-to-speech not available on this device",
    ml: "ഈ ഉപകരണത്തിൽ ടെക്സ്റ്റ്-ടു-സ്പീച്ച് ലഭ്യമല്ല",
    gu: "આ ઉપકરણ પર ટેક્સ્ટ-ટુ-સ્પીચ ઉપલબ્ધ નથી",
    vi: "Chuyển văn bản thành giọng nói không khả dụng trên thiết bị này",
    tl: "Hindi available ang text-to-speech sa device na ito",
  },
  noQuestions: { en: "No Questions", ml: "ചോദ്യങ്ങൾ ഇല്ല", gu: "કોઈ પ્રશ્નો નથી", vi: "Không có câu hỏi", tl: "Walang Tanong" },
  noQuestionsDesc: {
    en: "No questions available for this selection.",
    ml: "ഈ തിരഞ്ഞെടുപ്പിന് ചോദ്യങ്ങൾ ലഭ്യമല്ല.",
    gu: "આ પસંદગી માટે કોઈ પ્રશ્નો ઉપલબ્ધ નથી.",
    vi: "Không có câu hỏi nào cho lựa chọn này.",
    tl: "Walang available na tanong para sa pinili mo.",
  },
  progress: { en: "Progress", ml: "പുരോഗതി", gu: "પ્રગતિ", vi: "Tiến độ", tl: "Progreso" },
  greeting: {
    en: "Welcome to For Our Parents!",
    ml: "നമ്മുടെ മാതാപിതാക്കൾക്കായി-ലേക്ക് സ്വാഗതം!",
    gu: "આपણા मातापिता माटेमां आपनुं स्वागत छे!",
    vi: "Chào mừng đến với For Our Parents!",
    tl: "Maligayang pagdating sa For Our Parents!",
  },
  homeSubtitle: {
    en: "Let's practice for the civics test together",
    ml: "നമുക്ക് ഒരുമിച്ച് സിവിക്സ് ടെസ്റ്റിന് പഠിക്കാം",
    gu: "ચાલો સાથે મળીને સિવિક્સ ટેસ્ટની પ્રેક્ટિસ કરીએ",
    vi: "Cùng nhau ôn thi công dân nhé",
    tl: "Magsanay tayo para sa civics test",
  },
  homeHelp: {
    en: "Tap a button below to start studying. You can do this!",
    ml: "തുടങ്ങാൻ താഴെയുള്ള ഒരു ബട്ടൺ അമർത്തൂ. നിങ്ങൾക്ക് ഇത് കഴിയും!",
    gu: "અભ્યાસ શરૂ કરવા નીચે એક બટન દબાવો. તમે આ કરી શકો છો!",
    vi: "Nhấn nút bên dưới để bắt đầu học. Bạn làm được!",
    tl: "Pindutin ang button sa ibaba para magsimulang mag-aral. Kaya mo ito!",
  },
  quizEncourage: {
    en: "You're doing great! Take your time.",
    ml: "നന്നായി പോകുന്നു! സമയം എടുത്തോളൂ.",
    gu: "તમે સરસ કરી રહ્યા છો! તમારો સમય લો.",
    vi: "Bạn đang làm rất tốt! Cứ từ từ nhé.",
    tl: "Magaling ka! Huwag magmadali.",
  },
  practiceEncourage: {
    en: "Think carefully and then see the answer.",
    ml: "നന്നായി ആലോചിക്കൂ, എന്നിട്ട് ഉത്തരം നോക്കൂ.",
    gu: "ધ્યાનથી વિચારો, પછી જવાબ જુઓ.",
    vi: "Suy nghĩ kỹ rồi xem đáp án nhé.",
    tl: "Mag-isip mabuti at pagkatapos tingnan ang sagot.",
  },
  mistakesEncourage: {
    en: "Don't worry! Mistakes help us learn.",
    ml: "വിഷമിക്കേണ്ട! തെറ്റുകൾ പഠിക്കാൻ സഹായിക്കും.",
    gu: "ચિંતા ન કરો! ભૂલો શીખવામાં મદદ કરે છે.",
    vi: "Đừng lo! Sai lầm giúp chúng ta học hỏi.",
    tl: "Huwag mag-alala! Ang mga pagkakamali ay nakakatulong sa pagkatuto.",
  },
  greatScore: {
    en: "Amazing! You're almost ready!",
    ml: "ഗംഭീരം! ഏകദേശം തയ്യാറായി!",
    gu: "અદ્ભુત! તમે લગભગ તૈયાર છો!",
    vi: "Tuyệt vời! Bạn gần sẵn sàng rồi!",
    tl: "Kahanga-hanga! Halos handa ka na!",
  },
  goodScore: {
    en: "Good effort! Let's try again!",
    ml: "നല്ല ശ്രമം! നമുക്ക് വീണ്ടും ശ്രമിക്കാം!",
    gu: "સારો પ્રયત્ન! ચાલો ફરી પ્રયત્ન કરીએ!",
    vi: "Cố gắng tốt! Thử lại nhé!",
    tl: "Magandang pagsubok! Subukan natin muli!",
  },
  practiceSelectHelp: {
    en: "Pick a topic you'd like to study.",
    ml: "പഠിക്കാൻ ആഗ്രഹിക്കുന്ന വിഷയം തിരഞ്ഞെടുക്കൂ.",
    gu: "તમે જે વિષય ભણવા માંગો છો તે પસંદ કરો.",
    vi: "Chọn một chủ đề bạn muốn học.",
    tl: "Pumili ng paksang gusto mong pag-aralan.",
  },
  login: { en: "Login", ml: "ലോഗിൻ", gu: "લોગિન", vi: "Đăng nhập", tl: "Mag-login" },
  enterPin: {
    en: "Enter your 4-digit PIN",
    ml: "നിങ്ങളുടെ 4 അക്ക പിൻ നമ്പർ നൽകുക",
    gu: "તમારો 4 અંકનો PIN દાખલ કરો",
    vi: "Nhập mã PIN 4 chữ số",
    tl: "Ilagay ang iyong 4-digit na PIN",
  },
  pinPlaceholder: { en: "Enter PIN", ml: "പിൻ നൽകുക", gu: "PIN દાખલ કરો", vi: "Nhập PIN", tl: "Ilagay ang PIN" },
  loginButton: { en: "Start Learning", ml: "പഠനം ആരംഭിക്കുക", gu: "શીખવાનું શરૂ કરો", vi: "Bắt đầu học", tl: "Magsimulang Matuto" },
  loginError: {
    en: "Email or PIN is incorrect. Please try again.",
    ml: "ഇ-മെയിൽ അല്ലെങ്കിൽ PIN തെറ്റാണ്. വീണ്ടും ശ്രമിക്കുക.",
    gu: "ઇ-મેઇલ અથવા PIN ખોટું છે. કૃપા કરીને ફરી પ્રયત્ન કરો.",
    vi: "Email hoặc mã PIN không đúng. Vui lòng thử lại.",
    tl: "Mali ang email o PIN. Mangyaring subukan muli.",
  },
  loginWelcome: {
    en: "Welcome back!",
    ml: "വീണ്ടും സ്വാഗതം!",
    gu: "ફરી આપનું સ્વાગત છે!",
    vi: "Chào mừng trở lại!",
    tl: "Maligayang pagbabalik!",
  },
  dashboard: { en: "My Progress", ml: "എന്റെ പുരോഗതി", gu: "મારી પ્રગતિ", vi: "Tiến độ của tôi", tl: "Aking Progreso" },
  viewDashboard: { en: "View Progress", ml: "പുരോഗതി കാണുക", gu: "પ્રગતિ જુઓ", vi: "Xem tiến độ", tl: "Tingnan ang Progreso" },
  recentScores: { en: "Recent Scores", ml: "സമീപകാല സ്കോറുകൾ", gu: "તાજેતરના સ્કોર", vi: "Điểm gần đây", tl: "Mga Kamakailang Marka" },
  averageScore: { en: "Average Score", ml: "ശരാശരി സ്കോർ", gu: "સરેરાશ સ્કોર", vi: "Điểm trung bình", tl: "Average na Marka" },
  totalAttempts: { en: "Total Attempts", ml: "മൊത്തം ശ്രമങ്ങൾ", gu: "કુલ પ્રયત્નો", vi: "Tổng số lần làm", tl: "Kabuuang Pagsubok" },
  improvementTip: {
    en: "Keep practicing! You're getting better every day.",
    ml: "പരിശീലനം തുടരൂ! നിങ്ങൾ ദിവസവും മെച്ചപ്പെടുന്നു.",
    gu: "પ્રેક્ટિસ ચાલુ રાખો! તમે દરરોજ સુધરી રહ્યા છો.",
    vi: "Hãy tiếp tục luyện tập! Bạn đang tiến bộ mỗi ngày.",
    tl: "Patuloy na magsanay! Bumubuti ka araw-araw.",
  },
  logout: { en: "Logout", ml: "ലോഗ് ഔട്ട്", gu: "લોગઆઉટ", vi: "Đăng xuất", tl: "Mag-logout" },
  pleaseLogin: {
    en: "Please login to continue",
    ml: "തുടരാൻ ലോഗിൻ ചെയ്യുക",
    gu: "ચાલુ રાખવા લોગિન કરો",
    vi: "Vui lòng đăng nhập để tiếp tục",
    tl: "Mangyaring mag-login para magpatuloy",
  },
  eligibility: {
    en: "Am I Eligible?",
    ml: "ഞാൻ യോഗ്യനാണോ?",
    gu: "શું હું લાયક છું?",
    vi: "Tôi có đủ điều kiện không?",
    tl: "Kwalipikado ba ako?",
  },
  signup: { en: "Sign Up", ml: "സൈൻ അപ്പ്", gu: "સાઇન અપ", vi: "Đăng ký", tl: "Mag-sign Up" },
  signupButton: { en: "Create Account", ml: "അക്കൗണ്ട് സൃഷ്ടിക്കുക", gu: "એકાઉન્ટ બનાવો", vi: "Tạo tài khoản", tl: "Gumawa ng Account" },
  namePlaceholder: { en: "Your name", ml: "നിങ്ങളുടെ പേര്", gu: "તમારું નામ", vi: "Tên của bạn", tl: "Iyong pangalan" },
  enterName: {
    en: "Enter your name",
    ml: "നിങ്ങളുടെ പേര് നൽകുക",
    gu: "તમારું નામ દાખલ કરો",
    vi: "Nhập tên của bạn",
    tl: "Ilagay ang iyong pangalan",
  },
  signupSuccess: {
    en: "Account created! You can now log in.",
    ml: "അക്കൗണ്ട് സൃഷ്ടിച്ചു! ഇപ്പോൾ ലോഗിൻ ചെയ്യാം.",
    gu: "એકાઉન્ટ બનાવ્યું! હવે તમે લોગિન કરી શકો છો.",
    vi: "Đã tạo tài khoản! Bạn có thể đăng nhập ngay.",
    tl: "Nagawa na ang account! Maaari ka nang mag-login.",
  },
  signupError: {
    en: "Could not create account. Please try again.",
    ml: "അക്കൗണ്ട് സൃഷ്ടിക്കാനായില്ല. വീണ്ടും ശ്രമിക്കുക.",
    gu: "એકાઉન્ટ બનાવી શકાયું નહીં. કૃપા કરીને ફરી પ્રયત્ન કરો.",
    vi: "Không thể tạo tài khoản. Vui lòng thử lại.",
    tl: "Hindi nagawa ang account. Mangyaring subukan muli.",
  },
  alreadyHaveAccount: {
    en: "Already have an account?",
    ml: "ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?",
    gu: "પહેલેથી એકાઉન્ટ છે?",
    vi: "Đã có tài khoản?",
    tl: "Mayroon nang account?",
  },
  needAccount: {
    en: "Need an account?",
    ml: "ഒരു അക്കൗണ്ട് വേണോ?",
    gu: "એકાઉન્ટ જોઈએ છે?",
    vi: "Cần tạo tài khoản?",
    tl: "Kailangan ng account?",
  },
  orDivider: { en: "or", ml: "അല്ലെങ്കിൽ", gu: "અથવા", vi: "hoặc", tl: "o" },
  heroTagline: {
    en: "Pass Your Civics Test — In Your Language",
    ml: "സിവിക്സ് ടെസ്റ്റ് പാസാക്കൂ — മലയാളത്തിൽ",
    gu: "તમારી સિવિક્સ ટેસ્ટ પાસ કરો — ગુજરાતીમાં",
    vi: "Đậu bài thi công dân — Bằng tiếng Việt",
    tl: "Ipasa ang Civics Test — Sa Iyong Wika",
  },
  heroDescription: {
    en: "Free bilingual study tool for Malayalam-speaking elders preparing for U.S. citizenship.",
    ml: "യു.എസ്. പൗരത്വത്തിന് തയ്യാറെടുക്കുന്ന മലയാളം സംസാരിക്കുന്ന മുതിർന്നവർക്കുള്ള സൗജന്യ ദ്വിഭാഷാ പഠന ഉപകരണം.",
    gu: "U.S. નાગરિકતા માટે તૈયારી કરતા વડીલો માટે મફત અભ્યાસ સાધન.",
    vi: "Công cụ học miễn phí dành cho người lớn tuổi chuẩn bị thi quốc tịch Mỹ.",
    tl: "Libreng bilingual na kasangkapan sa pag-aaral para sa mga nakatatandang naghahanda para sa U.S. citizenship.",
  },
  firstName: { en: "First Name", ml: "പ്രഥമ നാമം", gu: "પ્રથમ નામ", vi: "Tên", tl: "Pangalan" },
  lastName: { en: "Last Name", ml: "കുടുംബ നാമം", gu: "અટક", vi: "Họ", tl: "Apelyido" },
  email: { en: "Email Address", ml: "ഇമെയിൽ വിലാസം", gu: "ઇમેઇલ સરનામું", vi: "Địa chỉ email", tl: "Email Address" },
  phone: { en: "Phone Number (optional)", ml: "ഫോൺ നമ്പർ (ഐച്ഛികം)", gu: "ફોન નંબર (વૈકલ્પિક)", vi: "Số điện thoại (không bắt buộc)", tl: "Numero ng Telepono (opsyonal)" },
  enterFirstName: { en: "Enter your first name", ml: "നിങ്ങളുടെ പ്രഥമ നാമം നൽകുക", gu: "તમારું પ્રથમ નામ દાખલ કરો", vi: "Nhập tên của bạn", tl: "Ilagay ang iyong pangalan" },
  enterLastName: { en: "Enter your last name", ml: "നിങ്ങളുടെ കുടുംബ നാമം നൽകുക", gu: "તમારી અટક દાખલ કરો", vi: "Nhập họ của bạn", tl: "Ilagay ang iyong apelyido" },
  enterEmail: { en: "Enter your email address", ml: "നിങ്ങളുടെ ഇമെയിൽ വിലാസം നൽകുക", gu: "તમારું ઇમેઇલ સરનામું દાખલ કરો", vi: "Nhập địa chỉ email", tl: "Ilagay ang iyong email address" },
  enterPhone: { en: "e.g. (555) 123-4567", ml: "ഉദാ. (555) 123-4567", gu: "દા.ત. (555) 123-4567", vi: "VD: (555) 123-4567", tl: "hal. (555) 123-4567" },
  loginEmailLabel: { en: "Enter your email", ml: "നിങ്ങളുടെ ഇമെയിൽ നൽകുക", gu: "તમારું ઇમેઇલ દાખલ કરો", vi: "Nhập email của bạn", tl: "Ilagay ang iyong email" },
  state: { en: "State", ml: "സംസ്ഥാനം", gu: "રાજ્ય", vi: "Tiểu bang", tl: "Estado" },
  selectState: { en: "Select your state", ml: "നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക", gu: "તમારું રાજ્ય પસંદ કરો", vi: "Chọn tiểu bang của bạn", tl: "Piliin ang iyong estado" },
  congressionalDistrict: { en: "Congressional District", ml: "കോൺഗ്രഷണൽ ജില്ല", gu: "કોંગ્રેશનલ ડિસ્ટ્રિક્ટ", vi: "Khu vực quốc hội", tl: "Distrito ng Kongreso" },
  selectDistrict: { en: "Select your district", ml: "നിങ്ങളുടെ ജില്ല തിരഞ്ഞെടുക്കുക", gu: "તમારો ડિસ્ટ્રિક્ટ પસંદ કરો", vi: "Chọn khu vực của bạn", tl: "Piliin ang iyong distrito" },
  findYourDistrict: { en: "Don't know your district? Find it here →", ml: "നിങ്ങളുടെ ജില്ല അറിയില്ലേ? ഇവിടെ കണ്ടെത്തുക →", gu: "તમારો ડિસ્ટ્રિક્ટ ખબર નથી? અહીં શોધો →", vi: "Không biết khu vực của bạn? Tìm ở đây →", tl: "Hindi mo alam ang iyong distrito? Hanapin dito →" },
  atLargeDistrict: { en: "At-Large (entire state)", ml: "മുഴുവൻ സംസ്ഥാനം", gu: "સમગ્ર રાજ્ય", vi: "Toàn tiểu bang", tl: "At-Large (buong estado)" },

  /* ── Landing Page ── */
  landingHero: {
    en: "The free, easy, and effective way to pass the citizenship test!",
    ml: "പൗരത്വ പരീക്ഷ വിജയിക്കാനുള്ള സൗജന്യവും എളുപ്പവും ഫലപ്രദവുമായ മാർഗ്ഗം!",
    gu: "નાગરિકતા ટેસ્ટ પાસ કરવાનો મફત, સરળ અને અસરકારક રસ્તો!",
    vi: "Cách miễn phí, dễ dàng và hiệu quả để đậu bài thi quốc tịch!",
    tl: "Ang libre, madali, at epektibong paraan para maipasa ang citizenship test!",
  },
  landingGetStarted: {
    en: "GET STARTED",
    ml: "ആരംഭിക്കുക",
    gu: "શરૂ કરો",
    vi: "BẮT ĐẦU",
    tl: "MAGSIMULA",
  },
  landingAlreadyHave: {
    en: "I ALREADY HAVE AN ACCOUNT",
    ml: "എനിക്ക് ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ട്",
    gu: "મારી પાસે પહેલેથી એકાઉન્ટ છે",
    vi: "TÔI ĐÃ CÓ TÀI KHOẢN",
    tl: "MAYROON NA AKONG ACCOUNT",
  },
  landingFreeTitle: {
    en: "Practice makes citizens.",
    ml: "പരിശീലനം പൗരന്മാരെ ഉണ്ടാക്കും.",
    gu: "પ્રેક્ટિસ નાગરિક બનાવે.",
    vi: "luyện tập tạo nên công dân.",
    tl: "Ang pagsasanay ang gumagawa ng mamamayan.",
  },
  landingFreeDesc: {
    en: "Preparing for the citizenship test doesn\u2019t have to be stressful. With quick practice sessions in your language, you\u2019ll build confidence and master every topic \u2014 completely free.",
    ml: "പൗരത്വ പരീക്ഷയ്ക്ക് തയ്യാറെടുക്കുന്നത് സമ്മർദ്ദമാകേണ്ട. നിങ്ങളുടെ ഭാഷയിൽ പെട്ടെന്നുള്ള പരിശീലനത്തിലൂടെ ആത്മവിശ്വാസം നേടൂ — തികച്ചും സൗജന്യം.",
    gu: "નાગરિકતા ટેસ્ટની તૈયારી તણાવપૂર્ણ હોવી જરૂરી નથી. તમારી ભાષામાં ઝડપી પ્રેક્ટિસ સાથે, દરેક વિષય — સંપૂર્ણપણે મફત.",
    vi: "Chuẩn bị cho bài thi quốc tịch không cần phải căng thẳng. Với các buổi luyện tập nhanh bằng ngôn ngữ của bạn — hoàn toàn miễn phí.",
    tl: "Hindi kailangang maging stressful ang paghahanda para sa citizenship test. Sa mabilis na pagsasanay sa iyong wika, magkakaroon ka ng tiwala at matututunan ang bawat paksa \u2014 ganap na libre.",
  },
  landingLangTitle: {
    en: "study in your language",
    ml: "നിങ്ങളുടെ ഭാഷയിൽ പഠിക്കുക",
    gu: "તમારી ભાષામાં અભ્યાસ કરો",
    vi: "học bằng ngôn ngữ của bạn",
    tl: "mag-aral sa iyong wika",
  },
  landingLangDesc: {
    en: "Available in English, Malayalam, Gujarati, Vietnamese, and Tagalog. Every question comes with audio so you can listen and learn \u2014 even if reading is difficult.",
    ml: "ഇംഗ്ലീഷ്, മലയാളം, ഗുജറാത്തി, വിയറ്റ്നാമീസ്, ടാഗലോഗ് ഭാഷകളിൽ ലഭ്യം. എല്ലാ ചോദ്യങ്ങൾക്കും ഓഡിയോ ഉണ്ട് — വായിക്കാൻ ബുദ്ധിമുട്ടാണെങ്കിലും.",
    gu: "અંગ્રેજી, મલયાલમ, ગુજરાતી, વિએતનામીસ અને ટાગાલોગમાં ઉપલબ્ધ. દરેક પ્રશ્ન ઑડિયો સાથે આવે છે — વાંચવું મુશ્કેલ હોય તો પણ.",
    vi: "Có sẵn bằng tiếng Anh, Malayalam, Gujarati, tiếng Việt và Tagalog. Mỗi câu hỏi đều có audio — kể cả khi bạn khó đọc.",
    tl: "Available sa English, Malayalam, Gujarati, Vietnamese, at Tagalog. Bawat tanong ay may audio para makinig at matuto ka \u2014 kahit mahirap magbasa.",
  },
  landingBuiltTitle: {
    en: "built for your parents",
    ml: "നിങ്ങളുടെ മാതാപിതാക്കൾക്കായി നിർമ്മിച്ചത്",
    gu: "તમારા માતાપિતા માટે બનાવેલ",
    vi: "xây dựng cho bố mẹ bạn",
    tl: "ginawa para sa iyong mga magulang",
  },
  landingBuiltDesc: {
    en: "Large text, simple navigation, and audio on every question. Designed for people aged 50+ who qualify for the 50/20, 55/15, or 65/20 citizenship exemptions. No English test required \u2014 just the civics test in your own language.",
    ml: "വലിയ ടെക്സ്റ്റ്, ലളിതമായ നാവിഗേഷൻ, ഓരോ ചോദ്യത്തിലും ഓഡിയോ. 50/20, 55/15, 65/20 ഇളവുകൾക്ക് യോഗ്യരായ 50+ പ്രായക്കാർക്കായി — ഇംഗ്ലീഷ് ടെസ്റ്റ് ആവശ്യമില്ല.",
    gu: "મોટું લખાણ, સરળ નેવિગેશન, દરેક પ્રશ્ન પર ઑડિયો. 50/20, 55/15, 65/20 છૂટ માટે લાયક 50+ ઉંમરના લોકો માટે — અંગ્રેજી ટેસ્ટ જરૂરી નથી.",
    vi: "Chữ lớn, điều hướng đơn giản, và audio cho mỗi câu hỏi. Thiết kế cho người 50+ tuổi đủ điều kiện miễn trừ 50/20, 55/15, hoặc 65/20 — không cần thi tiếng Anh.",
    tl: "Malaking teksto, simpleng navigation, at audio sa bawat tanong. Dinisenyo para sa mga taong 50+ na kwalipikado sa 50/20, 55/15, o 65/20 citizenship exemptions. Hindi kailangan ng English test \u2014 civics test lang sa sariling wika.",
  },
  landingTryTitle: {
    en: "Try it out",
    ml: "ഒന്ന് ശ്രമിച്ചുനോക്കൂ",
    gu: "અજમાવી જુઓ",
    vi: "Thử ngay",
    tl: "Subukan mo",
  },
  landingTryDesc: {
    en: "See what the citizenship test looks like.",
    ml: "പൗരത്വ പരീക്ഷ എങ്ങനെയുള്ളതെന്ന് കാണൂ.",
    gu: "નાગરિકતા ટેસ્ટ કેવી દેખાય છે તે જુઓ.",
    vi: "Xem bài thi quốc tịch trông như thế nào.",
    tl: "Tingnan kung ano ang hitsura ng citizenship test.",
  },
  landingTrySample: {
    en: "This is a sample. Sign up for all 128 official USCIS questions in your language.",
    ml: "ഇത് ഒരു സാമ്പിൾ ആണ്. നിങ്ങളുടെ ഭാഷയിൽ 128 USCIS ചോദ്യങ്ങൾക്കായി സൈൻ അപ്പ് ചെയ്യുക.",
    gu: "આ એક નમૂનો છે. તમારી ભાષામાં 128 USCIS પ્રશ્નો માટે સાઇન અપ કરો.",
    vi: "Đây là mẫu thử. Đăng ký để làm tất cả 128 câu hỏi USCIS chính thức bằng ngôn ngữ của bạn.",
    tl: "Ito ay sample lamang. Mag-sign up para sa lahat ng 128 opisyal na tanong ng USCIS sa iyong wika.",
  },
  landingCtaTitle: {
    en: "Help your parents become citizens",
    ml: "നിങ്ങളുടെ മാതാപിതാക്കളെ പൗരന്മാരാക്കൂ",
    gu: "તમારા માતાપિતાને નાગરિક બનવામાં મદદ કરો",
    vi: "Giúp bố mẹ bạn trở thành công dân",
    tl: "Tulungan ang iyong mga magulang na maging mamamayan",
  },
  landingCtaFree: {
    en: "It's completely free. No ads, no subscriptions.",
    ml: "തികച്ചും സൗജന്യം. പരസ്യങ്ങളില്ല, സബ്സ്ക്രിപ്ഷനുകളില്ല.",
    gu: "સંપૂર્ણપણે મફત. કોઈ જાહેરાત નહીં, કોઈ સબ્સ્ક્રિપ્શન નહીં.",
    vi: "Hoàn toàn miễn phí. Không quảng cáo, không đăng ký.",
    tl: "Ganap na libre. Walang ads, walang subscription.",
  },
  landingFooter: {
    en: "For Our Parents",
    ml: "നമ്മുടെ മാതാപിതാക്കൾക്കായി",
    gu: "આપણા માતાપિતા માટે",
    vi: "Vì Cha Mẹ Chúng Ta",
    tl: "Para sa Ating mga Magulang",
  },
  landingFooterSub: {
    en: "Helping immigrant elders become U.S. citizens",
    ml: "കുടിയേറ്റ മുതിർന്നവർക്ക് അമേരിക്കൻ പൗരത്വം നേടാൻ സഹായിക്കുന്നു",
    gu: "ઈમિગ્રન્ટ વડીલોને U.S. નાગરિક બનવામાં મદદ",
    vi: "Giúp người cao tuổi nhập cư trở thành công dân Hoa Kỳ",
    tl: "Tinutulungan ang mga nakatatandang imigrante na maging U.S. citizen",
  },
};

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}
