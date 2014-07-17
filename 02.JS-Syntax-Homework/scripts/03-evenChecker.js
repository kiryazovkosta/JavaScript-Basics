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