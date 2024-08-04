// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol,
// BigInt

const id = Symbol('123');
const id2 = Symbol('123');
console.log( id == id2) // false
// The work of symbol if the value or datatype we pass is same the value it return are not equal

const bigNumber = 3245641316315265n; // use n in the last to make it BigInt
console.log(typeof bigNumber)
// Reference (Non primitive)

// Array, Objects, Functions
 // Array
const herosArray = ["saktiman", "doga", "naagraj"];
// Object
let myObj = {
    name: "Piyush",
    age : 21,
    location: "Roorkee"
} 
// Function
const myFunction = function(){
    console.log("Hello World")
}
