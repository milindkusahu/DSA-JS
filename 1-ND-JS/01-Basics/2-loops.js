/**
 * Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1
 *
 */

let arr = [4, 2, 0, 10, 8, 30];

function findIndex(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}

// console.log(findIndex(arr, 4)); // 0
// console.log(findIndex(arr, 10)); // 3
// console.log(findIndex(arr, 49)); // -1

/**
 * Write a function that returns the number of negative numbers in an array.
 *
 */

let myarr = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegatives(myarr) {
  let count = 0;

  for (let i = 0; i < myarr.length; i++) {
    if (myarr[i] < 0) {
      count++;
    }
  }
  return count;
}

// console.log(countNegatives(myarr)); // 3

/**
 * Write a function that returns the largest number in an array
 *
 */

let arr1 = [2, -9, 17, 0, 1, -10, -4, 8];

function findLargest(arr1) {
  // let largest = -999;
  let largest = -Infinity;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > largest) {
      largest = arr1[i];
    }
  }
  return largest;
}

console.log(findLargest(arr1)); // 17

/**
 * Write a function that returns the smallest number in an array
 *
 */

let arr2 = [2, -9, 17, 0, 1, -10, -4, 8];

function findSmallest(arr2) {
  // let smallest = 999;
  let smallest = Infinity;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
      smallest = arr2[i];
    }
  }
  return smallest;
}

console.log(findSmallest(arr2)); // 17
