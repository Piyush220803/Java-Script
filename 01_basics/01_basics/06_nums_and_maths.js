// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toFixed(2)); // add values after decimal here 2 value . O/p -> 100.00

// const otherNumber = 12.8966
// console.log(otherNumber.toPrecision(2)); // round the value for 2 digits


// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));

// *********************Maths***********************

// console.log(Math);
// console.log(Math.abs(-4));  // Only convert negative value to positive
// console.log(Math.round(4.6)); // round of value here op = 5
// console.log(Math.ceil(4.2)); // means print 5 here always choose the upper value
// console.log(Math.floor(4.9)); // print 4 always choose the lower value
// console.log(Math.min(5, 6, 8, 4)); // find max value
// console.log(Math.max(5, 6, 8, 4)); // find min value

console.log(Math.random()); // this generates the random number from 0 to 1
console.log((Math.random()*10) + 1); // to ensure the value is min 1
console.log(Math.floor(Math.random()*10) + 1); // min 1 or greater than 1 with round of to min value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // value will be greater than min means 10




