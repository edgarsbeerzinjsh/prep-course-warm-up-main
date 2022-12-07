export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(startnum: number, endnum: number): number {
    let sumMy: number = 0;
    for (let i = startnum; i < endnum + 1; i++) {
        sumMy += i;
    };
    return sumMy 
};

console.log(sumAll(1, 4)); // Expected output: 10
