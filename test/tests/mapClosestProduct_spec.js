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

    let result;

    it('should return an array the same length as the first array passed', () => {
        result = mapClosestProduct(arr1, arr2, 9);
        console.log(result);
        expect(result.length).to.equal(arr1.length);
    });

    it('should be able to take in an array that it alraedy produced and refine the set further', () => {
        result = mapClosestProduct(result, arr2, 9);
        result = mapClosestProduct(result, arr2, 9);
        console.log(result);
        expect(result.length).to.equal(arr1.length);
    });

});
