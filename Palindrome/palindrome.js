/**
 * Palindrome
 *
 * Example: abcba --> abcba
 */

// Brute Force
function isPalindrome(s) {
  let reverse = s.split("").reverse().join(""); // O(n)

  if (reverse !== s) return false;
  return true;
}

console.log(isPalindrome("abcba"));
console.log(isPalindrome("abcbac"));

// Two Pointer Approach (Optimization)

function isPalindromeOptimize(s) {
  let start = 0,
    end = s.length - 1;

  while (start <= end) {
    // TC: O(n)
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindromeOptimize("abcba"));
console.log(isPalindromeOptimize("abcbac"));

// TC: O(n) | SC: O(1)
