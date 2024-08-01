/* Problem Description
Given a matrix of dimensions n x n havng elements 1 to n*n distinct elements, check whether the matrix is magic square or not.

Magic square is a square that has the same sum along all rows, columns and diagonals.

Input format
There are n + 1 lines of input.
First line contains integer n.
The next n lines contain n space separated elements.

Output format
Print "Yes" if it is a magic square, "No" otherwise.

Sample Input:
3
4 9 2
3 5 7
8 1 6

Sample Output:
yes

*/

function checkMagicSquare(n, mat) {
  // Calculate the target sum using the first row
  let targetSum = 0;
  for (let i = 0; i < n; i++) {
    targetSum += mat[0][i];
  }

  let d1Sum = 0, // Sum of main diagonal
    d2Sum = 0; // Sum of secondary diagonal

  for (let i = 0; i < n; i++) {
    let rowSum = 0,
      colSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += mat[i][j]; // Sum elements in current row
      colSum += mat[j][i]; // Sum elements in current column

      // Check and sum main diagonal elements
      if (i == j) d1Sum += mat[i][j];
      // Check and sum secondary diagonal elements
      if (i + j == n - 1) d2Sum += mat[i][j];
    }
    // If any row or column sum doesn't match targetSum, it's not a magic square
    if (rowSum != targetSum || colSum != targetSum) return false;
  }

  // Check if both diagonal sums match the targetSum
  if (d1Sum != targetSum || d2Sum !== targetSum) return false;
  else return true;
}

console.log(
  checkMagicSquare(3, [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ])
);

// Output: true

// Time Complexity: O(n^2)
// Space Complexity: O(1)
