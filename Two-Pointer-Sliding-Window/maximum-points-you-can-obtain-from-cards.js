/**
 * Maximum Points You Can Obtain from Cards
 *
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/
 *
 */

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let leftSum = 0,
    rightSum = 0;

  for (let i = 0; i < k; i++) {
    leftSum += cardPoints[i];
  }

  let maxSum = leftSum;

  let rightIndex = cardPoints.length - 1;

  for (i = k - 1; i >= 0; i--) {
    leftSum -= cardPoints[i];

    rightSum += cardPoints[rightIndex];

    maxSum = Math.max(maxSum, leftSum + rightSum);
    rightIndex--;
  }

  return maxSum;
};
