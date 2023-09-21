// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = (array) => {
  const min = Math.min(...array);
  const max = Math.max(...array);

  const numsToAdd = array.filter((num) => num !== min && num !== max);
  return numsToAdd.reduce((acc, curr) => acc + curr, 0);
};

module.exports = sumWithoutHighestAndLowest;
