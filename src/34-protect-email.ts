export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
const protectEmail = (email: string): string => {
    const makeTwo = email.split("@");
    return makeTwo[0].slice(0, -3).slice(0, 3).concat("...@",makeTwo[1])
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com