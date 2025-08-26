/**
 * Recursion => Function calls itself to solve smaller versions of the same problem.
 *
 * Two Parts of Recursion -
 * 1.) Base Case -> stop condition (when to stop calling itself.)
 * 2.) Recursive Case -> part where function calls itself
 *
 */

function fun(i) {
  if (i === 0) return; // Base Case (Stopping Condition)

  console.log(i);
  fun(i - 1);
}

// fun(5);

// Print n to 1 using Recursion

function printN(n) {
  if (n === 0) return;

  console.log(n);

  printN(--n);
}

// printN(5);

// Print 1 to n using Recursion

let n = 5;
function print1toN(x) {
  if (x > n) return;

  console.log(x);
  x = x + 1;
  return print1toN(x);
}

print1toN(1);
