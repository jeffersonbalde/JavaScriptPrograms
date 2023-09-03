// Given an array of integers, calculate the ratios of its elements that are positive, 
// negative, and zero. Print the decimal value of each fraction on a new line with  
// places after the decimal.

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positives = [];
    let negatives = [];
    let zeroes = [];
    
    for(let num of arr) {
        if(num > 0) {
            positives.push(num);
        }
        if(num < 0) {
            negatives.push(num)
        }
        if(num === 0) {
            zeroes.push(num)
        }
    }
    console.log((positives.length / arr.length).toFixed(6))
    console.log((negatives.length / arr.length).toFixed(6))
    console.log((zeroes.length / arr.length).toFixed(6))
}