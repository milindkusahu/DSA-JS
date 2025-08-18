/**
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 */

// Approach - 1
var maxProfit = function (prices) {
  let n = prices.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let profit = prices[j] - prices[i];
      if (profit > max) {
        max = profit;
      }
    }
  }
  return max;
};

/**
 * TC: O(n^2)
 * SC: O(1)
 */

// Approach - 1
var maxProfit1 = function (prices) {
  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    let profit = prices[i] - min;

    if (profit > max) {
      max = profit;
    }
  }
  return max;
};

console.log(maxProfit1([7, 1, 5, 3, 6, 4])); // 5

console.log(maxProfit1([7, 6, 4, 3, 1])); // 0

/**
 * TC: O(n)
 * SC: O(1)
 */
