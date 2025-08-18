/**
 * Loop within a Loop
 *
 */

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log(`i = ${i}, j = ${j}`);
//   }
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log(`i = ${i}, j = ${j}`);
//   }
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = i; j > 0; j--) {
//     console.log(`i = ${i}, j = ${j}`);
//   }
// }

// i = 1, j = 1
// i = 2, j = 2
// i = 2, j = 1

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

/*
i = 5 | j = 0
j = 1
j = 2
j = 3
j = 4

i = 4 | j = 0
j = 1
j = 2
j = 3

i = 3 | j = 0
j = 1
j = 2

i = 2 | j = 0
j = 1

i = 1 | j = 0
*/
