/*jshint esversion: 6 */

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(num) {
  for (let row = 0; row < num; row++) {
    let stair = '';
    for (let col = 0; col < num; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

function printNumber(n, dec = 1) {
  if (n === 0) {
    return;
  }

  console.log(n);
  printNumber(n - dec);
}

printNumber(10);
// function steps(n, row = 0, stair = "") {
//   if (n == row) {
//     return;
//   }
//   if (n == stair.length) {
//     console.log(stair);
//     steps(n, row + 1);
//   }

//   if (stair.length <= row) {
//       stair += "#";
//   } else {
//       stair += " ";
//   }
//   steps(n, row, stair);
// }

steps(3);
