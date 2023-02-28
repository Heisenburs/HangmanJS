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
// Generate word randomly from an array?
// Coding => JAVASCRIPT , REACT , MERN STACK
// Movies => MULAN , NEW JACK CITY , TWILIGHT
// Locations => AMSTERDAM , BOSTON , COSTA RICA

// Alphabet at the bottom

// If you click on a letter
// It will check to see if it fills a blank
// After you click the letter, it is hidden
// If it does, the letter will fill the blank
// If not, a piece of the hangman will appear
// Repeats until
// All blanks are filled
// If all blanks are filled before man is completely hanged
// Alert: You have won!
// All pieces of the hanged man have appeared
//-- If the man is completely hanged before all blanks are filled
// Alert: LOSER!
// (Tony todd laugh?)
