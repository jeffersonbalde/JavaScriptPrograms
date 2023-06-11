/* 

    LeetCode Task:
    Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

    The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.

*/

// Class
// class Counter {
//     constructor(init) {
//         this.init = init;
//         this.currentCount = init;
//     }

//     increment() {
//         this.currentCount += 1;
//         return this.currentCount;
//     }

//     decrement() {
//         this.currentCount -= 1;
//         return this.currentCount;
//     }

//     reset() {
//         this.currentCount = this.init;
//         return this.currentCount;
//     }
// }

// const createCounter = function(init) {
//     return new Counter(init)
// }

// Closure with Proxy
// const createCounter = function(init) {
//     let currentCount = init;
//     return new Proxy({}, {
//         get: (target, key) => {
//             switch (key) {
//                 case "increment": 
//                 return () => ++currentCount;
//                 case "decrement": 
//                 return () => --currentCount;
//                 case "reset":
//                 return () => (currentCount = init);
//                 default: 
//                     throw Error("Unexpected Method")
//             }
//         }
//     })
// }

// Closure
// const createCounter = function(init) {
//     let currentCount = init;
//     return {
//         increment: function() {
//             currentCount += 1;
//             return currentCount
//         },
//         decrement: function() {
//             currentCount -= 1;
//             return currentCount;
//         },
//         reset: function() {
//             currentCount = init;
//             return currentCount;
//         }
//     }
// }

// Closure with Separately Created Functions
// const createCounter = function(init) {
//     let currentCount = init;
    
//     function increment() {
//         return ++currentCount;
//     }

//     function decrement() {
//         return --currentCount
//     }

//     function reset() {
//         return currentCount = init;
//     }

//     return {increment, decrement, reset}
// }

// Closure with Shortened Syntax
const createCounter = function(init) {
    let currentCount = init;
    return {
        increment: () => ++currentCount,
        decrement: () => --currentCount,
        reset: () => (currentCount = init),
    }
}


const counter = createCounter(5)

console.log(counter.decrement()) 
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.increment())  
console.log(counter.increment())  
console.log(counter.reset())