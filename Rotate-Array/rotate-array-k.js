// Left Rotate the array by one place

function rotatebyOne(nums) {
  let temp = nums[0];
  let n = nums.length;

  for (let i = 1; i < n; i++) {
    nums[i - 1] = nums[i];
  }
  nums[n - 1] = temp;
  return nums;
}

// TC: O(n) | SC: o(n)

// console.log(rotatebyOne([1, 2, 3, 4, 5])); // [ 2, 3, 4, 5, 1 ]

// Left rotate the Array by D Places

function rotatebyDPlaces(nums) {
  let temp = nums[0];
  let temp2 = nums[1];
  let n = nums.length;

  for (let i = 2; i < n; i++) {
    nums[i - 2] = nums[i];
  }
  nums[n - 2] = temp;
  nums[n - 1] = temp2;
  return nums;
}

console.log(rotatebyDPlaces([1, 2, 3, 4, 5, 6, 7])); // [3, 4, 5, 6, 7, 1, 2];

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotateOptimize(nums, k) {
  const n = nums.length;
  k = k % n;
  const rotated = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
  return rotated;
}

// console.log(rotateOptimize([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4];
