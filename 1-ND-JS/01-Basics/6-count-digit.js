/**
 * Write a function that returns the count of digits in a number
 *
 */

function countDigits(n) {
  if (n === 0) return 1; // Corner Case

  let count = 0;
  n = Math.abs(n); // Corner Case
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(259)); // 3
console.log(countDigits(0)); // 1
console.log(countDigits(-210)); // 3
