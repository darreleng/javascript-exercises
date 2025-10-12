const fibonacci = function(n) {
    let sequence = [0, 1];
    if (n < 0) return "OOPS";
    else for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    console.log(sequence);
    return sequence[n]
};

fibonacci();

// Do not edit below this line
module.exports = fibonacci;
