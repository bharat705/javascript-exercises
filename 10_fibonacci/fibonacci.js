const fibonacci = function (num) {
  const series = [1, 1];
  if (num < 0) {
    return "OOPS";
  } else if (num == 0) {
    return 0;
  } else if (num <= series.length) {
    return series[num - 1];
  } else {
    for (i = series.length; i < num; i++) {
      series[i] = series[i - 1] + series[i - 2];
    }
    return series[num - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
