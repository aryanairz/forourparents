"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { useState } from "react";

/* ── Bilingual content helpers ────────────────────── */
type Bi = { en: string; ml: string };
const bi = (en: string, ml: string): Bi => ({ en, ml });

/* ── FAQ data ─────────────────────────────────────── */
const faqs: { q: Bi; a: Bi }[] = [
  {
    q: bi(
      "What is the U.S. civics test?",
      "യു.എസ്. സിവിക്സ് ടെസ്റ്റ് എന്താണ്?"
    ),
    a: bi(
      "During the naturalization interview, USCIS officers ask up to 10 questions from a list of 100 civics questions. You must answer at least 6 correctly to pass.",
      "നാച്ചുറലൈസേഷൻ ഇന്റർവ്യൂവിൽ, 100 സിവിക്സ് ചോദ്യങ്ങളുടെ പട്ടികയിൽ നിന്ന് USCIS ഓഫീസർമാർ 10 ചോദ്യങ്ങൾ വരെ ചോദിക്കുന്നു. പാസാകാൻ കുറഞ്ഞത് 6 എണ്ണം ശരിയായി ഉത്തരം നൽകണം."
    ),
  },
  {
    q: bi(
      "Is this app free?",
      "ഈ ആപ്പ് സൌജന്യമാണോ?"
    ),
    a: bi(
      "Yes! For Our Parents is completely free. Our mission is to help Malayalam-speaking families prepare for the civics test without any cost.",
      "അതെ! 'For Our Parents' പൂർണ്ണമായും സൌജന്യമാണ്. മലയാളം സംസാരിക്കുന്ന കുടുംബങ്ങളെ ഒരു ചെലവും കൂടാതെ സിവിക്സ് ടെസ്റ്റിന് തയ്യാറെടുക്കാൻ സഹായിക്കുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം."
    ),
  },
  {
    q: bi(
      "How many questions are on the real test?",
      "യഥാർത്ഥ ടെസ്റ്റിൽ എത്ര ചോദ്യങ്ങൾ ഉണ്ട്?"
    ),
    a: bi(
      "The USCIS officer will ask you up to 10 civics questions from the official list of 100. You need to get 6 out of 10 correct to pass the civics portion.",
      "100 ചോദ്യങ്ങളുടെ ഔദ്യോഗിക പട്ടികയിൽ നിന്ന് USCIS ഓഫീസർ 10 സിവിക്സ് ചോദ്യങ്ങൾ വരെ ചോദിക്കും. സിവിക്സ് ഭാഗം പാസാകാൻ 10-ൽ 6 ശരിയാക്കണം."
    ),
  },
  {
    q: bi(
      "Can I study in Malayalam?",
      "മലയാളത്തിൽ പഠിക്കാമോ?"
    ),
    a: bi(
      "Yes! Toggle the language button in the header to switch between English and Malayalam. All questions, answers, and explanations are available in both languages.",
      "അതെ! ഇംഗ്ലീഷിനും മലയാളത്തിനും ഇടയിൽ മാറുന്നതിന് ഹെഡറിലെ ഭാഷ ബട്ടൺ ഉപയോഗിക്കുക. എല്ലാ ചോദ്യങ്ങളും ഉത്തരങ്ങളും വിശദീകരണങ്ങളും രണ്ട് ഭാഷകളിലും ലഭ്യമാണ്."
    ),
  },
  {
    q: bi(
      "What topics does the civics test cover?",
      "സിവിക്സ് ടെസ്റ്റ് ഏതൊക്കെ വിഷയങ്ങൾ ഉൾക്കൊള്ളുന്നു?"
    ),
    a: bi(
      "The test covers four main areas: American Government (how it works), Rights & Responsibilities, American History, and U.S. Symbols & Holidays.",
      "ടെസ്റ്റ് നാല് പ്രധാന മേഖലകൾ ഉൾക്കൊള്ളുന്നു: അമേരിക്കൻ ഗവൺമെന്റ്, അവകാശങ്ങളും ഉത്തരവാദിത്തങ്ങളും, അമേരിക്കൻ ചരിത്രം, യു.എസ്. ചിഹ്നങ്ങളും അവധി ദിനങ്ങളും."
    ),
  },
  {
    q: bi(
      "Do I need to create an account?",
      "ഒരു അക്കൗണ്ട് ഉണ്ടാക്കണോ?"
    ),
    a: bi(
      "You can practice without an account, but creating one (free) lets you track your progress, review mistakes, and get personalized questions about your congressional representatives.",
      "അക്കൗണ്ട് ഇല്ലാതെയും പരിശീലിക്കാം, പക്ഷേ ഒരെണ്ണം ഉണ്ടാക്കിയാൽ (സൌജന്യം) നിങ്ങളുടെ പുരോഗതി ട്രാക്ക് ചെയ്യാനും തെറ്റുകൾ അവലോകനം ചെയ്യാനും നിങ്ങളുടെ കോൺഗ്രസ് പ്രതിനിധികളെ കുറിച്ചുള്ള വ്യക്തിഗത ചോദ്യങ്ങൾ ലഭിക്കാനും കഴിയും."
    ),
  },
];

/* ── Troubleshooting data ─────────────────────────── */
const troubleshooting: { issue: Bi; fix: Bi }[] = [
  {
    issue: bi("I can't log in", "എനിക്ക് ലോഗിൻ ചെയ്യാൻ കഴിയുന്നില്ല"),
    fix: bi(
      "Make sure you're entering your first name and the 4-digit PIN you chose during sign-up. Names are case-insensitive. If you forgot your PIN, you'll need to create a new account with a different email.",
      "സൈൻ-അപ്പ് സമയത്ത് നിങ്ങൾ തിരഞ്ഞെടുത്ത ആദ്യ പേരും 4 അക്ക PINും നൽകുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക. പേരുകൾ case-insensitive ആണ്. PIN മറന്നുപോയാൽ, മറ്റൊരു ഇമെയിൽ ഉപയോഗിച്ച് പുതിയ അക്കൗണ്ട് ഉണ്ടാക്കണം."
    ),
  },
  {
    issue: bi("The app is not loading", "ആപ്പ് ലോഡ് ആകുന്നില്ല"),
    fix: bi(
      "Try refreshing the page or clearing your browser cache. Make sure you have a stable internet connection. The app works best on Chrome, Safari, or Edge.",
      "പേജ് റിഫ്രഷ് ചെയ്യുക അല്ലെങ്കിൽ ബ്രൗസർ കാഷ് ക്ലിയർ ചെയ്യുക. സ്ഥിരമായ ഇന്റർനെറ്റ് കണക്ഷൻ ഉണ്ടെന്ന് ഉറപ്പാക്കുക. Chrome, Safari, അല്ലെങ്കിൽ Edge-ൽ ആപ്പ് മികച്ച രീതിയിൽ പ്രവർത്തിക്കുന്നു."
    ),
  },
  {
    issue: bi("Audio is not playing", "ഓഡിയോ പ്ലേ ആകുന്നില്ല"),
    fix: bi(
      "Make sure your device volume is turned up and not on silent mode. The read-aloud feature uses your browser's text-to-speech engine. Some older browsers may not support Malayalam text-to-speech.",
      "നിങ്ങളുടെ ഉപകരണത്തിന്റെ വോളിയം ഓൺ ആണെന്നും സൈലന്റ് മോഡിൽ അല്ലെന്നും ഉറപ്പാക്കുക. റീഡ്-അലൌഡ് ഫീച്ചർ ബ്രൗസറിന്റെ ടെക്സ്റ്റ്-ടു-സ്പീച്ച് എഞ്ചിൻ ഉപയോഗിക്കുന്നു. ചില പഴയ ബ്രൗസറുകൾ മലയാളം ടെക്സ്റ്റ്-ടു-സ്പീച്ച് പിന്തുണച്ചേക്കില്ല."
    ),
  },
  {
    issue: bi(
      "My progress isn't saving",
      "എന്റെ പുരോഗതി സേവ് ആകുന്നില്ല"
    ),
    fix: bi(
      "Progress is saved to your account. Make sure you're logged in before starting a quiz. If you're using a private/incognito window, your local session may not persist.",
      "പുരോഗതി നിങ്ങളുടെ അക്കൗണ്ടിൽ സേവ് ചെയ്യുന്നു. ക്വിസ് തുടങ്ങുന്നതിന് മുമ്പ് ലോഗിൻ ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക. പ്രൈവേറ്റ്/ഇൻകോഗ്നിറ്റോ വിൻഡോ ഉപയോഗിക്കുന്നുണ്ടെങ്കിൽ, ലോക്കൽ സെഷൻ നിലനിൽക്കണമെന്നില്ല."
    ),
  },
];

/* ── Collapsible Section ──────────────────────────── */
function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-800">
          {title}
        </span>
        <span
          className={`text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 bg-white border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
}

/* ── Main Help Page ───────────────────────────────── */
export default function HelpPage() {
  const { lang, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const l = (en: string, ml: string) => (lang === "en" ? en : ml);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <Link
          href="/"
          className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50
                     text-gray-700 border border-gray-200 shadow-sm
                     font-semibold text-base active:scale-95 transition-all no-underline"
        >
          ← {t("home", lang)}
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold text-primary">
          {l("Help & Support", "സഹായവും പിന്തുണയും")}
        </h1>
      </div>

      {/* ─── 1. About Us / Mission ─────────────────── */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
          🧡 {l("Our Mission", "ഞങ്ങളുടെ ദൗത്യം")}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {l(
            "For Our Parents was built by the children of immigrants to help Malayalam-speaking parents and elders prepare for the U.S. citizenship naturalization test. We know how stressful this process can be — especially when study materials aren't available in your language. This app provides all 100 official USCIS civics questions in both English and Malayalam, with practice modes, audio support, and personalized questions based on your congressional district. It's completely free, and always will be.",
            "'For Our Parents' കുടിയേറ്റക്കാരുടെ മക്കൾ നിർമ്മിച്ചതാണ് — മലയാളം സംസാരിക്കുന്ന മാതാപിതാക്കളെയും മുതിർന്നവരെയും യു.എസ്. പൗരത്വ നാച്ചുറലൈസേഷൻ ടെസ്റ്റിന് തയ്യാറെടുക്കാൻ സഹായിക്കാൻ. ഈ പ്രക്രിയ എത്ര സമ്മർദ്ദകരമാണെന്ന് ഞങ്ങൾക്കറിയാം — പ്രത്യേകിച്ചും പഠന സാമഗ്രികൾ നിങ്ങളുടെ ഭാഷയിൽ ലഭ്യമല്ലാത്തപ്പോൾ. 100 ഔദ്യോഗിക USCIS സിവിക്സ് ചോദ്യങ്ങളും ഇംഗ്ലീഷിലും മലയാളത്തിലും ഈ ആപ്പ് നൽകുന്നു — പ്രാക്ടീസ് മോഡുകൾ, ഓഡിയോ പിന്തുണ, നിങ്ങളുടെ കോൺഗ്രഷണൽ ജില്ല അടിസ്ഥാനമാക്കിയുള്ള വ്യക്തിഗത ചോദ്യങ്ങൾ എന്നിവയോടൊപ്പം. ഇത് പൂർണ്ണമായും സൌജന്യമാണ്, എപ്പോഴും അങ്ങനെ തന്നെ ആയിരിക്കും."
          )}
        </p>
      </section>

      {/* ─── 2. How to Use the App ─────────────────── */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          📖 {l("How to Use This App", "ഈ ആപ്പ് എങ്ങനെ ഉപയോഗിക്കാം")}
        </h2>

        <div className="space-y-3">
          <Accordion
            title={l("1. Create an Account", "1. ഒരു അക്കൗണ്ട് ഉണ്ടാക്കുക")}
            defaultOpen
          >
            <p className="text-gray-600 leading-relaxed">
              {l(
                "Tap \"Log In / Sign Up\" on the home page, then select \"Create Account.\" Enter your first name, last name, email, phone number, and choose a 4-digit PIN. You'll also select your state and congressional district so the app can ask you personalized questions about your representatives.",
                "ഹോം പേജിൽ \"ലോഗ് ഇൻ / സൈൻ അപ്\" ടാപ്പ് ചെയ്യുക, തുടർന്ന് \"അക്കൗണ്ട് ഉണ്ടാക്കുക\" തിരഞ്ഞെടുക്കുക. നിങ്ങളുടെ ആദ്യ പേര്, അവസാന പേര്, ഇമെയിൽ, ഫോൺ നമ്പർ എന്നിവ നൽകി 4 അക്ക PIN തിരഞ്ഞെടുക്കുക. നിങ്ങളുടെ സ്റ്റേറ്റും കോൺഗ്രഷണൽ ജില്ലയും തിരഞ്ഞെടുക്കുക — അങ്ങനെ ആപ്പിന് നിങ്ങളുടെ പ്രതിനിധികളെ കുറിച്ചുള്ള വ്യക്തിഗത ചോദ്യങ്ങൾ ചോദിക്കാൻ കഴിയും."
              )}
            </p>
          </Accordion>

          <Accordion
            title={l(
              "2. Practice Mode (Study)",
              "2. പ്രാക്ടീസ് മോഡ് (പഠനം)"
            )}
          >
            <p className="text-gray-600 leading-relaxed">
              {l(
                "Practice Mode lets you study questions at your own pace. You can choose a specific topic (Government, Rights, History, or Symbols & Holidays) or study all topics together. After answering, you'll see whether you were correct and a detailed explanation. Use the 🔊 button to hear questions read aloud.",
                "പ്രാക്ടീസ് മോഡ് നിങ്ങളുടെ സ്വന്തം വേഗതയിൽ ചോദ്യങ്ങൾ പഠിക്കാൻ അനുവദിക്കുന്നു. ഒരു പ്രത്യേക വിഷയം (ഗവൺമെന്റ്, അവകാശങ്ങൾ, ചരിത്രം, അല്ലെങ്കിൽ ചിഹ്നങ്ങളും അവധി ദിനങ്ങളും) തിരഞ്ഞെടുക്കാം അല്ലെങ്കിൽ എല്ലാ വിഷയങ്ങളും ഒരുമിച്ച് പഠിക്കാം. ഉത്തരം നൽകിയ ശേഷം, നിങ്ങൾ ശരിയായിരുന്നോ എന്ന് കാണാം, വിശദമായ വിശദീകരണവും ലഭിക്കും. ചോദ്യങ്ങൾ ഉറക്കെ വായിക്കാൻ 🔊 ബട്ടൺ ഉപയോഗിക്കുക."
              )}
            </p>
          </Accordion>

          <Accordion
            title={l(
              "3. Quiz Mode (Test Yourself)",
              "3. ക്വിസ് മോഡ് (സ്വയം ടെസ്റ്റ് ചെയ്യുക)"
            )}
          >
            <p className="text-gray-600 leading-relaxed">
              {l(
                "Quiz Mode simulates the real civics test. You'll get multiple-choice questions and see your score at the end. This is great for testing yourself once you've studied. Your results are saved so you can track improvement over time.",
                "ക്വിസ് മോഡ് യഥാർത്ഥ സിവിക്സ് ടെസ്റ്റ് സിമുലേറ്റ് ചെയ്യുന്നു. മൾട്ടിപ്പിൾ-ചോയ്സ് ചോദ്യങ്ങൾ ലഭിക്കും, അവസാനം നിങ്ങളുടെ സ്കോർ കാണാം. പഠിച്ചതിനുശേഷം സ്വയം ടെസ്റ്റ് ചെയ്യാൻ ഇത് മികച്ചതാണ്. നിങ്ങളുടെ ഫലങ്ങൾ സേവ് ചെയ്യുന്നതിനാൽ കാലക്രമേണ പുരോഗതി ട്രാക്ക് ചെയ്യാം."
              )}
            </p>
          </Accordion>

          <Accordion
            title={l(
              "4. Review Mistakes",
              "4. തെറ്റുകൾ അവലോകനം ചെയ്യുക"
            )}
          >
            <p className="text-gray-600 leading-relaxed">
              {l(
                "The Review Mistakes feature shows you questions you previously got wrong. This is one of the most effective ways to study — focus on what you don't know yet. Keep reviewing until you can answer them all correctly!",
                "റിവ്യൂ മിസ്റ്റേക്സ് ഫീച്ചർ നിങ്ങൾ മുമ്പ് തെറ്റിച്ച ചോദ്യങ്ങൾ കാണിക്കുന്നു. പഠിക്കാനുള്ള ഏറ്റവും ഫലപ്രദമായ മാർഗ്ഗങ്ങളിലൊന്നാണ് ഇത് — നിങ്ങൾക്ക് ഇതുവരെ അറിയാത്ത കാര്യങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക. എല്ലാം ശരിയായി ഉത്തരം നൽകാൻ കഴിയുന്നത് വരെ അവലോകനം ചെയ്യുക!"
              )}
            </p>
          </Accordion>

          <Accordion
            title={l(
              "5. Dashboard (Your Stats)",
              "5. ഡാഷ്ബോർഡ് (നിങ്ങളുടെ സ്ഥിതിവിവരക്കണക്കുകൾ)"
            )}
          >
            <p className="text-gray-600 leading-relaxed">
              {l(
                "After logging in, your Dashboard shows your overall accuracy, number of questions attempted, and which topics need more work. Use this to guide your study sessions.",
                "ലോഗിൻ ചെയ്തതിനുശേഷം, നിങ്ങളുടെ ഡാഷ്ബോർഡ് മൊത്തത്തിലുള്ള കൃത്യത, ശ്രമിച്ച ചോദ്യങ്ങളുടെ എണ്ണം, കൂടുതൽ പ്രവർത്തനം ആവശ്യമായ വിഷയങ്ങൾ എന്നിവ കാണിക്കുന്നു. നിങ്ങളുടെ പഠന സെഷനുകൾ നയിക്കാൻ ഇത് ഉപയോഗിക്കുക."
              )}
            </p>
          </Accordion>
        </div>
      </section>

      {/* ─── 3. FAQ ────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          ❓ {l("Frequently Asked Questions", "പതിവ് ചോദ്യങ്ങൾ")}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Accordion key={i} title={faq.q[lang]}>
              <p className="text-gray-600 leading-relaxed">{faq.a[lang]}</p>
            </Accordion>
          ))}
        </div>
      </section>

      {/* ─── 4. About the USCIS Naturalization Process  */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          🏛️ {l("About the Naturalization Process", "നാച്ചുറലൈസേഷൻ പ്രക്രിയയെ കുറിച്ച്")}
        </h2>
        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              {l("Eligibility", "യോഗ്യത")}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {l(
                "You must be at least 18 years old, a lawful permanent resident (green card holder) for at least 5 years (or 3 years if married to a U.S. citizen), have continuous residence and physical presence in the U.S., and demonstrate good moral character.",
                "കുറഞ്ഞത് 18 വയസ്സ് ആയിരിക്കണം, കുറഞ്ഞത് 5 വർഷമായി നിയമാനുസൃത സ്ഥിര താമസക്കാരൻ (ഗ്രീൻ കാർഡ് ഉടമ) ആയിരിക്കണം (യു.എസ്. പൗരനെ വിവാഹം കഴിച്ചവർക്ക് 3 വർഷം), യു.എസ്.-ൽ തുടർച്ചയായ താമസവും ശാരീരിക സാന്നിധ്യവും ഉണ്ടായിരിക്കണം, നല്ല ധാർമ്മിക സ്വഭാവം പ്രകടിപ്പിക്കണം."
              )}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              {l("The Interview", "ഇന്റർവ്യൂ")}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {l(
                "Your naturalization interview includes an English test (reading, writing, and speaking) and a civics test. A USCIS officer will ask you up to 10 civics questions and you must answer at least 6 correctly. The interview is conducted in English.",
                "നിങ്ങളുടെ നാച്ചുറലൈസേഷൻ ഇന്റർവ്യൂവിൽ ഒരു ഇംഗ്ലീഷ് ടെസ്റ്റ് (വായന, എഴുത്ത്, സംസാരം) കൂടാതെ ഒരു സിവിക്സ് ടെസ്റ്റും ഉൾപ്പെടുന്നു. USCIS ഓഫീസർ 10 സിവിക്സ് ചോദ്യങ്ങൾ വരെ ചോദിക്കും, കുറഞ്ഞത് 6 എണ്ണം ശരിയായി ഉത്തരം നൽകണം. ഇന്റർവ്യൂ ഇംഗ്ലീഷിൽ ആണ് നടത്തുന്നത്."
              )}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">
              {l("Test Day Tips", "ടെസ്റ്റ് ദിവസ നുറുങ്ങുകൾ")}
            </h3>
            <ul className="text-gray-600 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>
                {l(
                  "Bring your green card, state-issued ID, and appointment notice",
                  "നിങ്ങളുടെ ഗ്രീൻ കാർഡ്, സ്റ്റേറ്റ് ഇഷ്യൂ ചെയ്ത ID, അപ്പോയിന്റ്മെന്റ് നോട്ടീസ് എന്നിവ കൊണ്ടുവരുക"
                )}
              </li>
              <li>
                {l(
                  "Arrive 30 minutes early",
                  "30 മിനിറ്റ് നേരത്തെ എത്തുക"
                )}
              </li>
              <li>
                {l(
                  "Stay calm — you've prepared well!",
                  "ശാന്തമായിരിക്കുക — നിങ്ങൾ നന്നായി തയ്യാറായിട്ടുണ്ട്!"
                )}
              </li>
              <li>
                {l(
                  "If you don't pass, you can retake the test within 60-90 days",
                  "പാസാകുന്നില്ലെങ്കിൽ, 60-90 ദിവസത്തിനുള്ളിൽ ടെസ്റ്റ് വീണ്ടും എടുക്കാം"
                )}
              </li>
            </ul>
          </div>
          <div className="pt-2">
            <a
              href="https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 underline"
            >
              {l(
                "→ Official USCIS Study Materials",
                "→ ഔദ്യോഗിക USCIS പഠന സാമഗ്രികൾ"
              )}
            </a>
          </div>
        </div>
      </section>

      {/* ─── 5. Troubleshooting ────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          🔧 {l("Troubleshooting", "ട്രബിൾഷൂട്ടിംഗ്")}
        </h2>
        <div className="space-y-3">
          {troubleshooting.map((item, i) => (
            <Accordion key={i} title={item.issue[lang]}>
              <p className="text-gray-600 leading-relaxed">{item.fix[lang]}</p>
            </Accordion>
          ))}
        </div>
      </section>

      {/* ─── 6. Contact / Feedback ─────────────────── */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 text-center space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          💬 {l("Contact & Feedback", "ബന്ധപ്പെടുക & ഫീഡ്ബാക്ക്")}
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
          {l(
            "Have a question, found a bug, or want to suggest a feature? We'd love to hear from you!",
            "ഒരു ചോദ്യമുണ്ടോ, ഒരു ബഗ് കണ്ടെത്തിയോ, അല്ലെങ്കിൽ ഒരു ഫീച്ചർ നിർദ്ദേശിക്കാൻ ആഗ്രഹിക്കുന്നുണ്ടോ? നിങ്ങളിൽ നിന്ന് കേൾക്കാൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു!"
          )}
        </p>
        <a
          href="mailto:aryannair2121@gmail.com"
          className="inline-block px-8 py-3 rounded-xl bg-primary text-white font-semibold
                     hover:bg-orange-600 active:scale-95 transition-all no-underline
                     min-h-[48px] text-base"
        >
          {l("Email Us", "ഞങ്ങൾക്ക് ഇമെയിൽ ചെയ്യുക")}
        </a>
      </section>

      {/* Bottom spacer */}
      <div className="h-8" />
    </div>
  );
}
