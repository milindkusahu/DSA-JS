// // Recommended Approach
// function containsDuplicate(nums) {
//   let set = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     // O(n)
//     if (set.has(nums[i])) {
//       // O(1)
//       return true; // Found Duplicate
//     }
//     set.add(nums[i]); // O(1)
//   }
//   return false;

//   // for (let i = 0; i < nums.length; i++) {
//   //   set.add(nums[i]);
//   // }
//   // if (set.size !== nums.length) return true; // O(n)
//   // else return false;
// }

// console.log(containsDuplicate([1, 2, 3, 1]));

// // TC: O(n) | SC: O(n)

// function containsDuplicate(nums) {
//   nums.sort((a, b) => a - b); // O(n log n)

//   for (let i = 1; i < nums.length; i++) {
//     // O(n)
//     if (nums[i] === nums[i - 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// TC: O(n log n) | SC: O(1)

// function maxSubArr(arr) {
//   let n = arr.length;
//   let sum = 0;
//   let maxSum = arr[0];

//   for (let i = 0; i < n; i++) {
//     sum += arr[i];
//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return maxSum;
// }

// // TC: O(n) | SC: O(1)

// console.log(maxSubArr([5, 4, -1, 7, 8]));

function secondLargest(arr) {
  let largest = -1;
  let secondLargest = -1;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
      console.log("secondLargest =>" + "", secondLargest);
      console.log("largest =>" + "", largest);
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
      console.log("secondLargest Last =>" + "", secondLargest);
    }
    console.log("Final =>" + "", secondLargest);
  }
  return secondLargest;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1])); // Output: 34
// console.log(secondLargest([10, 5, 10])); // Output: 5
