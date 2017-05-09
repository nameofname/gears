"use strict";


const { expect } = require('chai');
const calculateQuotients = require('../../src/calculateQuotients');
const timer = require('../helpers/timer');

describe("calculateQuotients", () => {

    it('should complete the quotient calculations quickly', () => {
        const time = timer(() => {
            const quotients = calculateQuotients(13, 50);
            console.log(quotients.length);
        });
        expect(time).to.be.lessThan(2000);
    });

    it('should return an array of objects, and each should have a value, quotient, etc.', () => {
        const result = calculateQuotients(1, 10);
        expect(result.length).to.equal(63);
        result.forEach(o => {
            expect(o.value).to.be.a('number');
            expect(o.quotient).to.be.a('number');
            expect(o.numerator).to.be.a('number');
            expect(o.denominator).to.be.a('number');
            expect(o.metaList[0].numerator).to.be.a('number');
            expect(o.metaList[0].denominator).to.be.a('number');
        });
    });

});



