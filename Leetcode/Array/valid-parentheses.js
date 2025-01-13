/**
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 */

function isValidParentheses(s) {
  // Create a stack to store opening brackets
  const stack = [];

  // Create a map of closing to opening brackets
  const bracketMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // Traverse each character in the string
  for (let char of s) {
    // If it's a closing bracket
    if (char in bracketMap) {
      // Check if stack is empty or if the last opening bracket doesn't match
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push to stack
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([])")); // true
