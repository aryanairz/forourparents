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
    districts: {},
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
    districts: {},
  },
  GA: {
    name: "Georgia",
    capital: "Atlanta",
    governor: "Brian Kemp",
    senators: ["Jon Ossoff", "Raphael Warnock"],
    districts: {},
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
    districts: {},
  },
  IN: {
    name: "Indiana",
    capital: "Indianapolis",
    governor: "Mike Braun",
    senators: ["Todd Young", "Jim Banks"],
    districts: {},
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
    districts: {},
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
    districts: {},
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
    districts: {},
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
    districts: {},
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
    senators: ["Unknown", "Unknown"],
    districts: {},
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
    districts: {},
  },
  OH: {
    name: "Ohio",
    capital: "Columbus",
    governor: "Mike DeWine",
    senators: ["Sherrod Brown", "J.D. Vance"],
    districts: {},
  },
  OK: {
    name: "Oklahoma",
    capital: "Oklahoma City",
    governor: "Kevin Stitt",
    senators: ["Jim Inhofe", "Markwayne Mullin"],
    districts: {"1":"Kevin Hern","2":"Josh Brecheen","3":"Frank Lucas","4":"Tom Cole"},
  },
  OR: {
    name: "Oregon",
    capital: "Salem",
    governor: "Tina Kotek",
    senators: ["Ron Wyden", "Jeff Merkley"],
    districts: {},
  },
  PA: {
    name: "Pennsylvania",
    capital: "Harrisburg",
    governor: "Josh Shapiro",
    senators: ["John Fetterman", "Bob Casey Jr."],
    districts: {},
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
    districts: {},
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
    districts: {},
  },
  TX: {
    name: "Texas",
    capital: "Austin",
    governor: "Greg Abbott",
    senators: ["John Cornyn", "Ted Cruz"],
    districts: {},
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
    districts: {},
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
    districts: {},
  },
  WI: {
    name: "Wisconsin",
    capital: "Madison",
    governor: "Tony Evers",
    senators: ["Tammy Baldwin", "Ron Johnson"],
    districts: {},
  },
  WV: {
    name: "West Virginia",
    capital: "Charleston",
    governor: "Patrick Morrisey",
    senators: ["Shelley Moore Capito", "Jim Justice"],
    districts: {},
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
