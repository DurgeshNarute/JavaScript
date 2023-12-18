/*
Number()
String()
Boolean()
*/

let score = 33
// let score = "33"
// let score = "33abc"
// let score = true

let scoreIsNumber = Number(score)

// console.log(typeof(scoreIsNumber));
// console.log(scoreIsNumber);
/*
"33" => 33
"33abc" => NaN (Not a Number)
true => 1; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof(booleanIsLoggedIn));
// console.log(booleanIsLoggedIn);
/*
1 => true; o => false
"" => false
"text" => true 
*/

let someNumber = 123

let stringNumber = String(someNumber)

console.log(typeof(stringNumber));
console.log(stringNumber);
/*
123 => 123
"" => blank
true => true ; false => false
null => null
undefined => undefined
*/