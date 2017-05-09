"use strict";


// const timer = require('../helpers/timer');
const { expect } = require('chai');
const mergeSort = require('../../src/mergeSort');
const mapArray = a => a.map(n => ({ value : n }));

describe("mergeSort", () => {
    const arr = [1,2,5,6,7,2];
    const arr1 = [1,2,5,6,7,6,5,4,3,4,5,8,9,0,5,6,7,3,2,6,5,3,4,7,3,7,3,9,5];

    it('should sort this array which only has one number out of place at the end', () => {
        const sorted = mergeSort(arr);
        expect(sorted).to.equal(sorted.sort());
    });

    it('should sort this lonber array which has many numbers out of place', () => {
        const sorted = mergeSort(arr1);
        expect(sorted).to.equal(sorted.sort());
    });

    it('should sort this wicked long random array', () => {
        let arr2 = [];
        for (let i = 0; i <= 1400; i++) {
            arr2.push(Math.random() * 100);
        }
        const sorted = mergeSort(arr2);
        expect(sorted).to.equal(sorted.sort());
    });

    it('should sort this array of objects where the number is object.value', () => {
        const arr3 = mapArray(arr1);
        const sorted = mergeSort(arr3, n => n.value);
        expect(sorted).to.deep.equal(sorted.concat());
    });

});
