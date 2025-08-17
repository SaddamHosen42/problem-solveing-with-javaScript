// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

function factorial(n){
    if(n==0){
        return 1;
    }
    return n * factorial(n - 1);
}

const inputNumber = 5;
const factorialResult = factorial(inputNumber);
console.log(factorialResult);
