// Write a JavaScript function findMostFreqWord(value) that finds the most frequent word in a text and prints it, 
// as well as how many times it appears in format "word -> count". Consider any non-letter character as a word 
// separator. Ignore the character casing. If several words have the same maximal frequency, print all of them 
// in alphabetical order. Write JS program frequentWord.js that invokes your function with the sample input data 
// below and prints the output at the console.

function findMostFreqWord(value) {
    var words = value.toLowerCase().split(/[^A-Za-z]/);
    words = words.filter(function (n) { return n !== ''; });

    var frequent = {};
    var bestFrequent = 0;
    var currentFrequent = 0;

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var freq = frequent[word];
        currentFrequent = (freq === undefined) ? 1 : Number(freq) + 1;

        frequent[word] = currentFrequent;
        if (currentFrequent > bestFrequent) {
            bestFrequent = currentFrequent;
        }
    }

    if (currentFrequent > bestFrequent) {
        bestFrequent = currentFrequent;
    }

    var bestfrequentWords = [];
    for (var key in frequent) {
        if (frequent[key] === bestFrequent) {
            bestfrequentWords.push(key);
        }
    }

    bestfrequentWords.sort();
    for (var i = 0; i < bestfrequentWords.length; i++) {
        console.log(bestfrequentWords[i] + " -> " + bestFrequent);
    }
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');