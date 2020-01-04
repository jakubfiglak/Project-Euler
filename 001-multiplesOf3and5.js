function multiplesOf3and5(number) {
  const numbers = Array.from({ length: number - 1 }, (v, k) => k + 1);
  const multiples = numbers.filter(
    number => number % 3 === 0 || number % 5 == 0
  );
  return multiples.reduce((prev, curr) => prev + curr, 0);
}
