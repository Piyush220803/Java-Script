// Dates
// Date is an object in JS
// let myDate = new Date()  
// console.log(myDate.toString()); //Mon Aug 05 2024 22:51:50 GMT+0530
// console.log(myDate.toISOString()); //2024-08-05T17:21:50.355Z
// console.log(myDate.toJSON());       // 2024-08-05T17:21:50.355Z
// console.log(myDate.toDateString()); // Mon Aug 05 2024
// console.log(myDate.toLocaleDateString());  // 8/5/2024
// console.log(myDate.toLocaleString());   // 8/5/2024


// let myCreatedDate = new Date(2022, 0, 22, 5, 3) // month starts from 0 in JS 5 , 3 are for hour and min
// let myCreatedDate = new Date(2022, 0, 22)
// let myCreatedDate = new Date("2024-01-14") here month start from 1
// let myCreatedDate = new Date("08-20-2024")
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now() //static method that returns the number of milliseconds that have elapsed since January 1st, 1970 at 00:00:00 UTC
const now = performance.now() // For more precise timing in performance-critical scenarios
// console.log(myTimeStamp);
// console.log(now);
// console.log(Math.floor(Date.now()/1000)); // to get the value in seconds with no decimal value

let newDate = new Date()
// console.log(newDate); // 2024-08-05T18:35:06.087Z
// console.log(newDate.getMonth()); //7 august (as it starts from 0)
// console.log(newDate.getDay()); //2 (monday)
// console.log(newDate.getHours()); // (0 when the code runs)

newDate.toLocaleString('default', {
    weekday: "long"
})

