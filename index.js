// START SCREEN => title , start , small 'coded by'
const body = document.querySelector("body");

//* Title
const titleCard = document.createElement("h1");
titleCard.innerText = "HANGMAN";

console.log(titleCard);

body.appendChild(titleCard);

//* Start Button
const startBtn = document.createElement("button");
startBtn.innerText = "S T A R T";

console.log(startBtn);
body.appendChild(startBtn);

//* 'Coded By'
const codedBy = document.createElement("small");
codedBy.innerText = "coded by heisenburs";

console.log(codedBy);
body.appendChild(codedBy);
// - Click on start button => Brings you to play screen

// 3 Category [button]
const codingCategory = document.createElement("button");
codingCategory.innerText = "CODING";

console.log(codingCategory);
body.appendChild(codingCategory);

const moviesCategory = document.createElement("button");
moviesCategory.innerText = "MOVIES";

console.log(moviesCategory);
body.appendChild(moviesCategory);

const locationCategory = document.createElement("button");
locationCategory.innerText = "LOCATIONS";

console.log(locationCategory);
body.appendChild(locationCategory);

// Random choice generated by Category button

codingCategory.addEventListener("click", (e) => {
  console.log(codingChoices[Math.floor(Math.random() * codingChoices.length)]);
});

moviesCategory.addEventListener("click", (e) => {
  console.log(movieChoices[Math.floor(Math.random() * movieChoices.length)]);
});

locationCategory.addEventListener("click", (e) => {
  console.log(
    locationChoices[Math.floor(Math.random() * locationChoices.length)]
  );
});

// Coding => JAVASCRIPT , REACT , MERN STACK

let codingChoices = ["javascript", "react", "mern stack"];

// Movies => MULAN , NEW JACK CITY , TWILIGHT
let movieChoices = ["Mulan", "New Jack City", "Twilight"];

// Locations => AMSTERDAM , BOSTON , COSTA RICA
let locationChoices = ["Amsterdam", "Boston", "Costa Rica"];

console.log(codingChoices);
console.log(movieChoices);
console.log(locationChoices);

// when you click on a category, a random category choice will be selected

// Alphabet at the bottom

let letterChoices = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

for (let letter of letterChoices) {
  //create an element (p or button)
  let letter = document.createElement("button");
  // apend letters to letter-body
  body.append(letter);
  console.log(letter);
}

// If you click on a letter
// It will check to see if it fills a blank
// After you click the letter, it is hidden
// If it does, the letter will fill the blank
// If not, a piece of the hangman will appear
// Repeats until all blanks are filled
// If all blanks are filled before man is completely hanged
// Alert: You have won!
// All pieces of the hanged man have appeared
//-- If the man is completely hanged before all blanks are filled
// Alert: LOSER!
// (Tony todd laugh?)
