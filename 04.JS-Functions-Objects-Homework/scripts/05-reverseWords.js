// Write a JavaScript function reverseWordsInString(str) to reverse the characters of every word in the string 
// but leaves the words in the same order. Words are considered to be sequences of characters separated by spaces. 
// Write a JavaScript program reverseWords.js that prints on the console

function reverseWordsInString(str) {
    var words = str.split(' ');
    words = words.filter(function (n) { return n !== ''; });
    for (var i = 0; i < words.length; i++) {
        var reverce = '';
        for (var j = words[i].length - 1; j >= 0; j--) {
            reverce += words[i].charAt(j);
        }

        words[i] = reverce;
    }

    return words;
}

console.log(reverseWordsInString('Hello, how are you.').join(' '));
console.log(reverseWordsInString('Life is pretty good, isn’t it?').join(' '));
console.log(reverseWordsInString('Write a JavaScript function reverseWordsInString(str) to reverse the characters of every word in the string but leaves the words in the same order. Words are considered to be sequences of characters separated by spaces. Write a JavaScript program reverseWords.js that prints on the console').join(' '));