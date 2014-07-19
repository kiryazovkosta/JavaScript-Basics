// Write a JavaScript function findMinAndMax(value) that accepts as parameter an array of numbers. The function finds 
// the minimum and the maximum number. Write a JS program minMaxNumbers.js that invokes your function with the sample 
// input data below and prints the output at the console. 

function findMinAndMax(value) {
    var numbers = [];
    for (var i = 0; i < value.length; i++) {
        numbers.push(value[i]);
    }

    var min = numbers[0];
    var max = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }

        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    var result = [min, max];
    return result;
}

var result = findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
console.log("Min -> " + result[0] + "\nMax -> " + result[1]);
result = findMinAndMax([2, 2, 2, 2, 2]);
console.log("Min -> " + result[0] + "\nMax -> " + result[1]);
result = findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);
console.log("Min -> " + result[0] + "\nMax -> " + result[1]);