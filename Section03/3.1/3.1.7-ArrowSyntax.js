// refactor the functions below into arrow syntax
// function myNumberFunction() {
  //return ((2 ** 2 + 3) % 4) * 14;
//}

// Arrow Function
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;
console.log(myNumberFunction());

//Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Arrow Function
const greet = (name) => 'Hello, ${name}';
console.log(greet('Bob'));

//Function Declaration
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};

//Arrow Function
const greet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;
console.log(greet("Peet", "Evening"));

//Function Declaration
function tripleAndHalf(num) {
 let triple = num * 3;
 return triple / 2;
}
console.log(tripleAndHalf(7));


// Function Declaration
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
// Arrow Function
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
sumTwoNumbers(3, 8);