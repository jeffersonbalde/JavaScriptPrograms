/* 

    LeetCode Task:
    Write a function createHelloWorld. It should return a new function that always returns "Hello World".

*/

// Function Syntax
// const createHelloWorld = function() {
//     return function() {
//         return "Hello World"
//     }
// }

// Arrow Syntax
// const createHelloWorld1 = function() {
//     return () => "Hello World";
// }

// Arrow Syntax + Rest Arguments
const createHelloWorld = function() {
    return (...args) => "Hello World";
}

console.log(createHelloWorld())