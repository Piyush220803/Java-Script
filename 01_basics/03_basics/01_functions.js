// functions

// function sayMyName() {
//     console.log("P");
//     console.log("I");
//     console.log("Y");
//     console.log("U");
//     console.log("S");
//     console.log("H");   
// }

// sayMyName()  // this is function calling

// function addTwoNumber(num1, num2) {  // in JS there is no need to define the type of parameters

//     console.log(num1 + num2);
// }

// const result = addTwoNumber(3, 4)
// console.log("Result:", result); // Result: undefined because console log and return are different things


// function addTwoNumber(num1, num2) {
    // let result = num1 + num2
    // return result
    // console.log("Piyush");  // so in JS after return statement any code written is treated as dead code means it will not execute,, so write code before return to make it execute
    // *****OR******
//     return num1 + num2
// }
// const result = addTwoNumber(3, 5)

// console.log("Result:",result);  Result: 8

function loginUserMessage(username = "Tony") {  // tony = default value
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Piyush"));
// console.log(loginUserMessage("Piyush"));
// console.log(loginUserMessage());   // undefined as there is no arguments passed
console.log(loginUserMessage()); // for not getting the undefined result we can set a default value to the function in case there is no argument passed and if we pass the argument then the passed argument will over ride the default

