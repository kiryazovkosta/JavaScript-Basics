// Write a JavaScript function checkBrackets(value) to check if in a given expression the brackets are put correctly. 
// Write JS program bracketsChecker.js that invokes your function with the sample input data below and prints the 
// output at the console. 

function checkBrackets(value) {
    var openBracketCounter = 0;
    var closeBracketCounter = 0;
    for (var i = 0; i < value.length; i++) {
        if (value.charAt(i) === '(') {
            openBracketCounter++;
        } else if (value.charAt(i) === ')') {
            closeBracketCounter++;
        }
    }

    if (openBracketCounter === closeBracketCounter) {
        return "correct";
    } else {
        return "incorrect";
    }
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));