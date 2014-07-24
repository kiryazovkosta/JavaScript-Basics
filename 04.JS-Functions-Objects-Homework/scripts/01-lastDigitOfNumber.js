// Write a JavaScript function lastDigitAsText(number) that returns the last digit of given integer as an English word. 
// Write a JS program lastDigitOfNumber.js that invokes your function with the sample input data below and prints the 
// output at the console.

function lastDigitAsText(number) {

    var number = Number(number);
    var digit = Math.abs(number) % 10;
    return DigitAsText(digit);
}

function DigitAsText(digit) {
    if (typeof(digit) !== 'number') {
        return 'Invalid';
    }

    var text = '';
    switch (digit) {
        case 0: text = 'Zero'; break;
        case 1: text = 'One'; break;
        case 2: text = 'Two'; break;
        case 3: text = 'Three'; break;
        case 4: text = 'Four'; break;
        case 5: text = 'Five'; break;
        case 6: text = 'Six'; break;
        case 7: text = 'Seven'; break;
        case 8: text = 'Eight'; break;
        case 9: text = 'Nine'; break;
        default: text = 'Incorrect';
    }

    return text;
}

console.log(lastDigitAsText(6));
console.log(lastDigitAsText(-55));
console.log(lastDigitAsText(133));
console.log(lastDigitAsText(14567));