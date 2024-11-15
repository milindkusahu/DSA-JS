Video Link: [https://youtu.be/wBtPGnVnA9g]()

# Data Structures & Algorithms In JavaScript

## What is Data Structure and Algorithm?

![1731674881133](image/readme/1731674881133.png)

![1731674950352](image/readme/1731674950352.png)

## What is bigO notation?

![1731675405127](image/readme/1731675405127.png)

![1731675480637](image/readme/1731675480637.png)

![1731675538319](image/readme/1731675538319.png)

```
const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

const searchForItem = (item) => {
  let n = groceries.length;

  // O(n)
  for (let i = 0; i < n; i++) {
    if (groceries[i] === item) {
      console.log(`Found: ${item}`);
    }
  }

  // O(n)
  for (let j = 0; j < n; j++) {
    if (groceries[j] === item) {
      console.log(`Found: ${item} 2`);
    }
  }
};

// n + n = 2n -> O(2n)
// Drop the constant so it becomes O(2n)
```

![1731675789388](image/readme/1731675789388.png)

![1731675839848](image/readme/1731675839848.png)

![1731675977940](image/readme/1731675977940.png)

![1731675999404](image/readme/1731675999404.png)

```
function findPairs(arr) {
  // O(n^2) -> Nested for-loop
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }
}
```

![1731676595459](image/readme/1731676595459.png)
