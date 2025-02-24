function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 will be 8
let result2 = subtract(10, 4); // result2 will be 6

console.log(result1); // Output: 8
console.log(result2); // Output: 6

//This is the uncommon bug, type assertion is not correctly used, resulting in a runtime error.
let result3 = add(5, "3"); // This line will cause a runtime error in JavaScript but not compile-time error in TypeScript