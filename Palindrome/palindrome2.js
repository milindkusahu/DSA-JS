/*

Find if the string permutation can form a palindrome

Problem Description
Given a string S which consists of both lowercase and uppercase alphabetical letters,
you have to write a function to check if string S is a permutation of a palindrome or not.

Note: Characters are case sensitive i.e. 'a' is not the same as 'A'.

Input format
First line contains an integer representing the value of T, the number of test cases.
In next T lines each line contains the string S.

Output format
For each test case, print "True"(without quotes) if it is a permutation of a palindrome and "False" otherwise.

Sample Input 1
3
nnaamm
hello
Aab

Sample Output 1
True
False
False

*/

function isPermutationPalindrome(str) {
  const map = new Map(); // O(n)

  // Filling of the Map
  for (let i = 0; i < str.length; i++) {
    // O(n)
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1); // O(1)
    } else {
      map.set(str[i], 1);
    }
  }

  let oddFreqChar = 0;

  for (let [key, value] of map) {
    // O(n)
    if (value % 2 !== 0) {
      // Odd freq
      oddFreqChar++;
    }
  }
  if (oddFreqChar > 1) return false;
  else return true;
}

// TC: O(n) | SC: O(n) // at max length of the string

console.log(isPermutationPalindrome("nnaamm")); // true
console.log(isPermutationPalindrome("hello")); // false
console.log(isPermutationPalindrome("Aab")); // false
