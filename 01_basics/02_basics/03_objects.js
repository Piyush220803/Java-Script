// When we declare like literals then there will be no single form but when we use constructor then always SINGLETON form
// Object.create // when we use this method then the construter is there and singleton will be from


// Object literals

const mySym = Symbol("key 1")

const JsUser = {     // object formed
    name: "Piyush",
    age: 20,
    location: "Roorkee",
    email: "thebatman.wane@gmail.com",
    [mySym]:"mykey1", // to print it as string
    "full name": "Piyush Pandey",
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // use this approach to print the value
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym); 

// JsUser.email = "piyush@chatgpt.com" // to change the value
// Object.freeze(JsUser)  // to lock the value so that it can not be change again
// JsUser.email = "piyush@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");    
}

JsUser.greeting = function(){
    console.log(`Hello Js user, ${this.name}`);   // this keyword is used to access the main object 
}

console.log(JsUser.greeting());

