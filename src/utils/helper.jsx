var nameList = [
  // Friends
  "Rachel",
  "Ross",
  "Monica",
  "Chandler",
  "Joey",
  "Phoebe",

  // The Office
  "Michael",
  "Dwight",
  "Jim",
  "Pam",
  "Ryan",
  "Angela",
  "Kevin",
  "Stanley",
  "Kelly",
  "Toby",

  // Brooklyn Nine-Nine
  "Jake",
  "Amy",
  "Rosa",
  "Terry",
  "Gina",
  "Holt",
  "Boyle",
  "Scully",
  "Hitchcock",

  // Parks and Recreation
  "Leslie",
  "Ron",
  "Tom",
  "April",
  "Andy",
  "Ben",
  "Ann",
  "Donna",
  "Chris",
  "Jerry",

  // Modern Family
  "Phil",
  "Claire",
  "Gloria",
  "Jay",
  "Cameron",
  "Mitchell",
  "Haley",
  "Alex",
  "Luke",
  "Manny",

  // New Girl
  "Jess",
  "Nick",
  "Schmidt",
  "Winston",
  "Cece",
  "Coach",

  // The Mentalist
  "Patrick",
  "Lisbon",
  "Cho",
  "Rigsby",
  "VanPelt",

  // Breaking Bad
  "Walter",
  "Jesse",
  "Skyler",
  "Hank",
  "Marie",
  "Saul",
  "Mike",
  "Gus",

  // Better Call Saul
  "Jimmy",
  "Kim",
  "Howard",
  "Chuck",
  "Nacho",
  "Lalo",

  // Mad Men
  "Don",
  "Betty",
  "Peggy",
  "Roger",
  "Joan",
  "Pete",
  "Megan",

  // White Collar
  "Neal",
  "Peter",
  "Mozzie",
  "Elizabeth",
  "Diana",
  "Jones",
];

export function generateName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

// export function randomMessages(length) {
//   var result = "";
//   var characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

var sitcomLines = [
  "I got off the plane", // Friends – Rachel
  "How you doin'?", // Friends – Joey
  "We were on a break!", // Friends – Ross
  "Cool cool cool", // B99 – Jake
  "No doubt no doubt", // B99 – Jake
  "Scully, no!", // B99 – Terry/Jake
  "Bears. Beets.", // The Office – Jim
  "False.", // The Office – Dwight
  "I declare bankruptcy!", // The Office – Michael
  "Treat yo' self", // Parks and Rec – Donna & Tom
  "I know what I'm about", // Parks and Rec – Ron
  "Bye, bye, Li'l Sebastian", // Parks and Rec – All
  "NICK MILLER!", // New Girl – Everyone
  "I'm not convinced", // The Mentalist – Jane
  "It's a gift", // The Mentalist – Jane
  "That's what she said", // The Office – Michael
  "Smells like updog", // The Office – Michael
  "You got it, dude!", // Full House (fits the vibe)
  "Noice!", // B99 – Jake
  "Toit!", // B99 – Gina
  "Winston's got this!", // New Girl – Winston
  "Schmidt happens", // New Girl – Schmidt
  "Monica clean", // Friends – Monica
  "That's my spot", // (Bonus: fits Sheldon)
  "It's handled",
  "Run fast now",
  "Jump the gap",
  "Find the key",
  "Watch your step",
  "Hold on tight",
  "Go for it",
  "Keep it low",
  "Stay with me",
  "Break the wall",
  "Chase the light",
  "Open the gate",
  "Drop it quick",
  "Mind the trap",
  "Aim and fire",
  "Play your part",
  "Win the race",
  "Make it stop",
  "Read the code",
  "Pick a side",
  "Cross the line",
  "Roll the dice",
  "Keep the pace",
  "Face the fear",
  "Raise the bar",
  "Trust no one",
  "Hide and run",
  "Call for help",
  "Move in fast",
  "Shut it down",
  "Dig the hole",
  "Save the world",
  "Check the room",
  "Stay in line",
  "Hit the mark",
  "Seal the door",
  "Lose the tail",
  "Clean the mess",
  "Find your path",
  "Cover the spot",
  "Kick it hard",
  "Watch the sky",
  "Skip the line",
  "Grab the loot",
  "Track the signal",
  "Know the risk",
  "Use the force",
  "Stop the car",
  "Avoid the trap",
  "Beat the odds",
  "Lead the way",
];
export function randomMessages() {
  return sitcomLines[Math.floor(Math.random() * sitcomLines.length)];
}
