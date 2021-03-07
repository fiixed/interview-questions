/*jshint esversion: 6 */

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//var reverseString = (str) => str.split("").reverse().join("");

// function reverseString(str) {
//   let reversed = '';
//   for (const char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }


const reverseString = (str) => str.split('').reduce((rev, char) =>  char + rev, '');

console.log(reverseString("Hello"));


