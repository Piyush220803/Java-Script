// Immediately Invoked Function Expressions (IIFE)

// the function which can be immediatly execute and to remove or ignore the global scope pollution

// just wrapup the function to a parenthesis
// Example
(function chai(){
    // this is named IIFE
    console.log(`DB CONNECTED`);
    })();        // in some cases it will give error if we dont use semicolon

((name)=> {
    console.log(`DB IS CONNETED TWO ${name}`);
}) ('Piyush')