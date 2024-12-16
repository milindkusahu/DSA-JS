function reverse(num) {
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10); // Get last digit
    num = Math.floor(num / 10);
  }
  return reversed;
}

console.log(reverse(1234));
