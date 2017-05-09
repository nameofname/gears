"use strict";


// const timer = require('../helpers/timer');
const { expect } = require('chai');
const mapClosestProduct = require('../../src/mapClosestProduct');

describe("mapClosestProduct", () => {
    const arr1 = [
        { value: 1, metaList: ['bla']},
        { value: 2, metaList: ['bla']},
        { value: 3, metaList: ['bla']},
        { value: 4, metaList: ['bla']}
    ];
    const arr2 = [
        { value: 5, metaList: ['bla']},
        { value: 6, metaList: ['bla']},
        { value: 7, metaList: ['bla']},
        { value: 8, metaList: ['bla']}
    ];

    it('should return an array the same length as the first array passed', () => {
        const res = mapClosestProduct(arr1, arr2, 9);
        console.log(res);
        expect(res.length).to.equal(arr1.length);
    });

    // it('should modify each entry in array 1 to be closer to the desired product', () => {
    // });

});
