/**
 * https://leetcode.com/problems/remove-element/description/
 *
 */

var removeElement = function (nums, val) {
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === val) {
  //     nums.splice(i, 1);
  //     i--; // adjust index after removal
  //   }
  // }
  // return nums.length;

  // Approach - 2
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
