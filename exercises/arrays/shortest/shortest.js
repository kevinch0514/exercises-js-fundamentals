/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
function shortest(array) {
  // This is your job. :)
  let shortestSoFar = array[0];

  for (let element of array) {
    if (element.length < shortestSoFar.length) {
      shortestSoFar = element;
    }
  }
  return shortestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for shortest:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(shortest(['100', '10', '1']));
  console.log(shortest(['ab', 'a', 'abc', 'abcd']));
}

module.exports = shortest;
