function search(arr, n, target) {
  for (let i = 0; i < n; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

// Time Complexity - O(n)
// Space Complexity - O(1)

/*
Other examples of O(n)
* Get the max/min value in an array.
* Find a given element in a collection. (What happens if this is sorted?)
* Print all the values in a list.
* Every time a list or array gets iterated over, it is most likely in O(n) time.
*/

function findCommonElements(arr1, arr2) {
  let commonElements = new Array();

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] == arr2[j]) {
        commonElements.add(arr1[i]);
        break;
      }
    }
  }

  return commonElements;
}

// Time Complexity - O(m*n) - Running 2 loops but each one iterates to a different length
// Space Complexity - O(min(m,n))

for (i = 0; i < n; i++) {
  console.log(i);
}
for (i = 0; i < n; i++) {
  console.log(i);
}

// Time Complexity - O(m+n) - Running 2 loops but they are not nested
// Space Complexity - O(1) - constant number of variables

let sum = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    sum = i + j;
  }
}

// Time Complexity - O(n^2)
// Space Complexity - O(1) - constant number of variables

for (let i = 0; i < a; i++) {
  for (let j = 0; j <= b; j++) {
    for (let k = 0; k <= c; k++) {
      console.log(i, j, k);
    }
  }
}

// Time Complexity - O(a*b*c) - Running 3 nested loops
// Space Complexity - O(1) - constant number of variables

//* Important: Always express complexity in terms of the variable given to the problem.