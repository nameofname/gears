"use strict";


/**
 * Implementation of merge sort.
 *
 * To aid in the implementation of the gears problem, you can optionally pass a method to get the value of each
 * entry in the array. This is helpful in the gears problem because I don't use a normal array of numbers, each array
 * entry is an object with a value property pointing at a number.
 *
 * Example sorting object with structure :
 *      const arr = {
 *          value : n,
 *          ...
 *      }
 *
 *      const sorted = mergeSort(arr, n => n.value);
 *
 * const
 * @param arr
 * @returns {*}
 */
let _getVal;
let _defaultValueGetter = n => n;
const mergeSort = (arr) => {

    if (arr.length === 1) {
        return arr;
    } else {

        const halfWay = Math.floor(arr.length / 2);
        let arr1 = arr.slice(0, halfWay);
        let arr2 = arr.slice(halfWay, arr.length);

        if (arr1.length > 1) {
            arr1 = mergeSort(arr1);
        }
        if (arr2.length > 1) {
            arr2 = mergeSort(arr2);
        }

        return _merge(arr1,arr2);
    }
};


const _merge = (arr1, arr2) => {
    const arr = [];
    const len = arr1.length + arr2.length;
    let lowIdx = 0;
    let highIdx = 0;

    for (let i = 0; i < len; i++) {
        const left = arr1[lowIdx];
        const right = arr2[highIdx];

        if (left === undefined) {
            arr[i] = right;
            highIdx++;
        } else if (right === undefined) {
            arr[i] = left;
            lowIdx++;
        } else {
            if (_getVal(left) <= _getVal(right)) {
                arr[i] = left;
                lowIdx++;
            } else {
                arr[i] = right;
                highIdx++;
            }
        }

    }
    return arr;
};


module.exports = (arr, valGetter) => {
    if (valGetter) {
        _getVal = valGetter;
    } else {
        _getVal = _defaultValueGetter;
    }
    return mergeSort(arr);
};
