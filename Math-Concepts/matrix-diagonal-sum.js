/*

Problem Description
Given a matrix of dimensions n x m, you are tasked with finding the sum of elements by starting
at the index (i, j) and moving in a diagonal order.
Write a function that takes the matrix, starting index (i, j), and returns the sum of the elements
encountered while moving diagonally. If the starting index is invalid, return -1
Input format
First line contains integers n and m.
Second line contains starting index i and j.
In next n lines each line contains m elements.
Output format
An integer representing the sum.
Sample Input 1
44

01

1234
1245
2334
1123
Sample Output 1
10

*/



function DiagonSum(matrix, n, m, i, j) {
  if (i >= n || j >= m || i < 0 || j < 0) return -1;

  let diagonalSum = 0;
  let row = i;
  let col = j;

  while (row < n && col < m) {
    diagonalSum += matrix[row][col];
    row++;
    col++;
  }
  return diagonalSum;
}

console.log(
  DiagonSum(
    [
      [1, 2, 3, 4],
      [1, 2, 4, 5],
      [2, 3, 3, 4],
      [1, 1, 2, 3],
    ],
    4,
    4,
    0,
    1
  )
); // 10
