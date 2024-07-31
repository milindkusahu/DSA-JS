// String Methods -> SC: O(n) same for Arrays
let str = "hello world";

// Length()
console.log(str.length); // Output: 11

// Slice() Function -> slice(start index, end index (not included))
console.log(str.slice(1, 4)); // Creates new string (Immutable)
// Output: ell
console.log(str.slice(4));
// Output: o world

// IndexOf() & lastIndexOf()
console.log(str.indexOf("o")); // Output: 4 (returns left most occurence)
console.log(str.lastIndexOf("o")); // Output: 7 (returns right most occurence)
console.log(str.indexOf("z")); // Output: -1 (not present)

// sort()
console.log(str.split("").sort().join("")); // Output: dehllloorw

// String Usecases
/*
--> Store Name
--> Google Search
--> Messages
--> Emails
*/

// Common Terminologies

// Substring -> Example: ello-wo

// Subsequence -> Example: elow (must be in sequence)

// Prefix -> Example: h, hel, hello, hello world

// Suffix -> Example: d, ld, rld, orld, hello world

// Reversing a string
// let str = "hello world";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  newStr = newStr + str[i];
}
console.log(newStr);
