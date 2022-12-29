let  arithmetic = require("./diffmodule/arithmetic");

let num1 = 30;
let num2 = 10;

console.log(`Sum of ${num1} and ${num2} is ${arithmetic.add(num1,num2)}`);
console.log(`Subtraction of ${num1} and ${num2} is ${arithmetic.sub(num1,num2)}`);
console.log(`Division of ${num1} and ${num2} is ${arithmetic.div(num1,num2)}`);
console.log(`Multiply of ${num1} and ${num2} is ${arithmetic.mult(num1,num2)}`);

