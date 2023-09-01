// Given a function fn, return a new function that is identical 
// to the original function except that it ensures fn is called at most once.

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function(fn) {
    
    let functionCalled = false;
    let result;

    return function(...args){
        if(!functionCalled){
            result = fn(...args)
            functionCalled = true
            return result;
        }else {
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)

 console.log(onceFn(1,2,3)) // 6
 console.log(onceFn(2,3,6)) // returns undefined without calling fn
 console.log(onceFn(2,3,6)) // returns undefined without calling fn
