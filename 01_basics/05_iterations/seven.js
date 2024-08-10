const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map((num) => num + 10)

// **************CHAINING**************
// it basically means writing multiple function or methods one after another or combining methods\
const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums);
