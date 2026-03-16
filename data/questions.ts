export type Lang = "en" | "ml" | "gu";

export type Topic = "government" | "rights" | "history" | "symbols";

export interface BilingualText {
  en: string;
  ml: string;
  gu: string;
}

export interface Question {
  id: string;
  topic: Topic;
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  explanation: BilingualText;
}

export const topicLabels: Record<Topic, BilingualText> = {
  government: { en: "Government", ml: "ഗവൺമെന്റ്", gu: "સરકાર" },
  rights: {
    en: "Rights & Responsibilities",
    ml: "അവകാശങ്ങളും ഉത്തരവാദിത്തങ്ങളും",
    gu: "અધિકારો અને જવાબદારીઓ",
  },
  history: { en: "American History", ml: "അമേരിക്കൻ ചരിത്രം", gu: "અમેરિકન ઇતિહાસ" },
  symbols: { en: "Symbols & Holidays", ml: "ചിഹ്നങ്ങളും അവധി ദിനങ്ങളും", gu: "પ્રતીકો અને રજાઓ" },
};

export const allTopics: Topic[] = [
  "government",
  "rights",
  "history",
  "symbols",
];

export const questions: Question[] = [
  // ═══════════════════════════════════════════════════
  // GOVERNMENT (15 questions)
  // ═══════════════════════════════════════════════════
  {
    id: "g001",
    topic: "government",
    question: {
      en: "What is the supreme law of the land?",
      ml: "രാജ്യത്തെ പരമോന്നത നിയമം ഏതാണ്?",
      gu: "દેશનો સર્વોચ્ચ કાયદો શું છે?",
    },
    options: [
      { en: "(U.S.) Constitution", ml: "യു.എസ്. ഭരണഘടന", gu: "(યુ.એસ.) બંધારણ" },
      { en: "Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം", gu: "સ્વતંત્રતાનો ઘોષણાપત્ર" },
      { en: "Bill of Rights", ml: "അവകാശ ബിൽ", gu: "અધિકારોનું વિધેયક" },
      { en: "Federal Law", ml: "ഫെഡറൽ നിയമം", gu: "સંઘીય કાયદો" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. Constitution is the supreme law of the land.",
      ml: "യു.എസ്. ഭരണഘടനയാണ് രാജ്യത്തെ പരമോന്നത നിയമം.",
      gu: "યુ.એસ. બંધારણ એ દેશનો સર્વોચ્ચ કાયદો છે.",
    },
  },
  {
    id: "g002",
    topic: "government",
    question: {
      en: "What is the form of government of the United States?",
      ml: "അമേരിക്കയുടെ ഭരണ രൂപം ഏതാണ്?",
      gu: "યુનાઈટેડ સ્ટેટ્સની સરકારનું સ્વરૂપ શું છે?",
    },
    options: [
      { en: "Republic", ml: "റിപ്പബ്ലിക്", gu: "પ્રજાસત્તાક" },
      { en: "Monarchy", ml: "രാജവാഴ്ച", gu: "રાજાશાહી" },
      { en: "Dictatorship", ml: "ഏകാധിപത്യം", gu: "સરમુખત્યારશાહી" },
      { en: "Direct Democracy", ml: "നേരിട്ടുള്ള ജനാധിപത്യം", gu: "સીધી લોકશાહી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The United States is a constitution-based federal republic and representative democracy.",
      ml: "അമേരിക്ക ഒരു ഭരണഘടനാധിഷ്ഠിത ഫെഡറൽ റിപ്പബ്ലിക്കും പ്രാതിനിധ്യ ജനാധിപത്യവുമാണ്.",
      gu: "યુનાઈટેડ સ્ટેટ્સ એ બંધારણ આધારિત સંઘીય પ્રજાસત્તાક અને પ્રતિનિધિ લોકશાહી છે.",
    },
  },
  {
    id: "g003",
    topic: "government",
    question: {
      en: "How many amendments does the U.S. Constitution have?",
      ml: "യു.എസ്. ഭരണഘടനയ്ക്ക് എത്ര ഭേദഗതികൾ ഉണ്ട്?",
      gu: "યુ.એસ. બંધારણમાં કેટલા સુધારા છે?",
    },
    options: [
      { en: "Twenty-seven (27)", ml: "ഇരുപത്തിയേഴ് (27)", gu: "સત્તાવીસ (27)" },
      { en: "Ten (10)", ml: "പത്ത് (10)", gu: "દસ (10)" },
      { en: "Twenty-five (25)", ml: "ഇരുപത്തിയഞ്ച് (25)", gu: "પચ્ચીસ (25)" },
      { en: "Thirty-three (33)", ml: "മുപ്പത്തിമൂന്ന് (33)", gu: "તેત્રીસ (33)" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. Constitution has 27 amendments.",
      ml: "യു.എസ്. ഭരണഘടനയ്ക്ക് 27 ഭേദഗതികൾ ഉണ്ട്.",
      gu: "યુ.એસ. બંધારણમાં 27 સુધારા છે.",
    },
  },
  {
    id: "g004",
    topic: "government",
    question: {
      en: "What is the economic system of the United States?",
      ml: "അമേരിക്കയുടെ സാമ്പത്തിക വ്യവസ്ഥ ഏതാണ്?",
      gu: "યુનાઈટેડ સ્ટેટ્સની આર્થિક વ્યવસ્થા શું છે?",
    },
    options: [
      {
        en: "Capitalism / Free market economy",
        ml: "മുതലാളിത്തം / സ്വതന്ത്ര വിപണി സമ്പദ്‌വ്യവസ്ഥ",
        gu: "મૂડીવાદ / મુક્ત બજાર અર્થતંત્ર",
      },
      { en: "Communism", ml: "കമ്മ്യൂണിസം", gu: "સામ્યવાદ" },
      { en: "Socialism", ml: "സോഷ്യലിസം", gu: "સમાજવાદ" },
      { en: "Feudalism", ml: "ഫ്യൂഡലിസം", gu: "સામંતશાહી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The United States has a capitalist (free market) economy.",
      ml: "അമേരിക്കയ്ക്ക് മുതലാളിത്ത (സ്വതന്ത്ര വിപണി) സമ്പദ്‌വ്യവസ്ഥയാണ്.",
      gu: "યુનાઈટેડ સ્ટેટ્સ પાસે મૂડીવાદી (મુક્ત બજાર) અર્થતંત્ર છે.",
    },
  },
  {
    id: "g005",
    topic: "government",
    question: {
      en: "What are the three branches of government?",
      ml: "ഗവൺമെന്റിന്റെ മൂന്ന് ശാഖകൾ ഏതൊക്കെ?",
      gu: "સરકારની ત્રણ શાખાઓ કઈ છે?",
    },
    options: [
      {
        en: "Legislative, Executive, and Judicial",
        ml: "നിയമനിർമ്മാണ, എക്സിക്യൂട്ടീവ്, ജുഡീഷ്യൽ",
        gu: "વિધાયિક, કાર્યકારી અને ન્યાયિક",
      },
      {
        en: "Executive, Military, and Judicial",
        ml: "എക്സിക്യൂട്ടീവ്, സൈനിക, ജുഡീഷ്യൽ",
        gu: "કાર્યકારી, લશ્કરી અને ન્યાયિક",
      },
      { en: "Senate, House, and President", ml: "സെനറ്റ്, ഹൗസ്, പ്രസിഡന്റ്", gu: "સેનેટ, હાઉસ અને રાષ્ટ્રપતિ" },
      { en: "Federal, State, and Local", ml: "ഫെഡറൽ, സംസ്ഥാന, പ്രാദേശിക", gu: "ફેડરલ, રાજ્ય અને સ્થાનિક" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The three branches are Legislative (Congress), Executive (President), and Judicial (the Courts).",
      ml: "മൂന്ന് ശാഖകൾ: നിയമനിർമ്മാണ (കോൺഗ്രസ്), എക്സിക്യൂട്ടീവ് (പ്രസിഡന്റ്), ജുഡീഷ്യൽ (കോടതികൾ).",
      gu: "ત્રણ શાખાઓ વિધાયિક (કોંગ્રેસ), કાર્યકારી (રાષ્ટ્રપતિ) અને ન્યાયિક (કોર્ટ) છે.",
    },
  },
  {
    id: "g006",
    topic: "government",
    question: {
      en: "How many U.S. senators are there?",
      ml: "എത്ര യു.എസ്. സെനറ്റർമാർ ഉണ്ട്?",
      gu: "કેટલા યુ.એસ. સેનેટર છે?",
    },
    options: [
      { en: "One hundred (100)", ml: "നൂറ് (100)", gu: "સો (100)" },
      { en: "Fifty (50)", ml: "അമ്പത് (50)", gu: "પચાસ (50)" },
      {
        en: "Four hundred thirty-five (435)",
        ml: "നാനൂറ്റി മുപ്പത്തിയഞ്ച് (435)",
        gu: "ચારસો પાંત્રીસ (435)",
      },
      { en: "Fifty-two (52)", ml: "അമ്പത്തിരണ്ട് (52)", gu: "બાવન (52)" },
    ],
    correctIndex: 0,
    explanation: {
      en: "There are 100 U.S. senators — 2 from each of the 50 states.",
      ml: "100 യു.എസ്. സെനറ്റർമാർ ഉണ്ട് — 50 സംസ്ഥാനങ്ങളിൽ നിന്ന് ഓരോന്നിൽ നിന്നും 2 പേർ.",
      gu: "100 યુ.એસ. સેનેટર છે — 50 રાજ્યોમાંથી દરેકમાંથી 2.",
    },
  },
  {
    id: "g007",
    topic: "government",
    question: {
      en: "How long is a term for a U.S. senator?",
      ml: "ഒരു യു.എസ്. സെനറ്ററുടെ കാലാവധി എത്രയാണ്?",
      gu: "યુ.એસ. સેનેટરની મુદ્દત કેટલી લાંબી છે?",
    },
    options: [
      { en: "Six (6) years", ml: "ആറ് (6) വർഷം", gu: "છ (6) વર્ષ" },
      { en: "Two (2) years", ml: "രണ്ട് (2) വർഷം", gu: "બે (2) વર્ષ" },
      { en: "Four (4) years", ml: "നാല് (4) വർഷം", gu: "ચાર (4) વર્ષ" },
      { en: "Eight (8) years", ml: "എട്ട് (8) വർഷം", gu: "આઠ (8) વર્ષ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "A U.S. senator serves a 6-year term.",
      ml: "ഒരു യു.എസ്. സെനറ്ററുടെ കാലാവധി 6 വർഷമാണ്.",
      gu: "યુ.એસ. સેનેટર 6 વર્ષની મુદ્દત સેવા આપે છે.",
    },
  },
  {
    id: "g008",
    topic: "government",
    question: {
      en: "How many voting members are in the House of Representatives?",
      ml: "ജനപ്രതിനിധി സഭയിൽ എത്ര വോട്ടിംഗ് അംഗങ്ങൾ ഉണ്ട്?",
      gu: "પ્રતિનિધિ સભામાં કેટલા મતદાન સભ્યો છે?",
    },
    options: [
      {
        en: "Four hundred thirty-five (435)",
        ml: "നാനൂറ്റി മുപ്പത്തിയഞ്ച് (435)",
        gu: "ચારસો પાંત્રીસ (435)",
      },
      { en: "One hundred (100)", ml: "നൂറ് (100)", gu: "સો (100)" },
      {
        en: "Five hundred thirty-five (535)",
        ml: "അഞ്ഞൂറ്റി മുപ്പത്തിയഞ്ച് (535)",
        gu: "પાંચસો પાંત્રીસ (535)",
      },
      { en: "Three hundred fifty (350)", ml: "മുന്നൂറ്റിയമ്പത് (350)", gu: "ત્રણસો પચાસ (350)" },
    ],
    correctIndex: 0,
    explanation: {
      en: "There are 435 voting members in the House of Representatives.",
      ml: "ജനപ്രതിനിധി സഭയിൽ 435 വോട്ടിംഗ് അംഗങ്ങൾ ഉണ്ട്.",
      gu: "પ્રતિનિધિ સભામાં 435 મતદાન સભ્યો છે.",
    },
  },
  {
    id: "g009",
    topic: "government",
    question: {
      en: "The President of the United States is elected for how many years?",
      ml: "അമേരിക്കൻ പ്രസിഡന്റിനെ എത്ര വർഷത്തേക്കാണ് തിരഞ്ഞെടുക്കുന്നത്?",
      gu: "યુનાઈટેડ સ્ટેટ્સના રાષ્ટ્રપતિ કેટલા વર્ષ માટે ચૂંટાય છે?",
    },
    options: [
      { en: "Four (4) years", ml: "നാല് (4) വർഷം", gu: "ચાર (4) વર્ષ" },
      { en: "Two (2) years", ml: "രണ്ട് (2) വർഷം", gu: "બે (2) વર્ષ" },
      { en: "Six (6) years", ml: "ആറ് (6) വർഷം", gu: "છ (6) વર્ષ" },
      { en: "Eight (8) years", ml: "എട്ട് (8) വർഷം", gu: "આઠ (8) વર્ષ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The President is elected for a 4-year term.",
      ml: "പ്രസിഡന്റിനെ 4 വർഷത്തേക്കാണ് തിരഞ്ഞെടുക്കുന്നത്.",
      gu: "રાષ્ટ્રપતિ 4 વર્ષની મુદ્દત માટે ચૂંટાય છે.",
    },
  },
  {
    id: "g010",
    topic: "government",
    question: {
      en: "What is the name of the President of the United States now?",
      ml: "ഇപ്പോൾ അമേരിക്കയുടെ പ്രസിഡന്റ് ആരാണ്?",
      gu: "હવે યુનાઈટેડ સ્ટેટ્સના રાષ્ટ્રપતિનું નામ શું છે?",
    },
    options: [
      { en: "Donald Trump", ml: "ഡൊണാൾഡ് ട്രംപ്", gu: "ડૉનૅલ્ડ ટ્રૅમ્પ" },
      { en: "Joe Biden", ml: "ജോ ബൈഡൻ", gu: "જો બાઇડન" },
      { en: "Barack Obama", ml: "ബരാക് ഒബാമ", gu: "બૅરૅક ઓબામા" },
      { en: "George Bush", ml: "ജോർജ് ബുഷ്", gu: "જ્યોર્જ બુશ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Donald Trump is the current President of the United States.",
      ml: "ഡൊണാൾഡ് ട്രംപ് ആണ് ഇപ്പോഴത്തെ അമേരിക്കൻ പ്രസിഡന്റ്.",
      gu: "ડૉનૅલ્ડ ટ્રૅમ્પ યુનાઈટેડ સ્ટેટ્સના વર્તમાન રાષ્ટ્રપતિ છે.",
    },
  },
  {
    id: "g011",
    topic: "government",
    question: {
      en: "What is the name of the Vice President of the United States now?",
      ml: "ഇപ്പോൾ അമേരിക്കയുടെ വൈസ് പ്രസിഡന്റ് ആരാണ്?",
      gu: "હવે યુનાઈટેડ સ્ટેટ્સના ઉપરાષ્ટ્રપતિનું નામ શું છે?",
    },
    options: [
      { en: "JD Vance", ml: "ജെ.ഡി. വാൻസ്", gu: "જે.ડી. વાન્સ" },
      { en: "Kamala Harris", ml: "കമല ഹാരിസ്", gu: "કમલા હૅરિસ" },
      { en: "Mike Pence", ml: "മൈക്ക് പെൻസ്", gu: "માઇક પેન્સ" },
      { en: "Joe Biden", ml: "ജോ ബൈഡൻ", gu: "જો બાઇડન" },
    ],
    correctIndex: 0,
    explanation: {
      en: "JD Vance is the current Vice President of the United States.",
      ml: "ജെ.ഡി. വാൻസ് ആണ് ഇപ്പോഴത്തെ അമേരിക്കൻ വൈസ് പ്രസിഡന്റ്.",
      gu: "જે.ડી. વાન્સ યુનાઈટેડ સ્ટેટ્સના વર્તમાન ઉપરાષ્ટ્રપતિ છે.",
    },
  },
  {
    id: "g012",
    topic: "government",
    question: {
      en: "What is the highest court in the United States?",
      ml: "അമേരിക്കയിലെ ഏറ്റവും ഉയർന്ന കോടതി ഏതാണ്?",
      gu: "યુનાઈટેડ સ્ટેટ્સની સર્વોચ્ચ અદાલત કઈ છે?",
    },
    options: [
      { en: "Supreme Court", ml: "സുപ്രീം കോടതി", gu: "સુપ્રીમ કોર્ટ" },
      { en: "Federal Court", ml: "ഫെഡറൽ കോടതി", gu: "ફેડરલ કોર્ટ" },
      { en: "District Court", ml: "ജില്ലാ കോടതി", gu: "જિલ્લા અદાલત" },
      { en: "Appeals Court", ml: "അപ്പീൽ കോടതി", gu: "અપીલ અદાલત" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Supreme Court is the highest court in the United States.",
      ml: "സുപ്രീം കോടതിയാണ് അമേരിക്കയിലെ ഏറ്റവും ഉയർന്ന കോടതി.",
      gu: "સુપ્રીમ કોર્ટ યુનાઈટેડ સ્ટેટ્સની સર્વોચ્ચ અદાલત છે.",
    },
  },
  {
    id: "g013",
    topic: "government",
    question: {
      en: "How many seats are on the Supreme Court?",
      ml: "സുപ്രീം കോടതിയിൽ എത്ര സീറ്റുകൾ ഉണ്ട്?",
      gu: "સુપ્રીમ કોર્ટમાં કેટલી બેઠકો છે?",
    },
    options: [
      { en: "Nine (9)", ml: "ഒമ്പത് (9)", gu: "નવ (9)" },
      { en: "Seven (7)", ml: "ഏഴ് (7)", gu: "સાત (7)" },
      { en: "Eleven (11)", ml: "പതിനൊന്ന് (11)", gu: "અગિયાર (11)" },
      { en: "Twelve (12)", ml: "പന്ത്രണ്ട് (12)", gu: "બાર (12)" },
    ],
    correctIndex: 0,
    explanation: {
      en: "There are 9 seats on the Supreme Court.",
      ml: "സുപ്രീം കോടതിയിൽ 9 സീറ്റുകൾ ഉണ്ട്.",
      gu: "સુપ્રીમ કોર્ટમાં 9 બેઠકો છે.",
    },
  },
  {
    id: "g014",
    topic: "government",
    question: {
      en: "Who is Commander in Chief of the U.S. military?",
      ml: "യു.എസ്. സൈന്യത്തിന്റെ കമാൻഡർ ഇൻ ചീഫ് ആരാണ്?",
      gu: "યુ.એસ. સેનાના કમાન્ડર ઇન ચીફ કોણ છે?",
    },
    options: [
      { en: "The President", ml: "പ്രസിഡന്റ്", gu: "રાષ્ટ્રપતિ" },
      { en: "Secretary of Defense", ml: "പ്രതിരോധ സെക്രട്ടറി", gu: "સંરક્ષણ સચિવ" },
      { en: "A General", ml: "ഒരു ജനറൽ", gu: "એક જનરલ" },
      { en: "The Vice President", ml: "വൈസ് പ്രസിഡന്റ്", gu: "ઉપરાષ્ટ્રપતિ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The President is the Commander in Chief of the U.S. military.",
      ml: "പ്രസിഡന്റാണ് യു.എസ്. സൈന്യത്തിന്റെ കമാൻഡർ ഇൻ ചീഫ്.",
      gu: "રાષ્ટ્રપતિ U.S. સૈન્યના કમાન્ડર ઇન ચીફ છે.",
    },
  },
  {
    id: "g015",
    topic: "government",
    question: {
      en: "If the president can no longer serve, who becomes president?",
      ml: "പ്രസിഡന്റിന് ഇനി സേവനം ചെയ്യാൻ കഴിയില്ലെങ്കിൽ, ആരാണ് പ്രസിഡന്റ് ആകുന്നത്?",
      gu: "જો રાષ્ટ્રપતિ હવે સેવા આપી ન શકે, તો રાષ્ટ્રપતિ કોણ બને છે?",
    },
    options: [
      { en: "The Vice President", ml: "വൈസ് പ്രസിഡന്റ്", gu: "ઉપરાષ્ટ્રપતિ" },
      { en: "Speaker of the House", ml: "ഹൗസ് സ്പീക്കർ", gu: "હાઉસના સ્પીકર" },
      { en: "Secretary of State", ml: "സ്റ്റേറ്റ് സെക്രട്ടറി", gu: "વિદેશ મંત્રી" },
      { en: "Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്", gu: "મુખ્ય ન્યાયાધીશ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "If the president can no longer serve, the Vice President becomes president.",
      ml: "പ്രസിഡന്റിന് സേവനം ചെയ്യാൻ കഴിയില്ലെങ്കിൽ, വൈസ് പ്രസിഡന്റ് പ്രസിഡന്റ് ആകും.",
      gu: "જો રાષ્ટ્રપતિ હવે સેવા આપી ન શકે, તો ઉપરાષ્ટ્રપતિ રાષ્ટ્રપતિ બને છે.",
    },
  },

  // ═══════════════════════════════════════════════════
  // RIGHTS & RESPONSIBILITIES (8 questions)
  // ═══════════════════════════════════════════════════
  {
    id: "r001",
    topic: "rights",
    question: {
      en: "What does the Bill of Rights protect?",
      ml: "അവകാശ ബിൽ എന്താണ് സംരക്ഷിക്കുന്നത്?",
      gu: "બિલ ઑફ રાઇટ્સ શું રક્ષણ કરે છે?",
    },
    options: [
      {
        en: "The basic rights of Americans",
        ml: "അമേരിക്കക്കാരുടെ അടിസ്ഥാന അവകാശങ്ങൾ",
        gu: "અમેરિકનોના મૂળભૂત અધિકારો",
      },
      { en: "The rights of the President", ml: "പ്രസിഡന്റിന്റെ അവകാശങ്ങൾ", gu: "રાષ્ટ્રપતિના અધિકારો" },
      { en: "Powers of Congress", ml: "കോൺഗ്രസിന്റെ അധികാരങ്ങൾ", gu: "કોંગ્રેસની સત્તાઓ" },
      { en: "State boundaries", ml: "സംസ്ഥാന അതിർത്തികൾ", gu: "રાજ્યની સીમાઓ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Bill of Rights protects the basic rights of Americans.",
      ml: "അവകാശ ബിൽ അമേരിക്കക്കാരുടെ അടിസ്ഥാന അവകാശങ്ങളെ സംരക്ഷിക്കുന്നു.",
      gu: "બિલ ઑફ રાઇટ્સ અમેરિકનોના મૂળભૂત અધિકારોનું રક્ષણ કરે છે.",
    },
  },
  {
    id: "r002",
    topic: "rights",
    question: {
      en: "Who can vote in federal elections, run for federal office, and serve on a jury?",
      ml: "ഫെഡറൽ തിരഞ്ഞെടുപ്പുകളിൽ വോട്ട് ചെയ്യാനും ഫെഡറൽ ഓഫീസിന് മത്സരിക്കാനും ജൂറിയിൽ സേവിക്കാനും ആർക്ക് കഴിയും?",
      gu: "ફેડરલ ચૂંટણીઓમાં કોણ મત આપી શકે, ફેડરલ ઓફિસ માટે ઊભું રહી શકે અને જ્યુરીમાં સેવા આપી શકે?",
    },
    options: [
      { en: "U.S. citizens", ml: "യു.എസ്. പൗരന്മാർ", gu: "યુ.એસ. નાગરિકો" },
      {
        en: "Anyone living in the U.S.",
        ml: "അമേരിക്കയിൽ താമസിക്കുന്ന ആർക്കും",
        gu: "યુ.એસ.માં રહેતી કોઈ પણ વ્યક્તિ",
      },
      { en: "Only men", ml: "പുരുഷന്മാർ മാത്രം", gu: "ફક્ત પુરુષો" },
      { en: "Only taxpayers", ml: "നികുതിദായകർ മാത്രം", gu: "ફક્ત કરદાતાઓ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Only U.S. citizens can vote in federal elections, run for federal office, and serve on a jury.",
      ml: "യു.എസ്. പൗരന്മാർക്ക് മാത്രമേ ഫെഡറൽ തിരഞ്ഞെടുപ്പുകളിൽ വോട്ട് ചെയ്യാനും ഫെഡറൽ ഓഫീസിന് മത്സരിക്കാനും ജൂറിയിൽ സേവിക്കാനും കഴിയൂ.",
      gu: "ફક્ત યુ.એસ. નાગરિકો જ ફેડરલ ચૂંટણીઓમાં મત આપી શકે, ફેડરલ ઓફિસ માટે ઊભા રહી શકે અને જ્યુરીમાં સેવા આપી શકે.",
    },
  },
  {
    id: "r003",
    topic: "rights",
    question: {
      en: "What do we show loyalty to when we say the Pledge of Allegiance?",
      ml: "പ്രതിജ്ഞ ചൊല്ലുമ്പോൾ നമ്മൾ ആരോട് / എന്തിനോട് വിശ്വസ്തത കാണിക്കുന്നു?",
      gu: "જ્યારે આપણે Pledge of Allegiance કહીએ છીએ ત્યારે આપણે કોના પ્રત્યે વફાદારી દર્શાવીએ છીએ?",
    },
    options: [
      { en: "The United States and the flag", ml: "അമേരിക്കയോടും പതാകയോടും", gu: "યુનાઈટેડ સ્ટેટ્સ અને ધ્વજ" },
      { en: "The President", ml: "പ്രസിഡന്റിനോട്", gu: "રાષ્ટ્રપતિ" },
      { en: "The military", ml: "സൈന്യത്തോട്", gu: "સેના" },
      { en: "The Constitution only", ml: "ഭരണഘടനയോട് മാത്രം", gu: "ફક્ત બંધારણ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "We show loyalty to the United States and its flag when we say the Pledge of Allegiance.",
      ml: "പ്രതിജ്ഞ ചൊല്ലുമ്പോൾ നമ്മൾ അമേരിക്കയോടും അതിന്റെ പതാകയോടും വിശ്വസ്തത കാണിക്കുന്നു.",
      gu: "જ્યારે આપણે Pledge of Allegiance કહીએ છીએ ત્યારે આપણે યુનાઈટેડ સ્ટેટ્સ અને તેના ધ્વજ પ્રત્યે વફાદારી દર્શાવીએ છીએ.",
    },
  },
  {
    id: "r004",
    topic: "rights",
    question: {
      en: "How can people become U.S. citizens?",
      ml: "ആളുകൾക്ക് എങ്ങനെ യു.എസ്. പൗരന്മാരാകാം?",
      gu: "લોકો યુ.એસ. નાગરિક કેવી રીતે બની શકે?",
    },
    options: [
      {
        en: "Be born in the U.S. or through naturalization",
        ml: "അമേരിക്കയിൽ ജനിക്കുക അല്ലെങ്കിൽ പൗരത്വ നേടൽ പ്രക്രിയയിലൂടെ",
        gu: "યુ.એસ.માં જન્મ અથવા નૅચ્યુરૅલઇઝૅશન દ્વારા",
      },
      {
        en: "Only by being born in the U.S.",
        ml: "അമേരിക്കയിൽ ജനിച്ചാൽ മാത്രം",
        gu: "ફક્ત યુ.એસ.માં જન્મ લેવાથી",
      },
      {
        en: "Only by serving in the military",
        ml: "സൈന്യത്തിൽ സേവനം ചെയ്താൽ മാത്രം",
        gu: "ફક્ત સેનામાં સેવા આપીને",
      },
      { en: "By paying taxes for 5 years", ml: "5 വർഷം നികുതി അടച്ചാൽ", gu: "5 વર્ષ ટૅક્સ ચૂકવ્યા પછી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "People can become U.S. citizens by being born in the U.S., through naturalization, or by deriving citizenship under law.",
      ml: "അമേരിക്കയിൽ ജനിച്ചോ, പൗരത്വ നേടൽ പ്രക്രിയയിലൂടെയോ, നിയമപ്രകാരം പൗരത്വം നേടിയോ ആളുകൾക്ക് യു.എസ്. പൗരന്മാരാകാം.",
      gu: "લોકો યુ.એસ.માં જન્મ લઈને, નૅચ્યુરલાઇઝેશન દ્વારા અથવા કાયદા હેઠળ નાગરિકતા મેળવીને યુ.એસ. નાગરિક બની શકે છે.",
    },
  },
  {
    id: "r005",
    topic: "rights",
    question: {
      en: "Why is it important to pay federal taxes?",
      ml: "ഫെഡറൽ നികുതി അടയ്ക്കുന്നത് എന്തുകൊണ്ട് പ്രധാനമാണ്?",
      gu: "ફેડરલ કર ચૂકવવો શા માટે મહત્વપૂર્ણ છે?",
    },
    options: [
      {
        en: "Required by law; funds the federal government",
        ml: "നിയമപ്രകാരം ആവശ്യമാണ്; ഫെഡറൽ ഗവൺമെന്റിന് ഫണ്ട് നൽകുന്നു",
        gu: "કાયદા દ્વારા ફરજિયાત; ફેડરલ સરકારને ભંડોળ પૂરું પાડે છે",
      },
      { en: "It is optional for citizens", ml: "പൗരന്മാർക്ക് ഇത് ഐച്ഛികമാണ്", gu: "તે નાગરિકો માટે ઐચ્છિક છે" },
      { en: "Only rich people need to pay", ml: "സമ്പന്നർ മാത്രം അടയ്ക്കണം", gu: "ફક્ત ધનવાન લોકોએ ચૂકવવું પડે છે" },
      { en: "To fund the military only", ml: "സൈന്യത്തിന് മാത്രം ഫണ്ട് നൽകാൻ", gu: "ફક્ત સેનાને ભંડોળ આપવા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Paying federal taxes is required by law (16th Amendment) and funds the federal government. It is a civic duty.",
      ml: "ഫെഡറൽ നികുതി അടയ്ക്കുന്നത് നിയമപ്രകാരം (16-ാം ഭേദഗതി) ആവശ്യമാണ്, ഇത് ഫെഡറൽ ഗവൺമെന്റിന് ഫണ്ട് നൽകുന്നു. ഇത് ഒരു പൗര കടമയാണ്.",
      gu: "ફેડરલ કર ચૂકવવો કાયદા (16મો સુધારો) દ્વારા ફરજિયાત છે અને ફેડરલ સરકારને ભંડોળ પૂરું પાડે છે. તે નાગરિક ફરજ છે.",
    },
  },
  {
    id: "r006",
    topic: "rights",
    question: {
      en: "What are three rights of everyone living in the United States?",
      ml: "അമേരിക്കയിൽ താമസിക്കുന്ന എല്ലാവരുടെയും മൂന്ന് അവകാശങ്ങൾ എന്തൊക്കെ?",
      gu: "યુનાઈટેડ સ્ટેટ્સમાં રહેતી દરેક વ્યક્તિના ત્રણ અધિકારો શું છે?",
    },
    options: [
      {
        en: "Freedom of speech, religion, and assembly",
        ml: "സംസാര സ്വാതന്ത്ര്യം, മത സ്വാതന്ത്ര്യം, സമ്മേളന സ്വാതന്ത്ര്യം",
        gu: "વાણી, ધર્મ અને સભાની સ્વતંત્રતા",
      },
      {
        en: "Free housing, food, and healthcare",
        ml: "സൗജന്യ പാർപ്പിടം, ഭക്ഷണം, ആരോഗ്യ പരിരക്ഷ",
        gu: "મફત આવાસ, ખોરાક અને આરોગ્ય સંભાળ",
      },
      {
        en: "Right to drive, travel, and work",
        ml: "ഡ്രൈവ് ചെയ്യാനും യാത്ര ചെയ്യാനും ജോലി ചെയ്യാനുമുള്ള അവകാശം",
        gu: "ડ્રાઇવ, મુસાફરી અને કામ કરવાનો અધિકાર",
      },
      {
        en: "Right to vote, own land, and bear arms only",
        ml: "വോട്ട് ചെയ്യാനും ഭൂമി സ്വന്തമാക്കാനും ആയുധം വഹിക്കാനും മാത്രമുള്ള അവകാശം",
        gu: "ફક્ત મતદાન, જમીનની માલિકી અને શસ્ત્ર રાખવાનો અધિકાર",
      },
    ],
    correctIndex: 0,
    explanation: {
      en: "Everyone living in the United States has freedom of expression, speech, assembly, religion, the right to petition the government, and bear arms.",
      ml: "അമേരിക്കയിൽ താമസിക്കുന്ന എല്ലാവർക്കും ആവിഷ്കാര സ്വാതന്ത്ര്യം, സംസാര സ്വാതന്ത്ര്യം, സമ്മേളന സ്വാതന്ത്ര്യം, മത സ്വാതന്ത്ര്യം, ഗവൺമെന്റിനോട് ഹർജി നൽകാനുള്ള അവകാശം, ആയുധം വഹിക്കാനുള്ള അവകാശം എന്നിവ ഉണ്ട്.",
      gu: "યુનાઈટેડ સ્ટેટ્સમાં રહેતી દરેક વ્યક્તિને અભિવ્યક્તિ, વાણી, સભા, ધર્મની સ્વતંત્રતા, સરકારને અરજી કરવાનો અધિકાર અને શસ્ત્ર રાખવાનો અધિકાર છે.",
    },
  },
  {
    id: "r007",
    topic: "rights",
    question: {
      en: "Name two promises new citizens make in the Oath of Allegiance.",
      ml: "വിശ്വസ്തത പ്രതിജ്ഞയിൽ പുതിയ പൗരന്മാർ നൽകുന്ന രണ്ട് വാഗ്ദാനങ്ങൾ പറയുക.",
      gu: "વફાદારીની શપથમાં નવા નાગરિકો જે બે વચનો આપે છે તેના નામ આપો.",
    },
    options: [
      {
        en: "Defend the Constitution and obey U.S. laws",
        ml: "ഭരണഘടനയെ സംരക്ഷിക്കുക, യു.എസ്. നിയമങ്ങൾ അനുസരിക്കുക",
        gu: "બંધારણ રક્ષા કરવી અને યુ.એસ. કાયદા પાળવા",
      },
      {
        en: "Pay taxes and serve on a jury",
        ml: "നികുതി അടയ്ക്കുക, ജൂറിയിൽ സേവിക്കുക",
        gu: "કર ચૂકવો અને જ્યુરીમાં સેવા આપો",
      },
      {
        en: "Learn English and pass a driving test",
        ml: "ഇംഗ്ലീഷ് പഠിക്കുക, ഡ്രൈവിംഗ് ടെസ്റ്റ് പാസ്സാകുക",
        gu: "અંગ્રેજી શીખો અને ડ્રાઇવિંગ ટેસ્ટ પાસ કરો",
      },
      { en: "Buy a house and get a job", ml: "ഒരു വീട് വാങ്ങുക, ജോലി നേടുക", gu: "ઘર ખરીદવું અને નોકરી મૅળવવી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "New citizens promise to give up loyalty to other countries, defend the Constitution, obey U.S. laws, serve in the military if needed, and be loyal to the United States.",
      ml: "പുതിയ പൗരന്മാർ മറ്റ് രാജ്യങ്ങളോടുള്ള വിശ്വസ്തത ഉപേക്ഷിക്കാനും, ഭരണഘടനയെ സംരക്ഷിക്കാനും, യു.എസ്. നിയമങ്ങൾ അനുസരിക്കാനും, ആവശ്യമെങ്കിൽ സൈന്യത്തിൽ സേവിക്കാനും വാഗ്ദാനം ചെയ്യുന്നു.",
      gu: "નવા નાગરિકો અન્ય દેશો પ્રત્યેની વફાદારી છોડવા, બંધારણનું રક્ષણ કરવા, યુ.એસ. કાયદાનું પાલન કરવા, જરૂર પડે તો સેનામાં સેવા આપવા અને યુનાઈટેડ સ્ટેટ્સ પ્રત્યે વફાદાર રહેવાનું વચન આપે છે.",
    },
  },
  {
    id: "r008",
    topic: "rights",
    question: {
      en: "Why must men aged 18–25 register for Selective Service?",
      ml: "18-25 വയസ്സുള്ള പുരുഷന്മാർ സെലക്ടീവ് സർവീസിന് രജിസ്റ്റർ ചെയ്യേണ്ടത് എന്തുകൊണ്ട്?",
      gu: "18-25 વર્ષના પુરુષોએ સિલેક્ટિવ સર્વિસ માટે નોંધણી શા માટે કરાવવી જોઈએ?",
    },
    options: [
      {
        en: "Required by law and civic duty",
        ml: "നിയമപ്രകാരം ആവശ്യമാണ്, പൗര കടമയാണ്",
        gu: "કાયદા દ્વારા ફરજિયાત અને નાગરિક ફરજ",
      },
      { en: "To get a driver's license", ml: "ഡ്രൈവിംഗ് ലൈസൻസ് ലഭിക്കാൻ", gu: "ડ્રાઇવિંગ લાઇસન્સ મેળવવા" },
      { en: "To vote in elections", ml: "തിരഞ്ഞെടുപ്പുകളിൽ വോട്ട് ചെയ്യാൻ", gu: "ચૂંટણીઓમાં મત આપવા" },
      { en: "It is optional", ml: "ഇത് ഐച്ഛികമാണ്", gu: "તે ઐચ્છિક છે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Registering for Selective Service is required by law, is a civic duty, and makes the draft fair if one is needed.",
      ml: "സെലക്ടീവ് സർവീസിൽ രജിസ്റ്റർ ചെയ്യുന്നത് നിയമപ്രകാരം ആവശ്യമാണ്, ഒരു പൗര കടമയാണ്, ആവശ്യമെങ്കിൽ നിർബന്ധ സൈനിക സേവനം ന്യായമാക്കുന്നു.",
      gu: "સિલેક્ટિવ સર્વિસ માટે નોંધણી કાયદા દ્વારા ફરજિયાત છે, નાગરિક ફરજ છે, અને જો જરૂર હોય તો ડ્રાફ્ટને ન્યાયી બનાવે છે.",
    },
  },

  // ═══════════════════════════════════════════════════
  // AMERICAN HISTORY (12 questions)
  // ═══════════════════════════════════════════════════
  {
    id: "h001",
    topic: "history",
    question: {
      en: "Who wrote the Declaration of Independence?",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം ആരാണ് എഴുതിയത്?",
      gu: "સ્વતંત્રતાનો ઘોષણાપત્ર કોણે લખ્યો?",
    },
    options: [
      { en: "Thomas Jefferson", ml: "തോമസ് ജെഫേഴ്സൺ", gu: "થોમસ જેફરસન" },
      { en: "George Washington", ml: "ജോർജ് വാഷിംഗ്ടൺ", gu: "જ્યોર્જ વોશિંગ્ટન" },
      { en: "Benjamin Franklin", ml: "ബെഞ്ചമിൻ ഫ്രാങ്ക്ലിൻ", gu: "બેન્જામિન ફ્રેન્કલિન" },
      { en: "John Adams", ml: "ജോൺ ആഡംസ്", gu: "જ્હોન એડમ્સ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Thomas Jefferson wrote the Declaration of Independence.",
      ml: "തോമസ് ജെഫേഴ്സൺ ആണ് സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതിയത്.",
      gu: "થૉમસ જેફરસને સ્વતંત્રતાનું ઘોષણાપત્ર લખ્યું.",
    },
  },
  {
    id: "h002",
    topic: "history",
    question: {
      en: "When was the Declaration of Independence adopted?",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എപ്പോൾ അംഗീകരിച്ചു?",
      gu: "સ્વતંત્રતાનો ઘોષણાપત્ર ક્યારે અપનાવવામાં આવ્યો?",
    },
    options: [
      { en: "July 4, 1776", ml: "1776 ജൂലൈ 4", gu: "4 જુલાઈ, 1776" },
      { en: "July 4, 1789", ml: "1789 ജൂലൈ 4", gu: "4 જુલાઈ, 1789" },
      { en: "July 4, 1800", ml: "1800 ജൂലൈ 4", gu: "4 જુલાઈ, 1800" },
      { en: "March 4, 1776", ml: "1776 മാർച്ച് 4", gu: "4 માર્ચ, 1776" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Declaration of Independence was adopted on July 4, 1776.",
      ml: "1776 ജൂലൈ 4-ന് സ്വാതന്ത്ര്യ പ്രഖ്യാപനം അംഗീകരിച്ചു.",
      gu: "સ્વતંત્રતાનો ઘોષણાપત્ર 4 જુલાઈ, 1776ના રોજ અપનાવવામાં આવ્યો.",
    },
  },
  {
    id: "h003",
    topic: "history",
    question: {
      en: "What war was fought for independence from Britain?",
      ml: "ബ്രിട്ടനിൽ നിന്നുള്ള സ്വാതന്ത്ര്യത്തിനായി ഏത് യുദ്ധമാണ് നടന്നത്?",
      gu: "બ્રિટનથી સ્વતંત્રતા માટે કયું યુદ્ધ લડવામાં આવ્યું?",
    },
    options: [
      { en: "American Revolutionary War", ml: "അമേരിക്കൻ വിപ്ലവ യുദ്ധം", gu: "અૅમેરિકન ક્રાંતિ-યુદ્ધ" },
      { en: "Civil War", ml: "ആഭ്യന്തര യുദ്ധം", gu: "ગૃહ-યુદ્ધ" },
      { en: "War of 1812", ml: "1812-ലെ യുദ്ധം", gu: "1812નું યુદ્ધ" },
      { en: "World War I", ml: "ഒന്നാം ലോക മഹായുദ്ധം", gu: "પ્રથમ વિશ્વયુદ્ધ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The American Revolutionary War was fought for independence from Britain.",
      ml: "ബ്രിട്ടനിൽ നിന്നുള്ള സ്വാതന്ത്ര്യത്തിനായി അമേരിക്കൻ വിപ്ലവ യുദ്ധം നടന്നു.",
      gu: "અમેરિકન ક્રાંતિકારી યુદ્ધ બ્રિટનથી સ્વતંત્રતા માટે લડવામાં આવ્યું હતું.",
    },
  },
  {
    id: "h004",
    topic: "history",
    question: {
      en: "What document was written in 1787?",
      ml: "1787-ൽ എഴുതിയ രേഖ ഏതാണ്?",
      gu: "1787માં કયો દસ્તાવેજ લખવામાં આવ્યો હતો?",
    },
    options: [
      { en: "U.S. Constitution", ml: "യു.എസ്. ഭരണഘടന", gu: "યુ.એસ. બંધારણ" },
      { en: "Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം", gu: "સ્વતંત્રતાનો ઘોષણાપત્ર" },
      { en: "Bill of Rights", ml: "അവകാശ ബിൽ", gu: "અધિકારોનું વિધેયક" },
      { en: "Articles of Confederation", ml: "കോൺഫെഡറേഷന്റെ ആർട്ടിക്കിളുകൾ", gu: "કન્ફૅડરેશનના લૅખ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. Constitution was written in 1787.",
      ml: "1787-ൽ യു.എസ്. ഭരണഘടന എഴുതി.",
      gu: "યુ.એસ. બંધારણ 1787માં લખવામાં આવ્યું હતું.",
    },
  },
  {
    id: "h005",
    topic: "history",
    question: {
      en: "Who lived in America before Europeans arrived?",
      ml: "യൂറോപ്യന്മാർ എത്തുന്നതിന് മുമ്പ് അമേരിക്കയിൽ ആരാണ് ജീവിച്ചിരുന്നത്?",
      gu: "યુરોપિયનોના આવ્યા પહેલાં અમેરિકામાં કોણ રહેતું હતું?",
    },
    options: [
      {
        en: "Native Americans / American Indians",
        ml: "നേറ്റീവ് അമേരിക്കക്കാർ / അമേരിക്കൻ ഇന്ത്യക്കാർ",
        gu: "મૂળ અમેરિકનો / અમેરિકન ઇન્ડિયન્સ",
      },
      { en: "British settlers", ml: "ബ്രിട്ടീഷ് കുടിയേറ്റക്കാർ", gu: "બ્રિટિશ વસાહતીઓ" },
      { en: "Spanish explorers", ml: "സ്പാനിഷ് പര്യവേക്ഷകർ", gu: "સ્પેનિશ અન્વેષકો" },
      { en: "French colonists", ml: "ഫ്രഞ്ച് കോളനിവാസികൾ", gu: "ફ્રેંચ વસાહતીઓ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Native Americans (American Indians) lived in America before Europeans arrived.",
      ml: "യൂറോപ്യന്മാർ എത്തുന്നതിന് മുമ്പ് നേറ്റീവ് അമേരിക്കക്കാർ (അമേരിക്കൻ ഇന്ത്യക്കാർ) അമേരിക്കയിൽ ജീവിച്ചിരുന്നു.",
      gu: "મૂળ અમેરિકનો (અમેરિકન ઇન્ડિયન્સ) યુરોપિયનોના આવ્યા પહેલાં અમેરિકામાં રહેતા હતા.",
    },
  },
  {
    id: "h006",
    topic: "history",
    question: {
      en: "What territory was bought from France in 1803?",
      ml: "1803-ൽ ഫ്രാൻസിൽ നിന്ന് വാങ്ങിയ പ്രദേശം ഏതാണ്?",
      gu: "1803માં ફ્રાન્સ પાસેથી કયો પ્રદેશ ખરીદવામાં આવ્યો?",
    },
    options: [
      { en: "Louisiana Territory", ml: "ലൂസിയാന പ്രദേശം", gu: "લુઇસિયાના પ્રદેશ" },
      { en: "Alaska", ml: "അലാസ്ക", gu: "અલાસ્કા" },
      { en: "Texas", ml: "ടെക്സസ്", gu: "ટેક્સાસ" },
      { en: "Florida", ml: "ഫ്ലോറിഡ", gu: "ફ્લોરિડા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Louisiana Territory was purchased from France in 1803.",
      ml: "1803-ൽ ഫ്രാൻസിൽ നിന്ന് ലൂസിയാന പ്രദേശം വാങ്ങി.",
      gu: "લુઇસિયાના પ્રદેશ 1803માં ફ્રાન્સ પાસેથી ખરીદવામાં આવ્યો હતો.",
    },
  },
  {
    id: "h007",
    topic: "history",
    question: {
      en: "What was the war between the North and the South?",
      ml: "വടക്കും തെക്കും തമ്മിലുള്ള യുദ്ധം ഏതായിരുന്നു?",
      gu: "ઉત્તર અને દક્ષિણ વચ્ચેનું યુદ્ધ શું હતું?",
    },
    options: [
      { en: "Civil War", ml: "ആഭ്യന്തര യുദ്ധം", gu: "ગૃહ-યુદ્ધ" },
      { en: "Revolutionary War", ml: "വിപ്ലവ യുദ്ധം", gu: "ક્રાંતિકારી યુદ્ધ" },
      { en: "War of 1812", ml: "1812-ലെ യുദ്ധം", gu: "1812નું યુદ્ધ" },
      { en: "World War I", ml: "ഒന്നാം ലോക മഹായുദ്ധം", gu: "પ્રથમ વિશ્વયુદ્ધ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Civil War was the war between the North and the South.",
      ml: "ആഭ്യന്തര യുദ്ധമായിരുന്നു വടക്കും തെക്കും തമ്മിലുള്ള യുദ്ധം.",
      gu: "ગૃહયુદ્ધ ઉત્તર અને દક્ષિણ વચ્ચેનું યુદ્ધ હતું.",
    },
  },
  {
    id: "h008",
    topic: "history",
    question: {
      en: "What did the Emancipation Proclamation do?",
      ml: "വിമോചന പ്രഖ്യാപനം എന്താണ് ചെയ്തത്?",
      gu: "Emancipation Proclamation એ શું કર્યું?",
    },
    options: [
      {
        en: "Freed slaves in Confederate states",
        ml: "കോൺഫെഡറേറ്റ് സംസ്ഥാനങ്ങളിലെ അടിമകളെ മോചിപ്പിച്ചു",
        gu: "સંઘીય રાજ્યોમાં ગુલામોને મુક્ત કર્યા",
      },
      { en: "Ended the Civil War", ml: "ആഭ്യന്തര യുദ്ധം അവസാനിപ്പിച്ചു", gu: "ગૃહયુદ્ધ સમાપ્ત કર્યું" },
      { en: "Created the Constitution", ml: "ഭരണഘടന സൃഷ്ടിച്ചു", gu: "બંધારણ બનાવ્યું" },
      { en: "Declared independence", ml: "സ്വാതന്ത്ര്യം പ്രഖ്യാപിച്ചു", gu: "સ્વાધીનતા જાહેર કરી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Emancipation Proclamation freed slaves in the Confederate states during the Civil War.",
      ml: "ആഭ്യന്തര യുദ്ധ സമയത്ത് കോൺഫെഡറേറ്റ് സംസ്ഥാനങ്ങളിലെ അടിമകളെ വിമോചന പ്രഖ്യാപനം മോചിപ്പിച്ചു.",
      gu: "મુક્તિ ઘોષણાએ ગૃહયુદ્ધ દરમિયાન સંઘીય રાજ્યોમાં ગુલામોને મુક્ત કર્યા.",
    },
  },
  {
    id: "h009",
    topic: "history",
    question: {
      en: "Who was President during the Great Depression and World War II?",
      ml: "മഹാ മാന്ദ്യത്തിന്റെയും രണ്ടാം ലോക മഹായുദ്ധത്തിന്റെയും സമയത്ത് പ്രസിഡന്റ് ആരായിരുന്നു?",
      gu: "મહામંદી અને દ્વિતીય વિશ્વયુદ્ધ દરમિયાન રાષ્ટ્રપતિ કોણ હતા?",
    },
    options: [
      { en: "Franklin Roosevelt", ml: "ഫ്രാങ്ക്ലിൻ റൂസ്‌വെൽറ്റ്", gu: "ફ્રેન્કલિન રૂઝવેલ્ટ" },
      { en: "Harry Truman", ml: "ഹാരി ട്രൂമാൻ", gu: "હૅરી ટ્રુમૅન" },
      { en: "Herbert Hoover", ml: "ഹെർബർട്ട് ഹൂവർ", gu: "હર્બર્ટ હૂવર" },
      { en: "Dwight Eisenhower", ml: "ഡ്വൈറ്റ് ഐസൻഹോവർ", gu: "ડ્વાઈટ આઈઝનહાવર" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Franklin Roosevelt was President during both the Great Depression and World War II.",
      ml: "മഹാ മാന്ദ്യത്തിന്റെയും രണ്ടാം ലോക മഹായുദ്ധത്തിന്റെയും സമയത്ത് ഫ്രാങ്ക്ലിൻ റൂസ്‌വെൽറ്റ് ആയിരുന്നു പ്രസിഡന്റ്.",
      gu: "ફ્રેન્કલિન રૂઝવેલ્ટ મહામંદી અને બીજા વિશ્વયુદ્ધ બંને દરમિયાન રાષ્ટ્રપતિ હતા.",
    },
  },
  {
    id: "h010",
    topic: "history",
    question: {
      en: "What happened on September 11, 2001?",
      ml: "2001 സെപ്റ്റംബർ 11-ന് എന്താണ് സംഭവിച്ചത്?",
      gu: "11 સપ્ટેમ્બર, 2001ના રોજ શું થયું?",
    },
    options: [
      {
        en: "Terrorist attacks on the United States",
        ml: "അമേരിക്കയിൽ ഭീകരാക്രമണങ്ങൾ",
        gu: "યુનાઈટેડ સ્ટેટ્સ પર આતંકવાદી હુમલા",
      },
      { en: "Pearl Harbor attack", ml: "പേൾ ഹാർബർ ആക്രമണം", gu: "પર્લ હાર્બર હુમલો" },
      { en: "End of the Cold War", ml: "ശീതയുദ്ധത്തിന്റെ അവസാനം", gu: "શીત યુદ્ધનો અંત" },
      { en: "Hurricane Katrina", ml: "ഹറിക്കേൻ കത്രീന", gu: "વાવાઝોડું કેટ્રિના" },
    ],
    correctIndex: 0,
    explanation: {
      en: "On September 11, 2001, terrorists attacked the United States.",
      ml: "2001 സെപ്റ്റംബർ 11-ന് ഭീകരവാദികൾ അമേരിക്കയെ ആക്രമിച്ചു.",
      gu: "11 સપ્ટેમ્બર, 2001ના રોજ, આતંકવાદીઓએ યુનાઈટેડ સ્ટેટ્સ પર હુમલો કર્યો.",
    },
  },
  {
    id: "h011",
    topic: "history",
    question: {
      en: "What war ended slavery?",
      ml: "ഏത് യുദ്ധമാണ് അടിമത്തം അവസാനിപ്പിച്ചത്?",
      gu: "કયા યુદ્ધે ગુલામી સમાપ્ત કરી?",
    },
    options: [
      { en: "Civil War", ml: "ആഭ്യന്തര യുദ്ധം", gu: "ગૃહ-યુદ્ધ" },
      { en: "Revolutionary War", ml: "വിപ്ലവ യുദ്ധം", gu: "ક્રાંતિકારી યુદ્ધ" },
      { en: "World War I", ml: "ഒന്നാം ലോക മഹായുദ്ധം", gu: "પ્રથમ વિશ્વયુદ્ધ" },
      { en: "War of 1812", ml: "1812-ലെ യുദ്ധം", gu: "1812નું યુદ્ધ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Civil War ended slavery in the United States.",
      ml: "ആഭ്യന്തര യുദ്ധം അമേരിക്കയിലെ അടിമത്തം അവസാനിപ്പിച്ചു.",
      gu: "ગૃહયુદ્ધે યુનાઈટેડ સ્ટેટ્સમાં ગુલામી સમાપ્ત કરી.",
    },
  },
  {
    id: "h012",
    topic: "history",
    question: {
      en: "When did women get the right to vote?",
      ml: "സ്ത്രീകൾക്ക് എപ്പോൾ വോട്ടവകാശം ലഭിച്ചു?",
      gu: "મહિલાઓને મતદાનનો અધિકાર ક્યારે મળ્યો?",
    },
    options: [
      { en: "1920 (19th Amendment)", ml: "1920 (19-ാം ഭേദഗതി)", gu: "1920 (19મો સુધારો)" },
      { en: "1776", ml: "1776", gu: "1776" },
      { en: "1870 (15th Amendment)", ml: "1870 (15-ാം ഭേദഗതി)", gu: "1870 (15મો સુધારો)" },
      { en: "1950", ml: "1950", gu: "1950" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Women got the right to vote in 1920 with the 19th Amendment.",
      ml: "19-ാം ഭേദഗതിയിലൂടെ 1920-ൽ സ്ത്രീകൾക്ക് വോട്ടവകാശം ലഭിച്ചു.",
      gu: "1920માં 19મા સુધારા સાથે મહિલાઓને મતદાનનો અધિકાર મળ્યો.",
    },
  },

  // ═══════════════════════════════════════════════════
  // SYMBOLS & HOLIDAYS (7 questions)
  // ═══════════════════════════════════════════════════
  {
    id: "s001",
    topic: "symbols",
    question: {
      en: "What is the capital of the United States?",
      ml: "അമേരിക്കയുടെ തലസ്ഥാനം ഏതാണ്?",
      gu: "યુનાઈટેડ સ્ટેટ્સની રાજધાની શું છે?",
    },
    options: [
      { en: "Washington, D.C.", ml: "വാഷിംഗ്ടൺ, ഡി.സി.", gu: "વૉશિંગ્ટન, ડી.સી." },
      { en: "New York City", ml: "ന്യൂയോർക്ക് സിറ്റി", gu: "ન્યૂ યૉર્ક સિટી" },
      { en: "Los Angeles", ml: "ലോസ് ഏഞ്ചലസ്", gu: "લૉસ એન્જલસ" },
      { en: "Philadelphia", ml: "ഫിലാഡൽഫിയ", gu: "ફિલાડેલ્ફિયા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Washington, D.C. is the capital of the United States.",
      ml: "വാഷിംഗ്ടൺ, ഡി.സി. ആണ് അമേരിക്കയുടെ തലസ്ഥാനം.",
      gu: "વૉશિંગ્ટન, ડી.સી. યુનાઈટેડ સ્ટેટ્સની રાજધાની છે.",
    },
  },
  {
    id: "s002",
    topic: "symbols",
    question: {
      en: "Why does the flag have 13 stripes?",
      ml: "പതാകയിൽ 13 വരകൾ ഉള്ളത് എന്തുകൊണ്ട്?",
      gu: "ધ્વજમાં 13 પટ્ટીઓ કેમ છે?",
    },
    options: [
      { en: "For the 13 original colonies", ml: "13 യഥാർത്ഥ കോളനികൾക്ക്", gu: "13 મૂળ વસાહતો માટે" },
      { en: "For the 13 amendments", ml: "13 ഭേദഗതികൾക്ക്", gu: "13 સુધારાઓ માટે" },
      { en: "For the 13 presidents", ml: "13 പ്രസിഡന്റുമാർക്ക്", gu: "13 રાષ્ટ્રપતિઓ માટે" },
      { en: "For the 13 wars", ml: "13 യുദ്ധങ്ങൾക്ക്", gu: "13 યુદ્ધો માટે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The flag has 13 stripes representing the 13 original colonies.",
      ml: "13 യഥാർത്ഥ കോളനികളെ പ്രതിനിധീകരിച്ച് പതാകയിൽ 13 വരകൾ ഉണ്ട്.",
      gu: "ધ્વજમાં 13 મૂળ વસાહતોનું પ્રતિનિધિત્વ કરતી 13 પટ્ટીઓ છે.",
    },
  },
  {
    id: "s003",
    topic: "symbols",
    question: {
      en: "Why does the flag have 50 stars?",
      ml: "പതാകയിൽ 50 നക്ഷത്രങ്ങൾ ഉള്ളത് എന്തുകൊണ്ട്?",
      gu: "ધ્વજમાં 50 તારા કેમ છે?",
    },
    options: [
      { en: "One for each state", ml: "ഓരോ സംസ്ഥാനത്തിനും ഓരോന്ന്", gu: "દરેક રાજ્ય માટે એક" },
      { en: "One for each president", ml: "ഓരോ പ്രസിഡന്റിനും ഓരോന്ന്", gu: "દરેક રાષ્ટ્રપતિ માટે એક" },
      { en: "One for each amendment", ml: "ഓരോ ഭേദഗതിക്കും ഓരോന്ന്", gu: "દરેક સુધારા માટે એક" },
      {
        en: "One for each year of independence",
        ml: "സ്വാതന്ത്ര്യത്തിന്റെ ഓരോ വർഷത്തിനും ഓരോന്ന്",
        gu: "સ્વતંત્રતાના દરેક વર્ષ માટે એક",
      },
    ],
    correctIndex: 0,
    explanation: {
      en: "The flag has 50 stars because there is one star for each of the 50 states.",
      ml: "50 സംസ്ഥാനങ്ങളിൽ ഓരോന്നിനും ഓരോ നക്ഷത്രം ഉള്ളതിനാൽ പതാകയിൽ 50 നക്ഷത്രങ്ങൾ ഉണ്ട്.",
      gu: "ધ્વજમાં 50 તારા છે કારણ કે 50 રાજ્યોમાંના દરેક માટે એક તારો છે.",
    },
  },
  {
    id: "s004",
    topic: "symbols",
    question: {
      en: "What is the national anthem?",
      ml: "ദേശീയ ഗാനം ഏതാണ്?",
      gu: "રાષ્ટ્રગીત શું છે?",
    },
    options: [
      { en: "The Star-Spangled Banner", ml: "ദി സ്റ്റാർ-സ്പാംഗിൾഡ് ബാനർ", gu: "ધ સ્ટાર-સ્પેન્ગલ્ડ બેનર" },
      { en: "America the Beautiful", ml: "അമേരിക്ക ദി ബ്യൂട്ടിഫുൾ", gu: "અમેરિકા ધ બ્યુટિફુલ" },
      { en: "God Bless America", ml: "ഗോഡ് ബ്ലെസ് അമേരിക്ക", gu: "ગોડ બ્લેસ અમેરિકા" },
      { en: "My Country, 'Tis of Thee", ml: "മൈ കൺട്രി, ടിസ് ഓഫ് ദീ", gu: "માય કન્ટ્રી, ટિઝ ઓફ ધી" },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The national anthem is "The Star-Spangled Banner."',
      ml: '"ദി സ്റ്റാർ-സ്പാംഗിൾഡ് ബാനർ" ആണ് ദേശീയ ഗാനം.',
      gu: 'રાષ્ટ્રગીત "ધ સ્ટાર-સ્પેન્ગલ્ડ બેનર" છે.',
    },
  },
  {
    id: "s005",
    topic: "symbols",
    question: {
      en: 'What does "E Pluribus Unum" mean?',
      ml: '"ഇ പ്ലൂരിബസ് യൂനം" എന്നാൽ എന്താണ് അർത്ഥം?',
      gu: '"ઇ પ્લ્યુરિબસ યુનમ" નો અર્થ શું છે?',
    },
    options: [
      { en: "Out of many, one", ml: "അനേകത്തിൽ നിന്ന് ഒന്ന്", gu: "ઘણામાંથી એક" },
      { en: "In God we trust", ml: "ദൈവത്തിൽ നാം വിശ്വസിക്കുന്നു", gu: "ભગવાનમાં આપણને વિશ્વાસ છે" },
      { en: "Liberty and justice", ml: "സ്വാതന്ത്ര്യവും നീതിയും", gu: "સ્વતંત્રતા અને ન્યાય" },
      { en: "We the people", ml: "നമ്മൾ ജനങ്ങൾ", gu: "અમે લોકો" },
    ],
    correctIndex: 0,
    explanation: {
      en: '"E Pluribus Unum" means "Out of many, one."',
      ml: '"ഇ പ്ലൂരിബസ് യൂനം" എന്നാൽ "അനേകത്തിൽ നിന്ന് ഒന്ന്" എന്നാണ് അർത്ഥം.',
      gu: '"ઇ પ્લ્યુરિબસ યુનમ" નો અર્થ "ઘણામાંથી એક" છે.',
    },
  },
  {
    id: "s006",
    topic: "symbols",
    question: {
      en: "What is Memorial Day?",
      ml: "മെമ്മോറിയൽ ഡേ എന്താണ്?",
      gu: "મેમોરિયલ ડે શું છે?",
    },
    options: [
      {
        en: "A day to honor soldiers who died in service",
        ml: "സേവനത്തിൽ മരിച്ച സൈനികരെ ബഹുമാനിക്കുന്ന ദിനം",
        gu: "સેવામાં સ્વર્ગ ગયેલ સૈનિકોને સ્મૃતિ-અર્પણ કરવાનો દિવસ",
      },
      {
        en: "A day to celebrate independence",
        ml: "സ്വാതന്ത്ര്യം ആഘോഷിക്കുന്ന ദിനം",
        gu: "સ્વાધીનતા ઉજવવાનો દિવસ",
      },
      {
        en: "A day to honor living veterans",
        ml: "ജീവിച്ചിരിക്കുന്ന വെറ്ററൻസിനെ ബഹുമാനിക്കുന്ന ദിനം",
        gu: "જીવિત જૂના સૈનિકોને સન્માનવાનો દિવસ",
      },
      {
        en: "Presidents' birthday celebration",
        ml: "പ്രസിഡന്റുമാരുടെ ജന്മദിന ആഘോഷം",
        gu: "રાષ્ટ્રપતિઓના જન્મદિવસની ઉજવણી",
      },
    ],
    correctIndex: 0,
    explanation: {
      en: "Memorial Day honors soldiers who died in military service.",
      ml: "സൈനിക സേവനത്തിൽ മരിച്ച സൈനികരെ ബഹുമാനിക്കുന്ന ദിനമാണ് മെമ്മോറിയൽ ഡേ.",
      gu: "મેમોરિયલ ડે લશ્કરી સેવામાં મૃત્યુ પામેલા સૈનિકોનું સન્માન કરે છે.",
    },
  },
  {
    id: "s007",
    topic: "symbols",
    question: {
      en: "What is Independence Day?",
      ml: "സ്വാതന്ത്ര്യ ദിനം എന്താണ്?",
      gu: "સ્વતંત્રતા દિવસ શું છે?",
    },
    options: [
      {
        en: "Celebration of U.S. independence (country's birthday)",
        ml: "അമേരിക്കൻ സ്വാതന്ത്ര്യത്തിന്റെ ആഘോഷം (രാജ്യത്തിന്റെ ജന്മദിനം)",
        gu: "યુ.એસ. સ્વાધીનતા ઉત્સવ (દેશ-જન્મ-ઉત્સવ)",
      },
      { en: "End of the Civil War", ml: "ആഭ്യന്തര യുദ്ധത്തിന്റെ അവസാനം", gu: "ગૃહયુદ્ધનો અંત" },
      { en: "Signing of the Constitution", ml: "ഭരണഘടനയുടെ ഒപ്പിടൽ", gu: "બંધારણ પર હસ્તાક્ષર" },
      { en: "Thanksgiving", ml: "നന്ദി ദിനം", gu: "થેંક્સગિવિંગ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Independence Day celebrates the adoption of the Declaration of Independence — the country's birthday on July 4.",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനത്തിന്റെ അംഗീകരണം ആഘോഷിക്കുന്നതാണ് സ്വാതന്ത്ര്യ ദിനം — ജൂലൈ 4-ന് രാജ്യത്തിന്റെ ജന്മദിനം.",
      gu: "સ્વતંત્રતા દિવસ સ્વતંત્રતાના ઘોષણાપત્રને અપનાવવાની ઉજવણી કરે છે — 4 જુલાઈએ દેશનો જન્મદિવસ.",
    },
  },


  // ═══════════════════════════════════════════════════
  // ADDITIONAL QUESTIONS (80 more from official civics test)
  // ═══════════════════════════════════════════════════
  {
    id: "g016",
    topic: "government",
    question: {
      en: "Name one thing the U.S. Constitution does.",
      ml: "അമേരിക്കൻ ഭരണഘടന ചെയ്യുന്ന ഒരു കാര്യം പറയുക.",
      gu: "યુ.એસ. બંધારણ શું કરે છે તેમાંથી એક વસ્તુનું નામ આપો.",
    },
    options: [
      { en: "Protects the rights of the people", ml: "ജനങ്ങളുടെ അവകാശങ്ങൾ സംരക്ഷിക്കുന്നു", gu: "લોકોના અધિકારોનું રક્ષણ કરે છે" },
      { en: "Elects the President", ml: "പ്രസിഡന്റിനെ തിരഞ്ഞെടുക്കുന്നു", gu: "રાષ્ટ્રપતિને ચૂંટે છે" },
      { en: "Declares war on other countries", ml: "മറ്റ് രാജ്യങ്ങൾക്കെതിരെ യുദ്ധം പ്രഖ്യാപിക്കുന്നു", gu: "અન્ય દેશો સામે યુદ્ધ જાહેર કરે" },
      { en: "Collects taxes from citizens", ml: "പൗരന്മാരിൽ നിന്ന് നികുതി ശേഖരിക്കുന്നു", gu: "નાગરિકો પાસેથી ટૅક્સ વસૂલ કરે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Constitution forms the government, defines its powers, and protects the rights of the people.",
      ml: "ഭരണഘടന ഗവൺമെന്റ് രൂപീകരിക്കുകയും അതിന്റെ അധികാരങ്ങൾ നിർവചിക്കുകയും ജനങ്ങളുടെ അവകാശങ്ങൾ സംരക്ഷിക്കുകയും ചെയ്യുന്നു.",
      gu: "બંધારણ સરકાર બનાવે છે, તેની સત્તાઓ વ્યાખ્યાયિત કરે છે અને લોકોના અધિકારોનું રક્ષણ કરે છે.",
    },
  },
  {
    id: "g017",
    topic: "government",
    question: {
      en: "The U.S. Constitution starts with \"We the People.\" What does \"We the People\" mean?",
      ml: "അമേരിക്കൻ ഭരണഘടന \"We the People\" (നാം ജനങ്ങൾ) എന്ന വാക്കുകളിൽ തുടങ്ങുന്നു. ഇതിന്റെ അർഥം എന്താണ്?",
      gu: "યુ.એસ. બંધારણ \"We the People\" થી શરૂ થાય છે. \"We the People\" નો અર્થ શું છે?",
    },
    options: [
      { en: "The President rules alone", ml: "പ്രസിഡന്റ് ഒറ്റയ്ക്ക് ഭരിക്കുന്നു", gu: "રાષ્ટ્રપતિ એકલા શાસન કરે છે" },
      { en: "Self-government / Popular sovereignty", ml: "സ്വയം ഭരണം / ജനകീയ പരമാധികാരം", gu: "સ્વ-શાસન / લોકપ્રિય સાર્વભૌમત્વ" },
      { en: "Only rich people have rights", ml: "സമ്പന്നർക്ക് മാത്രമാണ് അവകാശങ്ങൾ", gu: "ફક્ત ધનવાન લોકોને અધિકારો છે" },
      { en: "The military controls the country", ml: "സൈന്യം രാജ്യം നിയന്ത്രിക്കുന്നു", gu: "સેના દેશ પર નિયંત્રણ કરે છે" },
    ],
    correctIndex: 1,
    explanation: {
      en: "\"We the People\" means self-government — the people govern themselves through consent of the governed.",
      ml: "\"We the People\" എന്നാൽ സ്വയം ഭരണമാണ് — ജനങ്ങൾ സ്വയം ഭരിക്കുന്നു.",
      gu: "\"We the People\" નો અર્થ સ્વ-શાસન છે — લોકો શાસિતોની સંમતિથી પોતાનું શાસન કરે છે.",
    },
  },
  {
    id: "g018",
    topic: "government",
    question: {
      en: "How are changes made to the U.S. Constitution?",
      ml: "അമേരിക്കൻ ഭരണഘടനയിൽ മാറ്റങ്ങൾ എങ്ങനെ വരുത്തുന്നു?",
      gu: "યુ.એસ. બંધારણમાં ફેરફાર કેવી રીતે કરવામાં આવે છે?",
    },
    options: [
      { en: "By presidential order", ml: "പ്രസിഡൻഷ്യൽ ഉത്തരവ് വഴി", gu: "રાષ્ટ્રપતિ-આદેશ દ્વારા" },
      { en: "By Supreme Court ruling", ml: "സുപ്രീം കോടതി വിധി വഴി", gu: "સુપ્રીમ કોર્ટ ચુકાદા દ્વારા" },
      { en: "Amendments", ml: "ഭേദഗതികൾ", gu: "સુધારા" },
      { en: "By popular vote only", ml: "ജനകീയ വോട്ട് മാത്രം വഴി", gu: "માત્ર લોકમત દ્વારા" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Changes to the Constitution are made through the amendment process.",
      ml: "ഭരണഘടനയിലെ മാറ്റങ്ങൾ ഭേദഗതി പ്രക്രിയയിലൂടെ വരുത്തുന്നു.",
      gu: "બંધારણમાં ફૅરફાર સુધારા-પ્રક્રિયા દ્વારા કરવામાં આવે છે.",
    },
  },
  {
    id: "g019",
    topic: "government",
    question: {
      en: "Why is the Declaration of Independence important?",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എന്തുകൊണ്ട് പ്രധാനമാണ്?",
      gu: "સ્વતંત્રતાનું ઘોષણાપત્ર શા માટે મહત્વપૂર્ણ છે?",
    },
    options: [
      { en: "It created the Supreme Court", ml: "ഇത് സുപ്രീം കോടതി സൃഷ്ടിച്ചു", gu: "તેણે સુપ્રીમ કોર્ટ બનાવી" },
      { en: "It established the tax system", ml: "ഇത് നികുതി സമ്പ്രദായം സ്ഥാപിച്ചു", gu: "તેણે કર પ્રણાલી સ્થાપિત કરી" },
      { en: "It says America is free from Britain and all people are created equal", ml: "അമേരിക്ക ബ്രിട്ടനിൽ നിന്ന് സ്വതന്ത്രമാണെന്നും എല്ലാവരും സമന്മാരാണെന്നും അത് പറയുന്നു", gu: "તે કહે છે કે અમેરિકા બ્રિટનથી મુક્ત છે અને બધા લોકો સમાન બનાવવામાં આવ્યા છે" },
      { en: "It ended the Civil War", ml: "ഇത് ആഭ്യന്തര യുദ്ധം അവസാനിപ്പിച്ചു", gu: "તેણે ગૃહયુદ્ધ સમાપ્ત કર્યું" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The Declaration of Independence says America is free from British control and that all people are created equal.",
      ml: "അമേരിക്ക ബ്രിട്ടനിൽ നിന്ന് സ്വതന്ത്രമാണെന്നും എല്ലാവരും സമന്മാരായി സൃഷ്ടിക്കപ്പെട്ടിരിക്കുന്നുവെന്നും സ്വാതന്ത്ര്യ പ്രഖ്യാപനം പറയുന്നു.",
      gu: "સ્વતંત્રતાનું ઘોષણાપત્ર કહે છે કે અમેરિકા બ્રિટિશ નિયંત્રણથી મુક્ત છે અને બધા લોકો સમાન બનાવવામાં આવ્યા છે.",
    },
  },
  {
    id: "g020",
    topic: "government",
    question: {
      en: "What founding document said the American colonies were free from Britain?",
      ml: "അമേരിക്കൻ കോളനികൾ ബ്രിട്ടനിൽ നിന്ന് സ്വതന്ത്രമാണെന്ന് ഏത് രൂപകർത്ത രേഖ പറഞ്ഞു?",
      gu: "કયા સ્થાપક દસ્તાવેજે કહ્યું કે અમેરિકન વસાહતો બ્રિટનથી મુક્ત છે?",
    },
    options: [
      { en: "Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം", gu: "સ્વતંત્રતાનો ઘોષણાપત્ર" },
      { en: "U.S. Constitution", ml: "യു.എസ്. ഭരണഘടന", gu: "યુ.એસ. બંધારણ" },
      { en: "Bill of Rights", ml: "അവകാശ ബിൽ", gu: "અધિકારોનું વિધેયક" },
      { en: "Federalist Papers", ml: "ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ്", gu: "ફેડરલિસ્ટ પેપર્સ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Declaration of Independence declared the colonies free from Britain.",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം കോളനികളെ ബ്രിട്ടനിൽ നിന്ന് സ്വതന്ത്രമായി പ്രഖ്യാപിച്ചു.",
      gu: "સ્વતંત્રતાના ઘોષણાપત્રે વસાહતોને બ્રિટનથી મુક્ત જાહેર કરી.",
    },
  },
  {
    id: "g021",
    topic: "government",
    question: {
      en: "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനത്തിൽ നിന്നും ഭരണഘടനയിൽ നിന്നുമുള്ള രണ്ട് പ്രധാന ആശയങ്ങൾ പറയുക.",
      gu: "સ્વતંત્રતાના ઘોષણાપત્ર અને યુ.એસ. બંધારણમાંથી બે મહત્વપૂર્ણ વિચારોના નામ આપો.",
    },
    options: [
      { en: "Taxation and military service", ml: "നികുതിയും സൈനിക സേവനവും", gu: "કરવેરા અને લશ્કરી સેવા" },
      { en: "Equality and liberty", ml: "സമത്വവും സ്വാതന്ത്ര്യവും", gu: "સમાનતા અને સ્વતંત્રતા" },
      { en: "Trade and commerce", ml: "വ്യാപാരവും വാണിജ്യവും", gu: "વેપાર અને વાણિજ્ય" },
      { en: "Immigration and citizenship", ml: "കുടിയേറ്റവും പൗരത്വവും", gu: "ઇમિગ્રેશન અને નાગરિકતા" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Important ideas include equality, liberty, social contract, natural rights, limited government, and self-government.",
      ml: "സമത്വം, സ്വാതന്ത്ര്യം, സാമൂഹിക കരാർ, പ്രകൃതിദത്ത അവകാശങ്ങൾ, പരിമിതമായ ഗവൺമെന്റ്, സ്വയം ഭരണം എന്നിവ പ്രധാന ആശയങ്ങളാണ്.",
      gu: "મહત્વપૂર્ણ વિચારોમાં સમાનતા, સ્વતંત્રતા, સામાજિક કરાર, કુદરતી અધિકારો, મર્યાદિત સરકાર અને સ્વ-શાસન શામેલ છે.",
    },
  },
  {
    id: "g022",
    topic: "government",
    question: {
      en: "The words \"Life, Liberty, and the pursuit of Happiness\" are in what founding document?",
      ml: "\"ജീവൻ, സ്വാതന്ത്ര്യം, സന്തോഷം തേടൽ\" എന്ന വാക്കുകൾ ഏത് രൂപകർത്ത രേഖയിലാണ്?",
      gu: "\"Life, Liberty, and the pursuit of Happiness\" શબ્દો કયા સ્થાપક દસ્તાવેજમાં છે?",
    },
    options: [
      { en: "Bill of Rights", ml: "അവകാശ ബിൽ", gu: "અધિકારોનું વિધેયક" },
      { en: "U.S. Constitution", ml: "യു.എസ്. ഭരണഘടന", gu: "યુ.એસ. બંધારણ" },
      { en: "Articles of Confederation", ml: "കോൺഫെഡറേഷന്റെ ആർട്ടിക്കിളുകൾ", gu: "કન્ફૅડરેશનના લૅખ" },
      { en: "Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം", gu: "સ્વતંત્રતાનો ઘોષણાપત્ર" },
    ],
    correctIndex: 3,
    explanation: {
      en: "\"Life, Liberty, and the pursuit of Happiness\" are words from the Declaration of Independence.",
      ml: "\"ജീവൻ, സ്വാതന്ത്ര്യം, സന്തോഷം തേടൽ\" സ്വാതന്ത്ര്യ പ്രഖ്യാപനത്തിലെ വാക്കുകളാണ്.",
      gu: "\"Life, Liberty, and the pursuit of Happiness\" સ્વતંત્રતાના ઘોષણાપત્રના શબ્દો છે.",
    },
  },
  {
    id: "g023",
    topic: "government",
    question: {
      en: "What is the rule of law?",
      ml: "നിയമ ഭരണം (Rule of Law) എന്നാൽ എന്ത്?",
      gu: "કાયદાનું શાસન શું છે?",
    },
    options: [
      { en: "Everyone must follow the law; no one is above the law", ml: "എല്ലാവരും നിയമം പാലിക്കണം; ആരും നിയമത്തിന് അതീതരല്ല", gu: "દરેક વ્યક્તિએ કાયદાનું પાલન કરવું જોઈએ; કોઈ કાયદાથી ઉપર નથી" },
      { en: "Only citizens must follow the law", ml: "പൗരന്മാർ മാത്രം നിയമം പാലിക്കണം", gu: "માત્ર નાગરિકોએ કાયદાનું પાલન કરવું જોઈએ" },
      { en: "The President can change any law", ml: "പ്രസിഡന്റിന് ഏത് നിയമവും മാറ്റാം", gu: "રાષ્ટ્રપતિ કોઈપણ કાયદો બદલી શકે છે" },
      { en: "Laws apply only to poor people", ml: "നിയമങ്ങൾ ദരിദ്രർക്ക് മാത്രം ബാധകം", gu: "કાયદા ફક્ત ગરીબ લોકોને લાગુ પડે છે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The rule of law means everyone must follow the law — leaders, government, and no one is above the law.",
      ml: "നിയമ ഭരണം എന്നാൽ നേതാക്കളും ഗവൺമെന്റും ഉൾപ്പെടെ എല്ലാവരും നിയമം പാലിക്കണം, ആരും നിയമത്തിന് അതീതരല്ല.",
      gu: "કાયદાના શાસનનો અર્થ છે કે દરેક વ્યક્તિએ કાયદાનું પાલન કરવું જોઈએ — નેતાઓ, સરકાર, અને કોઈ કાયદાથી ઉપર નથી.",
    },
  },
  {
    id: "g024",
    topic: "government",
    question: {
      en: "Many documents influenced the U.S. Constitution. Name one.",
      ml: "പല രേഖകൾ അമേരിക്കൻ ഭരണഘടനയെ സ്വാധീനിച്ചു. ഒന്ന് പറയുക.",
      gu: "ઘણા દસ્તાવેજોએ યુ.એસ. બંધારણને પ્રભાવિત કર્યું. એકનું નામ આપો.",
    },
    options: [
      { en: "Communist Manifesto", ml: "കമ്മ്യൂണിസ്റ്റ് മാനിഫെസ്റ്റോ", gu: "કૉમ્યુનિસ્ટ ઘોષણાપત્ર" },
      { en: "Mayflower Compact", ml: "മേഫ്ലവർ കോംപാക്ട്", gu: "મેફ્લાવર કૉમ્પેક્ટ" },
      { en: "Treaty of Paris", ml: "പാരീസ് ഉടമ്പടി", gu: "પેરિસની સંધિ" },
      { en: "Magna Carta only", ml: "മാഗ്ന കാർട്ട മാത്രം", gu: "ફક્ત મેગ્ના કાર્ટા" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Documents that influenced the Constitution include the Declaration of Independence, Articles of Confederation, Federalist Papers, and Mayflower Compact.",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം, കോൺഫെഡറേഷൻ ആർട്ടിക്കിൾസ്, ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ്, മേഫ്ലവർ കോംപാക്ട് എന്നിവ ഭരണഘടനയെ സ്വാധീനിച്ച രേഖകളാണ്.",
      gu: "બંધારણ પ્રભાવિત દસ્તાવેજોમાં સ્વાધીનતા ઘોષણા, કન્ફૅડરેશન લૅખ, ફૅડરલિસ્ટ પેપર્સ, અને મૅફ્લાઉર કૉમ્પૅક્ટ સામેલ છે.",
    },
  },
  {
    id: "g025",
    topic: "government",
    question: {
      en: "There are three branches of government. Why?",
      ml: "മൂന്ന് ഗവൺമെന്റ് ശാഖകൾ ഉള്ളത് എന്തുകൊണ്ട്?",
      gu: "સરકારની ત્રણ શાખાઓ છે. શા માટે?",
    },
    options: [
      { en: "To make government work faster", ml: "ഗവൺമെന്റ് വേഗത്തിൽ പ്രവർത്തിക്കാൻ", gu: "સરકારને ઝડપથી કામ કરાવવા" },
      { en: "Because the Constitution is long", ml: "ഭരണഘടന നീളമുള്ളതായതിനാൽ", gu: "કારણ કે બંધારણ લાંબું છે" },
      { en: "So one part does not become too powerful (checks and balances)", ml: "ഒരു ഭാഗം വളരെ ശക്തമാകാതിരിക്കാൻ (ചെക്ക്സ് ആൻഡ് ബാലൻസസ്)", gu: "જેથી કોઈ એક ભાગ ખૂબ શક્તિશાળી ન બને (ચેક્સ અને બૅલેન્સ)" },
      { en: "To give more jobs to people", ml: "കൂടുതൽ ആളുകൾക്ക് ജോലി നൽകാൻ", gu: "લોકોને વધુ નોકરીઓ આપવા" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Three branches exist so one part does not become too powerful — this is called checks and balances / separation of powers.",
      ml: "ഒരു ഭാഗം വളരെ ശക്തമാകാതിരിക്കാൻ മൂന്ന് ശാഖകൾ ഉണ്ട് — ഇതിനെ ചെക്ക്സ് ആൻഡ് ബാലൻസസ് / അധികാര വിഭജനം എന്ന് പറയുന്നു.",
      gu: "ત્રણ શાખાઓ એટલા માટે અસ્તિત્વમાં છે કે કોઈ એક ભાગ ખૂબ શક્તિશાળી ન બને — આને ચેક્સ અને બૅલેન્સ / સત્તાનું વિભાજન કહે છે.",
    },
  },
  {
    id: "g026",
    topic: "government",
    question: {
      en: "The President of the United States is in charge of which branch of government?",
      ml: "അമേരിക്കൻ പ്രസിഡന്റ് ഏത് ഗവൺമെന്റ് ശാഖയുടെ ചുമതലക്കാരനാണ്?",
      gu: "યુનાઈટેડ સ્ટેટ્સના રાષ્ટ્રપતિ સરકારની કઈ શાખાના વડા છે?",
    },
    options: [
      { en: "Legislative branch", ml: "നിയമനിർമ്മാണ ശാഖ", gu: "વિધાયિક શાખા" },
      { en: "Judicial branch", ml: "നീതിന്യായ ശാഖ", gu: "ન્યાયિક શાખા" },
      { en: "Executive branch", ml: "ഭരണ ശാഖ", gu: "કાર્યકારી શાખા" },
      { en: "Military branch", ml: "സൈനിക ശാഖ", gu: "લશ્કરી શાખા" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The President is in charge of the executive branch.",
      ml: "പ്രസിഡന്റ് ഭരണ ശാഖയുടെ ചുമതലക്കാരനാണ്.",
      gu: "રાષ્ટ્રપતિ કાર્યકારી શાખાના વડા છે.",
    },
  },
  {
    id: "g027",
    topic: "government",
    question: {
      en: "What part of the federal government writes laws?",
      ml: "ഫെഡറൽ ഗവൺമെന്റിന്റെ ഏത് ഭാഗം നിയമങ്ങൾ ഉണ്ടാക്കുന്നു?",
      gu: "ફેડરલ સરકારનો કયો ભાગ કાયદા લખે છે?",
    },
    options: [
      { en: "(U.S.) Congress / Legislative branch", ml: "കോൺഗ്രസ് / നിയമനിർമ്മാണ ശാഖ", gu: "(યુ.એસ.) કોંગ્રેસ / વિધાન શાખા" },
      { en: "The President", ml: "പ്രസിഡന്റ്", gu: "રાષ્ટ્રપતિ" },
      { en: "The Supreme Court", ml: "സുപ്രീം കോടതി", gu: "સુપ્રીમ કોર્ટ" },
      { en: "The military", ml: "സൈന്യം", gu: "સેના" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Congress (the legislative branch) writes federal laws.",
      ml: "കോൺഗ്രസ് (നിയമനിർമ്മാണ ശാഖ) ഫെഡറൽ നിയമങ്ങൾ ഉണ്ടാക്കുന്നു.",
      gu: "કોંગ્રેસ (વિધાન શાખા) સંઘીય કાયદા લખે છે.",
    },
  },
  {
    id: "g028",
    topic: "government",
    question: {
      en: "What are the two parts of the U.S. Congress?",
      ml: "അമേരിക്കൻ കോൺഗ്രസിന്റെ രണ്ട് ഭാഗങ്ങൾ ഏതൊക്കെ?",
      gu: "U.S. કોંગ્રેસના બે ભાગો કયા છે?",
    },
    options: [
      { en: "Democrats and Republicans", ml: "ഡെമോക്രാറ്റുകളും റിപ്പബ്ലിക്കൻമാരും", gu: "ડૅમૉક્રૅટ્સ અને રિપૅબ્લિકન્સ" },
      { en: "Senate and House of Representatives", ml: "സെനറ്റും ജനപ്രതിനിധി സഭയും", gu: "સેનેટ અને પ્રતિનિધિ સભા" },
      { en: "President and Vice President", ml: "പ്രസിഡന്റും വൈസ് പ്രസിഡന്റും", gu: "રાષ્ટ્રપતિ અને ઉપરાષ્ટ્રપતિ" },
      { en: "Federal and State", ml: "ഫെഡറലും സംസ്ഥാനവും", gu: "ફેડરલ અને રાજ્ય" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The two parts of Congress are the Senate and the House of Representatives.",
      ml: "കോൺഗ്രസിന്റെ രണ്ട് ഭാഗങ്ങൾ സെനറ്റും ജനപ്രതിനിധി സഭയുമാണ്.",
      gu: "કોંગ્રેસના બે ભાગો સેનેટ અને પ્રતિનિધિ સભા છે.",
    },
  },
  {
    id: "g029",
    topic: "government",
    question: {
      en: "Name one power of the U.S. Congress.",
      ml: "അമേരിക്കൻ കോൺഗ്രസിന്റെ ഒരു അധികാരം പറയുക.",
      gu: "યુ.એસ. કોંગ્રેસની એક સત્તાનું નામ આપો.",
    },
    options: [
      { en: "Writes laws", ml: "നിയമങ്ങൾ ഉണ്ടാക്കുന്നു", gu: "કાયદા લખે છે" },
      { en: "Appoints judges", ml: "ജഡ്ജിമാരെ നിയമിക്കുന്നു", gu: "ન્યાયાધીશોની નિમણૂક કરે" },
      { en: "Commands the military", ml: "സൈന്യത്തെ നയിക്കുന്നു", gu: "સેનાની કમાન્ડ કરે છે" },
      { en: "Enforces laws", ml: "നിയമങ്ങൾ നടപ്പിലാക്കുന്നു", gu: "કાયદાનું અમલીકરણ કરે છે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Congress writes laws, declares war, and makes the federal budget.",
      ml: "കോൺഗ്രസ് നിയമങ്ങൾ ഉണ്ടാക്കുന്നു, യുദ്ധം പ്രഖ്യാപിക്കുന്നു, ഫെഡറൽ ബജറ്റ് തയ്യാറാക്കുന്നു.",
      gu: "કોંગ્રેસ કાયદા લખે, યુદ્ધ જાહેર કરે, અને સંઘીય બજૅટ બનાવે.",
    },
  },
  {
    id: "g030",
    topic: "government",
    question: {
      en: "Who is one of your state's U.S. senators now? (Texas)",
      ml: "നിങ്ങളുടെ സംസ്ഥാനത്തെ അമേരിക്കൻ സെനറ്റർമാരിൽ ഒരാൾ ആരാണ്? (ടെക്സാസ്)",
      gu: "તમારા રાજ્યના યુ.એસ. સેનેટરોમાંથી એક કોણ છે? (ટેક્સાસ)",
    },
    options: [
      { en: "Chuck Schumer", ml: "ചക്ക് ഷൂമർ", gu: "ચૅક શૂમૅર" },
      { en: "Ted Cruz", ml: "ടെഡ് ക്രൂസ്", gu: "ટેડ ક્રુઝ" },
      { en: "Marco Rubio", ml: "മാർക്കോ റൂബിയോ", gu: "માર્કો રુબિઓ" },
      { en: "Mitch McConnell", ml: "മിച്ച് മക്കോണൽ", gu: "મિચ મૅકકૉનેલ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Ted Cruz and John Cornyn are the U.S. senators from Texas.",
      ml: "ടെഡ് ക്രൂസും ജോൺ കോർണിനും ടെക്സാസിൽ നിന്നുള്ള യു.എസ്. സെനറ്റർമാരാണ്.",
      gu: "ટેડ ક્રુઝ અને જ્હોન કોર્નિન ટેક્સાસના યુ.એસ. સેનેટર છે.",
    },
  },
  {
    id: "g031",
    topic: "government",
    question: {
      en: "How long is a term for a member of the House of Representatives?",
      ml: "ജനപ്രതിനിധി സഭയിലെ ഒരു അംഗത്തിന്റെ ടേം എത്ര കാലമാണ്?",
      gu: "પ્રતિનિધિ સભાના સભ્યની મુદ્દત કેટલી લાંબી છે?",
    },
    options: [
      { en: "Two (2) years", ml: "രണ്ട് (2) വർഷം", gu: "બે (2) વર્ષ" },
      { en: "Four (4) years", ml: "നാല് (4) വർഷം", gu: "ચાર (4) વર્ષ" },
      { en: "Six (6) years", ml: "ആറ് (6) വർഷം", gu: "છ (6) વર્ષ" },
      { en: "Eight (8) years", ml: "എട്ട് (8) വർഷം", gu: "આઠ (8) વર્ષ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "A member of the House of Representatives serves a 2-year term.",
      ml: "ജനപ്രതിനിധി സഭയിലെ ഒരു അംഗത്തിന്റെ ടേം 2 വർഷമാണ്.",
      gu: "હાઉસ ઑફ રિપ્રેઝેન્ટેટિવ્સ સભ્ય 2 વર્ષની મુદ્દત સેવા આપે છે.",
    },
  },
  {
    id: "g032",
    topic: "government",
    question: {
      en: "Why do U.S. representatives serve shorter terms than U.S. senators?",
      ml: "അമേരിക്കൻ പ്രതിനിധികൾ സെനറ്റർമാരേക്കാൾ കുറഞ്ഞ കാലം സേവിക്കുന്നത് എന്തുകൊണ്ട്?",
      gu: "યુ.એસ. પ્રતિનિધિઓ યુ.એસ. સેનેટરો કરતાં ટૂંકી મુદ્દત શા માટે સેવા આપે છે?",
    },
    options: [
      { en: "They are less important", ml: "അവർ കുറച്ച് പ്രാധാന്യമുള്ളവരാണ്", gu: "તેઓ ઓછા મહત્વના છે" },
      { en: "To save money", ml: "പണം ലാഭിക്കാൻ", gu: "પૈસા બચાવવા" },
      { en: "To more closely follow public opinion", ml: "പൊതുജനാഭിപ്രായം കൂടുതൽ അടുത്ത് പിന്തുടരാൻ", gu: "જનમતને વધુ નજીકથી અનુસરવા" },
      { en: "Because the Constitution is old", ml: "ഭരണഘടന പഴയതായതിനാൽ", gu: "કારણ કે બંધારણ જૂનું છે" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Representatives serve shorter terms to more closely follow public opinion.",
      ml: "പൊതുജനത്തിന്റെ അഭിപ്രായം കൂടുതൽ അടുത്ത് പിന്തുടരാൻ പ്രതിനിധികൾ കുറഞ്ഞ കാലം സേവിക്കുന്നു.",
      gu: "પ્રતિનિધિઓ જનમત સાથે વધુ નજીકથી જોડાયેલા રહેવા ટૂંકી મુદ્દત સેવા આપે છે.",
    },
  },
  {
    id: "g033",
    topic: "government",
    question: {
      en: "How many senators does each state have?",
      ml: "ഓരോ സംസ്ഥാനത്തിനും എത്ര സെനറ്റർമാർ ഉണ്ട്?",
      gu: "દરેક રાજ્યમાં કેટલા સેનેટર છે?",
    },
    options: [
      { en: "One (1)", ml: "ഒന്ന് (1)", gu: "એક (1)" },
      { en: "Two (2)", ml: "രണ്ട് (2)", gu: "બે (2)" },
      { en: "Three (3)", ml: "മൂന്ന് (3)", gu: "ત્રણ (3)" },
      { en: "It depends on population", ml: "ജനസംഖ്യ അനുസരിച്ച്", gu: "તે વસ્તી પર આધાર રાખે છે" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Each state has two (2) senators.",
      ml: "ഓരോ സംസ്ഥാനത്തിനും രണ്ട് (2) സെനറ്റർമാരുണ്ട്.",
      gu: "દરેક રાજ્યમાં બે (2) સેનેટર છે.",
    },
  },
  {
    id: "g034",
    topic: "government",
    question: {
      en: "Why does each state have two senators?",
      ml: "ഓരോ സംസ്ഥാനത്തിനും രണ്ട് സെനറ്റർമാർ ഉള്ളത് എന്തുകൊണ്ട്?",
      gu: "દરેક રાજ્યમાં બે સેનેટર શા માટે છે?",
    },
    options: [
      { en: "Equal representation for small states (The Great Compromise)", ml: "ചെറിയ സംസ്ഥാനങ്ങൾക്ക് തുല്യ പ്രാതിനിധ്യം (ദി ഗ്രേറ്റ് കോംപ്രൊമൈസ്)", gu: "નાના રાજ્યો માટે સમાન પ્રતિનિધિત્વ (મહાન સમાધાન)" },
      { en: "Because there are 100 senators total", ml: "100 സെനറ്റർമാർ ആകെ ഉള്ളതിനാൽ", gu: "કારણ કે કુલ 100 સેનેટર છે" },
      { en: "The President decided it", ml: "പ്രസിഡന്റ് തീരുമാനിച്ചു", gu: "રાષ્ટ્રપતિએ તે નક્કી કર્યું" },
      { en: "It was a tradition from Britain", ml: "ഇത് ബ്രിട്ടനിൽ നിന്നുള്ള പാരമ്പര്യമായിരുന്നു", gu: "તે બ્રિટનની પરંપરા હતી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Each state has two senators for equal representation — this was part of the Great Compromise (Connecticut Compromise).",
      ml: "തുല്യ പ്രാതിനിധ്യത്തിനായി ഓരോ സംസ്ഥാനത്തിനും രണ്ട് സെനറ്റർമാർ — ഇത് ഗ്രേറ്റ് കോംപ്രൊമൈസിന്റെ (കണക്ടിക്കട്ട് കോംപ്രൊമൈസ്) ഭാഗമായിരുന്നു.",
      gu: "દરેક રાજ્યમાં સમાન પ્રતિનિધિત્વ માટે બે સેનેટર છે — આ મહાન સમાધાન (કનેક્ટિકટ સમાધાન)નો ભાગ હતો.",
    },
  },
  {
    id: "g035",
    topic: "government",
    question: {
      en: "Name your U.S. representative. (Texas)",
      ml: "നിങ്ങളുടെ അമേരിക്കൻ പ്രതിനിധി ആരാണ്? (ടെക്സാസ്)",
      gu: "તમારા યુ.એસ. પ્રતિનિધિનું નામ આપો. (ટેક્સાસ)",
    },
    options: [
      { en: "Monica De La Cruz", ml: "മോണിക്ക ഡി ലാ ക്രൂസ്", gu: "મોનિકા ડે લા ક્રુઝ" },
      { en: "Nancy Pelosi", ml: "നാൻസി പെലോസി", gu: "નેન્સી પેલોસી" },
      { en: "Alexandria Ocasio-Cortez", ml: "അലക്സാൻഡ്രിയ ഒകാസിയോ-കോർട്ടെസ്", gu: "ઍલેઝૅન્ડ્રિઆ ઓકાઝ‌ییઝ-કૉર્ટેઝ" },
      { en: "Kevin McCarthy", ml: "കെവിൻ മക്കാർത്തി", gu: "કેવિન મૅકાર્થી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Monica De La Cruz is the U.S. representative for this Texas district.",
      ml: "മോണിക്ക ഡി ലാ ക്രൂസ് ഈ ടെക്സസ് ജില്ലയിലെ യു.എസ്. പ്രതിനിധിയാണ്.",
      gu: "મોનિકા ડે લા ક્રુઝ આ ટેક્સાસ જિલ્લાના યુ.એસ. પ્રતિનિધિ છે.",
    },
  },
  {
    id: "g036",
    topic: "government",
    question: {
      en: "What is the name of the Speaker of the House of Representatives now?",
      ml: "ഇപ്പോൾ ജനപ്രതിനിധി സഭയുടെ സ്പീക്കർ ആരാണ്?",
      gu: "હવે પ્રતિનિધિ સભાના સ્પીકરનું નામ શું છે?",
    },
    options: [
      { en: "Nancy Pelosi", ml: "നാൻസി പെലോസി", gu: "નેન્સી પેલોસી" },
      { en: "Kevin McCarthy", ml: "കെവിൻ മക്കാർത്തി", gu: "કેવિન મૅકાર્થી" },
      { en: "Mike Johnson", ml: "മൈക്ക് ജോൺസൺ", gu: "માઇક જ્હોનસન" },
      { en: "Chuck Schumer", ml: "ചക്ക് ഷൂമർ", gu: "ચૅક શૂમૅર" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Mike Johnson is the current Speaker of the House of Representatives.",
      ml: "മൈക്ക് ജോൺസൺ ആണ് ഇപ്പോഴത്തെ ജനപ്രതിനിധി സഭയുടെ സ്പീക്കർ.",
      gu: "માઇક જ્હોનસન પ્રતિનિધિ સભાના વર્તમાન સ્પીકર છે.",
    },
  },
  {
    id: "g037",
    topic: "government",
    question: {
      en: "Who does a U.S. senator represent?",
      ml: "ഒരു അമേരിക്കൻ സെനറ്റർ ആരെ പ്രതിനിധീകരിക്കുന്നു?",
      gu: "યુ.એસ. સેનેટર કોનું પ્રતિનિધિત્વ કરે છે?",
    },
    options: [
      { en: "Citizens of their state", ml: "അവരുടെ സംസ്ഥാനത്തെ പൗരന്മാർ", gu: "તેમના રાજ્યના નાગરિકો" },
      { en: "All Americans", ml: "എല്ലാ അമേരിക്കക്കാരും", gu: "બધા અમેરિકનો" },
      { en: "The President", ml: "പ്രസിഡന്റ്", gu: "રાષ્ટ્રપતિ" },
      { en: "Their political party", ml: "അവരുടെ രാഷ്ട്രീയ പാർടി", gu: "તેમનો રાજકીય પક્ષ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "A U.S. senator represents the citizens of their state.",
      ml: "ഒരു അമേരിക്കൻ സെനറ്റർ അവരുടെ സംസ്ഥാനത്തെ പൗരന്മാരെ പ്രതിനിധീകരിക്കുന്നു.",
      gu: "યુ.એસ. સેનેટર તેમના રાજ્યના નાગરિકોનું પ્રતિનિધિત્વ કરે છે.",
    },
  },
  {
    id: "g038",
    topic: "government",
    question: {
      en: "Who elects U.S. senators?",
      ml: "അമേരിക്കൻ സെനറ്റർമാരെ ആർ തിരഞ്ഞെടുക്കുന്നു?",
      gu: "યુ.એસ. સેનેટરોને કોણ ચૂંટે છે?",
    },
    options: [
      { en: "The President", ml: "പ്രസിഡന്റ്", gu: "રાષ્ટ્રપતિ" },
      { en: "Citizens from their state", ml: "അവരുടെ സംസ്ഥാനത്തെ പൗരന്മാർ", gu: "તેમના રાજ્યના નાગરિકો" },
      { en: "Other senators", ml: "മറ്റ് സെനറ്റർമാർ", gu: "અન્ય સેનેટરો" },
      { en: "The Supreme Court", ml: "സുപ്രീം കോടതി", gu: "સુપ્રીમ કોર્ટ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Citizens from their state elect U.S. senators.",
      ml: "അവരുടെ സംസ്ഥാനത്തെ പൗരന്മാർ സെനറ്റർമാരെ തിരഞ്ഞെടുക്കുന്നു.",
      gu: "તેમના રાજ્યના નાગરિકો યુ.એસ. સેનેટર ચૂંટે છે.",
    },
  },
  {
    id: "g039",
    topic: "government",
    question: {
      en: "Who does a member of the House of Representatives represent?",
      ml: "ജനപ്രതിനിധി സഭയിലെ ഒരു അംഗം ആരെ പ്രതിനിധീകരിക്കുന്നു?",
      gu: "પ્રતિનિધિ સભાના સભ્ય કોનું પ્રતિનિધિત્વ કરે છે?",
    },
    options: [
      { en: "All Americans", ml: "എല്ലാ അമേരിക്കക്കാരും", gu: "બધા અમેરિકનો" },
      { en: "The entire state", ml: "മുഴുവൻ സംസ്ഥാനം", gu: "સમગ્ર રાજ્ય" },
      { en: "Citizens in their congressional district", ml: "അവരുടെ കോൺഗ്രസ് ജില്ലയിലെ പൗരന്മാർ", gu: "તેમના કોંગ્રેશનલ જિલ્લામાં નાગરિકો" },
      { en: "The Governor", ml: "ഗവർണർ", gu: "ગવર્નર" },
    ],
    correctIndex: 2,
    explanation: {
      en: "A House member represents citizens in their congressional district.",
      ml: "ജനപ്രതിനിധി സഭ അംഗം അവരുടെ കോൺഗ്രസ് ജില്ലയിലെ പൗരന്മാരെ പ്രതിനിധീകരിക്കുന്നു.",
      gu: "હાઉસ સભ્ય તેમના કોંગ્રેશનલ જિલ્લાના નાગરિકોનું પ્રતિનિધિત્વ કરે છે.",
    },
  },
  {
    id: "g040",
    topic: "government",
    question: {
      en: "Who elects members of the House of Representatives?",
      ml: "ജനപ്രതിനിധി സഭ അംഗങ്ങളെ ആർ തിരഞ്ഞെടുക്കുന്നു?",
      gu: "પ્રતિનિધિ સભાના સભ્યોને કોણ ચૂંટે છે?",
    },
    options: [
      { en: "Citizens from their congressional district", ml: "അവരുടെ കോൺഗ്രസ് ജില്ലയിലെ പൗരന്മാർ", gu: "તેમના કોંગ્રેશનલ જિલ્લાના નાગરિકો" },
      { en: "The Senate", ml: "സെനറ്റ്", gu: "સેનેટ" },
      { en: "The President", ml: "പ്രസിഡന്റ്", gu: "રાષ્ટ્રપતિ" },
      { en: "State governors", ml: "സംസ്ഥാന ഗവർണർമാർ", gu: "રાજ્યના ગવર્નરો" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Citizens from their congressional district elect members of the House.",
      ml: "അവരുടെ കോൺഗ്രസ് ജില്ലയിലെ പൗരന്മാർ ജനപ്രതിനിധി സഭ അംഗങ്ങളെ തിരഞ്ഞെടുക്കുന്നു.",
      gu: "તેમના કોંગ્રેશનલ જિલ્લાના નાગરિકો હાઉસ સભ્યો ચૂંટે છે.",
    },
  },
  {
    id: "g041",
    topic: "government",
    question: {
      en: "Some states have more representatives than other states. Why?",
      ml: "ചില സംസ്ഥാനങ്ങൾക്ക് മറ്റുള്ളവയേക്കാൾ കൂടുതൽ പ്രതിനിധികൾ ഉള്ളത് എന്തുകൊണ്ട്?",
      gu: "કેટલાક રાજ્યોમાં અન્ય રાજ્યો કરતાં વધુ પ્રતિનિધિઓ છે. શા માટે?",
    },
    options: [
      { en: "Because of the state's size", ml: "സംസ്ഥാനത്തിന്റെ വലിപ്പം കാരണം", gu: "રાજ્યના કદને કારણે" },
      { en: "Because of the state's population", ml: "സംസ്ഥാനത്തിന്റെ ജനസംഖ്യ കാരണം", gu: "રાજ્યની વસ્તીને કારણે" },
      { en: "Because they have more money", ml: "കൂടുതൽ പണം ഉള്ളതിനാൽ", gu: "કારણ કે તેઓ પાસે વધુ પૈસા છે" },
      { en: "Because they joined the Union first", ml: "അവർ ആദ്യം യൂണിയനിൽ ചേർന്നതിനാൽ", gu: "કારણ કે તેઓ પ્રથમ યૂનિયનમાં જોડાયા" },
    ],
    correctIndex: 1,
    explanation: {
      en: "States with larger populations have more representatives in the House.",
      ml: "കൂടുതൽ ജനസംഖ്യയുള്ള സംസ്ഥാനങ്ങൾക്ക് ജനപ്രതിനിധി സഭയിൽ കൂടുതൽ പ്രതിനിധികളുണ്ട്.",
      gu: "વધુ વસ્તી ધરાવતા રાજ્યોમાં હાઉસમાં વધુ પ્રતિનિધિઓ હોય છે.",
    },
  },
  {
    id: "g042",
    topic: "government",
    question: {
      en: "The President of the United States can serve only two terms. Why?",
      ml: "അമേരിക്കൻ പ്രസിഡന്റിന് രണ്ട് ടേം മാത്രം സേവിക്കാവുന്നത് എന്തുകൊണ്ട്?",
      gu: "યુનાઈટેડ સ્ટેટ્સના રાષ્ટ્રપતિ ફક્ત બે મુદ્દત સેવા આપી શકે. શા માટે?",
    },
    options: [
      { en: "Because of the 22nd Amendment", ml: "22-ആം ഭേദഗതി കാരണം", gu: "22મા સુધારાને કારણે" },
      { en: "Because of tradition", ml: "പാരമ്പര്യം കാരണം", gu: "પ્રણાલીને કારણે" },
      { en: "Congress decides each time", ml: "ഓരോ തവണയും കോൺഗ്രസ് തീരുമാനിക്കുന്നു", gu: "કોંગ્રેસ દર વખત નક્કી કરે" },
      { en: "The Supreme Court limits it", ml: "സുപ്രീം കോടതി പരിമിതപ്പെടുത്തുന്നു", gu: "સુપ્રીમ કોર્ટ તેને મર્યાદિત કરે છે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The 22nd Amendment limits the President to two terms, to prevent the president from becoming too powerful.",
      ml: "പ്രസിഡന്റ് വളരെ ശക്തനാകാതിരിക്കാൻ 22-ആം ഭേദഗതി പ്രസിഡന്റിനെ രണ്ട് ടേമായി പരിമിതപ്പെടുത്തുന്നു.",
      gu: "22મો સુધારો રાષ્ટ્રપતિને બે મુદ્દતો સુધી મર્યાદિત કરે છે, જેથી રાષ્ટ્રપતિ ખૂબ શક્તિશાળી ન બને.",
    },
  },
  {
    id: "g043",
    topic: "government",
    question: {
      en: "Name one power of the President.",
      ml: "പ്രസിഡന്റിന്റെ ഒരു അധികാരം പറയുക.",
      gu: "રાષ્ટ્રપતિની એક સત્તાનું નામ આપો.",
    },
    options: [
      { en: "Writes laws", ml: "നിയമങ്ങൾ എഴുതുന്നു", gu: "કાયદા લખે છે" },
      { en: "Signs bills into law", ml: "ബില്ലുകൾ നിയമമാക്കി ഒപ്പ് വക്കുന്നു", gu: "બિલોને કાયદામાં હસ્તાક્ષર કરે છે" },
      { en: "Appoints senators", ml: "സെനറ്റർമാരെ നിയമിക്കുന്നു", gu: "સેનેટરોની નિમણૂક કરે" },
      { en: "Decides court cases", ml: "കോടതി കേസുകൾ തീരുമാനിക്കുന്നു", gu: "અદાલત કૅસ નક્કી કરે" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The President can sign bills into law, veto bills, enforce laws, command the military, and appoint federal judges.",
      ml: "പ്രസിഡന്റിന് ബില്ലുകൾ നിയമമാക്കി ഒപ്പ് വക്കാനും, വീറ്റോ ചെയ്യാനും, നിയമങ്ങൾ നടപ്പിലാക്കാനും, സൈന്യത്തെ നയിക്കാനും, ഫെഡറൽ ജഡ്ജിമാരെ നിയമിക്കാനും കഴിയും.",
      gu: "રાષ્ટ્રપતિ બિલોને કાયદામાં હસ્તાક્ષર કરી શકે, બિલોને વીટો કરી શકે, કાયદા અમલ કરાવી શકે, સેનાની કમાન સંભાળી શકે અને ફેડરલ ન્યાયાધીશોની નિમણૂક કરી શકે.",
    },
  },
  {
    id: "g044",
    topic: "government",
    question: {
      en: "Who signs bills to become laws?",
      ml: "ബില്ലുകൾ നിയമമാക്കി ആർ ഒപ്പ് വക്കുന്നു?",
      gu: "બિલો પર હસ્તાક્ષર કરીને તેને કાયદો કોણ બનાવે છે?",
    },
    options: [
      { en: "The Speaker of the House", ml: "ഹൗസ് സ്പീക്കർ", gu: "હાઉસના સ્પીકર" },
      { en: "The Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്", gu: "મુખ્ય ન્યાયાધીશ" },
      { en: "The Vice President", ml: "വൈസ് പ്രസിഡന്റ്", gu: "ઉપરાષ્ટ્રપતિ" },
      { en: "The President", ml: "പ്രസിഡന്റ്", gu: "રાષ્ટ્રપતિ" },
    ],
    correctIndex: 3,
    explanation: {
      en: "The President signs bills to become laws.",
      ml: "പ്രസിഡന്റ് ബില്ലുകൾ നിയമമാക്കി ഒപ്പ് വക്കുന്നു.",
      gu: "રાષ્ટ્રપતિ બિલો પર હસ્તાક્ષર કરીને તેને કાયદો બનાવે છે.",
    },
  },
  {
    id: "g045",
    topic: "government",
    question: {
      en: "Who vetoes bills?",
      ml: "ബില്ലുകൾ ആർ വീറ്റോ ചെയ്യുന്നു?",
      gu: "બિલોને કોણ વીટો કરે છે?",
    },
    options: [
      { en: "The President", ml: "പ്രസിഡന്റ്", gu: "રાષ્ટ્રપતિ" },
      { en: "Congress", ml: "കോൺഗ്രസ്", gu: "કોંગ્રેસ" },
      { en: "The Supreme Court", ml: "സുപ്രീം കോടതി", gu: "સુપ્રીમ કોર્ટ" },
      { en: "The Vice President", ml: "വൈസ് പ്രസിഡന്റ്", gu: "ઉપરાષ્ટ્રપતિ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The President has the power to veto bills.",
      ml: "ബില്ലുകൾ വീറ്റോ ചെയ്യാനുള്ള അധികാരം പ്രസിഡന്റിനാണ്.",
      gu: "રાષ્ટ્રપતિ પાસે બિલોને વીટો કરવાની સત્તા છે.",
    },
  },
  {
    id: "g046",
    topic: "government",
    question: {
      en: "Who appoints federal judges?",
      ml: "ഫെഡറൽ ജഡ്ജിമാരെ ആർ നിയമിക്കുന്നു?",
      gu: "ફેડરલ ન્યાયાધીશોની નિમણૂક કોણ કરે છે?",
    },
    options: [
      { en: "Congress", ml: "കോൺഗ്രസ്", gu: "કોંગ્રેસ" },
      { en: "The President", ml: "പ്രസിഡന്റ്", gu: "રાષ્ટ્રપતિ" },
      { en: "State governors", ml: "സംസ്ഥാന ഗവർണർമാർ", gu: "રાજ્યના ગવર્નરો" },
      { en: "The Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്", gu: "મુખ્ય ન્યાયાધીશ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The President appoints federal judges.",
      ml: "പ്രസിഡന്റ് ഫെഡറൽ ജഡ്ജിമാരെ നിയമിക്കുന്നു.",
      gu: "રાષ્ટ્રપતિ ફેડરલ ન્યાયાધીશોની નિમણૂક કરે છે.",
    },
  },
  {
    id: "g047",
    topic: "government",
    question: {
      en: "The executive branch has many parts. Name one.",
      ml: "ഭരണ ശാഖയ്ക്ക് പല ഭാഗങ്ങൾ ഉണ്ട്. ഒന്ന് പറയുക.",
      gu: "કાર્યકારી શાખાના ઘણા ભાગો છે. એકનું નામ આપો.",
    },
    options: [
      { en: "President / Cabinet / Federal departments and agencies", ml: "പ്രസിഡന്റ് / കാബിനറ്റ് / ഫെഡറൽ വകുപ്പുകളും ഏജൻസികളും", gu: "રાષ્ટ્રપતિ / કેબિનેટ / ફેડરલ વિભાગો અને એજન્સીઓ" },
      { en: "Senate", ml: "സെനറ്റ്", gu: "સેનેટ" },
      { en: "House of Representatives", ml: "ജനപ്രതിനിധി സഭ", gu: "પ્રતિનિધિ સભા" },
      { en: "Supreme Court", ml: "സുപ്രീം കോടതി", gu: "સુપ્રીમ કોર્ટ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Parts of the executive branch include the President, Cabinet, and federal departments and agencies.",
      ml: "ഭരണ ശാഖയുടെ ഭാഗങ്ങളിൽ പ്രസിഡന്റ്, കാബിനറ്റ്, ഫെഡറൽ വകുപ്പുകൾ, ഏജൻസികൾ എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "કાર્યકારી શાખાના ભાગોમાં રાષ્ટ્રપતિ, કેબિનેટ અને ફેડરલ વિભાગો અને એજન્સીઓ શામેલ છે.",
    },
  },
  {
    id: "g048",
    topic: "government",
    question: {
      en: "What does the President's Cabinet do?",
      ml: "പ്രസിഡന്റിന്റെ കാബിനറ്റ് എന്ത് ചെയ്യുന്നു?",
      gu: "રાષ્ટ્રપતિનું કેબિનેટ શું કરે છે?",
    },
    options: [
      { en: "Writes laws", ml: "നിയമങ്ങൾ എഴുതുന്നു", gu: "કાયદા લખે છે" },
      { en: "Decides court cases", ml: "കോടതി കേസുകൾ തീരുമാനിക്കുന്നു", gu: "અદાલત કૅસ નક્કી કરે" },
      { en: "Advises the President", ml: "പ്രസിഡന്റിന് ഉപദേശം നൽകുന്നു", gu: "રાષ્ટ્રપતિને સલાહ આપે છે" },
      { en: "Elects the Vice President", ml: "വൈസ് പ്രസിഡന്റിനെ തിരഞ്ഞെടുക്കുന്നു", gu: "ઉપરાષ્ટ્રપતિની ચૂંટણી કરે છે" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The Cabinet advises the President.",
      ml: "കാബിനറ്റ് പ്രസിഡന്റിന് ഉപദേശം നൽകുന്നു.",
      gu: "કેબિનેટ રાષ્ટ્રપતિને સલાહ આપે છે.",
    },
  },
  {
    id: "g049",
    topic: "government",
    question: {
      en: "What are two Cabinet-level positions?",
      ml: "രണ്ട് കാബിനറ്റ് തല സ്ഥാനങ്ങൾ ഏതൊക്കെ?",
      gu: "બે કેબિનેટ-સ્તરના હોદ્દા કયા છે?",
    },
    options: [
      { en: "Secretary of State and Secretary of Defense", ml: "സ്റ്റേറ്റ് സെക്രട്ടറിയും ഡിഫൻസ് സെക്രട്ടറിയും", gu: "વિદેશ મંત્રી અને સંરક્ષણ મંત્રી" },
      { en: "Senator and Representative", ml: "സെനറ്ററും പ്രതിനിധിയും", gu: "સેનેટર અને પ્રતિનિધિ" },
      { en: "Governor and Mayor", ml: "ഗവർണറും മേയറും", gu: "ગવર્નર અને મેયર" },
      { en: "Chief Justice and Speaker", ml: "ചീഫ് ജസ്റ്റിസും സ്പീക്കറും", gu: "ચીફ જસ્ટિસ અને સ્પીકર" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Cabinet-level positions include Secretary of State, Secretary of Defense, Secretary of the Treasury, Attorney General, and many more.",
      ml: "സ്റ്റേറ്റ് സെക്രട്ടറി, ഡിഫൻസ് സെക്രട്ടറി, ട്രഷറി സെക്രട്ടറി, അറ്റോർണി ജനറൽ എന്നിവ കാബിനറ്റ് തല സ്ഥാനങ്ങളാണ്.",
      gu: "કૅબિનૅટ-સ્તરના હોદ્દાઓમાં વિદેશ સચિવ, સંરક્ષણ સચિવ, ટ્રૅઝરી સચિવ, ઍટૉર્ની જૅનૅરલ, અને ઘણા વધુ સામેલ છે.",
    },
  },
  {
    id: "g050",
    topic: "government",
    question: {
      en: "How many Supreme Court justices are usually needed to decide a case?",
      ml: "ഒരു കേസ് തീർപ്പാക്കാൻ സാധാരണ എത്ര സുപ്രീം കോടതി ജഡ്ജിമാർ ആവശ്യമാണ്?",
      gu: "સામાન્ય રીતે કેસનો નિર્ણય લેવા માટે કેટલા સુપ્રીમ કોર્ટના ન્યાયાધીશોની જરૂર હોય છે?",
    },
    options: [
      { en: "Three (3)", ml: "മൂന്ന് (3)", gu: "ત્રણ (3)" },
      { en: "Five (5)", ml: "അഞ്ച് (5)", gu: "પાંચ (5)" },
      { en: "Seven (7)", ml: "ഏഴ് (7)", gu: "સાત (7)" },
      { en: "Nine (9)", ml: "ഒൻപത് (9)", gu: "નવ (9)" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Five (a majority of nine) Supreme Court justices are usually needed to decide a case.",
      ml: "ഒരു കേസ് തീർപ്പാക്കാൻ സാധാരണ അഞ്ച് (ഒൻപതിൽ ഭൂരിപക്ഷം) സുപ്രീം കോടതി ജഡ്ജിമാർ ആവശ്യമാണ്.",
      gu: "કેસનો નિર્ણય લેવા માટે સામાન્ય રીતે પાંચ (નવમાંથી બહુમતી) સુપ્રીમ કોર્ટના ન્યાયાધીશોની જરૂર હોય છે.",
    },
  },
  {
    id: "g051",
    topic: "government",
    question: {
      en: "How long do Supreme Court justices serve?",
      ml: "സുപ്രീം കോടതി ജഡ്ജിമാർ എത്ര കാലം സേവിക്കുന്നു?",
      gu: "સુપ્રીમ કોર્ટના ન્યાયાધીશો કેટલો સમય સેવા આપે છે?",
    },
    options: [
      { en: "Four (4) years", ml: "നാല് (4) വർഷം", gu: "ચાર (4) વર્ષ" },
      { en: "Ten (10) years", ml: "പത്ത് (10) വർഷം", gu: "દસ (10) વર્ષ" },
      { en: "For life / Lifetime appointment", ml: "ജീവിതകാലം മുഴുവൻ / ആജീവനാന്ത നിയമനം", gu: "આજીવન / જીવનભરની નિમણૂક" },
      { en: "Six (6) years", ml: "ആറ് (6) വർഷം", gu: "છ (6) વર્ષ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Supreme Court justices serve for life (lifetime appointment) or until retirement.",
      ml: "സുപ്രീം കോടതി ജഡ്ജിമാർ ജീവിതകാലം മുഴുവൻ (ആജീവനാന്ത നിയമനം) അല്ലെങ്കിൽ വിരമിക്കുന്നത് വരെ സേവിക്കുന്നു.",
      gu: "સુપ્રીમ કોર્ટના ન્યાયાધીશો આજીવન (જીવનભરની નિમણૂક) અથવા નિવૃત્તિ સુધી સેવા આપે છે.",
    },
  },
  {
    id: "g052",
    topic: "government",
    question: {
      en: "Supreme Court justices serve for life. Why?",
      ml: "സുപ്രീം കോടതി ജഡ്ജിമാർ ജീവിതകാലം മുഴുവൻ സേവിക്കുന്നത് എന്തുകൊണ്ട്?",
      gu: "સુપ્રીમ કોર્ટના ન્યાયાધીશો આજીવન સેવા આપે છે. શા માટે?",
    },
    options: [
      { en: "To be independent of politics / limit outside influence", ml: "രാഷ്ട്രീയത്തിൽ നിന്ന് സ്വതന്ത്രരാകാൻ / പുറമെ നിന്നുള്ള സ്വാധീനം പരിമിതപ്പെടുത്താൻ", gu: "રાજકારણથી સ્વતંત્ર રહેવા / બહારના પ્રભાવને મર્યાદિત કરવા" },
      { en: "Because no one else wants the job", ml: "മറ്റാരും ആ ജോലി ആഗ്രഹിക്കാത്തതിനാൽ", gu: "કારણ કે બીજા કોઈ નોકરી ઇચ્છતા નથી" },
      { en: "The Constitution does not mention a term", ml: "ഭരണഘടനയിൽ ടേം പരാമർശിക്കുന്നില്ല", gu: "બંધારણ મુદ્દતનો ઉલ્લેખ કરતું નથી" },
      { en: "Tradition from Britain", ml: "ബ്രിട്ടനിൽ നിന്നുള്ള പാരമ്പര്യം", gu: "બ્રિટનની પરંપરા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Justices serve for life to be independent of politics and to limit outside political influence.",
      ml: "രാഷ്ട്രീയത്തിൽ നിന്ന് സ്വതന്ത്രരാകാനും പുറമെ നിന്നുള്ള രാഷ്ട്രീയ സ്വാധീനം പരിമിതപ്പെടുത്താനും ജഡ്ജിമാർ ജീവിതകാലം മുഴുവൻ സേവിക്കുന്നു.",
      gu: "રાજકારણથી સ્વતંત્ર રહેવા અને બહારના રાજકીય પ્રભાવને મર્યાદિત કરવા ન્યાયાધીશો આજીવન સેવા આપે છે.",
    },
  },
  {
    id: "g053",
    topic: "government",
    question: {
      en: "Who is the Chief Justice of the United States now?",
      ml: "ഇപ്പോൾ അമേരിക്കയുടെ ചീഫ് ജസ്റ്റിസ് ആരാണ്?",
      gu: "હવે યુનાઈટેડ સ્ટેટ્સના મુખ્ય ન્યાયાધીશ કોણ છે?",
    },
    options: [
      { en: "Clarence Thomas", ml: "ക്ലാരൻസ് തോമസ്", gu: "ક્લૅરૅન્સ થૉમસ" },
      { en: "John Roberts", ml: "ജോൺ റോബർട്ട്സ്", gu: "જ્હોન રૉબર્ટ્સ" },
      { en: "Samuel Alito", ml: "സാമുവൽ അലിറ്റോ", gu: "સેમ્યુઅલ ઍલિટો" },
      { en: "Sonia Sotomayor", ml: "സോണിയ സോട്ടോമേയർ", gu: "સોનિયા સોટોમેયર" },
    ],
    correctIndex: 1,
    explanation: {
      en: "John Roberts is the current Chief Justice of the United States.",
      ml: "ജോൺ റോബർട്ട്സ് ആണ് ഇപ്പോഴത്തെ അമേരിക്കയുടെ ചീഫ് ജസ്റ്റിസ്.",
      gu: "જ્હોન રૉબર્ટ્સ યુનાઈટેડ સ્ટેટ્સના વર્તમાન મુખ્ય ન્યાયાધીશ છે.",
    },
  },
  {
    id: "g054",
    topic: "government",
    question: {
      en: "Who is the governor of your state now? (Texas)",
      ml: "ഇപ്പോൾ നിങ്ങളുടെ സംസ്ഥാനത്തിന്റെ ഗവർണർ ആരാണ്? (ടെക്സാസ്)",
      gu: "હવે તમારા રાજ્યના ગવર્નર કોણ છે? (ટેક્સાસ)",
    },
    options: [
      { en: "Greg Abbott", ml: "ഗ്രെഗ് അബ്ബോട്ട്", gu: "ગ્રેગ ઍબોટ" },
      { en: "Ron DeSantis", ml: "റോൺ ഡിസാന്റിസ്", gu: "રોન ડેસાન્ટિસ" },
      { en: "Gavin Newsom", ml: "ഗാവിൻ ന്യൂസം", gu: "ગેવિન ન્યૂસમ" },
      { en: "Rick Perry", ml: "റിക്ക് പെറി", gu: "રિક પેરી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Greg Abbott is the current governor of Texas.",
      ml: "ഗ്രെഗ് അബ്ബോട്ട് ആണ് ഇപ്പോഴത്തെ ടെക്സസ് ഗവർണർ.",
      gu: "ગ્રેગ ઍબોટ ટેક્સાસના વર્તમાન ગવર્નર છે.",
    },
  },
  {
    id: "g055",
    topic: "government",
    question: {
      en: "What is the capital of your state? (Texas)",
      ml: "നിങ്ങളുടെ സംസ്ഥാനത്തിന്റെ തലസ്ഥാനം ഏതാണ്? (ടെക്സാസ്)",
      gu: "તમારા રાજ્યની રાજધાની શું છે? (ટેક્સાસ)",
    },
    options: [
      { en: "Houston", ml: "ഹ്യൂസ്റ്റൺ", gu: "હ્યુસ્ટન" },
      { en: "Dallas", ml: "ഡാളസ്", gu: "ડૅલસ" },
      { en: "Austin", ml: "ഓസ്റ്റിൻ", gu: "ઑસ્ટિન" },
      { en: "San Antonio", ml: "സാൻ ആന്റോണിയോ", gu: "સૅન ઍન્ટોનિયો" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Austin is the capital of Texas.",
      ml: "ഓസ്റ്റിൻ ആണ് ടെക്സസിന്റെ തലസ്ഥാനം.",
      gu: "ઑસ્ટિન ટૅક્સાસની રાજધાની છે.",
    },
  },
  {
    id: "r009",
    topic: "rights",
    question: {
      en: "There are four amendments to the U.S. Constitution about who can vote. Describe one.",
      ml: "വോട്ടർ ആര് എന്ന് നിർണ്ണയിക്കുന്ന നാല് ഭരണഘടന ഭേദഗതികൾ ഉണ്ട്. ഒന്ന് വിവരിക്കുക.",
      gu: "યુ.એસ. બંધારણમાં કોણ મત આપી શકે તે વિશે ચાર સુધારા છે. એકનું વર્ણન કરો.",
    },
    options: [
      { en: "Citizens eighteen (18) and older can vote", ml: "18 വയസും അതിൽ കൂടുതലും ഉള്ള പൗരന്മാർക്ക് വോട്ട് ചെയ്യാം", gu: "18 અથવા વધુ ઉંમરના નાગરિકો મત આપી શકે" },
      { en: "Only men over 30 can vote", ml: "30 വയസിന് മുകളിലുള്ള പുരുഷൻമാർക്ക് മാത്രം വോട്ട് ചെയ്യാം", gu: "ફક્ત 30 વર્ષથી વધુ ઉંમરના પુરુષો મત આપી શકે" },
      { en: "Only property owners can vote", ml: "ഭൂവുടമകൾക്ക് മാത്രം വോട്ട് ചെയ്യാം", gu: "ફક્ત મિલકતના માલિકો મત આપી શકે" },
      { en: "Only college graduates can vote", ml: "കോളേജ് ബിരുദധാരികൾക്ക് മാത്രം വോട്ട് ചെയ്യാം", gu: "ફક્ત કૉલેજ સ્નાતકો મત આપી શકે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Voting amendments: citizens 18+ can vote; no poll tax required; any citizen (men and women) can vote; male citizens of any race can vote.",
      ml: "വോട്ടിംഗ് ഭേദഗതികൾ: 18+ പൗരന്മാർക്ക് വോട്ട് ചെയ്യാം; പോൾ ടാക്സ് വേണ്ട; ഏത് പൗരനും (പുരുഷനും സ്ത്രീയും) വോട്ട് ചെയ്യാം; ഏത് വർഗത്തിലെ ആൺ പൗരനും വോട്ട് ചെയ്യാം.",
      gu: "મતદાન સુધારા: 18+ વર્ષના નાગરિકો મત આપી શકે; પોલ ટૅક્સ જરૂરી નથી; કોઈપણ નાગરિક (પુરુષ અને મહિલા) મત આપી શકે; કોઈપણ જાતિના પુરુષ નાગરિકો મત આપી શકે.",
    },
  },
  {
    id: "r010",
    topic: "rights",
    question: {
      en: "What are two examples of civic participation?",
      ml: "പൗരജീവിതത്തിൽ പങ്കെടുക്കലിന്റെ രണ്ട് ഉദാഹരണങ്ങൾ ഏതൊക്കെ?",
      gu: "નાગરિક ભાગીદારીના બે ઉદાહરણો શું છે?",
    },
    options: [
      { en: "Watch TV and sleep", ml: "ടി.വി. കാണുക, ഉറങ്ങുക", gu: "ટીવી જુઓ અને ઊંઘો" },
      { en: "Vote and join a political party", ml: "വോട്ട് ചെയ്യുക, ഒരു രാഷ്ട്രീയ പാർടിയിൽ ചേരുക", gu: "મત આપો અને રાજકીય પક્ષમાં જોડાઓ" },
      { en: "Travel abroad and shop", ml: "വിദേശത്ത് യാത്ര ചെയ്യുക, ഷോപ്പിംഗ് ചെയ്യുക", gu: "વિદેશ યાત્રા અને ખરીદી" },
      { en: "Go to school and eat", ml: "സ്കൂളിൽ പോവുക, ഭക്ഷണം കഴിക്കുക", gu: "શાળાએ જવું અને ખાવું" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Examples of civic participation include voting, running for office, joining a political party, helping with a campaign, and contacting elected officials.",
      ml: "വോട്ട് ചെയ്യുക, ഓഫീസിൽ മത്സരിക്കുക, രാഷ്ട്രീയ പാർടിയിൽ ചേരുക, കാമ്പെയ്‌നിൽ സഹായിക്കുക, തിരഞ്ഞെടുക്കപ്പെട്ട ഉദ്യോഗസ്ഥരുമായി ബന്ധപ്പെടുക എന്നിവ പൗര പങ്കാളിത്തത്തിന്റെ ഉദാഹരണങ്ങളാണ്.",
      gu: "નાગરિક ભાગીદારીના ઉદાહરણોમાં મતદાન, ચૂંટણી લડવી, રાજકીય પક્ષમાં જોડાવું, ઝુંબેશમાં મદદ કરવી અને ચૂંટાયેલા અધિકારીઓનો સંપર્ક કરવો શામેલ છે.",
    },
  },
  {
    id: "r011",
    topic: "rights",
    question: {
      en: "What is one way Americans can serve their country?",
      ml: "അമേരിക്കക്കാർ രാജ്യത്തെ സേവിക്കാനുള്ള ഒരു വഴി ഏതാണ്?",
      gu: "અમેરિકનો તેમના દેશની સેવા કરી શકે તેવો એક રસ્તો શું છે?",
    },
    options: [
      { en: "Vote / Pay taxes / Obey the law / Serve in the military", ml: "വോട്ട് ചെയ്യുക / നികുതി അടക്കുക / നിയമം അനുസരിക്കുക / സൈന്യത്തിൽ സേവിക്കുക", gu: "મતદાન / કર ચૂકવવો / કાયદાનું પાલન / સેનામાં સેવા" },
      { en: "Leave the country", ml: "രാജ്യം വിടുക", gu: "દેશ છોડો" },
      { en: "Refuse to pay taxes", ml: "നികുതി അടക്കാൻ വിസമ്മതിക്കുക", gu: "કર ચૂકવવાનો ઇનકાર" },
      { en: "Ignore elections", ml: "തിരഞ്ഞെടുപ്പുകൾ അവഗണിക്കുക", gu: "ચૂંટણીઓની અવગણના" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Americans can serve their country by voting, paying taxes, obeying the law, serving in the military, or running for office.",
      ml: "വോട്ട് ചെയ്തും, നികുതി അടച്ചും, നിയമം അനുസരിച്ചും, സൈന്യത്തിൽ സേവിച്ചും, ഓഫീസിൽ മത്സരിച്ചും അമേരിക്കക്കാർക്ക് രാജ്യത്തെ സേവിക്കാം.",
      gu: "અૅમેરિકનો મતદાન, ટૅક્સ ચૂકવણી, કાયદો પાળવો, સૈન્ય સેવા, અથવા ઑફિસ માટે ઊભા રહીને દેશ સેવા કરી શકે.",
    },
  },
  {
    id: "h013",
    topic: "history",
    question: {
      en: "Why did colonists come to America?",
      ml: "കൊളോണിസ്റ്റുകൾ അമേരിക്കയിൽ വന്നത് എന്തുകൊണ്ട്?",
      gu: "વસાહતીઓ અમેરિકા શા માટે આવ્યા?",
    },
    options: [
      { en: "Freedom / Religious freedom / Economic opportunity / Escape persecution", ml: "സ്വാതന്ത്ര്യം / മതസ്വാതന്ത്ര്യം / സാമ്പത്തിക അവസരം / പീഡനത്തിൽ നിന്ന് രക്ഷപ്പെടാൻ", gu: "સ્વતંત્રતા / ધાર્મિક સ્વતંત્રતા / આર્થિક તક / જુલમથી છૂટકારો" },
      { en: "To fight wars", ml: "യുദ്ധങ്ങൾ ചെയ്യാൻ", gu: "યુદ્ધ લડવા" },
      { en: "To find gold only", ml: "സ്വർണ്ണം കണ്ടെത്താൻ മാത്രം", gu: "ફક્ત સોનું શોધવા" },
      { en: "They were forced by the British king", ml: "ബ്രിട്ടീഷ് രാജാവ് നിർബന്ധിച്ചു", gu: "તેમને બ્રિટિશ રાજાએ ફરજ પાડી હતી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Colonists came for freedom, political liberty, religious freedom, economic opportunity, and to escape persecution.",
      ml: "സ്വാതന്ത്ര്യം, രാഷ്ട്രീയ സ്വാതന്ത്ര്യം, മതസ്വാതന്ത്ര്യം, സാമ്പത്തിക അവസരം, പീഡനത്തിൽ നിന്ന് രക്ഷപ്പെടാൻ എന്നിവയ്ക്കായി കൊളോണിസ്റ്റുകൾ വന്നു.",
      gu: "વસાહતીઓ સ્વાધીનતા, રાજકીય સ્વતંત્રતા, ધાર્મિક સ્વાધીનતા, આર્થિક અવસર, અને અત્યાચારથી મુક્તિ માટે આવ્યા.",
    },
  },
  {
    id: "h014",
    topic: "history",
    question: {
      en: "What group of people was taken and sold as slaves?",
      ml: "ഏത് ഗ്രൂപ്പ് ആളുകൾ അടിമകളായി കൊണ്ടുപോയി വിൽക്കപ്പെട്ടു?",
      gu: "કયા જૂથના લોકોને ગુલામ તરીકે લઈ જવામાં આવ્યા અને વેચવામાં આવ્યા?",
    },
    options: [
      { en: "Europeans", ml: "യൂറോപ്യന്മാർ", gu: "યુરોપિયનો" },
      { en: "Native Americans", ml: "നേറ്റീവ് അമേരിക്കക്കാർ", gu: "મૂળ અમેરિકનો" },
      { en: "Africans", ml: "ആഫ്രിക്കക്കാർ", gu: "આફ્રિકનો" },
      { en: "Asians", ml: "ഏഷ്യക്കാർ", gu: "એશિયાઈ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Africans were taken and sold as slaves.",
      ml: "ആഫ്രിക്കക്കാർ അടിമകളായി കൊണ്ടുപോയി വിൽക്കപ്പെട്ടു.",
      gu: "આફ્રિકનોને ઉઠાવી ગુલામ તરીકે વેચવામાં આવ્યા.",
    },
  },
  {
    id: "h015",
    topic: "history",
    question: {
      en: "Why did Americans declare independence?",
      ml: "അമേരിക്കക്കാർ സ്വാതന്ത്ര്യം പ്രഖ്യാപിച്ചത് എന്തുകൊണ്ട്?",
      gu: "અમેરિકનોએ સ્વતંત્રતા શા માટે જાહેર કરી?",
    },
    options: [
      { en: "To join France", ml: "ഫ്രാൻസിൽ ചേരാൻ", gu: "ફ્રાન્સમાં જોડાવા" },
      { en: "High taxes / Taxation without representation / No self-government", ml: "ഉയർന്ന നികുതി / പ്രതിനിധിത്വം ഇല്ലാതെ നികുതി / സ്വയം ഭരണം ഇല്ല", gu: "ઊંચા કર / પ્રતિનિધિત્વ વિના કરવેરા / સ્વ-શાસન નહીં" },
      { en: "They wanted a king", ml: "അവർ ഒരു രാജാവിനെ ആഗ്രഹിച്ചു", gu: "તેમને રાજા જોઈતો હતો" },
      { en: "To become part of Spain", ml: "സ്പെയിനിന്റെ ഭാഗമാകാൻ", gu: "સ્પેનનો ભાગ બનવા" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Americans declared independence because of high taxes, taxation without representation, the Boston Massacre, Boston Tea Party, and no self-government.",
      ml: "ഉയർന്ന നികുതി, പ്രതിനിധിത്വമില്ലാതെ നികുതി, ബോസ്റ്റൺ കൂട്ടക്കൊല, ബോസ്റ്റൺ ടീ പാർടി, സ്വയം ഭരണമില്ലായ്മ എന്നിവ കാരണം അമേരിക്കക്കാർ സ്വാതന്ത്ര്യം പ്രഖ്യാപിച്ചു.",
      gu: "ઊંચા ટૅક્સ, પ્રતિનિધિત્વ વગર ટૅક્સ, બૉસ્ટન નરસંહાર, બૉસ્ટન ટી પાર્ટી, અને સ્વ-શાસન ન હોવાને કારણે અૅમેરિકનોએ સ્વાધીનતા જાહેર કરી.",
    },
  },
  {
    id: "h016",
    topic: "history",
    question: {
      en: "Name one important event during the American Revolution.",
      ml: "അമേരിക്കൻ വിപ്ലവത്തിൽ ഒരു പ്രധാന സംഭവം പറയുക.",
      gu: "અમેરિકન ક્રાંતિ દરમિયાનની એક મહત્વપૂર્ણ ઘટનાનું નામ આપો.",
    },
    options: [
      { en: "Battle of Gettysburg", ml: "ഗെറ്റിസ്ബർഗ് യുദ്ധം", gu: "ગૅટ્ટીઝ્બર્ગ યુદ્ધ" },
      { en: "Battle of Yorktown / Washington crossing the Delaware", ml: "യോർക്ക്ടൗൺ യുദ്ധം / ഡെലവെയർ കടക്കുന്ന വാഷിംഗ്ടൺ", gu: "યૉર્ક્ટાઉન યુદ્ધ / વૉશિંગ્ટને ડૅલૅવૅર પાર કર્યું" },
      { en: "Bombing of Pearl Harbor", ml: "പേൾ ഹാർബർ ബോംബാക്രമണം", gu: "પર્લ હાર્બર પર બૉમ્બ ધડાકો" },
      { en: "September 11 attacks", ml: "സെപ്റ്റംബർ 11 ആക്രമണങ്ങൾ", gu: "11 સપ્ટેમ્બરના હુમલા" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Important Revolutionary events include Bunker Hill, Washington crossing the Delaware, Saratoga, Valley Forge, and Yorktown.",
      ml: "ബങ്കർ ഹിൽ, ഡെലവെയർ കടക്കുന്ന വാഷിംഗ്ടൺ, സരടോഗ, വാലി ഫോർജ്, യോർക്ക്ടൗൺ എന്നിവ പ്രധാന വിപ്ലവ സംഭവങ്ങളാണ്.",
      gu: "ક્રાંતિની મહત્વપૂર્ણ ઘટનાઓમાં બંકર હિલ, વૉશિંગ્ટને ડેલવેર પાર કર્યું, સૅરૅટોગા, વૅલી ફોર્જ અને યૉર્કટાઉન શામેલ છે.",
    },
  },
  {
    id: "h017",
    topic: "history",
    question: {
      en: "Name five of the 13 original states.",
      ml: "13 യഥാർഥ സംസ്ഥാനങ്ങളിൽ അഞ്ചെണ്ണം പറയുക.",
      gu: "13 મૂળ રાજ્યોમાંથી પાંચના નામ આપો.",
    },
    options: [
      { en: "New York, Virginia, Pennsylvania, Massachusetts, Maryland", ml: "ന്യൂ യോർക്ക്, വിർജീനിയ, പെൻസിൽവേനിയ, മസ്സാച്ചുസെറ്റ്സ്, മേരിലാൻഡ്", gu: "ન્યૂ યૉર્ક, વર્જિનિયા, પેન્સિલવેનિયા, મેસેચ્યુસેટ્સ, મેરીલેન્ડ" },
      { en: "Texas, California, Florida, Ohio, Michigan", ml: "ടെക്സസ്, കാലിഫോർണിയ, ഫ്ലോറിഡ, ഒഹായോ, മിഷിഗൺ", gu: "ટેક્સાસ, કૅલિફોર્નિયા, ફ્લોરિડા, ઓહાયો, મિશિગન" },
      { en: "Alaska, Hawaii, Montana, Oregon, Washington", ml: "അലാസ്ക, ഹവായ്, മൊണ്ടാന, ഒറിഗൺ, വാഷിംഗ്ടൺ", gu: "અૅલાસ્કા, હવાઈ, મૉન્ટાના, ઓરેગૉન, વૉશિંગ્ટન" },
      { en: "Colorado, Arizona, Nevada, Utah, Kansas", ml: "കൊളറാഡോ, ആരിസോണ, നെവാഡ, യൂട്ടാ, കൻസാസ്", gu: "કૉલૉરૅડો, ઍરિઝોના, નૅવૅડા, યૂટ, કૅન્સાસ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The 13 original states included New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, and Georgia.",
      ml: "13 യഥാർഥ സംസ്ഥാനങ്ങളിൽ ന്യൂ ഹാംഷെയർ, മസ്സാച്ചുസെറ്റ്സ്, റോഡ് ഐലൻഡ്, കണക്ടിക്കട്, ന്യൂ യോർക്ക്, ന്യൂ ജേഴ്‌സി, പെൻസിൽവേനിയ, ഡെലവെയർ, മേരിലാൻഡ്, വിർജീനിയ, നോർത്ത് കരോലൈന, സൗത്ത് കരോലൈന, ജോർജിയ എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "13 મૂળ રાજ્યોમાં ન્યૂ હેમ્પશાયર, મેસેચ્યુસેટ્સ, રોડ આઇલેન્ડ, કનેક્ટિકટ, ન્યૂ યૉર્ક, ન્યૂ જર્સી, પેન્સિલવેનિયા, ડેલવેર, મેરીલેન્ડ, વર્જિનિયા, ઉત્તર કેરોલિના, દક્ષિણ કેરોલિના અને જ્યોર્જિયા શામેલ હતા.",
    },
  },
  {
    id: "h018",
    topic: "history",
    question: {
      en: "Name one writer of the Federalist Papers.",
      ml: "ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സിന്റെ ഒരു എഴുത്തുകാരൻ ആരാണ്?",
      gu: "ફેડરલિસ્ટ પેપર્સના એક લેખકનું નામ આપો.",
    },
    options: [
      { en: "Thomas Jefferson", ml: "തോമസ് ജെഫേഴ്‌സൺ", gu: "થોમસ જેફરસન" },
      { en: "James Madison / Alexander Hamilton / John Jay", ml: "ജെയിംസ് മാഡിസൺ / അലക്സാണ്ടർ ഹാമിൽടൺ / ജോൺ ജേ", gu: "જેમ્સ મેડિસન / ઍલેક્ઝાન્ડર હૅમિલ્ટન / જ્હોન જૅ" },
      { en: "George Washington", ml: "ജോർജ് വാഷിംഗ്ടൺ", gu: "જ્યોર્જ વોશિંગ્ટન" },
      { en: "Benjamin Franklin", ml: "ബെഞ്ചമിൻ ഫ്രാങ്ക്ലിൻ", gu: "બેન્જામિન ફ્રેન્કલિન" },
    ],
    correctIndex: 1,
    explanation: {
      en: "James Madison, Alexander Hamilton, and John Jay (Publius) wrote the Federalist Papers.",
      ml: "ജെയിംസ് മാഡിസൺ, അലക്സാണ്ടർ ഹാമിൽടൺ, ജോൺ ജേ (പബ്ലിയസ്) എന്നിവർ ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുതി.",
      gu: "જેમ્સ મેડિસન, ઍલેક્ઝાન્ડર હૅમિલ્ટન અને જ્હોન જૅ (પબ્લિઅસ) એ ફેડરલિસ્ટ પેપર્સ લખ્યા.",
    },
  },
  {
    id: "h019",
    topic: "history",
    question: {
      en: "Why were the Federalist Papers important?",
      ml: "ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എന്തുകൊണ്ട് പ്രധാനമായിരുന്നു?",
      gu: "ફેડરલિસ્ટ પેપર્સ શા માટે મહત્વપૂર્ણ હતા?",
    },
    options: [
      { en: "They declared war on Britain", ml: "ബ്രിട്ടനെതിരെ യുദ്ധം പ്രഖ്യാപിച്ചു", gu: "તેમણે બ્રિટન સામે યુદ્ધ જાહેર કર્યું" },
      { en: "They freed the slaves", ml: "അടിമകളെ മോചിപ്പിച്ചു", gu: "તેમણે ગુલામોને મુક્ત કર્યા" },
      { en: "They helped people understand and support the Constitution", ml: "ആളുകൾ ഭരണഘടന മനസ്സിലാക്കാനും പിന്തുണക്കാനും സഹായിച്ചു", gu: "તેમણે લોકોને બંધારણ સમજવામાં અને ટેકો આપવામાં મદદ કરી" },
      { en: "They created the Bill of Rights", ml: "അവകാശ ബിൽ സൃഷ്ടിച്ചു", gu: "તેમણે બિલ ઑફ રાઇટ્સ બનાવ્યું" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The Federalist Papers helped people understand the Constitution and supported its passage.",
      ml: "ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് ആളുകളെ ഭരണഘടന മനസ്സിലാക്കാൻ സഹായിക്കുകയും അതിന്റെ പാസാക്കലിനെ പിന്തുണക്കുകയും ചെയ്തു.",
      gu: "ફેડરલિસ્ટ પેપર્સે લોકોને બંધારણ સમજવામાં મદદ કરી અને તેના પસાર થવામાં ટેકો આપ્યો.",
    },
  },
  {
    id: "h020",
    topic: "history",
    question: {
      en: "Name one thing Benjamin Franklin is famous for.",
      ml: "ബെഞ്ചമിൻ ഫ്രാങ്ക്ലിൻ ഏതിനായി പ്രസിദ്ധനാണ്?",
      gu: "બેન્જામિન ફ્રેન્કલિન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
    },
    options: [
      { en: "First President of the United States", ml: "അമേരിക്കയുടെ ആദ്യ പ്രസിഡന്റ്", gu: "યુનાઈટેડ સ્ટેટ્સના પ્રથમ રાષ્ટ્રપતિ" },
      { en: "Writing the Constitution alone", ml: "ഭരണഘടന ഒറ്റയ്ക്ക് എഴുതി", gu: "એકલા બંધારણ લખવું" },
      { en: "Founded first public libraries / First Postmaster General / Inventor / U.S. diplomat", ml: "ആദ്യ പൊതു ലൈബ്രറികൾ സ്ഥാപിച്ചു / ആദ്യ പോസ്റ്റ്മാസ്റ്റർ ജനറൽ / കണ്ടുപിടുത്തക്കാരൻ / നയതന്ത്രജ്ഞൻ", gu: "પ્રથમ જાહેર પુસ્તકાલયોની સ્થાપના / પ્રથમ પોસ્ટમાસ્ટર જનરલ / શોધક / યુ.એસ. રાજદ્વારી" },
      { en: "Leading the Civil War", ml: "ആഭ്യന്തര യുദ്ധം നയിച്ചു", gu: "ગૃહયુદ્ધનું નેતૃત્વ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Benjamin Franklin is famous for founding the first public libraries, being the first Postmaster General, helping write the Declaration of Independence, being an inventor, and serving as U.S. diplomat.",
      ml: "ആദ്യ പൊതു ലൈബ്രറികൾ സ്ഥാപിച്ചതിനും, ആദ്യ പോസ്റ്റ്മാസ്റ്റർ ജനറൽ, കണ്ടുപിടുത്തക്കാരൻ, നയതന്ത്രജ്ഞൻ എന്നീ നിലകളിലും ബെഞ്ചമിൻ ഫ്രാങ്ക്ലിൻ പ്രസിദ്ധനാണ്.",
      gu: "બૅન્જામિન ફ્રૅન્ક્લિન પ્રથમ જાહેર પુસ્તકાલય સ્થાપવા, પ્રથમ પોસ્ટમાસ્ટર જૅનૅરલ, સ્વાધીનતા ઘોષણા લખવામાં મદદ, શોધક, અને યુ.એસ. રાજદ્વારી તરીકે પ્રસિદ્ધ છે.",
    },
  },
  {
    id: "h021",
    topic: "history",
    question: {
      en: "Name one thing George Washington is famous for.",
      ml: "ജോർജ് വാഷിംഗ്ടൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
      gu: "જ્યોર્જ વૉશિંગ્ટન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
    },
    options: [
      { en: "First President / Father of Our Country / Continental Army General", ml: "ആദ്യ പ്രസിഡന്റ് / നമ്മുടെ രാജ്യത്തിന്റെ പിതാവ് / കോണ്ടിനെന്റൽ ആർമി ജനറൽ", gu: "પ્રથમ રાષ્ટ્રપતિ / આપણા દેશના પિતા / કોન્ટિનેન્ટલ આર્મી જનરલ" },
      { en: "Writing the Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതി", gu: "સ્વતંત્રતાનું ઘોષણાપત્ર લખવું" },
      { en: "Freeing the slaves", ml: "അടിമകളെ മോചിപ്പിച്ചു", gu: "ગુલામોને મુક્ત કરવા" },
      { en: "Inventing electricity", ml: "വൈദ്യുതി കണ്ടുപിടിച്ചു", gu: "વીજળીની શોધ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "George Washington is famous for being the first President, Father of Our Country, and General of the Continental Army.",
      ml: "ആദ്യ പ്രസിഡന്റ്, നമ്മുടെ രാജ്യത്തിന്റെ പിതാവ്, കോണ്ടിനെന്റൽ ആർമി ജനറൽ എന്നീ നിലകളിൽ ജോർജ് വാഷിംഗ്ടൺ പ്രസിദ്ധനാണ്.",
      gu: "જ્યોર્જ વૉશિંગ્ટન પ્રથમ રાષ્ટ્રપતિ, આપણા દેશના પિતા અને કોન્ટિનેન્ટલ આર્મીના જનરલ તરીકે પ્રખ્યાત છે.",
    },
  },
  {
    id: "h022",
    topic: "history",
    question: {
      en: "Name one thing Thomas Jefferson is famous for.",
      ml: "തോമസ് ജഫേഴ്‌സൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
      gu: "થૉમસ જેફરસન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
    },
    options: [
      { en: "Leading the Civil War", ml: "ആഭ്യന്തര യുദ്ധം നയിച്ചു", gu: "ગૃહયુદ્ધનું નેતૃત્વ" },
      { en: "Wrote the Declaration of Independence / Third President / Louisiana Purchase", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതി / മൂന്നാം പ്രസിഡന്റ് / ലൂസിയാന പർച്ചേസ്", gu: "સ્વતંત્રતાનું ઘોષણાપત્ર લખ્યું / ત્રીજા રાષ્ટ્રપતિ / લુઇસિયાના ખરીદી" },
      { en: "Founding the first bank", ml: "ആദ്യ ബാങ്ക് സ്ഥാപിച്ചു", gu: "પ્રથમ બેંકની સ્થાપના" },
      { en: "Being the first Chief Justice", ml: "ആദ്യ ചീഫ് ജസ്റ്റിസ്", gu: "પ્રથમ ચીફ જસ્ટિસ હોવું" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Thomas Jefferson wrote the Declaration of Independence, was the third President, made the Louisiana Purchase, and was the first Secretary of State.",
      ml: "തോമസ് ജഫേഴ്‌സൺ സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതി, മൂന്നാം പ്രസിഡന്റായിരുന്നു, ലൂസിയാന പർച്ചേസ് നടത്തി, ആദ്യ സ്റ്റേറ്റ് സെക്രട്ടറിയായിരുന്നു.",
      gu: "થૉમસ જેફરસને સ્વતંત્રતાનું ઘોષણાપત્ર લખ્યું, ત્રીજા રાષ્ટ્રપતિ હતા, લુઇસિયાના ખરીદી કરી અને પ્રથમ વિદેશ મંત્રી હતા.",
    },
  },
  {
    id: "h023",
    topic: "history",
    question: {
      en: "Name one thing James Madison is famous for.",
      ml: "ജെയിംസ് മാഡിസൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
      gu: "જેમ્સ મેડિસન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
    },
    options: [
      { en: "Father of the Constitution / Fourth President / Federalist Papers writer", ml: "ഭരണഘടനയുടെ പിതാവ് / നാലാം പ്രസിഡന്റ് / ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുത്തുകാരൻ", gu: "બંધારણના પિતા / ચોથા રાષ્ટ્રપતિ / ફેડરલિસ્ટ પેપર્સના લેખક" },
      { en: "First President", ml: "ആദ്യ പ്രസിഡന്റ്", gu: "પ્રથમ રાષ્ટ્રપતિ" },
      { en: "Freeing the slaves", ml: "അടിമകളെ മോചിപ്പിച്ചു", gu: "ગુલામોને મુક્ત કરવા" },
      { en: "Discovering America", ml: "അമേരിക്ക കണ്ടെത്തി", gu: "અૅમેરિકા શોધવું" },
    ],
    correctIndex: 0,
    explanation: {
      en: "James Madison is known as the Father of the Constitution, was the fourth President, and wrote the Federalist Papers.",
      ml: "ജെയിംസ് മാഡിസൺ ഭരണഘടനയുടെ പിതാവ് എന്ന് അറിയപ്പെടുന്നു, നാലാം പ്രസിഡന്റായിരുന്നു, ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുതി.",
      gu: "જેમ્સ મેડિસન બંધારણના પિતા તરીકે ઓળખાય છે, ચોથા રાષ્ટ્રપતિ હતા અને ફેડરલિસ્ટ પેપર્સ લખ્યા હતા.",
    },
  },
  {
    id: "h024",
    topic: "history",
    question: {
      en: "Name one thing Alexander Hamilton is famous for.",
      ml: "അലക്സാണ്ടർ ഹാമിൽടൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
      gu: "ઍલેક્ઝાન્ડર હૅમિલ્ટન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
    },
    options: [
      { en: "Writing the Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതി", gu: "સ્વતંત્રતાનું ઘોષણાપત્ર લખવું" },
      { en: "Being the first President", ml: "ആദ്യ പ്രസിഡന്റ്", gu: "પ્રથમ રાષ્ટ્રપતિ હોવું" },
      { en: "First Secretary of Treasury / Federalist Papers writer / Established First Bank", ml: "ആദ്യ ട്രഷറി സെക്രട്ടറി / ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുത്തുകാരൻ / ആദ്യ ബാങ്ക് സ്ഥാപിച്ചു", gu: "ખજાનાના પ્રથમ સચિવ / ફેડરલિસ્ટ પેપર્સના લેખક / પ્રથમ બેંકની સ્થાપના" },
      { en: "Leading the Civil War", ml: "ആഭ്യന്തര യുദ്ധം നയിച്ചു", gu: "ગૃહયુદ્ધનું નેતૃત્વ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Alexander Hamilton was the first Secretary of the Treasury, a Federalist Papers writer, and established the First Bank of the United States.",
      ml: "അലക്സാണ്ടർ ഹാമിൽടൺ ആദ്യ ട്രഷറി സെക്രട്ടറിയും ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുത്തുകാരനും അമേരിക്കയുടെ ആദ്യ ബാങ്ക് സ്ഥാപിച്ച വ്യക്തിയുമായിരുന്നു.",
      gu: "ઍલેક્ઝાન્ડર હૅમિલ્ટન પ્રથમ ટ્રેઝરી સચિવ, ફૅડરલિસ્ટ પેપર્સ લેખક, અને અમેરિકાની પ્રથમ બૅન્ક સ્થાપક હતા.",
    },
  },
  {
    id: "h025",
    topic: "history",
    question: {
      en: "Name one war fought by the United States in the 1800s.",
      ml: "1800-കളിൽ അമേരിക്ക നടത്തിയ ഒരു യുദ്ധം പറയുക.",
      gu: "1800ના દાયકામાં યુનાઈટેડ સ્ટેટ્સ દ્વારા લડવામાં આવેલ એક યુદ્ધનું નામ આપો.",
    },
    options: [
      { en: "War of 1812 / Mexican-American War / Civil War / Spanish-American War", ml: "1812-ലെ യുദ്ധം / മെക്സിക്കൻ-അമേരിക്കൻ യുദ്ധം / ആഭ്യന്തര യുദ്ധം / സ്പാനിഷ്-അമേരിക്കൻ യുദ്ധം", gu: "1812નું યુદ્ધ / મેક્સિકન-અમેરિકન યુદ્ધ / ગૃહયુદ્ધ / સ્પેનિશ-અમેરિકન યુદ્ધ" },
      { en: "World War I", ml: "ഒന്നാം ലോകയുദ്ധം", gu: "પ્રથમ વિશ્વયુદ્ધ" },
      { en: "Vietnam War", ml: "വിയറ്റ്നാം യുദ്ധം", gu: "વિયેતનામ યુદ્ધ" },
      { en: "Korean War", ml: "കൊറിയൻ യുദ്ധം", gu: "કોરિયન યુદ્ધ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Wars in the 1800s include the War of 1812, Mexican-American War, Civil War, and Spanish-American War.",
      ml: "1800-കളിലെ യുദ്ധങ്ങളിൽ 1812-ലെ യുദ്ധം, മെക്സിക്കൻ-അമേരിക്കൻ യുദ്ധം, ആഭ്യന്തര യുദ്ധം, സ്പാനിഷ്-അമേരിക്കൻ യുദ്ധം എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "1800ના દાયકાના યુદ્ધોમાં 1812નું યુદ્ધ, મેક્સિકન-અમેરિકન યુદ્ધ, ગૃહયુદ્ધ અને સ્પેનિશ-અમેરિકન યુદ્ધ શામેલ છે.",
    },
  },
  {
    id: "h026",
    topic: "history",
    question: {
      en: "Name one important event during the Civil War.",
      ml: "ആഭ്യന്തര യുദ്ധത്തിലെ ഒരു പ്രധാന സംഭവം പറയുക.",
      gu: "ગૃહયુદ્ધ દરમિયાનની એક મહત્વપૂર્ણ ઘટનાનું નામ આપો.",
    },
    options: [
      { en: "Boston Tea Party", ml: "ബോസ്റ്റൺ ടീ പാർടി", gu: "બૉસ્ટન ટી પાર્ટી" },
      { en: "Pearl Harbor attack", ml: "പേൾ ഹാർബർ ആക്രമണം", gu: "પર્લ હાર્બર હુમલો" },
      { en: "Fort Sumter / Emancipation Proclamation / Gettysburg", ml: "ഫോർട്ട് സംടർ / എമൻസിപ്പേഷൻ പ്രൊക്ലമേഷൻ / ഗെറ്റിസ്ബർഗ്", gu: "ફોર્ટ સમ્ટર / મુક્તિ ઘોષણા / ગેટ્ટીસબર્ગ" },
      { en: "Signing the Constitution", ml: "ഭരണഘടന ഒപ്പിടൽ", gu: "બંધારણ પર હસ્તાક્ષર કરવા" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Important Civil War events include Fort Sumter, the Emancipation Proclamation, Gettysburg, Sherman's March, and Appomattox.",
      ml: "ഫോർട്ട് സംടർ, എമൻസിപ്പേഷൻ പ്രൊക്ലമേഷൻ, ഗെറ്റിസ്ബർഗ്, ഷെർമന്റെ മാർച്ച്, അപ്പോമറ്റോക്സ് എന്നിവ ആഭ്യന്തര യുദ്ധത്തിലെ പ്രധാന സംഭവങ്ങളാണ്.",
      gu: "ગૃહયુદ્ધની મહત્વપૂર્ણ ઘટનાઓમાં ફોર્ટ સમ્ટર, મુક્તિ ઘોષણા, ગેટ્ટીસબર્ગ, શેરમૅનનો કૂચ અને ઍપોમૅટોક્સ શામેલ છે.",
    },
  },
  {
    id: "h027",
    topic: "history",
    question: {
      en: "Name one thing Abraham Lincoln is famous for.",
      ml: "ഏബ്രഹാം ലിങ്കൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
      gu: "અબ્રાહમ લિંકન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
    },
    options: [
      { en: "First President", ml: "ആദ്യ പ്രസിഡന്റ്", gu: "પ્રથમ રાષ્ટ્રપતિ" },
      { en: "Writing the Constitution", ml: "ഭരണഘടന എഴുതി", gu: "બંધારણ લખવું" },
      { en: "Freed the slaves / Preserved the Union / 16th President / Gettysburg Address", ml: "അടിമകളെ മോചിപ്പിച്ചു / യൂണിയൻ സംരക്ഷിച്ചു / 16-ആം പ്രസിഡന്റ് / ഗെറ്റിസ്ബർഗ് അഡ്രസ്", gu: "ગુલામોને મુક્ત કર્યા / સંઘનું રક્ષણ / 16મા રાષ્ટ્રપતિ / ગેટ્ટીસબર્ગ સંબોધન" },
      { en: "Louisiana Purchase", ml: "ലൂസിയാന പർച്ചേസ്", gu: "લુઇસિયાના ખરીદી" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Abraham Lincoln freed the slaves, preserved the Union, was the 16th President, and gave the Gettysburg Address.",
      ml: "ഏബ്രഹാം ലിങ്കൺ അടിമകളെ മോചിപ്പിച്ചു, യൂണിയൻ സംരക്ഷിച്ചു, 16-ആം പ്രസിഡന്റായിരുന്നു, ഗെറ്റിസ്ബർഗ് അഡ്രസ് നൽകി.",
      gu: "અૅબ્રાહમ લિંકને ગુલામોને મુક્ત કર્યા, યુનિયન ટકાવ્યું, 16મા રાષ્ટ્રપતિ હતા, અને ગેટ્ટીઝ્બર્ગ ભાષણ આપ્યું.",
    },
  },
  {
    id: "h028",
    topic: "history",
    question: {
      en: "What amendment defines citizenship by birth?",
      ml: "ജന്മനാ പൗരത്വം നിർവചിക്കുന്ന ഭേദഗതി ഏതാണ്?",
      gu: "કયો સુધારો જન્મથી નાગરિકતાને વ્યાખ્યાયિત કરે છે?",
    },
    options: [
      { en: "1st Amendment", ml: "ഒന്നാം ഭേദഗതി", gu: "1લો સુધારો" },
      { en: "14th Amendment", ml: "14-ആം ഭേദഗതി", gu: "14મો સુધારો" },
      { en: "19th Amendment", ml: "19-ആം ഭേദഗതി", gu: "19મો સુધારો" },
      { en: "22nd Amendment", ml: "22-ആം ഭേദഗതി", gu: "22મો સુધારો" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The 14th Amendment defines citizenship by birth.",
      ml: "14-ആം ഭേദഗതി ജന്മനാ പൗരത്വം നിർവചിക്കുന്നു.",
      gu: "14મો સુધારો જન્મથી નાગરિકતાને વ્યાખ્યાયિત કરે છે.",
    },
  },
  {
    id: "h029",
    topic: "history",
    question: {
      en: "When did all men get the right to vote?",
      ml: "എല്ലാ പുരുഷൻമാർക്കും വോട്ടവകാശം ലഭിച്ചത് എപ്പോൾ?",
      gu: "બધા પુરુષોને મતદાનનો અધિકાર ક્યારે મળ્યો?",
    },
    options: [
      { en: "1776", ml: "1776", gu: "1776" },
      { en: "After the Civil War / 15th Amendment / 1870", ml: "ആഭ്യന്തര യുദ്ധത്തിന് ശേഷം / 15-ആം ഭേദഗതി / 1870", gu: "ગૃહ-યુદ્ધ પછી / 15મો સુધારો / 1870" },
      { en: "1920", ml: "1920", gu: "1920" },
      { en: "1964", ml: "1964", gu: "1964" },
    ],
    correctIndex: 1,
    explanation: {
      en: "All men got the right to vote after the Civil War, during Reconstruction, with the 15th Amendment in 1870.",
      ml: "ആഭ്യന്തര യുദ്ധത്തിന് ശേഷം, പുനർനിർമ്മാണ കാലത്ത്, 1870-ലെ 15-ആം ഭേദഗതിയോടെ എല്ലാ പുരുഷൻമാർക്കും വോട്ടവകാശം ലഭിച്ചു.",
      gu: "ગૃહ-યુદ્ધ પછી, 1870માં 15મા સુધારા સાથે, Reconstruction (ઘર-ઘડતર) સમયે બધા પુરુષોને મતદાન અધિકાર મળ્યો.",
    },
  },
  {
    id: "h030",
    topic: "history",
    question: {
      en: "Name one leader of the women's rights movement in the 1800s.",
      ml: "1800-കളിലെ സ്ത്രീ അവകാശ പ്രസ്ഥാനത്തിന്റെ ഒരു നേതാവ് ആരാണ്?",
      gu: "1800ના દાયકામાં મહિલા અધિકાર આંદોલનના એક નેતાનું નામ આપો.",
    },
    options: [
      { en: "Susan B. Anthony", ml: "സൂസൻ ബി. ആന്തണി", gu: "સુસાન બી. ઍન્થની" },
      { en: "Rosa Parks", ml: "റോസ പാർക്ക്സ്", gu: "રોઝા પાર્ક્સ" },
      { en: "Harriet Beecher Stowe", ml: "ഹാരിയറ്റ് ബീച്ചർ സ്റ്റോ", gu: "હૅરિયેટ બીચર સ્ટોવ" },
      { en: "Eleanor Roosevelt", ml: "എലീനോർ റൂസ്‌വെൽറ്റ്", gu: "ઍલિનોર રૂઝવેલ્ટ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Women's rights leaders of the 1800s include Susan B. Anthony, Elizabeth Cady Stanton, Sojourner Truth, Harriet Tubman, and Lucretia Mott.",
      ml: "1800-കളിലെ സ്ത്രീ അവകാശ നേതാക്കളിൽ സൂസൻ ബി. ആന്തണി, എലിസബത്ത് കേഡി സ്റ്റാന്റൺ, സോജോർണർ ട്രൂത്ത്, ഹാരിയറ്റ് ടബ്മൻ, ലൂക്രേഷ്യ മോട്ട് എന്നിവർ ഉൾപ്പെടുന്നു.",
      gu: "1800ના દાયકાના મહિલા અધિકાર નેતાઓમાં સુસાન બી. ઍન્થની, ઍલિઝાબેથ કેડી સ્ટેન્ટન, સોજર્નર ટ્રુથ, હૅરિયેટ ટબમૅન અને લ્યુક્રેશિયા મૉટ શામેલ છે.",
    },
  },
  {
    id: "h031",
    topic: "history",
    question: {
      en: "Name one war fought by the United States in the 1900s.",
      ml: "1900-കളിൽ അമേരിക്ക നടത്തിയ ഒരു യുദ്ധം പറയുക.",
      gu: "1900ના દાયકામાં યુનાઇટેડ સ્ટેટ્સે લડેલું એક યુદ્ધ જણાવો.",
    },
    options: [
      { en: "Civil War", ml: "ആഭ്യന്തര യുദ്ധം", gu: "ગૃહ-યુદ્ધ" },
      { en: "Revolutionary War", ml: "വിപ്ലവ യുദ്ധം", gu: "ક્રાંતિકારી યુદ્ધ" },
      { en: "World War I / World War II / Korean War / Vietnam War / Gulf War", ml: "ഒന്നാം ലോകയുദ്ധം / രണ്ടാം ലോകയുദ്ധം / കൊറിയൻ യുദ്ധം / വിയറ്റ്നാം യുദ്ധം / ഗൾഫ് യുദ്ധം", gu: "પ્રથમ વિશ્વયુદ્ધ / બીજું વિશ્વયુદ્ધ / કોરિયન યુદ્ધ / વિયેતનામ યુદ્ધ / ખાડી યુદ્ધ" },
      { en: "War of 1812", ml: "1812-ലെ യുദ്ധം", gu: "1812નું યુદ્ધ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Wars in the 1900s include World War I, World War II, Korean War, Vietnam War, and the Gulf War.",
      ml: "1900-കളിലെ യുദ്ധങ്ങളിൽ ഒന്നാം ലോകയുദ്ധം, രണ്ടാം ലോകയുദ്ധം, കൊറിയൻ യുദ്ധം, വിയറ്റ്നാം യുദ്ധം, ഗൾഫ് യുദ്ധം എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "1900ના દાયકાના યુદ્ધોમાં પ્રથમ વિશ્વયુદ્ધ, બીજું વિશ્વયુદ્ધ, કોરિયન યુદ્ધ, વિયેતનામ યુદ્ધ અને ખાડી યુદ્ધ શામેલ છે.",
    },
  },
  {
    id: "h032",
    topic: "history",
    question: {
      en: "Why did the United States enter World War I?",
      ml: "അമേരിക്ക ഒന്നാം ലോകയുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
      gu: "યુનાઈટેડ સ્ટેટ્સ પ્રથમ વિશ્વયુદ્ધમાં શા માટે જોડાયું?",
    },
    options: [
      { en: "Because of Pearl Harbor", ml: "പേൾ ഹാർബർ കാരണം", gu: "પર્લ હાર્બરને કારણે" },
      { en: "To stop communism", ml: "കമ്മ്യൂണിസം തടയാൻ", gu: "સામ્યવાદ રોકવા" },
      { en: "German attacks on U.S. ships / To support the Allies", ml: "അമേരിക്കൻ കപ്പലുകൾക്ക് നേരെ ജർമൻ ആക്രമണങ്ങൾ / സഖ്യകക്ഷികളെ പിന്തുണക്കാൻ", gu: "યુ.એસ. જહાજો પર જર્મન હુમલા / સાથી દેશોને ટેકો આપવા" },
      { en: "To gain territory", ml: "പ്രദേശം നേടാൻ", gu: "પ્રદેશ મેળવવા" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The U.S. entered WWI because of German attacks on American ships and to support the Allies.",
      ml: "അമേരിക്കൻ കപ്പലുകൾക്ക് നേരെയുള്ള ജർമൻ ആക്രമണങ്ങളും സഖ്യകക്ഷികളെ പിന്തുണക്കാനും അമേരിക്ക ഒന്നാം ലോകയുദ്ധത്തിൽ പ്രവേശിച്ചു.",
      gu: "જર્મન હુમલાના કારણે અમેરિકન જહાજો પર અને સાથી દેશોને ટેકો આપવા યુ.એસ. પ્રથમ વિશ્વયુદ્ધમાં જોડાયું.",
    },
  },
  {
    id: "h033",
    topic: "history",
    question: {
      en: "What was the Great Depression?",
      ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം (Great Depression) എന്തായിരുന്നു?",
      gu: "મહામંદી શું હતી?",
    },
    options: [
      { en: "A major war", ml: "ഒരു വലിയ യുദ്ധം", gu: "મોટું યુદ્ધ" },
      { en: "A long economic recession", ml: "ദീർഘകാല സാമ്പത്തിക മാന്ദ്യം", gu: "લાંબી આર્થિક મંદી" },
      { en: "A natural disaster", ml: "ഒരു പ്രകൃതി ദുരന്തം", gu: "કુદરતી આફત" },
      { en: "A political movement", ml: "ഒരു രാഷ്ട്രീയ പ്രസ്ഥാനം", gu: "રાજકીય ચળવળ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The Great Depression was a long economic recession.",
      ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം ഒരു ദീർഘകാല സാമ്പത്തിക മാന്ദ്യമായിരുന്നു.",
      gu: "મહામંદી એક લાંબી આર્થિક મંદી હતી.",
    },
  },
  {
    id: "h034",
    topic: "history",
    question: {
      en: "When did the Great Depression start?",
      ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം ആരംഭിച്ചത് എപ്പോൾ?",
      gu: "મહામંદી ક્યારે શરૂ થઈ?",
    },
    options: [
      { en: "1929", ml: "1929", gu: "1929" },
      { en: "1939", ml: "1939", gu: "1939" },
      { en: "1919", ml: "1919", gu: "1919" },
      { en: "1941", ml: "1941", gu: "1941" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Great Depression started in 1929.",
      ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം 1929-ൽ ആരംഭിച്ചു.",
      gu: "મહામંદી 1929માં શરૂ થઈ.",
    },
  },
  {
    id: "h035",
    topic: "history",
    question: {
      en: "Why did the United States enter World War II?",
      ml: "അമേരിക്ക രണ്ടാം ലോകയുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
      gu: "યુનાઈટેડ સ્ટેટ્સ બીજા વિશ્વયુદ્ધમાં શા માટે જોડાયું?",
    },
    options: [
      { en: "Pearl Harbor / Support the Allies / Oppose the Axis powers", ml: "പേൾ ഹാർബർ / സഖ്യകക്ഷികളെ പിന്തുണക്കാൻ / ആക്സിസ് ശക്തികളെ എതിർക്കാൻ", gu: "પર્લ હાર્બર / સાથી દેશોને ટેકો / ધરી શક્તિઓનો વિરોધ" },
      { en: "To stop communism", ml: "കമ്മ്യൂണിസം തടയാൻ", gu: "સામ્યવાદ રોકવા" },
      { en: "Because of the Great Depression", ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം കാരണം", gu: "ગ્રૅટ ડિપ્રૅશનને કારણે" },
      { en: "To gain territory in Europe", ml: "യൂറോപ്പിൽ പ്രദേശം നേടാൻ", gu: "યુરોપમાં પ્રદેશ મેળવવા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. entered WWII because of the attack on Pearl Harbor, to support the Allies, and to oppose the Axis powers.",
      ml: "പേൾ ഹാർബർ ആക്രമണം, സഖ്യകക്ഷികളെ പിന്തുണക്കാൻ, ആക്സിസ് ശക്തികളെ എതിർക്കാൻ എന്നിവ കാരണം അമേരിക്ക രണ്ടാം ലോകയുദ്ധത്തിൽ പ്രവേശിച്ചു.",
      gu: "પર્લ હાર્બર પરના હુમલાના કારણે, સાથી દેશોને ટેકો આપવા અને ધરી શક્તિઓનો વિરોધ કરવા યુ.એસ. બીજા વિશ્વયુદ્ધમાં જોડાયું.",
    },
  },
  {
    id: "h036",
    topic: "history",
    question: {
      en: "Name one thing Dwight Eisenhower is famous for.",
      ml: "ഡ്വൈറ്റ് ഐസൻഹോവർ ഏതിനായി പ്രസിദ്ധനാണ്?",
      gu: "ડ્વાઇટ આઇઝનહોવર જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
    },
    options: [
      { en: "Writing the Constitution", ml: "ഭരണഘടന എഴുതി", gu: "બંધારણ લખવું" },
      { en: "WWII General / 34th President / Interstate Highway System", ml: "രണ്ടാം ലോകയുദ്ധ ജനറൽ / 34-ആം പ്രസിഡന്റ് / ഇന്റർസ്റ്റേറ്റ് ഹൈവേ സിസ്റ്റം", gu: "બીજા વિશ્વયુદ્ધના જનરલ / 34મા રાષ્ટ્રપતિ / ઇન્ટરસ્ટેટ હાઇવે સિસ્ટમ" },
      { en: "Freeing the slaves", ml: "അടിമകളെ മോചിപ്പിച്ചു", gu: "ગુલામોને મુક્ત કરવા" },
      { en: "First President", ml: "ആദ്യ പ്രസിഡന്റ്", gu: "પ્રથમ રાષ્ટ્રપતિ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Eisenhower was a WWII General, the 34th President, and created the Interstate Highway System.",
      ml: "ഐസൻഹോവർ രണ്ടാം ലോകയുദ്ധ ജനറലും 34-ആം പ്രസിഡന്റും ഇന്റർസ്റ്റേറ്റ് ഹൈവേ സിസ്റ്റം സൃഷ്ടിച്ച വ്യക്തിയുമായിരുന്നു.",
      gu: "આઇઝનહોવર બીજા વિશ્વયુદ્ધના જનરલ, 34મા રાષ્ટ્રપતિ અને ઇન્ટરસ્ટેટ હાઇવે સિસ્ટમના નિર્માતા હતા.",
    },
  },
  {
    id: "h037",
    topic: "history",
    question: {
      en: "Who was the main rival of the United States during the Cold War?",
      ml: "ശീതയുദ്ധ കാലത്ത് അമേരിക്കയുടെ പ്രധാന എതിരാളി ആരായിരുന്നു?",
      gu: "શીત યુદ્ધ દરમિયાન યુનાઈટેડ સ્ટેટ્સનો મુખ્ય હરીફ કોણ હતો?",
    },
    options: [
      { en: "China", ml: "ചൈന", gu: "ચીન" },
      { en: "Germany", ml: "ജർമ്മനി", gu: "જર્મની" },
      { en: "Soviet Union", ml: "സോവിയറ്റ് യൂണിയൻ", gu: "સોવિયેત સંઘ" },
      { en: "Japan", ml: "ജപ്പാൻ", gu: "જાપાન" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The Soviet Union was the main rival of the United States during the Cold War.",
      ml: "ശീതയുദ്ധ കാലത്ത് സോവിയറ്റ് യൂണിയൻ ആയിരുന്നു അമേരിക്കയുടെ പ്രധാന എതിരാളി.",
      gu: "શીત યુદ્ધ દરમિયાન સોવિયેત સંઘ યુનાઈટેડ સ્ટેટ્સનો મુખ્ય હરીફ હતો.",
    },
  },
  {
    id: "h038",
    topic: "history",
    question: {
      en: "What was the main concern of the United States during the Cold War?",
      ml: "ശീതയുദ്ധ കാലത്ത് അമേരിക്കയുടെ പ്രധാന ആശങ്ക എന്തായിരുന്നു?",
      gu: "શીત યુદ્ધ દરમિયાન યુનાઈટેડ સ્ટેટ્સની મુખ્ય ચિંતા શું હતી?",
    },
    options: [
      { en: "Immigration", ml: "കുടിയേറ്റം", gu: "ઇમિગ્રેશન" },
      { en: "Communism", ml: "കമ്മ്യൂണിസം", gu: "સામ્યવાદ" },
      { en: "Global warming", ml: "ആഗോള താപനം", gu: "વૈશ્વિક ઉષ્ણતા" },
      { en: "Trade deficits", ml: "വ്യാപാര കമ്മി", gu: "વેપાર ખાધ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The main concern during the Cold War was communism (and nuclear war).",
      ml: "ശീതയുദ്ധ കാലത്തെ പ്രധാന ആശങ്ക കമ്മ്യൂണിസം (ആണവ യുദ്ധവും) ആയിരുന്നു.",
      gu: "શીત યુદ્ધ દરમિયાન મુખ્ય ચિંતા સામ્યવાદ (અને પરમાણુ યુદ્ધ) હતી.",
    },
  },
  {
    id: "h039",
    topic: "history",
    question: {
      en: "Why did the United States enter the Korean War?",
      ml: "അമേരിക്ക കൊറിയൻ യുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
      gu: "યુનાઈટેડ સ્ટેટ્સ કોરિયન યુદ્ધમાં શા માટે જોડાયું?",
    },
    options: [
      { en: "To gain territory", ml: "പ്രദേശം നേടാൻ", gu: "પ્રદેશ મેળવવા" },
      { en: "Because of Pearl Harbor", ml: "പേൾ ഹാർബർ കാരണം", gu: "પર્લ હાર્બરને કારણે" },
      { en: "To stop the spread of communism", ml: "കമ്മ്യൂണിസത്തിന്റെ വ്യാപനം തടയാൻ", gu: "સામ્યવાદના ફેલાવાને રોકવા" },
      { en: "To support Britain", ml: "ബ്രിട്ടനെ പിന്തുണക്കാൻ", gu: "બ્રિટનને ટેકો આપવા" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The U.S. entered the Korean War to stop the spread of communism.",
      ml: "കമ്മ്യൂണിസത്തിന്റെ വ്യാപനം തടയാൻ അമേരിക്ക കൊറിയൻ യുദ്ധത്തിൽ പ്രവേശിച്ചു.",
      gu: "સામ્યવાદના ફેલાવાને રોકવા યુ.એસ. કોરિયન યુદ્ધમાં જોડાયું.",
    },
  },
  {
    id: "h040",
    topic: "history",
    question: {
      en: "Why did the United States enter the Vietnam War?",
      ml: "അമേരിക്ക വിയറ്റ്നാം യുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
      gu: "યુનાઈટેડ સ્ટેટ્સ વિયેતનામ યુદ્ધમાં શા માટે જોડાયું?",
    },
    options: [
      { en: "To stop the spread of communism", ml: "കമ്മ്യൂണിസത്തിന്റെ വ്യാപനം തടയാൻ", gu: "સામ્યવાદના ફેલાવાને રોકવા" },
      { en: "Because of Pearl Harbor", ml: "പേൾ ഹാർബർ കാരണം", gu: "પર્લ હાર્બરને કારણે" },
      { en: "To support Britain", ml: "ബ്രിട്ടനെ പിന്തുണക്കാൻ", gu: "બ્રિટનને ટેકો આપવા" },
      { en: "To oppose Germany", ml: "ജർമ്മനിയെ എതിർക്കാൻ", gu: "જર્મનીનો વિરોધ કરવા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. entered the Vietnam War to stop the spread of communism.",
      ml: "കമ്മ്യൂണിസത്തിന്റെ വ്യാപനം തടയാൻ അമേരിക്ക വിയറ്റ്നാം യുദ്ധത്തിൽ പ്രവേശിച്ചു.",
      gu: "સામ્યવાદના ફેલાવાને રોકવા યુ.એસ. વિયેતનામ યુદ્ધમાં જોડાયું.",
    },
  },
  {
    id: "h041",
    topic: "history",
    question: {
      en: "What did the civil rights movement do?",
      ml: "പൗരാവകാശ പ്രസ്ഥാനം എന്ത് ചെയ്തു?",
      gu: "નાગરિક અધિકાર આંદોલને શું કર્યું?",
    },
    options: [
      { en: "Ended racial discrimination", ml: "വംശീയ വിവേചനം അവസാനിപ്പിച്ചു", gu: "વંશીય ભેદભાવ સમાપ્ત કર્યો" },
      { en: "Created the Constitution", ml: "ഭരണഘടന സൃഷ്ടിച്ചു", gu: "બંધારણ બનાવ્યું" },
      { en: "Ended the Cold War", ml: "ശീതയുദ്ധം അവസാനിപ്പിച്ചു", gu: "શીત યુદ્ધ સમાપ્ત કર્યું" },
      { en: "Won World War II", ml: "രണ്ടാം ലോകയുദ്ധം ജയിച്ചു", gu: "બીજું વિશ્વયુદ્ધ જીત્યું" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The civil rights movement fought to end racial discrimination.",
      ml: "വംശീയ വിവേചനം അവസാനിപ്പിക്കാൻ പൗരാവകാശ പ്രസ്ഥാനം പോരാടി.",
      gu: "નાગરિક અધિકાર આંદોલને વંશીય ભેદભાવ સમાપ્ત કરવા લડ્યું.",
    },
  },
  {
    id: "h042",
    topic: "history",
    question: {
      en: "Name one thing Martin Luther King Jr. is famous for.",
      ml: "മാർടിൻ ലൂഥർ കിംഗ് ജൂനിയർ ഏതിനായി പ്രസിദ്ധനാണ്?",
      gu: "માર્ટિન લ્યુથર કિંગ જુનિયર જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
    },
    options: [
      { en: "Being President", ml: "പ്രസിഡന്റ് ആയിരുന്നു", gu: "રાષ્ટ્રપતિ હોવું" },
      { en: "Fought for civil rights / Worked for equality", ml: "പൗരാവകാശങ്ങൾക്കായി പോരാടി / സമത്വത്തിനായി പ്രവർത്തിച്ചു", gu: "નાગરિક અધિકારો માટે લડ્યા / સમાનતા માટે કાર્ય કર્યું" },
      { en: "Inventing the telephone", ml: "ടെലിഫോൺ കണ്ടുപിടിച്ചു", gu: "ટેલિફોનની શોધ" },
      { en: "Winning the Civil War", ml: "ആഭ്യന്തര യുദ്ധം ജയിച്ചു", gu: "ગૃહયુદ્ધ જીતવું" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Martin Luther King Jr. fought for civil rights and worked for equality for all Americans.",
      ml: "മാർടിൻ ലൂഥർ കിംഗ് ജൂനിയർ പൗരാവകാശങ്ങൾക്കായി പോരാടുകയും എല്ലാ അമേരിക്കക്കാർക്കും സമത്വത്തിനായി പ്രവർത്തിക്കുകയും ചെയ്തു.",
      gu: "માર્ટિન લ્યુથર કિંગ જુનિયરે નાગરિક અધિકારો માટે લડ્યા અને બધા અમેરિકનો માટે સમાનતા માટે કાર્ય કર્યું.",
    },
  },
  {
    id: "h043",
    topic: "history",
    question: {
      en: "Why did the United States enter the Persian Gulf War?",
      ml: "അമേരിക്ക പേർഷ്യൻ ഗൾഫ് യുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
      gu: "યુનાઈટેડ સ્ટેટ્સ પર્શિયન ખાડી યુદ્ધમાં શા માટે જોડાયું?",
    },
    options: [
      { en: "To remove Iraqi forces from Kuwait", ml: "കുവൈത്തിൽ നിന്ന് ഇറാഖ് സേനയെ നീക്കം ചെയ്യാൻ", gu: "કુવૈતમાંથી ઇરાકી દળોને દૂર કરવા" },
      { en: "To stop communism", ml: "കമ്മ്യൂണിസം തടയാൻ", gu: "સામ્યવાદ રોકવા" },
      { en: "Because of 9/11", ml: "9/11 കാരണം", gu: "9/11ને કારણે" },
      { en: "To support Britain", ml: "ബ്രിട്ടനെ പിന്തുണക്കാൻ", gu: "બ્રિટનને ટેકો આપવા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. entered the Persian Gulf War to remove Iraqi forces from Kuwait.",
      ml: "കുവൈത്തിൽ നിന്ന് ഇറാഖ് സേനയെ നീക്കം ചെയ്യാൻ അമേരിക്ക പേർഷ്യൻ ഗൾഫ് യുദ്ധത്തിൽ പ്രവേശിച്ചു.",
      gu: "કુવૈતમાંથી ઇરાકી દળોને દૂર કરવા યુ.એસ. પર્શિયન ખાડી યુદ્ધમાં જોડાયું.",
    },
  },
  {
    id: "h044",
    topic: "history",
    question: {
      en: "Name one U.S. conflict after September 11, 2001.",
      ml: "2001 സെപ്റ്റംബർ 11-ന് ശേഷമുള്ള ഒരു അമേരിക്കൻ സംഘർഷം പറയുക.",
      gu: "11 સપ્ટેમ્બર, 2001 પછીના એક યુ.એસ. સંઘર્ષનું નામ આપો.",
    },
    options: [
      { en: "Vietnam War", ml: "വിയറ്റ്നാം യുദ്ധം", gu: "વિયેતનામ યુદ્ધ" },
      { en: "Korean War", ml: "കൊറിയൻ യുദ്ധം", gu: "કોરિયન યુદ્ધ" },
      { en: "War on Terror / War in Afghanistan / War in Iraq", ml: "ഭീകരതക്കെതിരായ യുദ്ധം / അഫ്ഗാനിസ്ഥാനിലെ യുദ്ധം / ഇറാഖിലെ യുദ്ധം", gu: "આતંકવાદ સામે યુદ્ધ / અફઘાનિસ્તાનમાં યુદ્ધ / ઇરાકમાં યુદ્ધ" },
      { en: "Gulf War", ml: "ഗൾഫ് യുദ്ധം", gu: "ખાડી યુદ્ધ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "After 9/11, the U.S. fought the War on Terror, the War in Afghanistan, and the War in Iraq.",
      ml: "9/11-ന് ശേഷം അമേരിക്ക ഭീകരതക്കെതിരായ യുദ്ധം, അഫ്ഗാനിസ്ഥാനിലെ യുദ്ധം, ഇറാഖിലെ യുദ്ധം എന്നിവ നടത്തി.",
      gu: "9/11 પછી, યુ.એસ.એ આતંક સામેનું યુદ્ધ, અફઘાનિસ્તાનમાં યુદ્ધ, અને ઇરાકમાં યુદ્ધ લડ્યું.",
    },
  },
  {
    id: "h045",
    topic: "history",
    question: {
      en: "Name one American Indian tribe in the United States.",
      ml: "അമേരിക്കൻ ഐക്യനാടുകളിലെ ഒരു അമേരിക്കൻ ഇന്ത്യൻ ഗോത്രം പറയുക.",
      gu: "યુનાઇટેડ સ્ટેટ્સમાં એક અમેરિકન ઇન્ડિયન જાતિનું નામ જણાવો.",
    },
    options: [
      { en: "Cherokee / Navajo / Sioux / Apache / Hopi", ml: "ചെറോക്കി / നവാജോ / സിയൂക്സ് / അപ്പാഷെ / ഹോപ്പി", gu: "ચૅરોકી / નૅવૅઝ / સ્યૂ / અૅપૅચ / હોપી" },
      { en: "Aztec", ml: "ആസ്ടെക്", gu: "ઍઝ્ટૅક" },
      { en: "Inca", ml: "ഇൻക", gu: "ઇન્કા" },
      { en: "Maya", ml: "മായ", gu: "માયા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "American Indian tribes include Cherokee, Navajo, Sioux, Apache, Hopi, and many more.",
      ml: "ചെറോക്കി, നവാജോ, സിയൂക്സ്, അപ്പാഷെ, ഹോപ്പി എന്നിവ അമേരിക്കൻ ഇന്ത്യൻ ഗോത്രങ്ങളാണ്.",
      gu: "અૅમેરિકન ઇન્ડિયન જાતિઓમાં ચૅરોકી, નૅવૅઝ, સ્યુ, અૅપૅચ, હોપી, અને અનેક અન્ય સામેલ છે.",
    },
  },
  {
    id: "h046",
    topic: "history",
    question: {
      en: "Name one American innovation.",
      ml: "ഒരു അമേരിക്കൻ കണ്ടുപിടുത്തം പറയുക.",
      gu: "એક અમેરિકન નવીન શોધનું નામ આપો.",
    },
    options: [
      { en: "The printing press", ml: "പ്രിന്റിംഗ് പ്രസ്", gu: "છાપખાનું" },
      { en: "Light bulb / Airplane / Assembly line / Moon landing", ml: "ബൾബ് / വിമാനം / അസംബ്ലി ലൈൻ / ചന്ദ്ര ലാൻഡിംഗ്", gu: "લાઇટ બલ્બ / વિમાન / ઍસેમ્બલી લાઇન / ચંદ્ર પર ઉતરાણ" },
      { en: "The wheel", ml: "ചക്രം", gu: "પૈડું" },
      { en: "Paper", ml: "പേപ്പർ", gu: "કાગળ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "American innovations include the light bulb, automobile, skyscrapers, airplane, assembly line, moon landing, and integrated circuit.",
      ml: "ബൾബ്, ഓട്ടോമൊബൈൽ, ആകാശഗോപുരങ്ങൾ, വിമാനം, അസംബ്ലി ലൈൻ, ചന്ദ്ര ലാൻഡിംഗ്, ഇന്റഗ്രേറ്റഡ് സർക്യൂട്ട് എന്നിവ അമേരിക്കൻ കണ്ടുപിടുത്തങ്ങളാണ്.",
      gu: "અૅમેરિકન શોધોમાં ઇલૅક્ટ્રિક બલ્બ, ઑટોમોબાઈલ, ગગનચૂંબી ઇમારતો, વિમાન, ઍસૅમ્બ્લી લાઇન, ચંદ્ર-ઉતરાણ, અને ઇન્ટિગ્રેટૅડ સર્કિટ સામેલ છે.",
    },
  },
  {
    id: "s008",
    topic: "symbols",
    question: {
      en: "Where is the Statue of Liberty?",
      ml: "സ്വാതന്ത്ര്യ പ്രതിമ (Statue of Liberty) എവിടെയാണ്?",
      gu: "Statue of Liberty ક્યાં છે?",
    },
    options: [
      { en: "Washington, D.C.", ml: "വാഷിംഗ്ടൺ ഡി.സി.", gu: "વૉશિંગ્ટન, ડી.સી." },
      { en: "New York Harbor / Liberty Island", ml: "ന്യൂ യോർക്ക് ഹാർബർ / ലിബർടി ഐലൻഡ്", gu: "ન્યૂ યૉર્ક હાર્બર / લિબર્ટી આઇલેન્ડ" },
      { en: "Los Angeles", ml: "ലോസ് ഏഞ്ചലസ്", gu: "લૉસ એન્જલસ" },
      { en: "Philadelphia", ml: "ഫിലാഡൽഫിയ", gu: "ફિલાડેલ્ફિયા" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The Statue of Liberty is in New York Harbor on Liberty Island.",
      ml: "സ്വാതന്ത്ര്യ പ്രതിമ ന്യൂ യോർക്ക് ഹാർബറിലെ ലിബർടി ഐലൻഡിലാണ്.",
      gu: "સ્ટેચ્યુ ઑફ લિબર્ટી ન્યૂ યૉર્ક હાર્બરમાં લિબર્ટી આઇલેન્ડ પર છે.",
    },
  },
  {
    id: "s009",
    topic: "symbols",
    question: {
      en: "Name three national holidays.",
      ml: "മൂന്ന് ദേശീയ അവധി ദിനങ്ങൾ പറയുക.",
      gu: "ત્રણ રાષ્ટ્રીય રજાઓના નામ આપો.",
    },
    options: [
      { en: "Thanksgiving, Christmas, Independence Day", ml: "താങ്ക്സ്ഗിവിംഗ്, ക്രിസ്‌മസ്, ഇൻഡിപ്പൻഡൻസ് ഡേ", gu: "થેન્ક્સગિવિંગ, ક્રિસમસ, ઇન્ડિપેન્ડન્સ ડે" },
      { en: "Valentine's Day, Easter, Halloween", ml: "വാലന്റൈൻസ് ഡേ, ഈസ്റ്റർ, ഹാലോവീൻ", gu: "વૅલેન્ટાઇન્સ ડે, ઇસ્ટર, હૅલોવીન" },
      { en: "Super Bowl Sunday, Black Friday, April Fools", ml: "സൂപ്പർ ബൗൾ ഞായർ, ബ്ലാക്ക് ഫ്രൈഡേ, ഏപ്രിൽ ഫൂൾ", gu: "સુપર બોલ સન્ડે, બ્લૅક ફ્રાઇડે, ઍપ્રિલ ફૂલ્સ" },
      { en: "Mother's Day, Father's Day, Groundhog Day", ml: "മദേഴ്‌സ് ഡേ, ഫാദേഴ്‌സ് ഡേ, ഗ്രൗണ്ട്ഹോഗ് ഡേ", gu: "મધર્સ ડે, ફાધર્સ ડે, ગ્રાઉન્ડહોગ ડે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "National holidays include New Year's Day, Martin Luther King Jr. Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas, and Juneteenth.",
      ml: "ദേശീയ അവധി ദിനങ്ങളിൽ ന്യൂ ഇയർ ഡേ, MLK ജൂനിയർ ഡേ, പ്രസിഡന്റ്സ് ഡേ, മെമ്മോറിയൽ ഡേ, ഇൻഡിപ്പൻഡൻസ് ഡേ, ലേബർ ഡേ, കൊളംബസ് ഡേ, വെറ്ററൻസ് ഡേ, താങ്ക്സ്ഗിവിംഗ്, ക്രിസ്‌മസ്, ജൂൺടീൻത്ത് എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "રાષ્ટ્રીય રજાઓમાં ન્યૂ યર્સ ડે, માર્ટિન લ્યુથર કિંગ જુનિયર ડે, પ્રેસિડેન્ટ્સ ડે, મેમોરિયલ ડે, ઇન્ડિપેન્ડન્સ ડે, લેબર ડે, કોલંબસ ડે, વેટરન્સ ડે, થેન્ક્સગિવિંગ, ક્રિસમસ અને જૂનટીન્થ શામેલ છે.",
    },
  },
  {
    id: "s010",
    topic: "symbols",
    question: {
      en: "What is Veterans Day?",
      ml: "വെറ്ററൻസ് ഡേ എന്താണ്?",
      gu: "વેટરન્સ ડે શું છે?",
    },
    options: [
      { en: "A day to celebrate independence", ml: "സ്വാതന്ത്ര്യം ആഘോഷിക്കുന്ന ദിനം", gu: "સ્વાધીનતા ઉજવવાનો દિવસ" },
      { en: "A day to honor soldiers who died in service", ml: "സേവനത്തിൽ മരിച്ച സൈനികരെ ആദരിക്കുന്ന ദിനം", gu: "સેવામાં સ્વર્ગ ગયેલ સૈનિકોને સ્મૃતિ-અર્પણ કરવાનો દિવસ" },
      { en: "A day to honor all who have served in the military", ml: "സൈന്യത്തിൽ സേവിച്ച എല്ലാവരെയും ആദരിക്കുന്ന ദിനം", gu: "સૈન્યમાં સેવા આપેલ સૌ સૈનિકોને સન્માનવાનો દિવસ" },
      { en: "Presidents' birthday celebration", ml: "പ്രസിഡന്റുമാരുടെ ജന്മദിന ആഘോഷം", gu: "રાષ્ટ્રપતિઓના જન્મદિવસની ઉજવણી" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Veterans Day honors all people who have served in the U.S. military.",
      ml: "അമേരിക്കൻ സൈന്യത്തിൽ സേവിച്ച എല്ലാവരെയും ആദരിക്കുന്ന ദിനമാണ് വെറ്ററൻസ് ഡേ.",
      gu: "વેટરન્સ ડે યુ.એસ. સેનામાં સેવા આપનાર તમામ લોકોનું સન્માન કરે છે.",
    },
  },

  // ── New questions: USCIS 2025 / 2008 coverage gaps ──────────────

  {
    id: "g056",
    topic: "government",
    question: {
      en: "What is an amendment?",
      ml: "ഒരു ഭേദഗതി (amendment) എന്താണ്?",
      gu: "સુધારો (amendment) શું છે?",
    },
    options: [
      { en: "A change or addition to the Constitution", ml: "ഭരണഘടനയിലെ ഒരു മാറ്റം അല്ലെങ്കിൽ കൂട്ടിച്ചേർക്കൽ", gu: "બંધારણમાં ફેરફાર અથવા ઉમેરો" },
      { en: "A new federal law", ml: "ഒരു പുതിയ ഫെഡറൽ നിയമം", gu: "એક નવો ફેડરલ કાયદો" },
      { en: "A presidential order", ml: "ഒരു പ്രസിഡൻഷ്യൽ ഉത്തരവ്", gu: "રાષ્ટ્રપતિનો આદેશ" },
      { en: "A Supreme Court ruling", ml: "ഒരു സുപ്രീം കോടതി വിധി", gu: "સુપ્રીમ કોર્ટનો ચુકાદો" },
    ],
    correctIndex: 0,
    explanation: {
      en: "An amendment is a change or addition to the Constitution.",
      ml: "ഒരു ഭേദഗതി എന്നത് ഭരണഘടനയിലെ ഒരു മാറ്റം അല്ലെങ്കിൽ കൂട്ടിച്ചേർക്കലാണ്.",
      gu: "સુધારો એ બંધારણમાં ફેરફાર અથવા ઉમેરો છે.",
    },
  },
  {
    id: "r012",
    topic: "rights",
    question: {
      en: "What is one right or freedom from the First Amendment?",
      ml: "ഒന്നാം ഭേദഗതിയിൽ നിന്നുള്ള ഒരു അവകാശം അല്ലെങ്കിൽ സ്വാതന്ത്ര്യം എന്താണ്?",
      gu: "પ્રથમ સુધારામાંથી એક અધિકાર અથવા સ્વતંત્રતા શું છે?",
    },
    options: [
      { en: "Freedom of speech", ml: "അഭിപ്രായ സ്വാതന്ത്ര്യം", gu: "વાણી સ્વાતંત્ર્ય" },
      { en: "Right to bear arms", ml: "ആയുധം വഹിക്കാനുള്ള അവകാശം", gu: "શસ્ત્રો રાખવાનો અધિકાર" },
      { en: "Right to a speedy trial", ml: "വേഗത്തിലുള്ള വിചാരണക്കുള്ള അവകാശം", gu: "ઝડપી ન્યાય મેળવવાનો અધિકાર" },
      { en: "Right to vote", ml: "വോട്ട് ചെയ്യാനുള്ള അവകാശം", gu: "મતદાનનો અધિકાર" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The First Amendment protects freedom of speech, religion, assembly, press, and the right to petition the government.",
      ml: "ഒന്നാം ഭേദഗതി അഭിപ്രായ സ്വാതന്ത്ര്യം, മതസ്വാതന്ത്ര്യം, സമ്മേളന സ്വാതന്ത്ര്യം, മാധ്യമ സ്വാതന്ത്ര്യം, ഗവൺമെന്റിനോട് നിവേദനം നൽകാനുള്ള അവകാശം എന്നിവ സംരക്ഷിക്കുന്നു.",
      gu: "પ્રથમ સુધારો વાણી, ધર્મ, સભા, પ્રેસ અને સરકારને અરજી કરવાના અધિકારનું રક્ષણ કરે છે.",
    },
  },
  {
    id: "r013",
    topic: "rights",
    question: {
      en: "What is freedom of religion?",
      ml: "മതസ്വാതന്ത്ര്യം എന്താണ്?",
      gu: "ધર્મની સ્વતંત્રતા શું છે?",
    },
    options: [
      { en: "You can practice any religion, or not practice a religion", ml: "നിങ്ങൾക്ക് ഏത് മതവും ആചരിക്കാം, അല്ലെങ്കിൽ ഒരു മതവും ആചരിക്കാതിരിക്കാം", gu: "તમે કોઈપણ ધર્મ અનુસરી શકો છો, અથવા કોઈ ધર્મ ન અનુસરી શકો" },
      { en: "You must follow the national religion", ml: "നിങ്ങൾ ദേശീയ മതം പിന്തുടരണം", gu: "તમારે રાષ્ટ્રીય ધર્મ અનુસરવો જોઈએ" },
      { en: "Only Christianity is allowed", ml: "ക്രിസ്തുമതം മാത്രമേ അനുവദിക്കൂ", gu: "ફક્ત ખ્રિસ્તી ધર્મ જ માન્ય છે" },
      { en: "The government picks your religion", ml: "ഗവൺമെന്റ് നിങ്ങളുടെ മതം തിരഞ്ഞെടുക്കുന്നു", gu: "સરકાર તમારો ધર્મ પસંદ કરે છે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Freedom of religion means you can practice any religion, or not practice a religion at all.",
      ml: "മതസ്വാതന്ത്ര്യം എന്നാൽ നിങ്ങൾക്ക് ഏത് മതവും ആചരിക്കാം, അല്ലെങ്കിൽ ഒരു മതവും ആചരിക്കാതിരിക്കാം.",
      gu: "ધર્મની સ્વતંત્રતા એટલે તમે કોઈપણ ધર્મ અનુસરી શકો છો, અથવા કોઈ ધર્મ ન પણ અનુસરી શકો.",
    },
  },
  {
    id: "r014",
    topic: "rights",
    question: {
      en: "What do we call the first ten amendments to the Constitution?",
      ml: "ഭരണഘടനയിലെ ആദ്യ പത്ത് ഭേദഗതികളെ എന്ത് വിളിക്കുന്നു?",
      gu: "બંધારણના પ્રથમ દસ સુધારાઓને શું કહે છે?",
    },
    options: [
      { en: "The Bill of Rights", ml: "ബിൽ ഓഫ് റൈറ്റ്സ്", gu: "બિલ ઑફ રાઇટ્સ" },
      { en: "The Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം", gu: "સ્વાધીનતાનું ઘોષણાપત્ર" },
      { en: "The Preamble", ml: "ആമുഖം", gu: "પ્રસ્તાવના" },
      { en: "The Articles of Confederation", ml: "ആർട്ടിക്കിൾസ് ഓഫ് കോൺഫെഡറേഷൻ", gu: "આર્ટિકલ્સ ઑફ કન્ફેડરેશન" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The first ten amendments to the Constitution are called the Bill of Rights.",
      ml: "ഭരണഘടനയിലെ ആദ്യ പത്ത് ഭേദഗതികളെ ബിൽ ഓഫ് റൈറ്റ്സ് എന്ന് വിളിക്കുന്നു.",
      gu: "બંધારણના પ્રથમ દસ સુધારાઓને બિલ ઑફ રાઇટ્સ કહે છે.",
    },
  },
  {
    id: "g057",
    topic: "government",
    question: {
      en: "Why is the Electoral College important?",
      ml: "ഇലക്ടറൽ കോളേജ് എന്തുകൊണ്ട് പ്രധാനമാണ്?",
      gu: "ઈલેક્ટોરલ કૉલેજ શા માટે મહત્વપૂર્ણ છે?",
    },
    options: [
      { en: "It decides who is elected President", ml: "പ്രസിഡന്റായി ആരെ തിരഞ്ഞെടുക്കുമെന്ന് ഇത് തീരുമാനിക്കുന്നു", gu: "તે નક્કી કરે છે કે રાષ્ટ્રપતિ કોણ ચૂંટાય છે" },
      { en: "It writes the laws", ml: "ഇത് നിയമങ്ങൾ എഴുതുന്നു", gu: "તે કાયદા લખે છે" },
      { en: "It appoints Supreme Court justices", ml: "ഇത് സുപ്രീം കോടതി ജഡ്ജിമാരെ നിയമിക്കുന്നു", gu: "તે સુપ્રીમ કોર્ટના ન્યાયાધીશોની નિમણૂક કરે છે" },
      { en: "It declares war", ml: "ഇത് യുദ്ധം പ്രഖ്യാപിക്കുന്നു", gu: "તે યુદ્ધ જાહેર કરે છે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Electoral College decides who is elected President. It is a compromise between popular vote and congressional selection.",
      ml: "ഇലക്ടറൽ കോളേജ് പ്രസിഡന്റിനെ ആരെ തിരഞ്ഞെടുക്കുമെന്ന് തീരുമാനിക്കുന്നു. ഇത് ജനകീയ വോട്ടും കോൺഗ്രസ് തിരഞ്ഞെടുപ്പും തമ്മിലുള്ള ഒരു ഒത്തുതീർപ്പാണ്.",
      gu: "ઈલેક્ટોરલ કૉલેજ નક્કી કરે છે કે કોણ રાષ્ટ્રપતિ ચૂંટાય. તે લોકપ્રિય મત અને કોંગ્રેસ દ્વારા પસંદગી વચ્ચેનું સમાધાન છે.",
    },
  },
  {
    id: "g058",
    topic: "government",
    question: {
      en: "What is one part of the judicial branch?",
      ml: "ജുഡീഷ്യൽ ശാഖയുടെ ഒരു ഭാഗം എന്താണ്?",
      gu: "ન્યાયિક શાખાનો એક ભાગ શું છે?",
    },
    options: [
      { en: "The Supreme Court", ml: "സുപ്രീം കോടതി", gu: "સુપ્રીમ કોર્ટ" },
      { en: "The Senate", ml: "സെനറ്റ്", gu: "સેનેટ" },
      { en: "The Cabinet", ml: "കാബിനറ്റ്", gu: "કેબિનેટ" },
      { en: "The House of Representatives", ml: "ജനപ്രതിനിധി സഭ", gu: "પ્રતિનિધિ સભા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The judicial branch includes the Supreme Court and federal courts.",
      ml: "ജുഡീഷ്യൽ ശാഖയിൽ സുപ്രീം കോടതിയും ഫെഡറൽ കോടതികളും ഉൾപ്പെടുന്നു.",
      gu: "ન્યાયિક શાખામાં સુપ્રીમ કોર્ટ અને ફેડરલ અદાલતોનો સમાવેશ થાય છે.",
    },
  },
  {
    id: "g059",
    topic: "government",
    question: {
      en: "What does the judicial branch do?",
      ml: "ജുഡീഷ്യൽ ശാഖ എന്ത് ചെയ്യുന്നു?",
      gu: "ન્યાયિક શાખા શું કરે છે?",
    },
    options: [
      { en: "Reviews and explains laws, decides if a law is constitutional", ml: "നിയമങ്ങൾ അവലോകനം ചെയ്യുകയും വിശദീകരിക്കുകയും, ഒരു നിയമം ഭരണഘടനാപരമാണോ എന്ന് തീരുമാനിക്കുകയും ചെയ്യുന്നു", gu: "કાયદાઓની સમીક્ષા કરે છે અને સમજાવે છે, કાયદો બંધારણીય છે કે નહીં તે નક્કી કરે છે" },
      { en: "Writes new laws", ml: "പുതിയ നിയമങ്ങൾ എഴുതുന്നു", gu: "નવા કાયદા લખે છે" },
      { en: "Commands the military", ml: "സൈന്യത്തെ കമാൻഡ് ചെയ്യുന്നു", gu: "સૈન્યનું નેતૃત્વ કરે છે" },
      { en: "Collects taxes", ml: "നികുതി ശേഖരിക്കുന്നു", gu: "કર એકત્ર કરે છે" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The judicial branch reviews laws, explains laws, resolves disputes, and decides if a law goes against the Constitution.",
      ml: "ജുഡീഷ്യൽ ശാഖ നിയമങ്ങൾ അവലോകനം ചെയ്യുന്നു, വിശദീകരിക്കുന്നു, തർക്കങ്ങൾ പരിഹരിക്കുന്നു, ഒരു നിയമം ഭരണഘടനക്ക് എതിരാണോ എന്ന് തീരുമാനിക്കുന്നു.",
      gu: "ન્યાયિક શાખા કાયદાઓની સમીક્ષા કરે છે, સમજાવે છે, વિવાદો ઉકેલે છે અને નક્કી કરે છે કે કાયદો બંધારણ વિરુદ્ધ છે કે નહીં.",
    },
  },
  {
    id: "g060",
    topic: "government",
    question: {
      en: "Name one power that is only for the federal government.",
      ml: "ഫെഡറൽ ഗവൺമെന്റിന് മാത്രമുള്ള ഒരു അധികാരം പറയുക.",
      gu: "ફેડરલ સરકારની જ એક સત્તાનું નામ આપો.",
    },
    options: [
      { en: "Print money", ml: "പണം അച്ചടിക്കുക", gu: "નાણાં છાપવા" },
      { en: "Provide schooling and education", ml: "വിദ്യാഭ്യാസം നൽകുക", gu: "શિક્ષણ પૂરું પાડવું" },
      { en: "Issue driver's licenses", ml: "ഡ്രൈവിംഗ് ലൈസൻസ് നൽകുക", gu: "ડ્રાઇવિંગ લાઇસન્સ આપવા" },
      { en: "Provide police departments", ml: "പോലീസ് വകുപ്പുകൾ നൽകുക", gu: "પોલીસ વિભાગ પૂરા પાડવા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Powers only for the federal government include printing money, declaring war, creating an army, and making treaties.",
      ml: "ഫെഡറൽ ഗവൺമെന്റിന് മാത്രമുള്ള അധികാരങ്ങളിൽ പണം അച്ചടിക്കൽ, യുദ്ധം പ്രഖ്യാപിക്കൽ, സൈന്യം സൃഷ്ടിക്കൽ, ഉടമ്പടികൾ ഉണ്ടാക്കൽ എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "ફેડરલ સરકારની જ સત્તાઓમાં નાણાં છાપવા, યુદ્ધ જાહેર કરવું, સેના બનાવવી અને સંધિઓ કરવી શામેલ છે.",
    },
  },
  {
    id: "g061",
    topic: "government",
    question: {
      en: "Name one power that is only for the states.",
      ml: "സംസ്ഥാനങ്ങൾക്ക് മാത്രമുള്ള ഒരു അധികാരം പറയുക.",
      gu: "રાજ્યોની જ એક સત્તાનું નામ આપો.",
    },
    options: [
      { en: "Provide schooling and education", ml: "വിദ്യാഭ്യാസം നൽകുക", gu: "શિક્ષણ પૂરું પાડવું" },
      { en: "Print money", ml: "പണം അച്ചടിക്കുക", gu: "નાણાં છાપવા" },
      { en: "Declare war", ml: "യുദ്ധം പ്രഖ്യാപിക്കുക", gu: "યુદ્ધ જાહેર કરવું" },
      { en: "Make treaties", ml: "ഉടമ്പടികൾ ഉണ്ടാക്കുക", gu: "સંધિઓ કરવી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Powers only for the states include providing schooling, police and fire departments, issuing driver's licenses, approving zoning, and local government.",
      ml: "സംസ്ഥാനങ്ങൾക്ക് മാത്രമുള്ള അധികാരങ്ങളിൽ വിദ്യാഭ്യാസം, പോലീസ്, ഫയർ ഡിപ്പാർട്ട്‌മെന്റുകൾ, ഡ്രൈവിംഗ് ലൈസൻസ് നൽകൽ, സോണിംഗ് അംഗീകരിക്കൽ എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "રાજ્યોની જ સત્તાઓમાં શિક્ષણ, પોલીસ અને ફાયર વિભાગ, ડ્રાઇવિંગ લાઇસન્સ આપવા, ઝોનિંગ મંજૂર કરવું અને સ્થાનિક સરકાર શામેલ છે.",
    },
  },
  {
    id: "g062",
    topic: "government",
    question: {
      en: "What is the purpose of the 10th Amendment?",
      ml: "പത്താം ഭേദഗതിയുടെ ഉദ്ദേശ്യം എന്താണ്?",
      gu: "દસમા સુધારાનો હેતુ શું છે?",
    },
    options: [
      { en: "Powers not given to the federal government belong to the states or the people", ml: "ഫെഡറൽ ഗവൺമെന്റിന് നൽകാത്ത അധികാരങ്ങൾ സംസ്ഥാനങ്ങൾക്കോ ജനങ്ങൾക്കോ ആണ്", gu: "ફેડરલ સરકારને ન અપાયેલી સત્તાઓ રાજ્યો અથવા લોકોની છે" },
      { en: "Freedom of speech", ml: "അഭിപ്രായ സ്വാതന്ത്ര്യം", gu: "વાણી સ્વાતંત્ર્ય" },
      { en: "Right to bear arms", ml: "ആയുധം വഹിക്കാനുള്ള അവകാശം", gu: "શસ્ત્રો રાખવાનો અધિકાર" },
      { en: "Abolition of slavery", ml: "അടിമത്ത നിർമ്മാർജ്ജനം", gu: "ગુલામી નાબૂદી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The 10th Amendment states that powers not given to the federal government belong to the states or to the people.",
      ml: "ഫെഡറൽ ഗവൺമെന്റിന് നൽകാത്ത അധികാരങ്ങൾ സംസ്ഥാനങ്ങൾക്കോ ജനങ്ങൾക്കോ ആണെന്ന് പത്താം ഭേദഗതി പ്രസ്താവിക്കുന്നു.",
      gu: "દસમો સુધારો કહે છે કે ફેડરલ સરકારને ન અપાયેલી સત્તાઓ રાજ્યો અથવા લોકોની છે.",
    },
  },
  {
    id: "g063",
    topic: "government",
    question: {
      en: "In what month do we vote for President?",
      ml: "ഏത് മാസത്തിലാണ് നമ്മൾ പ്രസിഡന്റിന് വേണ്ടി വോട്ട് ചെയ്യുന്നത്?",
      gu: "આપણે કયા મહિનામાં રાષ્ટ્રપતિ માટે મતદાન કરીએ છીએ?",
    },
    options: [
      { en: "November", ml: "നവംബർ", gu: "નવેમ્બર" },
      { en: "January", ml: "ജനുവരി", gu: "જાન્યુઆરી" },
      { en: "July", ml: "ജൂലൈ", gu: "જુલાઈ" },
      { en: "March", ml: "മാർച്ച്", gu: "માર્ચ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "We vote for President in November.",
      ml: "നമ്മൾ നവംബറിൽ പ്രസിഡന്റിന് വേണ്ടി വോട്ട് ചെയ്യുന്നു.",
      gu: "આપણે નવેમ્બરમાં રાષ્ટ્રપતિ માટે મતદાન કરીએ છીએ.",
    },
  },
  {
    id: "g064",
    topic: "government",
    question: {
      en: "If both the President and the Vice President can no longer serve, who becomes President?",
      ml: "പ്രസിഡന്റിനും വൈസ് പ്രസിഡന്റിനും ഇനി സേവിക്കാൻ കഴിയുന്നില്ലെങ്കിൽ, ആര് പ്രസിഡന്റാകും?",
      gu: "જો રાષ્ટ્રપતિ અને ઉપરાષ્ટ્રપતિ બંને હવે સેવા આપી ન શકે, તો રાષ્ટ્રપતિ કોણ બને છે?",
    },
    options: [
      { en: "The Speaker of the House", ml: "ഹൗസ് സ്പീക്കർ", gu: "હાઉસ સ્પીકર" },
      { en: "The Secretary of State", ml: "സ്റ്റേറ്റ് സെക്രട്ടറി", gu: "સ્ટેટ સેક્રેટરી" },
      { en: "The Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്", gu: "ચીફ જસ્ટિસ" },
      { en: "The Secretary of Defense", ml: "പ്രതിരോധ സെക്രട്ടറി", gu: "સંરક્ષણ સચિવ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "If both the President and Vice President can no longer serve, the Speaker of the House becomes President.",
      ml: "പ്രസിഡന്റിനും വൈസ് പ്രസിഡന്റിനും ഇനി സേവിക്കാൻ കഴിയുന്നില്ലെങ്കിൽ, ഹൗസ് സ്പീക്കർ പ്രസിഡന്റാകും.",
      gu: "જો રાષ્ટ્રપતિ અને ઉપરાષ્ટ્રપતિ બંને સેવા ન આપી શકે, તો હાઉસ સ્પીકર રાષ્ટ્રપતિ બને છે.",
    },
  },
  {
    id: "g065",
    topic: "government",
    question: {
      en: "What are the two major political parties in the United States?",
      ml: "അമേരിക്കയിലെ രണ്ട് പ്രധാന രാഷ്ട്രീയ പാർട്ടികൾ ഏതൊക്കെയാണ്?",
      gu: "યુનાઇટેડ સ્ટેટ્સમાં બે મુખ્ય રાજકીય પક્ષો કયા છે?",
    },
    options: [
      { en: "Democratic and Republican", ml: "ഡെമോക്രാറ്റിക്, റിപ്പബ്ലിക്കൻ", gu: "ડેમોક્રેટિક અને રિપબ્લિકન" },
      { en: "Liberal and Conservative", ml: "ലിബറൽ, കൺസർവേറ്റീവ്", gu: "લિબરલ અને કન્ઝર્વેટિવ" },
      { en: "Federalist and Anti-Federalist", ml: "ഫെഡറലിസ്റ്റ്, ആന്റി-ഫെഡറലിസ്റ്റ്", gu: "ફેડરલિસ્ટ અને એન્ટી-ફેડરલિસ્ટ" },
      { en: "Green and Libertarian", ml: "ഗ്രീൻ, ലിബർടേറിയൻ", gu: "ગ્રીન અને લિબર્ટેરિયન" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The two major political parties in the United States are the Democratic Party and the Republican Party.",
      ml: "അമേരിക്കയിലെ രണ്ട് പ്രധാന രാഷ്ട്രീയ പാർട്ടികൾ ഡെമോക്രാറ്റിക് പാർട്ടിയും റിപ്പബ്ലിക്കൻ പാർട്ടിയുമാണ്.",
      gu: "યુનાઇટેડ સ્ટેટ્સમાં બે મુખ્ય રાજકીય પક્ષો ડેમોક્રેટિક પાર્ટી અને રિપબ્લિકન પાર્ટી છે.",
    },
  },
  {
    id: "g066",
    topic: "government",
    question: {
      en: "What is the political party of the President now?",
      ml: "ഇപ്പോഴത്തെ പ്രസിഡന്റിന്റെ രാഷ്ട്രീയ പാർട്ടി ഏതാണ്?",
      gu: "હાલના રાષ્ટ્રપતિનો રાજકીય પક્ષ કયો છે?",
    },
    options: [
      { en: "Republican", ml: "റിപ്പബ്ലിക്കൻ", gu: "રિપબ્લિકન" },
      { en: "Democratic", ml: "ഡെമോക്രാറ്റിക്", gu: "ડેમોક્રેટિક" },
      { en: "Independent", ml: "സ്വതന്ത്രൻ", gu: "સ્વતંત્ર" },
      { en: "Libertarian", ml: "ലിബർടേറിയൻ", gu: "લિબર્ટેરિયન" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The current President, Donald Trump, is a Republican.",
      ml: "ഇപ്പോഴത്തെ പ്രസിഡന്റ് ഡൊണാൾഡ് ട്രംപ് ഒരു റിപ്പബ്ലിക്കനാണ്.",
      gu: "હાલના રાષ્ટ્રપતિ ડોનાલ્ડ ટ્રમ્પ રિપબ્લિકન છે.",
    },
  },
  {
    id: "r015",
    topic: "rights",
    question: {
      en: "What is one responsibility that is only for United States citizens?",
      ml: "അമേരിക്കൻ പൗരന്മാർക്ക് മാത്രമുള്ള ഒരു ഉത്തരവാദിത്തം എന്താണ്?",
      gu: "યુનાઇટેડ સ્ટેટ્સના નાગરિકોની જ એક જવાબદારી શું છે?",
    },
    options: [
      { en: "Serve on a jury", ml: "ജൂറിയിൽ സേവനമനുഷ്ഠിക്കുക", gu: "જ્યુરીમાં સેવા આપવી" },
      { en: "Pay taxes", ml: "നികുതി അടയ്ക്കുക", gu: "કર ભરવો" },
      { en: "Obey the law", ml: "നിയമം അനുസരിക്കുക", gu: "કાયદાનું પાલન કરવું" },
      { en: "Attend school", ml: "സ്കൂളിൽ പോകുക", gu: "શાળામાં જવું" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Responsibilities only for U.S. citizens include serving on a jury and voting in a federal election.",
      ml: "യു.എസ്. പൗരന്മാർക്ക് മാത്രമുള്ള ഉത്തരവാദിത്തങ്ങളിൽ ജൂറിയിൽ സേവനമനുഷ്ഠിക്കലും ഫെഡറൽ തിരഞ്ഞെടുപ്പിൽ വോട്ട് ചെയ്യലും ഉൾപ്പെടുന്നു.",
      gu: "યુ.એસ. નાગરિકોની જ જવાબદારીઓમાં જ્યુરીમાં સેવા આપવી અને ફેડરલ ચૂંટણીમાં મતદાન કરવું શામેલ છે.",
    },
  },
  {
    id: "r016",
    topic: "rights",
    question: {
      en: "Name one right only for United States citizens.",
      ml: "അമേരിക്കൻ പൗരന്മാർക്ക് മാത്രമുള്ള ഒരു അവകാശം പറയുക.",
      gu: "ફક્ત યુનાઇટેડ સ્ટેટ્સના નાગરિકોનો એક અધિકાર જણાવો.",
    },
    options: [
      { en: "Vote in a federal election", ml: "ഫെഡറൽ തിരഞ്ഞെടുപ്പിൽ വോട്ട് ചെയ്യുക", gu: "ફેડરલ ચૂંટણીમાં મતદાન કરવું" },
      { en: "Freedom of speech", ml: "അഭിപ്രായ സ്വാതന്ത്ര്യം", gu: "વાણી સ્વાતંત્ર્ય" },
      { en: "Freedom of worship", ml: "ആരാധനാ സ്വാതന്ത്ര്യം", gu: "પૂજા સ્વાતંત્ર્ય" },
      { en: "Right to a fair trial", ml: "നീതിയുക്ത വിചാരണക്കുള്ള അവകാശം", gu: "ન્યાયી ન્યાય મેળવવાનો અધિકાર" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Rights only for U.S. citizens include voting in a federal election and running for federal office.",
      ml: "യു.എസ്. പൗരന്മാർക്ക് മാത്രമുള്ള അവകാശങ്ങളിൽ ഫെഡറൽ തിരഞ്ഞെടുപ്പിൽ വോട്ട് ചെയ്യലും ഫെഡറൽ ഓഫീസിന് മത്സരിക്കലും ഉൾപ്പെടുന്നു.",
      gu: "યુ.એસ. નાગરિકોના જ અધિકારોમાં ફેડરલ ચૂંટણીમાં મતદાન કરવું અને ફેડરલ હોદ્દા માટે ઊભા રહેવું શામેલ છે.",
    },
  },
  {
    id: "r017",
    topic: "rights",
    question: {
      en: "How old do citizens have to be to vote for President?",
      ml: "പ്രസിഡന്റിന് വേണ്ടി വോട്ട് ചെയ്യാൻ പൗരന്മാർക്ക് എത്ര വയസ്സാകണം?",
      gu: "રાષ્ટ્રપતિ માટે મતદાન કરવા નાગરિકોની ઉંમર કેટલી હોવી જોઈએ?",
    },
    options: [
      { en: "Eighteen (18) and older", ml: "പതിനെട്ട് (18) വയസ്സും അതിൽ കൂടുതലും", gu: "અઢાર (18) અને તેથી વધુ" },
      { en: "Twenty-one (21) and older", ml: "ഇരുപത്തിയൊന്ന് (21) വയസ്സും അതിൽ കൂടുതലും", gu: "એકવીસ (21) અને તેથી વધુ" },
      { en: "Sixteen (16) and older", ml: "പതിനാറ് (16) വയസ്സും അതിൽ കൂടുതലും", gu: "સોળ (16) અને તેથી વધુ" },
      { en: "Twenty-five (25) and older", ml: "ഇരുപത്തിയഞ്ച് (25) വയസ്സും അതിൽ കൂടുതലും", gu: "પચ્ચીસ (25) અને તેથી વધુ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Citizens have to be eighteen (18) and older to vote for President.",
      ml: "പ്രസിഡന്റിന് വേണ്ടി വോട്ട് ചെയ്യാൻ പൗരന്മാർക്ക് പതിനെട്ട് (18) വയസ്സോ അതിൽ കൂടുതലോ ആയിരിക്കണം.",
      gu: "રાષ્ટ્રપતિ માટે મતદાન કરવા નાગરિકોની ઉંમર અઢાર (18) અથવા તેથી વધુ હોવી જોઈએ.",
    },
  },
  {
    id: "r018",
    topic: "rights",
    question: {
      en: "When is the last day you can send in federal income tax forms?",
      ml: "ഫെഡറൽ ആദായ നികുതി ഫോമുകൾ അയയ്ക്കാനുള്ള അവസാന ദിവസം എപ്പോഴാണ്?",
      gu: "ફેડરલ આવકવેરાના ફોર્મ મોકલવાનો છેલ્લો દિવસ ક્યારે છે?",
    },
    options: [
      { en: "April 15", ml: "ഏപ്രിൽ 15", gu: "15 એપ્રિલ" },
      { en: "January 1", ml: "ജനുവരി 1", gu: "1 જાન્યુઆરી" },
      { en: "July 4", ml: "ജൂലൈ 4", gu: "4 જુલાઈ" },
      { en: "December 31", ml: "ഡിസംബർ 31", gu: "31 ડિસેમ્બર" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The last day to send in federal income tax forms is April 15.",
      ml: "ഫെഡറൽ ആദായ നികുതി ഫോമുകൾ അയയ്ക്കാനുള്ള അവസാന ദിവസം ഏപ്രിൽ 15 ആണ്.",
      gu: "ફેડરલ આવકવેરાના ફોર્મ મોકલવાનો છેલ્લો દિવસ 15 એપ્રિલ છે.",
    },
  },
  {
    id: "h047",
    topic: "history",
    question: {
      en: "What happened at the Constitutional Convention?",
      ml: "ഭരണഘടനാ കൺവെൻഷനിൽ എന്താണ് സംഭവിച്ചത്?",
      gu: "બંધારણીય સંમેલનમાં શું થયું?",
    },
    options: [
      { en: "The Constitution was written", ml: "ഭരണഘടന എഴുതപ്പെട്ടു", gu: "બંધારણ લખાયું" },
      { en: "The Declaration of Independence was signed", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം ഒപ്പിട്ടു", gu: "સ્વાધીનતાના ઘોષણાપત્ર પર હસ્તાક્ષર થયા" },
      { en: "The Revolutionary War began", ml: "വിപ്ലവ യുദ്ധം ആരംഭിച്ചു", gu: "ક્રાંતિકારી યુદ્ધ શરૂ થયું" },
      { en: "The Bill of Rights was approved", ml: "ബിൽ ഓഫ് റൈറ്റ്സ് അംഗീകരിച്ചു", gu: "બિલ ઑફ રાઇટ્સ મંજૂર થયું" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Constitution was written at the Constitutional Convention in 1787.",
      ml: "1787-ൽ ഭരണഘടനാ കൺവെൻഷനിൽ ഭരണഘടന എഴുതപ്പെട്ടു.",
      gu: "1787માં બંધારણીય સંમેલનમાં બંધારણ લખાયું.",
    },
  },
  {
    id: "h048",
    topic: "history",
    question: {
      en: "Name one problem that led to the Civil War.",
      ml: "ആഭ്യന്തര യുദ്ധത്തിലേക്ക് നയിച്ച ഒരു പ്രശ്നം പറയുക.",
      gu: "ગૃહયુદ્ધ તરફ દોરી ગયેલી એક સમસ્યાનું નામ આપો.",
    },
    options: [
      { en: "Slavery", ml: "അടിമത്തം", gu: "ગુલામી" },
      { en: "Taxation without representation", ml: "പ്രാതിനിധ്യമില്ലാത്ത നികുതി", gu: "પ્રતિનિધિત્વ વિના કરવેરો" },
      { en: "British invasion", ml: "ബ്രിട്ടീഷ് ആക്രമണം", gu: "બ્રિટિશ આક્રમણ" },
      { en: "The Great Depression", ml: "മഹാ മാന്ദ്യം", gu: "મહામંદી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Problems that led to the Civil War include slavery, economic reasons, and states' rights.",
      ml: "ആഭ്യന്തര യുദ്ധത്തിലേക്ക് നയിച്ച പ്രശ്നങ്ങളിൽ അടിമത്തം, സാമ്പത്തിക കാരണങ്ങൾ, സംസ്ഥാന അവകാശങ്ങൾ എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "ગૃહયુદ્ધ તરફ દોરી ગયેલી સમસ્યાઓમાં ગુલામી, આર્થિક કારણો અને રાજ્યોના અધિકારો શામેલ છે.",
    },
  },
  {
    id: "h049",
    topic: "history",
    question: {
      en: "Who was President during World War I?",
      ml: "ഒന്നാം ലോക മഹായുദ്ധ സമയത്ത് പ്രസിഡന്റ് ആരായിരുന്നു?",
      gu: "પ્રથમ વિશ્વયુદ્ધ દરમિયાન રાષ્ટ્રપતિ કોણ હતા?",
    },
    options: [
      { en: "Woodrow Wilson", ml: "വുഡ്രോ വിൽസൺ", gu: "વુડ્રો વિલ્સન" },
      { en: "Theodore Roosevelt", ml: "തിയഡോർ റൂസ്‌വെൽറ്റ്", gu: "થિયોડોર રૂઝવેલ્ટ" },
      { en: "Franklin Roosevelt", ml: "ഫ്രാങ്ക്ലിൻ റൂസ്‌വെൽറ്റ്", gu: "ફ્રેન્કલિન રૂઝવેલ્ટ" },
      { en: "Warren Harding", ml: "വാറൻ ഹാർഡിംഗ്", gu: "વૉરન હાર્ડિંગ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Woodrow Wilson was President during World War I.",
      ml: "ഒന്നാം ലോക മഹായുദ്ധ സമയത്ത് വുഡ്രോ വിൽസൺ ആയിരുന്നു പ്രസിഡന്റ്.",
      gu: "પ્રથમ વિશ્વયુદ્ધ દરમિયાન વુડ્રો વિલ્સન રાષ્ટ્રપતિ હતા.",
    },
  },
  {
    id: "h050",
    topic: "history",
    question: {
      en: "Who did the United States fight in World War II?",
      ml: "രണ്ടാം ലോക മഹായുദ്ധത്തിൽ അമേരിക്ക ആരോടാണ് യുദ്ധം ചെയ്തത്?",
      gu: "દ્વિતીય વિશ્વયુદ્ધમાં યુનાઇટેડ સ્ટેટ્સ કોની સામે લડ્યું?",
    },
    options: [
      { en: "Japan, Germany, and Italy", ml: "ജപ്പാൻ, ജർമ്മനി, ഇറ്റലി", gu: "જાપાન, જર્મની અને ઇટાલી" },
      { en: "China, Russia, and France", ml: "ചൈന, റഷ്യ, ഫ്രാൻസ്", gu: "ચીન, રશિયા અને ફ્રાન્સ" },
      { en: "Britain, Canada, and Australia", ml: "ബ്രിട്ടൺ, കാനഡ, ഓസ്ട്രേലിയ", gu: "બ્રિટન, કેનેડા અને ઑસ્ટ્રેલિયા" },
      { en: "Spain, Mexico, and Brazil", ml: "സ്പെയിൻ, മെക്സിക്കോ, ബ്രസീൽ", gu: "સ્પેન, મેક્સિકો અને બ્રાઝિલ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The United States fought Japan, Germany, and Italy in World War II.",
      ml: "രണ്ടാം ലോക മഹായുദ്ധത്തിൽ അമേരിക്ക ജപ്പാൻ, ജർമ്മനി, ഇറ്റലി എന്നിവരോട് യുദ്ധം ചെയ്തു.",
      gu: "દ્વિતીય વિશ્વયુદ્ધમાં યુનાઇટેડ સ્ટેટ્સ જાપાન, જર્મની અને ઇટાલી સામે લડ્યું.",
    },
  },
  {
    id: "s011",
    topic: "symbols",
    question: {
      en: "Name one of the two longest rivers in the United States.",
      ml: "അമേരിക്കയിലെ ഏറ്റവും നീളമുള്ള രണ്ട് നദികളിൽ ഒന്ന് പറയുക.",
      gu: "યુનાઇટેડ સ્ટેટ્સની બે સૌથી લાંબી નદીઓમાંથી એકનું નામ આપો.",
    },
    options: [
      { en: "Missouri River", ml: "മിസ്സൗറി നദി", gu: "મિઝૂરી નદી" },
      { en: "Colorado River", ml: "കൊളറാഡോ നദി", gu: "કોલોરાડો નદી" },
      { en: "Ohio River", ml: "ഒഹായോ നദി", gu: "ઓહાયો નદી" },
      { en: "Hudson River", ml: "ഹഡ്സൺ നദി", gu: "હડસન નદી" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The two longest rivers in the United States are the Missouri River and the Mississippi River.",
      ml: "അമേരിക്കയിലെ ഏറ്റവും നീളമുള്ള രണ്ട് നദികൾ മിസ്സൗറി നദിയും മിസ്സിസ്സിപ്പി നദിയുമാണ്.",
      gu: "યુનાઇટેડ સ્ટેટ્સની બે સૌથી લાંબી નદીઓ મિઝૂરી નદી અને મિસિસિપી નદી છે.",
    },
  },
  {
    id: "s012",
    topic: "symbols",
    question: {
      en: "What ocean is on the West Coast of the United States?",
      ml: "അമേരിക്കയുടെ പടിഞ്ഞാറൻ തീരത്ത് ഏത് സമുദ്രമാണ്?",
      gu: "યુનાઇટેડ સ્ટેટ્સના પશ્ચિમ કિનારે કયો મહાસાગર છે?",
    },
    options: [
      { en: "Pacific Ocean", ml: "പസഫിക് സമുദ്രം", gu: "પેસિફિક મહાસાગર" },
      { en: "Atlantic Ocean", ml: "അറ്റ്ലാന്റിക് സമുദ്രം", gu: "એટલાન્ટિક મહાસાગર" },
      { en: "Indian Ocean", ml: "ഇന്ത്യൻ മഹാസമുദ്രം", gu: "હિંદ મહાસાગર" },
      { en: "Arctic Ocean", ml: "ആർട്ടിക് സമുദ്രം", gu: "આર્કટિક મહાસાગર" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Pacific Ocean is on the West Coast of the United States.",
      ml: "അമേരിക്കയുടെ പടിഞ്ഞാറൻ തീരത്ത് പസഫിക് സമുദ്രമാണ്.",
      gu: "યુનાઇટેડ સ્ટેટ્સના પશ્ચિમ કિનારે પેસિફિક મહાસાગર છે.",
    },
  },
  {
    id: "s013",
    topic: "symbols",
    question: {
      en: "What ocean is on the East Coast of the United States?",
      ml: "അമേരിക്കയുടെ കിഴക്കൻ തീരത്ത് ഏത് സമുദ്രമാണ്?",
      gu: "યુનાઇટેડ સ્ટેટ્સના પૂર્વ કિનારે કયો મહાસાગર છે?",
    },
    options: [
      { en: "Atlantic Ocean", ml: "അറ്റ്ലാന്റിക് സമുദ്രം", gu: "એટલાન્ટિક મહાસાગર" },
      { en: "Pacific Ocean", ml: "പസഫിക് സമുദ്രം", gu: "પેસિફિક મહાસાગર" },
      { en: "Indian Ocean", ml: "ഇന്ത്യൻ മഹാസമുദ്രം", gu: "હિંદ મહાસાગર" },
      { en: "Southern Ocean", ml: "തെക്കൻ സമുദ്രം", gu: "દક્ષિણ મહાસાગર" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Atlantic Ocean is on the East Coast of the United States.",
      ml: "അമേരിക്കയുടെ കിഴക്കൻ തീരത്ത് അറ്റ്ലാന്റിക് സമുദ്രമാണ്.",
      gu: "યુનાઇટેડ સ્ટેટ્સના પૂર્વ કિનારે એટલાન્ટિક મહાસાગર છે.",
    },
  },
  {
    id: "s014",
    topic: "symbols",
    question: {
      en: "Name one U.S. territory.",
      ml: "ഒരു യു.എസ്. പ്രദേശം (territory) പറയുക.",
      gu: "એક યુ.એસ. પ્રદેશ (territory) નું નામ આપો.",
    },
    options: [
      { en: "Puerto Rico", ml: "പ്യൂർട്ടോ റിക്കോ", gu: "પ્યુઅર્ટો રિકો" },
      { en: "Canada", ml: "കാനഡ", gu: "કેનેડા" },
      { en: "Mexico", ml: "മെക്സിക്കോ", gu: "મેક્સિકો" },
      { en: "Cuba", ml: "ക്യൂബ", gu: "ક્યુબા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "U.S. territories include Puerto Rico, U.S. Virgin Islands, American Samoa, Northern Mariana Islands, and Guam.",
      ml: "യു.എസ്. പ്രദേശങ്ങളിൽ പ്യൂർട്ടോ റിക്കോ, യു.എസ്. വെർജിൻ ദ്വീപുകൾ, അമേരിക്കൻ സമോവ, നോർത്തേൺ മരിയാന ദ്വീപുകൾ, ഗ്വാം എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "યુ.એસ. પ્રદેશોમાં પ્યુઅર્ટો રિકો, યુ.એસ. વર્જિન ટાપુઓ, અમેરિકન સમોઆ, ઉત્તરી મરિયાના ટાપુઓ અને ગુઆમ શામેલ છે.",
    },
  },
  {
    id: "s015",
    topic: "symbols",
    question: {
      en: "Name one state that borders Canada.",
      ml: "കാനഡയുമായി അതിർത്തി പങ്കിടുന്ന ഒരു സംസ്ഥാനം പറയുക.",
      gu: "કેનેડા સાથે સરહદ ધરાવતા એક રાજ્યનું નામ આપો.",
    },
    options: [
      { en: "New York", ml: "ന്യൂയോർക്ക്", gu: "ન્યૂ યોર્ક" },
      { en: "Florida", ml: "ഫ്ലോറിഡ", gu: "ફ્લોરિડા" },
      { en: "Texas", ml: "ടെക്സസ്", gu: "ટેક્સાસ" },
      { en: "Georgia", ml: "ജോർജിയ", gu: "જ્યોર્જિયા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "States that border Canada include Maine, New Hampshire, Vermont, New York, Pennsylvania, Ohio, Michigan, Minnesota, North Dakota, Montana, Idaho, Washington, and Alaska.",
      ml: "കാനഡയുമായി അതിർത്തി പങ്കിടുന്ന സംസ്ഥാനങ്ങളിൽ മെയ്ൻ, ന്യൂ ഹാംഷയർ, വെർമോണ്ട്, ന്യൂയോർക്ക്, പെൻസിൽവേനിയ, ഒഹായോ, മിഷിഗൻ, മിനസോട്ട, നോർത്ത് ഡക്കോട്ട, മൊണ്ടാന, ഐഡഹോ, വാഷിംഗ്ടൺ, അലാസ്ക എന്നിവ ഉൾപ്പെടുന്നു.",
      gu: "કેનેડા સાથે સરહદ ધરાવતા રાજ્યોમાં મેઇન, ન્યૂ હેમ્પશાયર, વર્મોન્ટ, ન્યૂ યોર્ક, પેન્સિલવેનિયા, ઓહાયો, મિશિગન, મિનેસોટા, નોર્થ ડાકોટા, મોન્ટાના, આઇડાહો, વૉશિંગ્ટન અને અલાસ્કા શામેલ છે.",
    },
  },
  {
    id: "s016",
    topic: "symbols",
    question: {
      en: "Name one state that borders Mexico.",
      ml: "മെക്സിക്കോയുമായി അതിർത്തി പങ്കിടുന്ന ഒരു സംസ്ഥാനം പറയുക.",
      gu: "મેક્સિકો સાથે સરહદ ધરાવતા એક રાજ્યનું નામ આપો.",
    },
    options: [
      { en: "Arizona", ml: "ആരിസോണ", gu: "ઍરિઝોના" },
      { en: "Florida", ml: "ഫ്ലോറിഡ", gu: "ફ્લોરિડા" },
      { en: "Oregon", ml: "ഒറിഗോൺ", gu: "ઓરેગોન" },
      { en: "Nevada", ml: "നെവാഡ", gu: "નેવાડા" },
    ],
    correctIndex: 0,
    explanation: {
      en: "States that border Mexico are California, Arizona, New Mexico, and Texas.",
      ml: "മെക്സിക്കോയുമായി അതിർത്തി പങ്കിടുന്ന സംസ്ഥാനങ്ങൾ കാലിഫോർണിയ, ആരിസോണ, ന്യൂ മെക്സിക്കോ, ടെക്സസ് എന്നിവയാണ്.",
      gu: "મેક્સિકો સાથે સરહદ ધરાવતા રાજ્યો કેલિફોર્નિયા, ઍરિઝોના, ન્યૂ મેક્સિકો અને ટેક્સાસ છે.",
    },
  },
  {
    id: "s017",
    topic: "symbols",
    question: {
      en: "When do we celebrate Independence Day?",
      ml: "നമ്മൾ സ്വാതന്ത്ര്യ ദിനം എപ്പോഴാണ് ആഘോഷിക്കുന്നത്?",
      gu: "આપણે સ્વાધીનતા દિવસ ક્યારે ઉજવીએ છીએ?",
    },
    options: [
      { en: "July 4", ml: "ജൂലൈ 4", gu: "4 જુલાઈ" },
      { en: "January 1", ml: "ജനുവരി 1", gu: "1 જાન્યુઆરી" },
      { en: "November 11", ml: "നവംബർ 11", gu: "11 નવેમ્બર" },
      { en: "December 25", ml: "ഡിസംബർ 25", gu: "25 ડિસેમ્બર" },
    ],
    correctIndex: 0,
    explanation: {
      en: "We celebrate Independence Day on July 4.",
      ml: "നമ്മൾ ജൂലൈ 4-ന് സ്വാതന്ത്ര്യ ദിനം ആഘോഷിക്കുന്നു.",
      gu: "આપણે 4 જુલાઈએ સ્વાધીનતા દિવસ ઉજવીએ છીએ.",
    },
  },
];
