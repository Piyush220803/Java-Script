// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for ( const num of arr){
//     console.log(num);
// }

// Maps = print unique values means dont print the same value twice

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map); // { 'IN' => 'India', 'USA' => 'America', 'FR' => 'France' } dont print the India value twice

// for (const [key, value] of map){
//     console.log(key, ':-', value);
//     }

const myObject = {
    game1: 'NFS',
    game2: 'Forza'
}

// for (const [key, value] of myObject){
//     console.log(key, ':-', value); TypeError: myObject is not iterable
//     }