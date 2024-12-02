/**
 * n = 1234
 * n % 10 = 4 (This way we can get the last number.)
 */

function reverseNumber(n) {
  let rev = 0;

  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}

console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(51)); // 15
