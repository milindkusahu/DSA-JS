/**
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * non-empty array
 *
 */

// Approach - 1
var singleNumber = function (nums) {
  // const map = new Map(); // has table
  const map = {}; // has table

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === 1) return nums[i];
  }
};

/**
 * TC: O(n)
 * SC: O(n)
 */

var singleNumber1 = function (nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};

/**
 * Bitwise XOR: Always use XOR to eliminate duplicates
 * a (XOR) 0 => a
 * a (XOR) a => 0
 *
 * 1 1 0
 * 0 0 0
 * -----
 * 1 1 0
 *
 */

/**
 * TC: O(n)
 * SC: O(1)
 */

console.log(singleNumber1([2, 2, 1])); // 1
console.log(singleNumber1([-2, -2, -1])); // -1
console.log(singleNumber1([4, 1, 2, 1, 2])); // 4
console.log(singleNumber1([1])); // 1
console.log(singleNumber1([-1])); // -1
