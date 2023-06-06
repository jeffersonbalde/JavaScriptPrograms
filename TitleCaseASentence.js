/*

    freeCodeCamp Task:
    Return the provided string with the first letter of each word capitalized. 
    Make sure the rest of the word is in lower case.

*/

function titleCase(str) {
    let words = str.split(" ")
    let newString = [];

    for(let s in words){
        newString[s] = words[s][0].toUpperCase() + words[s].slice(1).toLowerCase()
    }

    return newString.join(" ");
}

console.log(titleCase("I'm a little tea pot"));