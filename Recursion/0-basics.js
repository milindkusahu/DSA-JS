/**
 * Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.
 * A method (function) can call itself in order to solve the problem.
 *
 * Time Complexity => O(n)
 * Space Complexity => O(n) -> Consuming extra Space for filling the Stack
 */

function main(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  return main(n - 1);
}

main(3);

/*
Recursive Tree:

       f(3)
       / 
     f(2)
     /
   f(1)
   /
 f(0)

*/
