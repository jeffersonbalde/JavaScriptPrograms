// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant 
// cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Method 1

// function translatePigLatin(str) {
//     // Create variables to be used
//     var pigLatin = "";
//     var regex = /[aeiou]/gi;
  
//     // Check if the first character is a vowel
//     if (str[0].match(regex)) {
//       pigLatin = str + "way";
//     } else if (str.match(regex) === null) {
//       // Check if the string contains only consonants
//       pigLatin = str + "ay";
//     } else {
//       // Find how many consonants before the first vowel.
//       var vowelIndice = str.indexOf(str.match(regex)[0]);
  
//       // Take the string from the first vowel to the last char
//       // then add the consonants that were previously omitted and add the ending.
//       pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
//     }
  
//     return pigLatin;
//   }

function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
  
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

console.log(translatePigLatin("consonant"));