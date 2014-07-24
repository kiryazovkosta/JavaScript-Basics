// Write a JavaScript function sumTwoHugeNumbers(value) that accepts as parameter an array of the two numbers for summing.
// The input numbers are represented as strings. The result should be printed on the console.

function sumTwoHugeNumbers(value) {
    var first = reverseString(value[0]);
    var second = reverseString(value[1]);

    var length = 0;
    var bigger;
    if (first.length > second.length) {
        length = second.length;
        bigger = first;
    } else {
        length = first.length;
        bigger = second;
    }

    for (var iter = 0; iter < length; iter++) {

    }
}

function reverseString(value) {
    return value.split("").reverse().join("");
}

sumTwoHugeNumbers(['155', '65']);
