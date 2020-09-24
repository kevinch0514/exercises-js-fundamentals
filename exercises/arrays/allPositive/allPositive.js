/**
 * Given an array of numbers, returns true if _every_ element is positive
 * and false otherwise.
 *
 * @example
 * allPositive([1, 2, 3, 4, 5]); // => true
 * allPositive([1, 2, -3, 4, 5]); // => false
 * allPositive([0, 0, 1]); // => false
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function allPositive(array) {
  // This is your job. :)
  let nonPositives = 0;
  for (let element of array) {
    if (element <= 0) {
      nonPositives = nonPositives + 1;
    }
  }

  return nonPositives === 0;
}

if (require.main === module) {
  console.log('Running sanity checks for allPositive:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(allPositive([1, 2, 3, 4, 5]));
  console.log(allPositive([1, 2, -3, 4, 5]));
  console.log(allPositive([0, 0, 1]));
}

module.exports = allPositive;
