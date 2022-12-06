export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

/*const min = (minArray: number[]) => {
    return Math.min(...minArray)
};

const max = (maxArray: number[]) => {
    return Math.max(...maxArray)
};
*/
const min = (minArray: number[]) => {
    let minimum = minArray[0];
    for (let i = 1; i < minArray.length; ++i) {
        if (minArray[i] < minimum) {
            minimum = minArray[i]
        }
    }
    return minimum
};

const max = (maxArray: number[]) => {
    let maximum = maxArray[0];
    for (let i = 1; i < maxArray.length; ++i) {
        if (maxArray[i] > maximum) {
            maximum = maxArray[i]
        }
    }
    return maximum
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
