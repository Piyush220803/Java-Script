// Array
// In JS we can also define different types of data in a single array like numbers , strings etc

const arr = [0, 1, 2, 3, 4]
// const heroArry = ["Doom", "Thanos"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(heroArry[1]);

// array methods

// arr.push(5)
// arr.pop()  // eliminate the last value
// arr.unshift(8) // add the value to the start of the array
// arr.shift() // remove the first element from the array

// console.log(arr.includes(8)); // return boolean value and tells the value is present or not
// console.log(arr.indexOf(3));

// const newArr = arr.join() // convert the array to string

// console.log(arr);
// console.log(typeof newArr);  // string

console.log("A", arr); // A [ 0, 1, 2, 3, 4 ] Original array

const myArr1 = arr.slice(1, 3) 
console.log(myArr1); // After slice [ 1, 2 ]
console.log("B",arr); // The original arr B [ 0, 1, 2, 3, 4 ]

const myArr2 = arr.splice(1, 3)
console.log(myArr2); // After splice [ 1, 2, 3 ]
console.log("C",arr);// The original array become C [ 0, 4 ] means splice also cut the values from the original array




