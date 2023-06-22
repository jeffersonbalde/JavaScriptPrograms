/*

    Write a JavaScript program to check if a given string is upper case or not.

*/

// const isUpperCase = (str) => {
//     if(str === str.toUpperCase()) return true;
//     return false;
// }

const isUpperCase = str => str === str.toUpperCase();

console.log(isUpperCase('ABC')); 
console.log(isUpperCase('A3@$'));
console.log(isUpperCase('aB4'));