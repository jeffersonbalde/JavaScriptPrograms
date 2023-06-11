/*

    Remove all falsy values from an array. Return a new array; 
    do not mutate the original array.

*/

function bouncer(arr) {
    const filteredArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]) filteredArray.push(arr[i]);
    }
    return filteredArray;
}
  
console.log(bouncer([7, "ate", "", false, 9]));