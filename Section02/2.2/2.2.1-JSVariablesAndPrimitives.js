// create a constant variable (const)
const myName = "Sarah";
// create a variable that can be reassigned (let)
let age = 31;
// create three variables and assign them values of different data types (=)
let str = "Hello";
let num = 8;
let truth = true;
// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof truth); // boolean
console.log(typeof str); // string

// change the value referenced by a variable (dynamic typing)
num = "eight";
// print the type of the variable you just changed (typeof)
console.log(typeof num);
// create variables and give them values to complete the sentences that will print  below.
let language = "JavaScript";
let weeksOfPractice = 1;
let y = false;

// Which variables need to be created?
// What type of data needs to go in each variable?

console.log(
  `"Hello, my name is ${myName}, and I am learning ${language}. I have been practicing for only ${num} weeks, so my status as a master is: ${y}"`
);
