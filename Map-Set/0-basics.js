/**
 * Map stores key and value
 * Key => Has to be unique
 * Value => Can be repeated
 * Both key and value can be of different data types.
 *
 * Example => Football Players, where (Key) Jersey No. is unique
 * But Player Name (Value) can be repeated.
 *
 * Searching by key => O(1)
 * Read/ Update/ Insert /Delete => O(1)
 *
 * Time Complexity => O(1)
 * Space Complexity => key, value -> n, n -> 2n => O(n)
 *
 * When to Use Map?
 * => Whenever we need to keep the count of something like:
 * -> Number of Count, Occurences, frequency (Hint to use Map)
 * 
 * CRUD Operations:
 * set(key, value) -> Adds a new key-value pair to the map or updates the value of an existing key.
get(key) -> Returns the value associated with the specified key, or undefined if the key is not found
in the map.
* has(key) -> Returns a boolean indicating whether the specified key is present in the map. TC => O(1)
* delete(key) -> Removes the key-value pair associated with the specified key from the map. TC => O(1)
* clear() -> Removes all key-value pairs from the map. TC => O(n)
 * 
 */

const map = new Map(); // { 1 => 'Milind', 2 => 'Shaswat' }

map.set(1, "Milind");
map.set(2, "Shaswat");

console.log(map.get(2)); // Shaswat
console.log(map.has(1)); // true
console.log(map.delete(1));
console.log(map.clear());

/**
 * Set stores only Key
 * => Key has to be unique
 * => If we try to insert duplicate Key, it will get Ignored.
 *
 * When to Use Set?
 * => Unique or Distinct (Hint to use Set)
 *
 * Time Complexity => O(1)
 * Space Complexity => O(n) -> Number of keys present in the Set
 *
 * CRUD Operations:
 * set(value) -> Adds a new value to the set. TC: O(1)
 * has(value) -> Returns a boolean indicating whether the specified value is present in the set. TC: O(1)
 * delete(value) -> Removes the specified value from the set. TC: O(1)
 * clear() -> Removes all values from the set. TC -> O(n)
 */
