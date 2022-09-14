const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn = nums.pop(); //0
let popReturn2 = nums.pop(); //1

// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = nums.shift(); //6
let shiftReturn2 = nums.shift(); //5

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(shiftReturn2, shiftReturn);

nums.unshift(popReturn, popReturn2); 


console.log(nums);