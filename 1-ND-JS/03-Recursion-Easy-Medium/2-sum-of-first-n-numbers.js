// Sum of first n numbers

function sum(n) {
  if (n === 0) return 0;

  return n + sum(n - 1);
}

console.log(sum(5));

/* DRY RUN:
5 + sum(4)
4 + sum(3)
3 + sum(2)
2 + sum(1)
1 + sum(0)
0 + => X

1 + 0 => 1
2 + 1 => 3
3 + 3 => 6
4 + 6 => 10
5 + 10 => 15 (Ans)
*/

/*

5 + 4 + 3 + 2 + 1
    4 + 3 + 2 + 1 sum(4...n)
        3 + 2 + 1 sum(3...n)
            2 + 1 sum(2...n)

Formula sum(n) => n + sum(n-1)
*/
