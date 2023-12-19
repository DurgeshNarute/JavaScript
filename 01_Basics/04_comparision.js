// equality == and the comparison >,<,>=,<= works differently


console.log(2 == 2);   //true (values are same)
console.log("2" == 2);   //true (values are same)


// Strict Check => === => checks the values and the datatypes

console.log(2 === 2);   //true (value and datatype are same)
console.log("2" === 2);   //false (value same but datatype is different)

console.log(null > 0);   //false 
console.log(null >= 0);   //true 
console.log(null == 0);   //false 


console.log(undefined > 0);   //false 
console.log(undefined == 0);   //false 
console.log(undefined < 0);   //false 