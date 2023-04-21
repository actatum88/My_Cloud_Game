#!/usr/bin/node
// Test file for our cloud game :)
// Provide positive phrases
const phrases = [
    "You are awesome",
    "You are cool",
    "You rock"
];

// Retrieves a random choice from phrases
function getRandomPhrase() {
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
}

// Encrypts the phrase
function enPhrase(phrase) {
    let encryptedPhrase = "";
    for (let i=0; i < phrases.length; i++) {
        const charCode = phrase.charCodeAt(i);
        // if the character is a space between words
        if (charCode === 32) {
            encryptedPhrase += " ";
        } else {
            const encryptedCharCode = (charCode - 65 + shift) % 26 + 65;
            encryptedPhrase += String.fromCharCode(encryptedCharCode);
        }
    }
}

const phrase = getRandomPhrase();
const enPhrase = encryptPhrase(phrase, 3);
console.log(phrase)