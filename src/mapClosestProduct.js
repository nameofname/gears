"use strict";


module.exports = (arr1, arr2, desiredProduct) => {
// module.exports = (arrayOfNumbers, sortedQuotients, desiredProduct) => {

    let closestProduct;
    let currentSearchIdx;

    const out = arr1.map((obj, idx) => {

        const { value: currValue, numerator: currNumerator, denominator: currDenominator } = obj;
        const desiredBuddy = desiredProduct / currValue;
        const distanceFromDesired = (n) => Math.abs(desiredBuddy - n);

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

        obj.value = currValue * buddy.value;
        obj.metaList = obj.metaList || [];
        obj.metaList = obj.metaList.concat(buddy.metaList);

        return obj;
    });

    console.log('found closest product ', closestProduct);
    return out;
};
