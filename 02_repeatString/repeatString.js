function repeatString(string, num) {
    let newString = ""
    if (num<0) {
        return 'ERROR';
    } else if (num === 0) {
        return newString;
    } else {
        for(i=0; i<num; i++) {
            newString += string;
            if (i===num-1) {
                return newString;
            }
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
