/**
 * Sum of Natural Number using Recursion
 */

function sumOfNaturalNum(n) {
  if (n === 0) {
    return 0;
  }
  return sumOfNaturalNum(n - 1) + n;
}

console.log(sumOfNaturalNum(3));

function sumOfNaturalNum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNaturalNum(3));

function sumOfNaturalNum(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumOfNaturalNum(3));
