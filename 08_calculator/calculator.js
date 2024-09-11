const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  return a.reduce((total, element) => {
    return (total += element);
  }, 0);
};

const multiply = function (a) {
  return a.reduce((total, element) => {
    return (total *= element);
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
