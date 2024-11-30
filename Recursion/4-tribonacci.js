function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2) + fibonacci(n - 3);
}

console.log(fibonacci(3));

// TC: O()
// SC: O(n) --> Due to creation of Stack
