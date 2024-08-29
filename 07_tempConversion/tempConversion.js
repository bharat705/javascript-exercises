const convertToCelsius = function(degreeFahrenheit) {

  let degreeCelsius = (degreeFahrenheit - 32) * 5 / 9;
  return Math.round(degreeCelsius * 10) / 10;

};

const convertToFahrenheit = function(degreeCelsius) {

  let degreeFahrenheit = (degreeCelsius * 9 / 5 + 32);
  return Math.round(degreeFahrenheit * 10)/10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
