// For Input: "today is friday"
// Expected Output: "Today Is Friday"

function toUpperCase(c) {
  const ascii = c.charCodeAt(0);
  return String.fromCharCode(ascii - 32);
}

function capitalise(paragraph) {
  let n = paragraph.length;
  let arr = Array.from(paragraph);
  for (let i = 0; i < n; i++) {
    if (i == 0 || arr[i - 1] == " " || arr[i - 1] == ".")
      if (arr[i] >= "a" && arr[i] <= "z") 
        // arr[i] = arr[i].toUpperCase();
        arr[i] = toUpperCase(arr[i]);
  }
  return arr.join("");
}

console.log(capitalise("today is friday"));

// Time Complexity: O(n)
// Space Complexity: O(n)

/* Steps to Solve

1. How do we Indentify start of a word?
-> Previous char is a space and current char is an alphabet
-> 0th index (alphabet)
-> Previous char is a "." and current char is an alphabet

2. How to Capitalize a letter?
-> ASCII Values
    "A" -> 65 (imp)
    "B" -> 66
    "a" -> 97 (imp)
    "b" -> 98
    "0" -> 48 (imp)
-> "a" 65-32 "A"

*/
