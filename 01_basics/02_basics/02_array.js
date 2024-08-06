const marvel_heros = ["spiderman", "hulk", "ironman"]

const real_heros = ["homelander", "firecracker", "deep"]

// marvel_heros.push(real_heros) // but this array return the combined array where the real heros array is treated as one element
// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]); so to return a name from real heros array we have to declare 2 values here 3 for accessing and 1 for index

// const allHeros = marvel_heros.concat(real_heros) // as it return a new array so we have to store it to a variable
// console.log(allHeros);  // [ 'spiderman', 'hulk', 'ironman', 'homelander', 'firecracker','deep' ]

// const allHeros2 = [...marvel_heros, ...real_heros]  // more use of this method
// console.log(allHeros2); [ 'spiderman', 'hulk', 'ironman', 'homelander', 'firecracker','deep' ]


// const anotherArray = [1,2,3,[4, 5, 6], 7, [9, 10, [4, 5]]] // levels of arrays 
// const realArray = anotherArray.flat(Infinity) // if we want all the subarray to be in one array we use flat(this contain for how much level do you want it to convert) so passing infinity it auto convert all the subarray to single array

// console.log(realArray); // [1, 2, 3,  4, 5, 6, 7, 9, 10, 4, 5]


console.log(Array.isArray("Piyush")); // check the given value is array or not and return in boolean type
console.log(Array.from("Piyush"));
console.log(Array.from({name: "Piyush"})); // interesting

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3)); // return a single array with combined value
