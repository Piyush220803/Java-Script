// let myName = "Piyush   "
// let studyChannel = "chai    "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.piyush = function() {
    console.log(`Piyush is present in all object`);
    
}

Array.prototype.heyPiyush = function() {
    console.log(`Piyush says hello`);
    
}
// heroPower.piyush()
// myHeros.piyush()
// myHeros.heyPiyush()
// heroPower.heyPiyush()


// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"piyush".trueLength()
"iceTea".trueLength()