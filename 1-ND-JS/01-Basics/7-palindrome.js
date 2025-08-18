/**
 * https://leetcode.com/problems/palindrome-number/description/
 */

var isPalindrome = function (x) {
  let orignalNum = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10; // Provide last number
    rev = rev * 10 + rem;
    x = Math.floor(x / 10); // Removes last number
  }
  if (orignalNum === rev) return true;
  else return false;
};

console.log(isPalindrome(121));
