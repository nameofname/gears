"use strict";

const timer = require('../helpers/timer');
const { expect } = require('chai');
const solution3 = require('../../src/solution3');

describe.only("solution3", () => {

    it('should return an object with a result array, and meta information', () => {
        const result = solution3({desiredNumber: 127, requiredFactors: [40], numberOfPairs: 3, lowerBound: 13, upperBound: 50});
        expect(Array.isArray(result.result)).to.equal(true);
        expect(result.meta instanceof Object).to.equal(true);
        // console.log(JSON.stringify(result.meta))
        console.log(result.meta.closestProduct * 40)
    });

    it('should be very, very fast', () => {
        const time = timer(() => {
            return solution3({desiredNumber: 127, requiredFactors: [40], numberOfPairs: 3, lowerBound: 13, upperBound: 50});
        });
        expect(time).to.be.lessThan(500);
    });

});
