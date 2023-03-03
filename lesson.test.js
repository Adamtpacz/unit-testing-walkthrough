// Import our function from main.js
const modules = require('./main')
// console.log(modules)
const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive
const isNegative = modules.isNegative

// This is where all of our test cases belong
// Test case for isEven
test('It should return true when called with an even number', () => {
    expect(isEven(4)).toBe(true)
})

// Test case for divide
test('It should return a number when called', () => {
    // if b is 0, the return would be Infinity. Infinity is still considered a number. Thus, passing test.
    expect(typeof divide(4, 0)).toBe('number')
})

// Test case for isPositive
test("It should return true when passed a positive number", () => {
    // Base case: where a number is true
    expect(isPositive(3)).toBe(true)
    // Edge case: consider 0 as true
    expect(isPositive(0)).toBe(true)
});

test("It should return false when passed a negative number", () => {
    expect(isPositive(-3)).toBe(false);
});