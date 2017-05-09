"use strict";

const arraySortPush = require('./arraySortPush');

/**
 * Takes in a range with an lower and upper bound and returns a sorted list of quotients with some metadata
 * about each quotient
 *
 * @param lowerBound
 * @param upperBound
 * @returns {Array}
 */
module.exports = (lowerBound, upperBound) => {
    const arr = [];

    for (let i = lowerBound; i <= upperBound; i++) {
        for (let j = lowerBound; j <= upperBound; j++) {
            const quotient = i / j;
            // Note* include quotient, value and num / denom props for backwards compatability.
            // New style = value, metaList
            // Old style = quotient, numerator, denominator
            arraySortPush({
                value: quotient,
                quotient,
                numerator: i,
                denominator: j,
                metaList: [{ numerator: i, denominator: j }]
            }, 'quotient', arr);
        }
    }

    return arr;
};
