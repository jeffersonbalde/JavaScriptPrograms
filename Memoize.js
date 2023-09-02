// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice 
// with the same inputs. Instead it will return a cached value.

/**
 * @param {Function} fn
 */
function memoize(fn) {
    
    const cache = {};
   
    return function(...args) {
     const key = JSON.stringify(args);
     
     if (key in cache) {
       return cache[key];
     }
     
     const result = fn.apply(this, args);
     cache[key] = result;
     
     return result;
   }
   
 }
 
 
 const memoizedSum = memoize(function(a, b) {
   return a + b;
 });
 
 /** 
  * let callCount = 0;
  * const memoizedFn = memoize(function (a, b) {
  *	 callCount += 1;
  *   return a + b;
  * })
  * memoizedFn(2, 3) // 5
  * memoizedFn(2, 3) // 5
  * console.log(callCount) // 1 
  */