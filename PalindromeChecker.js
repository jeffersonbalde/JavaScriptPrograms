// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for(var i = 0, len = str.length - 1; i < len/2; i++) {
      if(str[i] !== str[len-i]) {
        return false;
      }
    }

    return true;
}

console.log(palindrome("1 eye for of 1 eye."));