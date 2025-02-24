# Uncommon TypeScript Bug: Runtime Error Due to Incorrect Type Assertion

This repository demonstrates an uncommon bug in TypeScript where a type assertion is not correctly used, resulting in a runtime error.  The code compiles without errors, but fails during execution due to a type mismatch that TypeScript's type system doesn't catch in this specific scenario.

## Bug Description

The bug involves using the `+` operator with a number and a string. While TypeScript generally prevents such operations, a specific type assertion in this case allows it to pass type checking while still producing a runtime error when the code is executed in JavaScript.

## Reproduction Steps

1. Clone the repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the resulting JavaScript code using `node bug.js`.

You should see a runtime error indicating a type mismatch.

## Solution

The solution involves stricter type checking and avoiding implicit type coercion.