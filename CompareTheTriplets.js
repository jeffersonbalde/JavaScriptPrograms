/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;

    for(let i = 0; i <= 3; i++){
        if( a[i] > b[i]){
            alice++
        }else if (a[i] === b[i]){
            bob += 0;
            alice += 0;
        }else {
            bob++
        }
    }
    
    return [alice, bob];
}

console.log(compareTriplets([5,6,7],[3,6,10]));