/* 

    LeetCode Task:
    Given an integer n, return a counter function. This counter function initially returns n 
    and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

*/

    // Increment Then Return
    // const createCounter = function(n) {
    //     let currentCount = n - 1;
    //     return function() {
    //         currentCount += 1;
    //         return currentCount;      
    //     };
    // };

    // Postfix Increment Syntax
    // const createCounter = function(n) {
    //     return function() {
    //         return n++;    
    //     }
    // }

    // Prefix Decrement and Increment Syntax
    // const createCounter = function(n) {
    //     --n;
    //     return function() {
    //         return ++n;
    //     }
    // }

    // Postfix Increment Syntax With Arrow Function
    // const createCounter = function(n) {
    //     return () => n++
    // }

const createCounter = n => () => n++;

const counter = createCounter(10)

console.log(counter())
console.log(counter())
console.log(counter())