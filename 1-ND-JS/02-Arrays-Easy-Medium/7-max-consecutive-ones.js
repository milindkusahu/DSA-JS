/**
 *
 * https://leetcode.com/problems/max-consecutive-ones/description/
 *
 * binary array - means containing 0 and 1
 */

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let prevCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      prevCount = Math.max(prevCount, count);
      count = 0;
    }
  }
  // Check count and prevCount which is greater
  // return count > prevCount ? count : prevCount;
  return Math.max(count, prevCount);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
