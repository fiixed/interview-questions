/*jshint esversion: 6 */

// function palindrome(str) {
//   let reversed = "";
//   for (const char of str) {
//     reversed = char + reversed;
//   }
//   return reversed === str;
// }

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(palindrome("abba"));
