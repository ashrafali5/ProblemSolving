/*
Problem #1: Find the Maximum Number

Write a function that takes an array of numbers
and returns the largest number in the array.

Rules:
- Do NOT use Math.max()
- Use a loop
- The array will always contain at least one number

Example:
maxNumber([3, 7, 2, 9, 4])  // Output: 9
*/

function MaxNum(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(MaxNum([12, 43, 53, 23, 43, 54]));
