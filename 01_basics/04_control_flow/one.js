const temperature = 40;
// "===" it is called strict operator in JS it checks the value to be accurate and also checks the data type
// if ( temperature === 50){     
//     console.log("less than 50");
//     }else{
//         console.log("its actually less than 30");
//         }
// console.log("Executed as it is outside the statement");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if ( score > 100 ) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`);

// const balance = 600
// if ( balance > 500 ) console.log("yes it is"), console.log("Another method to write by using coma"); // dont write this type of syntax as it decreases the code readability

// if (balance < 500) {
//     console.log(`less than 500`);
//     }else if (balance < 700) {
//         console.log(`less than 700`);
//         }else if (balance < 900) {
//             console.log(`less than 900`);
//         }else{
//             console.log(`greater than 1000`);
            
//         }

const userLoggedIn = true
const debitCard = false
const creditCard = true
const LoggedInByGoogle = false
const LoggedInByEmail = true

if (userLoggedIn || LoggedInByEmail || LoggedInByGoogle) {
    console.log(`Login Succesful`);
    
}
if (userLoggedIn && creditCard) {
    console.log(`Can make purchase`);
    
}