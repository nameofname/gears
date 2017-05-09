"use strict";


// const timer = require('../helpers/timer');
const { expect } = require('chai');
const mapClosestProduct = require('../../src/mapClosestProduct');
const mergeSort = require('../../src/mergeSort');
const sortIt = arr => mergeSort(arr, o => o.value);

describe("mapClosestProduct", () => {
    const arr1 = [
        { value: 1, metaList: ['bla']},
        { value: 2, metaList: ['bla']},
        { value: 3, metaList: ['bla']},
        { value: 4, metaList: ['bla']}
    ];
    const arr2 = [
        { value: 1, metaList: ['bla']},
        { value: 3, metaList: ['bla']},
        { value: 5, metaList: ['bla']},
        { value: 6, metaList: ['bla']},
        { value: 7, metaList: ['bla']},
        { value: 8, metaList: ['bla']}
    ];

    let result;

    it('should return an array the same length as the first array passed', () => {
        result = mapClosestProduct(arr1, arr2, 9).result;
        expect(result.length).to.equal(arr1.length);
    });

    it('should be able to take in an array that it already produced and refine the set further', () => {
        result = mapClosestProduct(result, arr2, 9).result;
        result = sortIt(result);
        result = mapClosestProduct(result, arr2, 9).result;
        expect(result.length).to.equal(arr1.length);
    });

    it('should should calculate the closest result in the meta information', () => {
        const res = mapClosestProduct(result, arr2, 9);
        expect(res.meta.closestProduct).to.equal(9);
    });

    it("should provide a helpful message if you don't include any fractions in either input array", () => {
        const res = mapClosestProduct(result, arr2, 9);
        expect(res.meta.warning).to.be.a('string');
    });

    it('should refine the results to get closer to your target if you use some fractions', () => {
        arr1.unshift({ value: 3/4, metaList: ['fraction 1']});
        arr2.unshift({ value: 5/11, metaList: ['fraction 2']});
        result = mapClosestProduct(arr1, arr2, 9).result;
        result = sortIt(result);
        result = mapClosestProduct(result, arr2, 9).result;
        result = sortIt(result);
        result = mapClosestProduct(result, arr2, 9).result;
        result = sortIt(result);
        result = mapClosestProduct(result, arr2, 9).result;
        result = sortIt(result);
        result = mapClosestProduct(result, arr2, 9).result;
        console.log('this one should be closer');
        console.log('this one should be closer');
        console.log(result);
        expect(result.length).to.equal(arr1.length);
    });

    it("should have an undefined warning if you do include fractions in your input arrays", () => {
        const res = mapClosestProduct(result, arr2, 9);
        expect(res.meta.warning).to.equal(undefined);
    });

    it("should accurately calculate closest values based on passed inputs", () => {
        const res = mapClosestProduct(arr1, arr2, 9);
        expect(res[0].value).to.equal(9);
        expect(res[0].value).to.equal(9);
        expect(res[0].value).to.equal(9);
        expect(res[0].value).to.equal(9);
        expect(res[0].value).to.equal(9);
    });

});
