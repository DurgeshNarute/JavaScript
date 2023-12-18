const accountId = 1234
let accountEmail = "abc@gmail.com"
var accountPass = "12345"
accountCity = "Pune"
let accountState;

// accountId = 7890       // Not Allowed
accountEmail = "abc@gmail.com"
accountPass = "12345"
accountCity = "Pune"

console.log(accountId);
/*
Prefer not to use var => use let instead
Because of block scope and functional scope issue for var.
*/
console.table([accountId, accountEmail, accountPass, accountCity, accountState])