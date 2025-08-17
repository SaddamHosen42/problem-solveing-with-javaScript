// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

function capitalizeFirstLetter(str) {
    const words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

    }
    return words.join(" ");
}

const inputString = "hello world";
const capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString);





