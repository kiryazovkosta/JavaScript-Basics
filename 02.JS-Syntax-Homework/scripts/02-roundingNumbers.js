// Write a JavaScript function roundNumber(value) that rounds floating-point number using Math.round(), Math.floor(). 
// Write a JS program roundingNumbers.js that rounds a few sample values. Run the program through Node.js. 

function roundNumber(value) {
    console.log("Round: " + Math.round(value));
    console.log("Floor: " + Math.floor(value));
}

roundNumber(22.7);
roundNumber(12.3);
roundNumber(58.7);