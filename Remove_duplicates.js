// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicates(arr) {
  const uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    if(!uniqueElements.includes(arr[i])) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}

const inputArray = [1, 2, 2, 3, 4, 4];
const outputArray = removeDuplicates(inputArray);
console.log(outputArray);