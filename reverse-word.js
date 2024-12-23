// Reverse Order of Words in a String

/*
Problem Description
A word is defined as a sequence of non-space characters. The words in s will be
separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two
words.

The returned string should only have a single space separating the words.
Do not include any extra spaces.

Input format
String s.

Output format
The function should return a string of the words in reverse order concatenated by a
single space.

Sample Input 1
hello world

Sample Output 1
world hello

Explanation
The given words after being reversed gives:world hello
Your reversed string should not contain leading or trailing spaces.
*/

// Brute Force Approach
// let result = s.split(" ").reverse().join(" ");
// return result;

function reverseStr(s) {
  let word = "";
  let sentence = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " ") {
      if (word.length != 0) {
        sentence += word + " ";
        word = "";
      }
    } else {
      word = s[i] + word;
    }
  }
  sentence += word;
  return sentence.trim();
}

console.log(reverseStr("hello world"));
