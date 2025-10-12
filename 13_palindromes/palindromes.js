const palindromes = function (string) {
    let cleanedString = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let reversedString = '';
    for(let i = cleanedString.length - 1; i >= 0; i--) {
        reversedString += cleanedString[i];
    }
    return (reversedString == cleanedString);
};

// Do not edit below this line
module.exports = palindromes;
