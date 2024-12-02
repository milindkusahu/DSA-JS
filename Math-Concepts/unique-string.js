/**
 * Problem Description
Given a string S. Implement an algorithm to determine if a string has all unique characters.
Input format
A single line that contains the string S.
Output format
Print "Yes"(without quotes) if S has all unique characters "No"(without quotes) otherwise.
Sample Input 1
abcd

Sample Output 1
Yes

Explanation
All characters in "abcd" are unique.
Sample Input 2
abca

Sample Output 2
No
 */

// Unique characters is mentioned in the string, that means we can use Set()

function uniqueStr(str) {
  let s = new Set();
  let n = str.length;

  for (let i = 0; i < n; i++) {
    s.add(str[i]);
  }

  console.log(s); // Set(3) { 'a', 'b', 'c' }

  if (s.size === n) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(uniqueStr("abca")); // No -> Set(3) { 'a', 'b', 'c' }
console.log(uniqueStr("abcd")); // Yes -> Set(4) { 'a', 'b', 'c', 'd' }
console.log(uniqueStr("fwfwadd")); // No -> Set(4) { 'f', 'w', 'a', 'd' }
console.log(uniqueStr("12")); // Yes -> Set(2) { '1', '2' }
