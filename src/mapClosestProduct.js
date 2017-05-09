"use strict";


module.exports = (arr1, arr2, desiredProduct) => {

    let closestProduct;
    let currentSearchIdx;
    let hasFraction = false;

    const out = arr1.map((obj, idx) => {

        // TODO - numerator and denominator need to be formatted appropriately into the metaList.
        const { value: currValue, metaList: currMetaList, numerator: currNumerator, denominator: currDenominator } = obj;
        const newObj = { metaList: currMetaList || [] };
        const desiredBuddy = desiredProduct / currValue;
        const distanceFromDesired = (n) => Math.abs(desiredBuddy - n);
        hasFraction = hasFraction || (0 < currValue && currValue < 1);

        currentSearchIdx = (currentSearchIdx === undefined) ? arr2.length - 1 : currentSearchIdx;

        let buddy = arr2[currentSearchIdx];
        let distanceFromBuddy = distanceFromDesired(buddy.value);

        // TODO - validate I am choosing the correct numbers inside this loop - if I am off by 1 the answers will be close, but incorrect!
        // TODO - validate I am choosing the correct numbers inside this loop - if I am off by 1 the answers will be close, but incorrect!
        findBestBuddy :
            for (var i = (currentSearchIdx - 1); i >= 0; i--) {

                const currCandidate = arr2[i];
                const currDelta = distanceFromDesired(currCandidate.value);
                const gotCloser = currDelta <= distanceFromBuddy;
                hasFraction = hasFraction || (0 < currCandidate.value && currCandidate.value < 1);

                if (gotCloser) {
                    distanceFromBuddy = currDelta;
                    buddy = currCandidate;
                } else {
                    break findBestBuddy;
                }
            }

        const currProduct = currValue * buddy.value;
        const isClosest = (Math.abs(desiredProduct - currProduct) < Math.abs(desiredProduct - closestProduct));

        if (idx === 0) {
            closestProduct = currProduct;
        } else {
            closestProduct = isClosest ? currProduct : closestProduct;
        }

        newObj.value = currValue * buddy.value;
        newObj.metaList = newObj.metaList.concat(buddy.metaList);

        return newObj;
    });

    if (!hasFraction) {
        console.warn('WARNING! None of the values passed to mapClosestProduct are fractions. This will limit the effectiveness of your solution');
    }
    console.log('found closest product ', closestProduct);
    return out;
};
