/**
 * Given an array of numbers, returns true if _any_ element is positive
 * and false otherwise.
 *
 * @example
 * anyPositive([1, 2, 3, 4, 5]); // => true
 * anyPositive([1, 2, -3, 4, 5]); // => true
 * anyPositive([0, 0, 1]); // => true
 * anyPositive([-10, -10, -10]); // => false
 * anyPositive([-10, -10, 1]); // => true
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function anyPositive(array) {
  // This is your job. :)
  let positives = 0;
  for (let element of array) {
    if (element > 0) {
      positives = positives + 1;
    }
  }

  return positives > 0;
}

if (require.main === module) {
  console.log('Running sanity checks for anyPositive:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(anyPositive([1, 2, 3, 4, 5]));
  console.log(anyPositive([1, 2, -3, 4, 5]));
  console.log(anyPositive([0, 0, 1]));
  console.log(anyPositive([-10, -10, -10]));
}

module.exports = anyPositive;
