const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Email not found");
}

// Falsy values in JavaScript:
// false , 0 , -0, bigint 0n, null , undefined , NaN(Not a number) , "" (empty string)

// Truthy values in JavaScript:
// true ," ",any non zero number (positive or negative) , any bigint other than 0n , "0" (string with single zero) , "false" (string with false)
//  , [] (empty array) , {} (empty object) , function(){} (empty function)

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
