/**
 * Print all the odd numbers in the array
 *
 */

// let arr = [10, 5, 7, 0, 8, 3, 80];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    console.log(arr[i]);
  }
}

// 5
// 7
// 3

/**
 * Print all the even numbers in the array
 *
 */

let arr1 = [10, 5, 7, 0, 8, 3, 80];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0) {
    console.log(arr1[i]);
  }
}

// 10
// 0
// 8
// 80

/**
 * While Loop
 *
 */

let i = 0;

while (i < 5) {
  console.log("Hello World");
  i++;
}
