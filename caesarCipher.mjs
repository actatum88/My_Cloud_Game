#!/Users/katrinakeas/Downloads/node


import { randomPhrase } from './gameState.mjs'


export function encode(RandomPhrase) {
   const key = 6;
   let ciphertext = '';
   for (let i = 0; i < plaintext.length(); i++) {
     let charCode = plaintext.charCodeAt(i);
     if (charCode >= 65 && charCode <= 90) {
       ciphertext += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
     } else if (charCode >= 97 && charCode <= 122) {
       ciphertext += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
     } else {
       ciphertext += plaintext.charAt(i);
     }
   }
   return ciphertext;
}
