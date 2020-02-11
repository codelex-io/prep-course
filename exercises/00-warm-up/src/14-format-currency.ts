export {};

/**
 * Currency Formatting
 *
 * The business has informed you that prices must have 2 decimal places
 * They must also start with the currency symbol
 * Write a function that transforms numbers into the format £0.00
 */

// You are allowed to change only this function
function formatCurrency() {}

function calculateSalesTax(price: number) {
  return price * 0.21;
}

const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: " + formatCurrency(price));
console.log("Sales tax: " + formatCurrency(salesTax));
console.log("Total: " + formatCurrency(price + salesTax));

/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/