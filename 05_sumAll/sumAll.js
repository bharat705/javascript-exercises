const sumAll = function(int1, int2) {
    
    let sum = 0;

    if (!(int1.isNumber() || int2.isNumber())) {

        return "ERROR";

    } else if (!(int1.isInteger() || int2.isInteger())) {

        return "ERROR";

    } else if (int1 < 0 || int2 < 0) {

        return "ERROR";

    } else if (int1>int2) {

        for (i=int2; i<=int1; i++) {
            sum +=i;
        }
        return sum;

    } else {

        for (i=int1; i<=int2; i++) {
            sum +=i;
        }
        return sum;
    }
};
// Do not edit below this line
module.exports = sumAll;
