const palindromes = function (str) {
    const stringRemove = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
    const reverseString = stringRemove.split("").reverse().join("");
    console.log(reverseString, stringRemove);
    return stringRemove === reverseString
};

// Do not edit below this line
module.exports = palindromes;
