export {};

function add(...args: number[]) {
    let sum = args[0];
    for (let i = 1; i < args.length; ++i) {
        sum += args[i]
    }
    return sum
}

function subtract(...args: number[]) {
    let sub = args[0];
    for (let i = 1; i < args.length; ++i) {
        sub -= args[i]
    }
    return sub
}

function sum(args: number[]) {
    let sum = 0;
    for (let i = 0; i < args.length; ++i) {
        sum += args[i]
    }
    return sum
}

function multiply(args: number[]) {
    let multiplySum = 1;
    for (let i = 0; i < args.length; ++i) {
        multiplySum *= args[i]
    }
    return multiplySum
}

function power(number: number, power: number) {
    return number **= power
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
