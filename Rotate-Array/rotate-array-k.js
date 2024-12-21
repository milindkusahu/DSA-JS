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

function rotatebyDPlaces(arr, d) {
  // Brute Force
  let n = arr.length;
  d = d % n;

  let temp = [];

  for (let i = 0; i < d; i++) {
    // O(n)
    temp[i] = arr[i];
  }

  for (let i = d; i < n; i++) {
    // O(n)
    arr[i - d] = arr[i];
  }

  for (let i = n - d; i < n; i++) {
    // O(n)
    arr[i] = temp[i - (n - d)];
  }
  return arr;
}

// TC: O(d) + O(n-d) + O(d) => O(n+d) | SC: O(d)

function rotatebyDPlacesOptimize(arr, d) {
  
}

console.log(rotatebyDPlaces([1, 2, 3, 4, 5, 6, 7], 2)); // [3, 4, 5, 6, 7, 1, 2];

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
