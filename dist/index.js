"use strict";
function sum(firstArgument) {
    var count = firstArgument;
    return function nextStep(secondArgument) {
        if (secondArgument) {
            count += secondArgument;
            return nextStep;
        }
        else {
            return count;
        }
    };
}
;
module.exports = sum;
