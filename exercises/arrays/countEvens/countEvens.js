/**
 * Given an array of integers, returns the count of even integers in the array.
 *
 * See https://simple.wikipedia.org/wiki/Even_number
 *
 * @example
 * countEvens([1, 2, 3, 4, 5]); // => 2
 * countEvens([10, 10, 10]); // => 3
 * countEvens([1, 1, 1, 2]); // => 2
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The count of even integers in the array
 */
function countEvens(array) {
  // This is your job. :)
  let evenCounter = 0;

  for (let element of array) {
    if ((element%2) === 0) {
      evenCounter = evenCounter + 1;
    }
  }
  return evenCounter;
}

if (require.main === module) {
  console.log('Running sanity checks for countEvens:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(countEvens([1, 2, 3, 4, 5]));
  console.log(countEvens([10, 10, 10]));
}

module.exports = countEvens;
