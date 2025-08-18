/**
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * In-place without making a copy of the array
 *
 */

var moveZeroes = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
};

/**
 * TC: O(n)
 * SC: O(1)
 */

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
