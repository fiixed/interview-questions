/*jshint esversion: 6 */

// function anagrams(strA, strB) {
//   const aCharMap = buildCharMap(strA);
//   const bCharMap = buildCharMap(strB);

//   if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (const char in aCharMap) {
//     if (aCharMap[char] != bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

function anagrams(strA, strB) {
  return cleanString(strA) === cleanString(strB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams("hello", "olleh"));
