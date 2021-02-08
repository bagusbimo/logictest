function isPallindrome(str) {
    return str == str.split('').reverse().join('');
  }

console.log(isPallindrome("abcba"))