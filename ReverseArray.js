/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here
    let arr2 = [];
    
    for(let i = a.length - 1; i >= 0; i--){
        arr2.push(a[i]);
    }
    
    return arr2
}

console.log(reverseArray([1,2,3,4,5]))