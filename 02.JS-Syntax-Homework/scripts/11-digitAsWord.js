﻿// Write a JavaScript function convertDigitToWord(value) that prints the name of an integer number n (0<n<10) in English 
// using switch statement. Write JS program digitAsWord.js that prints a few digits on the console. Run the program through Node.js. 

function convertDigitToWord(value) {
    var digitAsWord;

    var number = Number(value);
    if (!isNaN(number)) {
        switch (number) {
            case 1:
                digitAsWord = "one";
                break;
            case 2:
                digitAsWord = "two";
                break;
            case 3:
                digitAsWord = "three";
                break;
            case 4:
                digitAsWord = "four";
                break;
            case 5:
                digitAsWord = "five";
                break;
            case 6:
                digitAsWord = "six";
                break;
            case 7:
                digitAsWord = "seven";
                break;
            case 8:
                digitAsWord = "eight";
                break;
            case 9:
                digitAsWord = "nine";
                break;
            default:
                digitAsWord = "argument out of range";
                break;
        }

        return digitAsWord;
    } else {
        return "Invalid input argument"
    }

}

console.log(convertDigitToWord(8));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(5));