/**
 * https://leetcode.com/problems/reverse-string/description/
 *
 */

var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    let track = s[j];
    s[j] = s[i];
    s[i] = track;
    i++;
    j--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
