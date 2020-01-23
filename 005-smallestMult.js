function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

const lcm = (a, b) => (a * b) / gcd(a, b);

function smallestMult(n) {
  let maxLCM = 1;

  for (let i = 2; i <= n; i++) {
    maxLCM = lcm(maxLCM, i);
  }
  return maxLCM;
}
