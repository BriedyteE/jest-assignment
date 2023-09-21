const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");

test.each([
  { a: [6, 2, 1, 8, 10], expected: 16 },
  { a: [20, 30, 20, 50, 50], expected: 30 },
])("given $a should return $expected", ({ a, expected }) => {
  const result = sumWithoutHighestAndLowest(a);
  expect(result).toBe(expected);
});
