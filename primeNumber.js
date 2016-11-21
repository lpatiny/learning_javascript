"use strict";

var number = 10;
var square = Math.floor(Math.sqrt(number));
function isPrime(number) {
    for (var i = 1; i < square+1; i++){
        var result = number % i;
        if (result=0) {
            console.log(number, "isn't prime.")
        } else {
        }
    }
    console.log(number, "is prime.")
}

isPrime(10)