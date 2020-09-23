/*jshint esversion: 6 */
function capitalize(str) {
  const words = [];
  for (const word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

function capitalize(str) {
    const words = [];
    for (const word of str.split(" ")) {
      words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(" ");
  }

console.log(capitalize("a short sentence"));
