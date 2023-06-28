// We'll pass you an array of two numbers. Return the sum of those two numbers 
// plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr){
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumOfAll = 0;

    // for(let i = min; i <= max; i++){
    //     sumOfAll += i;
    // }

    for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
        sumOfAll += i;
    }

    return sumOfAll;
}

console.log(sumAll([1, 4]));