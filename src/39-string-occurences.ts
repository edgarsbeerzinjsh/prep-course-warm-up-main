export {};

const count = (sent: string, name: string) => {
    let words = sent.toLowerCase().split(" ")
    let times = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i] == name.toLowerCase()) times++
    }
    return times
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
