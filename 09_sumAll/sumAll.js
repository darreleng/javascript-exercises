const sumAll = function(a, b) {
    // 1. Input Validation (Good job including this!)
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    // 2. Determine the start and end points
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    // 3. Loop and accumulate the sum directly
    let totalSum = 0;
    for (let i = start; i <= end; i++) {
        totalSum += i;
    }

    return totalSum;
};

console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;
