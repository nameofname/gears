"use strict";

let usedProducts;
const mergeSort = require('./mergeSort');

/**
 * Build a list of unique pairs
 * NOTE!! THIS FUNCTION IS COMPLETELY USELESS TO MY GEARS PROBLEM as does not produce a sorted list. 
 * @param sortedQuotients
 * @returns {Array}
 */
module.exports = (sortedQuotients) => {
    console.warn('This function does not produce a sorted list, and is therefore pretty much useless jack ass.');
    let pairs = [];
    usedProducts = new Map();

    for (let i=0; i < sortedQuotients.length; i++) {
        for (let j=i; j < sortedQuotients.length; j++) {
            const one = sortedQuotients[i];
            const two = sortedQuotients[j];
            const obj = {
                value: one.quotient * two.quotient,
                factors: [one, two]
            };
            // de-dupe products
            if (!usedProducts.get(obj.value)) {
                pairs.push(obj);
                usedProducts.get(obj.value, true);
            }
        }
    }

    return mergeSort(pairs, o => o.value);
};
