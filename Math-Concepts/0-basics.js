/**
 * Agenda:
 * => Prime Numbers -> Any number which has only 2 factors
 * i.e, 1 and the number itself is caller Prime Numbers.
 * FACT: 2 is the only even prime number.
 * 1 is neither prime non composit
 *
 * => GCD (Greatest Commom Divisor)
 *
 * => Co-prime
 */

function checkPrime(num) {
  if (num < 2) {
    return `${num} is Not Prime`;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return `${num} is Not Prime`;
  }

  return `${num} is a Prime`;
}

console.log(checkPrime(4));

// TC: O(n)

function checkPrimeOptimized(n) {
  if (n < 2) {
    return `${n} is Not Prime`;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return `${n} is Not Prime`;
  }

  return `${n} is a Prime`;
}

console.log(checkPrimeOptimized(4));

// TC: O(sqrt(n))

// For TC: O(logn) we can use Sieve of Eratosthenes

/**
 * GCD (Greatest Commom Divisor)
 *
 * Example: gcd(4, 6) => 2 | gcd(8, 12) => 4 | gcd(4, 5) => 1 | gcd(2, 100) => 2
 * gcd(9, 0) => 9
 *
 * Euclidian Algorithm:
 * -> GCD of any non-zero number and 0 will the non-zero number only.
 *    1. gcd(a, 0) = a
 *    2. gcd(a, b) = gcd(b, a % b)
 *
 */

function gcd(a, b) {
  // Base Case
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

console.log(gcd(4, 6)); // 2
console.log(gcd(8, 12)); // 4
console.log(gcd(4, 5)); // 1
console.log(gcd(2, 100)); // 2
console.log(gcd(9, 0)); // 9

// TC: O(log(min(a,b))) -> log because of repeated division
// SC: O(log(min(a,b)))

/**
 * Co-Prime Number
 * => If the two number a & b, gcd is 1, know as co-prime of each other.
 *    gcd(2, 3) = 1 ✔ Co-Prime
 *    gcd(4, 5) = 1 ✔ Co-Prime
 *
 */
