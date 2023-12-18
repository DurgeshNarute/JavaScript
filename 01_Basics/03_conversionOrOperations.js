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

// console.log(typeof(stringNumber));
// console.log(stringNumber);
/*
123 => 123
"" => blank
true => true ; false => false
null => null
undefined => undefined
*/

//  ************************** Oprations *************************

let value = 3
let negValue = -value
// console.log(negValue);    // -3
/*
2+2 => 4
2*3 => 6
2**3 => 8
2/3 => 0.66666
2%3 => 2
*/

let str1 = "Hello"
let str2 = "world"

let str3 = str1 + str2
console.log(str3);
/* 
"1" + 2 => 12
1 + "2" => 12
"1" + 2 + 2 => 122
1 + 2 + "2" => 32
*/

// console.log(+true);   // 1
// console.log(+"");     // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2    // 4

//******** Postfix Increment
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);      // Expected output: "x:4, y:3"

//******** Prefix Increment
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);      // Expected output: "a:4, b:4"