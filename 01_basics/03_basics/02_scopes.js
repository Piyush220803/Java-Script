// the value within this "{}" are called as bolck scope
// and the value outside the "{}" are called as global scope

// the disadvantage of using the var keyword is it can be modified outside the block scope so the problen is 
// when there are two var with same name the var will change every time we assign a new value tp it even if we declare 
// one of them within block scope.... So use let or const 

// EXAMPLE

// const a = 600
// if(true){
//     let a = 40
//     const b = 60
//     var c = 80
//     console.log("INNER VALUE: ", a);
    
// }

// console.log("OUTTER VALUE: ",c); INNER VALUE:  80  OUTTER VALUE:  80
// console.log("OUTTER VALUE: ",a); INNER VALUE:  40  OUTTER VALUE:  600

// **************NESTED SCOPE**************

// function one(){
//     const username = "Piyush"

//     function two(){
//         const codeEditor = "VS CODE"
//         console.log();
//     }
//     console.log(username);
//     two()
// }
// one()

// const username = "Piyush";

if (true){
    if (username === "Piyush"){
        const codeEditor = " VS CODE"
        console.log(username + codeEditor);
        }
       // console.log(codeEditor);
        
}
console.log(username); // not reachable because username is defined within if scope

// **********************Interesting Concept******************
function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)