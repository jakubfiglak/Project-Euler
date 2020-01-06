function largestPalindromeProduct(n) {
  const numbers = Array.from(
    { length: Math.pow(10, n) - Math.pow(10, n - 1) },
    (v, k) => k + Math.pow(10, n - 1)
  );

  const products = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      products.push(numbers[i] * numbers[j]);
    }
  }

  const palindromes = products.filter(
    num =>
      num.toString() ===
      num
        .toString()
        .split('')
        .reverse()
        .join('')
  );

  return Math.max(...palindromes);
}
