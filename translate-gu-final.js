const fs = require('fs');
let content = fs.readFileSync('data/questions.ts', 'utf8');

// ── Translation map: English → Gujarati Unicode ──
const translations = {
  "Each state has two senators for equal representation — this was part of the Great Compromise (Connecticut Compromise).":
    "દરેક રાજ્યમાં સમાન પ્રતિનિધિત્વ માટે બે સેનેટર છે — આ મહાન સમાધાન (કનેક્ટિકટ સમાધાન)નો ભાગ હતો.",
  "Eight (8) years": "આઠ (8) વર્ષ",
  "Eisenhower was a WWII General, the 34th President, and created the Interstate Highway System.":
    "આઇઝનહોવર બીજા વિશ્વયુદ્ધના જનરલ, 34મા રાષ્ટ્રપતિ અને ઇન્ટરસ્ટેટ હાઇવે સિસ્ટમના નિર્માતા હતા.",
  "Eleanor Roosevelt": "ઍલિનોર રૂઝવેલ્ટ",
  "Elects the Vice President": "ઉપરાષ્ટ્રપતિની ચૂંટણી કરે છે",
  "Eleven (11)": "અગિયાર (11)",
  "End of the Civil War": "ગૃહયુદ્ધનો અંત",
  "End of the Cold War": "શીત યુદ્ધનો અંત",
  "Ended racial discrimination": "વંશીય ભેદભાવ સમાપ્ત કર્યો",
  "Ended the Civil War": "ગૃહયુદ્ધ સમાપ્ત કર્યું",
  "Ended the Cold War": "શીત યુદ્ધ સમાપ્ત કર્યું",
  "Equal representation for small states (The Great Compromise)":
    "નાના રાજ્યો માટે સમાન પ્રતિનિધિત્વ (મહાન સમાધાન)",
  "Equality and liberty": "સમાનતા અને સ્વતંત્રતા",
  "Europeans": "યુરોપિયનો",
  "Everyone living in the United States has freedom of expression, speech, assembly, religion, the right to petition the government, and bear arms.":
    "યુનાઈટેડ સ્ટેટ્સમાં રહેતી દરેક વ્યક્તિને અભિવ્યક્તિ, વાણી, સભા, ધર્મની સ્વતંત્રતા, સરકારને અરજી કરવાનો અધિકાર અને શસ્ત્ર રાખવાનો અધિકાર છે.",
  "Everyone must follow the law; no one is above the law":
    "દરેક વ્યક્તિએ કાયદાનું પાલન કરવું જોઈએ; કોઈ કાયદાથી ઉપર નથી",
  "Examples of civic participation include voting, running for office, joining a political party, helping with a campaign, and contacting elected officials.":
    "નાગરિક ભાગીદારીના ઉદાહરણોમાં મતદાન, ચૂંટણી લડવી, રાજકીય પક્ષમાં જોડાવું, ઝુંબેશમાં મદદ કરવી અને ચૂંટાયેલા અધિકારીઓનો સંપર્ક કરવો શામેલ છે.",
  "Executive branch": "કાર્યકારી શાખા",
  "Executive, Military, and Judicial": "કાર્યકારી, લશ્કરી અને ન્યાયિક",
  "Father of the Constitution / Fourth President / Federalist Papers writer":
    "બંધારણના પિતા / ચોથા રાષ્ટ્રપતિ / ફેડરલિસ્ટ પેપર્સના લેખક",
  "Federal Court": "ફેડરલ કોર્ટ",
  "Federal and State": "ફેડરલ અને રાજ્ય",
  "Federal, State, and Local": "ફેડરલ, રાજ્ય અને સ્થાનિક",
  "Federalist Papers": "ફેડરલિસ્ટ પેપર્સ",
  "Feudalism": "સામંતશાહી",
  "First President / Father of Our Country / Continental Army General":
    "પ્રથમ રાષ્ટ્રપતિ / આપણા દેશના પિતા / કોન્ટિનેન્ટલ આર્મી જનરલ",
  "First President of the United States": "યુનાઈટેડ સ્ટેટ્સના પ્રથમ રાષ્ટ્રપતિ",
  "First Secretary of Treasury / Federalist Papers writer / Established First Bank":
    "ખજાનાના પ્રથમ સચિવ / ફેડરલિસ્ટ પેપર્સના લેખક / પ્રથમ બેંકની સ્થાપના",
  "Five (a majority of nine) Supreme Court justices are usually needed to decide a case.":
    "કેસનો નિર્ણય લેવા માટે સામાન્ય રીતે પાંચ (નવમાંથી બહુમતી) સુપ્રીમ કોર્ટના ન્યાયાધીશોની જરૂર હોય છે.",
  "Five hundred thirty-five (535)": "પાંચસો પાંત્રીસ (535)",
  "For life / Lifetime appointment": "આજીવન / જીવનભરની નિમણૂક",
  "For the 13 original colonies": "13 મૂળ વસાહતો માટે",
  "For the 13 presidents": "13 રાષ્ટ્રપતિઓ માટે",
  "For the 13 wars": "13 યુદ્ધો માટે",
  "Fort Sumter / Emancipation Proclamation / Gettysburg":
    "ફોર્ટ સમ્ટર / મુક્તિ ઘોષણા / ગેટ્ટીસબર્ગ",
  "Fought for civil rights / Worked for equality":
    "નાગરિક અધિકારો માટે લડ્યા / સમાનતા માટે કાર્ય કર્યું",
  "Founded first public libraries / First Postmaster General / Inventor / U.S. diplomat":
    "પ્રથમ જાહેર પુસ્તકાલયોની સ્થાપના / પ્રથમ પોસ્ટમાસ્ટર જનરલ / શોધક / યુ.એસ. રાજદ્વારી",
  "Founding the first bank": "પ્રથમ બેંકની સ્થાપના",
  "Four (4) years": "ચાર (4) વર્ષ",
  "Franklin Roosevelt": "ફ્રેન્કલિન રૂઝવેલ્ટ",
  "Franklin Roosevelt was President during both the Great Depression and World War II.":
    "ફ્રેન્કલિન રૂઝવેલ્ટ મહામંદી અને બીજા વિશ્વયુદ્ધ બંને દરમિયાન રાષ્ટ્રપતિ હતા.",
  "Free housing, food, and healthcare": "મફત આવાસ, ખોરાક અને આરોગ્ય સંભાળ",
  "Freed the slaves / Preserved the Union / 16th President / Gettysburg Address":
    "ગુલામોને મુક્ત કર્યા / સંઘનું રક્ષણ / 16મા રાષ્ટ્રપતિ / ગેટ્ટીસબર્ગ સંબોધન",
  "Freedom / Religious freedom / Economic opportunity / Escape persecution":
    "સ્વતંત્રતા / ધાર્મિક સ્વતંત્રતા / આર્થિક તક / જુલમથી છૂટકારો",
  "Freedom of speech, religion, and assembly": "વાણી, ધર્મ અને સભાની સ્વતંત્રતા",
  "Freeing the slaves": "ગુલામોને મુક્ત કરવા",
  "French colonists": "ફ્રેંચ વસાહતીઓ",
  "Gavin Newsom": "ગેવિન ન્યૂસમ",
  "George Bush": "જ્યોર્જ બુશ",
  "George Washington is famous for being the first President, Father of Our Country, and General of the Continental Army.":
    "જ્યોર્જ વૉશિંગ્ટન પ્રથમ રાષ્ટ્રપતિ, આપણા દેશના પિતા અને કોન્ટિનેન્ટલ આર્મીના જનરલ તરીકે પ્રખ્યાત છે.",
  "German attacks on U.S. ships / To support the Allies":
    "યુ.એસ. જહાજો પર જર્મન હુમલા / સાથી દેશોને ટેકો આપવા",
  "Germany": "જર્મની",
  "Global warming": "વૈશ્વિક ઉષ્ણતા",
  "Go to school and eat": "શાળાએ જવું અને ખાવું",
  "Governor and Mayor": "ગવર્નર અને મેયર",
  "Greg Abbott": "ગ્રેગ ઍબોટ",
  "Greg Abbott is the current governor of Texas.":
    "ગ્રેગ ઍબોટ ટેક્સાસના વર્તમાન ગવર્નર છે.",
  "Gulf War": "ખાડી યુદ્ધ",
  "Harriet Beecher Stowe": "હૅરિયેટ બીચર સ્ટોવ",
  "Harry Truman": "હૅરી ટ્રુમૅન",
  "Herbert Hoover": "હર્બર્ટ હૂવર",
  "High taxes / Taxation without representation / No self-government":
    "ઊંચા કર / પ્રતિનિધિત્વ વિના કરવેરા / સ્વ-શાસન નહીં",
  "House of Representatives": "પ્રતિનિધિ સભા",
  "Houston": "હ્યુસ્ટન",
  "How are changes made to the U.S. Constitution?":
    "યુ.એસ. બંધારણમાં ફેરફાર કેવી રીતે કરવામાં આવે છે?",
  "How can people become U.S. citizens?":
    "લોકો યુ.એસ. નાગરિક કેવી રીતે બની શકે?",
  "How long do Supreme Court justices serve?":
    "સુપ્રીમ કોર્ટના ન્યાયાધીશો કેટલો સમય સેવા આપે છે?",
  "How long is a term for a U.S. senator?":
    "યુ.એસ. સેનેટરની મુદ્દત કેટલી લાંબી છે?",
  "How long is a term for a member of the House of Representatives?":
    "પ્રતિનિધિ સભાના સભ્યની મુદ્દત કેટલી લાંબી છે?",
  "How many Supreme Court justices are usually needed to decide a case?":
    "સામાન્ય રીતે કેસનો નિર્ણય લેવા માટે કેટલા સુપ્રીમ કોર્ટના ન્યાયાધીશોની જરૂર હોય છે?",
  "How many U.S. senators are there?": "કેટલા યુ.એસ. સેનેટર છે?",
  "How many seats are on the Supreme Court?": "સુપ્રીમ કોર્ટમાં કેટલી બેઠકો છે?",
  "How many senators does each state have?": "દરેક રાજ્યમાં કેટલા સેનેટર છે?",
  "How many voting members are in the House of Representatives?":
    "પ્રતિનિધિ સભામાં કેટલા મતદાન સભ્યો છે?",
  "Hurricane Katrina": "વાવાઝોડું કેટ્રિના",
  "If the president can no longer serve, the Vice President becomes president.":
    "જો રાષ્ટ્રપતિ હવે સેવા આપી ન શકે, તો ઉપરાષ્ટ્રપતિ રાષ્ટ્રપતિ બને છે.",
  "If the president can no longer serve, who becomes president?":
    "જો રાષ્ટ્રપતિ હવે સેવા આપી ન શકે, તો રાષ્ટ્રપતિ કોણ બને છે?",
  "Ignore elections": "ચૂંટણીઓની અવગણના",
  "Immigration": "ઇમિગ્રેશન",
  "Immigration and citizenship": "ઇમિગ્રેશન અને નાગરિકતા",
  "Important Civil War events include Fort Sumter, the Emancipation Proclamation, Gettysburg, Sherman's March, and Appomattox.":
    "ગૃહયુદ્ધની મહત્વપૂર્ણ ઘટનાઓમાં ફોર્ટ સમ્ટર, મુક્તિ ઘોષણા, ગેટ્ટીસબર્ગ, શેરમૅનનો કૂચ અને ઍપોમૅટોક્સ શામેલ છે.",
  "Important Revolutionary events include Bunker Hill, Washington crossing the Delaware, Saratoga, Valley Forge, and Yorktown.":
    "ક્રાંતિની મહત્વપૂર્ણ ઘટનાઓમાં બંકર હિલ, વૉશિંગ્ટને ડેલવેર પાર કર્યું, સૅરૅટોગા, વૅલી ફોર્જ અને યૉર્કટાઉન શામેલ છે.",
  "Important ideas include equality, liberty, social contract, natural rights, limited government, and self-government.":
    "મહત્વપૂર્ણ વિચારોમાં સમાનતા, સ્વતંત્રતા, સામાજિક કરાર, કુદરતી અધિકારો, મર્યાદિત સરકાર અને સ્વ-શાસન શામેલ છે.",
  "Inca": "ઇન્કા",
  "Independence Day celebrates the adoption of the Declaration of Independence — the country's birthday on July 4.":
    "સ્વતંત્રતા દિવસ સ્વતંત્રતાના ઘોષણાપત્રને અપનાવવાની ઉજવણી કરે છે — 4 જુલાઈએ દેશનો જન્મદિવસ.",
  "Inventing electricity": "વીજળીની શોધ",
  "Inventing the telephone": "ટેલિફોનની શોધ",
  "It created the Supreme Court": "તેણે સુપ્રીમ કોર્ટ બનાવી",
  "It depends on population": "તે વસ્તી પર આધાર રાખે છે",
  "It ended the Civil War": "તેણે ગૃહયુદ્ધ સમાપ્ત કર્યું",
  "It established the tax system": "તેણે કર પ્રણાલી સ્થાપિત કરી",
  "It is optional": "તે ઐચ્છિક છે",
  "It is optional for citizens": "તે નાગરિકો માટે ઐચ્છિક છે",
  "It says America is free from Britain and all people are created equal":
    "તે કહે છે કે અમેરિકા બ્રિટનથી મુક્ત છે અને બધા લોકો સમાન બનાવવામાં આવ્યા છે",
  "It was a tradition from Britain": "તે બ્રિટનની પરંપરા હતી",
  "JD Vance": "જે.ડી. વાન્સ",
  "JD Vance is the current Vice President of the United States.":
    "જે.ડી. વાન્સ યુનાઈટેડ સ્ટેટ્સના વર્તમાન ઉપરાષ્ટ્રપતિ છે.",
  "James Madison / Alexander Hamilton / John Jay":
    "જેમ્સ મેડિસન / ઍલેક્ઝાન્ડર હૅમિલ્ટન / જ્હોન જૅ",
  "James Madison is known as the Father of the Constitution, was the fourth President, and wrote the Federalist Papers.":
    "જેમ્સ મેડિસન બંધારણના પિતા તરીકે ઓળખાય છે, ચોથા રાષ્ટ્રપતિ હતા અને ફેડરલિસ્ટ પેપર્સ લખ્યા હતા.",
  "James Madison, Alexander Hamilton, and John Jay (Publius) wrote the Federalist Papers.":
    "જેમ્સ મેડિસન, ઍલેક્ઝાન્ડર હૅમિલ્ટન અને જ્હોન જૅ (પબ્લિઅસ) એ ફેડરલિસ્ટ પેપર્સ લખ્યા.",
  "Japan": "જાપાન",
  "Joe Biden": "જો બાઇડન",
  "John Roberts": "જ્હોન રૉબર્ટ્સ",
  "John Roberts is the current Chief Justice of the United States.":
    "જ્હોન રૉબર્ટ્સ યુનાઈટેડ સ્ટેટ્સના વર્તમાન મુખ્ય ન્યાયાધીશ છે.",
  "Judicial branch": "ન્યાયિક શાખા",
  "July 4, 1789": "4 જુલાઈ, 1789",
  "Justices serve for life to be independent of politics and to limit outside political influence.":
    "રાજકારણથી સ્વતંત્ર રહેવા અને બહારના રાજકીય પ્રભાવને મર્યાદિત કરવા ન્યાયાધીશો આજીવન સેવા આપે છે.",
  "Kamala Harris": "કમલા હૅરિસ",
  "Kevin McCarthy": "કેવિન મૅકાર્થી",
  "Korean War": "કોરિયન યુદ્ધ",
  "Laws apply only to poor people": "કાયદા ફક્ત ગરીબ લોકોને લાગુ પડે છે",
  "Leading the Civil War": "ગૃહયુદ્ધનું નેતૃત્વ",
  "Learn English and pass a driving test": "અંગ્રેજી શીખો અને ડ્રાઇવિંગ ટેસ્ટ પાસ કરો",
  "Leave the country": "દેશ છોડો",
  "Legislative branch": "વિધાયિક શાખા",
  "Legislative, Executive, and Judicial": "વિધાયિક, કાર્યકારી અને ન્યાયિક",
  "Light bulb / Airplane / Assembly line / Moon landing":
    "લાઇટ બલ્બ / વિમાન / ઍસેમ્બલી લાઇન / ચંદ્ર પર ઉતરાણ",
  "Los Angeles": "લૉસ એન્જલસ",
  "Louisiana Purchase": "લુઇસિયાના ખરીદી",
  "Louisiana Territory": "લુઇસિયાના પ્રદેશ",
  "Magna Carta only": "ફક્ત મેગ્ના કાર્ટા",
  "Many documents influenced the U.S. Constitution. Name one.":
    "ઘણા દસ્તાવેજોએ યુ.એસ. બંધારણને પ્રભાવિત કર્યું. એકનું નામ આપો.",
  "March 4, 1776": "4 માર્ચ, 1776",
  "Marco Rubio": "માર્કો રુબિઓ",
  "Martin Luther King Jr. fought for civil rights and worked for equality for all Americans.":
    "માર્ટિન લ્યુથર કિંગ જુનિયરે નાગરિક અધિકારો માટે લડ્યા અને બધા અમેરિકનો માટે સમાનતા માટે કાર્ય કર્યું.",
  "Maya": "માયા",
  "Mayflower Compact": "મેફ્લાવર કૉમ્પેક્ટ",
  "Memorial Day honors soldiers who died in military service.":
    "મેમોરિયલ ડે લશ્કરી સેવામાં મૃત્યુ પામેલા સૈનિકોનું સન્માન કરે છે.",
  "Mike Johnson": "માઇક જ્હોનસન",
  "Mike Johnson is the current Speaker of the House of Representatives.":
    "માઇક જ્હોનસન પ્રતિનિધિ સભાના વર્તમાન સ્પીકર છે.",
  "Mike Pence": "માઇક પેન્સ",
  "Military branch": "લશ્કરી શાખા",
  "Mitch McConnell": "મિચ મૅકકૉનેલ",
  "Monica De La Cruz": "મોનિકા ડે લા ક્રુઝ",
  "Monica De La Cruz is the U.S. representative for this Texas district.":
    "મોનિકા ડે લા ક્રુઝ આ ટેક્સાસ જિલ્લાના યુ.એસ. પ્રતિનિધિ છે.",
  "Mother's Day, Father's Day, Groundhog Day": "મધર્સ ડે, ફાધર્સ ડે, ગ્રાઉન્ડહોગ ડે",
  "Name five of the 13 original states.":
    "13 મૂળ રાજ્યોમાંથી પાંચના નામ આપો.",
  "Name one American innovation.": "એક અમેરિકન નવીન શોધનું નામ આપો.",
  "Name one U.S. conflict after September 11, 2001.":
    "11 સપ્ટેમ્બર, 2001 પછીના એક યુ.એસ. સંઘર્ષનું નામ આપો.",
  "Name one important event during the American Revolution.":
    "અમેરિકન ક્રાંતિ દરમિયાનની એક મહત્વપૂર્ણ ઘટનાનું નામ આપો.",
  "Name one important event during the Civil War.":
    "ગૃહયુદ્ધ દરમિયાનની એક મહત્વપૂર્ણ ઘટનાનું નામ આપો.",
  "Name one leader of the women's rights movement in the 1800s.":
    "1800ના દાયકામાં મહિલા અધિકાર આંદોલનના એક નેતાનું નામ આપો.",
  "Name one power of the President.": "રાષ્ટ્રપતિની એક સત્તાનું નામ આપો.",
  "Name one power of the U.S. Congress.": "યુ.એસ. કોંગ્રેસની એક સત્તાનું નામ આપો.",
  "Name one thing Abraham Lincoln is famous for.":
    "અબ્રાહમ લિંકન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
  "Name one thing Alexander Hamilton is famous for.":
    "ઍલેક્ઝાન્ડર હૅમિલ્ટન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
  "Name one thing Benjamin Franklin is famous for.":
    "બેન્જામિન ફ્રેન્કલિન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
  "Name one thing Dwight Eisenhower is famous for.":
    "ડ્વાઇટ આઇઝનહોવર જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
  "Name one thing George Washington is famous for.":
    "જ્યોર્જ વૉશિંગ્ટન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
  "Name one thing James Madison is famous for.":
    "જેમ્સ મેડિસન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
  "Name one thing Martin Luther King Jr. is famous for.":
    "માર્ટિન લ્યુથર કિંગ જુનિયર જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
  "Name one thing Thomas Jefferson is famous for.":
    "થૉમસ જેફરસન જે માટે પ્રખ્યાત છે તેમાંથી એક વસ્તુનું નામ આપો.",
  "Name one thing the U.S. Constitution does.":
    "યુ.એસ. બંધારણ શું કરે છે તેમાંથી એક વસ્તુનું નામ આપો.",
  "Name one war fought by the United States in the 1800s.":
    "1800ના દાયકામાં યુનાઈટેડ સ્ટેટ્સ દ્વારા લડવામાં આવેલ એક યુદ્ધનું નામ આપો.",
  "Name one writer of the Federalist Papers.":
    "ફેડરલિસ્ટ પેપર્સના એક લેખકનું નામ આપો.",
  "Name three national holidays.": "ત્રણ રાષ્ટ્રીય રજાઓના નામ આપો.",
  "Name two important ideas from the Declaration of Independence and the U.S. Constitution.":
    "સ્વતંત્રતાના ઘોષણાપત્ર અને યુ.એસ. બંધારણમાંથી બે મહત્વપૂર્ણ વિચારોના નામ આપો.",
  "Name two promises new citizens make in the Oath of Allegiance.":
    "વફાદારીની શપથમાં નવા નાગરિકો જે બે વચનો આપે છે તેના નામ આપો.",
  "Name your U.S. representative. (Texas)":
    "તમારા યુ.એસ. પ્રતિનિધિનું નામ આપો. (ટેક્સાસ)",
  "Nancy Pelosi": "નેન્સી પેલોસી",
  "National holidays include New Year's Day, Martin Luther King Jr. Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas, and Juneteenth.":
    "રાષ્ટ્રીય રજાઓમાં ન્યૂ યર્સ ડે, માર્ટિન લ્યુથર કિંગ જુનિયર ડે, પ્રેસિડેન્ટ્સ ડે, મેમોરિયલ ડે, ઇન્ડિપેન્ડન્સ ડે, લેબર ડે, કોલંબસ ડે, વેટરન્સ ડે, થેન્ક્સગિવિંગ, ક્રિસમસ અને જૂનટીન્થ શામેલ છે.",
  "Native Americans": "મૂળ અમેરિકનો",
  "Native Americans (American Indians) lived in America before Europeans arrived.":
    "મૂળ અમેરિકનો (અમેરિકન ઇન્ડિયન્સ) યુરોપિયનોના આવ્યા પહેલાં અમેરિકામાં રહેતા હતા.",
  "Native Americans / American Indians": "મૂળ અમેરિકનો / અમેરિકન ઇન્ડિયન્સ",
  "New York City": "ન્યૂ યૉર્ક સિટી",
  "New York Harbor / Liberty Island": "ન્યૂ યૉર્ક હાર્બર / લિબર્ટી આઇલેન્ડ",
  "New York, Virginia, Pennsylvania, Massachusetts, Maryland":
    "ન્યૂ યૉર્ક, વર્જિનિયા, પેન્સિલવેનિયા, મેસેચ્યુસેટ્સ, મેરીલેન્ડ",
  "New citizens promise to give up loyalty to other countries, defend the Constitution, obey U.S. laws, serve in the military if needed, and be loyal to the United States.":
    "નવા નાગરિકો અન્ય દેશો પ્રત્યેની વફાદારી છોડવા, બંધારણનું રક્ષણ કરવા, યુ.એસ. કાયદાનું પાલન કરવા, જરૂર પડે તો સેનામાં સેવા આપવા અને યુનાઈટેડ સ્ટેટ્સ પ્રત્યે વફાદાર રહેવાનું વચન આપે છે.",
  "On September 11, 2001, terrorists attacked the United States.":
    "11 સપ્ટેમ્બર, 2001ના રોજ, આતંકવાદીઓએ યુનાઈટેડ સ્ટેટ્સ પર હુમલો કર્યો.",
  "One (1)": "એક (1)",
  "One for each amendment": "દરેક સુધારા માટે એક",
  "One for each president": "દરેક રાષ્ટ્રપતિ માટે એક",
  "One for each state": "દરેક રાજ્ય માટે એક",
  "One for each year of independence": "સ્વતંત્રતાના દરેક વર્ષ માટે એક",
  "Only U.S. citizens can vote in federal elections, run for federal office, and serve on a jury.":
    "ફક્ત યુ.એસ. નાગરિકો જ ફેડરલ ચૂંટણીઓમાં મત આપી શકે, ફેડરલ ઓફિસ માટે ઊભા રહી શકે અને જ્યુરીમાં સેવા આપી શકે.",
  "Only by being born in the U.S.": "ફક્ત યુ.એસ.માં જન્મ લેવાથી",
  "Only by serving in the military": "ફક્ત સેનામાં સેવા આપીને",
  "Only college graduates can vote": "ફક્ત કૉલેજ સ્નાતકો મત આપી શકે",
  "Only men": "ફક્ત પુરુષો",
  "Only men over 30 can vote": "ફક્ત 30 વર્ષથી વધુ ઉંમરના પુરુષો મત આપી શકે",
  "Only property owners can vote": "ફક્ત મિલકતના માલિકો મત આપી શકે",
  "Only rich people have rights": "ફક્ત ધનવાન લોકોને અધિકારો છે",
  "Only rich people need to pay": "ફક્ત ધનવાન લોકોએ ચૂકવવું પડે છે",
  "Only taxpayers": "ફક્ત કરદાતાઓ",
  "Other senators": "અન્ય સેનેટરો",
  "Paper": "કાગળ",
  "Parts of the executive branch include the President, Cabinet, and federal departments and agencies.":
    "કાર્યકારી શાખાના ભાગોમાં રાષ્ટ્રપતિ, કેબિનેટ અને ફેડરલ વિભાગો અને એજન્સીઓ શામેલ છે.",
  "Pay taxes and serve on a jury": "કર ચૂકવો અને જ્યુરીમાં સેવા આપો",
  "Paying federal taxes is required by law (16th Amendment) and funds the federal government. It is a civic duty.":
    "ફેડરલ કર ચૂકવવો કાયદા (16મો સુધારો) દ્વારા ફરજિયાત છે અને ફેડરલ સરકારને ભંડોળ પૂરું પાડે છે. તે નાગરિક ફરજ છે.",
  "Pearl Harbor / Support the Allies / Oppose the Axis powers":
    "પર્લ હાર્બર / સાથી દેશોને ટેકો / ધરી શક્તિઓનો વિરોધ",
  "Pearl Harbor attack": "પર્લ હાર્બર હુમલો",
  "People can become U.S. citizens by being born in the U.S., through naturalization, or by deriving citizenship under law.":
    "લોકો યુ.એસ.માં જન્મ લઈને, નૅચ્યુરલાઇઝેશન દ્વારા અથવા કાયદા હેઠળ નાગરિકતા મેળવીને યુ.એસ. નાગરિક બની શકે છે.",
  "Philadelphia": "ફિલાડેલ્ફિયા",
  "Powers of Congress": "કોંગ્રેસની સત્તાઓ",
  "President / Cabinet / Federal departments and agencies":
    "રાષ્ટ્રપતિ / કેબિનેટ / ફેડરલ વિભાગો અને એજન્સીઓ",
  "President and Vice President": "રાષ્ટ્રપતિ અને ઉપરાષ્ટ્રપતિ",
  "Presidents' birthday celebration": "રાષ્ટ્રપતિઓના જન્મદિવસની ઉજવણી",
  "Protects the rights of the people": "લોકોના અધિકારોનું રક્ષણ કરે છે",
  "Refuse to pay taxes": "કર ચૂકવવાનો ઇનકાર",
  "Registering for Selective Service is required by law, is a civic duty, and makes the draft fair if one is needed.":
    "સિલેક્ટિવ સર્વિસ માટે નોંધણી કાયદા દ્વારા ફરજિયાત છે, નાગરિક ફરજ છે, અને જો જરૂર હોય તો ડ્રાફ્ટને ન્યાયી બનાવે છે.",
  "Representatives serve shorter terms to more closely follow public opinion.":
    "પ્રતિનિધિઓ જનમત સાથે વધુ નજીકથી જોડાયેલા રહેવા ટૂંકી મુદ્દત સેવા આપે છે.",
  "Required by law and civic duty": "કાયદા દ્વારા ફરજિયાત અને નાગરિક ફરજ",
  "Required by law; funds the federal government":
    "કાયદા દ્વારા ફરજિયાત; ફેડરલ સરકારને ભંડોળ પૂરું પાડે છે",
  "Revolutionary War": "ક્રાંતિકારી યુદ્ધ",
  "Rick Perry": "રિક પેરી",
  "Right to drive, travel, and work": "ડ્રાઇવ, મુસાફરી અને કામ કરવાનો અધિકાર",
  "Right to vote, own land, and bear arms only":
    "ફક્ત મતદાન, જમીનની માલિકી અને શસ્ત્ર રાખવાનો અધિકાર",
  "Ron DeSantis": "રોન ડેસાન્ટિસ",
  "Rosa Parks": "રોઝા પાર્ક્સ",
  "Samuel Alito": "સેમ્યુઅલ ઍલિટો",
  "San Antonio": "સૅન ઍન્ટોનિયો",
  "Secretary of State": "વિદેશ મંત્રી",
  "Secretary of State and Secretary of Defense": "વિદેશ મંત્રી અને સંરક્ષણ મંત્રી",
  "Self-government / Popular sovereignty": "સ્વ-શાસન / લોકપ્રિય સાર્વભૌમત્વ",
  "Senate": "સેનેટ",
  "Senate and House of Representatives": "સેનેટ અને પ્રતિનિધિ સભા",
  "Senate, House, and President": "સેનેટ, હાઉસ અને રાષ્ટ્રપતિ",
  "Senator and Representative": "સેનેટર અને પ્રતિનિધિ",
  "September 11 attacks": "11 સપ્ટેમ્બરના હુમલા",
  "Signing of the Constitution": "બંધારણ પર હસ્તાક્ષર",
  "Signing the Constitution": "બંધારણ પર હસ્તાક્ષર કરવા",
  "Signs bills into law": "બિલોને કાયદામાં હસ્તાક્ષર કરે છે",
  "Six (6) years": "છ (6) વર્ષ",
  "So one part does not become too powerful (checks and balances)":
    "જેથી કોઈ એક ભાગ ખૂબ શક્તિશાળી ન બને (ચેક્સ અને બૅલેન્સ)",
  "Some states have more representatives than other states. Why?":
    "કેટલાક રાજ્યોમાં અન્ય રાજ્યો કરતાં વધુ પ્રતિનિધિઓ છે. શા માટે?",
  "Sonia Sotomayor": "સોનિયા સોટોમેયર",
  "Soviet Union": "સોવિયેત સંઘ",
  "Spanish explorers": "સ્પેનિશ અન્વેષકો",
  "State boundaries": "રાજ્યની સીમાઓ",
  "State governors": "રાજ્યના ગવર્નરો",
  "States with larger populations have more representatives in the House.":
    "વધુ વસ્તી ધરાવતા રાજ્યોમાં હાઉસમાં વધુ પ્રતિનિધિઓ હોય છે.",
  "Super Bowl Sunday, Black Friday, April Fools":
    "સુપર બોલ સન્ડે, બ્લૅક ફ્રાઇડે, ઍપ્રિલ ફૂલ્સ",
  "Supreme Court": "સુપ્રીમ કોર્ટ",
  "Supreme Court justices serve for life (lifetime appointment) or until retirement.":
    "સુપ્રીમ કોર્ટના ન્યાયાધીશો આજીવન (જીવનભરની નિમણૂક) અથવા નિવૃત્તિ સુધી સેવા આપે છે.",
  "Supreme Court justices serve for life. Why?":
    "સુપ્રીમ કોર્ટના ન્યાયાધીશો આજીવન સેવા આપે છે. શા માટે?",
  "Susan B. Anthony": "સુસાન બી. ઍન્થની",
  "Taxation and military service": "કરવેરા અને લશ્કરી સેવા",
  "Ted Cruz": "ટેડ ક્રુઝ",
  "Ted Cruz and John Cornyn are the U.S. senators from Texas.":
    "ટેડ ક્રુઝ અને જ્હોન કોર્નિન ટેક્સાસના યુ.એસ. સેનેટર છે.",
  "Ten (10) years": "દસ (10) વર્ષ",
  "Terrorist attacks on the United States": "યુનાઈટેડ સ્ટેટ્સ પર આતંકવાદી હુમલા",
  "Texas, California, Florida, Ohio, Michigan":
    "ટેક્સાસ, કૅલિફોર્નિયા, ફ્લોરિડા, ઓહાયો, મિશિગન",
  "Thanksgiving, Christmas, Independence Day":
    "થેન્ક્સગિવિંગ, ક્રિસમસ, ઇન્ડિપેન્ડન્સ ડે",
  "The 13 original states included New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, and Georgia.":
    "13 મૂળ રાજ્યોમાં ન્યૂ હેમ્પશાયર, મેસેચ્યુસેટ્સ, રોડ આઇલેન્ડ, કનેક્ટિકટ, ન્યૂ યૉર્ક, ન્યૂ જર્સી, પેન્સિલવેનિયા, ડેલવેર, મેરીલેન્ડ, વર્જિનિયા, ઉત્તર કેરોલિના, દક્ષિણ કેરોલિના અને જ્યોર્જિયા શામેલ હતા.",
  "The 14th Amendment defines citizenship by birth.":
    "14મો સુધારો જન્મથી નાગરિકતાને વ્યાખ્યાયિત કરે છે.",
  "The 22nd Amendment limits the President to two terms, to prevent the president from becoming too powerful.":
    "22મો સુધારો રાષ્ટ્રપતિને બે મુદ્દતો સુધી મર્યાદિત કરે છે, જેથી રાષ્ટ્રપતિ ખૂબ શક્તિશાળી ન બને.",
  "The American Revolutionary War was fought for independence from Britain.":
    "અમેરિકન ક્રાંતિકારી યુદ્ધ બ્રિટનથી સ્વતંત્રતા માટે લડવામાં આવ્યું હતું.",
  "The Bill of Rights protects the basic rights of Americans.":
    "બિલ ઑફ રાઇટ્સ અમેરિકનોના મૂળભૂત અધિકારોનું રક્ષણ કરે છે.",
  "The Cabinet advises the President.":
    "કેબિનેટ રાષ્ટ્રપતિને સલાહ આપે છે.",
  "The Chief Justice": "મુખ્ય ન્યાયાધીશ",
  "The Civil War ended slavery in the United States.":
    "ગૃહયુદ્ધે યુનાઈટેડ સ્ટેટ્સમાં ગુલામી સમાપ્ત કરી.",
  "The Civil War was the war between the North and the South.":
    "ગૃહયુદ્ધ ઉત્તર અને દક્ષિણ વચ્ચેનું યુદ્ધ હતું.",
  "The Constitution does not mention a term":
    "બંધારણ મુદ્દતનો ઉલ્લેખ કરતું નથી",
  "The Constitution forms the government, defines its powers, and protects the rights of the people.":
    "બંધારણ સરકાર બનાવે છે, તેની સત્તાઓ વ્યાખ્યાયિત કરે છે અને લોકોના અધિકારોનું રક્ષણ કરે છે.",
  "The Constitution only": "ફક્ત બંધારણ",
  "The Declaration of Independence declared the colonies free from Britain.":
    "સ્વતંત્રતાના ઘોષણાપત્રે વસાહતોને બ્રિટનથી મુક્ત જાહેર કરી.",
  "The Declaration of Independence says America is free from British control and that all people are created equal.":
    "સ્વતંત્રતાનું ઘોષણાપત્ર કહે છે કે અમેરિકા બ્રિટિશ નિયંત્રણથી મુક્ત છે અને બધા લોકો સમાન બનાવવામાં આવ્યા છે.",
  "The Emancipation Proclamation freed slaves in the Confederate states during the Civil War.":
    "મુક્તિ ઘોષણાએ ગૃહયુદ્ધ દરમિયાન સંઘીય રાજ્યોમાં ગુલામોને મુક્ત કર્યા.",
  "The Federalist Papers helped people understand the Constitution and supported its passage.":
    "ફેડરલિસ્ટ પેપર્સે લોકોને બંધારણ સમજવામાં મદદ કરી અને તેના પસાર થવામાં ટેકો આપ્યો.",
  "The Governor": "ગવર્નર",
  "The Great Depression started in 1929.": "મહામંદી 1929માં શરૂ થઈ.",
  "The Great Depression was a long economic recession.":
    "મહામંદી એક લાંબી આર્થિક મંદી હતી.",
  "The Louisiana Territory was purchased from France in 1803.":
    "લુઇસિયાના પ્રદેશ 1803માં ફ્રાન્સ પાસેથી ખરીદવામાં આવ્યો હતો.",
  "The President appoints federal judges.":
    "રાષ્ટ્રપતિ ફેડરલ ન્યાયાધીશોની નિમણૂક કરે છે.",
  "The President can change any law":
    "રાષ્ટ્રપતિ કોઈપણ કાયદો બદલી શકે છે",
  "The President can sign bills into law, veto bills, enforce laws, command the military, and appoint federal judges.":
    "રાષ્ટ્રપતિ બિલોને કાયદામાં હસ્તાક્ષર કરી શકે, બિલોને વીટો કરી શકે, કાયદા અમલ કરાવી શકે, સેનાની કમાન સંભાળી શકે અને ફેડરલ ન્યાયાધીશોની નિમણૂક કરી શકે.",
  "The President decided it": "રાષ્ટ્રપતિએ તે નક્કી કર્યું",
  "The President has the power to veto bills.":
    "રાષ્ટ્રપતિ પાસે બિલોને વીટો કરવાની સત્તા છે.",
  "The President is elected for a 4-year term.":
    "રાષ્ટ્રપતિ 4 વર્ષની મુદ્દત માટે ચૂંટાય છે.",
  "The President is in charge of the executive branch.":
    "રાષ્ટ્રપતિ કાર્યકારી શાખાના વડા છે.",
  "The President of the United States can serve only two terms. Why?":
    "યુનાઈટેડ સ્ટેટ્સના રાષ્ટ્રપતિ ફક્ત બે મુદ્દત સેવા આપી શકે. શા માટે?",
  "The President of the United States is elected for how many years?":
    "યુનાઈટેડ સ્ટેટ્સના રાષ્ટ્રપતિ કેટલા વર્ષ માટે ચૂંટાય છે?",
  "The President of the United States is in charge of which branch of government?":
    "યુનાઈટેડ સ્ટેટ્સના રાષ્ટ્રપતિ સરકારની કઈ શાખાના વડા છે?",
  "The President rules alone": "રાષ્ટ્રપતિ એકલા શાસન કરે છે",
  "The Senate": "સેનેટ",
  "The Soviet Union was the main rival of the United States during the Cold War.":
    "શીત યુદ્ધ દરમિયાન સોવિયેત સંઘ યુનાઈટેડ સ્ટેટ્સનો મુખ્ય હરીફ હતો.",
  "The Speaker of the House": "હાઉસના સ્પીકર",
  "The Statue of Liberty is in New York Harbor on Liberty Island.":
    "સ્ટેચ્યુ ઑફ લિબર્ટી ન્યૂ યૉર્ક હાર્બરમાં લિબર્ટી આઇલેન્ડ પર છે.",
  "The Supreme Court": "સુપ્રીમ કોર્ટ",
  "The Supreme Court is the highest court in the United States.":
    "સુપ્રીમ કોર્ટ યુનાઈટેડ સ્ટેટ્સની સર્વોચ્ચ અદાલત છે.",
  "The Supreme Court limits it": "સુપ્રીમ કોર્ટ તેને મર્યાદિત કરે છે",
  "The U.S. Constitution was written in 1787.":
    "યુ.એસ. બંધારણ 1787માં લખવામાં આવ્યું હતું.",
  "The U.S. entered WWI because of German attacks on American ships and to support the Allies.":
    "જર્મન હુમલાના કારણે અમેરિકન જહાજો પર અને સાથી દેશોને ટેકો આપવા યુ.એસ. પ્રથમ વિશ્વયુદ્ધમાં જોડાયું.",
  "The U.S. entered WWII because of the attack on Pearl Harbor, to support the Allies, and to oppose the Axis powers.":
    "પર્લ હાર્બર પરના હુમલાના કારણે, સાથી દેશોને ટેકો આપવા અને ધરી શક્તિઓનો વિરોધ કરવા યુ.એસ. બીજા વિશ્વયુદ્ધમાં જોડાયું.",
  "The U.S. entered the Korean War to stop the spread of communism.":
    "સામ્યવાદના ફેલાવાને રોકવા યુ.એસ. કોરિયન યુદ્ધમાં જોડાયું.",
  "The U.S. entered the Persian Gulf War to remove Iraqi forces from Kuwait.":
    "કુવૈતમાંથી ઇરાકી દળોને દૂર કરવા યુ.એસ. પર્શિયન ખાડી યુદ્ધમાં જોડાયું.",
  "The U.S. entered the Vietnam War to stop the spread of communism.":
    "સામ્યવાદના ફેલાવાને રોકવા યુ.એસ. વિયેતનામ યુદ્ધમાં જોડાયું.",
  "The United States and the flag": "યુનાઈટેડ સ્ટેટ્સ અને ધ્વજ",
  "The United States has a capitalist (free market) economy.":
    "યુનાઈટેડ સ્ટેટ્સ પાસે મૂડીવાદી (મુક્ત બજાર) અર્થતંત્ર છે.",
  "The basic rights of Americans": "અમેરિકનોના મૂળભૂત અધિકારો",
  "The civil rights movement fought to end racial discrimination.":
    "નાગરિક અધિકાર આંદોલને વંશીય ભેદભાવ સમાપ્ત કરવા લડ્યું.",
  "The entire state": "સમગ્ર રાજ્ય",
  "The executive branch has many parts. Name one.":
    "કાર્યકારી શાખાના ઘણા ભાગો છે. એકનું નામ આપો.",
  "The flag has 13 stripes representing the 13 original colonies.":
    "ધ્વજમાં 13 મૂળ વસાહતોનું પ્રતિનિધિત્વ કરતી 13 પટ્ટીઓ છે.",
  "The main concern during the Cold War was communism (and nuclear war).":
    "શીત યુદ્ધ દરમિયાન મુખ્ય ચિંતા સામ્યવાદ (અને પરમાણુ યુદ્ધ) હતી.",
  "The military controls the country": "સેના દેશ પર નિયંત્રણ કરે છે",
  "The printing press": "છાપખાનું",
  "The rights of the President": "રાષ્ટ્રપતિના અધિકારો",
  "The rule of law means everyone must follow the law — leaders, government, and no one is above the law.":
    "કાયદાના શાસનનો અર્થ છે કે દરેક વ્યક્તિએ કાયદાનું પાલન કરવું જોઈએ — નેતાઓ, સરકાર, અને કોઈ કાયદાથી ઉપર નથી.",
  "The three branches are Legislative (Congress), Executive (President), and Judicial (the Courts).":
    "ત્રણ શાખાઓ વિધાયિક (કોંગ્રેસ), કાર્યકારી (રાષ્ટ્રપતિ) અને ન્યાયિક (કોર્ટ) છે.",
  "The two parts of Congress are the Senate and the House of Representatives.":
    "કોંગ્રેસના બે ભાગો સેનેટ અને પ્રતિનિધિ સભા છે.",
  "The wheel": "પૈડું",
  "Their political party": "તેમનો રાજકીય પક્ષ",
  "There are 100 U.S. senators — 2 from each of the 50 states.":
    "100 યુ.એસ. સેનેટર છે — 50 રાજ્યોમાંથી દરેકમાંથી 2.",
  "There are 435 voting members in the House of Representatives.":
    "પ્રતિનિધિ સભામાં 435 મતદાન સભ્યો છે.",
  "There are 9 seats on the Supreme Court.":
    "સુપ્રીમ કોર્ટમાં 9 બેઠકો છે.",
  "There are four amendments to the U.S. Constitution about who can vote. Describe one.":
    "યુ.એસ. બંધારણમાં કોણ મત આપી શકે તે વિશે ચાર સુધારા છે. એકનું વર્ણન કરો.",
  "There are three branches of government. Why?":
    "સરકારની ત્રણ શાખાઓ છે. શા માટે?",
  "They are less important": "તેઓ ઓછા મહત્વના છે",
  "They created the Bill of Rights": "તેમણે બિલ ઑફ રાઇટ્સ બનાવ્યું",
  "They declared war on Britain": "તેમણે બ્રિટન સામે યુદ્ધ જાહેર કર્યું",
  "They freed the slaves": "તેમણે ગુલામોને મુક્ત કર્યા",
  "They helped people understand and support the Constitution":
    "તેમણે લોકોને બંધારણ સમજવામાં અને ટેકો આપવામાં મદદ કરી",
  "They wanted a king": "તેમને રાજા જોઈતો હતો",
  "They were forced by the British king": "તેમને બ્રિટિશ રાજાએ ફરજ પાડી હતી",
  "Thomas Jefferson wrote the Declaration of Independence, was the third President, made the Louisiana Purchase, and was the first Secretary of State.":
    "થૉમસ જેફરસને સ્વતંત્રતાનું ઘોષણાપત્ર લખ્યું, ત્રીજા રાષ્ટ્રપતિ હતા, લુઇસિયાના ખરીદી કરી અને પ્રથમ વિદેશ મંત્રી હતા.",
  "Thomas Jefferson wrote the Declaration of Independence.":
    "થૉમસ જેફરસને સ્વતંત્રતાનું ઘોષણાપત્ર લખ્યું.",
  "Three branches exist so one part does not become too powerful — this is called checks and balances / separation of powers.":
    "ત્રણ શાખાઓ એટલા માટે અસ્તિત્વમાં છે કે કોઈ એક ભાગ ખૂબ શક્તિશાળી ન બને — આને ચેક્સ અને બૅલેન્સ / સત્તાનું વિભાજન કહે છે.",
  "Three hundred fifty (350)": "ત્રણસો પચાસ (350)",
  "To be independent of politics / limit outside influence":
    "રાજકારણથી સ્વતંત્ર રહેવા / બહારના પ્રભાવને મર્યાદિત કરવા",
  "To become part of Spain": "સ્પેનનો ભાગ બનવા",
  "To fight wars": "યુદ્ધ લડવા",
  "To find gold only": "ફક્ત સોનું શોધવા",
  "To fund the military only": "ફક્ત સેનાને ભંડોળ આપવા",
  "To gain territory": "પ્રદેશ મેળવવા",
  "To gain territory in Europe": "યુરોપમાં પ્રદેશ મેળવવા",
  "To get a driver's license": "ડ્રાઇવિંગ લાઇસન્સ મેળવવા",
  "To give more jobs to people": "લોકોને વધુ નોકરીઓ આપવા",
  "To join France": "ફ્રાન્સમાં જોડાવા",
  "To make government work faster": "સરકારને ઝડપથી કામ કરાવવા",
  "To more closely follow public opinion": "જનમતને વધુ નજીકથી અનુસરવા",
  "To oppose Germany": "જર્મનીનો વિરોધ કરવા",
  "To remove Iraqi forces from Kuwait": "કુવૈતમાંથી ઇરાકી દળોને દૂર કરવા",
  "To save money": "પૈસા બચાવવા",
  "To stop communism": "સામ્યવાદ રોકવા",
  "To stop the spread of communism": "સામ્યવાદના ફેલાવાને રોકવા",
  "To support Britain": "બ્રિટનને ટેકો આપવા",
  "To vote in elections": "ચૂંટણીઓમાં મત આપવા",
  "Trade and commerce": "વેપાર અને વાણિજ્ય",
  "Trade deficits": "વેપાર ખાધ",
  "Tradition from Britain": "બ્રિટનની પરંપરા",
  "Travel abroad and shop": "વિદેશ યાત્રા અને ખરીદી",
  "Treaty of Paris": "પેરિસની સંધિ",
  "Two (2) years": "બે (2) વર્ષ",
  "U.S. Constitution": "યુ.એસ. બંધારણ",
  "U.S. citizens": "યુ.એસ. નાગરિકો",
  "Valentine's Day, Easter, Halloween": "વૅલેન્ટાઇન્સ ડે, ઇસ્ટર, હૅલોવીન",
  "Veterans Day honors all people who have served in the U.S. military.":
    "વેટરન્સ ડે યુ.એસ. સેનામાં સેવા આપનાર તમામ લોકોનું સન્માન કરે છે.",
  "Vietnam War": "વિયેતનામ યુદ્ધ",
  "Vote / Pay taxes / Obey the law / Serve in the military":
    "મતદાન / કર ચૂકવવો / કાયદાનું પાલન / સેનામાં સેવા",
  "Vote and join a political party": "મત આપો અને રાજકીય પક્ષમાં જોડાઓ",
  "Voting amendments: citizens 18+ can vote; no poll tax required; any citizen (men and women) can vote; male citizens of any race can vote.":
    "મતદાન સુધારા: 18+ વર્ષના નાગરિકો મત આપી શકે; પોલ ટૅક્સ જરૂરી નથી; કોઈપણ નાગરિક (પુરુષ અને મહિલા) મત આપી શકે; કોઈપણ જાતિના પુરુષ નાગરિકો મત આપી શકે.",
  "WWII General / 34th President / Interstate Highway System":
    "બીજા વિશ્વયુદ્ધના જનરલ / 34મા રાષ્ટ્રપતિ / ઇન્ટરસ્ટેટ હાઇવે સિસ્ટમ",
  "War of 1812": "1812નું યુદ્ધ",
  "War of 1812 / Mexican-American War / Civil War / Spanish-American War":
    "1812નું યુદ્ધ / મેક્સિકન-અમેરિકન યુદ્ધ / ગૃહયુદ્ધ / સ્પેનિશ-અમેરિકન યુદ્ધ",
  "War on Terror / War in Afghanistan / War in Iraq":
    "આતંકવાદ સામે યુદ્ધ / અફઘાનિસ્તાનમાં યુદ્ધ / ઇરાકમાં યુદ્ધ",
  "Wars in the 1800s include the War of 1812, Mexican-American War, Civil War, and Spanish-American War.":
    "1800ના દાયકાના યુદ્ધોમાં 1812નું યુદ્ધ, મેક્સિકન-અમેરિકન યુદ્ધ, ગૃહયુદ્ધ અને સ્પેનિશ-અમેરિકન યુદ્ધ શામેલ છે.",
  "Wars in the 1900s include World War I, World War II, Korean War, Vietnam War, and the Gulf War.":
    "1900ના દાયકાના યુદ્ધોમાં પ્રથમ વિશ્વયુદ્ધ, બીજું વિશ્વયુદ્ધ, કોરિયન યુદ્ધ, વિયેતનામ યુદ્ધ અને ખાડી યુદ્ધ શામેલ છે.",
  "Washington, D.C.": "વૉશિંગ્ટન, ડી.સી.",
  "Washington, D.C. is the capital of the United States.":
    "વૉશિંગ્ટન, ડી.સી. યુનાઈટેડ સ્ટેટ્સની રાજધાની છે.",
  "Watch TV and sleep": "ટીવી જુઓ અને ઊંઘો",
  "We show loyalty to the United States and its flag when we say the Pledge of Allegiance.":
    "જ્યારે આપણે Pledge of Allegiance કહીએ છીએ ત્યારે આપણે યુનાઈટેડ સ્ટેટ્સ અને તેના ધ્વજ પ્રત્યે વફાદારી દર્શાવીએ છીએ.",
  "What amendment defines citizenship by birth?":
    "કયો સુધારો જન્મથી નાગરિકતાને વ્યાખ્યાયિત કરે છે?",
  "What are three rights of everyone living in the United States?":
    "યુનાઈટેડ સ્ટેટ્સમાં રહેતી દરેક વ્યક્તિના ત્રણ અધિકારો શું છે?",
  "What are two Cabinet-level positions?":
    "બે કેબિનેટ-સ્તરના હોદ્દા કયા છે?",
  "What are two examples of civic participation?":
    "નાગરિક ભાગીદારીના બે ઉદાહરણો શું છે?",
  "What did the civil rights movement do?":
    "નાગરિક અધિકાર આંદોલને શું કર્યું?",
  "What document was written in 1787?":
    "1787માં કયો દસ્તાવેજ લખવામાં આવ્યો હતો?",
  "What does the Bill of Rights protect?":
    "બિલ ઑફ રાઇટ્સ શું રક્ષણ કરે છે?",
  "What founding document said the American colonies were free from Britain?":
    "કયા સ્થાપક દસ્તાવેજે કહ્યું કે અમેરિકન વસાહતો બ્રિટનથી મુક્ત છે?",
  "What group of people was taken and sold as slaves?":
    "કયા જૂથના લોકોને ગુલામ તરીકે લઈ જવામાં આવ્યા અને વેચવામાં આવ્યા?",
  "What happened on September 11, 2001?":
    "11 સપ્ટેમ્બર, 2001ના રોજ શું થયું?",
  "What is Independence Day?": "સ્વતંત્રતા દિવસ શું છે?",
  "What is Memorial Day?": "મેમોરિયલ ડે શું છે?",
  "What is Veterans Day?": "વેટરન્સ ડે શું છે?",
  "What is one way Americans can serve their country?":
    "અમેરિકનો તેમના દેશની સેવા કરી શકે તેવો એક રસ્તો શું છે?",
  "What is the capital of the United States?":
    "યુનાઈટેડ સ્ટેટ્સની રાજધાની શું છે?",
  "What is the capital of your state? (Texas)":
    "તમારા રાજ્યની રાજધાની શું છે? (ટેક્સાસ)",
  "What is the highest court in the United States?":
    "યુનાઈટેડ સ્ટેટ્સની સર્વોચ્ચ અદાલત કઈ છે?",
  "What is the name of the President of the United States now?":
    "હવે યુનાઈટેડ સ્ટેટ્સના રાષ્ટ્રપતિનું નામ શું છે?",
  "What is the name of the Speaker of the House of Representatives now?":
    "હવે પ્રતિનિધિ સભાના સ્પીકરનું નામ શું છે?",
  "What is the name of the Vice President of the United States now?":
    "હવે યુનાઈટેડ સ્ટેટ્સના ઉપરાષ્ટ્રપતિનું નામ શું છે?",
  "What is the national anthem?": "રાષ્ટ્રગીત શું છે?",
  "What part of the federal government writes laws?":
    "ફેડરલ સરકારનો કયો ભાગ કાયદા લખે છે?",
  "What territory was bought from France in 1803?":
    "1803માં ફ્રાન્સ પાસેથી કયો પ્રદેશ ખરીદવામાં આવ્યો?",
  "What war ended slavery?": "કયા યુદ્ધે ગુલામી સમાપ્ત કરી?",
  "What war was fought for independence from Britain?":
    "બ્રિટનથી સ્વતંત્રતા માટે કયું યુદ્ધ લડવામાં આવ્યું?",
  "What was the Great Depression?": "મહામંદી શું હતી?",
  "What was the main concern of the United States during the Cold War?":
    "શીત યુદ્ધ દરમિયાન યુનાઈટેડ સ્ટેટ્સની મુખ્ય ચિંતા શું હતી?",
  "What was the war between the North and the South?":
    "ઉત્તર અને દક્ષિણ વચ્ચેનું યુદ્ધ શું હતું?",
  "When did all men get the right to vote?":
    "બધા પુરુષોને મતદાનનો અધિકાર ક્યારે મળ્યો?",
  "When did the Great Depression start?": "મહામંદી ક્યારે શરૂ થઈ?",
  "When did women get the right to vote?":
    "મહિલાઓને મતદાનનો અધિકાર ક્યારે મળ્યો?",
  "Who appoints federal judges?":
    "ફેડરલ ન્યાયાધીશોની નિમણૂક કોણ કરે છે?",
  "Who can vote in federal elections, run for federal office, and serve on a jury?":
    "ફેડરલ ચૂંટણીઓમાં કોણ મત આપી શકે, ફેડરલ ઓફિસ માટે ઊભું રહી શકે અને જ્યુરીમાં સેવા આપી શકે?",
  "Who does a U.S. senator represent?":
    "યુ.એસ. સેનેટર કોનું પ્રતિનિધિત્વ કરે છે?",
  "Who does a member of the House of Representatives represent?":
    "પ્રતિનિધિ સભાના સભ્ય કોનું પ્રતિનિધિત્વ કરે છે?",
  "Who elects U.S. senators?": "યુ.એસ. સેનેટરોને કોણ ચૂંટે છે?",
  "Who elects members of the House of Representatives?":
    "પ્રતિનિધિ સભાના સભ્યોને કોણ ચૂંટે છે?",
  "Who is Commander in Chief of the U.S. military?":
    "યુ.એસ. સેનાના કમાન્ડર ઇન ચીફ કોણ છે?",
  "Who is one of your state's U.S. senators now? (Texas)":
    "તમારા રાજ્યના યુ.એસ. સેનેટરોમાંથી એક કોણ છે? (ટેક્સાસ)",
  "Who is the Chief Justice of the United States now?":
    "હવે યુનાઈટેડ સ્ટેટ્સના મુખ્ય ન્યાયાધીશ કોણ છે?",
  "Who is the governor of your state now? (Texas)":
    "હવે તમારા રાજ્યના ગવર્નર કોણ છે? (ટેક્સાસ)",
  "Who lived in America before Europeans arrived?":
    "યુરોપિયનોના આવ્યા પહેલાં અમેરિકામાં કોણ રહેતું હતું?",
  "Who was the main rival of the United States during the Cold War?":
    "શીત યુદ્ધ દરમિયાન યુનાઈટેડ સ્ટેટ્સનો મુખ્ય હરીફ કોણ હતો?",
  "Why did Americans declare independence?":
    "અમેરિકનોએ સ્વતંત્રતા શા માટે જાહેર કરી?",
  "Why did colonists come to America?":
    "વસાહતીઓ અમેરિકા શા માટે આવ્યા?",
  "Why did the United States enter World War I?":
    "યુનાઈટેડ સ્ટેટ્સ પ્રથમ વિશ્વયુદ્ધમાં શા માટે જોડાયું?",
  "Why did the United States enter World War II?":
    "યુનાઈટેડ સ્ટેટ્સ બીજા વિશ્વયુદ્ધમાં શા માટે જોડાયું?",
  "Why did the United States enter the Korean War?":
    "યુનાઈટેડ સ્ટેટ્સ કોરિયન યુદ્ધમાં શા માટે જોડાયું?",
  "Why did the United States enter the Persian Gulf War?":
    "યુનાઈટેડ સ્ટેટ્સ પર્શિયન ખાડી યુદ્ધમાં શા માટે જોડાયું?",
  "Why did the United States enter the Vietnam War?":
    "યુનાઈટેડ સ્ટેટ્સ વિયેતનામ યુદ્ધમાં શા માટે જોડાયું?",
  "Why do U.S. representatives serve shorter terms than U.S. senators?":
    "યુ.એસ. પ્રતિનિધિઓ યુ.એસ. સેનેટરો કરતાં ટૂંકી મુદ્દત શા માટે સેવા આપે છે?",
  "Why does each state have two senators?":
    "દરેક રાજ્યમાં બે સેનેટર શા માટે છે?",
  "Why is it important to pay federal taxes?":
    "ફેડરલ કર ચૂકવવો શા માટે મહત્વપૂર્ણ છે?",
  "Why is the Declaration of Independence important?":
    "સ્વતંત્રતાનું ઘોષણાપત્ર શા માટે મહત્વપૂર્ણ છે?",
  "Why must men aged 18–25 register for Selective Service?":
    "18-25 વર્ષના પુરુષોએ સિલેક્ટિવ સર્વિસ માટે નોંધણી શા માટે કરાવવી જોઈએ?",
  "Why were the Federalist Papers important?":
    "ફેડરલિસ્ટ પેપર્સ શા માટે મહત્વપૂર્ણ હતા?",
  "Winning the Civil War": "ગૃહયુદ્ધ જીતવું",
  "Women got the right to vote in 1920 with the 19th Amendment.":
    "1920માં 19મા સુધારા સાથે મહિલાઓને મતદાનનો અધિકાર મળ્યો.",
  "Women's rights leaders of the 1800s include Susan B. Anthony, Elizabeth Cady Stanton, Sojourner Truth, Harriet Tubman, and Lucretia Mott.":
    "1800ના દાયકાના મહિલા અધિકાર નેતાઓમાં સુસાન બી. ઍન્થની, ઍલિઝાબેથ કેડી સ્ટેન્ટન, સોજર્નર ટ્રુથ, હૅરિયેટ ટબમૅન અને લ્યુક્રેશિયા મૉટ શામેલ છે.",
  "Won World War II": "બીજું વિશ્વયુદ્ધ જીત્યું",
  "World War I / World War II / Korean War / Vietnam War / Gulf War":
    "પ્રથમ વિશ્વયુદ્ધ / બીજું વિશ્વયુદ્ધ / કોરિયન યુદ્ધ / વિયેતનામ યુદ્ધ / ખાડી યુદ્ધ",
  "Writes laws": "કાયદા લખે છે",
  "Writing the Constitution": "બંધારણ લખવું",
  "Writing the Constitution alone": "એકલા બંધારણ લખવું",
  "Writing the Declaration of Independence": "સ્વતંત્રતાનું ઘોષણાપત્ર લખવું",
  "Wrote the Declaration of Independence / Third President / Louisiana Purchase":
    "સ્વતંત્રતાનું ઘોષણાપત્ર લખ્યું / ત્રીજા રાષ્ટ્રપતિ / લુઇસિયાના ખરીદી",
};

// ── Apply translations ──
let count = 0;
for (const [en, gu] of Object.entries(translations)) {
  const search = `gu: "${en}"`;
  const replace = `gu: "${gu}"`;
  const parts = content.split(search);
  if (parts.length > 1) {
    count += parts.length - 1;
    content = parts.join(replace);
  }
}
console.log(`Applied ${count} standard translations.`);

// ── Fix corrupted g010 explanation ──
const corruptedOld = `gu: "ડૉનૅલ્ડ ટ્રૅમ્પ હૅઙ્g-hl United States (સંયૂક્ત રાજ્યયો)ના (:raksha) (current) President (રૅɑʂʈrApATi) chHE.",`;
const corruptedNew = `gu: "ડૉનૅલ્ડ ટ્રૅમ્પ યુનાઈટેડ સ્ટેટ્સના વર્તમાન રાષ્ટ્રપતિ છે.",`;
if (content.includes(corruptedOld)) {
  content = content.replace(corruptedOld, corruptedNew);
  console.log("Fixed corrupted g010 explanation.");
}

// ── Fix "We the People" question with broken escapes (g017) ──
const weThePeopleQOld = `gu: "The U.S. Constitution starts with \\"We the People.\\\\" What does \\\\"We the People\\\\" mean?",`;
const weThePeopleQNew = `gu: "યુ.એસ. બંધારણ \\"We the People\\" થી શરૂ થાય છે. \\"We the People\\" નો અર્થ શું છે?",`;
if (content.includes(weThePeopleQOld)) {
  content = content.replace(weThePeopleQOld, weThePeopleQNew);
  console.log("Fixed We the People question.");
} else {
  // Try alternate pattern
  const alt = 'gu: "The U.S. Constitution starts with \\"We the People.\\\\';
  if (content.includes(alt)) {
    // Find the full line and replace
    const lineStart = content.indexOf(alt);
    const lineEnd = content.indexOf('",', lineStart) + 2;
    const oldLine = content.substring(lineStart, lineEnd);
    content = content.replace(oldLine, `gu: "યુ.એસ. બંધારણ \\"We the People\\" થી શરૂ થાય છે. \\"We the People\\" નો અર્થ શું છે?",`);
    console.log("Fixed We the People question (alt pattern).");
  }
}

// ── Fix "We the People" explanation with broken escapes ──
const weThePeopleExpOld = `gu: "\\\\"We the People\\\\" means self-government — the people govern themselves through consent of the governed.",`;
const weThePeopleExpNew = `gu: "\\"We the People\\" નો અર્થ સ્વ-શાસન છે — લોકો શાસિતોની સંમતિથી પોતાનું શાસન કરે છે.",`;
if (content.includes(weThePeopleExpOld)) {
  content = content.replace(weThePeopleExpOld, weThePeopleExpNew);
  console.log("Fixed We the People explanation.");
} else {
  const alt2 = 'gu: "\\\\"We the People\\\\"';
  if (content.includes(alt2)) {
    const lineStart = content.indexOf(alt2);
    const lineEnd = content.indexOf('",', lineStart) + 2;
    const oldLine = content.substring(lineStart, lineEnd);
    content = content.replace(oldLine, `gu: "\\"We the People\\" નો અર્થ સ્વ-શાસન છે — લોકો શાસિતોની સંમતિથી પોતાનું શાસન કરે છે.",`);
    console.log("Fixed We the People explanation (alt pattern).");
  }
}

// ── Fix "The words" option related to "We the People" ──
// Search for any remaining English-only gu values with "The words"
const wordsOld = 'gu: "The words \\"We the People\\"",';
const wordsNew = 'gu: "\\"\\"We the People\\" શબ્દો",';
// Actually let me check what's in the file for this
const wordsMatch = content.match(/gu:\s*"The words.*?"/g);
if (wordsMatch) {
  console.log("Found 'The words' pattern:", wordsMatch);
}

fs.writeFileSync('data/questions.ts', content, 'utf8');
console.log("\nDone! File saved.");

// ── Verify: count remaining English-only gu values ──
const guValues = content.match(/gu:\s*"([^"]*)"/g) || [];
const gujaratiRange = /[\u0A80-\u0AFF]/;
let englishCount = 0;
let gujaratiCount = 0;
for (const match of guValues) {
  const val = match.replace(/^gu:\s*"/, '').replace(/"$/, '');
  if (val.length === 0) continue;
  if (gujaratiRange.test(val)) {
    gujaratiCount++;
  } else {
    englishCount++;
    // Print first few remaining English for debugging
    if (englishCount <= 10) console.log(`  Still English: ${val}`);
  }
}
console.log(`\nVerification: ${gujaratiCount} Gujarati, ${englishCount} still English out of ${guValues.length} total`);
