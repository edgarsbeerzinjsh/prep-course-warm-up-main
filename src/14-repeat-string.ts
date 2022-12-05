export {};

const repeatString = (word: string, times: number) => {
    return word.repeat(times)
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
