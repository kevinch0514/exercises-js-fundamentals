/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
  // This is your job. :)
  let summation = 0

  for (let element of array) {
    summation = summation + element;
  }
  return summation;
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(sum([1, 2, 3]));
  console.log(sum([10, 100, 1000]));
}

module.exports = sum;
