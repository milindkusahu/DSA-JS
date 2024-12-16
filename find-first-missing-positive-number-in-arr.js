/*
First Missing Positive

Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 1 is the smallest possitive integer
// If we do multiple searh operations, may be use a Map

var firstMissingPositive = function (nums) {
  // const numSet = new Set(nums);
  // const n = nums.length;
  // for (let i = 1; i < n + 1; i++) {
  //   if (!numSet.has(i)) {
  //     return i;
  //   }
  // }
  // return n + 1;

  let num = 1;
  let n = nums.length;
  while (num <= n) {
    let isPresent = false;
    for (let i = 0; i < n; i++) {
      if (nums[i] == num) {
        isPresent = true;
        break;
      }
    }
    if (isPresent == false) {
      return num;
    }
    num++;
  }
  // If all numbers from 1 to n are present, return n+1
  return n + 1;
};

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
