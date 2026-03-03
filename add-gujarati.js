// Script to add Gujarati translations to all questions in questions.ts
const fs = require('fs');

let src = fs.readFileSync('data/questions.ts', 'utf8');

// Complete English → Gujarati translation map for all option/question/explanation texts
const translations = {
  // === GOVERNMENT QUESTIONS ===
  // g001
  "What is the supreme law of the land?": "દેશનો સર્વોચ્ચ કાયદો શું છે?",
  "(U.S.) Constitution": "(યુ.એસ.) બંધારણ",
  "Declaration of Independence": "સ્વતંત્રતાનો ઘોષણાપત્ર",
  "Bill of Rights": "અધિકારોનું વિધેયક",
  "Federal Law": "સંઘીય કાયદો",
  "The U.S. Constitution is the supreme law of the land.": "યુ.એસ. બંધારણ એ દેશનો સર્વોચ્ચ કાયદો છે.",
  
  // g002
  "What is the form of government of the United States?": "યુનાઈટેડ સ્ટેટ્સની સરકારનું સ્વરૂપ શું છે?",
  "Republic": "પ્રજાસત્તાક",
  "Monarchy": "રાજાશાહી",
  "Dictatorship": "સરમુખત્યારશાહી",
  "Direct Democracy": "સીધી લોકશાહી",
  "The United States is a constitution-based federal republic and representative democracy.": "યુનાઈટેડ સ્ટેટ્સ એ બંધારણ આધારિત સંઘીય પ્રજાસત્તાક અને પ્રતિનિધિ લોકશાહી છે.",
  
  // g003
  "How many amendments does the U.S. Constitution have?": "યુ.એસ. બંધારણમાં કેટલા સુધારા છે?",
  "Twenty-seven (27)": "સત્તાવીસ (27)",
  "Ten (10)": "દસ (10)",
  "Twenty-five (25)": "પચ્ચીસ (25)",
  "Thirty-three (33)": "તેત્રીસ (33)",
  "The U.S. Constitution has 27 amendments.": "યુ.એસ. બંધારણમાં 27 સુધારા છે.",
  
  // g004
  "What is the economic system of the United States?": "યુનાઈટેડ સ્ટેટ્સની આર્થિક વ્યવસ્થા શું છે?",
  "Capitalism / Free market economy": "મૂડીવાદ / મુક્ત બજાર અર્થતંત્ર",
  "Communism": "સામ્યવાદ",
  "Socialism": "સમાજવાદ",
  "Mixed Economy": "મિશ્ર અર્થતંત્ર",
  "The U.S. has a capitalist (free market) economy.": "યુ.એસ. પાસે મૂડીવાદી (મુક્ત બજાર) અર્થતંત્ર છે.",
  
  // g005
  "What is the rule of law?": "કાયદાનું શાસન શું છે?",
  "Everyone must follow the law, including leaders and government": "નેતાઓ અને સરકાર સહિત દરેકે કાયદાનું પાલન કરવું જોઈએ",
  "Only citizens must follow the law": "માત્ર નાગરિકોએ કાયદાનું પાલન કરવું જોઈએ",
  "The president can ignore laws": "રાષ્ટ્રપતિ કાયદાની અવગણના કરી શકે છે",
  "Laws only apply in Washington D.C.": "કાયદા માત્ર વોશિંગ્ટન ડી.સી.માં લાગુ પડે છે",
  "The rule of law means everyone must follow the law — leaders, government, and citizens alike.": "કાયદાનું શાસન એટલે કે દરેકે કાયદાનું પાલન કરવું જોઈએ — નેતાઓ, સરકાર અને નાગરિકો સમાન.",
  
  // g006
  "What are the three branches of government?": "સરકારની ત્રણ શાખાઓ કઈ છે?",
  "Legislative, Executive, Judicial": "વિધાનસભા, કારોબારી, ન્યાયિક",
  "Federal, State, Local": "સંઘીય, રાજ્ય, સ્થાનિક",
  "Army, Navy, Air Force": "સેના, નૌકાદળ, વાયુસેના",
  "President, Congress, Courts": "રાષ્ટ્રપતિ, કોંગ્રેસ, અદાલતો",
  "The three branches are Legislative (Congress), Executive (President), and Judicial (Courts).": "ત્રણ શાખાઓ છે વિધાનસભા (કોંગ્રેસ), કારોબારી (રાષ્ટ્રપતિ), અને ન્યાયિક (અદાલતો).",
  
  // g007
  "How many U.S. Senators are there?": "કેટલા યુ.એસ. સેનેટર છે?",
  "One hundred (100)": "સો (100)",
  "Fifty (50)": "પચાસ (50)",
  "Four hundred thirty-five (435)": "ચારસો પાંત્રીસ (435)",
  "Fifty-two (52)": "બાવન (52)",
  "There are 100 U.S. Senators — two from each of the 50 states.": "100 યુ.એસ. સેનેટર છે — 50 રાજ્યોમાંથી દરેકમાંથી બે.",
  
  // g008
  "We elect a U.S. Senator for how many years?": "આપણે યુ.એસ. સેનેટરને કેટલા વર્ષ માટે ચૂંટીએ છીએ?",
  "Six (6)": "છ (6)",
  "Four (4)": "ચાર (4)",
  "Two (2)": "બે (2)",
  "Eight (8)": "આઠ (8)",
  "U.S. Senators serve 6-year terms.": "યુ.એસ. સેનેટર 6 વર્ષની મુદત માટે સેવા આપે છે.",
  
  // g009
  "How many voting members does the House of Representatives have?": "હાઉસ ઓફ રિપ્રેઝન્ટેટિવ્સમાં કેટલા મતદાન સભ્યો છે?",
  "Four hundred thirty-five (435)": "ચારસો પાંત્રીસ (435)",
  "One hundred (100)": "સો (100)",
  "Five hundred (500)": "પાંચસો (500)",
  "Two hundred (200)": "બસો (200)",
  "The House has 435 voting members.": "હાઉસમાં 435 મતદાન સભ્યો છે.",
  
  // g010
  "We elect a U.S. Representative for how many years?": "આપણે યુ.એસ. પ્રતિનિધિને કેટલા વર્ષ માટે ચૂંટીએ છીએ?",
  "The House serves 2-year terms.": "હાઉસના સભ્યો 2 વર્ષની મુદત માટે સેવા આપે છે.",
  
  // g011
  "What does the President's Cabinet do?": "રાષ્ટ્રપતિનું કેબિનેટ શું કરે છે?",
  "Advises the President": "રાષ્ટ્રપતિને સલાહ આપે છે",
  "Makes new laws": "નવા કાયદા બનાવે છે",
  "Elects the President": "રાષ્ટ્રપતિને ચૂંટે છે",
  "Commands the military": "સેનાની કમાન્ડ કરે છે",
  "The Cabinet advises the President on important matters.": "મહત્વના મામલાઓ પર કેબિનેટ રાષ્ટ્રપતિને સલાહ આપે છે.",
  
  // g012
  "Who is the Commander in Chief of the military?": "સેનાના કમાન્ડર ઇન ચીફ કોણ છે?",
  "The President": "રાષ્ટ્રપતિ",
  "The Vice President": "ઉપરાષ્ટ્રપતિ",
  "Secretary of Defense": "સંરક્ષણ સચિવ",
  "Chairman of the Joint Chiefs": "જોઈન્ટ ચીફ્સના અધ્યક્ષ",
  "The President is the Commander in Chief of the U.S. military.": "રાષ્ટ્રપતિ યુ.એસ. સેનાના કમાન્ડર ઇન ચીફ છે.",
  
  // g013
  "Who signs bills to become laws?": "બિલો પર હસ્તાક્ષર કરીને કાયદો કોણ બનાવે છે?",
  "The President signs bills into law.": "રાષ્ટ્રપતિ બિલો પર હસ્તાક્ષર કરીને કાયદો બનાવે છે.",
  
  // g014
  "Who vetoes bills?": "બિલોને કોણ વીટો કરે છે?",
  "Speaker of the House": "હાઉસના સ્પીકર",
  "Chief Justice": "મુખ્ય ન્યાયાધીશ",
  "The President can veto (reject) bills passed by Congress.": "રાષ્ટ્રપતિ કોંગ્રેસ દ્વારા પસાર કરાયેલા બિલોને વીટો (નકારી) કરી શકે છે.",
  
  // g015
  "What does the judicial branch do?": "ન્યાયિક શાખા શું કરે છે?",
  "Reviews and explains laws; decides if a law is constitutional": "કાયદાઓની સમીક્ષા કરે છે અને સમજાવે છે; નક્કી કરે છે કે કાયદો બંધારણીય છે કે નહીં",
  "Makes laws": "કાયદા બનાવે છે",
  "Enforces laws": "કાયદાનું અમલીકરણ કરે છે",
  "Commands the military": "સેનાની કમાન્ડ કરે છે",
  "The judicial branch reviews laws, explains laws, resolves disputes, and decides if laws are constitutional.": "ન્યાયિક શાખા કાયદાઓની સમીક્ષા કરે છે, સમજાવે છે, વિવાદો ઉકેલે છે, અને નક્કી કરે છે કે કાયદા બંધારણીય છે કે નહીં.",
  
  // === RIGHTS QUESTIONS ===
  // r001
  "What is freedom of religion?": "ધર્મની સ્વતંત્રતા શું છે?",
  "You can practice any religion, or not practice a religion": "તમે કોઈપણ ધર્મનું પાલન કરી શકો છો, અથવા કોઈ ધર્મનું પાલન ન કરી શકો",
  "You must follow the official state religion": "તમારે સત્તાવાર રાજ્ય ધર્મનું પાલન કરવું જોઈએ",
  "Religion is not allowed in America": "અમેરિકામાં ધર્મની મંજૂરી નથી",
  "Only Christianity is allowed": "માત્ર ખ્રિસ્તી ધર્મની મંજૂરી છે",
  "Freedom of religion means you can practice any religion or none at all.": "ધર્મની સ્વતંત્રતાનો અર્થ છે કે તમે કોઈપણ ધર્મનું પાલન કરી શકો છો અથવા કોઈનું પણ નહીં.",
  
  // r002
  "What are two rights of everyone living in the United States?": "યુનાઈટેડ સ્ટેટ્સમાં રહેતા દરેક વ્યક્તિના બે અધિકારો શું છે?",
  "Freedom of speech and freedom of religion": "અભિવ્યક્તિની સ્વતંત્રતા અને ધર્મની સ્વતંત્રતા",
  "Right to vote and right to drive": "મતદાનનો અધિકાર અને વાહન ચલાવવાનો અધિકાર",
  "Right to free housing and food": "મફત આવાસ અને ખોરાકનો અધિકાર",
  "Right to a government job": "સરકારી નોકરીનો અધિકાર",
  "Everyone in the U.S. has freedom of speech and freedom of religion, among other rights.": "યુ.એસ.માં દરેક વ્યક્તિને અભિવ્યક્તિની સ્વતંત્રતા અને ધર્મની સ્વતંત્રતા, અન્ય અધિકારો સહિત છે.",

  // r003
  "What is the responsibility of citizens?": "નાગરિકોની જવાબદારી શું છે?",
  "Serve on a jury and vote in federal elections": "જ્યુરી પર સેવા આપવી અને સંઘીય ચૂંટણીઓમાં મતદાન કરવું",
  "Pay taxes only": "માત્ર કર ચૂકવવો",
  "Join the military": "સેનામાં જોડાવું",
  "Speak English at all times": "હંમેશા અંગ્રેજી બોલવું",
  "Citizens have important responsibilities including serving on a jury and voting in federal elections.": "નાગરિકોની મહત્વની જવાબદારીઓ છે જેમાં જ્યુરી પર સેવા આપવી અને સંઘીય ચૂંટણીઓમાં મતદાન કરવું શામેલ છે.",
  
  // r004
  "What is one right only for U.S. citizens?": "યુ.એસ. નાગરિકો માટે જ એક અધિકાર શું છે?",
  "Vote in a federal election": "સંઘીય ચૂંટણીમાં મતદાન કરવું",
  "Freedom of speech": "અભિવ્યક્તિની સ્વતંત્રતા",
  "Right to work": "કામ કરવાનો અધિકાર",
  "Freedom of religion": "ધર્મની સ્વતંત્રતા",
  "Only U.S. citizens can vote in federal elections and run for federal office.": "માત્ર યુ.એસ. નાગરિકો જ સંઘીય ચૂંટણીઓમાં મતદાન કરી શકે છે અને સંઘીય હોદ્દા માટે ઊભા રહી શકે છે.",
  
  // r005
  "What are two rights in the Declaration of Independence?": "સ્વતંત્રતાના ઘોષણાપત્રમાં બે અધિકારો શું છે?",
  "Life and liberty": "જીવન અને સ્વતંત્રતા",
  "Vote and drive": "મતદાન અને વાહન ચલાવવું",
  "Work and travel": "કામ અને મુસાફરી",
  "Speech and religion": "ભાષણ અને ધર્મ",
  "The Declaration of Independence lists Life, Liberty, and the pursuit of Happiness as unalienable rights.": "સ્વતંત્રતાના ઘોષણાપત્રમાં જીવન, સ્વતંત્રતા અને સુખની શોધ અવિભાજ્ય અધિકારો તરીકે સૂચિબદ્ધ છે.",
  
  // r006
  "What is the freedom of the press?": "પ્રેસની સ્વતંત્રતા શું છે?",
  "The media can report news without government control": "મીડિયા સરકારી નિયંત્રણ વિના સમાચાર આપી શકે છે",
  "Only government newspapers are allowed": "માત્ર સરકારી અખબારોની મંજૂરી છે",
  "Press must get government approval before publishing": "પ્રકાશન પહેલાં પ્રેસને સરકારી મંજૂરી લેવી જોઈએ",
  "Freedom of press only applies to TV": "પ્રેસની સ્વતંત્રતા માત્ર ટીવી પર લાગુ પડે છે",
  "Freedom of the press means the media can publish news and opinions without government censorship.": "પ્રેસની સ્વતંત્રતાનો અર્થ છે કે મીડિયા સરકારી સેન્સરશિપ વિના સમાચાર અને મંતવ્યો પ્રકાશિત કરી શકે છે.",
  
  // r007
  "What is the right to bear arms?": "શસ્ત્ર રાખવાનો અધિકાર શું છે?",
  "The right to own guns (Second Amendment)": "બંધૂક રાખવાનો અધિકાર (બીજો સુધારો)",
  "The right to join the army": "સેનામાં જોડાવાનો અધિકાર",
  "The right to wear short sleeves": "ટૂંકી બાંયના કપડાં પહેરવાનો અધિકાર",
  "The right to carry shields": "ઢાલ વહન કરવાનો અધિકાર",
  "The Second Amendment gives the right to keep and bear arms.": "બીજો સુધારો શસ્ત્ર રાખવા અને વહન કરવાનો અધિકાર આપે છે.",
  
  // r008
  "When must all men register for the Selective Service?": "બધા પુરુષોએ સિલેક્ટિવ સર્વિસ માટે ક્યારે નોંધણી કરાવવી જોઈએ?",
  "At age 18": "18 વર્ષની ઉંમરે",
  "At age 21": "21 વર્ષની ઉંમરે",
  "At age 16": "16 વર્ષની ઉંમરે",
  "At age 25": "25 વર્ષની ઉંમરે",
  "All male residents must register for the Selective Service at age 18.": "બધા પુરુષ રહેવાસીઓએ 18 વર્ષની ઉંમરે સિલેક્ટિવ સર્વિસ માટે નોંધણી કરાવવી જોઈએ.",
  
  // r009
  "What is one reason colonists came to America?": "વસાહતીઓ અમેરિકા આવવાનું એક કારણ શું છે?",
  "Freedom / Religious freedom / Political liberty": "સ્વતંત્રતા / ધાર્મિક સ્વતંત્રતા / રાજકીય સ્વતંત્રતા",
  "To find gold": "સોનું શોધવા",
  "Because they were forced": "કારણ કે તેમને ફરજ પાડવામાં આવી હતી",
  "For vacation": "વેકેશન માટે",
  "Colonists came for freedom, religious liberty, economic opportunity, and political liberty.": "વસાહતીઓ સ્વતંત્રતા, ધાર્મિક સ્વતંત્રતા, આર્થિક તક અને રાજકીય સ્વતંત્રતા માટે આવ્યા.",
  
  // r010
  "What is the right to petition the government?": "સરકારને અરજી કરવાનો અધિકાર શું છે?",
  "You can ask the government to change laws or fix problems": "તમે સરકારને કાયદા બદલવા અથવા સમસ્યાઓ ઉકેલવા કહી શકો છો",
  "Only rich people can ask the government for changes": "માત્ર ધનિક લોકો સરકાર પાસે ફેરફાર માંગી શકે છે",
  "You need a lawyer to talk to the government": "સરકાર સાથે વાત કરવા તમારે વકીલની જરૂર છે",
  "Citizens cannot question the government": "નાગરિકો સરકાર પર સવાલ ઉઠાવી શકતા નથી",
  "The First Amendment gives citizens the right to petition the government for a redress of grievances.": "પ્રથમ સુધારો નાગરિકોને ફરિયાદોના નિવારણ માટે સરકારને અરજી કરવાનો અધિકાર આપે છે.",

  // === HISTORY QUESTIONS ===
  // h001
  "What is one important thing Abraham Lincoln did?": "અબ્રાહમ લિંકને કરેલી એક મહત્વની વાત શું છે?",
  "Freed the slaves (Emancipation Proclamation)": "ગુલામોને મુક્ત કર્યા (મુક્તિ ઘોષણા)",
  "Wrote the Constitution": "બંધારણ લખ્યું",
  "Discovered America": "અમેરિકા શોધ્યું",
  "First President": "પ્રથમ રાષ્ટ્રપતિ",
  "Abraham Lincoln freed the slaves through the Emancipation Proclamation and preserved the Union during the Civil War.": "અબ્રાહમ લિંકને મુક્તિ ઘોષણા દ્વારા ગુલામોને મુક્ત કર્યા અને ગૃહયુદ્ધ દરમિયાન સંઘને સુરક્ષિત રાખ્યું.",
  
  // h002
  "What was the major concern during the Cold War?": "શીત યુદ્ધ દરમિયાન મુખ્ય ચિંતા શું હતી?",
  "Communism spreading worldwide": "વિશ્વભરમાં સામ્યવાદનો ફેલાવો",
  "Climate change": "આબોહવા પરિવર્તન",
  "Trade with China": "ચીન સાથે વેપાર",
  "Immigration from Europe": "યુરોપમાંથી ઇમિગ્રેશન",
  "The Cold War was primarily about preventing the spread of communism, led by tensions between the U.S. and the Soviet Union.": "શીત યુદ્ધ મુખ્યત્વે સામ્યવાદનો ફેલાવો રોકવા વિશે હતું, જે યુ.એસ. અને સોવિયેત યુનિયન વચ્ચેના તણાવથી ચાલતું હતું.",
  
  // h003
  "Who was the first President of the United States?": "યુનાઈટેડ સ્ટેટ્સના પ્રથમ રાષ્ટ્રપતિ કોણ હતા?",
  "George Washington": "જ્યોર્જ વોશિંગ્ટન",
  "Abraham Lincoln": "અબ્રાહમ લિંકન",
  "Thomas Jefferson": "થોમસ જેફરસન",
  "John Adams": "જ્હોન એડમ્સ",
  "George Washington was the first President and is called the \"Father of Our Country.\"": "જ્યોર્જ વોશિંગ્ટન પ્રથમ રાષ્ટ્રપતિ હતા અને તેમને \"આપણા દેશના પિતા\" કહેવામાં આવે છે.",
  
  // h004
  "What territory did the United States buy from France in 1803?": "1803માં યુનાઈટેડ સ્ટેટ્સે ફ્રાન્સ પાસેથી કયો પ્રદેશ ખરીદ્યો?",
  "The Louisiana Territory (Louisiana Purchase)": "લુઈઝિયાના પ્રદેશ (લુઈઝિયાના ખરીદી)",
  "Alaska": "અલાસ્કા",
  "Florida": "ફ્લોરિડા",
  "Texas": "ટેક્સાસ",
  "The Louisiana Purchase in 1803 doubled the size of the United States.": "1803માં લુઈઝિયાના ખરીદીએ યુનાઈટેડ સ્ટેટ્સનું કદ બમણું કર્યું.",
  
  // h005
  "What was the main cause of the Civil War?": "ગૃહયુદ્ધનું મુખ્ય કારણ શું હતું?",
  "Slavery": "ગુલામી",
  "Taxes": "કર",
  "Religion": "ધર્મ",
  "Foreign invasion": "વિદેશી આક્રમણ",
  "The Civil War was primarily fought over slavery and the right of states to allow it.": "ગૃહયુદ્ધ મુખ્યત્વે ગુલામી અને રાજ્યોના તેને મંજૂરી આપવાના અધિકાર પર લડવામાં આવ્યું.",
  
  // h006
  "Who wrote the Declaration of Independence?": "સ્વતંત્રતાનો ઘોષણાપત્ર કોણે લખ્યો?",
  "Benjamin Franklin": "બેન્જામિન ફ્રેન્કલિન",
  "George Washington": "જ્યોર્જ વોશિંગ્ટન",
  "Thomas Jefferson wrote the Declaration of Independence in 1776.": "થોમસ જેફરસને 1776માં સ્વતંત્રતાનો ઘોષણાપત્ર લખ્યો.",
  
  // h007
  "When was the Declaration of Independence adopted?": "સ્વતંત્રતાનો ઘોષણાપત્ર ક્યારે અપનાવવામાં આવ્યો?",
  "July 4, 1776": "4 જુલાઈ, 1776",
  "July 4, 1800": "4 જુલાઈ, 1800",
  "December 25, 1776": "25 ડિસેમ્બર, 1776",
  "January 1, 1776": "1 જાન્યુઆરી, 1776",
  "The Declaration of Independence was adopted on July 4, 1776.": "સ્વતંત્રતાનો ઘોષણાપત્ર 4 જુલાઈ, 1776ના રોજ અપનાવવામાં આવ્યો.",
  
  // h008
  "What happened at the Constitutional Convention?": "બંધારણ સંમેલનમાં શું થયું?",
  "The Constitution was written": "બંધારણ લખવામાં આવ્યું",
  "Independence was declared": "સ્વતંત્રતા જાહેર કરવામાં આવી",
  "The Bill of Rights was signed": "અધિકારોનું વિધેયક પર હસ્તાક્ષર કરવામાં આવ્યું",
  "The first election was held": "પ્રથમ ચૂંટણી યોજાઈ",
  "The U.S. Constitution was written at the Constitutional Convention in 1787.": "1787માં બંધારણ સંમેલનમાં યુ.એસ. બંધારણ લખવામાં આવ્યું.",
  
  // h009
  "Who is the \"Father of Our Country\"?": "\"આપણા દેશના પિતા\" કોણ છે?",
  "George Washington is called the Father of Our Country.": "જ્યોર્જ વોશિંગ્ટનને આપણા દેશના પિતા કહેવામાં આવે છે.",
  
  // h010
  "What major event happened on September 11, 2001?": "11 સપ્ટેમ્બર, 2001ના રોજ કઈ મોટી ઘટના બની?",
  "Terrorists attacked the United States (9/11)": "આતંકવાદીઓએ યુનાઈટેડ સ્ટેટ્સ પર હુમલો કર્યો (9/11)",
  "A hurricane hit New York": "ન્યૂ યોર્ક પર વાવાઝોડું ત્રાટક્યું",
  "The stock market crashed": "શેરબજાર ધરાશાયી થયું",
  "A new state was admitted": "નવું રાજ્ય દાખલ કરવામાં આવ્યું",
  "On September 11, 2001, terrorists attacked the United States, crashing planes into the World Trade Center, Pentagon, and a field in Pennsylvania.": "11 સપ્ટેમ્બર, 2001ના રોજ, આતંકવાદીઓએ યુનાઈટેડ સ્ટેટ્સ પર હુમલો કર્યો, વર્લ્ડ ટ્રેડ સેન્ટર, પેન્ટાગોન અને પેન્સિલવેનિયાના એક ખેતરમાં વિમાનો ત્રાટક્યા.",
  
  // h011
  "What war was fought between the North and the South?": "ઉત્તર અને દક્ષિણ વચ્ચે કયું યુદ્ધ લડવામાં આવ્યું?",
  "The Civil War": "ગૃહયુદ્ધ",
  "The Revolutionary War": "ક્રાંતિકારી યુદ્ધ",
  "World War I": "પ્રથમ વિશ્વયુદ્ધ",
  "The War of 1812": "1812નું યુદ્ધ",
  "The Civil War (1861-1865) was fought between the Northern and Southern states.": "ગૃહયુદ્ધ (1861-1865) ઉત્તર અને દક્ષિણ રાજ્યો વચ્ચે લડવામાં આવ્યું.",
  
  // h012
  "What did the Emancipation Proclamation do?": "મુક્તિ ઘોષણાએ શું કર્યું?",
  "Freed slaves in Confederate states": "સંઘીય રાજ્યોમાં ગુલામોને મુક્ત કર્યા",
  "Ended the Revolutionary War": "ક્રાંતિકારી યુદ્ધ સમાપ્ત કર્યું",
  "Created the Bill of Rights": "અધિકારોનું વિધેયક બનાવ્યું",
  "Gave women the right to vote": "મહિલાઓને મતદાનનો અધિકાર આપ્યો",
  "The Emancipation Proclamation freed slaves in the Confederate (Southern) states during the Civil War.": "મુક્તિ ઘોષણાએ ગૃહયુદ્ધ દરમિયાન સંઘીય (દક્ષિણ) રાજ્યોમાં ગુલામોને મુક્ત કર્યા.",
  
  // h013
  "What did Susan B. Anthony do?": "સુઝાન બી. એન્થનીએ શું કર્યું?",
  "Fought for women's rights / women's suffrage": "મહિલા અધિકારો / મહિલા મતાધિકાર માટે લડ્યા",
  "Was the first female President": "પ્રથમ મહિલા રાષ્ટ્રપતિ હતા",
  "Wrote the Constitution": "બંધારણ લખ્યું",
  "Discovered electricity": "વીજળી શોધી",
  "Susan B. Anthony fought for women's rights, especially the right to vote (women's suffrage).": "સુઝાન બી. એન્થનીએ મહિલા અધિકારો, ખાસ કરીને મતદાનનો અધિકાર (મહિલા મતાધિકાર) માટે લડત આપી.",
  
  // h014
  "What is one thing Benjamin Franklin is famous for?": "બેન્જામિન ફ્રેન્કલિન કઈ એક વાત માટે પ્રખ્યાત છે?",
  "U.S. diplomat / inventor / started free libraries": "યુ.એસ. રાજદ્વારી / શોધક / મફત પુસ્તકાલયો શરૂ કર્યા",
  "First President": "પ્રથમ રાષ્ટ્રપતિ",
  "Wrote the Constitution alone": "એકલા બંધારણ લખ્યું",
  "Commander in the Civil War": "ગૃહયુદ્ધમાં કમાન્ડર",
  "Benjamin Franklin was a diplomat, inventor, writer, and one of the Founding Fathers.": "બેન્જામિન ફ્રેન્કલિન રાજદ્વારી, શોધક, લેખક અને સ્થાપક પિતાઓમાંના એક હતા.",

  // h015
  "Who lived in America before the Europeans arrived?": "યુરોપિયનો આવ્યા પહેલાં અમેરિકામાં કોણ રહેતું હતું?",
  "American Indians / Native Americans": "અમેરિકન ઇન્ડિયન્સ / મૂળ અમેરિકનો",
  "Pilgrims": "પિલગ્રિમ્સ",
  "The British": "બ્રિટિશ",
  "The French": "ફ્રેન્ચ",
  "American Indians (Native Americans) lived in America before the European settlers arrived.": "યુરોપિયન વસાહતીઓ આવ્યા પહેલાં અમેરિકન ઇન્ડિયન્સ (મૂળ અમેરિકનો) અમેરિકામાં રહેતા હતા.",
  
  // === SYMBOLS & HOLIDAYS ===
  // s001
  "Why does the flag have 13 stripes?": "ધ્વજમાં 13 પટ્ટીઓ શા માટે છે?",
  "They represent the original 13 colonies": "તે મૂળ 13 વસાહતોનું પ્રતિનિધિત્વ કરે છે",
  "For the 13 amendments": "13 સુધારાઓ માટે",
  "For the 13 Presidents": "13 રાષ્ટ્રપતિઓ માટે",
  "For the 13 states today": "આજના 13 રાજ્યો માટે",
  "The 13 stripes represent the 13 original colonies that became the first states.": "13 પટ્ટીઓ 13 મૂળ વસાહતોનું પ્રતિનિધિત્વ કરે છે જે પ્રથમ રાજ્યો બન્યા.",
  
  // s002
  "Why does the flag have 50 stars?": "ધ્વજમાં 50 તારા શા માટે છે?",
  "One star for each state (50 states)": "દરેક રાજ્ય માટે એક તારો (50 રાજ્યો)",
  "One for each President": "દરેક રાષ્ટ્રપતિ માટે એક",
  "For the 50 biggest cities": "50 સૌથી મોટા શહેરો માટે",
  "For the 50 amendments": "50 સુધારાઓ માટે",
  "The 50 stars on the flag represent the 50 states.": "ધ્વજ પરના 50 તારા 50 રાજ્યોનું પ્રતિનિધિત્વ કરે છે.",
  
  // s003
  "What is the name of the national anthem?": "રાષ્ટ્રગીતનું નામ શું છે?",
  "The Star-Spangled Banner": "ધ સ્ટાર-સ્પેન્ગલ્ડ બેનર",
  "America the Beautiful": "અમેરિકા ધ બ્યુટિફુલ",
  "God Bless America": "ગોડ બ્લેસ અમેરિકા",
  "Yankee Doodle": "યેન્કી ડૂડલ",
  "The Star-Spangled Banner is the U.S. national anthem, written by Francis Scott Key.": "ધ સ્ટાર-સ્પેન્ગલ્ડ બેનર યુ.એસ. રાષ્ટ્રગીત છે, જે ફ્રાન્સિસ સ્કોટ કી દ્વારા લખવામાં આવ્યું.",
  
  // s004
  "When do we celebrate Independence Day?": "આપણે સ્વતંત્રતા દિવસ ક્યારે ઉજવીએ છીએ?",
  "July 4": "4 જુલાઈ",
  "January 1": "1 જાન્યુઆરી",
  "December 25": "25 ડિસેમ્બર",
  "November 11": "11 નવેમ્બર",
  "We celebrate Independence Day on July 4th, the anniversary of the Declaration of Independence (1776).": "આપણે 4 જુલાઈએ સ્વતંત્રતા દિવસ ઉજવીએ છીએ, સ્વતંત્રતાના ઘોષણાપત્રની વર્ષગાંઠ (1776).",
  
  // s005
  "What is the Statue of Liberty?": "સ્ટેચ્યુ ઓફ લિબર્ટી શું છે?",
  "A symbol of freedom; a gift from France": "સ્વતંત્રતાનું પ્રતીક; ફ્રાન્સ તરફથી ભેટ",
  "A government building": "સરકારી ઇમારત",
  "A war memorial": "યુદ્ધ સ્મારક",
  "A lighthouse": "દીવાદાંડી",
  "The Statue of Liberty is a symbol of freedom and was a gift from France.": "સ્ટેચ્યુ ઓફ લિબર્ટી સ્વતંત્રતાનું પ્રતીક છે અને ફ્રાન્સ તરફથી ભેટ હતી.",
  
  // s006
  "What do we show loyalty to when we say the Pledge of Allegiance?": "જ્યારે આપણે પ્લેજ ઓફ એલિજિયન્સ બોલીએ છીએ ત્યારે આપણે કોના પ્રત્યે વફાદારી બતાવીએ છીએ?",
  "The United States / The flag": "યુનાઈટેડ સ્ટેટ્સ / ધ્વજ",
  "The President": "રાષ્ટ્રપતિ",
  "The military": "સેના",
  "Our state": "આપણું રાજ્ય",
  "When we say the Pledge of Allegiance, we show loyalty to the United States and the flag.": "જ્યારે આપણે પ્લેજ ઓફ એલિજિયન્સ બોલીએ છીએ, ત્યારે આપણે યુનાઈટેડ સ્ટેટ્સ અને ધ્વજ પ્રત્યે વફાદારી બતાવીએ છીએ.",
  
  // s007
  "What is one national U.S. holiday?": "એક રાષ્ટ્રીય યુ.એસ. રજા કઈ છે?",
  "Thanksgiving": "થેંક્સગિવિંગ",
  "Diwali": "દિવાળી",
  "Easter": "ઈસ્ટર",
  "Valentine's Day": "વેલેન્ટાઈન ડે",
  "Thanksgiving is a national U.S. holiday celebrated on the fourth Thursday of November.": "થેંક્સગિવિંગ એ રાષ્ટ્રીય યુ.એસ. રજા છે જે નવેમ્બરના ચોથા ગુરુવારે ઉજવવામાં આવે છે.",
  
  // Additional common option texts
  "Three (3)": "ત્રણ (3)",
  "Five (5)": "પાંચ (5)",
  "Seven (7)": "સાત (7)",
  "Nine (9)": "નવ (9)",
  "Twelve (12)": "બાર (12)",
  "Fifteen (15)": "પંદર (15)",
  "Twenty (20)": "વીસ (20)",
};

// Process the file
// Strategy: Find all { en: "...", ml: "..." } without gu and add gu
// Also replace gu values that are just English text

let changeCount = 0;

// 1. Add gu to objects that only have en and ml (inline single-line options)
src = src.replace(/\{\s*en:\s*"([^"]*)",\s*ml:\s*"([^"]*)"\s*\}/g, (match, en, ml) => {
  const gu = translations[en] || en; // fallback to English if no translation
  changeCount++;
  return `{ en: "${en}", ml: "${ml}", gu: "${gu}" }`;
});

// 2. Replace gu values that are just English copies (multi-line objects already have gu but with English text)
src = src.replace(/gu:\s*"([^"]*)"/g, (match, guVal) => {
  // If the gu value exists in our translations as an English key, replace it
  if (translations[guVal] && translations[guVal] !== guVal) {
    changeCount++;
    return `gu: "${translations[guVal]}"`;
  }
  return match;
});

fs.writeFileSync('data/questions.ts', src, 'utf8');
console.log(`Done! Made ${changeCount} changes.`);

// Verify counts
const newSrc = fs.readFileSync('data/questions.ts', 'utf8');
const mlCount = (newSrc.match(/ml:/g) || []).length;
const guCount = (newSrc.match(/gu:/g) || []).length;
console.log(`ml: fields: ${mlCount}`);
console.log(`gu: fields: ${guCount}`);
