/*
  4.2.3-Evr-Concat&Join.js
  =========================
*/

const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];
const arrThree = ["r", "t", 3, 56, ["rty"], "p"];

console.log("Original array arrOne", arrOne);

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const newArr = arrOne.concat(arrTwo, 4, "e", arrThree);

// print the new, merged array
console.log(newArr);

// join the merged array and print the result
let newString = newArr.join("+ +");
console.log(newString);