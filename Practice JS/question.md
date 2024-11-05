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
```
