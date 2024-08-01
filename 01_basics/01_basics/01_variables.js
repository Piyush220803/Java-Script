const accountId = 144553
let accountEmail = "pandeypiyush2208@gmail.com"
var accountPassword = "55656"
accountCity = 'Roorkee'
let accountState;
// accountId = 2 => this is not allowed

/*
1. Prefer use let instead of var because of issue in scope and 
functional scope.
As problem here is if we are using var then everytime in the code
if we define the same name variable with other name or value it 
will change every timt even if we dont want it to be change.
Thats why using let is better option.
2. Also in JS we can use a variable even if not define th
dat type as written accountCity but not any defined data type
3. Here let accountState is not defined or not given any value
so we print it the JS print the value as UNDEFINED.
*/
console.log(accountId);
accountEmail = "piyush.cse@gmail.com"
accountPassword = "32423"
accountCity = 'Varanasi'
console.table([accountEmail, accountPassword, accountCity, accountState]);

