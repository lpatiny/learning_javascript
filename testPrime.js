// import the file/ package isPrime. './' precises that the package is in your current directory, otherwise it searches in npmjs
var isPrime=require('./isPrime.js');

//you must test all the critical / limit cases
if (isPrime(0)) throw new Error('0 is prime!');
if (isPrime(1)) throw new Error('1 is prime!');
if (! isPrime(2)) throw new Error('2 is not prime!');
if (! isPrime(3)) throw new Error('3 is not prime!');
if (isPrime(4)) throw new Error('4 is prime!')
if (isPrime(144)) throw new Error('144 is prime!');
if (isPrime(145)) throw new Error('144 is prime!');
