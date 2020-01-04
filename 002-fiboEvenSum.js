function fiboEvenSum(n) {
  const fibo = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibo.push(1);
    } else if (i === 1) {
      fibo.push(2);
    } else {
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
  }
  return fibo
    .filter(term => term % 2 === 0)
    .reduce((prev, curr) => prev + curr, 0);
}
