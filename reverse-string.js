/*jshint esversion: 6 */

//var reverseString = (str) => str.split("").reverse().join("");

function reverseString(str) {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

console.log(reverseString("Hello"));
