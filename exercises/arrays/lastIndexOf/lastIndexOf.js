/**
 * Given an array and a value, returns the index of the last occurence of
 * the value. If the value is not found, returns -1.
 *
 * The array doesn't need to contain a single type of data.
 *
 * @example
 * lastIndexOf([10, 20, 30, 20], 20); // => 3
 * lastIndexOf([10, 20, 30, 20], 17); // => -1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); // => 1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} The index of the last occurrence of the value in the
 *  array, or -1 if it's not found.
 */
function lastIndexOf(haystack, needle) {
  // This is your job. :)

  let index = -1;
  let counter = 0;

  if (counter !== haystack.length) {
    for (let element of haystack) {
      if (element === needle) {
        index = haystack.indexOf(element);
        counter = counter + 1;
      }
    }
  }
  else {
    return index;
  }
}

if (require.main === module) {
  console.log('Running sanity checks for lastIndexOf:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(lastIndexOf([1, 2, 30, -10], 480));
  console.log(lastIndexOf([1, 2, 30, -10], 30));
  console.log(lastIndexOf([1, 30, 30, -10], 30));
  console.log(lastIndexOf(['giraffe', 'giraffe', 'banana'], 'banana'));
  console.log(lastIndexOf(['giraffe', 'giraffe', 'banana'], 'giraffe'));
}

module.exports = lastIndexOf;
