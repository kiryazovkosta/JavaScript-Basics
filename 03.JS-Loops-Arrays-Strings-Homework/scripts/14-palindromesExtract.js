// Write a JavaScript function findPalindromes(value) that extracts from a given text all palindromes, e.g. 
// "ABBA", "lamal", "exe". Write JS program palindromesExtract.js that invokes your function with the sample 
// input data below and prints the output at the console.

function findPalindromes(value) {
    var palindromes = [];
    var words = value.toLowerCase().split(/[^A-Za-z]/);
    words = words.filter(function (n) { return n !== ''; });

    for (var index in words) {
        if (checkPalindrom(words[index])) {
            palindromes.push(words[index]);
        }
    }

    return palindromes;
}

function checkPalindrom(word) {
    return word === word.split('').reverse().join('');
}

console.log(findPalindromes("There is a man, his name was Bob.").join(", "));