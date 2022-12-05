export {};

function concatenate(firstWord: string, secondWord: string, thirdWord: string): string {
  // Write the body of this function to concatenate three words together with space between them
  return firstWord.concat(' ', secondWord, ' ', thirdWord);
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
