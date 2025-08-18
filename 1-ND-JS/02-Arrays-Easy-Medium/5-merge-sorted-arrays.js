/**
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * Sorted in non-decreasing order
 */

// Approach - 1
var merge = function (nums1, m, nums2, n) {
  let j = 0;
  for (let i = 3; i < nums1.length; i++) {
    nums1[i] = nums2[j];
    j++;
  }
  return nums1.sort(); // logn n
};

/**
 * TC: O(nlogn)
 * SC: O(1)
 */

// Approach - 2
var merge1 = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
};

/**
 * TC: O(m+n)
 * SC: O(m)
 */

// Approach - 3
var merge2 = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  return nums1;
};

/**
 * TC: O(m+n)
 * SC: O(1)
 */

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

console.log(merge2(nums1, m, nums2, n)); // [1,2,2,3,5,6]
