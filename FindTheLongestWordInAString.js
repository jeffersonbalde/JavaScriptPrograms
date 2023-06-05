/*

    freeCodeCamp Task:
    Return the length of the longest word in the provided sentence.
    Your response should be a number. 

*/

function findLongestWordLength(str) {
    const words = str.split(' ');
    let maxWordsLength = 0;

    for(let i = 0; i < words.length; i++) {
        if(words[i].length > maxWordsLength){
            maxWordsLength = words[i].length
        }
    }

    return maxWordsLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));