function sumSquareDiffernce(n) {
  const numbers = Array.from({ length: n }, (v, k) => k + 1);
  return (
    numbers.reduce((acc, curr) => acc + curr, 0) ** 2 -
    numbers.reduce((acc, curr) => acc + curr ** 2, 0)
  );
}
