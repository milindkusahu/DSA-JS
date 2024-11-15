// Reverse String

// Method - 1
const str = "Hello";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}

console.log(newStr);

// Method - 2
const str1 = "Hello";
let reversedStr = str1.split("").reverse().join("");
console.log(reversedStr);

// Method - 3
function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("Hello"));
