const findMultiples = require("../src/findMultiples");

test.each([
  { a: 2, b: 6, expected: [2, 4, 6] },
  { a: 30, b: 120, expected: [30, 60, 90, 120] },
])("given $a and $b should return $expected", ({ a, b, expected }) => {
  const result = findMultiples(a, b);
  expect(result).toEqual(expected);
});
