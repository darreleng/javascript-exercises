const reverseString = function(input) {
    let output = "";
        
    for (let x = input.length - 1; x >= 0; x--) { 
        output += input[x]; 
    }
    return output; 
};


// Do not edit below this line
module.exports = reverseString;
