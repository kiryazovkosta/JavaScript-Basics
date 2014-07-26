// Write a JavaScript function sumTwoHugeNumbers(value) that accepts as parameter an array of the two numbers for summing.
// The input numbers are represented as strings. The result should be printed on the console.

function sumTwoHugeNumbers(value) {
    var first = reverseString(value[0]);
    var second = reverseString(value[1]);

    var result = '';
    var length = 0;
    var bigger;
    if (first.length > second.length) {
        length = second.length;
        bigger = first;
    } else {
        length = first.length;
        bigger = second;
    }

    var prev = 0;
    for (var iter = 0; iter < length; iter++) {
        var sum = parseInt(first[iter]) + parseInt(second[iter]) + prev;
        var digit = sum % 10;
        prev = sum > 9 ? 1 : 0;
        result = digit.toString() + result;
    }

    for (; iter < bigger.length; iter++) {
        sum = parseInt(bigger[iter]) + prev;
        digit = sum % 10;
        prev = sum > 9 ? 1 : 0;
        result = digit.toString() + result;
    }

    if (prev !== 0) {
        result = prev + result;
    }

    return result;
}

function reverseString(value) {
    return value.split("").reverse().join("");
}

console.log(sumTwoHugeNumbers(['155', '65']));
console.log(sumTwoHugeNumbers(['123456789', '123456789']));
console.log(sumTwoHugeNumbers(['887987345974539', '4582796427862587']));
console.log(sumTwoHugeNumbers(['347135713985789531798031509832579382573195807','817651358763158761358796358971685973163314321']));
