export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

// You are allowed to change this function
function convert(price:number, currencyExch:number ):number {
    const roundedNr = (Math.round(price * 100)/100)
    const fee = roundedNr*0.01
    return (roundedNr * currencyExch+ fee)
}


const product = "You don't know JS";
const price = 12.5;
const price3 =33.3;
const priceInUSD = convert(price, 1.4);
const priceInBRL = convert(price, 5.6);
const princeInEur = convert(price3, 1.2);


console.log("Product: " + product);
console.log("Price: $" + priceInUSD.toFixed(2));
console.log("Price: R$" + priceInBRL.toFixed(2));

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
