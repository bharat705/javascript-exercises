const reverseString = function(string) {
    const wordsInString = [];
    for (i=0; i<string.length; i++) {
        wordsInString.unshift(string[i]);
    }
    return wordsInString.join("")
};

// Do not edit below this line
module.exports = reverseString;
