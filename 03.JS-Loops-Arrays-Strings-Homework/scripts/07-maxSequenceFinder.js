// Write a JavaScript function findMaxSequence(value) that finds the maximal increasing sequence in an array of
// numbers and returns the result as an array. If there is no increasing sequence the function returns 'no'.
// Write JS program maxSequenceFinder.js that invokes your function with the sample input data below and prints
// the output at the console.

function findMaxSequence(value) {
    var numbers = [];
    for (var i = 0; i < value.length; i++) {
        numbers.push(Number(value[i]));
    }

    var bestIndex = 0;
    var bestLength = 1;
    var currentIndex = 0;
    var currentLength = 1;

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > bestLength) {
                bestLength = currentLength;
                bestIndex = currentIndex;
            }
            currentIndex = i;
            currentLength = 1;
        }
    }

    if (currentLength > bestLength) {
        bestLength = currentLength;
        bestIndex = currentIndex;
    }

    var resultArray = [];
    for (var i = 0; i < bestLength; i++) {
        resultArray.push(numbers[bestIndex + i]);
    }
    return resultArray;
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));