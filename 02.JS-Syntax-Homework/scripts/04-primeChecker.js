function isPrime(value) {
    if (value < 2) {
        return false;
    }

    if (value != Math.round(value)) {
        return false;
    }

    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(value) ; i++) {
        if (value % i == 0) {
            isPrime = false;
        }
    }
    return isPrime;
}

console.log("7 -> " + isPrime(7));
console.log("254 -> ", + isPrime(254));
console.log("587 -> ", + isPrime(587));
