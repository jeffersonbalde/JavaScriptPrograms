// Given five positive integers, find the minimum and maximum values that can be calculated
// by summing exactly four of the five integers. Then print the respective minimum and maximum 
// values as a single line of two space-separated long integers.

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let sumArr = []
    for (let i=0; i<arr.length; i++) {
        let sum = 0
        for(let j=0; j<arr.length; j++) {
            if (j !== i) {
                sum += arr[j]
            }
        }
        sumArr.push(sum)
    }

    const min = Math.min.apply(Math, sumArr);
    const max = Math.max.apply(Math, sumArr);

    console.log(min, max);
}

console.log(miniMaxSum([1,3,5,7,9]));