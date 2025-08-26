// Sum of all elements in an Array

let arr = [5, 3, 2, 0, 1];
//         0  1  2  3  4

let n = arr.length - 1; // 4

function sum(n) {
  if (n <= 0) {
    return arr[n];
  }

  return arr[n] + sum(n - 1);
}

// console.log(sum(n));

/*
1 + sum(3)
0 + sum(2)
2 + sum(1)
3 + sum(0)
5

3 + 5 => 8
2 + 8 => 10
0 + 10 => 10
1 + 10 => 11

*/

// Sum of all odd numbers in an Array

let arr1 = [5, 2, 0, 3, 6, 7]; // 15

let x = arr1.length - 1;

function oddSum(x) {
  let isOdd = arr1[x] % 2 !== 0;

  if (x === 0) {
    return isOdd ? arr1[x] : 0;
  }

  return (isOdd ? arr1[x] : 0) + oddSum(x - 1);
}

console.log(oddSum(x));
