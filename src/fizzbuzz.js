/* FizzBuzz.

For a given natural number greater than zero return:
- 'fizz' if the number is dividable by 3
- 'buzz' if the number is dividable by 5
- 'fizzbuzz' if the number is dividable by 15
- the input number if no other requirement is fulfilled
*/

function fizzbuzz(number) {
  const fizzOrEmpty = number % 3 === 0 ? "fizz" : "";
  const buzzOrEmpty = number % 5 === 0 ? "buzz" : "";

  return fizzOrEmpty + buzzOrEmpty || number;
}

module.exports = fizzbuzz;
