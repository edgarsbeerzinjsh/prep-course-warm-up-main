import { resolveProjectReferencePath } from "typescript";

export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(num: number) {
    for (let i = 1; i < num + 1; ++i) {
        console.log("*".repeat(i))
    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
