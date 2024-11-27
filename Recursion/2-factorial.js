/**
 * Factorial using Recursion
 */

function facorial(n) {
  if (n === 0) {
    return 1;
  }
  return facorial(n - 1) * n;
}

console.log(facorial(5));

// Using Loop

function facorial2(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(facorial2(5));
