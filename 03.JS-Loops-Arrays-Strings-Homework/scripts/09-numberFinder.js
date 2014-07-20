// Write a JavaScript function findMostFreqNum(value) that finds the most frequent number in an array. If multiple
// numbers appear the same maximal number of times, print the leftmost of them. Write JS program numberFinder.js
// that invokes your function with the sample input data below and prints the output at the console.

function findMostFreqNum(value) {
    var bestFreq = 0;
    var bestValue = value[0];

    var frequency = {};
    for (var i = 0; i < value.length; i++) {
        var freq = frequency[value[i]];
        freq = (freq === undefined) ? 1 : Number(freq) + 1;
        frequency[value[i]] = freq;

        if (freq > bestFreq) {
            bestFreq = freq;
            bestValue = value[i];
        }
    }

    return bestValue + " (" + bestFreq + " times)";
}

var bf = findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
console.log(bf);
bf = findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
console.log(bf);
bf = findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log(bf);