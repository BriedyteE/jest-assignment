const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

test("[1, 2, 4, 5, 6] should return null", () => {
  expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toBeNull();
});

test.each([
  { a: [1, 2, 4, 5, 6], expected: 4 },
  { a: [1020, 1021, 1102, 1223], expected: 1102 },
])("given $a should return $expected", ({ a, expected }) => {
  const result = firstNonConsecutiveNumber(a);
  expect(result).toBe(expected);
});
