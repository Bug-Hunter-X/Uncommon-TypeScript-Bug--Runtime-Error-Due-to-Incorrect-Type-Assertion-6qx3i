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

//The correct way to add a number and a string is to explicitly convert the string to a number.
let result3 = add(5, parseInt("3"));
console.log(result3); //Output: 8

//Another approach is to use a union type
function addUnion(a: number | string, b: number | string): number | string{
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}
let result4 = addUnion(5, "3");
console.log(result4); //Output: 53