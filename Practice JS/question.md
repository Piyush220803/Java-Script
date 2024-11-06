**Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.**
Easy
**toBe(val)** accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".  
**notToBe(val)** accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

**Example 1:**

**Input:** `func = () => expect(5).toBe(5)`  
**Output:** `{"value": true}`  
**Explanation:** 5 === 5 so this expression returns true.

**Example 2:**

**Input:** `func = () => expect(5).toBe(null)`  
**Output:** `{"error": "Not Equal"}`  
**Explanation:** 5 !== null so this expression throws the error "Not Equal".

**Example 3:**

**Input:** `func = () => expect(5).notToBe(null)`  
**Output:** `{"value": true}`  
**Explanation:** 5 !== null so this expression returns true.

                                        **Answer:**

```javascript
/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
  return {
    toBe: function (val2) {
      if (val === val2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (val2) {
      if (val !== val2) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */



**Create Hello World Function**

Easy

Write a function createHelloWorld. It should return a new function that always returns "Hello World".


Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".

                                  Answer:

var createHelloWorld = function() {
        return function(){
            return "Hello World"
        }
    }


**Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).**

Example 1:

Input:
n = 10
["call","call","call"]
Output: [10,11,12]
Explanation:
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input:
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {

    return function () {
        return n++;
    };
};


**Given an integer array arr and a filtering function fn, return a filtered array filteredArr.**

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.



Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out

**Solution:**

function filter(arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
```
