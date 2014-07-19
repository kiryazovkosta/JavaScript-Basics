// Write a JavaScript function findMaxSequence(value) that finds the maximal sequence of equal elements in an array 
// and returns the result as an array. If there is more than one sequence with the same maximal length, print the 
// rightmost one. Write JS program sequenceFinder.js that invokes your function with the sample input data below 
// and prints the output at the console. 

function findMaxSequence(value) {
    var bestIndex = 0;
    var bestLength = 1;
    var currentIndex = 0;
    var currentLength = 1;

    for (var i = 1; i < value.length; i++) {
        if (value[i] === value[i-1]) {
            currentLength++;
        } else {
            if (currentLength >= bestLength) {
                bestIndex = currentIndex;
                bestLength = currentLength;
            }

            currentIndex = i;
            currentLength = 1;
        }
    }

    var resultArray = [];
    for (var i = 0; i < bestLength; i++) {
        resultArray.push(value[bestIndex]);
    }

    return resultArray;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]).join(", "));
console.log(findMaxSequence(['happy']).join(", "));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']).join(", "));