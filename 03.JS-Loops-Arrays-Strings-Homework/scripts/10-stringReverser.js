// Write a JavaScript function reverseString(value) that reverses string and returns it. Write JS program 
// stringReverser.js that invokes your function with the sample input data below and prints the output at the console. 

function reverseString(value) {
    var reversed = "";
    for (var i = value.length - 1; i >= 0; i--) {
        reversed += value.charAt(i);
    }
    return reversed;
}
 
console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));