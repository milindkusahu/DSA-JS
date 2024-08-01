// Array Cyclic Rotation
// Time Complexity: O(n)
// Space Complexity: O(1)

function rotateArray(arr, k) {
  const n = arr.length;

  // Normalize k to be within array bounds
  k = k % n;

  // If k is 0 or equal to array length, no rotation needed
  if (k === 0) return arr;

  // Store the last k elements
  let temp = arr.slice(n - k);

  // Shift the first n-k elements to the right
  for (let i = n - 1; i >= k; i--) {
    arr[i] = arr[i - k];
  }

  // Place the stored k elements at the beginning
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }

  return arr;
}

// Example usage
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateArray(arr, k)); // Output: [4, 5, 1, 2, 3]
