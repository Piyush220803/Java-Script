// const user = {
//     username: "Piyush",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username}, welcome to coding`);
//         console.log(this);
        // So this keyword is used to refer the current object here the current object is user
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);  // {} as here it refer to empty 


// function chai(){
//     let username = "Piyush"
    // console.log(this);  so there will be printing so many value or things
    // console.log(this.username); // undefined means within a function doesnt recognize this keyword
    
// }
// chai()

const chai = () => {       // this is the syntax of arrow function
    let username = "Piyush"
    console.log(this.username);
    // means this keyword also not run in arrow function
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2         // when return is written means it is explicit return
// }
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2  this is another way to write the arrow function when return one value
//  when no return is written means it is implicit return
// console.log(addTwo(3, 4));

const addTwo = (num1, num2) => ({username: "Piyush"})
console.log(addTwo(3, 4));
