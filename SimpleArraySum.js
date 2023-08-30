/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    let sum = 0;
    // Write your code here
    for(let i = 0; i < ar.length; i++){
        sum += ar[i]
    }
    
    return sum;
}

console.log(simpleArraySum([2,2,3,2]))