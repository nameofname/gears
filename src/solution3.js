
"use strict";

const calculateQuotients = require('./calculateQuotients');
const quickFindBuddy = require('./quickFindBuddy');

// const arraySortPush = require('./arraySortPush');
const mergeSort = require('./mergeSort');

/**
 */
module.exports = ({ desiredNumber, requiredFactors, numberOfPairs, lowerBound, upperBound }) => {

    const sortedQuotients = calculateQuotients(lowerBound, upperBound);
    let requiredFactor;
    requiredFactor = requiredFactors.reduce((prev, val) => (prev * val), 1);
    const desiredProduct = desiredNumber / requiredFactor;


};

