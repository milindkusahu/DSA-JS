/**
 *
 * https://leetcode.com/problems/missing-number/description/
 *
 * Distinct numbers
 *
 */

// Approach - 1
var missingNumber = function (nums) {
  let sort = nums.sort((a, b) => a - b); // 0, 1 ,3

  for (let i = 0; i < sort.length; i++) {
    if (i !== sort[i]) {
      return i;
    }
  }
  return sort.length;
};

/**
 * TC: O(nlogn)
 * SC: O(1)
 */

var missingNumber1 = function (nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2; // Sum of n natural numbers
  let arrSum = 0;

  for (let i = 0; i < n; i++) {
    arrSum += nums[i];
  }
  return total - arrSum;
};

/**
 * TC: O(n)
 * SC: O(1)
 */

console.log(missingNumber1([3, 0, 1])); // 2
console.log(missingNumber1([0, 1])); // 2
console.log(missingNumber1([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber1([0])); // 1
