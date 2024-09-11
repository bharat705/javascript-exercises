const palindromes = function (str) {
  rawStr = removePunctuation(str).toLowerCase();
  if (rawStr === reverseString(rawStr)) {
    return true;
  } else {
    return false;
  }
};

function removePunctuation(str) {
  return str
    .split("")
    .filter((char) => {
      return /[a-zA-z0-9]/.test(char);
    })
    .join("");
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
// Do not edit below this line
module.exports = palindromes;
