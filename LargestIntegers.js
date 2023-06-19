/*

    Write a JavaScript program to find the largest of three given integers.

*/

const max_of_three = (x, y, z) => {
    let max_int;

    if(x > y) {
        max_int = x
    }else {
        max_int = y
    }

    if(z > max_int) max_int = z

    return max_int;
}

console.log(max_of_three(1,2,3));
console.log(max_of_three(20,50,100));
console.log(max_of_three(20,50,-100));