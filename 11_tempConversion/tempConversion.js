const convertToCelsius = function(val) {
  rawConvertedValue = (val - 32) * 5/9;
  let roundedString = rawConvertedValue.toFixed(1);
  let roundedValue = parseFloat(roundedString);
  return roundedValue;
};

const convertToFahrenheit = function(val) {
  rawConvertedValue = val * 9/5 + 32;
  let roundedString = rawConvertedValue.toFixed(1);
  let roundedValue = parseFloat(roundedString);
  return roundedValue;
};

console.log(convertToCelsius(32)); // fahrenheit to celsius, should return 0

console.log(convertToFahrenheit(0)); // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
