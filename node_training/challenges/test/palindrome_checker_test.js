let palindrome = require("../src/palindrome_checker");

let word; 
let result;

word = "anitalavalatina";
result = palindrome.checker(word)
console.assert(result==true,`Check result ${result} is not correct, expected ${true}`);

word = "asdrwer";
result = palindrome.checker(word);
console.assert(result==false,`Check result ${result} is not correct, expected ${false}`);
