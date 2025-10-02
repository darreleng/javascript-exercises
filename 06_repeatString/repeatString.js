const repeatString = function(streng, nume) {
    if (nume < 0) return "ERROR";
    let word = "";
    for (let i = 0; i < nume; i++) {
        word += streng;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
