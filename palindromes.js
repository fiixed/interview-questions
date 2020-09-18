/*jshint esversion: 6 */

function palindrome(str) {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed == str ? true : false;
}

console.log(palindrome("abba"));
