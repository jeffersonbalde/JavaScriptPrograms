/*

   Write a JavaScript program to reverse the order of characters in the string.

*/

// method1
//  const reverseString =  str => [...str].reverse().join("");

// method 2
// const reverseString = (str) => {
//    return [...str].reverse().join("");
// }

function reverseString(str) {
  let result = "";

  for(let i = str.length - 1; i >= 0; i--){
    result += str[i]
  }

  return result;
}

console.log(reverseString("javascript"));