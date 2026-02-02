/*
Problem #4: Count Odd Numbers

Write a function that takes an array of numbers
and returns how many ODD numbers are in the array.

Rules:
- Use a loop
- Do NOT use filter() or other built-ins

Example:
countOdd([1, 2, 3, 4, 5])  // Output: 3
*/

export function countOddNumbers(arr) {
  let countOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      countOdd++;
    }
  }
  return countOdd;
}
console.log(countOddNumbers([4, 6, 7, 8, 9])); // 2
console.log(countOddNumbers([12, 42, 45, 64, 63])); // 2
console.log(countOddNumbers([12, 42, 45])); // 1
