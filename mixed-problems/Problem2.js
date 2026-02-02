/*
Problem #2: Count Even Numbers

Write a function that takes an array of numbers
and returns how many EVEN numbers are in the array.

Rules:
- Use a loop
- Use condition (if)
- Do NOT use built-in filter methods

Example:
countEven([1, 2, 3, 4, 6])  // Output: 3
*/

export function totalEvenNum(arr) {
  let countEven = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      countEven++;
    }
  }
  return countEven;
}
console.log(totalEvenNum([4, 3, 6, 8, 12, 16, 17]));
