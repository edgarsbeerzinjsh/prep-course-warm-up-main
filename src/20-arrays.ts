export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */
function stringToArray(arr: string[]): string[] {
    //     let resultArr: string[] = []
    // for (let i = 0; i < arr.length; i++) {
    //     const names = arr[i];
    //     const nameParts = names.split(" ");
    //     resultArr.push(nameParts[0])
    //     resultArr.push(nameParts[1])
    // }
    // return resultArr;
    let resultArr: string[] = []
    arr.forEach ((names) => {
        const nameParts = names.split(" ");
        resultArr.push(nameParts[0])
        resultArr.push(nameParts[1])
    });
    return resultArr;
    //return arr[0].split(" ");
}

console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
