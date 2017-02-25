"use strict";


const factors = require('./factors');
const mergeSort = require('./mergeSort');

const dedupe = arr => {
    const map = new Map();
    return arr.filter((n) => {
        const has = !!map.get(n);
        if (!has) {
            map.set(n, true);
        }
        return !has;
    });
};

module.exports = ({ desiredNumber, requiredFactors, numberOfPairs, lowerBound, upperBound }) => {

    const factorsProduct = requiredFactors.reduce((prev, n) => prev * n);
    const targetNumber = desiredNumber / factorsProduct;
    let primeFactors = [];

    for(let i = lowerBound; i <= upperBound; i++) {
        const f = factors(i);
        primeFactors = primeFactors.concat(f);
    }

    primeFactors = dedupe(primeFactors);
    primeFactors = mergeSort(primeFactors);
    // now we have a sorted array of all the prime factors between the lower and upper bound

    
};
