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

module.exports = ({ desiredNumber, requiredFactors, numberOfPairs, upperBound, lowerBound }) => {

    const factorsProduct = requiredFactors.reduce((prev, n) => prev * n);
    const targetNumber = desiredNumber / factorsProduct;
    let primeFactors = [];

    for(let i = lowerBound; i <= upperBound; i++) {
        const f = factors(i);
        primeFactors = primeFactors.concat(f);
    }

    primeFactors = dedupe(primeFactors);

    // TODOD !
    return primeFactors;

    return mergeSort(primeFactors);
};
