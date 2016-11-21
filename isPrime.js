"use strict";

// module.exports(number) defines code that might be required in other code "sections", here runPrime and testPrime
module.exports=function isPrime(number) {
    if (! Number.isInteger(number)) {
        throw new Error('The number is not an integer');
    }
    if (number<0) {
        throw new Error('The number must be positive');
    }
    if (number===1 || number===0) {
        return false;
    }
    if (number===2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    var square = Math.floor(Math.sqrt(number));
    for (var i = 3; i <= square; i=i+2){
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

