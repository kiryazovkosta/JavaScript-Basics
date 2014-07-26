// Write a JavaScript function findLargestBySumOfDigits(nums) that takes as an input a sequence of positive integer numbers 
// and returns the element with the largest sum of its digits. The function should take a variable number of arguments. 
// It should return undefined when 0 arguments are passed or when some of the arguments is not an integer number. 
// Write a JS program largestSumOfDigits.js that invokes your function with the sample input data below and prints 
// its output at the console. 

function findLargestBySumOfDigits(nums) {
    if (arguments.length === 0) {
        return 'undefined';
    }

    var numbers = [];
    for (var i = 0; i < arguments.length; i++) {
        if (isInt(arguments[i])) {
            numbers.push(parseInt(arguments[i]));
        } else {
            return 'undefined';
        }
    }

    var maxSum = Number.MIN_VALUE;
    var currentSum = Number.MIN_VALUE;
    var biggestSumNumber = Number.MIN_VALUE;
    for (i = 0; i < numbers.length; i++) {
        currentSum = calculateSumOfDigits(numbers[i]);
        if (currentSum > maxSum) {
            maxSum = currentSum;
            biggestSumNumber = numbers[i];
        }
    }

    return biggestSumNumber;
}

function isInt(value) { 
    return !isNaN(value) && parseInt(Number(value)) === value;
}

function calculateSumOfDigits(number) {
    number = Math.abs(number);
    var sum = 0
    while (number > 0) {
        var digit = number % 10;
        number = number / 10;
        sum = sum + digit;
    }

    return sum;
}


console.log(findLargestBySumOfDigits(5, 10, 15, 111));
console.log(findLargestBySumOfDigits(33, 44, -99, 0, 20));
console.log(findLargestBySumOfDigits('hello'));
console.log(findLargestBySumOfDigits(5, 3.3));