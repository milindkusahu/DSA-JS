/*

Fibonacci Sequence:

Default -> 0 1

0   1   1   2   3   5   8   13

0 + 1 = 1
    1 + 1 = 2
        1 + 2 = 3
            2 + 3 = 5
                3 + 5 = 8
                    5 + 8 = 13
*/

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3));

/*

Problem Description
Given a number n, you have to find the number of Fibonacci numbers lesser than n.
Input format
First line contains an integer n - the given number.
Output format
Print the number of Fibonacci numbers lesser than n.
Sample Input 1
3

Sample Output 1
3

Explanation
Standard Fibonacci sequence is 1,1,2,3,5 ....
So number of Fibonacci numbers less than 3 are 3 (1,1,2)

*/

function nthFibonacciNumber(n) {
  let fib_count = 0;

  let n1 = 0,
    n2 = 1;
  let fib = 0;

  while (fib < n) {
    fib = n1 + n2;
    n1 = n2;
    n2 = fib;
    fib_count++;
  }
  return fib_count;
}

console.log(nthFibonacciNumber(3));

function nthFibonacciNumber1(n) {}
