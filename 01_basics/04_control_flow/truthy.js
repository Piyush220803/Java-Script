// const userEmail = []
// if (userEmail) {
//     console.log(`Got the email`);
    
// }else{
//     console.log("dont get the user email");
//     }

// falsy values apart from these values all remaining are truthy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// trythly values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {  // check the length of array
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
//     }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// console.log(val1); // 5
// val1 = null ?? 10
// console.log(val1); // 10
// val1 = undefined ?? 10
// console.log(val1); // 10

// Terniary Operator

// condition ? true : false

const iceCreamPrice = 100
iceCreamPrice <= 80 ? console.log("less than 80") : console.log("more than 80")