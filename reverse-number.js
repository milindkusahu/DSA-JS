function reverse(num) {
  let reversed = 0;

  while (n > 0) {
    rev = rev * 10 + (n % 10); // Get last digit
    n = Math.floor(n / 10);
  }
  return reversed;
}

console.log(reverse(1234));
