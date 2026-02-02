/*
Problem #3: Sum of All Numbers

Write a function that takes an array of numbers
and returns the sum of all numbers.

Rules:
- Use a loop
- Do NOT use reduce() or other built-in sum functions

Example:
sumArray([1, 2, 3, 4])  // Output: 10
*/

export function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5]));
