/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  // This is your job. :)
  let longestSoFar = array[0];

  for (let element of array) {
    if (element.length > longestSoFar.length) {
      longestSoFar = element;
    }
  }
  return longestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(longest(['1', '10', '100']));
  console.log(longest(['a', 'ab', 'abc', 'abcd']));
}

module.exports = longest;
