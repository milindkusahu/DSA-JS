function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();
  let map1 = new Map();

  for (let i = 0; i < s.length; i++) {
    // For first string
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
    // For second string
    if (map1.has(t[i])) {
      map1.set(t[i], map1.get(t[i]) + 1);
    } else {
      map1.set(t[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (map1.get(key) !== value) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("rat", "tar")); // true
console.log(isAnagram("hello", "world")); // false
