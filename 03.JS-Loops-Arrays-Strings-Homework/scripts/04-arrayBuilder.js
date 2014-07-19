// Write a JavaScript function createArray(value) that allocates array of 20 integers and initializes each element 
// by its index multiplied by 5. Write JS program arrayBuilder.js that invokes your function with the sample input 
// data below and prints the output at the console.

function createArray(value) {
    var size = value;
    var numbers = new Array(size);
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = i * 5;
    }

    return numbers;
}

function createArray2(value) {
    var size = value;
    var numbers = [];
    for (var i = 0; i < size; i++) {
        numbers.push(i * 5);
    }

    return numbers;
}

console.log(createArray(20).join(", "));
console.log(createArray2(20).join(", "));