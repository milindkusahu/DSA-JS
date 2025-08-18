/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * Integer array -> Can have -ve as well as +ve numbers
 * Non-decreasing order -> Can have duplicates
 * [0,0,1,1,1,4,5,5,5]
 * In-place -> Solve without creating new array
 * Relative order of the elements should be kept the same
 *
 */

var removeDuplicates = function (nums) {
  if (nums.length < 3 && nums[0] === nums[1]) return 1;

  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
