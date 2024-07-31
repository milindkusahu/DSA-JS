// Binary Search (Prerequisite: Array should be sorted)
// Time Complexity: O(log N) -> Repeated division
// Space Complexity: O(1)

function searchTarget(n, target, arr) {
  let l = 0,
    r = n - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] == target)
        return mid;
    if (target > arr[mid])
        l = mid + 1;
    else
        r = mid - 1;
  }
  return -1;
}

console.log(searchTarget(5, 7, [1, 3, 5, 7, 13]));
