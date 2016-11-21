var isPrime=require('./isPrime.js');

// defines the number you want to test
var number = 1.1234;

if (isPrime(number)) {
    console.log(number, "is prime.");
} else {
    console.log(number, "isn't prime.");
}


