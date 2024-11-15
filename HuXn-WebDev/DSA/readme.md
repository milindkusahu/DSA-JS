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

## Arrays

![1731676982703](image/readme/1731676982703.png)

### Array Methods

1. push()
2. get()
3. pop()
4. shift()
5. unshift()

## Reverse String

```
const str = "Hello";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}

console.log(newStr);

```

## Palindromes

![1731678501630](image/readme/1731678501630.png)

```
function isPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  if (reverseStr === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("cddc"));
console.log(isPalindrome("Hello"));
```

## Reverse Integer

```
function reverseInteger(int) {
  let reversed = int.toString().split("").reverse().join("");
  let num = Number(reversed);
  return num;
}

console.log(reverseInteger(1234));
```

## Sentence Capitalization

![1731679487306](image/readme/1731679487306.png)

```

```
