export {};

/*
function greatest(x: number, y: number): number {
    return Math.max(x, y)
};
*/

function greatest(...x: number[]): number {
    return Math.max(...x)
};

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
