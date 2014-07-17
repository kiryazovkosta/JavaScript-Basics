// Write a JavaScript function evenNumber(value) that checks if an integer number is even.  Write JS program evenChecker.js 
// to check if a few numbers are even. The result should be printed on the console (true or false). Run the program through Node.js. 

function evenNumber(value) {
    if(value % 2 == 0){
        return true;
    } else {
        return false;
    }
}

console.log("3 -> " + evenNumber(3));
console.log("127 -> " + evenNumber(127));
console.log("588 -> " + evenNumber(588));