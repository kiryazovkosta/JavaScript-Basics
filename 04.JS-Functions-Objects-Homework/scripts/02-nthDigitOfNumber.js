// Write a JavaScript function findNthDigit(arr) that accepts as a parameter an array of two numbers num and n 
// and returns the n-th digit of given decimal number num counted from right to left. Return undefined when the 
// number does not have n-th digit. Write a JS program nthDigitOfNumber.js that invokes your function with the 
// sample input data below and prints the output at the console. 

function findNthDigit(arr) {
    var position = arr[0];
    var number = arr[1].toString().replace(".", "");

    var val = undefined;
    for (var i = number.length - 1, downer = position; i >= 0; i--, downer--) {
        if (downer === 1) {
            val = number.charAt(i);
        }
    }

    if (val === undefined) {
        val = 'The number doesn\'t have ' + position + ' digits';
    }

    return val;
}

console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));