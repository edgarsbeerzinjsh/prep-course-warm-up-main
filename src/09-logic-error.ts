export {};

function multiply(a: number, b: number, c: number): number {
  const threeNumbMult = a * b * c;
  return threeNumbMult;
}

const result = multiply(1, 3, 4);
console.log(result); // Expected output: 12
