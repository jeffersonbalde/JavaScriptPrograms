/*

    freeCodeCamp Task:
    Check if a string (first argument, str) ends with the given target string (second argument, target).

*/

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("He has to give me a new name", "name"));