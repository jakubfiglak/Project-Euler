function largestPrimeFactor(number) {
  const primeFactors = [];

  while (!(number % 2)) {
    primeFactors.push(2);
    number /= 2;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (!(number % i)) {
      primeFactors.push(i);
      number /= i;
    }
  }

  primeFactors.push(number);

  return Math.max(...primeFactors);
}
