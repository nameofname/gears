
"use strict";

const calculateQuotients = require('./calculateQuotients');
const mapClosestProduct = require('./mapClosestProduct');
const mergeSort = require('./mergeSort');

/**
 */
module.exports = ({ desiredNumber, requiredFactors, numberOfPairs, lowerBound, upperBound }) => {

    const sortedQuotients = calculateQuotients(lowerBound, upperBound);
    const requiredFactor = requiredFactors.reduce((prev, val) => (prev * val), 1);
    const desiredProduct = desiredNumber / requiredFactor;
    let result;


    for (let i = 0; i <= numberOfPairs; i++) {
        result = mapClosestProduct().result;
        result = mergeSort(result, o => o.value);
    }

};

