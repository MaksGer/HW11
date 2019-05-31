function sum(firstArgument: number): (secondArgument: number) => any {
    let count: number = firstArgument;
    return function nextStep(secondArgument: number): any {
        if (secondArgument) {
            count += secondArgument;
            return nextStep;
        } else {
            return count;
        }
    }
};
export = sum;