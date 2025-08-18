/**
 * https://leetcode.com/problems/reverse-integer/description/
 *
 */

function reverseNum(x) {
  if (x === 0) return 0;

  let originalNum = x;
  let rev = 0; // 321

  x = Math.abs(x);

  while (x > 0) {
    let rem = x % 10; // 3
    rev = rev * 10 + rem;
    x = Math.floor(x / 10); // 12
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;

  return originalNum > 0 ? rev : -rev;
}

console.log(reverseNum(123));
console.log(reverseNum(-123));
