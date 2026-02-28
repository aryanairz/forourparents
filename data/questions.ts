export type Lang = "en" | "ml";

export type Topic = "government" | "rights" | "history" | "symbols";

export interface BilingualText {
  en: string;
  ml: string;
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
  government: { en: "Government", ml: "ഗവൺമെന്റ്" },
  rights: {
    en: "Rights & Responsibilities",
    ml: "അവകാശങ്ങളും ഉത്തരവാദിത്തങ്ങളും",
  },
  history: { en: "American History", ml: "അമേരിക്കൻ ചരിത്രം" },
  symbols: { en: "Symbols & Holidays", ml: "ചിഹ്നങ്ങളും അവധി ദിനങ്ങളും" },
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
    },
    options: [
      { en: "(U.S.) Constitution", ml: "യു.എസ്. ഭരണഘടന" },
      { en: "Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം" },
      { en: "Bill of Rights", ml: "അവകാശ ബിൽ" },
      { en: "Federal Law", ml: "ഫെഡറൽ നിയമം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. Constitution is the supreme law of the land.",
      ml: "യു.എസ്. ഭരണഘടനയാണ് രാജ്യത്തെ പരമോന്നത നിയമം.",
    },
  },
  {
    id: "g002",
    topic: "government",
    question: {
      en: "What is the form of government of the United States?",
      ml: "അമേരിക്കയുടെ ഭരണ രൂപം ഏതാണ്?",
    },
    options: [
      { en: "Republic", ml: "റിപ്പബ്ലിക്" },
      { en: "Monarchy", ml: "രാജവാഴ്ച" },
      { en: "Dictatorship", ml: "ഏകാധിപത്യം" },
      { en: "Direct Democracy", ml: "നേരിട്ടുള്ള ജനാധിപത്യം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The United States is a constitution-based federal republic and representative democracy.",
      ml: "അമേരിക്ക ഒരു ഭരണഘടനാധിഷ്ഠിത ഫെഡറൽ റിപ്പബ്ലിക്കും പ്രാതിനിധ്യ ജനാധിപത്യവുമാണ്.",
    },
  },
  {
    id: "g003",
    topic: "government",
    question: {
      en: "How many amendments does the U.S. Constitution have?",
      ml: "യു.എസ്. ഭരണഘടനയ്ക്ക് എത്ര ഭേദഗതികൾ ഉണ്ട്?",
    },
    options: [
      { en: "Twenty-seven (27)", ml: "ഇരുപത്തിയേഴ് (27)" },
      { en: "Ten (10)", ml: "പത്ത് (10)" },
      { en: "Twenty-five (25)", ml: "ഇരുപത്തിയഞ്ച് (25)" },
      { en: "Thirty-three (33)", ml: "മുപ്പത്തിമൂന്ന് (33)" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. Constitution has 27 amendments.",
      ml: "യു.എസ്. ഭരണഘടനയ്ക്ക് 27 ഭേദഗതികൾ ഉണ്ട്.",
    },
  },
  {
    id: "g004",
    topic: "government",
    question: {
      en: "What is the economic system of the United States?",
      ml: "അമേരിക്കയുടെ സാമ്പത്തിക വ്യവസ്ഥ ഏതാണ്?",
    },
    options: [
      {
        en: "Capitalism / Free market economy",
        ml: "മുതലാളിത്തം / സ്വതന്ത്ര വിപണി സമ്പദ്‌വ്യവസ്ഥ",
      },
      { en: "Communism", ml: "കമ്മ്യൂണിസം" },
      { en: "Socialism", ml: "സോഷ്യലിസം" },
      { en: "Feudalism", ml: "ഫ്യൂഡലിസം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The United States has a capitalist (free market) economy.",
      ml: "അമേരിക്കയ്ക്ക് മുതലാളിത്ത (സ്വതന്ത്ര വിപണി) സമ്പദ്‌വ്യവസ്ഥയാണ്.",
    },
  },
  {
    id: "g005",
    topic: "government",
    question: {
      en: "What are the three branches of government?",
      ml: "ഗവൺമെന്റിന്റെ മൂന്ന് ശാഖകൾ ഏതൊക്കെ?",
    },
    options: [
      {
        en: "Legislative, Executive, and Judicial",
        ml: "നിയമനിർമ്മാണ, എക്സിക്യൂട്ടീവ്, ജുഡീഷ്യൽ",
      },
      {
        en: "Executive, Military, and Judicial",
        ml: "എക്സിക്യൂട്ടീവ്, സൈനിക, ജുഡീഷ്യൽ",
      },
      { en: "Senate, House, and President", ml: "സെനറ്റ്, ഹൗസ്, പ്രസിഡന്റ്" },
      { en: "Federal, State, and Local", ml: "ഫെഡറൽ, സംസ്ഥാന, പ്രാദേശിക" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The three branches are Legislative (Congress), Executive (President), and Judicial (the Courts).",
      ml: "മൂന്ന് ശാഖകൾ: നിയമനിർമ്മാണ (കോൺഗ്രസ്), എക്സിക്യൂട്ടീവ് (പ്രസിഡന്റ്), ജുഡീഷ്യൽ (കോടതികൾ).",
    },
  },
  {
    id: "g006",
    topic: "government",
    question: {
      en: "How many U.S. senators are there?",
      ml: "എത്ര യു.എസ്. സെനറ്റർമാർ ഉണ്ട്?",
    },
    options: [
      { en: "One hundred (100)", ml: "നൂറ് (100)" },
      { en: "Fifty (50)", ml: "അമ്പത് (50)" },
      {
        en: "Four hundred thirty-five (435)",
        ml: "നാനൂറ്റി മുപ്പത്തിയഞ്ച് (435)",
      },
      { en: "Fifty-two (52)", ml: "അമ്പത്തിരണ്ട് (52)" },
    ],
    correctIndex: 0,
    explanation: {
      en: "There are 100 U.S. senators — 2 from each of the 50 states.",
      ml: "100 യു.എസ്. സെനറ്റർമാർ ഉണ്ട് — 50 സംസ്ഥാനങ്ങളിൽ നിന്ന് ഓരോന്നിൽ നിന്നും 2 പേർ.",
    },
  },
  {
    id: "g007",
    topic: "government",
    question: {
      en: "How long is a term for a U.S. senator?",
      ml: "ഒരു യു.എസ്. സെനറ്ററുടെ കാലാവധി എത്രയാണ്?",
    },
    options: [
      { en: "Six (6) years", ml: "ആറ് (6) വർഷം" },
      { en: "Two (2) years", ml: "രണ്ട് (2) വർഷം" },
      { en: "Four (4) years", ml: "നാല് (4) വർഷം" },
      { en: "Eight (8) years", ml: "എട്ട് (8) വർഷം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "A U.S. senator serves a 6-year term.",
      ml: "ഒരു യു.എസ്. സെനറ്ററുടെ കാലാവധി 6 വർഷമാണ്.",
    },
  },
  {
    id: "g008",
    topic: "government",
    question: {
      en: "How many voting members are in the House of Representatives?",
      ml: "ജനപ്രതിനിധി സഭയിൽ എത്ര വോട്ടിംഗ് അംഗങ്ങൾ ഉണ്ട്?",
    },
    options: [
      {
        en: "Four hundred thirty-five (435)",
        ml: "നാനൂറ്റി മുപ്പത്തിയഞ്ച് (435)",
      },
      { en: "One hundred (100)", ml: "നൂറ് (100)" },
      {
        en: "Five hundred thirty-five (535)",
        ml: "അഞ്ഞൂറ്റി മുപ്പത്തിയഞ്ച് (535)",
      },
      { en: "Three hundred fifty (350)", ml: "മുന്നൂറ്റിയമ്പത് (350)" },
    ],
    correctIndex: 0,
    explanation: {
      en: "There are 435 voting members in the House of Representatives.",
      ml: "ജനപ്രതിനിധി സഭയിൽ 435 വോട്ടിംഗ് അംഗങ്ങൾ ഉണ്ട്.",
    },
  },
  {
    id: "g009",
    topic: "government",
    question: {
      en: "The President of the United States is elected for how many years?",
      ml: "അമേരിക്കൻ പ്രസിഡന്റിനെ എത്ര വർഷത്തേക്കാണ് തിരഞ്ഞെടുക്കുന്നത്?",
    },
    options: [
      { en: "Four (4) years", ml: "നാല് (4) വർഷം" },
      { en: "Two (2) years", ml: "രണ്ട് (2) വർഷം" },
      { en: "Six (6) years", ml: "ആറ് (6) വർഷം" },
      { en: "Eight (8) years", ml: "എട്ട് (8) വർഷം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The President is elected for a 4-year term.",
      ml: "പ്രസിഡന്റിനെ 4 വർഷത്തേക്കാണ് തിരഞ്ഞെടുക്കുന്നത്.",
    },
  },
  {
    id: "g010",
    topic: "government",
    question: {
      en: "What is the name of the President of the United States now?",
      ml: "ഇപ്പോൾ അമേരിക്കയുടെ പ്രസിഡന്റ് ആരാണ്?",
    },
    options: [
      { en: "Donald Trump", ml: "ഡൊണാൾഡ് ട്രംപ്" },
      { en: "Joe Biden", ml: "ജോ ബൈഡൻ" },
      { en: "Barack Obama", ml: "ബരാക് ഒബാമ" },
      { en: "George Bush", ml: "ജോർജ് ബുഷ്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Donald Trump is the current President of the United States.",
      ml: "ഡൊണാൾഡ് ട്രംപ് ആണ് ഇപ്പോഴത്തെ അമേരിക്കൻ പ്രസിഡന്റ്.",
    },
  },
  {
    id: "g011",
    topic: "government",
    question: {
      en: "What is the name of the Vice President of the United States now?",
      ml: "ഇപ്പോൾ അമേരിക്കയുടെ വൈസ് പ്രസിഡന്റ് ആരാണ്?",
    },
    options: [
      { en: "JD Vance", ml: "ജെ.ഡി. വാൻസ്" },
      { en: "Kamala Harris", ml: "കമല ഹാരിസ്" },
      { en: "Mike Pence", ml: "മൈക്ക് പെൻസ്" },
      { en: "Joe Biden", ml: "ജോ ബൈഡൻ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "JD Vance is the current Vice President of the United States.",
      ml: "ജെ.ഡി. വാൻസ് ആണ് ഇപ്പോഴത്തെ അമേരിക്കൻ വൈസ് പ്രസിഡന്റ്.",
    },
  },
  {
    id: "g012",
    topic: "government",
    question: {
      en: "What is the highest court in the United States?",
      ml: "അമേരിക്കയിലെ ഏറ്റവും ഉയർന്ന കോടതി ഏതാണ്?",
    },
    options: [
      { en: "Supreme Court", ml: "സുപ്രീം കോടതി" },
      { en: "Federal Court", ml: "ഫെഡറൽ കോടതി" },
      { en: "District Court", ml: "ജില്ലാ കോടതി" },
      { en: "Appeals Court", ml: "അപ്പീൽ കോടതി" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Supreme Court is the highest court in the United States.",
      ml: "സുപ്രീം കോടതിയാണ് അമേരിക്കയിലെ ഏറ്റവും ഉയർന്ന കോടതി.",
    },
  },
  {
    id: "g013",
    topic: "government",
    question: {
      en: "How many seats are on the Supreme Court?",
      ml: "സുപ്രീം കോടതിയിൽ എത്ര സീറ്റുകൾ ഉണ്ട്?",
    },
    options: [
      { en: "Nine (9)", ml: "ഒമ്പത് (9)" },
      { en: "Seven (7)", ml: "ഏഴ് (7)" },
      { en: "Eleven (11)", ml: "പതിനൊന്ന് (11)" },
      { en: "Twelve (12)", ml: "പന്ത്രണ്ട് (12)" },
    ],
    correctIndex: 0,
    explanation: {
      en: "There are 9 seats on the Supreme Court.",
      ml: "സുപ്രീം കോടതിയിൽ 9 സീറ്റുകൾ ഉണ്ട്.",
    },
  },
  {
    id: "g014",
    topic: "government",
    question: {
      en: "Who is Commander in Chief of the U.S. military?",
      ml: "യു.എസ്. സൈന്യത്തിന്റെ കമാൻഡർ ഇൻ ചീഫ് ആരാണ്?",
    },
    options: [
      { en: "The President", ml: "പ്രസിഡന്റ്" },
      { en: "Secretary of Defense", ml: "പ്രതിരോധ സെക്രട്ടറി" },
      { en: "A General", ml: "ഒരു ജനറൽ" },
      { en: "The Vice President", ml: "വൈസ് പ്രസിഡന്റ്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The President is the Commander in Chief of the U.S. military.",
      ml: "പ്രസിഡന്റാണ് യു.എസ്. സൈന്യത്തിന്റെ കമാൻഡർ ഇൻ ചീഫ്.",
    },
  },
  {
    id: "g015",
    topic: "government",
    question: {
      en: "If the president can no longer serve, who becomes president?",
      ml: "പ്രസിഡന്റിന് ഇനി സേവനം ചെയ്യാൻ കഴിയില്ലെങ്കിൽ, ആരാണ് പ്രസിഡന്റ് ആകുന്നത്?",
    },
    options: [
      { en: "The Vice President", ml: "വൈസ് പ്രസിഡന്റ്" },
      { en: "Speaker of the House", ml: "ഹൗസ് സ്പീക്കർ" },
      { en: "Secretary of State", ml: "സ്റ്റേറ്റ് സെക്രട്ടറി" },
      { en: "Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "If the president can no longer serve, the Vice President becomes president.",
      ml: "പ്രസിഡന്റിന് സേവനം ചെയ്യാൻ കഴിയില്ലെങ്കിൽ, വൈസ് പ്രസിഡന്റ് പ്രസിഡന്റ് ആകും.",
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
    },
    options: [
      {
        en: "The basic rights of Americans",
        ml: "അമേരിക്കക്കാരുടെ അടിസ്ഥാന അവകാശങ്ങൾ",
      },
      { en: "The rights of the President", ml: "പ്രസിഡന്റിന്റെ അവകാശങ്ങൾ" },
      { en: "Powers of Congress", ml: "കോൺഗ്രസിന്റെ അധികാരങ്ങൾ" },
      { en: "State boundaries", ml: "സംസ്ഥാന അതിർത്തികൾ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Bill of Rights protects the basic rights of Americans.",
      ml: "അവകാശ ബിൽ അമേരിക്കക്കാരുടെ അടിസ്ഥാന അവകാശങ്ങളെ സംരക്ഷിക്കുന്നു.",
    },
  },
  {
    id: "r002",
    topic: "rights",
    question: {
      en: "Who can vote in federal elections, run for federal office, and serve on a jury?",
      ml: "ഫെഡറൽ തിരഞ്ഞെടുപ്പുകളിൽ വോട്ട് ചെയ്യാനും ഫെഡറൽ ഓഫീസിന് മത്സരിക്കാനും ജൂറിയിൽ സേവിക്കാനും ആർക്ക് കഴിയും?",
    },
    options: [
      { en: "U.S. citizens", ml: "യു.എസ്. പൗരന്മാർ" },
      {
        en: "Anyone living in the U.S.",
        ml: "അമേരിക്കയിൽ താമസിക്കുന്ന ആർക്കും",
      },
      { en: "Only men", ml: "പുരുഷന്മാർ മാത്രം" },
      { en: "Only taxpayers", ml: "നികുതിദായകർ മാത്രം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Only U.S. citizens can vote in federal elections, run for federal office, and serve on a jury.",
      ml: "യു.എസ്. പൗരന്മാർക്ക് മാത്രമേ ഫെഡറൽ തിരഞ്ഞെടുപ്പുകളിൽ വോട്ട് ചെയ്യാനും ഫെഡറൽ ഓഫീസിന് മത്സരിക്കാനും ജൂറിയിൽ സേവിക്കാനും കഴിയൂ.",
    },
  },
  {
    id: "r003",
    topic: "rights",
    question: {
      en: "What do we show loyalty to when we say the Pledge of Allegiance?",
      ml: "പ്രതിജ്ഞ ചൊല്ലുമ്പോൾ നമ്മൾ ആരോട് / എന്തിനോട് വിശ്വസ്തത കാണിക്കുന്നു?",
    },
    options: [
      { en: "The United States and the flag", ml: "അമേരിക്കയോടും പതാകയോടും" },
      { en: "The President", ml: "പ്രസിഡന്റിനോട്" },
      { en: "The military", ml: "സൈന്യത്തോട്" },
      { en: "The Constitution only", ml: "ഭരണഘടനയോട് മാത്രം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "We show loyalty to the United States and its flag when we say the Pledge of Allegiance.",
      ml: "പ്രതിജ്ഞ ചൊല്ലുമ്പോൾ നമ്മൾ അമേരിക്കയോടും അതിന്റെ പതാകയോടും വിശ്വസ്തത കാണിക്കുന്നു.",
    },
  },
  {
    id: "r004",
    topic: "rights",
    question: {
      en: "How can people become U.S. citizens?",
      ml: "ആളുകൾക്ക് എങ്ങനെ യു.എസ്. പൗരന്മാരാകാം?",
    },
    options: [
      {
        en: "Be born in the U.S. or through naturalization",
        ml: "അമേരിക്കയിൽ ജനിക്കുക അല്ലെങ്കിൽ പൗരത്വ നേടൽ പ്രക്രിയയിലൂടെ",
      },
      {
        en: "Only by being born in the U.S.",
        ml: "അമേരിക്കയിൽ ജനിച്ചാൽ മാത്രം",
      },
      {
        en: "Only by serving in the military",
        ml: "സൈന്യത്തിൽ സേവനം ചെയ്താൽ മാത്രം",
      },
      { en: "By paying taxes for 5 years", ml: "5 വർഷം നികുതി അടച്ചാൽ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "People can become U.S. citizens by being born in the U.S., through naturalization, or by deriving citizenship under law.",
      ml: "അമേരിക്കയിൽ ജനിച്ചോ, പൗരത്വ നേടൽ പ്രക്രിയയിലൂടെയോ, നിയമപ്രകാരം പൗരത്വം നേടിയോ ആളുകൾക്ക് യു.എസ്. പൗരന്മാരാകാം.",
    },
  },
  {
    id: "r005",
    topic: "rights",
    question: {
      en: "Why is it important to pay federal taxes?",
      ml: "ഫെഡറൽ നികുതി അടയ്ക്കുന്നത് എന്തുകൊണ്ട് പ്രധാനമാണ്?",
    },
    options: [
      {
        en: "Required by law; funds the federal government",
        ml: "നിയമപ്രകാരം ആവശ്യമാണ്; ഫെഡറൽ ഗവൺമെന്റിന് ഫണ്ട് നൽകുന്നു",
      },
      { en: "It is optional for citizens", ml: "പൗരന്മാർക്ക് ഇത് ഐച്ഛികമാണ്" },
      { en: "Only rich people need to pay", ml: "സമ്പന്നർ മാത്രം അടയ്ക്കണം" },
      { en: "To fund the military only", ml: "സൈന്യത്തിന് മാത്രം ഫണ്ട് നൽകാൻ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Paying federal taxes is required by law (16th Amendment) and funds the federal government. It is a civic duty.",
      ml: "ഫെഡറൽ നികുതി അടയ്ക്കുന്നത് നിയമപ്രകാരം (16-ാം ഭേദഗതി) ആവശ്യമാണ്, ഇത് ഫെഡറൽ ഗവൺമെന്റിന് ഫണ്ട് നൽകുന്നു. ഇത് ഒരു പൗര കടമയാണ്.",
    },
  },
  {
    id: "r006",
    topic: "rights",
    question: {
      en: "What are three rights of everyone living in the United States?",
      ml: "അമേരിക്കയിൽ താമസിക്കുന്ന എല്ലാവരുടെയും മൂന്ന് അവകാശങ്ങൾ എന്തൊക്കെ?",
    },
    options: [
      {
        en: "Freedom of speech, religion, and assembly",
        ml: "സംസാര സ്വാതന്ത്ര്യം, മത സ്വാതന്ത്ര്യം, സമ്മേളന സ്വാതന്ത്ര്യം",
      },
      {
        en: "Free housing, food, and healthcare",
        ml: "സൗജന്യ പാർപ്പിടം, ഭക്ഷണം, ആരോഗ്യ പരിരക്ഷ",
      },
      {
        en: "Right to drive, travel, and work",
        ml: "ഡ്രൈവ് ചെയ്യാനും യാത്ര ചെയ്യാനും ജോലി ചെയ്യാനുമുള്ള അവകാശം",
      },
      {
        en: "Right to vote, own land, and bear arms only",
        ml: "വോട്ട് ചെയ്യാനും ഭൂമി സ്വന്തമാക്കാനും ആയുധം വഹിക്കാനും മാത്രമുള്ള അവകാശം",
      },
    ],
    correctIndex: 0,
    explanation: {
      en: "Everyone living in the United States has freedom of expression, speech, assembly, religion, the right to petition the government, and bear arms.",
      ml: "അമേരിക്കയിൽ താമസിക്കുന്ന എല്ലാവർക്കും ആവിഷ്കാര സ്വാതന്ത്ര്യം, സംസാര സ്വാതന്ത്ര്യം, സമ്മേളന സ്വാതന്ത്ര്യം, മത സ്വാതന്ത്ര്യം, ഗവൺമെന്റിനോട് ഹർജി നൽകാനുള്ള അവകാശം, ആയുധം വഹിക്കാനുള്ള അവകാശം എന്നിവ ഉണ്ട്.",
    },
  },
  {
    id: "r007",
    topic: "rights",
    question: {
      en: "Name two promises new citizens make in the Oath of Allegiance.",
      ml: "വിശ്വസ്തത പ്രതിജ്ഞയിൽ പുതിയ പൗരന്മാർ നൽകുന്ന രണ്ട് വാഗ്ദാനങ്ങൾ പറയുക.",
    },
    options: [
      {
        en: "Defend the Constitution and obey U.S. laws",
        ml: "ഭരണഘടനയെ സംരക്ഷിക്കുക, യു.എസ്. നിയമങ്ങൾ അനുസരിക്കുക",
      },
      {
        en: "Pay taxes and serve on a jury",
        ml: "നികുതി അടയ്ക്കുക, ജൂറിയിൽ സേവിക്കുക",
      },
      {
        en: "Learn English and pass a driving test",
        ml: "ഇംഗ്ലീഷ് പഠിക്കുക, ഡ്രൈവിംഗ് ടെസ്റ്റ് പാസ്സാകുക",
      },
      { en: "Buy a house and get a job", ml: "ഒരു വീട് വാങ്ങുക, ജോലി നേടുക" },
    ],
    correctIndex: 0,
    explanation: {
      en: "New citizens promise to give up loyalty to other countries, defend the Constitution, obey U.S. laws, serve in the military if needed, and be loyal to the United States.",
      ml: "പുതിയ പൗരന്മാർ മറ്റ് രാജ്യങ്ങളോടുള്ള വിശ്വസ്തത ഉപേക്ഷിക്കാനും, ഭരണഘടനയെ സംരക്ഷിക്കാനും, യു.എസ്. നിയമങ്ങൾ അനുസരിക്കാനും, ആവശ്യമെങ്കിൽ സൈന്യത്തിൽ സേവിക്കാനും വാഗ്ദാനം ചെയ്യുന്നു.",
    },
  },
  {
    id: "r008",
    topic: "rights",
    question: {
      en: "Why must men aged 18–25 register for Selective Service?",
      ml: "18-25 വയസ്സുള്ള പുരുഷന്മാർ സെലക്ടീവ് സർവീസിന് രജിസ്റ്റർ ചെയ്യേണ്ടത് എന്തുകൊണ്ട്?",
    },
    options: [
      {
        en: "Required by law and civic duty",
        ml: "നിയമപ്രകാരം ആവശ്യമാണ്, പൗര കടമയാണ്",
      },
      { en: "To get a driver's license", ml: "ഡ്രൈവിംഗ് ലൈസൻസ് ലഭിക്കാൻ" },
      { en: "To vote in elections", ml: "തിരഞ്ഞെടുപ്പുകളിൽ വോട്ട് ചെയ്യാൻ" },
      { en: "It is optional", ml: "ഇത് ഐച്ഛികമാണ്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Registering for Selective Service is required by law, is a civic duty, and makes the draft fair if one is needed.",
      ml: "സെലക്ടീവ് സർവീസിൽ രജിസ്റ്റർ ചെയ്യുന്നത് നിയമപ്രകാരം ആവശ്യമാണ്, ഒരു പൗര കടമയാണ്, ആവശ്യമെങ്കിൽ നിർബന്ധ സൈനിക സേവനം ന്യായമാക്കുന്നു.",
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
    },
    options: [
      { en: "Thomas Jefferson", ml: "തോമസ് ജെഫേഴ്സൺ" },
      { en: "George Washington", ml: "ജോർജ് വാഷിംഗ്ടൺ" },
      { en: "Benjamin Franklin", ml: "ബെഞ്ചമിൻ ഫ്രാങ്ക്ലിൻ" },
      { en: "John Adams", ml: "ജോൺ ആഡംസ്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Thomas Jefferson wrote the Declaration of Independence.",
      ml: "തോമസ് ജെഫേഴ്സൺ ആണ് സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതിയത്.",
    },
  },
  {
    id: "h002",
    topic: "history",
    question: {
      en: "When was the Declaration of Independence adopted?",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എപ്പോൾ അംഗീകരിച്ചു?",
    },
    options: [
      { en: "July 4, 1776", ml: "1776 ജൂലൈ 4" },
      { en: "July 4, 1789", ml: "1789 ജൂലൈ 4" },
      { en: "July 4, 1800", ml: "1800 ജൂലൈ 4" },
      { en: "March 4, 1776", ml: "1776 മാർച്ച് 4" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Declaration of Independence was adopted on July 4, 1776.",
      ml: "1776 ജൂലൈ 4-ന് സ്വാതന്ത്ര്യ പ്രഖ്യാപനം അംഗീകരിച്ചു.",
    },
  },
  {
    id: "h003",
    topic: "history",
    question: {
      en: "What war was fought for independence from Britain?",
      ml: "ബ്രിട്ടനിൽ നിന്നുള്ള സ്വാതന്ത്ര്യത്തിനായി ഏത് യുദ്ധമാണ് നടന്നത്?",
    },
    options: [
      { en: "American Revolutionary War", ml: "അമേരിക്കൻ വിപ്ലവ യുദ്ധം" },
      { en: "Civil War", ml: "ആഭ്യന്തര യുദ്ധം" },
      { en: "War of 1812", ml: "1812-ലെ യുദ്ധം" },
      { en: "World War I", ml: "ഒന്നാം ലോക മഹായുദ്ധം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The American Revolutionary War was fought for independence from Britain.",
      ml: "ബ്രിട്ടനിൽ നിന്നുള്ള സ്വാതന്ത്ര്യത്തിനായി അമേരിക്കൻ വിപ്ലവ യുദ്ധം നടന്നു.",
    },
  },
  {
    id: "h004",
    topic: "history",
    question: {
      en: "What document was written in 1787?",
      ml: "1787-ൽ എഴുതിയ രേഖ ഏതാണ്?",
    },
    options: [
      { en: "U.S. Constitution", ml: "യു.എസ്. ഭരണഘടന" },
      { en: "Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം" },
      { en: "Bill of Rights", ml: "അവകാശ ബിൽ" },
      { en: "Articles of Confederation", ml: "കോൺഫെഡറേഷന്റെ ആർട്ടിക്കിളുകൾ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. Constitution was written in 1787.",
      ml: "1787-ൽ യു.എസ്. ഭരണഘടന എഴുതി.",
    },
  },
  {
    id: "h005",
    topic: "history",
    question: {
      en: "Who lived in America before Europeans arrived?",
      ml: "യൂറോപ്യന്മാർ എത്തുന്നതിന് മുമ്പ് അമേരിക്കയിൽ ആരാണ് ജീവിച്ചിരുന്നത്?",
    },
    options: [
      {
        en: "Native Americans / American Indians",
        ml: "നേറ്റീവ് അമേരിക്കക്കാർ / അമേരിക്കൻ ഇന്ത്യക്കാർ",
      },
      { en: "British settlers", ml: "ബ്രിട്ടീഷ് കുടിയേറ്റക്കാർ" },
      { en: "Spanish explorers", ml: "സ്പാനിഷ് പര്യവേക്ഷകർ" },
      { en: "French colonists", ml: "ഫ്രഞ്ച് കോളനിവാസികൾ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Native Americans (American Indians) lived in America before Europeans arrived.",
      ml: "യൂറോപ്യന്മാർ എത്തുന്നതിന് മുമ്പ് നേറ്റീവ് അമേരിക്കക്കാർ (അമേരിക്കൻ ഇന്ത്യക്കാർ) അമേരിക്കയിൽ ജീവിച്ചിരുന്നു.",
    },
  },
  {
    id: "h006",
    topic: "history",
    question: {
      en: "What territory was bought from France in 1803?",
      ml: "1803-ൽ ഫ്രാൻസിൽ നിന്ന് വാങ്ങിയ പ്രദേശം ഏതാണ്?",
    },
    options: [
      { en: "Louisiana Territory", ml: "ലൂസിയാന പ്രദേശം" },
      { en: "Alaska", ml: "അലാസ്ക" },
      { en: "Texas", ml: "ടെക്സസ്" },
      { en: "Florida", ml: "ഫ്ലോറിഡ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Louisiana Territory was purchased from France in 1803.",
      ml: "1803-ൽ ഫ്രാൻസിൽ നിന്ന് ലൂസിയാന പ്രദേശം വാങ്ങി.",
    },
  },
  {
    id: "h007",
    topic: "history",
    question: {
      en: "What was the war between the North and the South?",
      ml: "വടക്കും തെക്കും തമ്മിലുള്ള യുദ്ധം ഏതായിരുന്നു?",
    },
    options: [
      { en: "Civil War", ml: "ആഭ്യന്തര യുദ്ധം" },
      { en: "Revolutionary War", ml: "വിപ്ലവ യുദ്ധം" },
      { en: "War of 1812", ml: "1812-ലെ യുദ്ധം" },
      { en: "World War I", ml: "ഒന്നാം ലോക മഹായുദ്ധം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Civil War was the war between the North and the South.",
      ml: "ആഭ്യന്തര യുദ്ധമായിരുന്നു വടക്കും തെക്കും തമ്മിലുള്ള യുദ്ധം.",
    },
  },
  {
    id: "h008",
    topic: "history",
    question: {
      en: "What did the Emancipation Proclamation do?",
      ml: "വിമോചന പ്രഖ്യാപനം എന്താണ് ചെയ്തത്?",
    },
    options: [
      {
        en: "Freed slaves in Confederate states",
        ml: "കോൺഫെഡറേറ്റ് സംസ്ഥാനങ്ങളിലെ അടിമകളെ മോചിപ്പിച്ചു",
      },
      { en: "Ended the Civil War", ml: "ആഭ്യന്തര യുദ്ധം അവസാനിപ്പിച്ചു" },
      { en: "Created the Constitution", ml: "ഭരണഘടന സൃഷ്ടിച്ചു" },
      { en: "Declared independence", ml: "സ്വാതന്ത്ര്യം പ്രഖ്യാപിച്ചു" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Emancipation Proclamation freed slaves in the Confederate states during the Civil War.",
      ml: "ആഭ്യന്തര യുദ്ധ സമയത്ത് കോൺഫെഡറേറ്റ് സംസ്ഥാനങ്ങളിലെ അടിമകളെ വിമോചന പ്രഖ്യാപനം മോചിപ്പിച്ചു.",
    },
  },
  {
    id: "h009",
    topic: "history",
    question: {
      en: "Who was President during the Great Depression and World War II?",
      ml: "മഹാ മാന്ദ്യത്തിന്റെയും രണ്ടാം ലോക മഹായുദ്ധത്തിന്റെയും സമയത്ത് പ്രസിഡന്റ് ആരായിരുന്നു?",
    },
    options: [
      { en: "Franklin Roosevelt", ml: "ഫ്രാങ്ക്ലിൻ റൂസ്‌വെൽറ്റ്" },
      { en: "Harry Truman", ml: "ഹാരി ട്രൂമാൻ" },
      { en: "Herbert Hoover", ml: "ഹെർബർട്ട് ഹൂവർ" },
      { en: "Dwight Eisenhower", ml: "ഡ്വൈറ്റ് ഐസൻഹോവർ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Franklin Roosevelt was President during both the Great Depression and World War II.",
      ml: "മഹാ മാന്ദ്യത്തിന്റെയും രണ്ടാം ലോക മഹായുദ്ധത്തിന്റെയും സമയത്ത് ഫ്രാങ്ക്ലിൻ റൂസ്‌വെൽറ്റ് ആയിരുന്നു പ്രസിഡന്റ്.",
    },
  },
  {
    id: "h010",
    topic: "history",
    question: {
      en: "What happened on September 11, 2001?",
      ml: "2001 സെപ്റ്റംബർ 11-ന് എന്താണ് സംഭവിച്ചത്?",
    },
    options: [
      {
        en: "Terrorist attacks on the United States",
        ml: "അമേരിക്കയിൽ ഭീകരാക്രമണങ്ങൾ",
      },
      { en: "Pearl Harbor attack", ml: "പേൾ ഹാർബർ ആക്രമണം" },
      { en: "End of the Cold War", ml: "ശീതയുദ്ധത്തിന്റെ അവസാനം" },
      { en: "Hurricane Katrina", ml: "ഹറിക്കേൻ കത്രീന" },
    ],
    correctIndex: 0,
    explanation: {
      en: "On September 11, 2001, terrorists attacked the United States.",
      ml: "2001 സെപ്റ്റംബർ 11-ന് ഭീകരവാദികൾ അമേരിക്കയെ ആക്രമിച്ചു.",
    },
  },
  {
    id: "h011",
    topic: "history",
    question: {
      en: "What war ended slavery?",
      ml: "ഏത് യുദ്ധമാണ് അടിമത്തം അവസാനിപ്പിച്ചത്?",
    },
    options: [
      { en: "Civil War", ml: "ആഭ്യന്തര യുദ്ധം" },
      { en: "Revolutionary War", ml: "വിപ്ലവ യുദ്ധം" },
      { en: "World War I", ml: "ഒന്നാം ലോക മഹായുദ്ധം" },
      { en: "War of 1812", ml: "1812-ലെ യുദ്ധം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Civil War ended slavery in the United States.",
      ml: "ആഭ്യന്തര യുദ്ധം അമേരിക്കയിലെ അടിമത്തം അവസാനിപ്പിച്ചു.",
    },
  },
  {
    id: "h012",
    topic: "history",
    question: {
      en: "When did women get the right to vote?",
      ml: "സ്ത്രീകൾക്ക് എപ്പോൾ വോട്ടവകാശം ലഭിച്ചു?",
    },
    options: [
      { en: "1920 (19th Amendment)", ml: "1920 (19-ാം ഭേദഗതി)" },
      { en: "1776", ml: "1776" },
      { en: "1870 (15th Amendment)", ml: "1870 (15-ാം ഭേദഗതി)" },
      { en: "1950", ml: "1950" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Women got the right to vote in 1920 with the 19th Amendment.",
      ml: "19-ാം ഭേദഗതിയിലൂടെ 1920-ൽ സ്ത്രീകൾക്ക് വോട്ടവകാശം ലഭിച്ചു.",
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
    },
    options: [
      { en: "Washington, D.C.", ml: "വാഷിംഗ്ടൺ, ഡി.സി." },
      { en: "New York City", ml: "ന്യൂയോർക്ക് സിറ്റി" },
      { en: "Los Angeles", ml: "ലോസ് ഏഞ്ചലസ്" },
      { en: "Philadelphia", ml: "ഫിലാഡൽഫിയ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Washington, D.C. is the capital of the United States.",
      ml: "വാഷിംഗ്ടൺ, ഡി.സി. ആണ് അമേരിക്കയുടെ തലസ്ഥാനം.",
    },
  },
  {
    id: "s002",
    topic: "symbols",
    question: {
      en: "Why does the flag have 13 stripes?",
      ml: "പതാകയിൽ 13 വരകൾ ഉള്ളത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "For the 13 original colonies", ml: "13 യഥാർത്ഥ കോളനികൾക്ക്" },
      { en: "For the 13 amendments", ml: "13 ഭേദഗതികൾക്ക്" },
      { en: "For the 13 presidents", ml: "13 പ്രസിഡന്റുമാർക്ക്" },
      { en: "For the 13 wars", ml: "13 യുദ്ധങ്ങൾക്ക്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The flag has 13 stripes representing the 13 original colonies.",
      ml: "13 യഥാർത്ഥ കോളനികളെ പ്രതിനിധീകരിച്ച് പതാകയിൽ 13 വരകൾ ഉണ്ട്.",
    },
  },
  {
    id: "s003",
    topic: "symbols",
    question: {
      en: "Why does the flag have 50 stars?",
      ml: "പതാകയിൽ 50 നക്ഷത്രങ്ങൾ ഉള്ളത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "One for each state", ml: "ഓരോ സംസ്ഥാനത്തിനും ഓരോന്ന്" },
      { en: "One for each president", ml: "ഓരോ പ്രസിഡന്റിനും ഓരോന്ന്" },
      { en: "One for each amendment", ml: "ഓരോ ഭേദഗതിക്കും ഓരോന്ന്" },
      {
        en: "One for each year of independence",
        ml: "സ്വാതന്ത്ര്യത്തിന്റെ ഓരോ വർഷത്തിനും ഓരോന്ന്",
      },
    ],
    correctIndex: 0,
    explanation: {
      en: "The flag has 50 stars because there is one star for each of the 50 states.",
      ml: "50 സംസ്ഥാനങ്ങളിൽ ഓരോന്നിനും ഓരോ നക്ഷത്രം ഉള്ളതിനാൽ പതാകയിൽ 50 നക്ഷത്രങ്ങൾ ഉണ്ട്.",
    },
  },
  {
    id: "s004",
    topic: "symbols",
    question: {
      en: "What is the national anthem?",
      ml: "ദേശീയ ഗാനം ഏതാണ്?",
    },
    options: [
      { en: "The Star-Spangled Banner", ml: "ദി സ്റ്റാർ-സ്പാംഗിൾഡ് ബാനർ" },
      { en: "America the Beautiful", ml: "അമേരിക്ക ദി ബ്യൂട്ടിഫുൾ" },
      { en: "God Bless America", ml: "ഗോഡ് ബ്ലെസ് അമേരിക്ക" },
      { en: "My Country, 'Tis of Thee", ml: "മൈ കൺട്രി, ടിസ് ഓഫ് ദീ" },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The national anthem is "The Star-Spangled Banner."',
      ml: '"ദി സ്റ്റാർ-സ്പാംഗിൾഡ് ബാനർ" ആണ് ദേശീയ ഗാനം.',
    },
  },
  {
    id: "s005",
    topic: "symbols",
    question: {
      en: 'What does "E Pluribus Unum" mean?',
      ml: '"ഇ പ്ലൂരിബസ് യൂനം" എന്നാൽ എന്താണ് അർത്ഥം?',
    },
    options: [
      { en: "Out of many, one", ml: "അനേകത്തിൽ നിന്ന് ഒന്ന്" },
      { en: "In God we trust", ml: "ദൈവത്തിൽ നാം വിശ്വസിക്കുന്നു" },
      { en: "Liberty and justice", ml: "സ്വാതന്ത്ര്യവും നീതിയും" },
      { en: "We the people", ml: "നമ്മൾ ജനങ്ങൾ" },
    ],
    correctIndex: 0,
    explanation: {
      en: '"E Pluribus Unum" means "Out of many, one."',
      ml: '"ഇ പ്ലൂരിബസ് യൂനം" എന്നാൽ "അനേകത്തിൽ നിന്ന് ഒന്ന്" എന്നാണ് അർത്ഥം.',
    },
  },
  {
    id: "s006",
    topic: "symbols",
    question: {
      en: "What is Memorial Day?",
      ml: "മെമ്മോറിയൽ ഡേ എന്താണ്?",
    },
    options: [
      {
        en: "A day to honor soldiers who died in service",
        ml: "സേവനത്തിൽ മരിച്ച സൈനികരെ ബഹുമാനിക്കുന്ന ദിനം",
      },
      {
        en: "A day to celebrate independence",
        ml: "സ്വാതന്ത്ര്യം ആഘോഷിക്കുന്ന ദിനം",
      },
      {
        en: "A day to honor living veterans",
        ml: "ജീവിച്ചിരിക്കുന്ന വെറ്ററൻസിനെ ബഹുമാനിക്കുന്ന ദിനം",
      },
      {
        en: "Presidents' birthday celebration",
        ml: "പ്രസിഡന്റുമാരുടെ ജന്മദിന ആഘോഷം",
      },
    ],
    correctIndex: 0,
    explanation: {
      en: "Memorial Day honors soldiers who died in military service.",
      ml: "സൈനിക സേവനത്തിൽ മരിച്ച സൈനികരെ ബഹുമാനിക്കുന്ന ദിനമാണ് മെമ്മോറിയൽ ഡേ.",
    },
  },
  {
    id: "s007",
    topic: "symbols",
    question: {
      en: "What is Independence Day?",
      ml: "സ്വാതന്ത്ര്യ ദിനം എന്താണ്?",
    },
    options: [
      {
        en: "Celebration of U.S. independence (country's birthday)",
        ml: "അമേരിക്കൻ സ്വാതന്ത്ര്യത്തിന്റെ ആഘോഷം (രാജ്യത്തിന്റെ ജന്മദിനം)",
      },
      { en: "End of the Civil War", ml: "ആഭ്യന്തര യുദ്ധത്തിന്റെ അവസാനം" },
      { en: "Signing of the Constitution", ml: "ഭരണഘടനയുടെ ഒപ്പിടൽ" },
      { en: "Thanksgiving", ml: "നന്ദി ദിനം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Independence Day celebrates the adoption of the Declaration of Independence — the country's birthday on July 4.",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനത്തിന്റെ അംഗീകരണം ആഘോഷിക്കുന്നതാണ് സ്വാതന്ത്ര്യ ദിനം — ജൂലൈ 4-ന് രാജ്യത്തിന്റെ ജന്മദിനം.",
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
    },
    options: [
      { en: "Protects the rights of the people", ml: "ജനങ്ങളുടെ അവകാശങ്ങൾ സംരക്ഷിക്കുന്നു" },
      { en: "Elects the President", ml: "പ്രസിഡന്റിനെ തിരഞ്ഞെടുക്കുന്നു" },
      { en: "Declares war on other countries", ml: "മറ്റ് രാജ്യങ്ങൾക്കെതിരെ യുദ്ധം പ്രഖ്യാപിക്കുന്നു" },
      { en: "Collects taxes from citizens", ml: "പൗരന്മാരിൽ നിന്ന് നികുതി ശേഖരിക്കുന്നു" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Constitution forms the government, defines its powers, and protects the rights of the people.",
      ml: "ഭരണഘടന ഗവൺമെന്റ് രൂപീകരിക്കുകയും അതിന്റെ അധികാരങ്ങൾ നിർവചിക്കുകയും ജനങ്ങളുടെ അവകാശങ്ങൾ സംരക്ഷിക്കുകയും ചെയ്യുന്നു.",
    },
  },
  {
    id: "g017",
    topic: "government",
    question: {
      en: "The U.S. Constitution starts with \"We the People.\" What does \"We the People\" mean?",
      ml: "അമേരിക്കൻ ഭരണഘടന \"We the People\" (നാം ജനങ്ങൾ) എന്ന വാക്കുകളിൽ തുടങ്ങുന്നു. ഇതിന്റെ അർഥം എന്താണ്?",
    },
    options: [
      { en: "The President rules alone", ml: "പ്രസിഡന്റ് ഒറ്റയ്ക്ക് ഭരിക്കുന്നു" },
      { en: "Self-government / Popular sovereignty", ml: "സ്വയം ഭരണം / ജനകീയ പരമാധികാരം" },
      { en: "Only rich people have rights", ml: "സമ്പന്നർക്ക് മാത്രമാണ് അവകാശങ്ങൾ" },
      { en: "The military controls the country", ml: "സൈന്യം രാജ്യം നിയന്ത്രിക്കുന്നു" },
    ],
    correctIndex: 1,
    explanation: {
      en: "\"We the People\" means self-government — the people govern themselves through consent of the governed.",
      ml: "\"We the People\" എന്നാൽ സ്വയം ഭരണമാണ് — ജനങ്ങൾ സ്വയം ഭരിക്കുന്നു.",
    },
  },
  {
    id: "g018",
    topic: "government",
    question: {
      en: "How are changes made to the U.S. Constitution?",
      ml: "അമേരിക്കൻ ഭരണഘടനയിൽ മാറ്റങ്ങൾ എങ്ങനെ വരുത്തുന്നു?",
    },
    options: [
      { en: "By presidential order", ml: "പ്രസിഡൻഷ്യൽ ഉത്തരവ് വഴി" },
      { en: "By Supreme Court ruling", ml: "സുപ്രീം കോടതി വിധി വഴി" },
      { en: "Amendments", ml: "ഭേദഗതികൾ" },
      { en: "By popular vote only", ml: "ജനകീയ വോട്ട് മാത്രം വഴി" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Changes to the Constitution are made through the amendment process.",
      ml: "ഭരണഘടനയിലെ മാറ്റങ്ങൾ ഭേദഗതി പ്രക്രിയയിലൂടെ വരുത്തുന്നു.",
    },
  },
  {
    id: "g019",
    topic: "government",
    question: {
      en: "Why is the Declaration of Independence important?",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എന്തുകൊണ്ട് പ്രധാനമാണ്?",
    },
    options: [
      { en: "It created the Supreme Court", ml: "ഇത് സുപ്രീം കോടതി സൃഷ്ടിച്ചു" },
      { en: "It established the tax system", ml: "ഇത് നികുതി സമ്പ്രദായം സ്ഥാപിച്ചു" },
      { en: "It says America is free from Britain and all people are created equal", ml: "അമേരിക്ക ബ്രിട്ടനിൽ നിന്ന് സ്വതന്ത്രമാണെന്നും എല്ലാവരും സമന്മാരാണെന്നും അത് പറയുന്നു" },
      { en: "It ended the Civil War", ml: "ഇത് ആഭ്യന്തര യുദ്ധം അവസാനിപ്പിച്ചു" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The Declaration of Independence says America is free from British control and that all people are created equal.",
      ml: "അമേരിക്ക ബ്രിട്ടനിൽ നിന്ന് സ്വതന്ത്രമാണെന്നും എല്ലാവരും സമന്മാരായി സൃഷ്ടിക്കപ്പെട്ടിരിക്കുന്നുവെന്നും സ്വാതന്ത്ര്യ പ്രഖ്യാപനം പറയുന്നു.",
    },
  },
  {
    id: "g020",
    topic: "government",
    question: {
      en: "What founding document said the American colonies were free from Britain?",
      ml: "അമേരിക്കൻ കോളനികൾ ബ്രിട്ടനിൽ നിന്ന് സ്വതന്ത്രമാണെന്ന് ഏത് രൂപകർത്ത രേഖ പറഞ്ഞു?",
    },
    options: [
      { en: "Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം" },
      { en: "U.S. Constitution", ml: "യു.എസ്. ഭരണഘടന" },
      { en: "Bill of Rights", ml: "അവകാശ ബിൽ" },
      { en: "Federalist Papers", ml: "ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Declaration of Independence declared the colonies free from Britain.",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം കോളനികളെ ബ്രിട്ടനിൽ നിന്ന് സ്വതന്ത്രമായി പ്രഖ്യാപിച്ചു.",
    },
  },
  {
    id: "g021",
    topic: "government",
    question: {
      en: "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനത്തിൽ നിന്നും ഭരണഘടനയിൽ നിന്നുമുള്ള രണ്ട് പ്രധാന ആശയങ്ങൾ പറയുക.",
    },
    options: [
      { en: "Taxation and military service", ml: "നികുതിയും സൈനിക സേവനവും" },
      { en: "Equality and liberty", ml: "സമത്വവും സ്വാതന്ത്ര്യവും" },
      { en: "Trade and commerce", ml: "വ്യാപാരവും വാണിജ്യവും" },
      { en: "Immigration and citizenship", ml: "കുടിയേറ്റവും പൗരത്വവും" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Important ideas include equality, liberty, social contract, natural rights, limited government, and self-government.",
      ml: "സമത്വം, സ്വാതന്ത്ര്യം, സാമൂഹിക കരാർ, പ്രകൃതിദത്ത അവകാശങ്ങൾ, പരിമിതമായ ഗവൺമെന്റ്, സ്വയം ഭരണം എന്നിവ പ്രധാന ആശയങ്ങളാണ്.",
    },
  },
  {
    id: "g022",
    topic: "government",
    question: {
      en: "The words \"Life, Liberty, and the pursuit of Happiness\" are in what founding document?",
      ml: "\"ജീവൻ, സ്വാതന്ത്ര്യം, സന്തോഷം തേടൽ\" എന്ന വാക്കുകൾ ഏത് രൂപകർത്ത രേഖയിലാണ്?",
    },
    options: [
      { en: "Bill of Rights", ml: "അവകാശ ബിൽ" },
      { en: "U.S. Constitution", ml: "യു.എസ്. ഭരണഘടന" },
      { en: "Articles of Confederation", ml: "കോൺഫെഡറേഷന്റെ ആർട്ടിക്കിളുകൾ" },
      { en: "Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം" },
    ],
    correctIndex: 3,
    explanation: {
      en: "\"Life, Liberty, and the pursuit of Happiness\" are words from the Declaration of Independence.",
      ml: "\"ജീവൻ, സ്വാതന്ത്ര്യം, സന്തോഷം തേടൽ\" സ്വാതന്ത്ര്യ പ്രഖ്യാപനത്തിലെ വാക്കുകളാണ്.",
    },
  },
  {
    id: "g023",
    topic: "government",
    question: {
      en: "What is the rule of law?",
      ml: "നിയമ ഭരണം (Rule of Law) എന്നാൽ എന്ത്?",
    },
    options: [
      { en: "Everyone must follow the law; no one is above the law", ml: "എല്ലാവരും നിയമം പാലിക്കണം; ആരും നിയമത്തിന് അതീതരല്ല" },
      { en: "Only citizens must follow the law", ml: "പൗരന്മാർ മാത്രം നിയമം പാലിക്കണം" },
      { en: "The President can change any law", ml: "പ്രസിഡന്റിന് ഏത് നിയമവും മാറ്റാം" },
      { en: "Laws apply only to poor people", ml: "നിയമങ്ങൾ ദരിദ്രർക്ക് മാത്രം ബാധകം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The rule of law means everyone must follow the law — leaders, government, and no one is above the law.",
      ml: "നിയമ ഭരണം എന്നാൽ നേതാക്കളും ഗവൺമെന്റും ഉൾപ്പെടെ എല്ലാവരും നിയമം പാലിക്കണം, ആരും നിയമത്തിന് അതീതരല്ല.",
    },
  },
  {
    id: "g024",
    topic: "government",
    question: {
      en: "Many documents influenced the U.S. Constitution. Name one.",
      ml: "പല രേഖകൾ അമേരിക്കൻ ഭരണഘടനയെ സ്വാധീനിച്ചു. ഒന്ന് പറയുക.",
    },
    options: [
      { en: "Communist Manifesto", ml: "കമ്മ്യൂണിസ്റ്റ് മാനിഫെസ്റ്റോ" },
      { en: "Mayflower Compact", ml: "മേഫ്ലവർ കോംപാക്ട്" },
      { en: "Treaty of Paris", ml: "പാരീസ് ഉടമ്പടി" },
      { en: "Magna Carta only", ml: "മാഗ്ന കാർട്ട മാത്രം" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Documents that influenced the Constitution include the Declaration of Independence, Articles of Confederation, Federalist Papers, and Mayflower Compact.",
      ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം, കോൺഫെഡറേഷൻ ആർട്ടിക്കിൾസ്, ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ്, മേഫ്ലവർ കോംപാക്ട് എന്നിവ ഭരണഘടനയെ സ്വാധീനിച്ച രേഖകളാണ്.",
    },
  },
  {
    id: "g025",
    topic: "government",
    question: {
      en: "There are three branches of government. Why?",
      ml: "മൂന്ന് ഗവൺമെന്റ് ശാഖകൾ ഉള്ളത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "To make government work faster", ml: "ഗവൺമെന്റ് വേഗത്തിൽ പ്രവർത്തിക്കാൻ" },
      { en: "Because the Constitution is long", ml: "ഭരണഘടന നീളമുള്ളതായതിനാൽ" },
      { en: "So one part does not become too powerful (checks and balances)", ml: "ഒരു ഭാഗം വളരെ ശക്തമാകാതിരിക്കാൻ (ചെക്ക്സ് ആൻഡ് ബാലൻസസ്)" },
      { en: "To give more jobs to people", ml: "കൂടുതൽ ആളുകൾക്ക് ജോലി നൽകാൻ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Three branches exist so one part does not become too powerful — this is called checks and balances / separation of powers.",
      ml: "ഒരു ഭാഗം വളരെ ശക്തമാകാതിരിക്കാൻ മൂന്ന് ശാഖകൾ ഉണ്ട് — ഇതിനെ ചെക്ക്സ് ആൻഡ് ബാലൻസസ് / അധികാര വിഭജനം എന്ന് പറയുന്നു.",
    },
  },
  {
    id: "g026",
    topic: "government",
    question: {
      en: "The President of the United States is in charge of which branch of government?",
      ml: "അമേരിക്കൻ പ്രസിഡന്റ് ഏത് ഗവൺമെന്റ് ശാഖയുടെ ചുമതലക്കാരനാണ്?",
    },
    options: [
      { en: "Legislative branch", ml: "നിയമനിർമ്മാണ ശാഖ" },
      { en: "Judicial branch", ml: "നീതിന്യായ ശാഖ" },
      { en: "Executive branch", ml: "ഭരണ ശാഖ" },
      { en: "Military branch", ml: "സൈനിക ശാഖ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The President is in charge of the executive branch.",
      ml: "പ്രസിഡന്റ് ഭരണ ശാഖയുടെ ചുമതലക്കാരനാണ്.",
    },
  },
  {
    id: "g027",
    topic: "government",
    question: {
      en: "What part of the federal government writes laws?",
      ml: "ഫെഡറൽ ഗവൺമെന്റിന്റെ ഏത് ഭാഗം നിയമങ്ങൾ ഉണ്ടാക്കുന്നു?",
    },
    options: [
      { en: "(U.S.) Congress / Legislative branch", ml: "കോൺഗ്രസ് / നിയമനിർമ്മാണ ശാഖ" },
      { en: "The President", ml: "പ്രസിഡന്റ്" },
      { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" },
      { en: "The military", ml: "സൈന്യം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Congress (the legislative branch) writes federal laws.",
      ml: "കോൺഗ്രസ് (നിയമനിർമ്മാണ ശാഖ) ഫെഡറൽ നിയമങ്ങൾ ഉണ്ടാക്കുന്നു.",
    },
  },
  {
    id: "g028",
    topic: "government",
    question: {
      en: "What are the two parts of the U.S. Congress?",
      ml: "അമേരിക്കൻ കോൺഗ്രസിന്റെ രണ്ട് ഭാഗങ്ങൾ ഏതൊക്കെ?",
    },
    options: [
      { en: "Democrats and Republicans", ml: "ഡെമോക്രാറ്റുകളും റിപ്പബ്ലിക്കൻമാരും" },
      { en: "Senate and House of Representatives", ml: "സെനറ്റും ജനപ്രതിനിധി സഭയും" },
      { en: "President and Vice President", ml: "പ്രസിഡന്റും വൈസ് പ്രസിഡന്റും" },
      { en: "Federal and State", ml: "ഫെഡറലും സംസ്ഥാനവും" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The two parts of Congress are the Senate and the House of Representatives.",
      ml: "കോൺഗ്രസിന്റെ രണ്ട് ഭാഗങ്ങൾ സെനറ്റും ജനപ്രതിനിധി സഭയുമാണ്.",
    },
  },
  {
    id: "g029",
    topic: "government",
    question: {
      en: "Name one power of the U.S. Congress.",
      ml: "അമേരിക്കൻ കോൺഗ്രസിന്റെ ഒരു അധികാരം പറയുക.",
    },
    options: [
      { en: "Writes laws", ml: "നിയമങ്ങൾ ഉണ്ടാക്കുന്നു" },
      { en: "Appoints judges", ml: "ജഡ്ജിമാരെ നിയമിക്കുന്നു" },
      { en: "Commands the military", ml: "സൈന്യത്തെ നയിക്കുന്നു" },
      { en: "Enforces laws", ml: "നിയമങ്ങൾ നടപ്പിലാക്കുന്നു" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Congress writes laws, declares war, and makes the federal budget.",
      ml: "കോൺഗ്രസ് നിയമങ്ങൾ ഉണ്ടാക്കുന്നു, യുദ്ധം പ്രഖ്യാപിക്കുന്നു, ഫെഡറൽ ബജറ്റ് തയ്യാറാക്കുന്നു.",
    },
  },
  {
    id: "g030",
    topic: "government",
    question: {
      en: "Who is one of your state's U.S. senators now? (Texas)",
      ml: "നിങ്ങളുടെ സംസ്ഥാനത്തെ അമേരിക്കൻ സെനറ്റർമാരിൽ ഒരാൾ ആരാണ്? (ടെക്സാസ്)",
    },
    options: [
      { en: "Chuck Schumer", ml: "ചക്ക് ഷൂമർ" },
      { en: "Ted Cruz", ml: "ടെഡ് ക്രൂസ്" },
      { en: "Marco Rubio", ml: "മാർക്കോ റൂബിയോ" },
      { en: "Mitch McConnell", ml: "മിച്ച് മക്കോണൽ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Ted Cruz and John Cornyn are the U.S. senators from Texas.",
      ml: "ടെഡ് ക്രൂസും ജോൺ കോർണിനും ടെക്സാസിൽ നിന്നുള്ള യു.എസ്. സെനറ്റർമാരാണ്.",
    },
  },
  {
    id: "g031",
    topic: "government",
    question: {
      en: "How long is a term for a member of the House of Representatives?",
      ml: "ജനപ്രതിനിധി സഭയിലെ ഒരു അംഗത്തിന്റെ ടേം എത്ര കാലമാണ്?",
    },
    options: [
      { en: "Two (2) years", ml: "രണ്ട് (2) വർഷം" },
      { en: "Four (4) years", ml: "നാല് (4) വർഷം" },
      { en: "Six (6) years", ml: "ആറ് (6) വർഷം" },
      { en: "Eight (8) years", ml: "എട്ട് (8) വർഷം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "A member of the House of Representatives serves a 2-year term.",
      ml: "ജനപ്രതിനിധി സഭയിലെ ഒരു അംഗത്തിന്റെ ടേം 2 വർഷമാണ്.",
    },
  },
  {
    id: "g032",
    topic: "government",
    question: {
      en: "Why do U.S. representatives serve shorter terms than U.S. senators?",
      ml: "അമേരിക്കൻ പ്രതിനിധികൾ സെനറ്റർമാരേക്കാൾ കുറഞ്ഞ കാലം സേവിക്കുന്നത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "They are less important", ml: "അവർ കുറച്ച് പ്രാധാന്യമുള്ളവരാണ്" },
      { en: "To save money", ml: "പണം ലാഭിക്കാൻ" },
      { en: "To more closely follow public opinion", ml: "പൊതുജനാഭിപ്രായം കൂടുതൽ അടുത്ത് പിന്തുടരാൻ" },
      { en: "Because the Constitution is old", ml: "ഭരണഘടന പഴയതായതിനാൽ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Representatives serve shorter terms to more closely follow public opinion.",
      ml: "പൊതുജനത്തിന്റെ അഭിപ്രായം കൂടുതൽ അടുത്ത് പിന്തുടരാൻ പ്രതിനിധികൾ കുറഞ്ഞ കാലം സേവിക്കുന്നു.",
    },
  },
  {
    id: "g033",
    topic: "government",
    question: {
      en: "How many senators does each state have?",
      ml: "ഓരോ സംസ്ഥാനത്തിനും എത്ര സെനറ്റർമാർ ഉണ്ട്?",
    },
    options: [
      { en: "One (1)", ml: "ഒന്ന് (1)" },
      { en: "Two (2)", ml: "രണ്ട് (2)" },
      { en: "Three (3)", ml: "മൂന്ന് (3)" },
      { en: "It depends on population", ml: "ജനസംഖ്യ അനുസരിച്ച്" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Each state has two (2) senators.",
      ml: "ഓരോ സംസ്ഥാനത്തിനും രണ്ട് (2) സെനറ്റർമാരുണ്ട്.",
    },
  },
  {
    id: "g034",
    topic: "government",
    question: {
      en: "Why does each state have two senators?",
      ml: "ഓരോ സംസ്ഥാനത്തിനും രണ്ട് സെനറ്റർമാർ ഉള്ളത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "Equal representation for small states (The Great Compromise)", ml: "ചെറിയ സംസ്ഥാനങ്ങൾക്ക് തുല്യ പ്രാതിനിധ്യം (ദി ഗ്രേറ്റ് കോംപ്രൊമൈസ്)" },
      { en: "Because there are 100 senators total", ml: "100 സെനറ്റർമാർ ആകെ ഉള്ളതിനാൽ" },
      { en: "The President decided it", ml: "പ്രസിഡന്റ് തീരുമാനിച്ചു" },
      { en: "It was a tradition from Britain", ml: "ഇത് ബ്രിട്ടനിൽ നിന്നുള്ള പാരമ്പര്യമായിരുന്നു" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Each state has two senators for equal representation — this was part of the Great Compromise (Connecticut Compromise).",
      ml: "തുല്യ പ്രാതിനിധ്യത്തിനായി ഓരോ സംസ്ഥാനത്തിനും രണ്ട് സെനറ്റർമാർ — ഇത് ഗ്രേറ്റ് കോംപ്രൊമൈസിന്റെ (കണക്ടിക്കട്ട് കോംപ്രൊമൈസ്) ഭാഗമായിരുന്നു.",
    },
  },
  {
    id: "g035",
    topic: "government",
    question: {
      en: "Name your U.S. representative. (Texas)",
      ml: "നിങ്ങളുടെ അമേരിക്കൻ പ്രതിനിധി ആരാണ്? (ടെക്സാസ്)",
    },
    options: [
      { en: "Monica De La Cruz", ml: "മോണിക്ക ഡി ലാ ക്രൂസ്" },
      { en: "Nancy Pelosi", ml: "നാൻസി പെലോസി" },
      { en: "Alexandria Ocasio-Cortez", ml: "അലക്സാൻഡ്രിയ ഒകാസിയോ-കോർട്ടെസ്" },
      { en: "Kevin McCarthy", ml: "കെവിൻ മക്കാർത്തി" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Monica De La Cruz is the U.S. representative for this Texas district.",
      ml: "മോണിക്ക ഡി ലാ ക്രൂസ് ഈ ടെക്സസ് ജില്ലയിലെ യു.എസ്. പ്രതിനിധിയാണ്.",
    },
  },
  {
    id: "g036",
    topic: "government",
    question: {
      en: "What is the name of the Speaker of the House of Representatives now?",
      ml: "ഇപ്പോൾ ജനപ്രതിനിധി സഭയുടെ സ്പീക്കർ ആരാണ്?",
    },
    options: [
      { en: "Nancy Pelosi", ml: "നാൻസി പെലോസി" },
      { en: "Kevin McCarthy", ml: "കെവിൻ മക്കാർത്തി" },
      { en: "Mike Johnson", ml: "മൈക്ക് ജോൺസൺ" },
      { en: "Chuck Schumer", ml: "ചക്ക് ഷൂമർ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Mike Johnson is the current Speaker of the House of Representatives.",
      ml: "മൈക്ക് ജോൺസൺ ആണ് ഇപ്പോഴത്തെ ജനപ്രതിനിധി സഭയുടെ സ്പീക്കർ.",
    },
  },
  {
    id: "g037",
    topic: "government",
    question: {
      en: "Who does a U.S. senator represent?",
      ml: "ഒരു അമേരിക്കൻ സെനറ്റർ ആരെ പ്രതിനിധീകരിക്കുന്നു?",
    },
    options: [
      { en: "Citizens of their state", ml: "അവരുടെ സംസ്ഥാനത്തെ പൗരന്മാർ" },
      { en: "All Americans", ml: "എല്ലാ അമേരിക്കക്കാരും" },
      { en: "The President", ml: "പ്രസിഡന്റ്" },
      { en: "Their political party", ml: "അവരുടെ രാഷ്ട്രീയ പാർടി" },
    ],
    correctIndex: 0,
    explanation: {
      en: "A U.S. senator represents the citizens of their state.",
      ml: "ഒരു അമേരിക്കൻ സെനറ്റർ അവരുടെ സംസ്ഥാനത്തെ പൗരന്മാരെ പ്രതിനിധീകരിക്കുന്നു.",
    },
  },
  {
    id: "g038",
    topic: "government",
    question: {
      en: "Who elects U.S. senators?",
      ml: "അമേരിക്കൻ സെനറ്റർമാരെ ആർ തിരഞ്ഞെടുക്കുന്നു?",
    },
    options: [
      { en: "The President", ml: "പ്രസിഡന്റ്" },
      { en: "Citizens from their state", ml: "അവരുടെ സംസ്ഥാനത്തെ പൗരന്മാർ" },
      { en: "Other senators", ml: "മറ്റ് സെനറ്റർമാർ" },
      { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Citizens from their state elect U.S. senators.",
      ml: "അവരുടെ സംസ്ഥാനത്തെ പൗരന്മാർ സെനറ്റർമാരെ തിരഞ്ഞെടുക്കുന്നു.",
    },
  },
  {
    id: "g039",
    topic: "government",
    question: {
      en: "Who does a member of the House of Representatives represent?",
      ml: "ജനപ്രതിനിധി സഭയിലെ ഒരു അംഗം ആരെ പ്രതിനിധീകരിക്കുന്നു?",
    },
    options: [
      { en: "All Americans", ml: "എല്ലാ അമേരിക്കക്കാരും" },
      { en: "The entire state", ml: "മുഴുവൻ സംസ്ഥാനം" },
      { en: "Citizens in their congressional district", ml: "അവരുടെ കോൺഗ്രസ് ജില്ലയിലെ പൗരന്മാർ" },
      { en: "The Governor", ml: "ഗവർണർ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "A House member represents citizens in their congressional district.",
      ml: "ജനപ്രതിനിധി സഭ അംഗം അവരുടെ കോൺഗ്രസ് ജില്ലയിലെ പൗരന്മാരെ പ്രതിനിധീകരിക്കുന്നു.",
    },
  },
  {
    id: "g040",
    topic: "government",
    question: {
      en: "Who elects members of the House of Representatives?",
      ml: "ജനപ്രതിനിധി സഭ അംഗങ്ങളെ ആർ തിരഞ്ഞെടുക്കുന്നു?",
    },
    options: [
      { en: "Citizens from their congressional district", ml: "അവരുടെ കോൺഗ്രസ് ജില്ലയിലെ പൗരന്മാർ" },
      { en: "The Senate", ml: "സെനറ്റ്" },
      { en: "The President", ml: "പ്രസിഡന്റ്" },
      { en: "State governors", ml: "സംസ്ഥാന ഗവർണർമാർ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Citizens from their congressional district elect members of the House.",
      ml: "അവരുടെ കോൺഗ്രസ് ജില്ലയിലെ പൗരന്മാർ ജനപ്രതിനിധി സഭ അംഗങ്ങളെ തിരഞ്ഞെടുക്കുന്നു.",
    },
  },
  {
    id: "g041",
    topic: "government",
    question: {
      en: "Some states have more representatives than other states. Why?",
      ml: "ചില സംസ്ഥാനങ്ങൾക്ക് മറ്റുള്ളവയേക്കാൾ കൂടുതൽ പ്രതിനിധികൾ ഉള്ളത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "Because of the state's size", ml: "സംസ്ഥാനത്തിന്റെ വലിപ്പം കാരണം" },
      { en: "Because of the state's population", ml: "സംസ്ഥാനത്തിന്റെ ജനസംഖ്യ കാരണം" },
      { en: "Because they have more money", ml: "കൂടുതൽ പണം ഉള്ളതിനാൽ" },
      { en: "Because they joined the Union first", ml: "അവർ ആദ്യം യൂണിയനിൽ ചേർന്നതിനാൽ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "States with larger populations have more representatives in the House.",
      ml: "കൂടുതൽ ജനസംഖ്യയുള്ള സംസ്ഥാനങ്ങൾക്ക് ജനപ്രതിനിധി സഭയിൽ കൂടുതൽ പ്രതിനിധികളുണ്ട്.",
    },
  },
  {
    id: "g042",
    topic: "government",
    question: {
      en: "The President of the United States can serve only two terms. Why?",
      ml: "അമേരിക്കൻ പ്രസിഡന്റിന് രണ്ട് ടേം മാത്രം സേവിക്കാവുന്നത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "Because of the 22nd Amendment", ml: "22-ആം ഭേദഗതി കാരണം" },
      { en: "Because of tradition", ml: "പാരമ്പര്യം കാരണം" },
      { en: "Congress decides each time", ml: "ഓരോ തവണയും കോൺഗ്രസ് തീരുമാനിക്കുന്നു" },
      { en: "The Supreme Court limits it", ml: "സുപ്രീം കോടതി പരിമിതപ്പെടുത്തുന്നു" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The 22nd Amendment limits the President to two terms, to prevent the president from becoming too powerful.",
      ml: "പ്രസിഡന്റ് വളരെ ശക്തനാകാതിരിക്കാൻ 22-ആം ഭേദഗതി പ്രസിഡന്റിനെ രണ്ട് ടേമായി പരിമിതപ്പെടുത്തുന്നു.",
    },
  },
  {
    id: "g043",
    topic: "government",
    question: {
      en: "Name one power of the President.",
      ml: "പ്രസിഡന്റിന്റെ ഒരു അധികാരം പറയുക.",
    },
    options: [
      { en: "Writes laws", ml: "നിയമങ്ങൾ എഴുതുന്നു" },
      { en: "Signs bills into law", ml: "ബില്ലുകൾ നിയമമാക്കി ഒപ്പ് വക്കുന്നു" },
      { en: "Appoints senators", ml: "സെനറ്റർമാരെ നിയമിക്കുന്നു" },
      { en: "Decides court cases", ml: "കോടതി കേസുകൾ തീരുമാനിക്കുന്നു" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The President can sign bills into law, veto bills, enforce laws, command the military, and appoint federal judges.",
      ml: "പ്രസിഡന്റിന് ബില്ലുകൾ നിയമമാക്കി ഒപ്പ് വക്കാനും, വീറ്റോ ചെയ്യാനും, നിയമങ്ങൾ നടപ്പിലാക്കാനും, സൈന്യത്തെ നയിക്കാനും, ഫെഡറൽ ജഡ്ജിമാരെ നിയമിക്കാനും കഴിയും.",
    },
  },
  {
    id: "g044",
    topic: "government",
    question: {
      en: "Who signs bills to become laws?",
      ml: "ബില്ലുകൾ നിയമമാക്കി ആർ ഒപ്പ് വക്കുന്നു?",
    },
    options: [
      { en: "The Speaker of the House", ml: "ഹൗസ് സ്പീക്കർ" },
      { en: "The Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" },
      { en: "The Vice President", ml: "വൈസ് പ്രസിഡന്റ്" },
      { en: "The President", ml: "പ്രസിഡന്റ്" },
    ],
    correctIndex: 3,
    explanation: {
      en: "The President signs bills to become laws.",
      ml: "പ്രസിഡന്റ് ബില്ലുകൾ നിയമമാക്കി ഒപ്പ് വക്കുന്നു.",
    },
  },
  {
    id: "g045",
    topic: "government",
    question: {
      en: "Who vetoes bills?",
      ml: "ബില്ലുകൾ ആർ വീറ്റോ ചെയ്യുന്നു?",
    },
    options: [
      { en: "The President", ml: "പ്രസിഡന്റ്" },
      { en: "Congress", ml: "കോൺഗ്രസ്" },
      { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" },
      { en: "The Vice President", ml: "വൈസ് പ്രസിഡന്റ്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The President has the power to veto bills.",
      ml: "ബില്ലുകൾ വീറ്റോ ചെയ്യാനുള്ള അധികാരം പ്രസിഡന്റിനാണ്.",
    },
  },
  {
    id: "g046",
    topic: "government",
    question: {
      en: "Who appoints federal judges?",
      ml: "ഫെഡറൽ ജഡ്ജിമാരെ ആർ നിയമിക്കുന്നു?",
    },
    options: [
      { en: "Congress", ml: "കോൺഗ്രസ്" },
      { en: "The President", ml: "പ്രസിഡന്റ്" },
      { en: "State governors", ml: "സംസ്ഥാന ഗവർണർമാർ" },
      { en: "The Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The President appoints federal judges.",
      ml: "പ്രസിഡന്റ് ഫെഡറൽ ജഡ്ജിമാരെ നിയമിക്കുന്നു.",
    },
  },
  {
    id: "g047",
    topic: "government",
    question: {
      en: "The executive branch has many parts. Name one.",
      ml: "ഭരണ ശാഖയ്ക്ക് പല ഭാഗങ്ങൾ ഉണ്ട്. ഒന്ന് പറയുക.",
    },
    options: [
      { en: "President / Cabinet / Federal departments and agencies", ml: "പ്രസിഡന്റ് / കാബിനറ്റ് / ഫെഡറൽ വകുപ്പുകളും ഏജൻസികളും" },
      { en: "Senate", ml: "സെനറ്റ്" },
      { en: "House of Representatives", ml: "ജനപ്രതിനിധി സഭ" },
      { en: "Supreme Court", ml: "സുപ്രീം കോടതി" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Parts of the executive branch include the President, Cabinet, and federal departments and agencies.",
      ml: "ഭരണ ശാഖയുടെ ഭാഗങ്ങളിൽ പ്രസിഡന്റ്, കാബിനറ്റ്, ഫെഡറൽ വകുപ്പുകൾ, ഏജൻസികൾ എന്നിവ ഉൾപ്പെടുന്നു.",
    },
  },
  {
    id: "g048",
    topic: "government",
    question: {
      en: "What does the President's Cabinet do?",
      ml: "പ്രസിഡന്റിന്റെ കാബിനറ്റ് എന്ത് ചെയ്യുന്നു?",
    },
    options: [
      { en: "Writes laws", ml: "നിയമങ്ങൾ എഴുതുന്നു" },
      { en: "Decides court cases", ml: "കോടതി കേസുകൾ തീരുമാനിക്കുന്നു" },
      { en: "Advises the President", ml: "പ്രസിഡന്റിന് ഉപദേശം നൽകുന്നു" },
      { en: "Elects the Vice President", ml: "വൈസ് പ്രസിഡന്റിനെ തിരഞ്ഞെടുക്കുന്നു" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The Cabinet advises the President.",
      ml: "കാബിനറ്റ് പ്രസിഡന്റിന് ഉപദേശം നൽകുന്നു.",
    },
  },
  {
    id: "g049",
    topic: "government",
    question: {
      en: "What are two Cabinet-level positions?",
      ml: "രണ്ട് കാബിനറ്റ് തല സ്ഥാനങ്ങൾ ഏതൊക്കെ?",
    },
    options: [
      { en: "Secretary of State and Secretary of Defense", ml: "സ്റ്റേറ്റ് സെക്രട്ടറിയും ഡിഫൻസ് സെക്രട്ടറിയും" },
      { en: "Senator and Representative", ml: "സെനറ്ററും പ്രതിനിധിയും" },
      { en: "Governor and Mayor", ml: "ഗവർണറും മേയറും" },
      { en: "Chief Justice and Speaker", ml: "ചീഫ് ജസ്റ്റിസും സ്പീക്കറും" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Cabinet-level positions include Secretary of State, Secretary of Defense, Secretary of the Treasury, Attorney General, and many more.",
      ml: "സ്റ്റേറ്റ് സെക്രട്ടറി, ഡിഫൻസ് സെക്രട്ടറി, ട്രഷറി സെക്രട്ടറി, അറ്റോർണി ജനറൽ എന്നിവ കാബിനറ്റ് തല സ്ഥാനങ്ങളാണ്.",
    },
  },
  {
    id: "g050",
    topic: "government",
    question: {
      en: "How many Supreme Court justices are usually needed to decide a case?",
      ml: "ഒരു കേസ് തീർപ്പാക്കാൻ സാധാരണ എത്ര സുപ്രീം കോടതി ജഡ്ജിമാർ ആവശ്യമാണ്?",
    },
    options: [
      { en: "Three (3)", ml: "മൂന്ന് (3)" },
      { en: "Five (5)", ml: "അഞ്ച് (5)" },
      { en: "Seven (7)", ml: "ഏഴ് (7)" },
      { en: "Nine (9)", ml: "ഒൻപത് (9)" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Five (a majority of nine) Supreme Court justices are usually needed to decide a case.",
      ml: "ഒരു കേസ് തീർപ്പാക്കാൻ സാധാരണ അഞ്ച് (ഒൻപതിൽ ഭൂരിപക്ഷം) സുപ്രീം കോടതി ജഡ്ജിമാർ ആവശ്യമാണ്.",
    },
  },
  {
    id: "g051",
    topic: "government",
    question: {
      en: "How long do Supreme Court justices serve?",
      ml: "സുപ്രീം കോടതി ജഡ്ജിമാർ എത്ര കാലം സേവിക്കുന്നു?",
    },
    options: [
      { en: "Four (4) years", ml: "നാല് (4) വർഷം" },
      { en: "Ten (10) years", ml: "പത്ത് (10) വർഷം" },
      { en: "For life / Lifetime appointment", ml: "ജീവിതകാലം മുഴുവൻ / ആജീവനാന്ത നിയമനം" },
      { en: "Six (6) years", ml: "ആറ് (6) വർഷം" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Supreme Court justices serve for life (lifetime appointment) or until retirement.",
      ml: "സുപ്രീം കോടതി ജഡ്ജിമാർ ജീവിതകാലം മുഴുവൻ (ആജീവനാന്ത നിയമനം) അല്ലെങ്കിൽ വിരമിക്കുന്നത് വരെ സേവിക്കുന്നു.",
    },
  },
  {
    id: "g052",
    topic: "government",
    question: {
      en: "Supreme Court justices serve for life. Why?",
      ml: "സുപ്രീം കോടതി ജഡ്ജിമാർ ജീവിതകാലം മുഴുവൻ സേവിക്കുന്നത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "To be independent of politics / limit outside influence", ml: "രാഷ്ട്രീയത്തിൽ നിന്ന് സ്വതന്ത്രരാകാൻ / പുറമെ നിന്നുള്ള സ്വാധീനം പരിമിതപ്പെടുത്താൻ" },
      { en: "Because no one else wants the job", ml: "മറ്റാരും ആ ജോലി ആഗ്രഹിക്കാത്തതിനാൽ" },
      { en: "The Constitution does not mention a term", ml: "ഭരണഘടനയിൽ ടേം പരാമർശിക്കുന്നില്ല" },
      { en: "Tradition from Britain", ml: "ബ്രിട്ടനിൽ നിന്നുള്ള പാരമ്പര്യം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Justices serve for life to be independent of politics and to limit outside political influence.",
      ml: "രാഷ്ട്രീയത്തിൽ നിന്ന് സ്വതന്ത്രരാകാനും പുറമെ നിന്നുള്ള രാഷ്ട്രീയ സ്വാധീനം പരിമിതപ്പെടുത്താനും ജഡ്ജിമാർ ജീവിതകാലം മുഴുവൻ സേവിക്കുന്നു.",
    },
  },
  {
    id: "g053",
    topic: "government",
    question: {
      en: "Who is the Chief Justice of the United States now?",
      ml: "ഇപ്പോൾ അമേരിക്കയുടെ ചീഫ് ജസ്റ്റിസ് ആരാണ്?",
    },
    options: [
      { en: "Clarence Thomas", ml: "ക്ലാരൻസ് തോമസ്" },
      { en: "John Roberts", ml: "ജോൺ റോബർട്ട്സ്" },
      { en: "Samuel Alito", ml: "സാമുവൽ അലിറ്റോ" },
      { en: "Sonia Sotomayor", ml: "സോണിയ സോട്ടോമേയർ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "John Roberts is the current Chief Justice of the United States.",
      ml: "ജോൺ റോബർട്ട്സ് ആണ് ഇപ്പോഴത്തെ അമേരിക്കയുടെ ചീഫ് ജസ്റ്റിസ്.",
    },
  },
  {
    id: "g054",
    topic: "government",
    question: {
      en: "Who is the governor of your state now? (Texas)",
      ml: "ഇപ്പോൾ നിങ്ങളുടെ സംസ്ഥാനത്തിന്റെ ഗവർണർ ആരാണ്? (ടെക്സാസ്)",
    },
    options: [
      { en: "Greg Abbott", ml: "ഗ്രെഗ് അബ്ബോട്ട്" },
      { en: "Ron DeSantis", ml: "റോൺ ഡിസാന്റിസ്" },
      { en: "Gavin Newsom", ml: "ഗാവിൻ ന്യൂസം" },
      { en: "Rick Perry", ml: "റിക്ക് പെറി" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Greg Abbott is the current governor of Texas.",
      ml: "ഗ്രെഗ് അബ്ബോട്ട് ആണ് ഇപ്പോഴത്തെ ടെക്സസ് ഗവർണർ.",
    },
  },
  {
    id: "g055",
    topic: "government",
    question: {
      en: "What is the capital of your state? (Texas)",
      ml: "നിങ്ങളുടെ സംസ്ഥാനത്തിന്റെ തലസ്ഥാനം ഏതാണ്? (ടെക്സാസ്)",
    },
    options: [
      { en: "Houston", ml: "ഹ്യൂസ്റ്റൺ" },
      { en: "Dallas", ml: "ഡാളസ്" },
      { en: "Austin", ml: "ഓസ്റ്റിൻ" },
      { en: "San Antonio", ml: "സാൻ ആന്റോണിയോ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Austin is the capital of Texas.",
      ml: "ഓസ്റ്റിൻ ആണ് ടെക്സസിന്റെ തലസ്ഥാനം.",
    },
  },
  {
    id: "r009",
    topic: "rights",
    question: {
      en: "There are four amendments to the U.S. Constitution about who can vote. Describe one.",
      ml: "വോട്ടർ ആര് എന്ന് നിർണ്ണയിക്കുന്ന നാല് ഭരണഘടന ഭേദഗതികൾ ഉണ്ട്. ഒന്ന് വിവരിക്കുക.",
    },
    options: [
      { en: "Citizens eighteen (18) and older can vote", ml: "18 വയസും അതിൽ കൂടുതലും ഉള്ള പൗരന്മാർക്ക് വോട്ട് ചെയ്യാം" },
      { en: "Only men over 30 can vote", ml: "30 വയസിന് മുകളിലുള്ള പുരുഷൻമാർക്ക് മാത്രം വോട്ട് ചെയ്യാം" },
      { en: "Only property owners can vote", ml: "ഭൂവുടമകൾക്ക് മാത്രം വോട്ട് ചെയ്യാം" },
      { en: "Only college graduates can vote", ml: "കോളേജ് ബിരുദധാരികൾക്ക് മാത്രം വോട്ട് ചെയ്യാം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Voting amendments: citizens 18+ can vote; no poll tax required; any citizen (men and women) can vote; male citizens of any race can vote.",
      ml: "വോട്ടിംഗ് ഭേദഗതികൾ: 18+ പൗരന്മാർക്ക് വോട്ട് ചെയ്യാം; പോൾ ടാക്സ് വേണ്ട; ഏത് പൗരനും (പുരുഷനും സ്ത്രീയും) വോട്ട് ചെയ്യാം; ഏത് വർഗത്തിലെ ആൺ പൗരനും വോട്ട് ചെയ്യാം.",
    },
  },
  {
    id: "r010",
    topic: "rights",
    question: {
      en: "What are two examples of civic participation?",
      ml: "പൗരജീവിതത്തിൽ പങ്കെടുക്കലിന്റെ രണ്ട് ഉദാഹരണങ്ങൾ ഏതൊക്കെ?",
    },
    options: [
      { en: "Watch TV and sleep", ml: "ടി.വി. കാണുക, ഉറങ്ങുക" },
      { en: "Vote and join a political party", ml: "വോട്ട് ചെയ്യുക, ഒരു രാഷ്ട്രീയ പാർടിയിൽ ചേരുക" },
      { en: "Travel abroad and shop", ml: "വിദേശത്ത് യാത്ര ചെയ്യുക, ഷോപ്പിംഗ് ചെയ്യുക" },
      { en: "Go to school and eat", ml: "സ്കൂളിൽ പോവുക, ഭക്ഷണം കഴിക്കുക" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Examples of civic participation include voting, running for office, joining a political party, helping with a campaign, and contacting elected officials.",
      ml: "വോട്ട് ചെയ്യുക, ഓഫീസിൽ മത്സരിക്കുക, രാഷ്ട്രീയ പാർടിയിൽ ചേരുക, കാമ്പെയ്‌നിൽ സഹായിക്കുക, തിരഞ്ഞെടുക്കപ്പെട്ട ഉദ്യോഗസ്ഥരുമായി ബന്ധപ്പെടുക എന്നിവ പൗര പങ്കാളിത്തത്തിന്റെ ഉദാഹരണങ്ങളാണ്.",
    },
  },
  {
    id: "r011",
    topic: "rights",
    question: {
      en: "What is one way Americans can serve their country?",
      ml: "അമേരിക്കക്കാർ രാജ്യത്തെ സേവിക്കാനുള്ള ഒരു വഴി ഏതാണ്?",
    },
    options: [
      { en: "Vote / Pay taxes / Obey the law / Serve in the military", ml: "വോട്ട് ചെയ്യുക / നികുതി അടക്കുക / നിയമം അനുസരിക്കുക / സൈന്യത്തിൽ സേവിക്കുക" },
      { en: "Leave the country", ml: "രാജ്യം വിടുക" },
      { en: "Refuse to pay taxes", ml: "നികുതി അടക്കാൻ വിസമ്മതിക്കുക" },
      { en: "Ignore elections", ml: "തിരഞ്ഞെടുപ്പുകൾ അവഗണിക്കുക" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Americans can serve their country by voting, paying taxes, obeying the law, serving in the military, or running for office.",
      ml: "വോട്ട് ചെയ്തും, നികുതി അടച്ചും, നിയമം അനുസരിച്ചും, സൈന്യത്തിൽ സേവിച്ചും, ഓഫീസിൽ മത്സരിച്ചും അമേരിക്കക്കാർക്ക് രാജ്യത്തെ സേവിക്കാം.",
    },
  },
  {
    id: "h013",
    topic: "history",
    question: {
      en: "Why did colonists come to America?",
      ml: "കൊളോണിസ്റ്റുകൾ അമേരിക്കയിൽ വന്നത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "Freedom / Religious freedom / Economic opportunity / Escape persecution", ml: "സ്വാതന്ത്ര്യം / മതസ്വാതന്ത്ര്യം / സാമ്പത്തിക അവസരം / പീഡനത്തിൽ നിന്ന് രക്ഷപ്പെടാൻ" },
      { en: "To fight wars", ml: "യുദ്ധങ്ങൾ ചെയ്യാൻ" },
      { en: "To find gold only", ml: "സ്വർണ്ണം കണ്ടെത്താൻ മാത്രം" },
      { en: "They were forced by the British king", ml: "ബ്രിട്ടീഷ് രാജാവ് നിർബന്ധിച്ചു" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Colonists came for freedom, political liberty, religious freedom, economic opportunity, and to escape persecution.",
      ml: "സ്വാതന്ത്ര്യം, രാഷ്ട്രീയ സ്വാതന്ത്ര്യം, മതസ്വാതന്ത്ര്യം, സാമ്പത്തിക അവസരം, പീഡനത്തിൽ നിന്ന് രക്ഷപ്പെടാൻ എന്നിവയ്ക്കായി കൊളോണിസ്റ്റുകൾ വന്നു.",
    },
  },
  {
    id: "h014",
    topic: "history",
    question: {
      en: "What group of people was taken and sold as slaves?",
      ml: "ഏത് ഗ്രൂപ്പ് ആളുകൾ അടിമകളായി കൊണ്ടുപോയി വിൽക്കപ്പെട്ടു?",
    },
    options: [
      { en: "Europeans", ml: "യൂറോപ്യന്മാർ" },
      { en: "Native Americans", ml: "നേറ്റീവ് അമേരിക്കക്കാർ" },
      { en: "Africans", ml: "ആഫ്രിക്കക്കാർ" },
      { en: "Asians", ml: "ഏഷ്യക്കാർ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Africans were taken and sold as slaves.",
      ml: "ആഫ്രിക്കക്കാർ അടിമകളായി കൊണ്ടുപോയി വിൽക്കപ്പെട്ടു.",
    },
  },
  {
    id: "h015",
    topic: "history",
    question: {
      en: "Why did Americans declare independence?",
      ml: "അമേരിക്കക്കാർ സ്വാതന്ത്ര്യം പ്രഖ്യാപിച്ചത് എന്തുകൊണ്ട്?",
    },
    options: [
      { en: "To join France", ml: "ഫ്രാൻസിൽ ചേരാൻ" },
      { en: "High taxes / Taxation without representation / No self-government", ml: "ഉയർന്ന നികുതി / പ്രതിനിധിത്വം ഇല്ലാതെ നികുതി / സ്വയം ഭരണം ഇല്ല" },
      { en: "They wanted a king", ml: "അവർ ഒരു രാജാവിനെ ആഗ്രഹിച്ചു" },
      { en: "To become part of Spain", ml: "സ്പെയിനിന്റെ ഭാഗമാകാൻ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Americans declared independence because of high taxes, taxation without representation, the Boston Massacre, Boston Tea Party, and no self-government.",
      ml: "ഉയർന്ന നികുതി, പ്രതിനിധിത്വമില്ലാതെ നികുതി, ബോസ്റ്റൺ കൂട്ടക്കൊല, ബോസ്റ്റൺ ടീ പാർടി, സ്വയം ഭരണമില്ലായ്മ എന്നിവ കാരണം അമേരിക്കക്കാർ സ്വാതന്ത്ര്യം പ്രഖ്യാപിച്ചു.",
    },
  },
  {
    id: "h016",
    topic: "history",
    question: {
      en: "Name one important event during the American Revolution.",
      ml: "അമേരിക്കൻ വിപ്ലവത്തിൽ ഒരു പ്രധാന സംഭവം പറയുക.",
    },
    options: [
      { en: "Battle of Gettysburg", ml: "ഗെറ്റിസ്ബർഗ് യുദ്ധം" },
      { en: "Battle of Yorktown / Washington crossing the Delaware", ml: "യോർക്ക്ടൗൺ യുദ്ധം / ഡെലവെയർ കടക്കുന്ന വാഷിംഗ്ടൺ" },
      { en: "Bombing of Pearl Harbor", ml: "പേൾ ഹാർബർ ബോംബാക്രമണം" },
      { en: "September 11 attacks", ml: "സെപ്റ്റംബർ 11 ആക്രമണങ്ങൾ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Important Revolutionary events include Bunker Hill, Washington crossing the Delaware, Saratoga, Valley Forge, and Yorktown.",
      ml: "ബങ്കർ ഹിൽ, ഡെലവെയർ കടക്കുന്ന വാഷിംഗ്ടൺ, സരടോഗ, വാലി ഫോർജ്, യോർക്ക്ടൗൺ എന്നിവ പ്രധാന വിപ്ലവ സംഭവങ്ങളാണ്.",
    },
  },
  {
    id: "h017",
    topic: "history",
    question: {
      en: "Name five of the 13 original states.",
      ml: "13 യഥാർഥ സംസ്ഥാനങ്ങളിൽ അഞ്ചെണ്ണം പറയുക.",
    },
    options: [
      { en: "New York, Virginia, Pennsylvania, Massachusetts, Maryland", ml: "ന്യൂ യോർക്ക്, വിർജീനിയ, പെൻസിൽവേനിയ, മസ്സാച്ചുസെറ്റ്സ്, മേരിലാൻഡ്" },
      { en: "Texas, California, Florida, Ohio, Michigan", ml: "ടെക്സസ്, കാലിഫോർണിയ, ഫ്ലോറിഡ, ഒഹായോ, മിഷിഗൺ" },
      { en: "Alaska, Hawaii, Montana, Oregon, Washington", ml: "അലാസ്ക, ഹവായ്, മൊണ്ടാന, ഒറിഗൺ, വാഷിംഗ്ടൺ" },
      { en: "Colorado, Arizona, Nevada, Utah, Kansas", ml: "കൊളറാഡോ, ആരിസോണ, നെവാഡ, യൂട്ടാ, കൻസാസ്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The 13 original states included New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, and Georgia.",
      ml: "13 യഥാർഥ സംസ്ഥാനങ്ങളിൽ ന്യൂ ഹാംഷെയർ, മസ്സാച്ചുസെറ്റ്സ്, റോഡ് ഐലൻഡ്, കണക്ടിക്കട്, ന്യൂ യോർക്ക്, ന്യൂ ജേഴ്‌സി, പെൻസിൽവേനിയ, ഡെലവെയർ, മേരിലാൻഡ്, വിർജീനിയ, നോർത്ത് കരോലൈന, സൗത്ത് കരോലൈന, ജോർജിയ എന്നിവ ഉൾപ്പെടുന്നു.",
    },
  },
  {
    id: "h018",
    topic: "history",
    question: {
      en: "Name one writer of the Federalist Papers.",
      ml: "ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സിന്റെ ഒരു എഴുത്തുകാരൻ ആരാണ്?",
    },
    options: [
      { en: "Thomas Jefferson", ml: "തോമസ് ജെഫേഴ്‌സൺ" },
      { en: "James Madison / Alexander Hamilton / John Jay", ml: "ജെയിംസ് മാഡിസൺ / അലക്സാണ്ടർ ഹാമിൽടൺ / ജോൺ ജേ" },
      { en: "George Washington", ml: "ജോർജ് വാഷിംഗ്ടൺ" },
      { en: "Benjamin Franklin", ml: "ബെഞ്ചമിൻ ഫ്രാങ്ക്ലിൻ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "James Madison, Alexander Hamilton, and John Jay (Publius) wrote the Federalist Papers.",
      ml: "ജെയിംസ് മാഡിസൺ, അലക്സാണ്ടർ ഹാമിൽടൺ, ജോൺ ജേ (പബ്ലിയസ്) എന്നിവർ ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുതി.",
    },
  },
  {
    id: "h019",
    topic: "history",
    question: {
      en: "Why were the Federalist Papers important?",
      ml: "ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എന്തുകൊണ്ട് പ്രധാനമായിരുന്നു?",
    },
    options: [
      { en: "They declared war on Britain", ml: "ബ്രിട്ടനെതിരെ യുദ്ധം പ്രഖ്യാപിച്ചു" },
      { en: "They freed the slaves", ml: "അടിമകളെ മോചിപ്പിച്ചു" },
      { en: "They helped people understand and support the Constitution", ml: "ആളുകൾ ഭരണഘടന മനസ്സിലാക്കാനും പിന്തുണക്കാനും സഹായിച്ചു" },
      { en: "They created the Bill of Rights", ml: "അവകാശ ബിൽ സൃഷ്ടിച്ചു" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The Federalist Papers helped people understand the Constitution and supported its passage.",
      ml: "ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് ആളുകളെ ഭരണഘടന മനസ്സിലാക്കാൻ സഹായിക്കുകയും അതിന്റെ പാസാക്കലിനെ പിന്തുണക്കുകയും ചെയ്തു.",
    },
  },
  {
    id: "h020",
    topic: "history",
    question: {
      en: "Name one thing Benjamin Franklin is famous for.",
      ml: "ബെഞ്ചമിൻ ഫ്രാങ്ക്ലിൻ ഏതിനായി പ്രസിദ്ധനാണ്?",
    },
    options: [
      { en: "First President of the United States", ml: "അമേരിക്കയുടെ ആദ്യ പ്രസിഡന്റ്" },
      { en: "Writing the Constitution alone", ml: "ഭരണഘടന ഒറ്റയ്ക്ക് എഴുതി" },
      { en: "Founded first public libraries / First Postmaster General / Inventor / U.S. diplomat", ml: "ആദ്യ പൊതു ലൈബ്രറികൾ സ്ഥാപിച്ചു / ആദ്യ പോസ്റ്റ്മാസ്റ്റർ ജനറൽ / കണ്ടുപിടുത്തക്കാരൻ / നയതന്ത്രജ്ഞൻ" },
      { en: "Leading the Civil War", ml: "ആഭ്യന്തര യുദ്ധം നയിച്ചു" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Benjamin Franklin is famous for founding the first public libraries, being the first Postmaster General, helping write the Declaration of Independence, being an inventor, and serving as U.S. diplomat.",
      ml: "ആദ്യ പൊതു ലൈബ്രറികൾ സ്ഥാപിച്ചതിനും, ആദ്യ പോസ്റ്റ്മാസ്റ്റർ ജനറൽ, കണ്ടുപിടുത്തക്കാരൻ, നയതന്ത്രജ്ഞൻ എന്നീ നിലകളിലും ബെഞ്ചമിൻ ഫ്രാങ്ക്ലിൻ പ്രസിദ്ധനാണ്.",
    },
  },
  {
    id: "h021",
    topic: "history",
    question: {
      en: "Name one thing George Washington is famous for.",
      ml: "ജോർജ് വാഷിംഗ്ടൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
    },
    options: [
      { en: "First President / Father of Our Country / Continental Army General", ml: "ആദ്യ പ്രസിഡന്റ് / നമ്മുടെ രാജ്യത്തിന്റെ പിതാവ് / കോണ്ടിനെന്റൽ ആർമി ജനറൽ" },
      { en: "Writing the Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതി" },
      { en: "Freeing the slaves", ml: "അടിമകളെ മോചിപ്പിച്ചു" },
      { en: "Inventing electricity", ml: "വൈദ്യുതി കണ്ടുപിടിച്ചു" },
    ],
    correctIndex: 0,
    explanation: {
      en: "George Washington is famous for being the first President, Father of Our Country, and General of the Continental Army.",
      ml: "ആദ്യ പ്രസിഡന്റ്, നമ്മുടെ രാജ്യത്തിന്റെ പിതാവ്, കോണ്ടിനെന്റൽ ആർമി ജനറൽ എന്നീ നിലകളിൽ ജോർജ് വാഷിംഗ്ടൺ പ്രസിദ്ധനാണ്.",
    },
  },
  {
    id: "h022",
    topic: "history",
    question: {
      en: "Name one thing Thomas Jefferson is famous for.",
      ml: "തോമസ് ജഫേഴ്‌സൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
    },
    options: [
      { en: "Leading the Civil War", ml: "ആഭ്യന്തര യുദ്ധം നയിച്ചു" },
      { en: "Wrote the Declaration of Independence / Third President / Louisiana Purchase", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതി / മൂന്നാം പ്രസിഡന്റ് / ലൂസിയാന പർച്ചേസ്" },
      { en: "Founding the first bank", ml: "ആദ്യ ബാങ്ക് സ്ഥാപിച്ചു" },
      { en: "Being the first Chief Justice", ml: "ആദ്യ ചീഫ് ജസ്റ്റിസ്" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Thomas Jefferson wrote the Declaration of Independence, was the third President, made the Louisiana Purchase, and was the first Secretary of State.",
      ml: "തോമസ് ജഫേഴ്‌സൺ സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതി, മൂന്നാം പ്രസിഡന്റായിരുന്നു, ലൂസിയാന പർച്ചേസ് നടത്തി, ആദ്യ സ്റ്റേറ്റ് സെക്രട്ടറിയായിരുന്നു.",
    },
  },
  {
    id: "h023",
    topic: "history",
    question: {
      en: "Name one thing James Madison is famous for.",
      ml: "ജെയിംസ് മാഡിസൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
    },
    options: [
      { en: "Father of the Constitution / Fourth President / Federalist Papers writer", ml: "ഭരണഘടനയുടെ പിതാവ് / നാലാം പ്രസിഡന്റ് / ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുത്തുകാരൻ" },
      { en: "First President", ml: "ആദ്യ പ്രസിഡന്റ്" },
      { en: "Freeing the slaves", ml: "അടിമകളെ മോചിപ്പിച്ചു" },
      { en: "Discovering America", ml: "അമേരിക്ക കണ്ടെത്തി" },
    ],
    correctIndex: 0,
    explanation: {
      en: "James Madison is known as the Father of the Constitution, was the fourth President, and wrote the Federalist Papers.",
      ml: "ജെയിംസ് മാഡിസൺ ഭരണഘടനയുടെ പിതാവ് എന്ന് അറിയപ്പെടുന്നു, നാലാം പ്രസിഡന്റായിരുന്നു, ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുതി.",
    },
  },
  {
    id: "h024",
    topic: "history",
    question: {
      en: "Name one thing Alexander Hamilton is famous for.",
      ml: "അലക്സാണ്ടർ ഹാമിൽടൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
    },
    options: [
      { en: "Writing the Declaration of Independence", ml: "സ്വാതന്ത്ര്യ പ്രഖ്യാപനം എഴുതി" },
      { en: "Being the first President", ml: "ആദ്യ പ്രസിഡന്റ്" },
      { en: "First Secretary of Treasury / Federalist Papers writer / Established First Bank", ml: "ആദ്യ ട്രഷറി സെക്രട്ടറി / ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുത്തുകാരൻ / ആദ്യ ബാങ്ക് സ്ഥാപിച്ചു" },
      { en: "Leading the Civil War", ml: "ആഭ്യന്തര യുദ്ധം നയിച്ചു" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Alexander Hamilton was the first Secretary of the Treasury, a Federalist Papers writer, and established the First Bank of the United States.",
      ml: "അലക്സാണ്ടർ ഹാമിൽടൺ ആദ്യ ട്രഷറി സെക്രട്ടറിയും ഫെഡറലിസ്റ്റ് പേപ്പേഴ്സ് എഴുത്തുകാരനും അമേരിക്കയുടെ ആദ്യ ബാങ്ക് സ്ഥാപിച്ച വ്യക്തിയുമായിരുന്നു.",
    },
  },
  {
    id: "h025",
    topic: "history",
    question: {
      en: "Name one war fought by the United States in the 1800s.",
      ml: "1800-കളിൽ അമേരിക്ക നടത്തിയ ഒരു യുദ്ധം പറയുക.",
    },
    options: [
      { en: "War of 1812 / Mexican-American War / Civil War / Spanish-American War", ml: "1812-ലെ യുദ്ധം / മെക്സിക്കൻ-അമേരിക്കൻ യുദ്ധം / ആഭ്യന്തര യുദ്ധം / സ്പാനിഷ്-അമേരിക്കൻ യുദ്ധം" },
      { en: "World War I", ml: "ഒന്നാം ലോകയുദ്ധം" },
      { en: "Vietnam War", ml: "വിയറ്റ്നാം യുദ്ധം" },
      { en: "Korean War", ml: "കൊറിയൻ യുദ്ധം" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Wars in the 1800s include the War of 1812, Mexican-American War, Civil War, and Spanish-American War.",
      ml: "1800-കളിലെ യുദ്ധങ്ങളിൽ 1812-ലെ യുദ്ധം, മെക്സിക്കൻ-അമേരിക്കൻ യുദ്ധം, ആഭ്യന്തര യുദ്ധം, സ്പാനിഷ്-അമേരിക്കൻ യുദ്ധം എന്നിവ ഉൾപ്പെടുന്നു.",
    },
  },
  {
    id: "h026",
    topic: "history",
    question: {
      en: "Name one important event during the Civil War.",
      ml: "ആഭ്യന്തര യുദ്ധത്തിലെ ഒരു പ്രധാന സംഭവം പറയുക.",
    },
    options: [
      { en: "Boston Tea Party", ml: "ബോസ്റ്റൺ ടീ പാർടി" },
      { en: "Pearl Harbor attack", ml: "പേൾ ഹാർബർ ആക്രമണം" },
      { en: "Fort Sumter / Emancipation Proclamation / Gettysburg", ml: "ഫോർട്ട് സംടർ / എമൻസിപ്പേഷൻ പ്രൊക്ലമേഷൻ / ഗെറ്റിസ്ബർഗ്" },
      { en: "Signing the Constitution", ml: "ഭരണഘടന ഒപ്പിടൽ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Important Civil War events include Fort Sumter, the Emancipation Proclamation, Gettysburg, Sherman's March, and Appomattox.",
      ml: "ഫോർട്ട് സംടർ, എമൻസിപ്പേഷൻ പ്രൊക്ലമേഷൻ, ഗെറ്റിസ്ബർഗ്, ഷെർമന്റെ മാർച്ച്, അപ്പോമറ്റോക്സ് എന്നിവ ആഭ്യന്തര യുദ്ധത്തിലെ പ്രധാന സംഭവങ്ങളാണ്.",
    },
  },
  {
    id: "h027",
    topic: "history",
    question: {
      en: "Name one thing Abraham Lincoln is famous for.",
      ml: "ഏബ്രഹാം ലിങ്കൺ ഏതിനായി പ്രസിദ്ധനാണ്?",
    },
    options: [
      { en: "First President", ml: "ആദ്യ പ്രസിഡന്റ്" },
      { en: "Writing the Constitution", ml: "ഭരണഘടന എഴുതി" },
      { en: "Freed the slaves / Preserved the Union / 16th President / Gettysburg Address", ml: "അടിമകളെ മോചിപ്പിച്ചു / യൂണിയൻ സംരക്ഷിച്ചു / 16-ആം പ്രസിഡന്റ് / ഗെറ്റിസ്ബർഗ് അഡ്രസ്" },
      { en: "Louisiana Purchase", ml: "ലൂസിയാന പർച്ചേസ്" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Abraham Lincoln freed the slaves, preserved the Union, was the 16th President, and gave the Gettysburg Address.",
      ml: "ഏബ്രഹാം ലിങ്കൺ അടിമകളെ മോചിപ്പിച്ചു, യൂണിയൻ സംരക്ഷിച്ചു, 16-ആം പ്രസിഡന്റായിരുന്നു, ഗെറ്റിസ്ബർഗ് അഡ്രസ് നൽകി.",
    },
  },
  {
    id: "h028",
    topic: "history",
    question: {
      en: "What amendment defines citizenship by birth?",
      ml: "ജന്മനാ പൗരത്വം നിർവചിക്കുന്ന ഭേദഗതി ഏതാണ്?",
    },
    options: [
      { en: "1st Amendment", ml: "ഒന്നാം ഭേദഗതി" },
      { en: "14th Amendment", ml: "14-ആം ഭേദഗതി" },
      { en: "19th Amendment", ml: "19-ആം ഭേദഗതി" },
      { en: "22nd Amendment", ml: "22-ആം ഭേദഗതി" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The 14th Amendment defines citizenship by birth.",
      ml: "14-ആം ഭേദഗതി ജന്മനാ പൗരത്വം നിർവചിക്കുന്നു.",
    },
  },
  {
    id: "h029",
    topic: "history",
    question: {
      en: "When did all men get the right to vote?",
      ml: "എല്ലാ പുരുഷൻമാർക്കും വോട്ടവകാശം ലഭിച്ചത് എപ്പോൾ?",
    },
    options: [
      { en: "1776", ml: "1776" },
      { en: "After the Civil War / 15th Amendment / 1870", ml: "ആഭ്യന്തര യുദ്ധത്തിന് ശേഷം / 15-ആം ഭേദഗതി / 1870" },
      { en: "1920", ml: "1920" },
      { en: "1964", ml: "1964" },
    ],
    correctIndex: 1,
    explanation: {
      en: "All men got the right to vote after the Civil War, during Reconstruction, with the 15th Amendment in 1870.",
      ml: "ആഭ്യന്തര യുദ്ധത്തിന് ശേഷം, പുനർനിർമ്മാണ കാലത്ത്, 1870-ലെ 15-ആം ഭേദഗതിയോടെ എല്ലാ പുരുഷൻമാർക്കും വോട്ടവകാശം ലഭിച്ചു.",
    },
  },
  {
    id: "h030",
    topic: "history",
    question: {
      en: "Name one leader of the women's rights movement in the 1800s.",
      ml: "1800-കളിലെ സ്ത്രീ അവകാശ പ്രസ്ഥാനത്തിന്റെ ഒരു നേതാവ് ആരാണ്?",
    },
    options: [
      { en: "Susan B. Anthony", ml: "സൂസൻ ബി. ആന്തണി" },
      { en: "Rosa Parks", ml: "റോസ പാർക്ക്സ്" },
      { en: "Harriet Beecher Stowe", ml: "ഹാരിയറ്റ് ബീച്ചർ സ്റ്റോ" },
      { en: "Eleanor Roosevelt", ml: "എലീനോർ റൂസ്‌വെൽറ്റ്" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Women's rights leaders of the 1800s include Susan B. Anthony, Elizabeth Cady Stanton, Sojourner Truth, Harriet Tubman, and Lucretia Mott.",
      ml: "1800-കളിലെ സ്ത്രീ അവകാശ നേതാക്കളിൽ സൂസൻ ബി. ആന്തണി, എലിസബത്ത് കേഡി സ്റ്റാന്റൺ, സോജോർണർ ട്രൂത്ത്, ഹാരിയറ്റ് ടബ്മൻ, ലൂക്രേഷ്യ മോട്ട് എന്നിവർ ഉൾപ്പെടുന്നു.",
    },
  },
  {
    id: "h031",
    topic: "history",
    question: {
      en: "Name one war fought by the United States in the 1900s.",
      ml: "1900-കളിൽ അമേരിക്ക നടത്തിയ ഒരു യുദ്ധം പറയുക.",
    },
    options: [
      { en: "Civil War", ml: "ആഭ്യന്തര യുദ്ധം" },
      { en: "Revolutionary War", ml: "വിപ്ലവ യുദ്ധം" },
      { en: "World War I / World War II / Korean War / Vietnam War / Gulf War", ml: "ഒന്നാം ലോകയുദ്ധം / രണ്ടാം ലോകയുദ്ധം / കൊറിയൻ യുദ്ധം / വിയറ്റ്നാം യുദ്ധം / ഗൾഫ് യുദ്ധം" },
      { en: "War of 1812", ml: "1812-ലെ യുദ്ധം" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Wars in the 1900s include World War I, World War II, Korean War, Vietnam War, and the Gulf War.",
      ml: "1900-കളിലെ യുദ്ധങ്ങളിൽ ഒന്നാം ലോകയുദ്ധം, രണ്ടാം ലോകയുദ്ധം, കൊറിയൻ യുദ്ധം, വിയറ്റ്നാം യുദ്ധം, ഗൾഫ് യുദ്ധം എന്നിവ ഉൾപ്പെടുന്നു.",
    },
  },
  {
    id: "h032",
    topic: "history",
    question: {
      en: "Why did the United States enter World War I?",
      ml: "അമേരിക്ക ഒന്നാം ലോകയുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
    },
    options: [
      { en: "Because of Pearl Harbor", ml: "പേൾ ഹാർബർ കാരണം" },
      { en: "To stop communism", ml: "കമ്മ്യൂണിസം തടയാൻ" },
      { en: "German attacks on U.S. ships / To support the Allies", ml: "അമേരിക്കൻ കപ്പലുകൾക്ക് നേരെ ജർമൻ ആക്രമണങ്ങൾ / സഖ്യകക്ഷികളെ പിന്തുണക്കാൻ" },
      { en: "To gain territory", ml: "പ്രദേശം നേടാൻ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The U.S. entered WWI because of German attacks on American ships and to support the Allies.",
      ml: "അമേരിക്കൻ കപ്പലുകൾക്ക് നേരെയുള്ള ജർമൻ ആക്രമണങ്ങളും സഖ്യകക്ഷികളെ പിന്തുണക്കാനും അമേരിക്ക ഒന്നാം ലോകയുദ്ധത്തിൽ പ്രവേശിച്ചു.",
    },
  },
  {
    id: "h033",
    topic: "history",
    question: {
      en: "What was the Great Depression?",
      ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം (Great Depression) എന്തായിരുന്നു?",
    },
    options: [
      { en: "A major war", ml: "ഒരു വലിയ യുദ്ധം" },
      { en: "A long economic recession", ml: "ദീർഘകാല സാമ്പത്തിക മാന്ദ്യം" },
      { en: "A natural disaster", ml: "ഒരു പ്രകൃതി ദുരന്തം" },
      { en: "A political movement", ml: "ഒരു രാഷ്ട്രീയ പ്രസ്ഥാനം" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The Great Depression was a long economic recession.",
      ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം ഒരു ദീർഘകാല സാമ്പത്തിക മാന്ദ്യമായിരുന്നു.",
    },
  },
  {
    id: "h034",
    topic: "history",
    question: {
      en: "When did the Great Depression start?",
      ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം ആരംഭിച്ചത് എപ്പോൾ?",
    },
    options: [
      { en: "1929", ml: "1929" },
      { en: "1939", ml: "1939" },
      { en: "1919", ml: "1919" },
      { en: "1941", ml: "1941" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The Great Depression started in 1929.",
      ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം 1929-ൽ ആരംഭിച്ചു.",
    },
  },
  {
    id: "h035",
    topic: "history",
    question: {
      en: "Why did the United States enter World War II?",
      ml: "അമേരിക്ക രണ്ടാം ലോകയുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
    },
    options: [
      { en: "Pearl Harbor / Support the Allies / Oppose the Axis powers", ml: "പേൾ ഹാർബർ / സഖ്യകക്ഷികളെ പിന്തുണക്കാൻ / ആക്സിസ് ശക്തികളെ എതിർക്കാൻ" },
      { en: "To stop communism", ml: "കമ്മ്യൂണിസം തടയാൻ" },
      { en: "Because of the Great Depression", ml: "മഹാ സാമ്പത്തിക മാന്ദ്യം കാരണം" },
      { en: "To gain territory in Europe", ml: "യൂറോപ്പിൽ പ്രദേശം നേടാൻ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. entered WWII because of the attack on Pearl Harbor, to support the Allies, and to oppose the Axis powers.",
      ml: "പേൾ ഹാർബർ ആക്രമണം, സഖ്യകക്ഷികളെ പിന്തുണക്കാൻ, ആക്സിസ് ശക്തികളെ എതിർക്കാൻ എന്നിവ കാരണം അമേരിക്ക രണ്ടാം ലോകയുദ്ധത്തിൽ പ്രവേശിച്ചു.",
    },
  },
  {
    id: "h036",
    topic: "history",
    question: {
      en: "Name one thing Dwight Eisenhower is famous for.",
      ml: "ഡ്വൈറ്റ് ഐസൻഹോവർ ഏതിനായി പ്രസിദ്ധനാണ്?",
    },
    options: [
      { en: "Writing the Constitution", ml: "ഭരണഘടന എഴുതി" },
      { en: "WWII General / 34th President / Interstate Highway System", ml: "രണ്ടാം ലോകയുദ്ധ ജനറൽ / 34-ആം പ്രസിഡന്റ് / ഇന്റർസ്റ്റേറ്റ് ഹൈവേ സിസ്റ്റം" },
      { en: "Freeing the slaves", ml: "അടിമകളെ മോചിപ്പിച്ചു" },
      { en: "First President", ml: "ആദ്യ പ്രസിഡന്റ്" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Eisenhower was a WWII General, the 34th President, and created the Interstate Highway System.",
      ml: "ഐസൻഹോവർ രണ്ടാം ലോകയുദ്ധ ജനറലും 34-ആം പ്രസിഡന്റും ഇന്റർസ്റ്റേറ്റ് ഹൈവേ സിസ്റ്റം സൃഷ്ടിച്ച വ്യക്തിയുമായിരുന്നു.",
    },
  },
  {
    id: "h037",
    topic: "history",
    question: {
      en: "Who was the main rival of the United States during the Cold War?",
      ml: "ശീതയുദ്ധ കാലത്ത് അമേരിക്കയുടെ പ്രധാന എതിരാളി ആരായിരുന്നു?",
    },
    options: [
      { en: "China", ml: "ചൈന" },
      { en: "Germany", ml: "ജർമ്മനി" },
      { en: "Soviet Union", ml: "സോവിയറ്റ് യൂണിയൻ" },
      { en: "Japan", ml: "ജപ്പാൻ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The Soviet Union was the main rival of the United States during the Cold War.",
      ml: "ശീതയുദ്ധ കാലത്ത് സോവിയറ്റ് യൂണിയൻ ആയിരുന്നു അമേരിക്കയുടെ പ്രധാന എതിരാളി.",
    },
  },
  {
    id: "h038",
    topic: "history",
    question: {
      en: "What was the main concern of the United States during the Cold War?",
      ml: "ശീതയുദ്ധ കാലത്ത് അമേരിക്കയുടെ പ്രധാന ആശങ്ക എന്തായിരുന്നു?",
    },
    options: [
      { en: "Immigration", ml: "കുടിയേറ്റം" },
      { en: "Communism", ml: "കമ്മ്യൂണിസം" },
      { en: "Global warming", ml: "ആഗോള താപനം" },
      { en: "Trade deficits", ml: "വ്യാപാര കമ്മി" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The main concern during the Cold War was communism (and nuclear war).",
      ml: "ശീതയുദ്ധ കാലത്തെ പ്രധാന ആശങ്ക കമ്മ്യൂണിസം (ആണവ യുദ്ധവും) ആയിരുന്നു.",
    },
  },
  {
    id: "h039",
    topic: "history",
    question: {
      en: "Why did the United States enter the Korean War?",
      ml: "അമേരിക്ക കൊറിയൻ യുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
    },
    options: [
      { en: "To gain territory", ml: "പ്രദേശം നേടാൻ" },
      { en: "Because of Pearl Harbor", ml: "പേൾ ഹാർബർ കാരണം" },
      { en: "To stop the spread of communism", ml: "കമ്മ്യൂണിസത്തിന്റെ വ്യാപനം തടയാൻ" },
      { en: "To support Britain", ml: "ബ്രിട്ടനെ പിന്തുണക്കാൻ" },
    ],
    correctIndex: 2,
    explanation: {
      en: "The U.S. entered the Korean War to stop the spread of communism.",
      ml: "കമ്മ്യൂണിസത്തിന്റെ വ്യാപനം തടയാൻ അമേരിക്ക കൊറിയൻ യുദ്ധത്തിൽ പ്രവേശിച്ചു.",
    },
  },
  {
    id: "h040",
    topic: "history",
    question: {
      en: "Why did the United States enter the Vietnam War?",
      ml: "അമേരിക്ക വിയറ്റ്നാം യുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
    },
    options: [
      { en: "To stop the spread of communism", ml: "കമ്മ്യൂണിസത്തിന്റെ വ്യാപനം തടയാൻ" },
      { en: "Because of Pearl Harbor", ml: "പേൾ ഹാർബർ കാരണം" },
      { en: "To support Britain", ml: "ബ്രിട്ടനെ പിന്തുണക്കാൻ" },
      { en: "To oppose Germany", ml: "ജർമ്മനിയെ എതിർക്കാൻ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. entered the Vietnam War to stop the spread of communism.",
      ml: "കമ്മ്യൂണിസത്തിന്റെ വ്യാപനം തടയാൻ അമേരിക്ക വിയറ്റ്നാം യുദ്ധത്തിൽ പ്രവേശിച്ചു.",
    },
  },
  {
    id: "h041",
    topic: "history",
    question: {
      en: "What did the civil rights movement do?",
      ml: "പൗരാവകാശ പ്രസ്ഥാനം എന്ത് ചെയ്തു?",
    },
    options: [
      { en: "Ended racial discrimination", ml: "വംശീയ വിവേചനം അവസാനിപ്പിച്ചു" },
      { en: "Created the Constitution", ml: "ഭരണഘടന സൃഷ്ടിച്ചു" },
      { en: "Ended the Cold War", ml: "ശീതയുദ്ധം അവസാനിപ്പിച്ചു" },
      { en: "Won World War II", ml: "രണ്ടാം ലോകയുദ്ധം ജയിച്ചു" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The civil rights movement fought to end racial discrimination.",
      ml: "വംശീയ വിവേചനം അവസാനിപ്പിക്കാൻ പൗരാവകാശ പ്രസ്ഥാനം പോരാടി.",
    },
  },
  {
    id: "h042",
    topic: "history",
    question: {
      en: "Name one thing Martin Luther King Jr. is famous for.",
      ml: "മാർടിൻ ലൂഥർ കിംഗ് ജൂനിയർ ഏതിനായി പ്രസിദ്ധനാണ്?",
    },
    options: [
      { en: "Being President", ml: "പ്രസിഡന്റ് ആയിരുന്നു" },
      { en: "Fought for civil rights / Worked for equality", ml: "പൗരാവകാശങ്ങൾക്കായി പോരാടി / സമത്വത്തിനായി പ്രവർത്തിച്ചു" },
      { en: "Inventing the telephone", ml: "ടെലിഫോൺ കണ്ടുപിടിച്ചു" },
      { en: "Winning the Civil War", ml: "ആഭ്യന്തര യുദ്ധം ജയിച്ചു" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Martin Luther King Jr. fought for civil rights and worked for equality for all Americans.",
      ml: "മാർടിൻ ലൂഥർ കിംഗ് ജൂനിയർ പൗരാവകാശങ്ങൾക്കായി പോരാടുകയും എല്ലാ അമേരിക്കക്കാർക്കും സമത്വത്തിനായി പ്രവർത്തിക്കുകയും ചെയ്തു.",
    },
  },
  {
    id: "h043",
    topic: "history",
    question: {
      en: "Why did the United States enter the Persian Gulf War?",
      ml: "അമേരിക്ക പേർഷ്യൻ ഗൾഫ് യുദ്ധത്തിൽ എന്തുകൊണ്ട് പ്രവേശിച്ചു?",
    },
    options: [
      { en: "To remove Iraqi forces from Kuwait", ml: "കുവൈത്തിൽ നിന്ന് ഇറാഖ് സേനയെ നീക്കം ചെയ്യാൻ" },
      { en: "To stop communism", ml: "കമ്മ്യൂണിസം തടയാൻ" },
      { en: "Because of 9/11", ml: "9/11 കാരണം" },
      { en: "To support Britain", ml: "ബ്രിട്ടനെ പിന്തുണക്കാൻ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "The U.S. entered the Persian Gulf War to remove Iraqi forces from Kuwait.",
      ml: "കുവൈത്തിൽ നിന്ന് ഇറാഖ് സേനയെ നീക്കം ചെയ്യാൻ അമേരിക്ക പേർഷ്യൻ ഗൾഫ് യുദ്ധത്തിൽ പ്രവേശിച്ചു.",
    },
  },
  {
    id: "h044",
    topic: "history",
    question: {
      en: "Name one U.S. conflict after September 11, 2001.",
      ml: "2001 സെപ്റ്റംബർ 11-ന് ശേഷമുള്ള ഒരു അമേരിക്കൻ സംഘർഷം പറയുക.",
    },
    options: [
      { en: "Vietnam War", ml: "വിയറ്റ്നാം യുദ്ധം" },
      { en: "Korean War", ml: "കൊറിയൻ യുദ്ധം" },
      { en: "War on Terror / War in Afghanistan / War in Iraq", ml: "ഭീകരതക്കെതിരായ യുദ്ധം / അഫ്ഗാനിസ്ഥാനിലെ യുദ്ധം / ഇറാഖിലെ യുദ്ധം" },
      { en: "Gulf War", ml: "ഗൾഫ് യുദ്ധം" },
    ],
    correctIndex: 2,
    explanation: {
      en: "After 9/11, the U.S. fought the War on Terror, the War in Afghanistan, and the War in Iraq.",
      ml: "9/11-ന് ശേഷം അമേരിക്ക ഭീകരതക്കെതിരായ യുദ്ധം, അഫ്ഗാനിസ്ഥാനിലെ യുദ്ധം, ഇറാഖിലെ യുദ്ധം എന്നിവ നടത്തി.",
    },
  },
  {
    id: "h045",
    topic: "history",
    question: {
      en: "Name one American Indian tribe in the United States.",
      ml: "അമേരിക്കൻ ഐക്യനാടുകളിലെ ഒരു അമേരിക്കൻ ഇന്ത്യൻ ഗോത്രം പറയുക.",
    },
    options: [
      { en: "Cherokee / Navajo / Sioux / Apache / Hopi", ml: "ചെറോക്കി / നവാജോ / സിയൂക്സ് / അപ്പാഷെ / ഹോപ്പി" },
      { en: "Aztec", ml: "ആസ്ടെക്" },
      { en: "Inca", ml: "ഇൻക" },
      { en: "Maya", ml: "മായ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "American Indian tribes include Cherokee, Navajo, Sioux, Apache, Hopi, and many more.",
      ml: "ചെറോക്കി, നവാജോ, സിയൂക്സ്, അപ്പാഷെ, ഹോപ്പി എന്നിവ അമേരിക്കൻ ഇന്ത്യൻ ഗോത്രങ്ങളാണ്.",
    },
  },
  {
    id: "h046",
    topic: "history",
    question: {
      en: "Name one American innovation.",
      ml: "ഒരു അമേരിക്കൻ കണ്ടുപിടുത്തം പറയുക.",
    },
    options: [
      { en: "The printing press", ml: "പ്രിന്റിംഗ് പ്രസ്" },
      { en: "Light bulb / Airplane / Assembly line / Moon landing", ml: "ബൾബ് / വിമാനം / അസംബ്ലി ലൈൻ / ചന്ദ്ര ലാൻഡിംഗ്" },
      { en: "The wheel", ml: "ചക്രം" },
      { en: "Paper", ml: "പേപ്പർ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "American innovations include the light bulb, automobile, skyscrapers, airplane, assembly line, moon landing, and integrated circuit.",
      ml: "ബൾബ്, ഓട്ടോമൊബൈൽ, ആകാശഗോപുരങ്ങൾ, വിമാനം, അസംബ്ലി ലൈൻ, ചന്ദ്ര ലാൻഡിംഗ്, ഇന്റഗ്രേറ്റഡ് സർക്യൂട്ട് എന്നിവ അമേരിക്കൻ കണ്ടുപിടുത്തങ്ങളാണ്.",
    },
  },
  {
    id: "s008",
    topic: "symbols",
    question: {
      en: "Where is the Statue of Liberty?",
      ml: "സ്വാതന്ത്ര്യ പ്രതിമ (Statue of Liberty) എവിടെയാണ്?",
    },
    options: [
      { en: "Washington, D.C.", ml: "വാഷിംഗ്ടൺ ഡി.സി." },
      { en: "New York Harbor / Liberty Island", ml: "ന്യൂ യോർക്ക് ഹാർബർ / ലിബർടി ഐലൻഡ്" },
      { en: "Los Angeles", ml: "ലോസ് ഏഞ്ചലസ്" },
      { en: "Philadelphia", ml: "ഫിലാഡൽഫിയ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The Statue of Liberty is in New York Harbor on Liberty Island.",
      ml: "സ്വാതന്ത്ര്യ പ്രതിമ ന്യൂ യോർക്ക് ഹാർബറിലെ ലിബർടി ഐലൻഡിലാണ്.",
    },
  },
  {
    id: "s009",
    topic: "symbols",
    question: {
      en: "Name three national holidays.",
      ml: "മൂന്ന് ദേശീയ അവധി ദിനങ്ങൾ പറയുക.",
    },
    options: [
      { en: "Thanksgiving, Christmas, Independence Day", ml: "താങ്ക്സ്ഗിവിംഗ്, ക്രിസ്‌മസ്, ഇൻഡിപ്പൻഡൻസ് ഡേ" },
      { en: "Valentine's Day, Easter, Halloween", ml: "വാലന്റൈൻസ് ഡേ, ഈസ്റ്റർ, ഹാലോവീൻ" },
      { en: "Super Bowl Sunday, Black Friday, April Fools", ml: "സൂപ്പർ ബൗൾ ഞായർ, ബ്ലാക്ക് ഫ്രൈഡേ, ഏപ്രിൽ ഫൂൾ" },
      { en: "Mother's Day, Father's Day, Groundhog Day", ml: "മദേഴ്‌സ് ഡേ, ഫാദേഴ്‌സ് ഡേ, ഗ്രൗണ്ട്ഹോഗ് ഡേ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "National holidays include New Year's Day, Martin Luther King Jr. Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas, and Juneteenth.",
      ml: "ദേശീയ അവധി ദിനങ്ങളിൽ ന്യൂ ഇയർ ഡേ, MLK ജൂനിയർ ഡേ, പ്രസിഡന്റ്സ് ഡേ, മെമ്മോറിയൽ ഡേ, ഇൻഡിപ്പൻഡൻസ് ഡേ, ലേബർ ഡേ, കൊളംബസ് ഡേ, വെറ്ററൻസ് ഡേ, താങ്ക്സ്ഗിവിംഗ്, ക്രിസ്‌മസ്, ജൂൺടീൻത്ത് എന്നിവ ഉൾപ്പെടുന്നു.",
    },
  },
  {
    id: "s010",
    topic: "symbols",
    question: {
      en: "What is Veterans Day?",
      ml: "വെറ്ററൻസ് ഡേ എന്താണ്?",
    },
    options: [
      { en: "A day to celebrate independence", ml: "സ്വാതന്ത്ര്യം ആഘോഷിക്കുന്ന ദിനം" },
      { en: "A day to honor soldiers who died in service", ml: "സേവനത്തിൽ മരിച്ച സൈനികരെ ആദരിക്കുന്ന ദിനം" },
      { en: "A day to honor all who have served in the military", ml: "സൈന്യത്തിൽ സേവിച്ച എല്ലാവരെയും ആദരിക്കുന്ന ദിനം" },
      { en: "Presidents' birthday celebration", ml: "പ്രസിഡന്റുമാരുടെ ജന്മദിന ആഘോഷം" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Veterans Day honors all people who have served in the U.S. military.",
      ml: "അമേരിക്കൻ സൈന്യത്തിൽ സേവിച്ച എല്ലാവരെയും ആദരിക്കുന്ന ദിനമാണ് വെറ്ററൻസ് ഡേ.",
    },
  },
];
