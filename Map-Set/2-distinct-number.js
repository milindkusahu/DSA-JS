/**
 * Problem Description
 * You are given a list of n integers, and your task is to calculate the number of distinct values in the
List.
 * Sample Input:
 * 5
 * [2, 3, 2, 2, 3]
 * Sample Output:
 * 2
 * 
 * Explanation: There are two distinct values in the list which are 2 and 3.
 */

function distinctNumber(n, nums) {
  // let set = new Set(nums);
  // return set.size;
  // OR
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    // O(n)
    set.add(nums[i]);
  }
  return set.size; 
}

console.log(distinctNumber(5, [2, 3, 2, 2, 3])); // 2

/**
 * Time Complexity => O(n)
 * Space Complexity => O(n)
 */
