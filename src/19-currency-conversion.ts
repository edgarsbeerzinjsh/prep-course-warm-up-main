export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function
//function convertToUSD(price: number): string {
//    return (price * 1.4).toFixed(2);
//}
// You are allowed to change this function
/*function convertToBRL(price: number): string {
    return (price * 1.4).toFixed(2);
}*/
const EXCHANGE_RATE = 1.01;
enum TO_CURRENCY {
    ToUSD = 1.4,
    ToBRL = 6.4
}

function convertToForeign (price: number, exchangeRate: number): string {
    return (price * EXCHANGE_RATE * exchangeRate).toFixed(2)
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToForeign(price, TO_CURRENCY.ToUSD);
const priceInBRL = convertToForeign(price, TO_CURRENCY.ToBRL);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
