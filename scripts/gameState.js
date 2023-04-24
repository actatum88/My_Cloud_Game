// Game State Management
// import * as caesarCipher from './caesarCipher.js';
// import { phrases } from './phrases.js';
// You cannot import/export this as it's not a module. Even if you could, it's not necessary.
// You want the values from the return statements. Use them like you would in any other context or language:

/**
 * Randomly selects a phrase from an array and encodes it using the Caesar cipher with a key of 3.
 * @param {array} phrases - An array of phrases to choose from.
 * @returns {string} - The encoded phrase.
 */
function selectRandomPhrase(phrases) {
    // Select a random phrase from the array
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    // Encode the phrase using the Caesar cipher with a key of 3
      // note we are no longer using CaesarCipher.encode, because it wasn't a module for us to do that with
    const encodedPhrase = encode(randomPhrase, 3);
    return encodedPhrase;
  }
  
  // Select a random phrase from the array and encode it using the Caesar cipher with a key of 3
  const encodedPhrase = selectRandomPhrase(phrases);
  
  // Get the phrase-box element from the DOM
  // Right now there's just no id="phrase-box" anywhere, nbd
  const phraseBox = document.querySelector('#phrase-box');
  
  // Create a new element to hold the phrase
  const phraseElement = document.createElement('div');
  phraseElement.id = 'phrase';
  phraseElement.textContent = decode(encodedPhrase, 3);
  
  // Add the phrase element to the phrase-box element
  phraseBox.insertBefore(phraseElement, phraseBox.firstChild);
  
  // export { encodedPhrase };
  