/**
 * Problem Description
 * You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !, -.; etc.
 * You are supposed to find out which character occurs the maximum number of times and its occurrence count in the given string.
 * If two characters occur equal number of times, you have to output the character with the lower ASCII value.
 *
 * For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.
 *
 * => Input: "Statements are unique."
 * => Output: e 4
 *
 */

function mostFrequent(str) {
  // Create a map DS
  const map = new Map();
  // For each character in str
  // If map has this character
  // Increment its count
  // If map doesn't have this character
  // Insert new entry into map
  for (let i = 0; i < str.length; i++) {
    // O(n)
    let char = str[i];
    if (map.has(char)) {
      let prevCount = map.get(char);
      map.set(char, prevCount + 1);
    } else {
      map.set(char, 1);
    }
  }
  // For each entry in map
  // If its count is higher than ans
  // Update the ans
  // If its count is same as ans
  // If key has lower ASCII Value
  // Update ans
  let char = "";
  let count = 0;

  for (let [key, value] of map) {
    // O(1) -> This loop will run at max 70 times.
    if (value > count) {
      char = key;
      count = value;
    } else if (value === count) {
      if (key < char) {
        char = key;
      }
    }
  }
  return [char, count];
}

console.log(mostFrequent("Statements are unique.")); // [ 'e', 4 ]
console.log(mostFrequent("Hello world")); // [ 'l', 3 ]

/**
 * Time Complexity => O(n)
 * Space Complexity => O(1)
 * -> 'a - z' (26) || 'A - Z' (26) || 0 - 9 (10) || .,$,# (8)
 * -> Total => 70
 */
