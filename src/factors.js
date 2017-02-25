"use strict";

var factorsMap = {};

/**
 * A more efficient factoring algorithm. The more you use it it remembers all the factors of numbers previously run
 * through the system by storing the results in factorsMap - indexed by number. So, while the loop in the factors
 * function is finding more factors for a given number, if it encounters a lower number which is a factor it can stop
 * going and merge it's array of found factors with those of the lower number.
 * @param n
 * @returns {*}
 */
var factors = function (n) {

    factorsMap[n] = [n];

    // loop downwards so that if I encounter a factor that is already stored I can just merge that array and
    // break the loop
    outerLoop :
        for (var i = Math.floor(n / 2); i > 0; i--) {

            if ((n % i) === 0) {
                // found a factor

                if (factorsMap[i]) {
                    // break the loop and merge factors array
                    factorsMap[n] = factorsMap[n].concat(factorsMap[i]);
                    break outerLoop;

                } else {
                    // keep going
                    factorsMap[n].push(i);
                }
            }
        }

    return factorsMap[n];
};

module.exports = factors;
