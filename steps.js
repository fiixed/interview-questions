/*jshint esversion: 6 */

function steps(num) {
  for (let row = 0; row < num; row++) {
    let stair = "";
    for (let col = 0; col < num; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

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
