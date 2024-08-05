const name = "Piyush"
const repoCount = 4

// console.log(name + repoCount + " value");

// Print using String Interpolation
// console.log(`My name is ${name} and my repo count is ${repoCount}`);
// the advantage of using string interpolation is we can also use 
//    in built function like ${name.toUpperCase()} etc

const gameName = new String('dsfwar')

// console.log(gameName[5]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('w'));

// const newString = gameName.substring(0, 4); // (-8, 4) minus value will be treated as 0
// console.log(newString); // oP = dsfa 

// const anotherName = gameName.slice(-4, -1); // minus value starts from reverse side
// console.log(anotherName); // op = fwa

// const anotherNewString = "  piyush   ";
// console.log(anotherNewString.trim());

const url = "https://piyush.com/piyush%20pandey"

console.log(url.replace('%20', '-'))

console.log(url.includes('com')); // check the given string is present or not here 'com' is present so it print true

console.log(url.split('/'));




