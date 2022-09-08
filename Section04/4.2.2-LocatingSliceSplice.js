const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let A = arr.indexOf("a"); //[0];
let B = arr.indexOf("b"); //[2];
let C = arr.indexOf("c"); //[4];

// find the last index of "a", "b", and "c"
let lA = arr.lastIndexOf("a"); //[6];
let lB = arr.lastIndexOf("b"); //[8];
let lC = arr.lastIndexOf("c"); //[11];

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(arr, duplicateVaule) {
  let firstIndex = arr.indexOf(duplicateVaule);
  let lastIndex = arr.lastIndexOf(duplicateVaule);

  while (firstIndex !== lastIndex) {
    arr.splice(lastIndex, 1);
    lastIndex = arr.lastIndexOf(duplicateVaule);
  }
  return arr;
}
console.log(arr);

console.log(removeDuplicates(arr, "a"));
console.log(removeDuplicates(arr, "b"));
console.log(removeDuplicates(arr, "c"));
