const convertToCelsius = function(tempF) {

let tempC = (tempF - 32) * (5/9);

return parseFloat(tempC.toFixed(1));

};

const convertToFahrenheit = function(tempC) {

let tempF = (9/5) * tempC + 32;

return parseFloat(tempF.toFixed(1));

};


convertToCelsius(100);
convertToFahrenheit(25);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


