// Reverse String

// Method - 1
// const str = "Hello";
// let newStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   newStr += str[i];
// }

// console.log(newStr);

// // Method - 2
// const str1 = "Hello";
// let reversedStr = str1.split("").reverse().join("");
// console.log(reversedStr);

// // Method - 3
// function reverseString(str) {
//   if (str === "") return "";
//   else return reverseString(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseString("Hello"));

// Palindrome

// function isPalindrome(str) {
//   let reverseStr = str.split("").reverse().join("");
//   if (reverseStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("cddc"));
// console.log(isPalindrome("Hello"));

// Reverse Integer

// function reverseInteger(int) {
//   let reversed = int.toString().split("").reverse().join("");
//   let num = Number(reversed);
//   return num;
// }

// console.log(reverseInteger(1234));

// Sentence Capitalization

// function sentenceCapitalization(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(sentenceCapitalization("hello world")); // Hello World
// console.log(sentenceCapitalization("milind sahu")); // Milind Sahu

// FizzBuzz

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// console.log(fizzBuzz(15));

// Max Profit

// function maxProfit(prices) {
//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     const currentPrice = prices[i];
//     minPrice = Math.min(minPrice, currentPrice);
//     const highestProfit = currentPrice - minPrice;
//     maxProfit = Math.max(maxProfit, highestProfit);
//   }
//   return maxProfit;
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Array Chunks

// Array slice() Function:
// const arr = ["Milind", "Mukul", "Shashwat", "Shubham"];
// console.log(arr.slice(0, 2 + 1)); // slice(start index, end index)

// // Array splice() Function:
// console.log(arr.splice(2, 1, "Shashwat", "Rahul")); // splice (index, how many delete, "new value")

// const chunk = (array, size) => {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     const chunk = array.slice(index, index + size);
//     chunked.push(chunk);
//     index += size;
//   }
//   return chunked;
// };

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Two Sum

