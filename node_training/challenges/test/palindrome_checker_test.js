let palindrome = require("../src/palindrome_checker");

var result = palindrome.checker("anitalavalatina")
console.assert(result==true,`Check result ${result} is not correct, expected ${true}`);

result = palindrome.checker("asdrwer");
console.assert(result==false,`Check result ${result} is not correct, expected ${false}`);
