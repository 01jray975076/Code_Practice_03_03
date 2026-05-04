//1. Return a greeting 
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Jamie"));
// 2. Add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(3, 7));
// 3. Check if a number is even
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(5));
// 4. Square a number
function square(n) {
    return n * n;
}
console.log(square(6));
// Get the last element of an array
function last(arr) {
    return arr[arr.length - 1];
} 
console.log(last([1, 2, 3]));
// 6. Convert Celsius to Fahrenheit
function toF(c) {
    return c * 9 / 5 + 32;
} 
console.log(toF(0)); 
console.log(toF(25));
// 7. Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("jamie"));
// 8. Reverse a string
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse("cat")); 
// 9. Check if a string contains a substring
function contains(str, sub) {
    return str.includes(sub);
}
console.log(contains("javascript", "script"));
console.log(contains("javascript", "javaa"));
// 10. Get a random number between 0 and 1
function rand() {
    return Math.random();
}
console.log(rand());
// 11. Get a random integer between min and max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randInt(1, 5));
// 12. Sum all numbers in an array
function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sum([1, 2, 3, 4]));
// 13. Filter out odd numbers
function evens(arr) {
    return arr.filter(n => n % 2 === 0);
}
console.log(evens([1, 2, 3, 4, 5]));
// 14. Count characters in a string
function countChars(str) {
  return str.length;
}
console.log(countChars("hello")); // 5
// 15. Check if array is empty
function isEmpty(arr) {
  return arr.length === 0;
}
console.log(isEmpty([])); // true
console.log(isEmpty([1, 2]));// false
// 16. Convert string to array of words
function words(str) {
  return str.split(' ');
}
console.log(words("I love JS")); // ["I", "love", "JS"]
// 17. Repeat a string n times
function repeat(str, n) {
  return str.repeat(n);
}
console.log(repeat("ha", 3));// "hahaha"
// 18. Check if number is positive
function isPositive(n) {
  return n > 0;
}
console.log(isPositive(5)); // true
console.log(isPositive(-3)); // false
// 19. Get the first element of an array 
function first(arr) {
  return arr[0];
}
console.log(first([10, 20, 30])); // 10
// 20. Remove duplicates from array
function unique(arr) {
  return [...new Set(arr)];
}
console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
// 21. Convert array to comma‑separated string
function join(arr) {
  return arr.join(', ');
}
console.log(join(["a", "b", "c"])); // "a, b, c"
// 22. Find the max number
function max(arr) {
  return Math.max(...arr);
}
console.log(max([4, 9, 2])); // 9
// 23. Find the min number
function min(arr) {
  return Math.min(...arr);
}
console.log(min([4, 9, 2])); // 2
// 24. Check if value is an array
function isArray(v) {
  return Array.isArray(v);
}
console.log(isArray([1, 2])); // true
console.log(isArray("hi")); // false
// 25. Remove falsy values
function clean(arr) {
  return arr.filter(Boolean);
}
console.log(clean([0, 1, false, 2, "", 3])); // [1, 2, 3]
 // 26. Convert a number to a string
function toStringNum(n) {
  return String(n);
}
console.log(toStringNum(42)); // "42"
// 27. Check if a string is uppercase 
function isUpper(str) {
  return str === str.toUpperCase();
}
console.log(isUpper("HELLO")); // true
console.log(isUpper("Hello")); // false
// 28. Get the absolute value
function abs(n) {
  return Math.abs(n);
}
console.log(abs(-9)); // 9
// 29. Multiply all numbers in an array
function product(arr) {
  return arr.reduce((a, b) => a * b, 1);
}
console.log(product([2, 3, 4])); // 24
// 30. Check if a number is divisible by another
function divisible(a, b) {
  return a % b === 0;
}
console.log(divisible(10, 5));
// true
divisible(10, 3); // false
// 31. Get the middle element(s) of an array
function middle(arr) {
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 0
    ? [arr[mid - 1], arr[mid]]
    : arr[mid];
}
console.log(middle([1, 2, 3])); // 2
console.log(middle([1, 2, 3, 4])); // [2, 3]
// 32. Remove the first element
function removeFirst(arr) {
    return arr.slice(1);
}
console.log(removeFirst([1, 2, 3])); // [2, 3]
// 33. Remove the last element 
function removeLast(arr) {
  return arr.slice(0, -1);
}
console.log(removeLast([1, 2, 3])); // [1, 2]
// 34. Convert a string to lowercase
function lower(str) {
  return str.toLowerCase();
}
console.log(lower("JAMIE")); // "jamie"
// 35. Convert a string to uppercase
function upper(str) {
  return str.toUpperCase();
}
console.log(upper("jamie")); // "JAMIE"
// 36. Check if a value is null
function isNull(v) {
  return v === null;
}
console.log(isNull(null)); // true
console.log(isNull(0));    // false
// 37. Check if a value is undefined
function isUndef(v) {
  return v === undefined;
}
console.log(isUndef(undefined)); // true
console.log(isUndef("hi"));      // false
// 38. Clamp a number between min and max
function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}
console.log(clamp(10, 0, 5)); // 5
console.log(clamp(3, 0, 5));  // 3
// 39. Count vowels in a string
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("hello")); // 2
// 40. Check if a string is a palindrome
function isPalindrome(str) {
  const s = str.toLowerCase();
  return s === s.split('').reverse().join('');
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
// 41. Get a random element from an array
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomItem(["a", "b", "c"])); // varies
// 42. Merge two arrays
function merge(a, b) {
  return [...a, ...b];
}
console.log(merge([1, 2], [3, 4])); // [1, 2, 3, 4]
// 44. Remove spaces from a string
function noSpaces(str) {
  return str.replace(/\s+/g, '');
}
console.log(noSpaces("a b c")); // "abc"
function countWords(str) {
  return str.trim().split(/\s+/).length;
}
console.log(countWords("I love JavaScript")); // 3
// 46. Convert an array of numbers to strings
function numsToStrings(arr) {
  return arr.map(String);
}
console.log(numsToStrings([1, 2, 3])); // ["1", "2", "3"]
// 47. Find the index of a value
function indexOf(arr, value) {
  return arr.indexOf(value);
}
console.log(indexOf(["a", "b", "c"], "b")); // 1
// 48. Remove all instances of a value
function removeAll(arr, value) {
  return arr.filter(v => v !== value);
}
console.log(removeAll([1, 2, 2, 3], 2)); // [1, 3]
// 49. Convert an array to a set
function toSet(arr) {
  return new Set(arr);
}
console.log(toSet([1, 2, 2, 3])); // Set {1, 2, 3}
// 50. Convert a set to an array
function fromSet(set) {
  return [...set];
}
console.log(fromSet(new Set([1, 2, 3]))); // [1, 2, 3]
// 51. Check if a number is odd
function isOdd(n) {
  return n % 2 !== 0;
}
console.log(isOdd(7)); // true
console.log(isOdd(4)); // false
// 52. Convert an object to an array of keys
function keys(obj) {
  return Object.keys(obj);
}
console.log(keys({ a: 1, b: 2 })); // ["a", "b"]
//53. Convert an object to an array of values
function values(obj) {
  return Object.values(obj);
}
console.log(values({ a: 1, b: 2 })); // [1, 2]
// 54. Convert an object to an array of entries
function entries(obj) {
  return Object.entries(obj);
}
console.log(entries({a:1, b:2})); // [["a",1], ["b",2]]
// 55. Create an object from entries
function fromEntries(arr) {
  return Object.fromEntries(arr);
}
console.log(fromEntries([["a", 1], ["b", 2]])); // {a:1, b:2}
// 56. Check if a string starts with a substring
function starts(str, sub) {
  return str.startsWith(sub);
}
console.log(starts("JavaScript", "Java")); // true
// 57. Check if a string ends with a substring
function ends(str, sub) {
  return str.endsWith(sub);
}
console.log(ends("notes.txt", ".txt")); // true
// 58. Pad a string on the left
function padLeft(str, len, char=' ') {
  return str.padStart(len, char);
}
console.log(padLeft("5", 3, "0")); // "005"
// 59. Pad a string on the right
function padRight(str, len, char=' ') {
  return str.padEnd(len, char);
}
console.log(padRight("hi", 5, ".")); // "hi..."
// 60. Remove the first character of a string
function removeFirstChar(str) {
  return str.slice(1);
}
console.log(removeFirstChar("hello")); // "ello"
// 61. Remove the last character of a string
function removeLastChar(str) {
  return str.slice(0, -1);
}
console.log(removeLastChar("hello")); // "hell"
// 62. Get the type of a value
function typeOf(v) {
  return typeof v;
}
console.log(typeOf(42)); // "number"
console.log(typeOf("hi")); // "string"
console.log(typeOf(true)); // "boolean"
console.log(typeOf(null)); // "null"
console.log(typeOf(undefined)); // "undefined"
// 63. Check if a number is negative
function isNegative(n) {
  return n < 0;
}
console.log(isNegative(-5)); // true
// 64. Convert hours to minutes
function hoursToMinutes(h) {
  return h * 60;
}
console.log(hoursToMinutes(2)); // 120
// 65. Convert minutes to seconds
function minutesToSeconds(m) {
  return m * 60;
}
console.log(minutesToSeconds(3)); // 180
// 66. Convert seconds to milliseconds
function secondsToMs(s) {
  return s * 1000;
}
console.log(secondsToMs(5)); // 5000
// 67. Get the remainder of division 
function remainder(a, b) {
  return a % b;
}
console.log(remainder(10, 3)); // 1
// 68. Raise a number to a power
function power(base, exp) {
  return base ** exp;
}
console.log(power(2, 3)); // 8
// 69. Check if a string is empty
function isEmptyString(str) {
  return str.length === 0;
}
console.log(isEmptyString("")); // true
console.log(isEmptyString("hi")); // false
// 70. Trim whitespace
function trim(str) {
  return str.trim();
}
console.log(trim("  hello  ")); // "hello"
// 71. Get the nth character of a string
function charAtIndex(str, n) {
  return str[n];
}
console.log(charAtIndex("hello", 1)); // "e"
// 72. Repeat an array n times
function repeatArray(arr, n) {
  return Array(n).fill(arr).flat();
}
console.log(repeatArray([1, 2], 3)); // [1,2,1,2,1,2]
// 73. Check if all numbers in an array are positive
function allPositive(arr) {
  return arr.every(n => n > 0);
}
console.log(allPositive([1, 2, 3])); // true
console.log(allPositive([1, -1])); // false
// 74. Check if any number in an array is negative
function anyNegative(arr) {
  return arr.some(n => n < 0);
}
console.log(anyNegative([1, 2, -3])); // true
//75. Convert an array to a frequency map 
function frequency(arr) {
  const map = {};
  for (const item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  return map;
}
console.log(frequency(["a", "b", "a"])); // {a:2, b:1}
// 76. Find the longest word in a string
function longestWord(str) {
  return str.split(' ').reduce((a, b) => a.length >= b.length ? a : b);
}
console.log(longestWord("I love JavaScript a lot")); // "JavaScript"
// 77. Find the shortest word in a string
function shortestWord(str) {
  return str.split(' ').reduce((a, b) => a.length <= b.length ? a : b);
}
console.log(shortestWord("I love JS")); // "I"
// 78. Remove non‑letters from a string
function onlyLetters(str) {
  return str.replace(/[^a-z]/gi, '');
}
console.log(onlyLetters("h3ll0!")); // "hll"
// 79. Count occurrences of a character
function countChar(str, char) {
  return str.split(char).length - 1;
}
console.log(countChar("banana", "a")); // 3
// 80. Shuffle an array
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffle([1,2,3,4])); // varies
// 81. Flatten a nested array (1 level)
function flatten(arr) {
  return arr.flat();
}
console.log(flatten([1, [2, 3], 4])); // [1, 2, 3, 4]
// 82. Deep clone an object
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
console.log(clone({a:1, b:{c:2}})); // {a:1, b:{c:2}}
// 83. Get unique characters in a string
function uniqueChars(str) {
  return [...new Set(str)].join('');
}
console.log(uniqueChars("banana")); // "ban"
// 84. Check if two strings are anagrams
function isAnagram(a, b) {
  const clean = s => s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return clean(a) === clean(b);
}
console.log(isAnagram("listen", "silent")); // true
// 85. Convert snake_case to camelCase
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
console.log(snakeToCamel("hello_world")); // "helloWorld"
// 86. Convert camelCase to snake_case
function camelToSnake(str) {
  return str.replace(/[A-Z]/g, c => "_" + c.toLowerCase());
}
console.log(camelToSnake("helloWorld")); // "hello_world"
// 87. Get the sum of digits of a number
function sumDigits(n) {
  return String(n).split('').reduce((a, b) => a + Number(b), 0);
}
console.log(sumDigits(1234)); // 10
// 88. Check if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(9)); // false
// 89. Generate an array of numbers 1 to n
function range(n) {
  return Array.from({length: n}, (_, i) => i + 1);
}
console.log(range(5)); // [1, 2, 3, 4, 5]
// 90. Remove null and undefined
function compact(arr) {
  return arr.filter(v => v != null);
}
console.log(compact([1, null, 2, undefined, 3])); // [1, 2, 3]
// 91. Chunk an array into groups
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}
console.log(chunk([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]
// 92. Get the difference between two arrays
function diff(a, b) {
  return a.filter(x => !b.includes(x));
}
console.log(diff([1, 2, 3], [2, 3])); // [1]
// 93. Get the intersection of two arrays
function intersect(a, b) {
  return a.filter(x => b.includes(x));
}
console.log(intersect([1, 2, 3], [2, 3, 4])); // [2,3]
// 94. Capitalize every word
function titleCase(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}
console.log(titleCase("hello world")); // "Hello World"
// 95. Generate initials from a name
function initials(name) {
  return name.split(' ').map(w => w[0].toUpperCase()).join('');
}
console.log(initials("Jamie Ray")); // "JR"
// 96. Remove HTML tags
function stripHTML(str) {
  return str.replace(/<[^>]*>/g, '');
}
console.log(stripHTML("<p>Hello</p>")); // "Hello"
// 97. Convert array of pairs to a map
function toMap(arr) {
  return new Map(arr);
}
console.log(toMap([["a",1],["b",2]])); // Map { "a" => 1, "b" => 2 }
// 98. Convert a map to an object
function mapToObj(map) {
  return Object.fromEntries(map);
}
console.log(mapToObj(new Map([["a",1],["b",2]])));
; // {a:1, b:2}
//99. Get unique numbers from two arrays
function uniqueMerge(a, b) {
  return [...new Set([...a, ...b])];
}
console.log(uniqueMerge([1,2], [2,3])); // [1,2,3]
// 100. Delay execution (simple async timeout)
function wait(ms) {
  return new Promise(res => setTimeout(res, ms));
}
wait(500).then(() => console.log("Done")); 
// Logs "Done" after ~500ms

