/**
 * Maximum Points You Can Obtain from Cards
 *
 * cards = [6,2,3,4,7,2,1,7,1]  k=4 (pickup 4 cards)
 * either pick from front -> 6,2,3,4 (consecutively)
 * or either pick from the back -> 1,7,1,2 (consecutively)
 * or pick -> 6,2,3 (front) + 1 (back) (consecutively)
 *
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/
 *
 */

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

// [6, 2, 3, 4, 7, 2, 1, 7, 1]

var maxScore = function (cardPoints, k) {
  let leftSum = 0,
    rightSum = 0;

  for (let i = 0; i < k; i++) {
    leftSum += cardPoints[i];
  }
  let maxSum = leftSum;

  let rightIndex = cardPoints.length - 1; // 1

  for (i = k - 1; i >= 0; i--) {
    leftSum -= cardPoints[i];

    rightSum += cardPoints[rightIndex];

    maxSum = Math.max(maxSum, leftSum + rightSum);
    rightIndex--;
  }
  return maxSum;
};

console.log(maxScore([6, 2, 3, 4, 7, 2, 1, 7, 1], 4));
