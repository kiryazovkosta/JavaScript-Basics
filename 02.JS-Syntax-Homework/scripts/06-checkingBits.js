// Write a JavaScript function bitChecker(value) that finds if the bit 3 an integer number (counting from 0) is 1. 
// Write JS program checkingBits.js to check a few numbers. The result (true or false) should be printed on the console.
// Run the program through Node.js. 

function bitChecker(value) {
    var position = 3;
    var number = parseInt(value);
    var bitAtPosition3 = (number >> position) & 1;

    if (bitAtPosition3 == 1) {
        return true;
    } else {
        return false;
    }
}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));
