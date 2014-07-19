// Write a JavaScript function printNumbers(n) that accepts as parameter integer n. The function finds all integer 
// numbers from 1 to n that are not divisible by 4 or by 5. Write a JS program numberChecker.js that invokes your 
// function with the sample input data below and prints the output at the console. 

function printNumbers(n) {
    var numbers = [];

    for (var i = 0; i <= n; i++) {
        if (i % 4 == 0 || i % 5 == 0) {
            continue;
        }

        numbers.push(i);
    }

    if (numbers.length == 0) {
        return "no"
    } else {
        return numbers.join(", ");
    }
}

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));