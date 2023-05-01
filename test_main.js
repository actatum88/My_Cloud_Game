#!/usr/bin/node
/**
 * Test file for our cloud game :)
 */

// Provide positive phrases

const phrases = [
  "Believe you can and you're halfway there",
  "You are worthy of love and respect",
  "Every day is a new beginning",
  "You have the power to create change",
  "Focus on the good",
  "You are capable of amazing things",
  "Choose joy every day",
  "You are enough just as you are",
  "Your best is yet to come",
  "Dream big and chase your passion",
  "You are awesome",
  "You are cool",
  "You rock"
];

/**
* Retrieves a random choice from the `phrases` array.
*
* @returns {string} A random phrase from the `phrases` array.
*/
function getRandomPhrase() {
  const index = Math.floor(Math.random() * phrases.length);
  return phrases[index];
}

/**
* Encrypts the provided phrase by shifting each character in the string by a certain number of positions.
*
* @param {string} phrase - The phrase to encrypt.
* @param {number} shift - The number of positions to shift each character by.
* @returns {string} The encrypted phrase.
*/
function encryptPhrase(phrase, shift) {
  let encryptedPhrase = "";
  for (let i = 0; i < phrase.length; i++) {
      const charCode = phrase.charCodeAt(i);
      // if the character is a space between words
      if (charCode === 32) {
          encryptedPhrase += " ";
      } else {
          const encryptedCharCode = (charCode - 65 + shift) % 26 + 65;
          encryptedPhrase += String.fromCharCode(encryptedCharCode);
      }
  }
  return encryptedPhrase;
}

// Get a random phrase and encrypt it
const phrase = getRandomPhrase();
const enPhrase = encryptPhrase(phrase, 3);

console.log(phrase);
console.log(enPhrase);

function playMyAudio() {
  const audio = document.getElementById("game-audio");
  audio.currentTime = 0;
  audio.play();
  startTimer();
}

let seconds = 0;
let timer;

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    console.log(`Timer: ${seconds} seconds`);
  }, 120000);
}

function stopTimer() {
  clearInterval(timer);
}

const dogButton = document.getElementById("submitGuess(); startTimer(); playMyAudio();");
//Timer display?? const timerDisplay = document.createElement("p");
// let timeLeft = 60;
// Time limit is already defined in countdown.js
function submitGuess() {
// your code for handling the guess goes here
}
