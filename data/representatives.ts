/**
 * State representatives data for personalized civics questions.
 * Parsed from congresspeople.md — covers states where we have data.
 * Users in states not listed here won't get state-specific questions.
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
  TX: {
    name: "Texas",
    capital: "Austin",
    governor: "Greg Abbott",
    senators: ["John Cornyn", "Ted Cruz"],
    districts: {
      1: "Nathaniel Moran", 2: "Daniel Crenshaw", 3: "Keith Self", 4: "Pat Fallon",
      5: "Lance Gooden", 6: "Jake Ellzey", 7: "Lizzie Pannill Fletcher", 8: "Morgan Luttrell",
      9: "Al Green", 10: "Michael McCaul", 11: "August Pfluger", 12: "Craig Goldman",
      13: "Ronny Jackson", 14: "Randy Weber", 15: "Monica De La Cruz", 16: "Veronica Escobar",
      17: "Pete Sessions", 18: "Christian Menefee", 19: "Jodey Arrington", 20: "Joaquin Castro",
      21: "Chip Roy", 22: "Troy Nehls", 23: "Tony Gonzales", 24: "Beth Van Duyne",
      25: "Roger Williams", 26: "Brandon Gill", 27: "Michael Cloud", 28: "Henry Cuellar",
      29: "Sylvia Garcia", 30: "Jasmine Crockett", 31: "John Carter", 32: "Julie Johnson",
      33: "Marc Veasey", 34: "Vicente Gonzalez", 35: "Greg Casar", 36: "Brian Babin",
      37: "Lloyd Doggett", 38: "Wesley Hunt",
    },
  },
  AL: {
    name: "Alabama",
    capital: "Montgomery",
    governor: "Kay Ivey",
    senators: ["Tommy Tuberville", "Katie Britt"],
    districts: {
      1: "Barry Moore", 2: "Shomari Figures", 3: "Mike Rogers", 4: "Robert Aderholt",
      5: "Dale Strong", 6: "Gary Palmer", 7: "Terri Sewell",
    },
  },
  AR: {
    name: "Arkansas",
    capital: "Little Rock",
    governor: "Sarah Huckabee Sanders",
    senators: ["John Boozman", "Tom Cotton"],
    districts: {
      1: "Rick Crawford", 2: "French Hill", 3: "Steve Womack", 4: "Bruce Westerman",
    },
  },
  AK: {
    name: "Alaska",
    capital: "Juneau",
    governor: "Mike Dunleavy",
    senators: ["Lisa Murkowski", "Dan Sullivan"],
    districts: { 0: "Nick Begich III" },
  },
  MN: {
    name: "Minnesota",
    capital: "Saint Paul",
    governor: "Tim Walz",
    senators: ["Amy Klobuchar", "Tina Smith"],
    districts: {
      1: "Brad Finstad", 2: "Angie Craig", 3: "Kelly Morrison", 4: "Betty McCollum",
      5: "Ilhan Omar", 6: "Tom Emmer", 7: "Michelle Fischbach", 8: "Pete Stauber",
    },
  },
  HI: {
    name: "Hawaii",
    capital: "Honolulu",
    governor: "Josh Green",
    senators: ["Mazie Hirono", "Brian Schatz"],
    districts: { 1: "Ed Case", 2: "Jill Tokuda" },
  },
  MT: {
    name: "Montana",
    capital: "Helena",
    governor: "Greg Gianforte",
    senators: ["Steve Daines", "Tim Sheehy"],
    districts: { 1: "Ryan Zinke", 2: "Troy Downing" },
  },
  MO: {
    name: "Missouri",
    capital: "Jefferson City",
    governor: "Mike Kehoe",
    senators: ["Josh Hawley", "Eric Schmitt"],
    districts: {
      1: "Wesley Bell", 2: "Ann Wagner", 3: "Bob Onder", 4: "Mark Alford",
      5: "Emanuel Cleaver", 6: "Sam Graves", 7: "Eric Burlison", 8: "Jason Smith",
    },
  },
  ID: {
    name: "Idaho",
    capital: "Boise",
    governor: "Brad Little",
    senators: ["Mike Crapo", "Jim Risch"],
    districts: { 1: "Russ Fulcher", 2: "Michael Simpson" },
  },
  CA: {
    name: "California",
    capital: "Sacramento",
    governor: "Gavin Newsom",
    senators: ["Alex Padilla", "Adam Schiff"],
    districts: {
      1: "Doug LaMalfa", 2: "Jared Huffman", 3: "Kevin Kiley", 4: "Mike Thompson",
      5: "Tom McClintock", 6: "Ami Bera", 7: "Doris Matsui", 8: "John Garamendi",
      9: "Josh Harder", 10: "Mark DeSaulnier", 11: "Nancy Pelosi", 12: "Lateefah Simon",
      13: "Adam Gray", 14: "Eric Swalwell", 15: "Kevin Mullin", 16: "Sam Liccardo",
      17: "Ro Khanna", 18: "Zoe Lofgren", 19: "Jimmy Panetta", 20: "Vince Fong",
      21: "Jim Costa", 22: "David Valadao", 23: "Jay Obernolte", 24: "Salud Carbajal",
      25: "Raul Ruiz", 26: "Julia Brownley", 27: "George T. Whitesides", 28: "Judy Chu",
      29: "Luz Rivas", 30: "Laura Friedman", 31: "Gil Cisneros", 32: "Brad Sherman",
      33: "Pete Aguilar", 34: "Jimmy Gomez", 35: "Norma Torres", 36: "Ted Lieu",
      37: "Sydney Kamlager", 38: "Linda Sanchez", 39: "Mark Takano", 40: "Young Kim",
      41: "Ken Calvert", 42: "Robert Garcia", 43: "Maxine Waters", 44: "Nanette Barragan",
      45: "Derek Tran", 46: "Lou Correa", 47: "Dave Min", 48: "Darrell Issa",
      49: "Mike Levin", 50: "Scott Peters", 51: "Sara Jacobs", 52: "Juan Vargas",
    },
  },
  NH: {
    name: "New Hampshire",
    capital: "Concord",
    governor: "Kelly Ayotte",
    senators: ["Jeanne Shaheen", "Maggie Hassan"],
    districts: { 1: "Chris Pappas", 2: "Maggie Goodlander" },
  },
  WA: {
    name: "Washington",
    capital: "Olympia",
    governor: "Bob Ferguson",
    senators: ["Patty Murray", "Maria Cantwell"],
    districts: {
      1: "Suzan DelBene", 2: "Rick Larsen", 3: "Marie Gluesenkamp Perez", 4: "Dan Newhouse",
      5: "Michael Baumgartner", 6: "Emily Randall", 7: "Pramila Jayapal", 8: "Kim Schrier",
      9: "Adam Smith", 10: "Marilyn Strickland",
    },
  },
  OR: {
    name: "Oregon",
    capital: "Salem",
    governor: "Tina Kotek",
    senators: ["Ron Wyden", "Jeff Merkley"],
    districts: {
      1: "Suzanne Bonamici", 2: "Cliff Bentz", 3: "Maxine Dexter", 4: "Val Hoyle",
      5: "Janelle Bynum", 6: "Andrea Salinas",
    },
  },
  CO: {
    name: "Colorado",
    capital: "Denver",
    governor: "Jared Polis",
    senators: ["Michael Bennet", "John Hickenlooper"],
    districts: {
      1: "Diana DeGette", 2: "Joe Neguse", 3: "Jeff Hurd", 4: "Lauren Boebert",
      5: "Jeff Crank", 6: "Jason Crow", 7: "Brittany Pettersen", 8: "Gabe Evans",
    },
  },
  ME: {
    name: "Maine",
    capital: "Augusta",
    governor: "Janet Mills",
    senators: ["Susan Collins", "Angus King"],
    districts: { 1: "Chellie Pingree", 2: "Jared Golden" },
  },
  NY: {
    name: "New York",
    capital: "Albany",
    governor: "Kathy Hochul",
    senators: ["Chuck Schumer", "Kirsten Gillibrand"],
    districts: {
      1: "Nick LaLota", 2: "Andrew Garbarino", 3: "Tom Suozzi", 4: "Laura Gillen",
      5: "Gregory Meeks", 6: "Grace Meng", 7: "Nydia Velazquez", 8: "Hakeem Jeffries",
      9: "Yvette Clarke", 10: "Dan Goldman", 11: "Nicole Malliotakis", 12: "Jerry Nadler",
      13: "Adriano Espaillat", 14: "Alexandria Ocasio-Cortez", 15: "Ritchie Torres",
      16: "George Latimer", 17: "Mike Lawler", 18: "Pat Ryan", 19: "Josh Riley",
      20: "Paul Tonko", 21: "Elise Stefanik", 22: "John Mannion", 23: "Nick Langworthy",
      24: "Claudia Tenney", 25: "Joseph Morelle", 26: "Tim Kennedy",
    },
  },
  VT: {
    name: "Vermont",
    capital: "Montpelier",
    governor: "Phil Scott",
    senators: ["Bernie Sanders", "Peter Welch"],
    districts: { 0: "Becca Balint" },
  },
  CT: {
    name: "Connecticut",
    capital: "Hartford",
    governor: "Ned Lamont",
    senators: ["Richard Blumenthal", "Chris Murphy"],
    districts: {
      1: "John Larson", 2: "Joe Courtney", 3: "Rosa DeLauro", 4: "Jim Himes",
      5: "Jahana Hayes",
    },
  },
  MA: {
    name: "Massachusetts",
    capital: "Boston",
    governor: "Maura Healey",
    senators: ["Elizabeth Warren", "Ed Markey"],
    districts: {
      1: "Richard Neal", 2: "Jim McGovern", 3: "Lori Trahan", 4: "Jake Auchincloss",
      5: "Katherine Clark", 6: "Seth Moulton", 7: "Ayanna Pressley", 8: "Stephen Lynch",
      9: "Bill Keating",
    },
  },
  MD: {
    name: "Maryland",
    capital: "Annapolis",
    governor: "Wes Moore",
    senators: ["Chris Van Hollen", "Angela Alsobrooks"],
    districts: {
      1: "Andy Harris", 2: "Johnny Olszewski", 3: "Sarah Elfreth", 4: "Glenn Ivey",
      5: "Steny Hoyer", 6: "April McClain Delaney", 7: "Kweisi Mfume", 8: "Jamie Raskin",
    },
  },
  WY: {
    name: "Wyoming",
    capital: "Cheyenne",
    governor: "Mark Gordon",
    senators: ["John Barrasso", "Cynthia Lummis"],
    districts: { 0: "Harriet Hageman" },
  },
  ND: {
    name: "North Dakota",
    capital: "Bismarck",
    governor: "Kelly Armstrong",
    senators: ["Kevin Cramer", "John Hoeven"],
    districts: { 0: "Julie Fedorchak" },
  },
  LA: {
    name: "Louisiana",
    capital: "Baton Rouge",
    governor: "Jeff Landry",
    senators: ["Bill Cassidy", "John Kennedy"],
    districts: {
      1: "Steve Scalise", 2: "Troy Carter", 3: "Clay Higgins", 4: "Mike Johnson",
      5: "Julia Letlow", 6: "Cleo Fields",
    },
  },
  UT: {
    name: "Utah",
    capital: "Salt Lake City",
    governor: "Spencer Cox",
    senators: ["Mike Lee", "John Curtis"],
    districts: {
      1: "Blake Moore", 2: "Celeste Maloy", 3: "Mike Kennedy", 4: "Burgess Owens",
    },
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
