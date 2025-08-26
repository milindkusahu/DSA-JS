/**
 * https://leetcode.com/problems/fibonacci-number/description/
 *
 */

var fib1 = function (n) {
  if (n < 2) return n;
  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

/**
 * TC: O(n)
 * SC: O(1)
 */

var fib = function (n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib1(5));
console.log(fib1(0));
console.log(fib1(2));

/**
 * TC: O(2^n)
 * SC: O(n)
 */

/* n = 5
fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   │   ├── fib(1) → 1
│   │   │   └── fib(0) → 0
│   │   └── fib(1) → 1
│   └── fib(2)
│       ├── fib(1) → 1
│       └── fib(0) → 0
└── fib(3)
    ├── fib(2)
    │   ├── fib(1) → 1
    │   └── fib(0) → 0
    └── fib(1) → 1
*/

/**
 * Rabbit Population
 * 2 rabbit multiply by x2 every month
 *
 * How many rabbit will be there in the nth month?
 */

function rabbits(n) {
  return 2 ** (n + 1);
}

// Example: 5th month
console.log(rabbits(5)); // 64
