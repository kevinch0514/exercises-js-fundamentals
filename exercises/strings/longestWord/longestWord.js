/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  // This is your job. :)
  let array = string.split(' ');
  let longestSoFar = array[0];

  // console.log(array);

  for (let element of array) {
    if (element.length > longestSoFar.length) {
      longestSoFar = element;
    }
  }
  // console.log(longestSoFar);
  return longestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(longestWord('Running sanity checks for longestWord:'));
  console.log(longestWord('Hello. Hi.'));
}

module.exports = longestWord;
