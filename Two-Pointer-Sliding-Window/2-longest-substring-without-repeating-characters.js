/** Longest Substring Without Repeating Characters
 * Involves concept => Sliding Window & Two Pointer
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * maximum substring -> Use Two Pointer or Sliding Window
 *
 */

// Brute force
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let hash = new Array(256).fill(0);

    for (let j = i; j < n; j++) {
      if (hash[s.charCodeAt(j)] !== 0) {
        break;
      }
      hash[s.charCodeAt(j)] = 1;
      maxLen = Math.max(maxLen, j - i + 1); // j - i + 1 => "cadbz" length
    }
  }
  return maxLen;
};

// TC: O(n^2) || SC: O(1) => hash array is always size 256 (constant)

/** Optimization
 *     0 1 2 3 4 5 6 7 8
 * s = c a d b z a b c d
 *
 */

var substringOptimization = function (s) {
  let l = 0,
    r = 0,
    maxLen = 0;

  let n = s.length;
  let hash = new Array(256).fill(-1);

  while (r < n) {
    if (hash[s[r]] !== -1) {
      if (hash[s[r]] >= l) {
        l = hash[s[r]] + 1;
      }
    }
    maxLen = Math.max(maxLen, r - l + 1);
    hash[s[r]] = r;
    r++;
  }
  return maxLen;
};

// TC: O(n) || SC: O(1) => hash array is always size 256 (constant)

console.log(substringOptimization("cadbzabcd")); // 5
console.log(substringOptimization("abcabcbb")); // 3
console.log(substringOptimization("bbbbb")); // 1
console.log(substringOptimization("pwwkew")); // 3

// Generate All Substrings

// function generateAllSubStr(str) {
//   let n = str.length;
//   for (let i = 0; i < n; i++) {
//     let newStr = "";
//     for (let j = i; j < n; j++) {
//       newStr += str[j];
//       console.log(newStr);
//     }
//   }
// }

// console.log(generateAllSubStr("cadbzabcd"));
