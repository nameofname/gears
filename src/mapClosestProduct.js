"use strict";

const noFractionWarning = 'WARNING! None of the values passed to mapClosestProduct are fractions. This will limit the effectiveness of your solution';

module.exports = (arr1, arr2, desiredProduct) => {

    let closestProduct;
    let closestObject;
    let currSearchIdx;
    let hasFraction = false;

    const result = arr1.map((obj, idx) => {

        // TODO - numerator and denominator need to be formatted appropriately into the metaList.
        const { value: currValue, metaList: currMetaList } = obj;
        const newObj = { metaList: currMetaList || [] };
        const desiredBuddy = desiredProduct / currValue;
        const distanceFromDesired = (n) => Math.abs(desiredBuddy - n);
        hasFraction = hasFraction || (0 < currValue && currValue < 1);

        currSearchIdx = (currSearchIdx === undefined) ? arr2.length - 1 : currSearchIdx;

        let buddy = arr2[currSearchIdx];
        let distanceFromBuddy = distanceFromDesired(buddy.value);

        findBestBuddy :
            for (let i = (currSearchIdx - 1); i >= 0; i--) {

                const currCandidate = arr2[i];
                const currDelta = distanceFromDesired(currCandidate.value);
                const gotCloser = currDelta <= distanceFromBuddy;
                hasFraction = hasFraction || (0 < currCandidate.value && currCandidate.value < 1);

                if (gotCloser) {
                    distanceFromBuddy = currDelta;
                    buddy = currCandidate;
                } else {
                    currSearchIdx = i + 1;
                    break findBestBuddy;
                }
            }

        const currProduct = currValue * buddy.value;
        const isClosest = (Math.abs(desiredProduct - currProduct) < Math.abs(desiredProduct - closestProduct));
        newObj.value = currProduct;
        newObj.metaList = newObj.metaList.concat(buddy.metaList);

        if (idx === 0) {
            closestProduct = currProduct;
            closestObject = newObj;
        } else if (isClosest) {
            closestProduct = currProduct;
            closestObject = newObj;
        }

        return newObj;
    });

    return {
        result,
        meta : {
            closestProduct,
            closestObject,
            warning : hasFraction ? undefined : noFractionWarning
        }
    };
};
