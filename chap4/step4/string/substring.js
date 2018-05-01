/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
  str.substring(indexStart[, indexEnd])
 */

var anyString = 'Mozilla';

// 주의 #1: If indexEnd is omitted, substring() extracts characters to the end of the string.
console.log(anyString.substring()); // Mozilla

// 주의 #2: If indexStart is equal to indexEnd, substring() returns an empty string.
console.log(anyString.substring(1, 1)); // NOTHING

// Displays 'M'
console.log(anyString.substring(0, 1));

// 주의 #3: If indexStart is greater than indexEnd,
// then the effect of substring() is as if the two arguments were swapped.
console.log(anyString.substring(1, 0));

// Displays 'Mozill'
console.log(anyString.substring(0, 6));

// Displays 'lla'
console.log(anyString.substring(4));
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Displays 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));

/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
  str.substr(start[, length])
 */
