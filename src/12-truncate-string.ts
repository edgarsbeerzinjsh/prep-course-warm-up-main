export {};

function truncateString(word: string, cha: number): string {
    // let result: string = "";
    // for (let i = 0; i < cha; i++) {
    //     result += word[i];
    // }
    
    // return result;
    return word.substring(0, cha);
    //return word.slice(0, cha);
};

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
