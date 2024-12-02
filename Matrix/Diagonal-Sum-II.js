/*

Problem Description
Given a square matrix mat, return the sum of the matrix diagonals.
Only include the sum of all the elements on the primary diagonal and all the elements on the
secondary diagonal thaf are not part of the primary diagonal.
Input format
A single integer n. A input matrix of size n x n.
Output format
A single integer denoting the sum of all the elements on the primary diagonal and all the
elements on the secondary diagonal that are not part of the primary diagonal.

Sample Input 1
3

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Sample Output 1
25

*/

function diagonalSum(mat, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    if (i != n - 1 - i) {
      // Anti-diagonal middle element (5)
      sum += mat[i][n - i - 1]; // Anti-diagonal sum
    }
  }
  return sum;
}

console.log(
  diagonalSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3
  )
); // 25

// TC: O(n) | SC: O(1)
