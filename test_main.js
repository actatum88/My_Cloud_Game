#!/usr/bin/node
/**
 * Test file for our cloud game :)
 */

// Provide positive phrases
const phrases = [
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
