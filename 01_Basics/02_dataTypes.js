"use strict";   //treat all JS code as Newer version


/*
number => 2^53
bigint
string => ""
boolean => true/false
null => standalone value
undefined => value is not assigned yet    eg let accountCity;
symbols => unique

object
*/

let name = "Durgesh"
let age = 23
let isLoggedIn = true

console.log(typeof age);
console.log(typeof name);
console.log(typeof isLoggedIn);

// Note: Interview Qu.
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object

console.log(typeof(234));