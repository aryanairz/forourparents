/**
 * State representatives data for personalized civics questions.
 * AUTO-GENERATED from congresspeople.md
 * Contains all 50 states with current 2026 congressional data.
 */

export interface StateData {
  name: string;
  capital: string;
  governor: string;
  senators: [string, string];
  /** Map of district number → representative name. District 0 = "At-Large" */
  districts: Record<number, string>;
}

export const stateData: Record<string, StateData> = {
  AK: {
    name: "Alaska",
    capital: "Juneau",
    governor: "Mike Dunleavy",
    senators: ["Lisa Murkowski", "Dan Sullivan"],
    districts: {"0":"Nick Begich III"},
  },
  AL: {
    name: "Alabama",
    capital: "Montgomery",
    governor: "Kay Ivey",
    senators: ["Tommy Tuberville", "Katie Britt"],
    districts: {"1":"Barry Moore","2":"Shomari Figures","3":"Mike Rogers","4":"Robert Aderholt","5":"Dale Strong","6":"Gary Palmer","7":"Terri Sewell"},
  },
  AR: {
    name: "Arkansas",
    capital: "Little Rock",
    governor: "Sarah Huckabee Sanders",
    senators: ["John Boozman", "Tom Cotton"],
    districts: {"1":"Rick Crawford","2":"French Hill","3":"Steve Womack","4":"Bruce Westerman"},
  },
  AZ: {
    name: "Arizona",
    capital: "Phoenix",
    governor: "Katie Hobbs",
    senators: ["Mark Kelly", "Ruben Gallego"],
    districts: {"1":"David Schweikert","2":"Eli Crane","3":"Yassamin Ansari","4":"Greg Stanton","5":"Andy Biggs","6":"Juan Ciscomani","7":"Raúl Grijalva","8":"Abraham Hamadeh","9":"Paul Gosar"},
  },
  CA: {
    name: "California",
    capital: "Sacramento",
    governor: "Gavin Newsom",
    senators: ["Alex Padilla", "Adam Schiff"],
    districts: {"1":"Doug LaMalfa","2":"Jared Huffman","3":"Kevin Kiley","4":"Mike Thompson","5":"Tom McClintock","6":"Ami Bera","7":"Doris Matsui","8":"John Garamendi","9":"Josh Harder","10":"Mark DeSaulnier","11":"Nancy Pelosi","12":"Lateefah Simon","13":"Adam Gray","14":"Eric Swalwell","15":"Kevin Mullin","16":"Sam Liccardo","17":"Ro Khanna","18":"Zoe Lofgren","19":"Jimmy Panetta","20":"Vince Fong","21":"Jim Costa","22":"David Valadao","23":"Jay Obernolte","24":"Salud Carbajal","25":"Raul Ruiz","26":"Julia Brownley","27":"George Whitesides","28":"Judy Chu","29":"Luz Rivas","30":"Laura Friedman","31":"Gil Cisneros","32":"Brad Sherman","33":"Pete Aguilar","34":"Jimmy Gomez","35":"Norma Torres","36":"Ted Lieu","37":"Sydney Kamlager","38":"Linda Sánchez","39":"Mark Takano","40":"Young Kim","41":"Ken Calvert","42":"Robert Garcia","43":"Maxine Waters","44":"Nanette Barragán","45":"Derek Tran","46":"Lou Correa","47":"Dave Min","48":"Darrell Issa","49":"Mike Levin","50":"Scott Peters","51":"Sara Jacobs","52":"Juan Vargas"},
  },
  CO: {
    name: "Colorado",
    capital: "Denver",
    governor: "Jared Polis",
    senators: ["Michael Bennet", "John Hickenlooper"],
    districts: {"1":"Diana DeGette","2":"Joe Neguse","3":"Jeff Hurd","4":"Lauren Boebert","5":"Jeff Crank","6":"Jason Crow","7":"Brittany Pettersen","8":"Gabe Evans"},
  },
  CT: {
    name: "Connecticut",
    capital: "Hartford",
    governor: "Ned Lamont",
    senators: ["Richard Blumenthal", "Chris Murphy"],
    districts: {"1":"John Larson","2":"Joe Courtney","3":"Rosa DeLauro","4":"Jim Himes","5":"Jahana Hayes"},
  },
  DE: {
    name: "Delaware",
    capital: "Dover",
    governor: "Matt Meyer",
    senators: ["Chris Coons", "Lisa Blunt Rochester"],
    districts: {"0":"Sarah McBride"},
  },
  FL: {
    name: "Florida",
    capital: "Tallahassee",
    governor: "Ron DeSantis",
    senators: ["Rick Scott", "Marco Rubio"],
    districts: {"1":"Jimmy Patronis","2":"Neal Dunn","3":"Kat Cammack","4":"Aaron Bean","5":"John Rutherford","6":"Randy Fine","7":"Cory Mills","8":"Mike Haridopolos","9":"Darren Soto","10":"Maxwell Frost","11":"Daniel Webster","12":"Gus Bilirakis","13":"Anna Paulina Luna","14":"Kathy Castor","15":"Laurel Lee","16":"Vern Buchanan","17":"Greg Steube","18":"Scott Franklin","19":"Byron Donalds","20":"Sheila Cherfilus-McCormick","21":"Brian Mast","22":"Lois Frankel","23":"Jared Moskowitz","24":"Frederica Wilson","25":"Debbie Wasserman Schultz","26":"Mario Díaz-Balart","27":"María Elvira Salazar","28":"Carlos Giménez"},
  },
  GA: {
    name: "Georgia",
    capital: "Atlanta",
    governor: "Brian Kemp",
    senators: ["Jon Ossoff", "Raphael Warnock"],
    districts: {"1":"Buddy Carter","2":"Sanford Bishop","3":"Brian Jack","4":"Hank Johnson","5":"Nikema Williams","6":"Lucy McBath","7":"Rich McCormick","8":"Austin Scott","9":"Andrew Clyde","10":"Mike Collins","11":"Barry Loudermilk","12":"Rick Allen","13":"David Scott","14":"Marjorie Taylor Greene"},
  },
  HI: {
    name: "Hawaii",
    capital: "Honolulu",
    governor: "Josh Green",
    senators: ["Mazie Hirono", "Brian Schatz"],
    districts: {"1":"Ed Case","2":"Jill Tokuda"},
  },
  IA: {
    name: "Iowa",
    capital: "Des Moines",
    governor: "Kim Reynolds",
    senators: ["Chuck Grassley", "Joni Ernst"],
    districts: {"1":"Mariannette Miller-Meeks","2":"Ashley Hinson","3":"Zach Nunn","4":"Randy Feenstra"},
  },
  ID: {
    name: "Idaho",
    capital: "Boise",
    governor: "Brad Little",
    senators: ["Mike Crapo", "Jim Risch"],
    districts: {"1":"Russ Fulcher","2":"Michael Simpson"},
  },
  IL: {
    name: "Illinois",
    capital: "Springfield",
    governor: "J. B. Pritzker",
    senators: ["Dick Durbin", "Tammy Duckworth"],
    districts: {"1":"Jonathan Jackson","2":"Robin Kelly","3":"Delia Ramirez","4":"Chuy García","5":"Mike Quigley","6":"Sean Casten","7":"Danny K. Davis","8":"Raja Krishnamoorthi","9":"Jan Schakowsky","10":"Brad Schneider","11":"Bill Foster","12":"Mike Bost","13":"Nikki Budzinski","14":"Lauren Underwood","15":"Mary Miller","16":"Darin LaHood","17":"Eric Sorensen"},
  },
  IN: {
    name: "Indiana",
    capital: "Indianapolis",
    governor: "Mike Braun",
    senators: ["Todd Young", "Jim Banks"],
    districts: {"1":"Frank Mrvan","2":"Rudy Yakym","3":"Marlin Stutzman","4":"Jim Baird","5":"Victoria Spartz","6":"Jefferson Shreve","7":"André Carson","8":"Mark Messmer","9":"Erin Houchin"},
  },
  KS: {
    name: "Kansas",
    capital: "Topeka",
    governor: "Laura Kelly",
    senators: ["Jerry Moran", "Roger Marshall"],
    districts: {"1":"Tracey Mann","2":"Derek Schmidt","3":"Sharice Davids","4":"Ron Estes"},
  },
  KY: {
    name: "Kentucky",
    capital: "Frankfort",
    governor: "Andy Beshear",
    senators: ["Mitch McConnell", "Rand Paul"],
    districts: {"1":"James Comer","2":"Brett Guthrie","3":"Morgan McGarvey","4":"Thomas Massie","5":"Hal Rogers","6":"Andy Barr"},
  },
  LA: {
    name: "Louisiana",
    capital: "Baton Rouge",
    governor: "Jeff Landry",
    senators: ["Bill Cassidy", "John Kennedy"],
    districts: {"1":"Steve Scalise","2":"Troy Carter","3":"Clay Higgins","4":"Mike Johnson","5":"Julia Letlow","6":"Cleo Fields"},
  },
  MA: {
    name: "Massachusetts",
    capital: "Boston",
    governor: "Maura Healey",
    senators: ["Elizabeth Warren", "Ed Markey"],
    districts: {"1":"Richard Neal","2":"Jim McGovern","3":"Lori Trahan","4":"Jake Auchincloss","5":"Katherine Clark","6":"Seth Moulton","7":"Ayanna Pressley","8":"Stephen Lynch","9":"Bill Keating"},
  },
  MD: {
    name: "Maryland",
    capital: "Annapolis",
    governor: "Wes Moore",
    senators: ["Chris Van Hollen", "Angela Alsobrooks"],
    districts: {"1":"Andy Harris","2":"Johnny Olszewski","3":"Sarah Elfreth","4":"Glenn Ivey","5":"Steny Hoyer","6":"April McClain Delaney","7":"Kweisi Mfume","8":"Jamie Raskin"},
  },
  ME: {
    name: "Maine",
    capital: "Augusta",
    governor: "Janet Mills",
    senators: ["Susan Collins", "Angus King"],
    districts: {"1":"Chellie Pingree","2":"Jared Golden"},
  },
  MI: {
    name: "Michigan",
    capital: "Lansing",
    governor: "Gretchen Whitmer",
    senators: ["Gary Peters", "Elissa Slotkin"],
    districts: {"1":"Jack Bergman","2":"John Moolenaar","3":"Hillary Scholten","4":"Bill Huizenga","5":"Tim Walberg","6":"Debbie Dingell","7":"Tom Barrett","8":"Kristen McDonald Rivet","9":"Lisa McClain","10":"John James","11":"Haley Stevens","12":"Rashida Tlaib","13":"Shri Thanedar"},
  },
  MN: {
    name: "Minnesota",
    capital: "Saint Paul",
    governor: "Tim Walz",
    senators: ["Amy Klobuchar", "Tina Smith"],
    districts: {"1":"Brad Finstad","2":"Angie Craig","3":"Kelly Morrison","4":"Betty McCollum","5":"Ilhan Omar","6":"Tom Emmer","7":"Michelle Fischbach","8":"Pete Stauber"},
  },
  MO: {
    name: "Missouri",
    capital: "Jefferson City",
    governor: "Mike Kehoe",
    senators: ["Josh Hawley", "Eric Schmitt"],
    districts: {"1":"Wesley Bell","2":"Ann Wagner","3":"Bob Onder","4":"Mark Alford","5":"Emanuel Cleaver","6":"Sam Graves","7":"Eric Burlison","8":"Jason Smith"},
  },
  MS: {
    name: "Mississippi",
    capital: "Jackson",
    governor: "Tate Reeves",
    senators: ["Roger Wicker", "Cindy Hyde-Smith"],
    districts: {"1":"Trent Kelly","2":"Bennie Thompson","3":"Michael Guest","4":"Mike Ezell"},
  },
  MT: {
    name: "Montana",
    capital: "Helena",
    governor: "Greg Gianforte",
    senators: ["Steve Daines", "Tim Sheehy"],
    districts: {"1":"Ryan Zinke","2":"Troy Downing"},
  },
  NC: {
    name: "North Carolina",
    capital: "Raleigh",
    governor: "Josh Stein",
    senators: ["Thom Tillis", "Ted Budd"],
    districts: {"1":"Don Davis","2":"Deborah Ross","3":"Greg Murphy","4":"Valerie Foushee","5":"Virginia Foxx","6":"Addison McDowell","7":"David Rouzer","8":"Mark Harris","9":"Richard Hudson","10":"Pat Harrigan","11":"Chuck Edwards","12":"Alma Adams","13":"Brad Knott","14":"Tim Moore"},
  },
  ND: {
    name: "North Dakota",
    capital: "Bismarck",
    governor: "Kelly Armstrong",
    senators: ["John Hoeven", "Kevin Cramer"],
    districts: {"0":"Kelly Armstrong"},
  },
  NE: {
    name: "Nebraska",
    capital: "Lincoln",
    governor: "Jim Pillen",
    senators: ["Deb Fischer", "Pete Ricketts"],
    districts: {"1":"Mike Flood","2":"Don Bacon","3":"Adrian Smith"},
  },
  NH: {
    name: "New Hampshire",
    capital: "Concord",
    governor: "Kelly Ayotte",
    senators: ["Jeanne Shaheen", "Maggie Hassan"],
    districts: {"1":"Chris Pappas","2":"Maggie Goodlander"},
  },
  NJ: {
    name: "New Jersey",
    capital: "Trenton",
    governor: "Mikie Sherrill",
    senators: ["Cory Booker", "Andy Kim"],
    districts: {"1":"Donald Norcross","2":"Jeff Van Drew","3":"Herbert Conaway","4":"Chris Smith","5":"Josh Gottheimer","6":"Frank Pallone","7":"Tom Kean Jr.","8":"Rob Menendez","9":"Nellie Pou","10":"LaMonica McIver","11":"Vacant","12":"Bonnie Watson Coleman"},
  },
  NM: {
    name: "New Mexico",
    capital: "Santa Fe",
    governor: "Michelle Lujan Grisham",
    senators: ["Martin Heinrich", "Ben Ray Luján"],
    districts: {"1":"Melanie Stansbury","2":"Gabe Vasquez","3":"Teresa Leger Fernandez"},
  },
  NV: {
    name: "Nevada",
    capital: "Carson City",
    governor: "Joe Lombardo",
    senators: ["Catherine Cortez Masto", "Jacky Rosen"],
    districts: {"1":"Dina Titus","2":"Mark Amodei","3":"Susie Lee","4":"Steven Horsford"},
  },
  NY: {
    name: "New York",
    capital: "Albany",
    governor: "Kathy Hochul",
    senators: ["Chuck Schumer", "Kirsten Gillibrand"],
    districts: {"1":"Nick LaLota","2":"Andrew Garbarino","3":"Tom Suozzi","4":"Laura Gillen","5":"Gregory Meeks","6":"Grace Meng","7":"Nydia Vel\u00e1zquez","8":"Hakeem Jeffries","9":"Yvette Clarke","10":"Dan Goldman","11":"Nicole Malliotakis","12":"Jerry Nadler","13":"Adriano Espaillat","14":"Alexandria Ocasio-Cortez","15":"Ritchie Torres","16":"George Latimer","17":"Mike Lawler","18":"Pat Ryan","19":"Josh Riley","20":"Paul Tonko","21":"Elise Stefanik","22":"John Mannion","23":"Nick Langworthy","24":"Claudia Tenney","25":"Joe Morelle","26":"Tim Kennedy"},
  },
  OH: {
    name: "Ohio",
    capital: "Columbus",
    governor: "Mike DeWine",
    senators: ["Sherrod Brown", "J.D. Vance"],
    districts: {"1":"Greg Landsman","2":"David Taylor","3":"Joyce Beatty","4":"Jim Jordan","5":"Bob Latta","6":"Michael Rulli","7":"Max Miller","8":"Warren Davidson","9":"Marcy Kaptur","10":"Mike Turner","11":"Shontel Brown","12":"Troy Balderson","13":"Emilia Sykes","14":"Dave Joyce","15":"Mike Carey"},
  },
  OK: {
    name: "Oklahoma",
    capital: "Oklahoma City",
    governor: "Kevin Stitt",
    senators: ["James Lankford", "Alan Armstrong"],
    districts: {"1":"Kevin Hern","2":"Josh Brecheen","3":"Frank Lucas","4":"Tom Cole"},
  },
  OR: {
    name: "Oregon",
    capital: "Salem",
    governor: "Tina Kotek",
    senators: ["Ron Wyden", "Jeff Merkley"],
    districts: {"1":"Suzanne Bonamici","2":"Cliff Bentz","3":"Maxine Dexter","4":"Val Hoyle","5":"Janelle Bynum","6":"Andrea Salinas"},
  },
  PA: {
    name: "Pennsylvania",
    capital: "Harrisburg",
    governor: "Josh Shapiro",
    senators: ["John Fetterman", "Bob Casey Jr."],
    districts: {"1":"Brian Fitzpatrick","2":"Brendan Boyle","3":"Dwight Evans","4":"Madeleine Dean","5":"Mary Gay Scanlon","6":"Chrissy Houlahan","7":"Ryan Mackenzie","8":"Robert Bresnahan","9":"Dan Meuser","10":"Scott Perry","11":"Lloyd Smucker","12":"Summer Lee","13":"John Joyce","14":"Guy Reschenthaler","15":"Glenn Thompson","16":"Mike Kelly","17":"Chris Deluzio"},
  },
  RI: {
    name: "Rhode Island",
    capital: "Providence",
    governor: "Daniel McKee",
    senators: ["Jack Reed", "Sheldon Whitehouse"],
    districts: {"1":"Gabe Amo","2":"Seth Magaziner"},
  },
  SC: {
    name: "South Carolina",
    capital: "Columbia",
    governor: "Henry McMaster",
    senators: ["Lindsey Graham", "Tim Scott"],
    districts: {"1":"Nancy Mace","2":"Joe Wilson","3":"Sheri Biggs","4":"William Timmons","5":"Ralph Norman","6":"James Clyburn","7":"Russell Fry"},
  },
  SD: {
    name: "South Dakota",
    capital: "Pierre",
    governor: "Larry Rhoden",
    senators: ["John Thune", "Mike Rounds"],
    districts: {"0":"Dusty Johnson"},
  },
  TN: {
    name: "Tennessee",
    capital: "Nashville",
    governor: "Bill Lee",
    senators: ["Marsha Blackburn", "Bill Hagerty"],
    districts: {"1":"Diana Harshbarger","2":"Tim Burchett","3":"Chuck Fleischmann","4":"Scott DesJarlais","5":"Andy Ogles","6":"John Rose","7":"Matt Van Epps","8":"David Kustoff","9":"Steve Cohen"},
  },
  TX: {
    name: "Texas",
    capital: "Austin",
    governor: "Greg Abbott",
    senators: ["John Cornyn", "Ted Cruz"],
    districts: {"1":"Nathaniel Moran","2":"Dan Crenshaw","3":"Keith Self","4":"Pat Fallon","5":"Lance Gooden","6":"Jake Ellzey","7":"Lizzie Fletcher","8":"Morgan Luttrell","9":"Al Green","10":"Michael McCaul","11":"August Pfluger","12":"Craig Goldman","13":"Ronny Jackson","14":"Randy Weber","15":"Monica De La Cruz","16":"Veronica Escobar","17":"Pete Sessions","18":"Christian Menefee","19":"Jodey Arrington","20":"Joaquin Castro","21":"Chip Roy","22":"Troy Nehls","23":"Tony Gonzales","24":"Beth Van Duyne","25":"Roger Williams","26":"Brandon Gill","27":"Michael Cloud","28":"Henry Cuellar","29":"Sylvia Garcia","30":"Jasmine Crockett","31":"John Carter","32":"Julie Johnson","33":"Marc Veasey","34":"Vicente Gonzalez","35":"Greg Casar","36":"Brian Babin","37":"Lloyd Doggett","38":"Wesley Hunt"},
  },
  UT: {
    name: "Utah",
    capital: "Salt Lake City",
    governor: "Spencer Cox",
    senators: ["Mike Lee", "John Curtis"],
    districts: {"1":"Blake Moore","2":"Celeste Maloy","3":"Mike Kennedy","4":"Burgess Owens"},
  },
  VA: {
    name: "Virginia",
    capital: "Richmond",
    governor: "Glenn Youngkin",
    senators: ["Tim Kaine", "Mark Warner"],
    districts: {"1":"Robert Wittman","2":"Jennifer Kiggans","3":"Bobby Scott","4":"Jennifer McClellan","5":"John McGuire","6":"Ben Cline","7":"Eugene Vindman","8":"Don Beyer","9":"Morgan Griffith","10":"Suhas Subramanyam","11":"James Walkinshaw"},
  },
  VT: {
    name: "Vermont",
    capital: "Montpelier",
    governor: "Phil Scott",
    senators: ["Bernie Sanders", "Peter Welch"],
    districts: {"0":"Becca Balint"},
  },
  WA: {
    name: "Washington",
    capital: "Olympia",
    governor: "Bob Ferguson",
    senators: ["Patty Murray", "Maria Cantwell"],
    districts: {"1":"Suzan DelBene","2":"Rick Larsen","3":"Marie Perez","4":"Dan Newhouse","5":"Michael Baumgartner","6":"Emily Randall","7":"Pramila Jayapal","8":"Kim Schrier","9":"Adam Smith","10":"Marilyn Strickland"},
  },
  WI: {
    name: "Wisconsin",
    capital: "Madison",
    governor: "Tony Evers",
    senators: ["Tammy Baldwin", "Ron Johnson"],
    districts: {"1":"Bryan Steil","2":"Mark Pocan","3":"Derrick Van Orden","4":"Gwen Moore","5":"Scott Fitzgerald","6":"Glenn Grothman","7":"Tom Tiffany","8":"Tony Wied"},
  },
  WV: {
    name: "West Virginia",
    capital: "Charleston",
    governor: "Patrick Morrisey",
    senators: ["Shelley Moore Capito", "Jim Justice"],
    districts: {"1":"Carol Miller","2":"Riley Moore"},
  },
  WY: {
    name: "Wyoming",
    capital: "Cheyenne",
    governor: "Mark Gordon",
    senators: ["John Barrasso", "Cynthia Lummis"],
    districts: {"0":"Harriet Hageman"},
  },
};

/** All state abbreviations we have data for */
export const supportedStates = Object.keys(stateData).sort();

/** Get sorted list of state options for a dropdown: { code, name } */
export function getStateOptions(): { code: string; name: string }[] {
  return Object.entries(stateData)
    .map(([code, data]) => ({ code, name: data.name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** Get district count for a state */
export function getDistrictCount(stateCode: string): number {
  const state = stateData[stateCode];
  if (!state) return 0;
  return Object.keys(state.districts).length;
}

/** Check if state has At-Large district (single representative) */
export function isAtLargeState(stateCode: string): boolean {
  const state = stateData[stateCode];
  if (!state) return false;
  return 0 in state.districts;
}

/** Get district options for a state (for dropdown) */
export function getDistrictOptions(stateCode: string): { value: number; label: string }[] {
  const state = stateData[stateCode];
  if (!state) return [];
  if (isAtLargeState(stateCode)) {
    return [{ value: 0, label: "At-Large" }];
  }
  return Object.keys(state.districts)
    .map(Number)
    .sort((a, b) => a - b)
    .map((d) => ({ value: d, label: `District ${d}` }));
}
