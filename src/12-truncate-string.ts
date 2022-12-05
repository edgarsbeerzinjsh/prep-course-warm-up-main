export {};

function truncateString(word: string, cha: number): string {
    return word.slice(0, cha);
};

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
