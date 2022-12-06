export {};

/**
 * Write function first5 which returns first five elements from the array
 */
 function first5(num: number[]): number[] {
    let num5: number[] = [];
    for (let i = 0; i < 5; ++i) {
        num5.push(num[i])
    }
    return num5
  }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; // You are NOT allowed to edit this line
const first5Numbers = first5(numbers); // You are NOT allowed to edit this line

console.log(first5Numbers); // Expected result: [1, 2, 3, 4, 5]
