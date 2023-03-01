// START SCREEN => title , start , small 'coded by'
const body = document.querySelector("body");

// //! translate to html start screen
// //* Title
// const titleCard = document.createElement("h1");
// titleCard.innerText = "HANGMAN";
// titleCard.classList.add("heading");

// console.log(titleCard);

// body.appendChild(titleCard);

// //* Start Button
// const startBtn = document.createElement("button");
// startBtn.innerText = "S T A R T";

// console.log(startBtn);
// body.appendChild(startBtn);

// //* 'Coded By'
// const codedBy = document.createElement("small");
// codedBy.innerText = "coded by heisenburs";

// console.log(codedBy);
// body.appendChild(codedBy);
// - Click on start button => Brings you to play screen

//! can be translated to html as well
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
//stays
codingCategory.addEventListener("click", () => {
  //when you click, let a random word appear
  let codingKey =
    codingChoices[Math.floor(Math.random() * codingChoices.length)];

  // the randomly generated word goes into the <p> tag
  let codKey = document.querySelector(".keyword");

  let codingArr = [];

  // loops through created array
  for (let i = 0; i < codingKey.length; i++) {
    // create span element
    let span = document.createElement("span");
    span.textContent = "_";
    codKey.appendChild(span);
    // adds "_" to the new array
    codingArr.push("_");
  }

  console.log(codingKey);
  console.log(codingArr);
  codKey.innerText = codingKey;
  // at first, the keyword is hidden
  // let hiddenword = codingKey;
  let hiddenword = codKey;
});

moviesCategory.addEventListener("click", () => {
  let movieKey = movieChoices[Math.floor(Math.random() * movieChoices.length)];

  let movKey = document.querySelector(".keyword");
  movKey.innerText = movieKey;
});

locationCategory.addEventListener("click", () => {
  let locationKey =
    locationChoices[Math.floor(Math.random() * locationChoices.length)];
  let locKey = document.querySelector(".keyword");
  locKey.innerText = locationKey;
});

// Coding => JAVASCRIPT , REACT , MERN STACK

let codingChoices = ["Javascript", "React", "MERN Stack"];

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
  let btn = document.createElement("button");
  // set value of buttons to their value in the array
  btn.innerText = letter;
  // append letters to letter-body
  body.append(btn);
}

// Have the letters of the keyword show, but hidden => if the correct letter is pressed, the letter in the keyword will show
// if the incorrect letter is pressed, a piece of the hangman will appear

// If you click on a letter => it will check to see if it fills a blank
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

//2nd variable
//hidden word => underscore for every variable =>
//for loop letter => underscore
